import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'admin-dog-view',
  templateUrl: 'admin-dog-view.component.html',
  styleUrls: ['admin-dog-view.component.css'],
})
export class AdminDogView {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Admin-Dog-View - angular-design')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Admin-Dog-View - angular-design',
      },
    ])
  }
}
