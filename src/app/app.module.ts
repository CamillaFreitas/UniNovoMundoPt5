import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaProfessoresComponent } from './lista-professores/lista-professores.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProfessoresComponent,
    ListaCursosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
