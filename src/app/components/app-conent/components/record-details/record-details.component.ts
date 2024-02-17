import { Component, ElementRef, EventEmitter, Output, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { DataService, ModalService } from '../../../../shared/services';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'record-details-cmp',
  standalone: true,
  imports: [SharedModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './record-details.component.html',
  styleUrl: './record-details.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class RecordDetailsComponent {

  @ViewChild('myModal') set modal(val: ElementRef) {
    this._modalService.modal = val;
  };

  @Output() onSave = new EventEmitter();

  private _selectedItem: any;

  @Input() get selectedItem() { return this._selectedItem };
  set selectedItem(value) {
    this._selectedItem = value;
    if (value) {
      this.form.patchValue(value);
    }
  }

  get modalTitle() { return this._modalService.modalTitle };

  constructor(private _modalService: ModalService, private _dataService: DataService) {
  }

  form = new FormGroup({
    name: new FormControl(null, Validators.required),
    details: new FormControl(''),
  });

  get name(): AbstractControl { return this.form.get('name') as FormControl }
  get details(): AbstractControl { return this.form.get('details') as FormControl }

  close() {
    this.form.markAsUntouched();
    this.form.reset();
    this._modalService.close();
  }

  save() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this._dataService.setData(this.form.value);
    this.onSave.emit(true);
    this.close();
    this.form.markAsUntouched();
  }
}
