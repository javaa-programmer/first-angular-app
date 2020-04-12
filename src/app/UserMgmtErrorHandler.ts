import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class UserMgmtErrorHandler implements ErrorHandler {
    
    public handleError(error: any) {
        console.log("Using global UserMgmtErrorHandler");
        console.log("Error: ", error);
    }
}