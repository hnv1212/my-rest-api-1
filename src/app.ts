import "reflect-metadata";
import express from "express";
import cors from 'cors';

import connectDB from "./db/connectdb";
import { IRouter } from "./routes/router.interface";
import errorMiddleware from "./middlewares/error.middleware";

class App {
  private app: express.Application;

  constructor(routes: IRouter[]) {
    this.app = express();
    this.configuration();
    this.initializeDatabaseConnection();
    this.initializeMiddleware()
    this.initializeRoutes(routes)
    this.initializeErrorHandling()
  }

  configuration() {}

  private initializeRoutes(routes: IRouter[]) {
    routes.forEach((route: IRouter) => {
      this.app.use('/api/' , route.router)
    })
    
  }

  private initializeMiddleware(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors())
  }

  start() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Server is listening on port: ${process.env.PORT}`);
    });
  }

  private async initializeDatabaseConnection() {
    try {
      await connectDB();
    } catch (err) {
      console.error(err);
    }
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware)
  }
} 

export default App;
