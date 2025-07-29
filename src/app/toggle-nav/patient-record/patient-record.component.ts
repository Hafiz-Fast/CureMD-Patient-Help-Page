import { Component } from '@angular/core';
import { FormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MdePopoverModule } from '@muntazir86/material-extended';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';

interface Case {
  value: string;
  viewValue: string;
}

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-patient-record',
  standalone: true,
  imports: [
    FormsModule, MatInputModule, MatSelectModule, MatFormFieldModule,
    MatTabsModule, MatListModule, MatOptionModule, MdePopoverModule,
    MatSlideToggleModule, MatRadioModule, MatDatepickerModule, ReactiveFormsModule
  ],
  providers: [
    provideMomentDateAdapter(),
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ],
  templateUrl: './patient-record.component.html',
  styleUrl: './patient-record.component.scss'
})

export class PatientRecordComponent {

  isChecked:boolean = true;
  timeline:string[] = ['Week','Day','Month'];
  curr_index:number = 0;
  readonly date = new FormControl(moment());

  IncrementTimeline():void{
    this.curr_index = (this.curr_index + 1) % 3;
  }

  cases: Case[] = [
    { value: 'Head Injury', viewValue: 'Head Injury' },
    { value: 'Arm Injury', viewValue: 'Arm Injury' },
    { value: 'Cardiac surgery', viewValue: 'Cardiac surgery' },
    { value: 'Bone Marrow', viewValue: 'Bone Marrow' },
    { value: 'Knee surgery', viewValue: 'Knee surgery' }
  ]

  locations: Case[] = [
    { value: 'Health Blue Medicare', viewValue: 'Health Blue Medicare' },
    { value: 'Gey Well Clinic', viewValue: 'Gey Well Clinic' },
    { value: 'Blue Cross Shield', viewValue: 'Blue Cross Shield' }
  ]

  visits: Case[] = [
    { value: 'Check-Up', viewValue: 'Check-Up' },
    { value: 'Sick Visit', viewValue: 'Sick Visit' },
    { value: 'Hydration', viewValue: 'Hydration' }
  ]

  durations: Case[] = [
    { value: '5 min', viewValue: '5 min' },
    { value: '10 min', viewValue: '10 min' },
    { value: '15 min', viewValue: '15 min' }
  ]

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
