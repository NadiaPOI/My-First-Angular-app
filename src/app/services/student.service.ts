// Importer la class pour configurer un service
import { Injectable } from '@angular/core';

// Importer les class Http et Headers

import { Http, Headers} from '@angular/http';

// Importer le système de promesse
import 'rxjs/add/operator/toPromise';

// Créer une collection de données
 export const LIST = [
   {
     id: 0,
     firstName: 'Georges',
     lastName: 'Harrisson',
     state: 1
   },
   {
     id: 1,
     firstName: 'Paul',
     lastName: 'McCartney',
     state: 0
   },
   {
     id: 2,
     firstName: 'John',
     lastName: 'Lennon',
     state: 2
   },
   {
     id: 3,
     firstName: 'Ringo',
     lastName: 'Starr',
     state: 0
   }

 ];

// Utiliser le décorateur @Injectable
@Injectable()

// Exporter la class du service
export class StudentService {

   constructor(
    private http: Http
  ) { }

 

// Créer une fonction pour afficher la liste des étudiants
showStudentList(): Promise<any[]>{

  // Envoyer le contenu de LIST
  return Promise.resolve(LIST);
};

// Créer une fonction pour ajouter un étudiant ds la liste
addStudentInStudentList(object){
    
    // Ajouter le nouvel étudiant ds le tableau
    LIST.push(object);
};

  // Création d'une fonction pour connaître la taille du tableau LIST
  getListLength(): Promise<number>{
    return Promise.resolve(LIST.length);
  };
  
  // Création d'une fonction pour mettre à jour un item du tableau LIST
  editStudentList(){
    // Créer une variable pour l'item à modifier
    let selectedStudent = LIST[0];

    // Modifier le firstName, le lastName de l'item selectionné
    selectedStudent.firstName = 'Nadia';
    selectedStudent.lastName = 'Poi';
    selectedStudent.state = 0;
  }

  // Création d'une fonction pour récuperer les informations d'un étudiant
  getSelectedStudentInfo(id): Promise<any>{
    return Promise.resolve(LIST[id]);
  }
};
