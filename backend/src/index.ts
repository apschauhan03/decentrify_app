import express, { Request, Response } from 'express';
import userRouter from "./routers/user";
import workerRouter from "./routers/worker";


const app = express();
// for allowing users to send data along too
app.use(express.json());

app.use("/v1/user",userRouter);
app.use("/v1/worker",workerRouter);


app.listen(3000,()=>{
  console.log("server running at port 3000")
});