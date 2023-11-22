

//function receivesAFunction(message, callback) {
 //   return `${message} + ${callback}`;
 // }

 // receivesAFunction("YELLO",function (){return"yup"});
  
  
 
 // function receivesAFunction(callback) {
   //   return(`hello world + ${callback}`);
  //  }
  
  // this works!
   // let myVariable = receivesAFunction;
   // myVariable(function(){});


  
  function receivesAFunction(callback) {
    return callback();
  }
  
  function returnsANamedFunction(){
    return receivesAFunction;

  };
 
 
  function returnsAnAnonymousFunction(){
    return (function (){})
};