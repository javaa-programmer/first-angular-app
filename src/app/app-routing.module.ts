import { DynamicUserListComponent } from './dynamic-user-list/dynamic-user-list.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayTableComponent } from './display-table/display-table.component';


const routes: Routes = [
  { path: 'registration', component: UserregistrationComponent },
  { path: 'userlist', component: UserlistComponent},
  { path: 'userdetails', component: UserdetailsComponent},
  { path: 'dynamicUserList', component: DynamicUserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [UsermanagementComponent, UserregistrationComponent, UserlistComponent, UserdetailsComponent, DisplayTableComponent]
