const {NODE_ENV = 'development', SESS_DURATION = 31536000000} = process.env;

const IN_PROD = NODE_ENV === 'production';

export default {
  sameSite: true,
  secure: IN_PROD,
  maxAge: SESS_DURATION,
};
