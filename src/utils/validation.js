export const validationFunction = {
  userName: username => {
    if (username === '') {
      return false;
    } else {
      return true;
    }
  },

  userId: birth => {
    if (birth.length === 8) {
      return true;
    } else {
      return false;
    }
  },
  userBirth: number => {
    if (number.length === 11) {
      return true;
    } else {
      return false;
    }
  },
  userNum: id => {
    var reg_id = /^[a-zA-z0-9]{4,12}$/;
    return reg_id.test(id) ? true : false;
  },
  userPw: pw => {
    var reg_pwd = /^.*(?=.{8,16})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
    return reg_pwd.test(pw) ? true : false;
  },
};
