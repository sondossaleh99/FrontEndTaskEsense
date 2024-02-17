import { Component, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-header-cmp',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppHeaderComponent {
  title = 'السجلات';
}
