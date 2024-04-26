import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class LoginFormComponent implements OnInit {


  // Propriétés pour stocker les valeurs du formulaire

  email!: string;

  password!: string;


  constructor() { }


  ngOnInit() {

  }


  onSubmit() {

    // Soumettre le formulaire et envoyer les données

    console.log('Formulaire soumis !');

  }

}