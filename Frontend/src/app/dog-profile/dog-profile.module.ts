import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { DogProfile } from './dog-profile.component'

const routes = [
  {
    path: '',
    component: DogProfile,
  },
]

@NgModule({
  declarations: [DogProfile],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [DogProfile],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class DogProfileModule {}
