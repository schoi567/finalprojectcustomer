import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SignupComponent } from './signup/signup.component';
import { CheckbookComponent } from './checkbook/checkbook.component';
import { HeaderdesignService } from './services/headerdesign.service';
import { ChangeusrprofComponent } from './changeusrprof/changeusrprof.component';
import { CheckrequestComponent } from './checkrequest/checkrequest.component';
import { DepositwithdrawComponent } from './depositwithdraw/depositwithdraw.component';
import { PrimaryaccounthistoryComponent } from './primaryaccounthistory/primaryaccounthistory.component';
import { PrimaryaccounttransferComponent } from './primaryaccounttransfer/primaryaccounttransfer.component';
import { SavingsaccounttransferComponent } from './savingsaccounttransfer/savingsaccounttransfer.component';
import { CheckingaccountdetailComponent } from './checkingaccountdetail/checkingaccountdetail.component';
import { SavingsaccountdetailComponent } from './savingsaccountdetail/savingsaccountdetail.component';



const routes: Routes = [{ path: '',component:LoginComponent},
{ path: 'uprofile/:username',component:UserprofileComponent,canActivate:[HeaderdesignService]},
{ path: 'signup',component:SignupComponent},
{ path: 'checkbook',component:CheckbookComponent,canActivate:[HeaderdesignService]},
{ path: 'changeusrprof/:username',component:ChangeusrprofComponent,canActivate:[HeaderdesignService]},
{ path: 'requestcheck/:username',component:CheckrequestComponent,canActivate:[HeaderdesignService]},
{ path: 'depositwithdraw',component:DepositwithdrawComponent,canActivate:[HeaderdesignService]},
{ path: 'primaryhistory/:username',component:PrimaryaccounthistoryComponent,canActivate:[HeaderdesignService]},
{ path: 'primaryaccounttransfer/:username',component:PrimaryaccounttransferComponent,canActivate:[HeaderdesignService]},
{ path: 'savingsaccounttransfer/:username',component:SavingsaccounttransferComponent,canActivate:[HeaderdesignService]},
{ path: 'checkingaccountdetail',component:CheckingaccountdetailComponent,canActivate:[HeaderdesignService]},
{ path: 'savingsaccountdetail',component:SavingsaccountdetailComponent,canActivate:[HeaderdesignService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
