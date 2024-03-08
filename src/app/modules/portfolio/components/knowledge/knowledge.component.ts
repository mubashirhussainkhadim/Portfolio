import { Component, signal } from '@angular/core';

// Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de html5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Css',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: ' javascript',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'angular',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'nodejs',
    },
    {
      src: 'assets/icons/knowledge/laravel.svg',
      alt: ' Laravel',
    },
  ]);
}
