export function asyncComponent<T extends (...args: any) => Promise<any>>(
  fn: T
): (...args: Parameters<T>) => Awaited<ReturnType<T>> {
  return fn as unknown as (...args: Parameters<T>) => Awaited<ReturnType<T>>;
}

export function cache<_T extends Function>(fn: _T): _T {
  type T = _T extends (...args: any) => any ? _T : (...args: any) => any;

  type FnWithCaches = T & {
    __entries?: [(...args: Parameters<T>) => boolean, ReturnType<T>][];
  };

  const cachedFn = function (
    ...args: Parameters<T extends (...args: any) => any ? T : never>
  ) {
    if (!(cachedFn as FnWithCaches).__entries) {
      (cachedFn as FnWithCaches).__entries = [];
    }

    for (const entry of (cachedFn as FnWithCaches).__entries!) {
      if (entry[0](...args)) {
        return entry[1];
      }
    }

    const newEntry: [(...args: Parameters<T>) => boolean, ReturnType<T>] = [
      (...otherArgs) => otherArgs.every((a: any, i: number) => a === args[i]),
      fn(...args),
    ];
    (cachedFn as FnWithCaches).__entries!.push(newEntry);

    return newEntry[1];
  };

  return cachedFn as unknown as _T;
}
