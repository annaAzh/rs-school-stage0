const isRegistred = () => {
  let visits = 0;


  let key = JSON.parse(localStorage.getItem('newLibraryUser'));
  if (key.isRegistred && key.isLogin) {
    visits +=1;
    console.log(key.isRegistred);
    console.log(key.isLogin);
    console.log(visits);
  }
};

export default isRegistred();