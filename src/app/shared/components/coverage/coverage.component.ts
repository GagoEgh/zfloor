import { Component, input } from '@angular/core';
import { Filter } from '../../classes/filter.class';
import { TypeInterface } from '../../type/catalogFilter.interface';
import { ArroeDownIcon } from '../../ui/icons/arrowDown.icon';

@Component({
  selector: 'zfloor-coverage',
  imports: [ArroeDownIcon],
  templateUrl: './coverage.component.html',
  styleUrl: '../../styles/filter.scss'
})
export class CoverageComponent extends Filter{
 public coverage = input<TypeInterface>();

  constructor(){
    super()
  }
}
