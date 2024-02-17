import { Component, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-side-bar-cmp',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './app-side-bar.component.html',
  styleUrl: './app-side-bar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppSideBarComponent {
  menuTitle = 'ادارة المعاملات';
}
