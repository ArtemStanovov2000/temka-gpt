import React, { useState } from 'react';
import { stylesDarkTextDisplay } from './style';
import { createNewToken } from '../createNewToken';
import { vocab } from '../vocab';
import PropsItem from './ProbsItem/ProbsItem';

const vocabList = Object.entries(vocab)

console.log(vocabList)

const DarkTextDisplay: React.FC = () => {
  const [inputText, setInputText] = useState('Привет');
  const [displayText, setDisplayText] = useState('Привет');
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentProbs, setCurrentProbs] = useState([0]);

  const handleStart = async () => {
    if (isProcessing) return;

    setIsProcessing(true);
    let currentString = inputText;
    setDisplayText(currentString);

    while (currentString.length < 64) {
      try {
        const newToken = await Promise.resolve(createNewToken(currentString));
        currentString += newToken.token;
        setDisplayText(currentString);
        setCurrentProbs(newToken.probs)
        await new Promise(resolve => setTimeout(resolve, 500));
      } catch (error) {
        console.error('Error in createNewToken:', error);
        break;
      }
    }

    setIsProcessing(false);
  };

  return (
    <div style={stylesDarkTextDisplay.container}>
      <div style={stylesDarkTextDisplay.header}>
        <div style={stylesDarkTextDisplay.inputRow}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Введите текст..."
            style={stylesDarkTextDisplay.textField}
          />
          <button
            onClick={handleStart}
            disabled={isProcessing}
            style={{
              ...stylesDarkTextDisplay.button,
              ...(isProcessing ? { opacity: 0.6 } : {})
            }}
          >
            {isProcessing ? 'Обработка...' : 'Старт'}
          </button>
        </div>
      </div>

      {displayText && (
        <div style={stylesDarkTextDisplay.displayArea}>
          {displayText}
          {isProcessing && <div>Длина: {displayText.length}/64</div>}
        </div>
      )}

      <div style={stylesDarkTextDisplay.probsList}>
        {currentProbs.map((element, index) => (<PropsItem key={index} label={vocabList[index][1]} value={element}></PropsItem>))}
      </div>
    </div>
  );
};

export default DarkTextDisplay;