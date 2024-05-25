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

  // future scope...
  /// curr, edge...
  const transformedData = data.reduce((acc, { batch_id, name, contact }) => {
    const existingBatch = acc.find(batch => batch[batch_id]);
    const newData = {...curr, name, contact };
    // alwys thinkg about better approach
    const currData = existingBatch ? existingBatch[batch_id] : acc;
    currData.push(existingBatch ? {[batch_id]: newData} : newData);

    
    if (existingBatch) {
      // curr['batch_id']
      existingBatch[batch_id].push({ ...curr,name, contact });
    } else {
      acc.push({ [batch_id]: [{...curr, name, contact }] });
    }
    
    return acc;
  }, []);
  
  console.log(JSON.stringify(transformedData, null, 2));

  