import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentsService } from 'src/app/services/tournaments.service'
import { Tournament } from 'src/app/models/tournament';
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

  //@HostBinding('class') classes = 'row';

  tournament: Tournament;
  scores: Array<ScoreSheet> = [];

  categoryId;

  constructor(
    private actRoute: ActivatedRoute,
    private tournamentService: TournamentsService,
    private scoreService: ScoresheetService,
    private groupsService: GroupsService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.categoryId = this.actRoute.snapshot.params.id;
    this.getTournament(this.categoryId);
  }

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
    return this.loginService.isAdmin();
  }

  delete(id: number) {
    this.groupsService.delete(id).subscribe(
      res => {
        this.getTournament(this.actRoute.snapshot.params.id);
      } 
    )
  }
}
