const bcrypt = require("bcrypt"); //Here you import and require bcrypt

async function hashPassword() {
  let salt = await bcrypt.genSalt(10); //A salt is a random string that makes the hash unpredictable. This bcrypt method generates it and randomizes
  //it 10 times,  you can do it whatever number you want but as by convention it is always used 10 times.

  let hashedPassword = await bcrypt.hash("hahah", salt); // .hash takes the string or if your are working with a database or data from api you pass it instead of my string
  // and it will hash your password but now it combines with the salt.
  console.log(hashedPassword);
}
hashPassword();
