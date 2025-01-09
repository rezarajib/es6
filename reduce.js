  const numbers = [4, 5, 7, 1, 2, 66];
  const total = numbers.reduce((previous,current)=> previous + current,0);
  console.log(total);

  const values = [2,4];
  const totalValues = values.reduce((p,c) => p + c,0);
  console.log(totalValues);