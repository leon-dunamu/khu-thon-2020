function IsPassword(pw) {
  var num = pw.search(/[0-9]/g);
  var eng = pw.search(/[a-z]/gi);
  var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

  if (pw.length < 8 || pw.length > 20) {
    return {
      result: false,
      message: '8자리 ~ 20자리 이내로 입력해주세요.',
    };
  } else if (pw.search(/\s/) != -1) {
    return {
      result: false,
      message: '비밀번호는 공백 없이 입력해주세요.',
    };
  } else if (num < 0 || eng < 0 || spe < 0) {
    return {
      result: false,
      message:
        '영문,숫자, 특수문자를 혼합하여 입력해주세요.',
    };
  } else {
    return {
      result: true,
      message: '',
    };
  }
}

export default IsPassword;
