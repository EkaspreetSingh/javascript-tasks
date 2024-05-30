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
        p:{
            k: {s:{
                n:10
            }}
        }
      }
    }
  }

  function flattenJSON(ob) {
   var toReturn = {};

   for (var i in ob) {
       if (!ob.hasOwnProperty(i)) continue;

       if ((typeof ob[i]) == 'object' && ob[i] !== null) {
           var flatObject = flattenJSON(ob[i]);
           for (var x in flatObject) {
               if (!flatObject.hasOwnProperty(x)) continue;

               toReturn[i + '.' + x] = flatObject[x];
           }
       } else {
           toReturn[i] = ob[i];
       }
   }
   return toReturn;
}
 console.log(flattenJSON(data));
