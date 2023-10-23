import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'admin-login',
  templateUrl: 'admin-login.component.html',
  styleUrls: ['admin-login.component.css'],
})
export class AdminLogin {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Admin-Login - angular-design')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Admin-Login - angular-design',
      },
    ])
  }
}
