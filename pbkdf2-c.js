let salt;
let numIterations = 1000;
let password = 'abcdefg';
let keySize = 16;

//동기식 키생성 - 송신자자
salt = forge.random.getBytesSync(16);
let derivedKey = forge.pkcs5.pbkdf2(password, salt, numIterations, keySize);
document.writeln('Password: ', password, '</br>');
document.writeln('salt: ', forge.util.bytesToHex(salt), '</br>');
document.writeln('Iteration: ', numIterations, '</br>');
document.writeln('Derived key : ', forge.util.bytesToHex(derivedKey), '</br>');

// 송신자 -> 수신자 : salt, numIterations

// 수신자
salt = forge.random.getBytesSync(16);
derivedKey = forge.pkcs5.pbkdf2(password, salt, numIterations, keySize);
document.writeln('Password: ', password, '</br>');
document.writeln('salt: ', forge.util.bytesToHex(salt), '</br>');
document.writeln('Iteration: ', numIterations, '</br>');
document.writeln('Derived key : ', forge.util.bytesToHex(derivedKey), '</br>');

// 비동기식 키생성

forge.pkcs5.pbkdf2(
  password,
  salt,
  numIterations,
  keySize,
  function (err, derivedKey) {
    if (err) console.log(err);
    else
      document.writeln(
        'Derived key 1 (async): ',
        forge.util.bytesToHex(derivedKey),
        '</br>'
      );
  }
);
forge.pkcs5.pbkdf2(
  password,
  salt,
  numIterations,
  keySize,
  function (err, derivedKey) {
    if (err) console.log(err);
    else
      document.writeln(
        'Derived key 2 (async): ',
        forge.util.bytesToHex(derivedKey),
        '</br>'
      );
  }
);
forge.pkcs5.pbkdf2(
  password,
  salt,
  numIterations,
  keySize,
  function (err, derivedKey) {
    if (err) console.log(err);
    else
      document.writeln(
        'Derived key 3 (async): ',
        forge.util.bytesToHex(derivedKey),
        '</br>'
      );
  }
);
forge.pkcs5.pbkdf2(
  password,
  salt,
  numIterations,
  keySize,
  function (err, derivedKey) {
    if (err) console.log(err);
    else
      document.writeln(
        'Derived key 4 (async): ',
        forge.util.bytesToHex(derivedKey),
        '</br>'
      );
  }
);
forge.pkcs5.pbkdf2(
  password,
  salt,
  numIterations,
  keySize,
  function (err, derivedKey) {
    if (err) console.log(err);
    else
      document.writeln(
        'Derived key 5 (async): ',
        forge.util.bytesToHex(derivedKey),
        '</br>'
      );
  }
);
