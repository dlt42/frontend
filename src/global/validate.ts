import { Result } from 'true-myth';
import { ZodError, ZodType, ZodTypeDef } from 'zod';

const convertZodError = (error: ZodError) =>
  error.issues.map(
    (i) => `${i.path.length ? `${i.path.join('.')} -> ` : ''}${i.message}`
  );

type Schema<T> = ZodType<T, ZodTypeDef, T>;

type ResponseValidationResult<T> = Result<T, string[]>;

export const validateResponse = <T>(
  schema: Schema<T>,
  value: unknown
): ResponseValidationResult<T> => {
  const parseResult = schema.safeParse(value);
  return parseResult.success
    ? Result.ok(parseResult.data)
    : Result.err(convertZodError(parseResult.error));
};
