import { vocab } from "./vocab";

import { embeddingWeight } from "./matrix/embeddingWeight"; // 2D матрица, размер: 251x200
import { posEmbeddingWeight } from "./matrix/posEmbeddingWeight";  // 2D матрица, размер: 400x200

import { layerNormFinalBias } from "./matrix/layerNormFinalBias"; // 1D вектор, размер: 200
import { layerNormFinalWeight } from "./matrix/layerNormFinalWeight"; // 1D вектор, размер: 200

import { layers0Linear1Bias } from "./matrix/layers0Linear1Bias"; // 1D вектор, размер: 800
import { layers0Linear1Weight } from "./matrix/layers0Linear1Weight"; // 2D матрица, размер: 800x200
import { layers0Linear2Bias } from "./matrix/layers0Linear2Bias"; // 1D вектор, размер: 200
import { layers0Linear2Weight } from "./matrix/layers0Linear2Weight"; // 2D матрица, размер: 200x800
import { layers0Norm1Bias } from "./matrix/layers0Norm1Bias"; // 1D вектор, размер: 200
import { layers0Norm1Weight } from "./matrix/layers0Norm1Weight"; // 1D вектор, размер: 200
import { layers0Norm2Bias } from "./matrix/layers0Norm2Bias"; // 1D вектор, размер: 200
import { layers0Norm2Weight } from "./matrix/layers0Norm2Weight"; // 1D вектор, размер: 200
import { layers0SelfAttnInProjBias } from "./matrix/layers0SelfAttnInProjBias"; // 1D вектор, размер: 600
import { layers0SelfAttnInProjWeight } from "./matrix/layers0SelfAttnInProjWeight"; // 2D матрица, размер: 600x200
import { layers0SelfAttnOutProjBias } from "./matrix/layers0SelfAttnOutProjBias"; // 1D вектор, размер: 200
import { layers0SelfAttnOutProjWeight } from "./matrix/layers0SelfAttnOutProjWeight"; // 2D матрица, размер: 200x200

import { layers1Linear1Bias } from "./matrix/layers1Linear1Bias"; // 1D вектор, размер: 800
import { layers1Linear1Weight } from "./matrix/layers1Linear1Weight"; // 2D матрица, размер: 800x200
import { layers1Linear2Bias } from "./matrix/layers1Linear2Bias"; // 1D вектор, размер: 200
import { layers1Linear2Weight } from "./matrix/layers1Linear2Weight"; // 2D матрица, размер: 200x800
import { layers1Norm1Bias } from "./matrix/layers1Norm1Bias"; // 1D вектор, размер: 200
import { layers1Norm1Weight } from "./matrix/layers1Norm1Weight"; // 1D вектор, размер: 200
import { layers1Norm2Bias } from "./matrix/layers1Norm2Bias"; // 1D вектор, размер: 200
import { layers1Norm2Weight } from "./matrix/layers1Norm2Weight"; // 1D вектор, размер: 200
import { layers1SelfAttnInProjBias } from "./matrix/layers1SelfAttnInProjBias"; // 1D вектор, размер: 600
import { layers1SelfAttnInProjWeight } from "./matrix/layers1SelfAttnInProjWeight"; // 2D матрица, размер: 600x200
import { layers1SelfAttnOutProjBias } from "./matrix/layers1SelfAttnOutProjBias"; // 1D вектор, размер: 200
import { layers1SelfAttnOutProjWeight } from "./matrix/layers1SelfAttnOutProjWeight"; // 2D матрица, размер: 200x200

import { layers2Linear1Bias } from "./matrix/layers2Linear1Bias"; // 1D вектор, размер: 800
import { layers2Linear1Weight } from "./matrix/layers2Linear1Weight"; // 2D матрица, размер: 800x200
import { layers2Linear2Bias } from "./matrix/layers2Linear2Bias"; // 1D вектор, размер: 200
import { layers2Linear2Weight } from "./matrix/layers2Linear2Weight"; // 2D матрица, размер: 200x800
import { layers2Norm1Bias } from "./matrix/layers2Norm1Bias"; // 1D вектор, размер: 200
import { layers2Norm1Weight } from "./matrix/layers2Norm1Weight"; // 1D вектор, размер: 200
import { layers2Norm2Bias } from "./matrix/layers2Norm2Bias"; // 1D вектор, размер: 200
import { layers2Norm2Weight } from "./matrix/layers2Norm2Weight"; // 1D вектор, размер: 200
import { layers2SelfAttnInProjBias } from "./matrix/layers2SelfAttnInProjBias"; // 1D вектор, размер: 600
import { layers2SelfAttnInProjWeight } from "./matrix/layers2SelfAttnInProjWeight"; // 2D матрица, размер: 600x200
import { layers2SelfAttnOutProjBias } from "./matrix/layers2SelfAttnOutProjBias"; // 1D вектор, размер: 200
import { layers2SelfAttnOutProjWeight } from "./matrix/layers2SelfAttnOutProjWeight"; // 2D матрица, размер: 200x200

