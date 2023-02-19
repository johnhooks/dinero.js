import type { Currency } from './Currency';

export type TransformerOptions<TAmount, TValue> = {
  readonly value: TValue;
  readonly currency: Currency<TAmount>;
};

export type Transformer<TAmount, TOutput, TValue> = (
  options: TransformerOptions<TAmount, TValue>
) => TOutput;
