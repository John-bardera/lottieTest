import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { EmptyStateComponent } from '@/components/empty-state/empty-state.component';

@NgModule({
  declarations: [
    EmptyStateComponent,
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule,
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    EmptyStateComponent,
  ],
})

export class ComponentsModule {}
