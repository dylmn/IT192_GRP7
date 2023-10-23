import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { UserAdoption } from './user-adoption.component'

const routes = [
  {
    path: '',
    component: UserAdoption,
  },
]

@NgModule({
  declarations: [UserAdoption],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [UserAdoption],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserAdoptionModule {}
