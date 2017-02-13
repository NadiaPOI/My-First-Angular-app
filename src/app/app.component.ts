// importer la classe Component pour créer un composant
import { Component } from '@angular/core';

// Définir le décorateur @Component
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}, how are you?</h1>`,
  styles: [`
  h1{
    color: red;
    text-transform: uppercase;
  }
  `]
})

// Exporter la classe du composant
export class AppComponent  { name = 'Nadia'; }
