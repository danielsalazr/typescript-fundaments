(()=> {
  let userId: string | number;
  userId = 1212;
  userId = 'assas'

  function greeting(myText: string | number){
    if (typeof myText === 'string' ){
      console.log(`String ${myText.toLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);

    }
  }

  greeting('Daniel');
  greeting(12.15616462)

})()
