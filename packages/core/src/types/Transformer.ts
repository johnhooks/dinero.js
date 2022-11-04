import type { Currency } from './Currency';

export type TransformerOptions<TAmount> = {
  readonly units: readonly TAmount[];
  readonly decimal?: string;
  readonly currency: Currency<TAmount>;
};

export type Transformer<TAmount, TOutput> = (
  options: TransformerOptions<TAmount>
) => TOutput;
