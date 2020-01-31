import { Injectable } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';

export class Event {
    Type: string;
    Action: string;
    Actor: Actor; 
    scope:  string;
    time: Date;
    timenano: Date;
}

export class Actor {
    ID: string;
    Attributes: Attributes;
}

export class Attributes {
    container: string;
    name: string;
    type: string;
}

let events = [];

let eventsStore = new ArrayStore({
    data: events
});

@Injectable()
export class EventService {
    constructor() {
        const url = 'ws://localhost:1880/red-nodes/ws/test';
        let myWebSocket: WebSocketSubject<any> = webSocket(url);

        myWebSocket.subscribe(    
            msg => {
                console.log(msg)
                eventsStore.push([{ type: "insert", data: { 
                        Type: msg.Type,
                        Action: msg.Action,
                        Actor: msg.Actor,
                        scope:  msg.scope,
                        time:  new Date(msg.time * 1000), 
                        timenano:  new Date(msg.timenano)
                    }
                }]); 
            }, 
            // Called whenever there is a message from the server    
            err => console.log(err), 
            // Called if WebSocket API signals some kind of error    
            () => console.log('complete') 
            // Called when connection is closed (for whatever reason)  
        );
    }

    getEvents() {
        console.log('getEvents->');
        return eventsStore;
    }

}
