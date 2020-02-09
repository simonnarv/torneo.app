import { Component, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/services/matches.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Match } from 'src/app/models/Match';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-form-add-match',
  templateUrl: './form-add-match.component.html',
  styleUrls: ['./form-add-match.component.css']
})
export class FormAddMatchComponent implements OnInit {

  match: Match = {
    homeTeam: { id: null },
    awayTeam: { id: null },
    groupId: 0,
    homeScore: 0,
    awayScore: 0,
    matchStatus: MatchStatus.PENDING
  };

  teams;

  constructor(private matchService: MatchesService,
    private teamService: TeamsService,
    private router: Router,
    private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.match.groupId = this.actRoute.snapshot.params.groupId;
    var competitionId  = this.actRoute.snapshot.params.competitionId;

    this.setTeams(competitionId);
  }

  setTeams(competitionId: number) {
    this.teams = this.teamService.getByCompetitionId(competitionId);
  }

  save() {
    this.matchService.save(this.match).subscribe();
  }
}
