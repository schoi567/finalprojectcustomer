import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SignupComponent } from './signup/signup.component';
import { CheckbookComponent } from './checkbook/checkbook.component';
import { ChangeusrprofComponent } from './changeusrprof/changeusrprof.component';
import { UsrprofileresultComponent } from './usrprofileresult/usrprofileresult.component';
import { CheckrequestComponent } from './checkrequest/checkrequest.component';
import { DepositwithdrawComponent } from './depositwithdraw/depositwithdraw.component';
import { PrimaryaccounthistoryComponent } from './primaryaccounthistory/primaryaccounthistory.component';
import { PrimaryaccounttransferComponent } from './primaryaccounttransfer/primaryaccounttransfer.component';
import { SavingsaccounttransferComponent } from './savingsaccounttransfer/savingsaccounttransfer.component';
import { CheckingaccountdetailComponent } from './checkingaccountdetail/checkingaccountdetail.component';
import { SavingsaccountdetailComponent } from './savingsaccountdetail/savingsaccountdetail.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    UserprofileComponent,
    SignupComponent,
    CheckbookComponent,
    ChangeusrprofComponent,
    UsrprofileresultComponent,
    CheckrequestComponent,
    DepositwithdrawComponent,
    PrimaryaccounthistoryComponent,
    PrimaryaccounttransferComponent,
    SavingsaccounttransferComponent,
    CheckingaccountdetailComponent,
    SavingsaccountdetailComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
