import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.css']
})
export class TransferFormComponent implements OnInit {
  myamount = 5824.76; // The static amount declared
  transfer = {
    fromAccount: "",
    merchant: "",
    amount: undefined,
    transactionDate: 0,
    merchantLogo: "https://picsum.photos/40/40",
    transactionType: "Online Transfer"
  }
  showError = "";
  @Output() onTransactionAdd = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.setMyAmount();
  }

  resetForm() {
    this.transfer = {
      fromAccount: "",
      merchant: "",
      amount: "",
      transactionDate: 0,
      merchantLogo: "https://picsum.photos/40/40",
      transactionType: "Online Transfer"
    }
    this.setMyAmount();
  }

  setMyAmount() {
    let myaccount = "Free Checking(4692) - ($" + this.myamount + ")";
    this.transfer.fromAccount = myaccount;
  }

  onSubmitClick() {
    if ((this.myamount + 500) < this.transfer.amount) { // checking of you have balance
      this.showError = "You have exceeded the limit of overdraft ($-500.00 only allowed)";
    } else {
      this.transfer.transactionDate = new Date().getTime();
      this.onTransactionAdd.emit(this.transfer);
      this.showError = "";
      this.myamount = this.myamount - this.transfer.amount;
      this.resetForm();
    }
  }

}
