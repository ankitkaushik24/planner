import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  template: `<strong class="capitalize">{{ folderName }}</strong>
    <p>Coming Soon...</p>`,
  styles: [
    `
      strong {
        font-size: 20px;
        line-height: 26px;
      }

      p {
        font-size: 16px;
        line-height: 22px;
        color: #8c8c8c;
        margin: 0;
      }
    `,
  ],
})
export default class PlaceholderComponent {
  folderName = inject(ActivatedRoute).snapshot.paramMap.get('id');
}
