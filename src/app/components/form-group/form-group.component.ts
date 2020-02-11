import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentsService } from 'src/app/services/tournaments.service'
import { Tournament } from 'src/app/models/Tournament';
import { ScoresheetService } from 'src/app/services/scoresheet.service';
import { ScoreSheet } from 'src/app/models/ScoreSheet';


@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  //@HostBinding('class') classes = 'row';

  tournament: Tournament;
  scores: Array<ScoreSheet> = [];

  categoryId;

  constructor(
    private actRoute: ActivatedRoute,
    private tournamentService: TournamentsService,
    private scoreService: ScoresheetService) { }

  ngOnInit() {
    this.categoryId = this.actRoute.snapshot.params.id;
    this.getTournament(this.categoryId);
    //this.getScore('5');
    //this.order();//prueba
  }

  //como hago para que extraer el id del torneo --- hacer un metodo para encontrar un scoresheet by category id ?
  getTournament(id: number) {
    this.tournamentService.getByCategotyId(id)
      .subscribe((tournament: Tournament) => {
        this.tournament = tournament;
      })
  }

  getScore(id: number) {
    this.scoreService.getByTournamentId(id)
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

  hasAdminPermission() {
    return true;
  }
}
