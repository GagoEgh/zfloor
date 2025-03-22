import { Component, input } from '@angular/core';
import { CatalogFilterInterface } from '../../../shared/type/catalogFilter.interface';
import { ColorsComponent } from '../../../shared/components/colors/colors.component';
import { RoomTypesComponent } from '../../../shared/components/room-types/room-types.component';
import { CoverageComponent } from '../../../shared/components/coverage/coverage.component';
import { BrendComponent } from '../../../shared/components/brend/brend.component';
import { PictureComponent } from '../../../shared/components/picture/picture.component';

@Component({
  selector: 'zfloor-filter',
  imports: [
    RoomTypesComponent,
    ColorsComponent,
    CoverageComponent,
    BrendComponent,
    PictureComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  catalogFilter = input<CatalogFilterInterface|undefined>();
}
