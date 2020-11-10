const IsNumber = asValue => {
  const regExp = /^[0-9]{0,}$/;
  return asValue.match(regExp) !== null;
};

export default IsNumber;
