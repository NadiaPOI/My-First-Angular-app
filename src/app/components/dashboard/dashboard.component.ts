// Importer la class component 
import { Component } from '@angular/core';

// définir le décorateur @component
@Component({
    // Définir la balise html
    selector: 'dashboard-cmp',
    
    // Associer un templateUrl
    templateUrl: 'app/components/dashboard/dashboard.component.html'
})
 // Exporter la class du composant
export class DashboardComponent {

}