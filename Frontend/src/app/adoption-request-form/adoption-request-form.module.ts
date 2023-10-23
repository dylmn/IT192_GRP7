import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { AdoptionRequestForm } from './adoption-request-form.component'

const routes = [
  {
    path: '',
    component: AdoptionRequestForm,
  },
]

@NgModule({
  declarations: [AdoptionRequestForm],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [AdoptionRequestForm],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdoptionRequestFormModule {}
