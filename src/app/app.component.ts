import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpperNavbarComponent } from './upper-navbar/upper-navbar.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { ToggleNavComponent } from './toggle-nav/toggle-nav.component';

import {MatTabsModule} from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UpperNavbarComponent, SideNavbarComponent, ToggleNavComponent,
            MatTabsModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
