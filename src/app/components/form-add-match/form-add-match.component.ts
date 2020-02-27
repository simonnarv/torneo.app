import { Component, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/services/matches.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Match } from 'src/app/models/match';
import { TeamsService } from 'src/app/services/teams.service';
import { MatchStatus } from 'src/app/models/enums/match-status';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-form-add-match',
  templateUrl: './form-add-match.component.html',
  styleUrls: ['./form-add-match.component.css']
})
export class FormAddMatchComponent implements OnInit {

  match: Match = {
    homeTeam: null,
    awayTeam: null,
    groupId: 0,
    homeScore: 0,
    awayScore: 0,
    matchStatus: MatchStatus.PENDING,
    pitch: ""
  };

  matchStatus = MatchStatus;
  keys = [];
  //status : MatchStatus[] = (MatchStatus.DELAYED,MatchStatus.PENDING)

  homeTeamId : number;
  awayTeamId : number;

  groupId;
  competitionId;
  teams;

  constructor(private matchService: MatchesService,
    private teamService: TeamsService,
    private router: Router,
    private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.groupId = this.actRoute.snapshot.params.id;
    this.competitionId = this.actRoute.snapshot.params.competitionId;
    this.match.groupId = this.groupId;
    
    this.setTeams();
    // setear el enum
    this.keys = Object.keys(this.matchStatus);
  }

  setTeams() {
    this.teamService.getAll()
    .subscribe((response: Team[]) => {
        this.teams = response
      })
  }

  save() {
    this.matchService.create(this.match).subscribe(
      res => {
        this.router.navigate(['futbol/competition']);
      }
    );
  }
}
