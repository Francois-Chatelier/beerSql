CREATE TABLE users(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  uuid_users VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  hashedpassword VARCHAR(255) NOT NULL
);

INSERT INTO users(uuid_users,email,hashedpassword) 
  VALUES ('$2b$10$DpDzpIthDFMGK1E7fMuexulyL6KiVzFAirevhuyC5EIf5xVmWQJQW','toto@wildcodeschool.com','$2b$10$DpDzpIthDFMGK1E7fMuexulyL6KiVzFAirevhuyC5EIf5xVmWQJQW');

  UPDATE users SET uuid_users = 'caa9d470-74d8-40dd-bc65-90c74d26632f' WHERE id = 1;


/** DO NOT PASTE IT mdp => MDPwild-22 */