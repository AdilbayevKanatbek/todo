import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { CreateTodoComponent } from './todo/create-todo/create-todo.component';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';
import {
  AccordionModule,
  ButtonModule,
  DataTableModule,
  PanelModule,
  RadioButtonModule,
  TabViewModule,
  ToolbarModule
} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {ToastrModule} from 'ngx-toastr';

const appRoutes: Routes = [
  {path: 'main', component: CreateTodoComponent},
  {path: 'create', component: CreateTodoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CreateTodoComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ToolbarModule,
    DataTableModule,
    TabViewModule,
    AccordionModule,
    TableModule,
    PanelModule,
    ButtonModule,
    ToastrModule.forRoot(),
    RadioButtonModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
