import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Components
import { AppComponent } from './app.component';
// Modules
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
