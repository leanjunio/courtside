/**
 * Returns the environment variable in the .env file
 *
 * @param name - the key from the .env file to grab
 */
export function getEnvironmentVariables(name?: string): string {
  if (!name) {
    throw new Error(`The passed environment variable is: ${name}`);
  }

  const variable = process.env[name];

  if (!variable) {
    throw new Error(`process.env.${name} cannot be found in the .env file`);
  }

  return variable;
}
