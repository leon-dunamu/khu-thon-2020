const IsEmailSpecial = asValue => {
  const regExpSpecial = /[`~!#$%^&*|₩=+@)(₩₩}'\\{₩";:₩/?]/gi;

  if (asValue.includes('[') || asValue.includes(']'))
    return true;
  return asValue.match(regExpSpecial) !== null;
};

export default IsEmailSpecial;
