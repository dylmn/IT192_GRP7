import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'user-login',
  templateUrl: 'user-login.component.html',
  styleUrls: ['user-login.component.css'],
})
export class UserLogin {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('User-Login - angular-design')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'User-Login - angular-design',
      },
    ])
  }
}
