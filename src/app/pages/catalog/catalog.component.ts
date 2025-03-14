import { Component } from '@angular/core';
import { VectorRightIcon } from '../../shared/ui/icons/vector-right.icon';
import { LaminatIcon } from '../../shared/ui/icons/laminat.icon';
import { PvhIcon } from '../../shared/ui/icons/pvh.icon';
import { LinoleumIcon } from '../../shared/ui/icons/linoleum.icon';
import { KovrTilesIcon } from '../../shared/ui/icons/kovr-tiles.icon';
import { KovrolinIcon } from '../../shared/ui/icons/kovrolin.icon';
import { HotelIcon } from '../../shared/ui/icons/hotel.icon';
import { HomeIcon } from '../../shared/ui/icons/home.icon';
import { TheatreIcon } from '../../shared/ui/icons/theatre.icon';
import { OfficeChairIcon } from '../../shared/ui/icons/office-chair.icon';
import { PubIcon } from '../../shared/ui/icons/pub.icon';

@Component({
  selector: 'zfloor-catalog',
  imports: [
    KovrolinIcon,
    KovrTilesIcon,
    LinoleumIcon,
    PvhIcon,
    LaminatIcon,
    VectorRightIcon,
    HotelIcon,
    HomeIcon,
    TheatreIcon,
    OfficeChairIcon,
    PubIcon
  ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {

}
