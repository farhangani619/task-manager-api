const mongodb = require('mongodb')
const MongoClient=mongodb.MongoClient

const connectionURL ='mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{ useNewURLParser : true},(error, client)=>{
    if(error){
        return console.log("unable to connect");
    }
    const db = client.db(databaseName);
    console.log("database created");
    // db.collection('users').insertOne({
    //     name: 'Farhan',
    //     age:'23'

    // })
//     db.collection('users').findOne({
//         name:'Farhan'
//     },(error,user)=>{
//         console.log(user);
//     })
// })
    // db.collection('users').updateOne({
    //     _id : new mongodb.ObjectID("604ca7f32343433298a6e7a4")
    // },{
    //     $set:{
    //         name:'Gani'
    //     }
    // }).then((result)=>{
    //     console.log(result.modifiedCount);
    // }).catch(error=>{
    //     console.log(error);
    // })
    db.collection('users').deleteOne({
      name:'Gani'  
    }).then(result=>{
        console.log(result);
    }).catch(error=>{
        console.log(error);
    })
})