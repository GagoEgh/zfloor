import { Component, input } from '@angular/core';
import { ArroeDownIcon } from '../../ui/icons/arrowDown.icon';
import { Filter } from '../../classes/filter.class';
import { TypeInterface } from '../../type/catalogFilter.interface';

@Component({
  selector: 'zfloor-picture',
  imports: [ArroeDownIcon],
  templateUrl: './picture.component.html',
  styleUrl: '../../styles/filter.scss'
})
export class PictureComponent extends Filter{
  constructor(){
    super()
  }

 public picture = input<TypeInterface>()
}
