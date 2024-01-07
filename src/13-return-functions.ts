(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    })
    return total.toString();
  }

  const printTotal = (prices: number[]) => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`)
  }

   const rta = calcTotal([1,2,3,5,1,2]);
   console.log(rta);

   printTotal([1,2,3,5,1,2])

})()
