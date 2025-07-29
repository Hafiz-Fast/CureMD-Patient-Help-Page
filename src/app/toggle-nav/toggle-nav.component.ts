import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActiveButtonService } from '../services/active-button.service';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-toggle-nav',
  standalone: true,
  imports: [PatientSearchComponent, RouterModule],
  templateUrl: './toggle-nav.component.html',
  styleUrl: './toggle-nav.component.scss'
})
export class ToggleNavComponent {
  @Input() sidenav!: MatSidenav;

  constructor(private activebutton:ActiveButtonService){

  }

  onToggle(){
    this.sidenav.close();
    this.activebutton.isActive = !this.activebutton.isActive;
  }
}
