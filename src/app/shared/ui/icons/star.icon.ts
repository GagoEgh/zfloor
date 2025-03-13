import { Component } from '@angular/core';

@Component({
  selector: 'zfloor-star',
  imports: [],
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/>
    </svg>
  `,
  styles:[`
          :host {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;

            svg{
              fill:var(--color-gray);
            }
          }
    `]
})
export class StarIcon {}
