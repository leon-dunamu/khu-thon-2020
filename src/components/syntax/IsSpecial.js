const IsSpecial = asValue => {
  const regExpSpecial = /[`~!@@#$%^&*|₩=+)(₩₩}'\\{₩";:₩/?]/gi;

  if (
    asValue.includes('[') ||
    asValue.includes(']') ||
    asValue.includes('-') ||
    asValue.includes('_')
  )
    return true;
  return asValue.match(regExpSpecial) !== null;
};

export default IsSpecial;
