function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    
    if (number % 2 === 0 || number % 3 === 0) return false;
    
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    
    return true;
  }
  
  function findNextPrime(input) {
    let nextNumber = input + 1;
    while (true) {
      if (isPrime(nextNumber)) {
        return nextNumber;
      }
      nextNumber++;
    }
  }

  function findNextPrimeAfterInput(input) {
    const nextPrime = findNextPrime(input);
    return nextPrime;
  }
  
  const input1 = 13;
  const input2 = 8;

  const nextPrime1 = findNextPrimeAfterInput(input1);
  const nextPrime2 = findNextPrimeAfterInput(input2);
  
  console.log(`Bilangan prima setelah ${input1} adalah ${nextPrime1}`);
  console.log(`Bilangan prima setelah ${input2} adalah ${nextPrime2}`);
  