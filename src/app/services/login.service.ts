import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class LoginService {
    private isLoggedIn = new Subject<boolean>();
    private isLoggedOut = new Subject<boolean>();
    // Broadcaster
    isLoggedInBroadCaster = this.isLoggedIn.asObservable();
    isLoggedOutBroadCaster = this.isLoggedOut.asObservable();
    constructor(){
    }

    addUserName(isUserLoggedIn:boolean){
        // Notify to all the subscribers
        this.isLoggedIn.next(isUserLoggedIn);
    }

    removeUserName(isUserLoggedOut:boolean){
        this.isLoggedOut.next(isUserLoggedOut);
    }
}