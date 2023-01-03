import Post from "../Model/Post.js";
import post from "../Model/Post.js"
import User from "../Model/User.js"


export async function addpost(req , res){
  
 try {
  var user = await User.findOne({ _id: req.body.id });
  if(user){
    var id = req.body.id;
    var Title  = req.body.Title;
    var date= req.body.date;
    var userName= req.body.userName;
    var userImage = req.body.userImage;
    var usercalls=req.body.usercalls
     
    
    
    
    
    

    // Create user in our database
    var p = await post.create({
      idUser:id,
      Title,
      userName,
      date,
     usercalls,
      userImage

    });

    
      res.status(200).json({message : "ajout avec succeés",p});
  
     
  }
    
  } catch (err) {
    console.log(err);
  }
  
};



export async function Updatepost(req,res){

  const  { Title,date } = req.body;
  
  var p = await post.findOne({ _id: req.params.id });
  p.Title= Title;
 
  p.date=date;
  
  p.save()
    
  
  res.status(200).json({message : "update avec succeés",p});
   
   // res.status(404).json("Not found ")
    
    
}

export async function deletepost(req,res){
  
    
      try {
        const  id=req.params.id;
  
        var p = await post.findOne({_id:id})
        if(!p)
        res.status(404).json("post not found")

        p.remove();
        res.status(200).json("post Supprime")
      } catch (error) {
        console.log(error);
      }
  
}
export async function Getpost(req,res){
  
  
    try {

      const  id=req.params.id;

      var p = await post.findOne({_id:id})
      if(p)
      {
        res.send(p)
        res.status(200).json(p)
      }else
      res.status(404).json("user not found")
    } catch (error) {
      console.log(error);
    }

}
export async function Getp(req,res){
  
  
  try {


    var pa = await post.find({})
    if(pa)
    {
     
      res.status(200).json(pa)
    }else
    res.status(404).json("post not found")
    
  } catch (error) {
    console.log(error);
  }

}



export async function getbyUser(req,res){
  let id = req.params.id
  console.log(id)
  Post.find({idUser: id})
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