const bson = require('bson');
const profileModel = require('../Models/Profile');

exports.TestAPI = function(req,res){
    res.send("API RESPONDING!");
}

//Returns all users
exports.getProfiles = function(req,res){   
    profileModel.find().then((user)=>{
        res.status(200).send(user); 
    }).catch((error)=>{
        console.log(error);
        
    });
}

//returns specific user based on ID
exports.getProfileByID = function(req,res){
    const objectID = new bson.ObjectID(req.params.id);
    profileModel.findOne({_id: {$eq:objectID}}).then((user)=>{
        res.status(200).send(user); 
    }).catch((error)=>{
        console.log(error);
         res.status(400).send("Unable to locate user.");
    });
}