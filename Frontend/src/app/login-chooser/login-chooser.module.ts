import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { LoginChooser } from './login-chooser.component'

const routes = [
  {
    path: '',
    component: LoginChooser,
  },
]

@NgModule({
  declarations: [LoginChooser],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LoginChooser],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginChooserModule {}