import { layers3Linear1Bias } from "./matrix/layers3Linear1Bias"; // 1D вектор, размер: 800
import { layers3Linear1Weight } from "./matrix/layers3Linear1Weight"; // 2D матрица, размер: 800x200
import { layers3Linear2Bias } from "./matrix/layers3linear2Bias"; // 1D вектор, размер: 200
import { layers3Linear2Weight } from "./matrix/layers3Linear2Weight"; // 2D матрица, размер: 200x800
import { layers3Norm1Bias } from "./matrix/layers3Norm1Bias"; // 1D вектор, размер: 200
import { layers3Norm1Weight } from "./matrix/layers3Norm1Weight"; // 1D вектор, размер: 200
import { layers3Norm2Bias } from "./matrix/layers3Norm2Bias"; // 1D вектор, размер: 200
import { layers3Norm2Weight } from "./matrix/layers3Norm2Weight"; // 1D вектор, размер: 200
import { layers3SelfAttnInProjBias } from "./matrix/layers3SelfAttnInProjBias"; // 1D вектор, размер: 600
import { layers3SelfAttnInProjWeight } from "./matrix/layers3SelfAttnInProjWeight"; // 2D матрица, размер: 600x200
import { layers3SelfAttnOutProjBias } from "./matrix/layers3SelfAttnOutProjBias"; // 1D вектор, размер: 200
import { layers3SelfAttnOutProjWeight } from "./matrix/layers3SelfAttnOutProjWeight"; // 2D матрица, размер: 200x200

import { outputWeight } from "./matrix/outputWeight"; // 2D матрица, размер: 251x200
import { outputBias } from "./matrix/outputBias"; // 1D вектор, размер: 251

const TEMPERATURE = 0.8;

export const tokenize = (text: string, vocab: { [key: number]: string }): number[] => {
    const charToIdx: { [key: string]: number } = {};
    for (const [idx, char] of Object.entries(vocab)) {
        charToIdx[char] = parseInt(idx);
    }
    const tokens: number[] = [];
    for (const char of text) {
        tokens.push(charToIdx[char] ?? charToIdx['[UNK]']);
    }
    return tokens;
};

const detokenize = (tokens: number[], vocab: { [key: number]: string }): string => {
    return tokens.map(t => vocab[t] ?? '[UNK]').join('');
};

// Транспонирование матрицы
const transpose = (matrix: number[][]): number[][] => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result: number[][] = Array.from({ length: cols }, () => Array(rows));
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[j][i] = matrix[i][j];
        }
    }
    return result;
};

