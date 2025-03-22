import { Component, input } from '@angular/core';
import { Filter } from '../../classes/filter.class';
import { TypeInterface } from '../../type/catalogFilter.interface';
import { ArroeDownIcon } from '../../ui/icons/arrowDown.icon';

@Component({
  selector: 'zfloor-brend',
  imports: [ArroeDownIcon],
  templateUrl: './brend.component.html',
  styleUrl: '../../styles/filter.scss'
})
export class BrendComponent extends Filter {
  constructor(){
    super()
  }

  public  brend = input<TypeInterface>()
}
