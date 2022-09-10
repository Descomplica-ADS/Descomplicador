import crypto from 'crypto';

export const encrypt = (string: string) => {
  const salt = 'DescomplicadorSaltPassword';
  return crypto.pbkdf2Sync(string, salt, 1000, 64, `sha512`).toString(`hex`);
};
