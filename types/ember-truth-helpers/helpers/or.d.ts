// Temporary type since we still support ember-truth-helpers v3. v4 has its own types, so we can remove this when we drop v3 support.
import Helper from '@ember/component/helper';

export type Falsy =
  | {
      isTruthy: false;
    }
  | undefined
  | null
  | false
  | 0
  | -0
  | 0n
  | ''
  | never[];

type TruthConvert<T> = T extends {
  isTruthy: true;
}
  ? true
  : T extends {
        isTruthy: false;
      }
    ? false
    : T extends {
          isTruthy: boolean;
        }
      ? boolean
      : T extends undefined | null
        ? false
        : T extends boolean
          ? T
          : T extends number
            ? T extends 0 | -0
              ? false
              : number extends T
                ? boolean
                : true
            : T extends bigint
              ? T extends 0n
                ? false
                : bigint extends T
                  ? boolean
                  : true
              : T extends string
                ? T extends ''
                  ? false
                  : string extends T
                    ? boolean
                    : true
                : T extends never[]
                  ? false
                  : T extends ArrayLike<unknown>
                    ? boolean
                    : T extends object
                      ? true
                      : boolean;

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

type FirstTruthy<T> = T extends [infer Item]
  ? Item
  : T extends [infer Head, ...infer Tail]
    ? TruthConvert<Head> extends true
      ? Head
      : TruthConvert<Head> extends false
        ? FirstTruthy<Tail>
        : Exclude<Head, Falsy> | FirstTruthy<Tail>
    : undefined;

interface OrSignature<T extends MaybeTruthy[]> {
  Args: {
    Positional: T;
  };

  Return: FirstTruthy<T>;
}

export default class OrHelper<T extends MaybeTruthy[]> extends Helper<
  OrSignature<T>
> {
  compute(params: T): FirstTruthy<T>;
}
