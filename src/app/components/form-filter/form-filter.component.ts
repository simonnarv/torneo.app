import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentsService } from 'src/app/services/tournaments.service'
import { Tournament } from 'src/app/models/Tournament';
import { ScoresheetService } from 'src/app/services/scoresheet.service';
import { ScoreSheet } from 'src/app/models/ScoreSheet';


@Component({
  selector: 'app-form-filter',
  templateUrl: './form-filter.component.html',
  styleUrls: ['./form-filter.component.css']
})
export class FormFilterComponent implements OnInit {

  //@HostBinding('class') classes = 'row';

  tournament: Tournament;
  scores: Array<ScoreSheet> = [];

  constructor(
    private actRoute: ActivatedRoute,
    private tournamentService: TournamentsService,
    private scoreService: ScoresheetService) { }

  ngOnInit() {
    this.getTournament(this.actRoute.snapshot.params.id);
    this.getScore('5');
    //this.order();//prueba
  }

  //como ago para que extraer el id del torneo --- hacer un metodo para encontrar un scoresheet by category id ?
  getTournament(id: string) {
    this.tournamentService.getTournamentsByCategotyId(id)
      .subscribe((tournament: Tournament) => {
        this.tournament = tournament;
      })
  }

  getScore(id: string) {
    this.scoreService.getScoreSheetsByTournament(id)
      .subscribe((response: ScoreSheet[]) => { 
        this.scores = response; 
      })
  }

  //this.data.sort((a, b) => new Date(b.CREATE_TS).getTime() - new Date(a.CREATE_TS).getTime());
  order(){
    this.scores.sort(
      (a, b) => a.points - b.points
    )
  }
}
