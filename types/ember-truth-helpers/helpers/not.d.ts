// Temporary type since we still support ember-truth-helpers v3. v4 has its own types, so we can remove this when we drop v3 support.
type MaybeTruthy =
  | {
      isTruthy: boolean;
    }
  | undefined
  | null
  | boolean
  | number
  | bigint
  | string
  | unknown[]
  | object;

export default function not(...params: MaybeTruthy[]): boolean;
