import { IMessage } from './../models/message';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message: IMessage;

  constructor() { }

  ngOnInit() {
  }

}
