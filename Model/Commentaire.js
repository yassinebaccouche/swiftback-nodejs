import mongoose from"mongoose" ;
import bodyparser from"body-parser" ;
import express from"express";


const app = express();
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
const { Schema , model} = mongoose;


const CommentaireSchema = mongoose.Schema({
  
    
  com: {
    type: String,
    require: true,
  },
  idPost: {
    type: String,
    require: true,
  },
  idUser: {
    type: String,
    require: true,
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
},

);




export default model("Commentaire" ,  CommentaireSchema  )