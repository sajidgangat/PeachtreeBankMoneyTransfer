import { Component, OnInit } from '@angular/core';
import *  as  data from "../mock/transactions.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'peachtree';
  transactions = data.data;
  stringifiedData = "";

  constructor() {

  }

  ngOnInit() {
    this.stringifiedData = JSON.stringify(this.transactions);
  }

  handleOnTransactionAdd(data) {
    this.transactions.push(data);
    this.stringifiedData = JSON.stringify(this.transactions);
  }
}
