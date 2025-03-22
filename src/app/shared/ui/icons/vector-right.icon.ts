import { Component } from "@angular/core";

@Component({
    selector:'zfloor-vector-right',
    template: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
        </svg>
    `,
    styles:[
        `
         :host {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 22px;
            height: 22px;

            svg{
              fill:var(--color-gray);
            }
          }
        `
    ]
})
export class VectorRightIcon{}