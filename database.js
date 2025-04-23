const {MongoClient}=require("mongodb");

const url='mongodb+srv://harshit:k8r8YLVbSyl3yWr6@cluster0.zg9zf.mongodb.net/'

const client=new MongoClient(url)

const db_name="JojoWorld";

async function  main(){
    // use connect method to connect to the server
    await client.connect();
    console.log("connected successfully to the server !");
    const db=client.db(db_name);
    const collection=db.collection('User')
    // const data={
    //     firstname:"Khushi",
    //     lastname:"Dweivdi",
    //     city:"Dehradun",
    //     phoneNumber:"997709612",
    // }
    // const insertResult=await collection.insertMany([data])
    // console.log(insertResult);
    const findResult=await collection.countDocuments({firstname:"Harshit"});
    console.log(findResult);
    // const deleteResult=await collection.deleteOne({firstname:"Khushi"})
    // console.log(deleteResult);
    // const updateResult=await collection.updateOne({firstname:"Khushi"},{$set: {firstname:"Mayank"}})
    // console.log(updateResult)
    return 'done';

}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
