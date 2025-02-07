
export const isPrime = (num) => {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
      if (num % i === 0) return false;
    return num > 1;
  };
  
  export const isPerfect = (num) => {
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        sum = sum + i + num / i;
      }
    }
    return sum === num && num !== 1;
  };
  
  export const isArmstrong = (num) => {
    const digits = String(num).split('');
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), digits.length), 0);
    return sum === num;
  };
  
  export const isOdd = (num) => num % 2 !== 0;
  
  export const digitSum = (num) => {
    return String(num).split('').reduce((acc, digit) => acc + Number(digit), 0);
  };