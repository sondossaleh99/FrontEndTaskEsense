import { Injectable } from "@angular/core";
import { ActionType } from "../../enum";

@Injectable()

export class ModalService {
    modal: any;
    modalTitle: String;

    open(actionType) {
        switch(actionType) {
            case ActionType.Save:
                this.modalTitle = "اضافة الاسم"
            break;

            case ActionType.Edit:
                this.modalTitle = "تعديل على الاسم"
            break;
        }
        this.modal.nativeElement.style.display = 'block';
    }

    close() {
        this.modal.nativeElement.style.display = 'none';
    }
}