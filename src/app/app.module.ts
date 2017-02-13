import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Pour pouvoir utiliser le ngModel, il faut ajouter la classe FormsModule
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './components/mainCmp/app.component';
import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { EditStudentComponent} from './components/edit.student/edit.student.component';
import { AddStudentComponent} from './components/add.student/add.student.component';



@NgModule({
  // Ajouter les class ds le tableau des imports
  imports:      [ BrowserModule, FormsModule ],
  
  // Ajouter les composants ds le tableau des décorations
  declarations: [ AppComponent, DashboardComponent, EditStudentComponent, AddStudentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
