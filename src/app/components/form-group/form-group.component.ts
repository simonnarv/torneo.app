import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionService } from 'src/app/services/competition.service'
import { Competition } from 'src/app/models/competition';
import { ScoresheetService } from 'src/app/services/scoresheet.service';
import { ScoreSheet } from 'src/app/models/score-sheet';
import { GroupsService} from '../../services/groups.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  competition: Competition;
  scores: Array<ScoreSheet> = [];

  competitionId;

  constructor(
    private actRoute: ActivatedRoute,
    private competitionService: CompetitionService,
    private scoreService: ScoresheetService,
    private groupsService: GroupsService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.competitionId = this.actRoute.snapshot.params.id;
    //this.getTournament(this.competitionId);
  }

  /* getTournament(id: number) {
    this.tournamentService.getByCategotyId(id)
      .subscribe((tournament: Tournament) => {
        this.tournament = tournament;
      })
  }*/

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
    return true; //this.loginService.isAdmin();
  }

  delete(id: number) {
    this.groupsService.delete(id).subscribe(
      res => {
        //this.getTournament(this.actRoute.snapshot.params.id);
      } 
    )
  }
}
