export const validationFunction = {
  userName: username => {
    if (username === '') {
      return false;
    } else {
      return true;
    }
  },

  userBirth: birth => {
    if (birth.length === 8) {
      return true;
    } else {
      return false;
    }
  },

  userNum: number => {
    if (number.length === 11) {
      return true;
    } else {
      return false;
    }
  },

  userId: id => {
    var reg_id = /^[a-zA-Z]\w{4,12}$/;
    return reg_id.test(id) ? true : false;
  },

  userPw: pw => {
    var reg_pwd = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,16}$/;
    return reg_pwd.test(pw) ? true : false;
  },
};
