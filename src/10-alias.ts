(() => {

  type UserId = string | number | boolean;
  let userId: UserId;

  // Literal Types
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'S'

  function greeting(userId: UserId, size: Sizes){
    if (typeof userId === 'string' ){
      console.log(`String ${userId.toLowerCase()}`);
    }
  }

  greeting(1111,'S');
  greeting('111', 'XL');


})()
