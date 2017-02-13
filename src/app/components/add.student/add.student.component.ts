// Importer la class component 
import { Component } from '@angular/core';

// définir le décorateur @component
@Component({
    // Définir la balise html
    selector: 'add-student-cmp',
    
    // Associer un templateUrl
    templateUrl: 'app/components/add.student/add.student.component.html'
})
 // Exporter la class du composant
export class AddStudentComponent {

}