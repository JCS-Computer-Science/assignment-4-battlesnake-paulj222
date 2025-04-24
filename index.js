import express from 'express';
import move from './moveLogic.js'

const app = express();
app.use(express.json());
const config = {
  apiversion: "1",
  author: "",
  color: "#a832a0",
  head: "workout",
  tail: "mlh-gene",
}
app.get("/", (req,res)=> {
  res.json(config);
});
app.post("/start", (req,res)=>{
res.status(200).json();
});
app.post("/move", (req,res)=>{
  let movement = move(req.body);
  res.status(200).json(movement);
});
app.post("end", (req,res)=>{
  res.status(200).json();
});

const host = '0.0.0.0';
const port = process.env.PORT || 8000;

app.listen(port, host, () => {
  console.log(`Running Battlesnake at http://${host}:${port}...`)
});
