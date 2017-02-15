// Importer la class pour configurer le composant
// La class On init permet d'executer du code une fois que le composant est chargé
import { Component, OnInit } from '@angular/core';

//1- Importer la class du service
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',

  // 2- Ajouter le service ds le tableau des providers
  providers:[StudentService]
})

// Pour faire fonction OnInit il fait l'implémenter ds la class
export class DashboardComponent implements OnInit {

  // Créer une variable pour récuperer les données du service
  myStudentList: any[];

  // 3- Définir une variable pour utiliser le service
  constructor(
    private studentService: StudentService
  ) { }

  // Créer une fonction pour récuperer la liste des étudiants
  getStudentFromService(){
    this.studentService.showStudentList().then( data  => this.myStudentList = data );
  };

  // La fonction est exécutée quand le composant est chargé
  ngOnInit() {
    
    // Appeler la fonction pour recuperer la liste des étudiants
    this.getStudentFromService();
  }

}
