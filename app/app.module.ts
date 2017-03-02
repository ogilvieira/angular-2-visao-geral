//importa NgModule do core do Angular
import {NgModule} from '@angular/core';
//Lib que dá suporte a desktop browsers
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent, TaskEditComponent} from './app.component';
import {FormsModule} from '@angular/forms';

//Configura modulo através do decoration
@NgModule({
  imports: [BrowserModule, FormsModule], //moduloes a serem importados
  declarations: [AppComponent, TaskEditComponent], //todos componentes do modulo
  bootstrap: [AppComponent] //componente que ira inicializar o modulo
})

//exporta AppModule
export class AppModule{
  
}