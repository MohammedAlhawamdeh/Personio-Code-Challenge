function magicTavern() {
  const checkSubset = (value, array) => {
    let n = 1 << array.length;
    while (n--) {
      if (value === array.reduce((s, v, i) => s + v * !!((1 << i) & n), 0)) {
        return true;
      }
    }
    return false;
  };
  let arr = [];
  for (let i = 0; i <= 100; i++) {
    arr.push(i);
  }
  arr.forEach((n) => {
    let sum = 0;
    let divisors = [];
    for (let i = 1; i < n; i++) {
      if (n % i === 0) {
        divisors.push(i);
        sum += i;
      }
    }
    if (sum > n) {
      if (!checkSubset(n, divisors)) {
        console.log(n);
      }
    }
  });
}
magicTavern();
