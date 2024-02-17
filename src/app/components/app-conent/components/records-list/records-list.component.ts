import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { ActionType, DataService, ModalService } from '../../../../shared';
import { CommonModule } from '@angular/common';
import { RecordDetailsComponent } from '../record-details';

@Component({
  selector: 'records-list-cmp',
  standalone: true,
  imports: [SharedModule, CommonModule, RecordDetailsComponent],
  templateUrl: './records-list.component.html',
  styleUrl: './records-list.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class RecordsListComponent implements OnInit {

  get list() { return this._dataService.list }
  selectedItem;
  constructor(private _dataService: DataService, private _modalService: ModalService) {
  }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this._dataService.getData().subscribe(data => this._dataService.list = data);
  }

  edit(index) {
    debugger
    this._dataService.actionType = ActionType.Edit;
    this._dataService.index = index;
    this.selectedItem = this._dataService.list[index];
    this._modalService.open(ActionType.Edit);
  }

  delete(index) {
    this._dataService.delete(index)
  }

}
