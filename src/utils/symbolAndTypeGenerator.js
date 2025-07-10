const symbolAndTypeGenerator = (data) => {
  const randomNum = Math.floor(Math.random() * data.length);
  const generatedData = data[randomNum];

  return generatedData;
};

export default symbolAndTypeGenerator;
