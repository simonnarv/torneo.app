import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TournamentsService } from '../../services/tournaments.service';
import { Tournament } from 'src/app/models/Tournament';
import { TeamGroup } from 'src/app/models/TeamGroup';
//import {competitionsStatus} from 'src/app/models/CompetitionStatus';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.css']
})
export class CreateTournamentComponent implements OnInit {

  constructor(private tournamentService: TournamentsService,
    private router: Router,
    private activedRoute: ActivatedRoute) { }

  //objeto donde se almacena el input del usuario
  tournament: Tournament = {
    id: 0,
    name: "",
    competitionsStatus: 0,
    groups: Array<TeamGroup>()
  }


  ngOnInit() {
  }

  saveNewTournament() {
    this.tournamentService.saveTournament(this.tournament).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/teams']);
      },
      err => console.log(err)
    )
  }



}
