import { Component, ViewEncapsulation } from '@angular/core';
import { AppContantComponent, AppHeaderComponent, AppNavBarComponent, AppSideBarComponent } from './components';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule, AppHeaderComponent, AppNavBarComponent, AppSideBarComponent, AppContantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'esense';
}
