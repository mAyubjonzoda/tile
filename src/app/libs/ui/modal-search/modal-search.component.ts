import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-search',
  imports: [],
  templateUrl: './modal-search.component.html',
  styleUrl: './modal-search.component.scss',
})
export class ModalSearchComponent {
  itemsArray: string[] = [
    'закрепить теги',
    'кнопка',
    'приложение',
    'форма',
    'текстовое поле',
    'выпадающий список',
  ];

  firstCheckbox: string[] = ['Я участник', 'Строгий поиск', 'В заголовках'];
  secondCheckbox: string[] = ['Теги', 'Просьбы', 'Контакты'];
}
