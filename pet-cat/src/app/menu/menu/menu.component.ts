import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  itemsMenu = [
    {
      link: '/main',
      title: 'Главная',
      disabled: true
    },
    {
      link: '/draw',
      title: 'Рисуем котика',
      disabled: true
    },
    {
      link: '/statistic',
      title: 'Статистика',
      disabled: true
    },
    {
      link: '/form',
      title: 'Формулируй котика',
      disabled: true
    }

  ];

  constructor() { }

}
