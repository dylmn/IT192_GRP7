import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { AdminHome } from './admin-home.component'

const routes = [
  {
    path: '',
    component: AdminHome,
  },
]

@NgModule({
  declarations: [AdminHome],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [AdminHome],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminHomeModule {}
