import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
