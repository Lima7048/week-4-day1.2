import express from "express";
const app = express();
// your routes will go here...

app.listen(3000, () => {
    console.log("Server is listening on port 3000...")
})

app.get("/messages", (req, res) => {
    res.json({ message: "Hello, World!" })
})

app.post("/messages", (req, res) => {
    res.json({ message: "HELLO, world!" })
})

app.use(express.json())