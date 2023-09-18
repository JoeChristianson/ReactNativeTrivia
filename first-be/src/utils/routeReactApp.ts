import {Request,Response} from "express"

const routeReactApp = (app:any,express:any)=>{
    const path = require("path")
    const homePath = path.resolve(__dirname, "../../../web-app/build")
  
    app.use(express.static(path.resolve(__dirname, "../../../web-app/build")))
    app.get("*", function (request:Request, response:Response) {
      response.sendFile(path.resolve(__dirname, "../../../web-app/build", "index.html"));
    });
  }

  export default routeReactApp