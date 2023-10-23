import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'admin-home',
  templateUrl: 'admin-home.component.html',
  styleUrls: ['admin-home.component.css'],
})
export class AdminHome {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Admin-Home - angular-design')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Admin-Home - angular-design',
      },
    ])
  }
}
