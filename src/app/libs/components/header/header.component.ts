import { Component, HostListener, signal } from '@angular/core';
import { SvgIconComponent } from '../../ui/svg-icon/svg-icon.component';

@Component({
  selector: 'app-header',
  imports: [SvgIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  headerItems = [
    {
      icon: 'link',
      text: 'Ссылки',
      link: '#',
    },
    {
      icon: 'contact',
      text: 'Контакты',
      link: '#',
    },
    {
      icon: 'tag',
      text: 'Теги',
      link: '#',
    },
    {
      icon: 'star',
      text: 'Избранное',
      link: '#',
    },
    {
      icon: 'history',
      text: 'Посещения',
      link: '#',
    },
  ];

  isVisible = signal<boolean>(false);

  open() {
    this.isVisible.set(true);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.click')) {
      this.isVisible.set(false);
    }
  }
}
