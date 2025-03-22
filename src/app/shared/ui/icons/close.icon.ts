import { Component } from "@angular/core";

@Component({
    selector:'zfloor-close',
    template: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"  fill="#000000">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
        </svg>
    `,
    styles:[
        `
         :host {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;

            svg{
                fill:var(--color-peru);
            }
          }
        `
    ]
})
export class CloseIcon{}