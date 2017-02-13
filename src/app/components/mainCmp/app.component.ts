// importer la classe Component pour créer un composant
import { Component } from '@angular/core';

// Définir le décorateur @Component
@Component({
  selector: 'my-app',
  
  // Ajouter un fichier html pour la vue : tt le chemein depuis la racine (src)
  templateUrl: 'app/components/mainCmp/app.component.html'
})

// Exporter la classe du composant
export class AppComponent  { 
  name = 'Nadia'; 

 
}
