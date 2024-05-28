declare module 'shimmer' {
  type OriginalMethod = (...args: unknown[]) => unknown;
  type WrapMethod = (original: OriginalMethod) => OriginalMethod;

  interface Shimmer {
    (nodule: Record<string, unknown>, name: string, wrapper: WrapMethod): void;
    wrap(
      nodule: Record<string, unknown>,
      name: string,
      wrapper: WrapMethod,
    ): void;
    massWrap(
      nodules: Record<string, unknown>[],
      names: string[],
      wrapper: WrapMethod,
    ): void;
    unwrap(nodule: Record<string, unknown>, name: string): void;
    massUnwrap(nodules: Record<string, unknown>[], names: string[]): void;
  }

  const shimmer: Shimmer;

  export = shimmer;
}
