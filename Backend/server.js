const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());





app.get("/api/portfolio", (req, res) => {
  res.json({
    name: "Aryan Chaturvedi",
    about: "to be updated",
    skills: ["Node.js", "React.js"],
    projects: [
      { name: "Project:1", description: "A web app using Node.js and React" },
      { name: "Project:2", description: "An API built with Express.js" }
    ]
  });
});


const PORT=5000;
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));
