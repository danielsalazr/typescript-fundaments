(() => {
  let myNumber: number | null = null;
  let myString: string | undefined = undefined;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  myString = "AAS"

  // function h1(name: string | null) {
  //   let hello = "Hola ";
  //   if (name) {
  //     hello += 'name';
  //   } else {
  //     hello += 'nobody';
  //   }
  //   console.log(hello)
  // }

  function h1V2(name: string | null) {
    let hello = "Hola ";
    hello += name?.toLocaleLowerCase() || 'nobody';
    console.log(hello);
  }

  h1V2('Daniel')
  h1V2(null)

})()
