function checkLogin(username, password) {
    const validUsername = "user123"; 
    const validPassword = md5Encrypt("password123"); 
  
    if (username === "") {
      return "No username entered.";
    }
  
    if (password === "") {
      return "No password entered.";
    }
  
    if (username !== validUsername) {
      return "Invalid Username or Password.";
    }
  
    if (md5Encrypt(password) !== validPassword) {
      return "Invalid Username or Password.";
    }
  
    return true;
  }