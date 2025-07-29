import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { EventEmitter, Output } from '@angular/core';
import { ActiveButtonService } from '../services/active-button.service';
import { MatDatepicker } from '@angular/material/datepicker';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core'; // or MatMomentDateModule

import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { MdePopoverModule } from '@muntazir86/material-extended';

interface Case {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [MatTabsModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonModule, MatDatepicker, CommonModule,
            MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatMenuModule, MatCheckboxModule, FormsModule, MdePopoverModule
  ],
  templateUrl: './side-navbar.component.html',
  styleUrls: [
    './side-navbar.component.scss',
    '../toggle-nav/patient-record/patient-record.component.scss'
  ]
})
export class SideNavbarComponent {
  selectedDate = new Date();
  redial = false;
  voicemail = false;
  alerts = false;
  second = false;
  third = false;

  @ViewChild('picker') picker!: MatDatepicker<Date>;

  openDatePicker() {
    this.picker.open();
  }

  onDateChange(event: any) {
    this.selectedDate = event.value;
  }

  changeDate(offset: number) {
    const newDate = new Date(this.selectedDate);
    newDate.setDate(newDate.getDate() + offset);
    this.selectedDate = newDate;
  }


  constructor(public activebutton: ActiveButtonService){

  }

  @Output() toggleSidenav = new EventEmitter<void>();

  onToggle() {
    this.toggleSidenav.emit();
    this.activebutton.isActive = !this.activebutton.isActive;
  }

   providers: Case[] = [
    { value: 'Anthony, John MD', viewValue: 'Anthony, John MD' },
    { value: 'Tim, John MD', viewValue: 'Tim, John MD' },
    { value: 'Johny, John MD', viewValue: 'Johny, John MD' }
  ]

  resources: Case[] = [
    { value: 'Ultrasound Machine', viewValue: '5 min' },
    { value: 'X-Ray Machine', viewValue: 'X-Ray Machine' },
    { value: 'Chemo Chair', viewValue: 'Chemo Chair' }
  ]

  variable: Case[] = this.providers;

  ChangeTab(event: MouseEvent): void {
    event.stopPropagation(); // Prevents closing the popover
    const text = (event.target as HTMLElement).innerText.trim();
    if (text == 'Provider') {
      this.variable = this.providers;
    }
    else if (text == 'Resource') {
      this.variable = this.resources;
    }

    const html = (event.target as HTMLElement);
    html.classList.toggle('active');

    document.querySelectorAll('.active').forEach(item => {
      if (item != html) {
        item.classList.remove('active');
      }
    })

  }

  ToggleMiniSearch(event: MouseEvent): void {
    event.stopPropagation(); // Prevents closing the popover

    const searchicon = document.querySelector('.search-icon-custom');
    if (searchicon) {
      searchicon.classList.toggle('apear');
    }

    const searchBar = document.querySelector('.search-bar-custom');
    if (searchBar) {
      searchBar.classList.toggle('apear');
    }
  }

}
