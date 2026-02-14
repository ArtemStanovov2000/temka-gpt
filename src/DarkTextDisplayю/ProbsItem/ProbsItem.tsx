import type { FC } from 'react';
import { stylesProbsItem } from './style';

type Props = {
    value: number;
    label: string;
};

const PropsItem: FC<Props> = ({ value, label }) => {
    const MIN_VISIBLE = 1e-18;
    const MAX_VAL = 1;
    const P = 0.3;

    // Защита от нуля и отрицательных
    let safeValue = value;
    if (safeValue <= 0) {
        safeValue = MIN_VISIBLE;
    } else {
        safeValue = Math.min(safeValue, MAX_VAL);
    }

    // Степенное преобразование
    const transformed = Math.pow(safeValue, P);
    const minTrans = Math.pow(MIN_VISIBLE, P);
    const maxTrans = Math.pow(MAX_VAL, P); // = 1

    // Нормализация в [0, 1]
    const normalized = (transformed - minTrans) / (maxTrans - minTrans);
    const barHeightPercent = normalized * 100;


    return (
        <div style={stylesProbsItem.item}>
            <div style={stylesProbsItem.column}>
                <div style={{
                    width: '100%',
                    height: `${barHeightPercent}%`,
                    minHeight: '2px',
                    backgroundColor: '#4caf50',
                    margin: "8px 4px 0 4px"
                }} />
            </div>
            <p style={stylesProbsItem.label}>{label}</p>
        </div>
    );
};

export default PropsItem;