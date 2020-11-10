function IsCellular(asValue) {
  var regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;

  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}

export default IsCellular;
