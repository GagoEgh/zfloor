import { Component } from '@angular/core';
import { PhoneIcon } from '../../shared/ui/icons/phone.icon';
import { SearchIcon } from '../../shared/ui/icons/search.incon';
import { LocationIcon } from '../../shared/ui/icons/location.icon';
import { StarIcon } from '../../shared/ui/icons/star.icon';
import { LoginIcon } from '../../shared/ui/icons/login.icon';
import { ShopingCardIcon } from '../../shared/ui/icons/shoping-card.icon';
import { BurgerIcon } from '../../shared/ui/icons/burger.icon';
import { ButtonElement } from '../../shared/ui/button.element';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'zfloor-header',
  imports: [
    RouterLinkActive,
    RouterLink,
    PhoneIcon,
    SearchIcon,
    LocationIcon,
    StarIcon,
    LoginIcon,
    ShopingCardIcon,
    BurgerIcon,
    ButtonElement],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 public readonly routes = [
    {link:"company",name:"О компании"},
    {link:"services",name:"Сервисы"},
    {link:"projects",name:"Проекты"},
    {link:"stocks",name:"Акции"},
    {link:"news",name:"Новости"},
    {link:"contacts",name:"Контакты"},
    {link:"reviews",name:"Отзывы"}
  ]
}

interface RouteInterface {
  link:string,
  name:string
}
