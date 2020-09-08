var mongoClient = require("mongodb").MongoClient;

var mongodbUrl = "mongodb://localhost:27017/";

function getAllQuestions(req, res){
    mongoClient.connect(mongodbUrl, { useUnifiedTopology: true }, (err, dbHost)=>{
        if(err){
            res.status(500);
            res.json({message: err});
            // console.log("Erorr connecting to server");
        }else{
            var db = dbHost.db("slDbMean");
            db.collection("questions", (err, coll)=>{
                if(err){
                    res.status(500);
                    res.json({message: err});
                }else{
                    coll.find().toArray((err, data)=>{
                        if(err){
                            res.status(500);
                            res.json({message: err});
                        }else{
                            // if(data){
                                res.status(200);
                                res.json(data);
                                // res.json({message: true, questions:data});
                            // }else{
                                // res.status(201);
                                // res.json({message: false});
                            // }
                        }
                    });
                }
            });
        }
    });
}

module.exports = {getAllQuestions};