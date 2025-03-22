import { Component } from "@angular/core";

@Component({
    selector:'zfloor-arrow-down',
    template: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
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
                fill:var(--color-gray);
            }
          }
        `
    ]
})
export class ArroeDownIcon{}