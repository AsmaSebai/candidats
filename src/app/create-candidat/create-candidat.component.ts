import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-create-candidat',
  templateUrl: './create-candidat.component.html',
  styleUrls: ['./create-candidat.component.css']
})
export class CreateCandidatComponent {
  firstName
  lastName
  leadership
  travailequipe
  initiative
  capacite
  autonomie
  rigueur
  creativite
  constructor(private candidatservice: CandidatService, public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  saveCandidat(formValues) {
    this.candidatservice.saveCandidat(formValues);
    this.router.navigate(['candidat'])
  }

  cancel() {
    this.router.navigate(['candidat'])
  }

}
