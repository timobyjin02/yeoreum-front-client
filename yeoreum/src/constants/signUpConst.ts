export const SIGN_UP_INITIAL = {
  email: {
    value: '',
    validity: true,
    message: '',
  },
  emailCode: {
    value: '',
    validity: false,
    message: '',
  },
  password: {
    value: '',
    validity: undefined,
    message: '',
  },
  passwordConfirm: {
    value: '',
    validity: undefined,
    message: '',
  },
};

export const SIGN_UP_MESSAGE_BY_TYPE = {
  email: {
    success: '',
    error: '이메일 형식에 맞지 않습니다.',
  },
  emailCode: {
    success: '인증되었습니다.',
    error: '일치하지 않습니다.',
  },
  password: {
    success: '안전한 비밀번호입니다.',
    error: '특수문자, 영어, 숫자를 합친 6자 이상 14자 이하 ',
  },
  prePopulatedPassword: {
    success: '한 번 더 입력해주세요',
    error: '비밀번호를 먼저 입력해주세요.',
  },
  passwordConfirm: {
    success: '일치합니다.',
    error: '일치하지 않습니다.',
  },
};

export const SIGN_UP_REGEX_BY_TYPE = {
  email:
    /([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])/,
  password: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,14}$/,
};

export const SIGN_UP_PROFILE_INITIAL = {
  file: {
    value: '',
    validity: true,
    message: '',
  },
  gender: {
    value: '',
    validity: false,
    message: '',
  },
  nickname: {
    value: '',
    validity: undefined,
    message: '',
  },
  major: {
    value: '',
    validity: false,
    message: '',
  },
  description: {
    value: '',
    validity: false,
    message: '',
  },
};

export const SIGN_UP_PROFILE_MESSAGE_BY_TYPE = {
  nickname: {
    success: '2글자 이상 10글자 이하 영문, 한글, 숫자 조합',
    error: '2글자 이상 10글자 이하 영문, 한글, 숫자 조합',
  },
  nicknameDuplication: {
    success: '사용 가능한 닉네임입니다.',
    error: '중복된 닉네임입니다.',
  },
  description: {
    success: '안전한 비밀번호입니다.',
    error: '한글, 숫자, 영어의 조합으로 2자 이상 10자 이하',
  },
  passwordConfirm: {
    success: '일치합니다.',
    error: '소개를 입력해주세요.',
  },
  major: {
    success: '일치합니다.',
    error: '유효하지 않은 학과명입니다.',
  },
};

export const SIGN_UP_PROFILE_REGEX_BY_TYPE = {
  nickname: /^(?=.*[a-zA-Z0-9가-힣])[a-zA-Z0-9가-힣]{2,10}$/,
  major: /^(?=.*[a-zA-Z가-힣])[a-zA-Z가-힣]{2,20}$/,
};
