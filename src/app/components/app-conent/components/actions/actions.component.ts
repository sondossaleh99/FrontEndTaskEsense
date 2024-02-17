import { Component, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { DataService, ModalService } from '../../../../shared/services';
import { ActionType } from '../../../../shared';

@Component({
  selector: 'actions-cmp',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ActionsComponent {


  constructor(private _modalService: ModalService, private _dataService: DataService) {

  }

  search(event) {
    this._dataService.getData(event.target.value).subscribe(data => this._dataService.list = data)
  }

  open() {
    this._dataService.actionType = ActionType.Save;
    this._modalService.open(ActionType.Save);
  }

}
