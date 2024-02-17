import { Component, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-nav-bar-cmp',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './app-nav-bar.component.html',
  styleUrl: './app-nav-bar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppNavBarComponent {
  title = 'السجلات';
}
