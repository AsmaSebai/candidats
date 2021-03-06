import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CandidatService } from '../candidat.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {
  faEye = faEye;
  title = 'bar-chart';
  barChartOptions: ChartOptions = {
  responsive: true,
  };
  barChartLabels: Label[] = ["Leadership", "Travail d'équipe", "Initiative", "Capacité", "Autonomie", "Rigueur", "Creativité"];
  barChartType: ChartType = 'horizontalBar';
  barChartLegend = true;
  barChartPlugins: any = {
    'backgroundColor': [
      "#FF6384",
      "#4BC0C0",
      "#FFCE56",
      "#E7E9ED",
      "#36A2EB"
    ]
  }

  public barChartColors: Color[] = [
    { backgroundColor: '#f7815c' },
  ]

  public barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46], label: 'Task Status' }
  ];

  firstName
  lastName
  leadership
  travailequipe
  initiative
  capacite
  autonomie
  rigueur
  creativite
  candidats: any;
  constructor(private candidatservice: CandidatService, public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.candidats = this.candidatservice.getCandidats()
  }
  saveProfile(formValues) {

  }

 
  newCandidat() {
    this.router.navigate(['nouveauCandidat'])
  }

  chartsCandidat(id) {
    this.capacite = this.candidatservice.getCandidatsId(id).capacite
    this.leadership = this.candidatservice.getCandidatsId(id).leadership
    this.travailequipe = this.candidatservice.getCandidatsId(id).travailequipe
    this.initiative = this.candidatservice.getCandidatsId(id).initiative
    this.autonomie = this.candidatservice.getCandidatsId(id).autonomie
    this.rigueur = this.candidatservice.getCandidatsId(id).rigueur
    this.creativite = this.candidatservice.getCandidatsId(id).creativite
    this.barChartData = [
      { data: [this.capacite, this.leadership, this.travailequipe, this.initiative, this.autonomie, this.rigueur, this.creativite], label: 'Les compétences' }
    ];
    return this.candidatservice.getCandidatsId(id)
  }
}
