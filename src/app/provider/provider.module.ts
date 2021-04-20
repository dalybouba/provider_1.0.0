import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderRoutingModule } from './provider-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [ListComponent, CreateComponent, UpdateComponent, DisplayComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProviderRoutingModule
  ]
})
export class ProviderModule { }
