import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientSearchComponent } from './toggle-nav/patient-search/patient-search.component';
import { PatientRecordComponent } from './toggle-nav/patient-record/patient-record.component';

export const routes: Routes = [
    {path: '', component: PatientSearchComponent},
    {path: 'record', component: PatientRecordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}