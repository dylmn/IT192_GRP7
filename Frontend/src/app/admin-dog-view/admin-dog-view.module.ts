import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { AdminDogView } from './admin-dog-view.component'

const routes = [
  {
    path: '',
    component: AdminDogView,
  },
]

@NgModule({
  declarations: [AdminDogView],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [AdminDogView],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminDogViewModule {}
