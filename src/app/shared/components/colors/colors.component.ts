import { Component, input } from '@angular/core';
import { ArroeDownIcon } from '../../ui/icons/arrowDown.icon';
import { RoomColorsInterface} from '../../type/catalogFilter.interface';
import { Filter } from '../../classes/filter.class';

@Component({
  selector: 'zfloor-colors',
  imports: [ArroeDownIcon],
  templateUrl: './colors.component.html',
  styleUrl: '../../styles/filter.scss'

})
export class ColorsComponent extends Filter{
  constructor(){
    super()
  }
  
  public colors = input<RoomColorsInterface | undefined>();
}
