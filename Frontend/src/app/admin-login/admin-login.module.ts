import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { AdminLogin } from './admin-login.component'

const routes = [
  {
    path: '',
    component: AdminLogin,
  },
]

@NgModule({
  declarations: [AdminLogin],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [AdminLogin],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminLoginModule {}
