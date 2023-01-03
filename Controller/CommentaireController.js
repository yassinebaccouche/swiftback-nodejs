import Commentaire from "../Model/Commentaire.js"
import User from "../Model/User.js"


export async function addCommentaire(req , res){
 
  try {
    var user = await User.findOne({ _id: req.body.id });
    if(user){
      var id = req.body.id;
      var idP = req.body.idP;
      var com = req.body.com;
      var date= req.body.date;
      var userName= req.body.userName;
      var userImage = req.body.userImage;
      
     
     
     
     
     
 
     // Create user in our database
     var p = await Commentaire.create({
      idUser:id,
      idPost:idP,
      com,
      userName,
      date,
      userImage

      
 
     });
     
     res.status(200).json({message : "ajout avec succeés",p});
  
     
    }
      
    } catch (err) {
      console.log(err);
    }
    
  };
  
  
  



export async function UpdateCommentaire(req,res){

  const  { com,date } = req.body;
  
  var c = await Commentaire.findOne({ _id: req.params.id });
  c.com= com;
 
  c.date=date;
  
  c.save()
    
  
  res.status(200).json({message : "update avec succeés",c});
   
   // res.status(404).json("Not found ")
    
    
}

export async function deleteCommentaire(req,res){
  
    
      try {
        const  id=req.params.id;
  
        var c = await Commentaire.findOne({_id:id})
        if(!c)
        res.status(404).json("Commentaire not found")

        c.remove();
        res.status(200).json("Commentaire Supprime")
      } catch (error) {
        console.log("prob");
      }
  
}
export async function GetCommentaire(req,res){
  
  
    try {

      const  id=req.params.id;

      var c = await Commentaire.findOne({_id:id})
      if(c)
      {
        res.send(c)
        res.status(200).json(c)
      }else
      res.status(404).json("Commentaire not found")
    } catch (error) {
      console.log("prob");
    }

}
export async function GetALLCommentaire(req,res){
  
  
    try {


      var c = await Commentaire.find({})
      if(c)
      {
        
        res.status(200).json(c)
      }else
      res.status(404).json("Commentaire not found")
    } catch (error) {
      console.log(error);
    }

}

export async function getbypost(req,res){
  let idP = req.params.idP
  console.log(idP)
  Commentaire.find({idPost: idP})
  .then(response => {
      res.json({
          response
      })
  })
  .catch(error => {
      res.json({
          message: 'An error occured'
      })
  })
}