const data = [
    {
      "batch_id": "123",
      "name": "Tony",
      "contact": "9872276210"
    },
    {
      "batch_id": "231",
      "name": "Steve",
      "contact": "7876543210"
    },
    {
      "batch_id": "123",
      "name": "Bruce",
      "contact": "6776543210"
    },
    {
      "batch_id": "321",
      "name": "Clint",
      "contact": "8954643210"
    },
    {
      "batch_id": "123",
      "name": "Peter",
      "contact": "7666543210"
    },
    {
      "batch_id": "231",
      "name": "Phil",
      "contact": "8896543210"
    },
    {
      "batch_id": "321",
      "name": "Nick",
      "contact": "9876521210",
      'data': '2343434'
    }
  ]


const transformedData = data.reduce((acc, curr) => {

  // Destructure the current object to separate batch_id from the rest of the properties
  const { batch_id, ...rest } = curr;

  let batch = -1;
  for(let i=0; i<acc.length; i++) {
    if(acc[i][batch_id] !== undefined) batch = i;
  }
  console.log(batch)

  // Check if the batch_id does not exists in the accumulator object
  if (batch == -1) {
    let arr = [];
    arr.push(rest);
    let newObj = { }
    newObj[batch_id] = arr;
    acc.push(newObj)
  }
  else {
    if(acc[batch][batch_id])
    acc[batch][batch_id].push(rest)
  }

  return acc;
}, []);

console.log(JSON.stringify(transformedData, null, 2));