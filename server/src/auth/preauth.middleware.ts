import { Injectable , NestMiddleware, Req} from '@nestjs/common';
import { Response, Request } from 'express';
import * as firebase from 'firebase-admin';

const serviceAcc = require("./firebase.json");

@Injectable()
export class PreauthMiddleware implements  NestMiddleware{
  
    constructor() {  
      }

      private db(){
        const fireApp = firebase.initializeApp({
          credential : firebase.credential.cert(serviceAcc),
          databaseURL: "https://myapp-9c1b7.firebaseio.com"
      });

      return fireApp;
      }

    use(@Req() req: Request, res: Response, next: (error?: any) => void) {
       const token = req.headers.authorization;
       console.log(token +" & "+req.headers.authorization)
       if(token != null && token != ''){
    
    const firebase = this.db();
    // console.log(fireApp); 
    firebase.auth().verifyIdToken(token)
    .then( async decodeToken =>{
      const user = {
        email : decodeToken.email
      }
      req['user'] = user;
      next();
    })
    .catch((err) => {
      console.error(err);
      // access denied
      this.denied(req.url,res);
    });
    
  }
  else{
    next();
  }  
    }
    
    private denied(url :string,res : Response){
      res.status(200).json({
        statusCode : 403,
        timestamp : new Date().toISOString(),
        path: url,
        msg : "access denied"
      })
    }
}