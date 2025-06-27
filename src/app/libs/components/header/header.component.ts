import { Component, HostListener, signal } from '@angular/core';
import { SvgIconComponent } from '../../ui/svg-icon/svg-icon.component';
import { ModalSearchComponent } from '../../ui/modal-search/modal-search.component';

@Component({
  selector: 'app-header',
  imports: [SvgIconComponent, ModalSearchComponent],
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
  modal = signal<boolean>(false);

  showModal() {
    this.modal.set(true);
  }

  hideModal() {
    this.modal.set(false);
  }

  open() {
    this.isVisible.set(true);
  }
  close() {
    this.isVisible.set(false);
    this.modal.set(false);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.click')) {
      this.close();
      this.hideModal();
    }
  }
}
