import type { Currency } from '@dinero.js/currencies';

export type DineroSnapshot<TAmount> = {
  readonly amount: TAmount;
  readonly currency: Currency<TAmount>;
  readonly scale: TAmount;
};
