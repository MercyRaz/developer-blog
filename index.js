import express from "express";
import bodyParser from "body-parser";
import path from "path";


export const app = express();
const port = 4000;

const comments = [];

app.set("view engine", "ejs");

app.set("views", path.join(process.cwd(), "views"));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", { comments });
});

app.post("/comments", (req, res) => {
    const newComment = req.body.comment;
    if (newComment) {
        comments.push(newComment); 
    }
    res.redirect("/");
});

app.get("/about", (req, res) =>{
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
