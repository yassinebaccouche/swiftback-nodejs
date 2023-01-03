import mongoose from"mongoose" ;
import bodyparser from"body-parser" ;
import express from"express";



const app = express();
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
const { Schema , model} = mongoose;


const postSchema = mongoose.Schema({
 
      Title: {
        type: String,
        require: true,
      },

      idUser: {
        type: String,
        require: true,
      },
      usercalls:{
        type :Number,
        default :1000
            },
      date: {
        type: Date,
    
      },
      userName:{
        type: String,
        require: true,
      },
      userImage:{
        type: String,
        require: true,
      },

      
     
    },
   
    {
      timestamps: true,
    }
  );




export default model("post" ,  postSchema  )