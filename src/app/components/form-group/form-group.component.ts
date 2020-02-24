import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionService } from 'src/app/services/competition.service'
import { Competition } from 'src/app/models/competition';
import { ScoresheetService } from 'src/app/services/scoresheet.service';
import { ScoreSheet } from 'src/app/models/score-sheet';
import { GroupsService } from '../../services/groups.service';
import { LoginService } from 'src/app/services/login.service';
import { Group } from 'src/app/models/group';
import { Team } from 'src/app/models/team';
import { TeamsService } from 'src/app/services/teams.service';


@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  //competition
  competition: Competition;
  competitionId;
  //group add
  group: Group = {
    name: "",
    stage: 1,
    competitionId: 0
  }
  //team add
  currentTeamId: number;
  teams: Team[];
  //scoresheet
  scoresheet: ScoreSheet = {
    groupId: 0,
    points: 0,
    goalFavor: 0,
    goalAgainst: 0,
    goalDifference: 0,
    group: null,
    team: null
  }
  scores: Array<ScoreSheet> = [];


  constructor(
    private actRoute: ActivatedRoute,
    private competitionService: CompetitionService,
    private teamService: TeamsService,
    private scoreService: ScoresheetService,
    private groupsService: GroupsService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.group.competitionId = this.actRoute.snapshot.params.id;//set group competitionId
    this.competitionId = this.actRoute.snapshot.params.id; 
    this.getCompetition(this.competitionId);
    this.setTeams();
  }

  hasAdminPermission() {
    return this.loginService.isAdmin();
  }

  //Competition Methods
  getCompetition(id: number) {
    this.competitionService.getById(id)
      .subscribe((response: Competition) => {
        this.competition = response;
      })
  }

  /*getScore(id: number) {//cambiar por get by competition id ?
    this.scoreService.getByTournamentId(id)
      .subscribe((response: ScoreSheet[]) => {
        this.scores = response;
      })
  }*/

  //Group Methods  
  deleteGroup(id: number) {
    this.groupsService.delete(id).subscribe(
      res => {
        this.getCompetition(this.actRoute.snapshot.params.id);
      })
  }

  //added
  saveGroupTEST(){
    this.group.scoreSheets= this.scores;
    this.competition.groups.push(this.group);
    this.competitionService.update(this.competitionId,this.competition).subscribe(
        res => {
          this.getCompetition(this.actRoute.snapshot.params.id);
          //this.competition.groups.find(group => group.id == this.currentTeamId);
        })
  }

  /*saveGroup() {
    !this.group.id
      ? this.groupsService.create(this.group).subscribe(
        res => {
          this.getCompetition(this.actRoute.snapshot.params.id);
        }
      )
      : this.groupsService.update(this.group.id, this.group).subscribe(
        res => {
          this.getCompetition(this.actRoute.snapshot.params.id);
        }
      )
  }*/

  //Team Methods
  addTeam() {
    var selectedTeam = this.teams.find(team => team.id == this.currentTeamId);
    /*crear y agregar una scoresheet? necesito un modelo de scoresheet
    el problema es q como no cree todavia el grupo este no tiene id, entonces
    no le puedo pasar dicha id a scoresheet, ni tampoco el objeto grupo,
    supongo q cuando le agrego matches y actualizo la scoresheet tambien actualizo
    esos valores, si es q los necesito al final---
    --conste q por la forma en q los guardo la tabla relacion entre groups y scoresheets existe*/
    this.scoresheet.team = selectedTeam;
    this.scores.push(this.scoresheet);
    //this.group.teams.push(selectedTeam);
  }

  removeTeam(teamId: number) {
    //this.group.teams = this.group.teams.filter(team => team.id != teamId);
  }

  setTeams() {
    this.teamService.getAll()
    .subscribe((response: Team[]) => {
        this.teams = response
      })
  }

}
