import { Injectable } from "@angular/core";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import {BehaviorSubject} from "rxjs";
import {io, Socket} from "socket.io-client";
import {environment} from "../../../environments/environment";
@Injectable()
export class SocketService {
  private actionEmited$: BehaviorSubject<any> = new BehaviorSubject('');
  private socket: Socket<DefaultEventsMap, DefaultEventsMap> | undefined;

  constructor() { }

  setupSocketConnection(){
    this.socket = io(environment.SOCKET_ENDPOINT);
  }

   public sendMessage(event: string, message: string): void {
      if (this.socket) {
        this.socket.emit(event, message);
      }
  }

  private _parseAction(message: any) {
    let action = {
      label: message.action,
      issue_number: message.issue.number,
      user: message.sender.login,
      new_label: message.label.name
    };
    return action;
  }

  public getMessage = () => {
    if (this.socket) {
      this.socket.on('updateIssue', (message) => {
        //window.location.reload();
        //alert('update');
        this.actionEmited$.next(this._parseAction(message));
        console.log(message);
      });
    }
    return this.actionEmited$.asObservable();
  };

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
