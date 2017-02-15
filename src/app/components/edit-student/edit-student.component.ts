import { Component, OnInit } from '@angular/core';

// Importer la class du Router
import { Router, ActivatedRoute, Params } from '@angular/router';

//1- Importer la class du service
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',

  // 2- Ajouter le service ds le tableau des providers
  providers:[StudentService]

})
export class EditStudentComponent implements OnInit {

  // 3- Définir une variable pour utiliser le service
  constructor(
    private studentService: StudentService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){ };

  // Créer un objet vide 
   selectedStudent = {
     id: 0,
     firstName: '',
     lastName: '',
     // Le type number ne peut pas être vide
     state: 0
    };

  // Créer une FAKE-fonction pour mettre à jour l'étudiant selectionné
  editSelectedStudent(){
    // Renvoyer l'utilisateur vers la vue dashboard
    this.router.navigateByUrl('/dashboard');
  };

  //Créer une fonction pour récuperer les données de l'étudiant selectionné
  getSelectedStudentData(id){
    this.studentService.getSelectedStudentInfo(id).then(data => this.selectedStudent = data);

      
  };

    ngOnInit() {
      
      
      // Récuperer le paramètre : id de la Route
      this.activatedRoute.params.forEach(
        params => {
           let id = +params['id'];
           this.getSelectedStudentData(id);
        }
      )
    

  }

}
