const userID = () => {
  const userNumberArr = [];
  
  const randomNumber = () => {
    return Math.floor(0 + Math.random() * (255 + 1 - 0)).toString(16).toUpperCase();
  }

  while(userNumberArr.length < 10) {
    userNumberArr.push(randomNumber());
  }
  let userI = userNumberArr.join('').slice(0, 9);
  console.log(userI);

  console.log(userNumberArr);
  return userI;
};
export default userID;