import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { NavigationLinks } from './navigation-links/navigation-links.component'
import { GalleryCard2 } from './gallery-card2/gallery-card2.component'
import { TestimonialCard1 } from './testimonial-card1/testimonial-card1.component'

@NgModule({
  declarations: [NavigationLinks, GalleryCard2, TestimonialCard1],
  bootstrap: [NavigationLinks, GalleryCard2, TestimonialCard1],
  imports: [CommonModule, RouterModule],
  exports: [NavigationLinks, GalleryCard2, TestimonialCard1],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
