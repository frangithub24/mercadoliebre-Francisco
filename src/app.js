const express = require ("express");
const path = require ("path");

const app = express();


const publicPath= path.resolve(__dirname,"../public");
app.use(express.static(publicPath));


app.get("/",(req,res) =>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})

app.get("/register", (req, res) => {
    console.log("Accediendo a /register");
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get("/login", (req, res) => {
    console.log("Accediendo a /login");
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

const port = process.env.PORT || 5002
app.listen(port,()=>{
    console.log("Servidor corriendo en el puerto ${port}");
})