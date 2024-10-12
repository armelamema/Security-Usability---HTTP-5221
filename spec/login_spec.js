describe("Login Functionality", function() {

    // Test for md5Encrypt function
    it("should return a 32-character hexadecimal string when a password is encrypted", function() {
      var encrypted = md5Encrypt("password123");
      expect(encrypted).toMatch(/^[a-f0-9]{32}$/); // Check for valid MD5 hash
    });
  
    // Test for successful login
    it("should return true for correct username and password", function() {
      var result = checkLogin("user123", "password123");
      expect(result).toBe(true);
    });
  
    // Test for no username entered
    it("should return 'No username entered.' if username is empty", function() {
      var result = checkLogin("", "password123");
      expect(result).toBe("No username entered.");
    });
  
    // Test for no password entered
    it("should return 'No password entered.' if password is empty", function() {
      var result = checkLogin("user123", "");
      expect(result).toBe("No password entered.");
    });
  
    // Test for invalid username or password
    it("should return 'Invalid Username or Password.' for invalid login details", function() {
      var result = checkLogin("wrongUser", "password123");
      expect(result).toBe("Invalid Username or Password.");
    });
  
  });
  