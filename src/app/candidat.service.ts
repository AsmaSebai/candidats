import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { AuthService } from './auth.service'
import { ICandidat } from './candidat.model'
@Injectable()

export class CandidatService {
  constructor(private authenService: AuthService) { }
  candidats: ICandidat
  getCandidats() {
    return CANDIDATS
  }

  getCandidatsId(id: number) {
    this.candidats = CANDIDATS.find(candidats => candidats.id === id)
    console.log("leadership" + this.candidats.leadership)
    return this.candidats
  }

  saveCandidat(candidat) {
    candidat.id = 999;
    candidat.idUser = this.authenService.currentUser.id;
    CANDIDATS.push(candidat)
  }
}

const CANDIDATS: ICandidat[] = [
  {
    id: 1,
    idUser: 1,
    firstName: 'Robin',
    lastName: 'Etheron',
    leadership: 1,
    travailequipe: 2,
    initiative: 5,
    capacite: 9,
    autonomie: 10,
    rigueur: 9,
    creativite: 1
  },
  {
    id: 2,
    idUser: 1,
    firstName: 'Styvie',
    lastName: 'Etherne',
    leadership: 1,
    travailequipe: 2,
    initiative: 5,
    capacite: 5,
    autonomie: 10,
    rigueur: 9,
    creativite: 1
  },
  {
    id: 3,
    idUser: 2,
    firstName: 'Max',
    lastName: 'Therone',
    leadership: 1,
    travailequipe: 2,
    initiative: 5,
    capacite: 8,
    autonomie: 10,
    rigueur: 9,
    creativite: 1
  },
  {
    id: 4,
    idUser: 1,
    firstName: 'Elodie',
    lastName: 'Atheron',
    leadership: 1,
    travailequipe: 2,
    initiative: 5,
    capacite: 9,
    autonomie: 10,
    rigueur: 9,
    creativite: 1
  },
  {
    id: 5,
    idUser: 2,
    firstName: 'Margo',
    lastName: 'Etheron',
    leadership: 1,
    travailequipe: 2,
    initiative: 5,
    capacite: 9,
    autonomie: 10,
    rigueur: 9,
    creativite: 10
  },

]