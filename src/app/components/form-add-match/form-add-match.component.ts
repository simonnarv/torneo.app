import { Component, OnInit } from '@angular/core';
import { MatchesService } from '../../services/matches.service';
import { CompetitionService } from '../../services/competition.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Match } from 'src/app/models/match';
import { TeamsService } from 'src/app/services/teams.service';
import { MatchStatus } from 'src/app/models/enums/match-status';
import { Team } from 'src/app/models/team';
import { TeamScoreSheet } from 'src/app/models/teamScoreSheet';
import { ScoresheetService } from 'src/app/services/scoresheet.service';
import { ScoreSheet } from 'src/app/models/score-sheet';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-add-match',
  templateUrl: './form-add-match.component.html',
  styleUrls: ['./form-add-match.component.css']
})
export class FormAddMatchComponent implements OnInit {

  match: Match = {
    homeScore: 0,
    awayScore: 0,
    matchStatus: MatchStatus.PENDING,
    pitch: ""
  };

  //enum
  matchStatus = MatchStatus;
  keys = [];

  //added to set teams from teamScoreSheet
  homeTeamId: number;
  awayTeamId: number;

  groupId;
  competitionId;

  //select array
  teamScoreSheets;
  //teams array
  //teams: Array<Team>;;

  constructor(private matchService: MatchesService,
    private teamService: TeamsService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private competitionService: CompetitionService,
    private scoreSheetService: ScoresheetService) { }

  ngOnInit() {
    this.groupId = this.actRoute.snapshot.params.id;
    this.competitionId = this.actRoute.snapshot.params.competitionId;
    //this.match.groupId = this.groupId;

    this.setTeamScoreSheets(this.actRoute.snapshot.params.competitionId);
    //this.getTeams();
    // setear el enum
    this.keys = Object.keys(this.matchStatus);
  }

  setTeamScoreSheets(id: number) {
    this.competitionService.getTeamScoreSheets(id)
      .subscribe((response: TeamScoreSheet[]) => {
        this.teamScoreSheets = response;
      });
  }

  /*getTeams() {
    this.teamService.getAll()
      .subscribe((response: Team[]) => {
        this.teams = response;
      });
  }*/

  save() {

    var awayTeamId = this.awayTeamId;

    this.getScoreSheetById(this.homeTeamId).subscribe(
      (homeTeam: ScoreSheet) => {
        this.match.homeTeam = homeTeam;
        this.getScoreSheetById(awayTeamId).subscribe(
          (awayTeam: ScoreSheet) => {
          this.match.awayTeam = awayTeam;
          this.matchService.create(this.match).subscribe(
            res => {
              this.router.navigate(['/futbol/competition/', this.competitionId, 'group', this.groupId, 'matches']);
            });
          }
        )
      }
    )
  }

  getScoreSheetById(teamId: number) : Observable<ScoreSheet> {
    return this.scoreSheetService.getById(teamId)
  }
}
