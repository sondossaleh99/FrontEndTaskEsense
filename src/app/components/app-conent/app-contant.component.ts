import { Component, ViewEncapsulation } from '@angular/core';
import { ActionsComponent, RecordsListComponent } from './components';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-contant-cmp',
  standalone: true,
  imports: [SharedModule, ActionsComponent, RecordsListComponent],
  templateUrl: './app-contant.component.html',
  styleUrl: './app-contant.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppContantComponent {
}
