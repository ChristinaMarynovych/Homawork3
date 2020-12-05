//функція 1
function getMaxDigit(number) {
  let Array = String(number).split('');
  let answer = 0;
  for (let maxDigit of Array) {
      if (Number(maxDigit) > answer) {
          answer = Number(maxDigit)
      };
  };
  return answer;
}
//    console.log(getMaxDigit(prompt('input number')));

//функція 3
function getName(name) {
    return name[0].toUpperCase() + name.substring(1).toLowerCase();
    }
    // console.log(getName(prompt('input name')));

//функція 4
function getSalary(salary, tax1 = 0.18, tax2 = 0.015) {
    return (1 - tax1 - tax2) * salary;
  }
//   console.log(getSalary(parseInt(prompt('input salary'))));

//функція 5
function randomInteger(min, max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
//   console.log(randomInteger(+prompt('input first number'), +prompt('input second number')));

// функція 8
function randomPass(length = 8) {
    let password = '';
    let symbols = '0123456789';
    for (let i = 0; i < length; i++){
      password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    return password;
  }
//   console.log(randomPass(parseInt(prompt('input the length of your password'))));

//функція 10
function palindrome(str) {
    str = str.toLowerCase().replace(/\s/g,'');
    return str === str.split('').reverse().join('');
  }
//   console.log(palindrome(prompt('input word')));

console.log(`Function#1: ${getMaxDigit(6543)}`);
console.log(`Function#3: ${getName('хРИСТИНА')}`);
console.log(`Function#4: ${getSalary(1000)}`);
console.log(`Function#5: ${randomInteger(10, 18)}`);
console.log(`Function#8: ${randomPass(8)}`);
console.log(`Function#10: ${palindrome('А роза упала на лапу Азора')}`);