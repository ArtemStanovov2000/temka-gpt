import React, { useState } from 'react';
import { stylesDarkTextDisplay } from './style';
import { createNewToken, tokenize } from '../createNewToken';
import { tokensExample } from '../tokensExample';
import { train } from '../train';

import { tokenEmbedding } from "../matrix/tokenEmbedding";
import { positionEmbedding } from "../matrix/positionEmbedding";

import { Wk1 } from "../matrix/layer1/Wk1";
import { Wo1 } from "../matrix/layer1/Wo1";
import { Wq1 } from "../matrix/layer1/Wq1";
import { Wv1 } from "../matrix/layer1/Wv1";
import { FFN_W11 } from "../matrix/layer1/FFN_W11";
import { FFN_W21 } from "../matrix/layer1/FFN_W21";
import { betaAfterAttention_1 } from "../matrix/layer1/betaAfterAttention_1";
import { gammaAfterAttention_1 } from "../matrix/layer1/gammaAfterAttention_1";
import { betaAfterFFN_1 } from "../matrix/layer1/betaAfterFFN_1";
import { gammaAfterFFN_1 } from "../matrix/layer1/gammaAfterFFN_1";

import { Wk2 } from "../matrix/layer2/Wk2";
import { Wo2 } from "../matrix/layer2/Wo2";
import { Wq2 } from "../matrix/layer2/Wq2";
import { Wv2 } from "../matrix/layer2/Wv2";
import { FFN_W12 } from "../matrix/layer2/FFN_W12";
import { FFN_W22 } from "../matrix/layer2/FFN_W22";
import { betaAfterAttention_2 } from "../matrix/layer2/betaAfterAttention_2";
import { gammaAfterAttention_2 } from "../matrix/layer2/gammaAfterAttention_2";
import { betaAfterFFN_2 } from "../matrix/layer2/betaAfterFFN_2";
import { gammaAfterFFN_2 } from "../matrix/layer2/gammaAfterFFN_2";

import { Wk3 } from "../matrix/layer3/Wk3";
import { Wo3 } from "../matrix/layer3/Wo3";
import { Wq3 } from "../matrix/layer3/Wq3";
import { Wv3 } from "../matrix/layer3/Wv3";
import { FFN_W13 } from "../matrix/layer3/FFN_W13";
import { FFN_W23 } from "../matrix/layer3/FFN_W23";
import { betaAfterAttention_3 } from "../matrix/layer3/betaAfterAttention_3";
import { gammaAfterAttention_3 } from "../matrix/layer3/gammaAfterAttention_3";
import { betaAfterFFN_3 } from "../matrix/layer3/betaAfterFFN_3";
import { gammaAfterFFN_3 } from "../matrix/layer3/gammaAfterFFN_3";

import { Wk4 } from "../matrix/layer4/Wk4";
import { Wo4 } from "../matrix/layer4/Wo4";
import { Wq4 } from "../matrix/layer4/Wq4";
import { Wv4 } from "../matrix/layer4/Wv4";
import { FFN_W14 } from "../matrix/layer4/FFN_W14";
import { FFN_W24 } from "../matrix/layer4/FFN_W24";
import { betaAfterAttention_4 } from "../matrix/layer4/betaAfterAttention_4";
import { gammaAfterAttention_4 } from "../matrix/layer4/gammaAfterAttention_4";
import { betaAfterFFN_4 } from "../matrix/layer4/betaAfterFFN_4";
import { gammaAfterFFN_4 } from "../matrix/layer4/gammaAfterFFN_4";

import { linearLayer } from "../matrix/linearLayer";

const gradientConfig = {
  clipNorm: 1.2,
  clipValue: { min: -2.0, max: 2.0 },
  monitorFrequency: 100
};

// Функция для скачивания файла
const downloadFile = (data: any, filename: string) => {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Функция для сбора всех матриц в один объект
const collectAllMatrices = () => {
  return {
    embeddings: {
      tokenEmbedding,
      positionEmbedding
    },
    layer1: {
      Wk1,
      Wo1,
      Wq1,
      Wv1,
      FFN_W11,
      FFN_W21,
      betaAfterAttention_1,
      gammaAfterAttention_1,
      betaAfterFFN_1,
      gammaAfterFFN_1
    },
    layer2: {
      Wk2,
      Wo2,
      Wq2,
      Wv2,
      FFN_W12,
      FFN_W22,
      betaAfterAttention_2,
      gammaAfterAttention_2,
      betaAfterFFN_2,
      gammaAfterFFN_2
    },
    layer3: {
      Wk3,
      Wo3,
      Wq3,
      Wv3,
      FFN_W13,
      FFN_W23,
      betaAfterAttention_3,
      gammaAfterAttention_3,
      betaAfterFFN_3,
      gammaAfterFFN_3
    },
    layer4: {
      Wk4,
      Wo4,
      Wq4,
      Wv4,
      FFN_W14,
      FFN_W24,
      betaAfterAttention_4,
      gammaAfterAttention_4,
      betaAfterFFN_4,
      gammaAfterFFN_4
    },
    output: {
      linearLayer
    },
    metadata: {
      exportDate: new Date().toISOString(),
      gradientConfig,
      modelLayers: 4
    }
  };
};

const DarkTextDisplay: React.FC = () => {
  const [inputText, setInputText] = useState('Привет');
  const [displayText, setDisplayText] = useState('Привет');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isTraining, setIsTraining] = useState(false);

  const handleStart = async () => {
    if (isProcessing) return;

    setIsProcessing(true);
    let currentString = inputText;
    setDisplayText(currentString);

    while (currentString.length < 64) {
      try {
        const newToken = await Promise.resolve(createNewToken(currentString));
        currentString += newToken;
        setDisplayText(currentString);
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (error) {
        console.error('Error in createNewToken:', error);
        break;
      }
    }

    setIsProcessing(false);
  };

  const handleStartTraining = () => {
    if (isTraining) return;

    setIsTraining(true);
    const trainingIterations = 1000;

    // Синхронный цикл обучения (блокирует UI, как и требуется)
    console.time()
    for (let i = 0; i < trainingIterations; i++) {
      console.log(train(tokensExample, 0.01, gradientConfig), "Training iteration:", i + 1);
    }
    console.timeEnd()

    // После завершения обучения собираем все матрицы
    const allMatrices = collectAllMatrices();
    
    // Скачиваем как JSON файл
    downloadFile(allMatrices, `model_weights_${new Date().toISOString().replace(/[:.]/g, '-')}.json`);
    
    console.log('Training completed and weights saved!');
    
    setIsTraining(false);
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
          <button
            onClick={handleStartTraining}
            disabled={isTraining}
            style={{
              ...stylesDarkTextDisplay.button,
              ...(isTraining ? { opacity: 0.6 } : {})
            }}
          >
            {isTraining ? 'Обучение...' : 'Начать обучение'}
          </button>
        </div>
      </div>

      {displayText && (
        <div style={stylesDarkTextDisplay.displayArea}>
          {displayText}
          {isProcessing && <div>Длина: {displayText.length}/64</div>}
        </div>
      )}
    </div>
  );
};

export default DarkTextDisplay;