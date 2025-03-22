import { Component } from "@angular/core";

@Component({
    selector:'zfloor-burger',
    template: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 18" fill="none">
            <rect  class="r-two"/>
            <rect y="8" class="r-one" />
            <rect y="16" class="r-two" />
        </svg>
    `,
    styles:[
        `
         :host {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;

            svg{
                width:22px;
                height:18px;
            }

            svg rect{
                fill:var(--color-white); 
            }

            .r-two{
                width:22px;
                height:2px;
            }

            .r-one{
                width:18px;
                height:2px;
            }
          }
        `
    ]
})
export class BurgerIcon{}