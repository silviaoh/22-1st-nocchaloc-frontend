export const validationFunction = {
  userName: username => {
    return !(username === '');
  },

  userBirth: birth => {
    return birth.length === 8;
  },

  userNum: number => {
    return number.length === 11;
  },

  userId: id => {
    const reg_id = /^[a-zA-Z]\w{4,12}$/;
    return reg_id.test(id);
  },

  userPw: pw => {
    const reg_pwd = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,16}$/;
    return reg_pwd.test(pw);
  },
};
