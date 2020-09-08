var mongoClient = require("mongodb").MongoClient;

var mongodbUrl = "mongodb://localhost:27017/";

function checkUser(req, res){
    mongoClient.connect(mongodbUrl, { useUnifiedTopology: true }, (err, dbHost)=>{
        if(err){
            res.status(500);
            res.json({message: err});
            // console.log("Erorr connecting to server");
        }else{
            var db = dbHost.db("slDbMean");
            db.collection("users", (err, coll)=>{
                if(err){
                    res.status(500);
                    res.json({message: err});
                }else{
                    var userToBeChecked = req.body;
                    coll.findOne({username:userToBeChecked.username, password:userToBeChecked.password}, (err, data)=>{
                        if(err){
                            res.status(500);
                            res.json({message: err});
                        }else{
                            if(data){
                                res.status(200);
                                res.json({message: true});
                            }else{
                                res.status(201);
                                res.json({message: false});
                            }
                        }
                    });
                }
            });
        }
    });
}

module.exports = {checkUser};