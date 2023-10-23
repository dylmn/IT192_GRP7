import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { UserHome } from './user-home.component'

const routes = [
  {
    path: '',
    component: UserHome,
  },
]

@NgModule({
  declarations: [UserHome],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [UserHome],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserHomeModule {}
