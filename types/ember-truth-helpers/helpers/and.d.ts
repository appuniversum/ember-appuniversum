// Temporary type since we still support ember-truth-helpers v3. v4 has its own types, so we can remove this when we drop v3 support.
import type Helper from '@ember/component/helper';

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

type FirstFalsy<T> = T extends [infer Item]
  ? Item
  : T extends [infer Head, ...infer Tail]
    ? TruthConvert<Head> extends false
      ? Head
      : TruthConvert<Head> extends true
        ? FirstFalsy<Tail>
        : Head | FirstFalsy<Tail>
    : undefined;

interface AndSignature<T extends MaybeTruthy[]> {
  Args: {
    Positional: T;
  };
  Return: FirstFalsy<T>;
}

export default class AndHelper<const T extends MaybeTruthy[]> extends Helper<
  AndSignature<T>
> {
  compute(params: T): FirstFalsy<T>;
}
