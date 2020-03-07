import { Component, OnInit } from '@angular/core';
import { MatchesService } from '../../services/matches.service';
import { CompetitionService } from '../../services/competition.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Match } from 'src/app/models/match';
import { MatchStatus } from 'src/app/models/enums/match-status';
import { TeamScoreSheet } from 'src/app/models/team-score-sheet';
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
    pitch: ""
  };

  hours;
  minutes;

  //enum
  matchStatus = MatchStatus;
  keys = [];

  //added to set teams from teamScoreSheet
  homeTeamId: number;
  awayTeamId: number;

  //ids
  groupId;
  competitionId;
  matchId;

  //select array
  teamScoreSheets;

  constructor(private matchService: MatchesService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private competitionService: CompetitionService,
    private scoreSheetService: ScoresheetService) { }

  ngOnInit() {
    //id group
    this.groupId = this.actRoute.snapshot.queryParams.groupId;
    var stageId = this.actRoute.snapshot.queryParams.stageId;
    if (this.groupId) {
      console.log("por Grupo " + this.groupId);
    } else if (stageId) {
      console.log("por stage " + stageId);
    }

    //id competition
    this.competitionId = this.actRoute.snapshot.params.competitionId;
    //id match
    this.matchId = this.actRoute.snapshot.params.matchId;
    if (this.matchId) {
      this.getMatch(this.matchId);
    }
    this.setTeamScoreSheets(this.actRoute.snapshot.params.competitionId);
    // setear el enum
    this.keys = Object.keys(this.matchStatus);
  }

  getMatch(id: number) {
    this.matchService.getById(id).subscribe(
      (match: Match) => {
        this.match = match

        this.hours = this.match.date.getHours();
        this.minutes = this.match.date.getMinutes();
      });
  }

  setTeamScoreSheets(id: number) {
    this.competitionService.getTeamScoreSheets(id)
      .subscribe((response: TeamScoreSheet[]) => {
        this.teamScoreSheets = response;
      });
  }

  setDate() {
    this.match.date = new Date(2020, 5, 15, this.hours, this.minutes);
  }

  save() {
    this.setDate();
    //var awayTeamId = this.awayTeamId;
    !this.matchId
      ? this.getScoreSheetById(this.homeTeamId).subscribe(
        (homeTeam: ScoreSheet) => {
          this.match.homeTeam = homeTeam;
          this.getScoreSheetById(this.awayTeamId).subscribe(
            (awayTeam: ScoreSheet) => {
              this.match.awayTeam = awayTeam;
              this.matchService.create(this.match).subscribe(
                res => {
                  this.router.navigate(['/futbol/competition/', this.competitionId, 'group', this.groupId, 'matches']);
                });
            })
        })
      : this.matchService.update(this.match.id, this.match).subscribe(
        res => {
          this.router.navigate(['/futbol/competition/', this.competitionId, 'group', this.groupId, 'matches']);
        });
  }
  getScoreSheetById(teamId: number): Observable<ScoreSheet> {
    return this.scoreSheetService.getById(teamId)
  }
}
