import crypto from 'crypto';

function hashPassword(password: string) {
  const sha256 = crypto.createHash('sha256');
  const hash = sha256.update(password).digest('base64');
  return hash;
}

export default hashPassword;
