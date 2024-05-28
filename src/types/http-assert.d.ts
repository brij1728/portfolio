declare module 'http-assert' {
  function assert(
    value: unknown,
    status: number,
    msg?: string,
    opts?: Record<string, unknown>,
  ): void;
  function assert(
    value: unknown,
    status: number,
    opts?: Record<string, unknown>,
  ): void;

  namespace assert {
    class HttpError extends Error {
      status: number;
      statusCode: number;
      expose: boolean;
    }
  }

  export = assert;
}
