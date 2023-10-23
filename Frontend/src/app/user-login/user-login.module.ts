import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { UserLogin } from './user-login.component'

const routes = [
  {
    path: '',
    component: UserLogin,
  },
]

@NgModule({
  declarations: [UserLogin],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [UserLogin],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserLoginModule {}
