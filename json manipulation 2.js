const data = {
    "iOne": "value One",
    "iTwo": "value Two",
    "iThree": "value Three",
    "iFour": {
      "iA": true,
      "iB": false,
      "iC": {
        "iCOne": "i C one value",
        "iCTwo": "i C two value",
        "iCThree": 1234,
      //   p:{
      //       k: {s:{
      //           n:10
      //       }}
      //   }
      }
    }
  }

// fix it
//   {
//     iOne: 'value One',
//     iTwo: 'value Two',
//     iThree: 'value Three',
//     'n.iA': true,
//     'n.iB': false,
//     'n.n.iCOne': 'i C one value',
//     'n.n.iCTwo': 'i C two value',
//     'n.n.iCThree': 1234,
//     'n.n.n.n.n.n': 10
//   }
// get,set lodash =====> cal,adv calc, validator, fun arry, part, mini, number of way===<<<<<<<<>>>>>>>

  const flattenJSON = (obj) => {
    let res = {};
    for(i in obj){
       if(typeof obj[i] === 'object' && !Array.isArray(obj[i])){
          const temp = flattenJSON(obj[i]);
          for(j in temp) {
             res[`${i}.${j}`] = temp[j];
          };
       }else{
          res[i] = obj[i];
       };
    };
    return res;
 };
 console.log(flattenJSON(data));
