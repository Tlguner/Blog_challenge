import express from "express";
const app=express();
const port =3000;
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/",(req,res)=>
{
  res.render("index.ejs")
})

app.get("/blog",(req,res)=>
{
  res.render("blog.ejs")
})

app.post("/blog",(req,res)=>
{
    const posts=req.body["name"];
    const mail=req.body["email"];
    const text=req.body["text"];
  res.render("index.ejs",{
    names:posts,
    email:mail,
    blogs:text
  });
})


app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})