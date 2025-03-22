import { ChangeDetectionStrategy, Component, inject, Renderer2} from '@angular/core';
import { VectorRightIcon } from '../../../shared/ui/icons/vector-right.icon';
import { LaminatIcon } from '../../../shared/ui/icons/laminat.icon';
import { PvhIcon } from '../../../shared/ui/icons/pvh.icon';
import { LinoleumIcon } from '../../../shared/ui/icons/linoleum.icon';
import { KovrTilesIcon } from '../../../shared/ui/icons/kovr-tiles.icon';
import { KovrolinIcon } from '../../../shared/ui/icons/kovrolin.icon';
import { CatalogFilterInterface } from '../../../shared/type/catalogFilter.interface';
import { ApiService } from '../../../core/services/api.service';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'zfloor-catalog',
  imports: [
    FilterComponent,
    KovrolinIcon,
    KovrTilesIcon,
    LinoleumIcon,
    PvhIcon,
    LaminatIcon,
    VectorRightIcon,
  ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CatalogComponent {
  private readonly apiService = inject(ApiService);
  private renderer = inject(Renderer2)

  private catalogFilters!:CatalogFilterInterface[];
  public catalogFilter:CatalogFilterInterface|undefined;
  public filterName = '';

  constructor(){
    this.apiService.getCatalogFilterParametr()
    .subscribe((res:CatalogFilterInterface[])=>{
        this.catalogFilters = res;
        this.catalogFilter = this.catalogFilters[0];
    })
  }

  public moveThroughFilter(ev:MouseEvent,el:HTMLElement):void{
    const element = ev.target as HTMLElement;
    const children = Array.from(el.children);

    children.forEach(item=>{
      this.renderer.removeClass(item,'active');
    })
    
    this.catalogFilter =  this.catalogFilters?.find((item)=>item.name === element.innerText);
    this.renderer.addClass( ev.target,'active');

  }

}
