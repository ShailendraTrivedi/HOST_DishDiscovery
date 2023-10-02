const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({

    profile_picture:String,
    username:{
        type:String,
        required:false,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },

});

const UserModel=mongoose.model('User',userSchema);
module.exports=UserModel;