import { Component } from "@angular/core";

@Component({
    selector:'zfloor-btn',
    template:`
        <button class="btn"><ng-content></ng-content></button>
    `,
    styles:[
        `
         .btn{
            border: 1px solid var(--color-peru);
            color: var(--color-peru);
            padding: 5px 10px;
            background: var(--color-white);
            letter-spacing: 0.5px;
            cursor:pointer;
            transition:0.5s all;

            &:active{
                border: 1px solid var(--color-white);
                color: var(--color-white);
                background: var(--color-peru);
                transition:0.5s all;
            }
         }
        `
    ]
    
})
export class ButtonElement{
}