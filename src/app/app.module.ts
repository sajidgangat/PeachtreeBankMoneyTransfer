import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TransferFormComponent } from './transfer-form/transfer-form.component';
import { RecentTransactionComponent } from './recent-transaction/recent-transaction.component';
import { FormsModule } from '@angular/forms';
import { NgxCurrencyInputModule } from 'ngx-currency-input';

@NgModule({
  declarations: [
    AppComponent,
    TransferFormComponent,
    RecentTransactionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxCurrencyInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
