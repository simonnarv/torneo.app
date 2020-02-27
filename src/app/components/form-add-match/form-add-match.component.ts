import { Component, OnInit } from '@angular/core';
import { MatchesService } from '../../services/matches.service';
import { CompetitionService } from '../../services/competition.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Match } from 'src/app/models/match';
import { TeamsService } from 'src/app/services/teams.service';
import { MatchStatus } from 'src/app/models/enums/match-status';
import { Team } from 'src/app/models/team';
import { TeamScoreSheet } from 'src/app/models/teamScoreSheet';

@Component({
  selector: 'app-form-add-match',
  templateUrl: './form-add-match.component.html',
  styleUrls: ['./form-add-match.component.css']
})
export class FormAddMatchComponent implements OnInit {

  match: Match = {
    homeTeam: null,
    awayTeam: null,
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
  teams: Array<Team>;;

  constructor(private matchService: MatchesService,
    private teamService: TeamsService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private competitionService: CompetitionService) { }

  ngOnInit() {
    this.groupId = this.actRoute.snapshot.params.id;
    this.competitionId = this.actRoute.snapshot.params.competitionId;
    //this.match.groupId = this.groupId;

    this.setTeamScoreSheets(this.actRoute.snapshot.params.competitionId);
    this.getTeams();
    // setear el enum
    this.keys = Object.keys(this.matchStatus);
  }

  setTeamScoreSheets(id: number) {
    this.competitionService.getTeamScoreSheets(id)
      .subscribe((response: TeamScoreSheet[]) => {
        this.teamScoreSheets = response;
      });
  }

  getTeams() {
    this.teamService.getAll()
      .subscribe((response: Team[]) => {
        this.teams = response;
      });
  }

  setTeams() {
    this.match.homeTeam = this.teams.find(X => X.id == this.homeTeamId);
    this.match.awayTeam = this.teams.find(X => X.id == this.awayTeamId);
  }

  save() {
    this.setTeams();

    this.matchService.create(this.match).subscribe(
      res => {
        this.router.navigate(['/futbol/competition/', this.competitionId, 'group', this.groupId, 'matches']);
      });
  }
}
