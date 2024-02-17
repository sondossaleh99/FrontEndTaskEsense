import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService, ModalService } from './services';


@NgModule({
    imports: [
        RouterOutlet,
    ],
    exports: [
    ],
    providers: [
        DataService,
        ModalService
    ]
})

export class SharedModule {
}