const express= require('express');
const app=express()

const lifePosts = {
  posts: [
    {
      age: 4,
      hobbies: ["walking", "Drawing"],
      funFacts: ["Learning english", "Watching tv", "Creates short vlogs"],
      photoUrl: "https://example.com/charlie-1.jpg",
      description: "Hanging out with cousins",
      dateOfPhoto: "2024-01-01"
    },
    {
      age: 6,
      hobbies: ["Drawing", "Building with blocks"],
      funFacts: ["Loves to scribble", "Says a few words", "Loves stuffed animals"],
      photoUrl: "https://example.com/charlie-2.jpg",
      description: "Starting to talk and stack blocks like a pro!",
      dateOfPhoto: "2024-02-02"
    },
    {
      age: 8,
      hobbies: ["Running", "Watching cartoons"],
      funFacts: ["Loves dinosaurs", "Talks non-stop", "Loves playing outside"],
      photoUrl: "https://example.com/charlie-3.jpg",
      description: "Running everywhere and obsessed with dinosaurs!",
      dateOfPhoto: "2024-03-03"
    },
    {
      age: 10,
      hobbies: ["Coloring", "Riding a tricycle"],
      funFacts: ["Knows the alphabet", "Loves bedtime stories", "Enjoys playing dress-up"], 
      photoUrl: "https://example.com/charlie-4.jpg",
      description: "Tricycle master and storytime lover.",
      dateOfPhoto: "2024-04-04"
    },
    {
      age: 12,
      hobbies: ["Playing soccer", "Learning to read"],
      funFacts: ["Wants to be a superhero", "Loves cartoons", "Can count to 100"],
      photoUrl: "https://example.com/charlie-5.jpg",
      description: "Learning to read and playing soccer like a champ!",
      dateOfPhoto: "2024-05-05"
    },
  ]
}
  
  
app.set('view engine','ejs')

app.use((req,res,next)=>{
  console.log(req.method+ ""+req.path)
  next()
})

app.use(express.static(__dirname+"/public"))

app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/public/index.html")
})

app.get("/aboutMe",(req,res)=>{
  const data= lifePosts[0];
  res.render("aboutMe.ejs",lifePosts[0])
});

app.listen(3000, ()=>{
 console.log("Server Running")
})