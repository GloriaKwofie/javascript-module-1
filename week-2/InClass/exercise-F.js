function checkusername(UserName, userType) {
    if (userType === 'admin' || userType === 'manager') {
      return "Username valid";
    } 
      else {
    return "Username invalid";}
  }

  function checkusertype(tformat) {
    if (tformat === Admin || manager ) {
      return "Username valid";
    } 
  }
  console.log(checkusername('Mark', 'admin'), '|Expected username valid');