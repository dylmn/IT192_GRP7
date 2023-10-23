import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'user-adoption',
  templateUrl: 'user-adoption.component.html',
  styleUrls: ['user-adoption.component.css'],
})
export class UserAdoption {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('User-Adoption - angular-design')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'User-Adoption - angular-design',
      },
    ])
  }
}
