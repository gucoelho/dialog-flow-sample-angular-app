import { IMessage } from './../models/message';
import { Component, OnInit } from '@angular/core';
import { client } from '../../dialog-flow.client';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  conversation: IMessage[] = [];

  constructor() { }

  ngOnInit() {
  }


  addMessageFromUser(message) {
    this.conversation.push({
      from: 'Me',
      text: message.value
    });

    client.textRequest(message.value).then((response) => {
      this.conversation.push({
        from: 'Bot',
        text: response.result.fulfillment['speech'] || 'I can\'t seem to figure that out!'
      });
      message.value = '';
    });
  }

}
