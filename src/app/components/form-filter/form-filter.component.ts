import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentsService } from 'src/app/services/tournaments.service'
import { Tournament } from 'src/app/models/Tournament';
import { ScoresheetService } from 'src/app/services/scoresheet.service';


@Component({
  selector: 'app-form-filter',
  templateUrl: './form-filter.component.html',
  styleUrls: ['./form-filter.component.css']
})
export class FormFilterComponent implements OnInit {

  tournament;
  scores: any = [];
  id: number;//added 

  constructor(
    private actRoute: ActivatedRoute,
    private tournamentService: TournamentsService,
    private scoreService: ScoresheetService) { }

  ngOnInit() {
    this.getTournament(this.actRoute.snapshot.params.id);

    this.getScore('5');
  }

  getTournament(id: string) {
    this.tournamentService.getTournamentsByCategotyId(id)
      .subscribe((tournament: Tournament) => {
        console.log(tournament.id);
        this.tournament = tournament;
        console.log(this.tournament);
      })
  }


  getScore(id: string) {
    this.scoreService.getScoreSheetsByTournament(id)
      .subscribe((response) => { this.scores = response; })
  }

  getAllScores() {
    this.scoreService.getScoreSheets()
      .subscribe(
        (response) => { this.scores = response; console.log(response); }
      )
  }
}
