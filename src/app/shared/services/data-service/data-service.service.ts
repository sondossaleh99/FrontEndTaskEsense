import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ActionType } from "../../enum";

@Injectable()

export class DataService {

    private formValue: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    private filteredItems: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    public data: Observable<any[]>;
    actionType: number;
    index: number;
    list;
    
    setData(data: any): void {
        switch (this.actionType) {
            case ActionType.Save:
                this.add(data)
                break;
            case ActionType.Edit:
                this.update(this.index, data)
                break;
        }
    }

    add(data) {
        const currentData = this.formValue.value;
        const newData = [data, ...currentData];
        this.formValue.next(newData);
    }

    update(index, data) {
        const currentData = this.formValue.value;
        currentData[index] = data;
        this.formValue.next(currentData);
    }

    delete(index) {
        const currentData = this.formValue.value;
        currentData.splice(index, 1);
    }

    getData(searchTerm?): Observable<any[]> {
        if (!searchTerm) {
            return this.data = this.formValue.asObservable();
        } else {
            const currentData = this.formValue.value;
            const filter = currentData.filter((item) => item.name.includes(searchTerm));
            this.filteredItems.next(filter);
            return this.data = this.filteredItems.asObservable();
        }
    }
}