// Умножение матриц
const matMul = (a: number[][], b: number[][]): number[][] => {
    const rowsA = a.length;
    const colsA = a[0].length;
    const rowsB = b.length;
    const colsB = b[0].length;
    if (colsA !== rowsB) throw new Error("Несовместимые размеры");
    const result: number[][] = Array.from({ length: rowsA }, () => Array(colsB).fill(0));
    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += a[i][k] * b[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
};

// Сложение матриц
const matAdd = (a: number[][], b: number[][]): number[][] => {
    return a.map((row, i) => row.map((val, j) => val + b[i][j]));
};

// Умножение матрицы на скаляр
const matScalarMul = (matrix: number[][], scalar: number): number[][] => {
    return matrix.map(row => row.map(v => v * scalar));
};

const gelu = (x: number): number => {
    return 0.5 * x * (1 + Math.tanh(Math.sqrt(2 / Math.PI) * (x + 0.044715 * Math.pow(x, 3))));
};

// Softmax для матрицы
const softmax = (matrix: number[][]): number[][] => {
    return matrix.map(row => {
        const maxVal = Math.max(...row);
        const expRow = row.map(v => Math.exp(v - maxVal));
        const sumExp = expRow.reduce((s, v) => s + v, 0);
        return expRow.map(v => v / sumExp);
    });
};

// Layer Norm
const layerNorm = (matrix: number[][], gamma: number[], beta: number[]): number[][] => {
    const eps = 1e-8;
    return matrix.map(row => {
        const mean = row.reduce((s, v) => s + v, 0) / row.length;
        const variance = row.reduce((s, v) => s + (v - mean) ** 2, 0) / row.length;
        const std = Math.sqrt(variance + eps);
        return row.map((v, j) => ((v - mean) / std) * gamma[j] + beta[j]);
    });
};

// Токен-эмбеддинги и позиционные эмбеддинги
const tokenEmbedding = embeddingWeight;
const posEmbedding = posEmbeddingWeight;

// Финальная норма
const finalLNWeight = layerNormFinalWeight;
const finalLNBias = layerNormFinalBias;

// Выходной слой (транспонируем вес для удобства)
const outputWeightT = transpose(outputWeight);
const outputBiasVec = outputBias;

// Функция разделения in_proj весов и bias на Q, K, V
function splitInProj(weight: number[][], bias: number[]): {
    Wq: number[][]; Wk: number[][]; Wv: number[][];
    bq: number[];   bk: number[];   bv: number[];
} {
    const d = 200; // размерность модели

    const Wq = weight.slice(0, d);
    const Wk = weight.slice(d, 2*d);
    const Wv = weight.slice(2*d, 3*d);

    const bq = bias.slice(0, d);
    const bk = bias.slice(d, 2*d);
    const bv = bias.slice(2*d, 3*d);

    return {
        Wq: transpose(Wq),
        Wk: transpose(Wk),
        Wv: transpose(Wv),
        bq, bk, bv
    };
}

// Подготовка данных для всех слоёв
const layerParams = [
    // слой 0
    {
        ...splitInProj(layers0SelfAttnInProjWeight, layers0SelfAttnInProjBias),
        Wo: transpose(layers0SelfAttnOutProjWeight),
        bo: layers0SelfAttnOutProjBias,
        norm1Weight: layers0Norm1Weight,
        norm1Bias: layers0Norm1Bias,
        norm2Weight: layers0Norm2Weight,
        norm2Bias: layers0Norm2Bias,
        ffn1Weight: transpose(layers0Linear1Weight),
        ffn1Bias: layers0Linear1Bias,
        ffn2Weight: transpose(layers0Linear2Weight),
        ffn2Bias: layers0Linear2Bias,
    },
    // слой 1
    {
        ...splitInProj(layers1SelfAttnInProjWeight, layers1SelfAttnInProjBias),
        Wo: transpose(layers1SelfAttnOutProjWeight),
        bo: layers1SelfAttnOutProjBias,
        norm1Weight: layers1Norm1Weight,
        norm1Bias: layers1Norm1Bias,
        norm2Weight: layers1Norm2Weight,
        norm2Bias: layers1Norm2Bias,
        ffn1Weight: transpose(layers1Linear1Weight),
        ffn1Bias: layers1Linear1Bias,
        ffn2Weight: transpose(layers1Linear2Weight),
        ffn2Bias: layers1Linear2Bias,
    },
    // слой 2
    {
        ...splitInProj(layers2SelfAttnInProjWeight, layers2SelfAttnInProjBias),
        Wo: transpose(layers2SelfAttnOutProjWeight),
        bo: layers2SelfAttnOutProjBias,
        norm1Weight: layers2Norm1Weight,
        norm1Bias: layers2Norm1Bias,
        norm2Weight: layers2Norm2Weight,
        norm2Bias: layers2Norm2Bias,
        ffn1Weight: transpose(layers2Linear1Weight),
        ffn1Bias: layers2Linear1Bias,
        ffn2Weight: transpose(layers2Linear2Weight),
        ffn2Bias: layers2Linear2Bias,
    },
    // слой 3
    {
        ...splitInProj(layers3SelfAttnInProjWeight, layers3SelfAttnInProjBias),
        Wo: transpose(layers3SelfAttnOutProjWeight),
        bo: layers3SelfAttnOutProjBias,
        norm1Weight: layers3Norm1Weight,
        norm1Bias: layers3Norm1Bias,
        norm2Weight: layers3Norm2Weight,
        norm2Bias: layers3Norm2Bias,
        ffn1Weight: transpose(layers3Linear1Weight),
        ffn1Bias: layers3Linear1Bias,
        ffn2Weight: transpose(layers3Linear2Weight),
        ffn2Bias: layers3Linear2Bias,
    }
];

// Self-Attention слой
function attentionLayer(input: number[][], Wq: number[][], Wk: number[][], Wv: number[][], bq: number[], bk: number[], bv: number[], Wo: number[][], bo: number[]): number[][] {
    const Q = matMul(input, Wq).map((row, i) => row.map((v, j) => v + bq[j]));
    const K = matMul(input, Wk).map((row, i) => row.map((v, j) => v + bk[j]));
    const V = matMul(input, Wv).map((row, i) => row.map((v, j) => v + bv[j]));

    // Attention scores
    const Kt = transpose(K);
    const scores = matMul(Q, Kt);
    const dk = Q[0].length;
    const scaled = matScalarMul(scores, 1 / Math.sqrt(dk));

    // Causal mask
    for (let i = 0; i < scaled.length; i++) {
        for (let j = i + 1; j < scaled[i].length; j++) {
            scaled[i][j] = -Infinity;
        }
    }

    const weights = softmax(scaled);
    const context = matMul(weights, V);
    // Out projection
    const out = matMul(context, Wo).map((row, i) => row.map((v, j) => v + bo[j]));
    return out;
}

// Трансформерный блок
function transformerBlock(input: number[][], p: typeof layerParams[0]): number[][] {
    // 1. Attention с residual
    const attnOut = attentionLayer(input, p.Wq, p.Wk, p.Wv, p.bq, p.bk, p.bv, p.Wo, p.bo);
    const residual1 = matAdd(input, attnOut);
    const norm1 = layerNorm(residual1, p.norm1Weight, p.norm1Bias);

    // 2. FFN
    // Первый линейный слой
    const ffnHidden = matMul(norm1, p.ffn1Weight).map((row, i) =>row.map((v, j) => v + p.ffn1Bias[j]));
    // Активация GELU
    const activated = ffnHidden.map(row => row.map(gelu));
    // Второй линейный слой
    const ffnOut = matMul(activated, p.ffn2Weight).map((row, i) => row.map((v, j) => v + p.ffn2Bias[j]));

    // 3. Residual и норма
    const residual2 = matAdd(norm1, ffnOut);
    const output = layerNorm(residual2, p.norm2Weight, p.norm2Bias);
    return output;
}

// Создание последовательности эмбеддингов с позиционными
function createEmbeddingSequence(tokens: number[]): number[][] {
    const seqLen = tokens.length;
    const embSeq = tokens.map(idx => tokenEmbedding[idx]);
    const result: number[][] = [];
    for (let i = 0; i < seqLen; i++) {
        const posVec = posEmbedding[i] ?? new Array(200).fill(0);
        result.push(embSeq[i].map((v, j) => v + posVec[j]));
    }
    while (result.length < posEmbeddingWeight.length) {
        result.push(new Array(200).fill(0));
    }
    return result;
}

// Семплирование следующего токена
function sampleFromDistribution(probs: number[]): number {
    const r = Math.random();
    let cum = 0;
    for (let i = 0; i < probs.length; i++) {
        cum += probs[i];
        if (r <= cum) return i;
    }
    return probs.length - 1;
}

// генерация следующего токена
export const createNewToken = (text: string) => {
    const tokenIds = tokenize(text, vocab);
    const embSeq = createEmbeddingSequence(tokenIds);

    let out = embSeq;
    for (let i = 0; i < 4; i++) {
        out = transformerBlock(out, layerParams[i]);
    }

    // Берём вектор последнего реального токена
    const lastRealIndex = tokenIds.length - 1;
    const lastTokenEmb = out[lastRealIndex];

    // Финальная норма
    const normalized = layerNorm([lastTokenEmb], finalLNWeight, finalLNBias)[0];

    // Линейный слой
    const logits = normalized.map((_, j) => {
        let sum = 0;
        for (let k = 0; k < normalized.length; k++) {
            sum += normalized[k] * outputWeightT[k][j];
        }
        return sum + outputBiasVec[j];
    });

    // Температура и softmax
    const tempered = logits.map(v => v / TEMPERATURE);
    const probs = softmax([tempered])[0];

    const nextTokenId = sampleFromDistribution(probs);
    return {token: detokenize([nextTokenId], vocab), probs: probs};
};