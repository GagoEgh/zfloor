import { Component, input } from '@angular/core';
import { RoomColorsInterface } from '../../type/catalogFilter.interface';
import { Filter } from '../../classes/filter.class';
import { ArroeDownIcon } from '../../ui/icons/arrowDown.icon';


@Component({
  selector: 'zfloor-room-types',
  imports: [ArroeDownIcon],
  templateUrl: './room-types.component.html',
  styleUrl: '../../styles/filter.scss'
})
export class RoomTypesComponent extends Filter{
  constructor(){
    super()
  }
  
  roomType = input<RoomColorsInterface | undefined>();
}
