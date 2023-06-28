import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class IndexComponent implements OnInit {
    sideMenus: {
        url: string;
        name: string;
        icon: string;
        active: boolean;
        isOpen: boolean;
        subMenus: {
            url: string;
            name: string;
            icon: string;
        }[];
    }[];
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IndexComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IndexComponent, "app-index", never, {}, {}, never, never, false, never>;
}
