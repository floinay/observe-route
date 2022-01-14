import { Injectable } from "@angular/core";
import { ObserveRoute } from "projects/observer/src/lib";

@Injectable({providedIn: 'root'})
export class TestObserver {
    @ObserveRoute('/')
    onHome() {
        console.log('On Home');
    }

}