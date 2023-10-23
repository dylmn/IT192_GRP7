import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'adoption-request-form',
  templateUrl: 'adoption-request-form.component.html',
  styleUrls: ['adoption-request-form.component.css'],
})
export class AdoptionRequestForm {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Adoption-Request-Form - angular-design')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Adoption-Request-Form - angular-design',
      },
    ])
  }
}
