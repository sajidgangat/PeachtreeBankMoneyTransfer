import { Component, OnInit, Input, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-recent-transaction',
  templateUrl: './recent-transaction.component.html',
  styleUrls: ['./recent-transaction.component.css']
})
export class RecentTransactionComponent implements OnInit, OnChanges {
  @Input() transactions: any;
  search = "";
  filteredData = [];
  parsedData = [];
  constructor() { }

  ngOnInit(): void {
    this.parsedData = this.transactions ? JSON.parse(this.transactions) : [];
    this.filteredData = this.parsedData.sort((a, b) => b.transactionDate - a.transactionDate);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.parsedData = changes.transactions.currentValue ? JSON.parse(changes.transactions.currentValue) : [];
    this.filteredData = this.parsedData.sort((a, b) => b.transactionDate - a.transactionDate);
  }

  onSortByDate() {
    this.filteredData = this.parsedData.sort((a, b) => (a.transactionDate > b.transactionDate) ? 1 : ((b.transactionDate > a.transactionDate) ? -1 : 0));
  }

  onSortByAccount() {
    this.filteredData = this.parsedData.sort((a, b) => (a.merchant > b.merchant) ? 1 : ((b.merchant > a.merchant) ? -1 : 0));
  }

  onSortByAmount() {
    this.filteredData = this.parsedData.sort((a, b) => (Number(a.amount) > Number(b.amount)) ? 1 : ((Number(b.amount) > Number(a.amount)) ? -1 : 0));
  }

  onSearch() {
    this.filteredData = this.parsedData.filter(item => {
      return item.merchant.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 ||
        item.amount.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 ||
        item.transactionType.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
    })
  }
}
