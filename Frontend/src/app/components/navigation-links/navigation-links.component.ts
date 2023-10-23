import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links',
  templateUrl: 'navigation-links.component.html',
  styleUrls: ['navigation-links.component.css'],
})
export class NavigationLinks {
  @Input()
  About: string = 'About'
  @Input()
  Dogs: string = 'Dogs'
  @Input()
  Adopt: string = 'Adoption'
  @Input()
  Home2: string = 'Home'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
