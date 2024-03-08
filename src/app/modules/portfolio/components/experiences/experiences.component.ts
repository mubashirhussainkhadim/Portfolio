import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Web Developer',
        p: 'KHADIM HOSPITAL |  2020-2023',
      },
      text: '<p>As a web developer at Khadim Hospital (2020-2023), my responsibilities included frontend and backend development, website maintenance, and ensuring responsive design. Collaborated with stakeholders to integrate healthcare systems, implement SEO strategies, and uphold security measures. Managed projects to enhance the hospitals online presence and user experience.</p>',
    },
    {
    summary: {
      strong: 'Full stack Web Developer',
      p: 'Asia Solution |  2024-Continue',
    },
    text: '<p>As a Full Stack Web Developer at Asia Solutions(2024-Continue), specializing in Angular and Laravel frameworks, responsible for developing and maintaining web applications. Collaborated with teams to implement innovative solutions, ensuring seamless user experiences. Contributed to projects by leveraging expertise in both frontend and backend development.</p>',
  },
  ]);
}
