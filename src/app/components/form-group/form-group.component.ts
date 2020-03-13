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
import { GroupStatus } from 'src/app/models/enums/group-status';
import { GroupName } from 'src/app/models/enums/group-name';
import { MatchesService } from 'src/app/services/matches.service';
import { Match } from 'src/app/models/match';
import { SingleMatch } from 'src/app/models/single-match';
import { MatchStatus } from 'src/app/models/enums/match-status';


@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  competition: Competition;
  group: Group;

  // team add
  currentTeamId: number;
  teams: Team[];
  scores: Array<ScoreSheet> = [];
  groupsToDisplay: Dictionary<Array<Group>> = {};

  //enum
  groupName = GroupName;
  keys = [];

   //enum
   matchStatus = MatchStatus;
   Statuskeys = [];

  //NUEVA ENRTIDAD
  singleMatch: SingleMatch;
  
  //single hour 
  hours;
  minutes;
  
  //match to delete
  match;

  constructor(
    private actRoute: ActivatedRoute,
    private competitionService: CompetitionService,
    private teamService: TeamsService,
    private scoreService: ScoresheetService,
    private groupsService: GroupsService,
    private loginService: LoginService,
    private matchesService: MatchesService) { }

  ngOnInit() {
    this.competition = new Competition(this.actRoute.snapshot.params.id);
    this.group = this.newGroup(1);
    this.getCompetition();
    this.setTeams();
    this.keys = Object.keys(this.groupName);
    this.Statuskeys = Object.keys(this.matchStatus);
  }

  hasAdminPermission() {
    return true //this.loginService.isAdmin();
  }

  //Competition Methods
  getCompetition() {
    this.competitionService.getById(this.competition.id)
      .subscribe((response: Competition) => {
        this.competition = response;

        if (this.competition.groups) {
          this.competition.groups.forEach(group => {
            var groups = this.groupsToDisplay[group.stage];
            if (!groups) {
              groups = [];
            }

            groups.push(group);

            this.groupsToDisplay[group.stage] = groups;
          });
        }
      })
  }

  getGroupsByStage(stage){
    return this.groupsToDisplay[stage];
  }

  deleteGroup(group: Group){
    this.group = group;
  }

  delete(id: number) {
    this.groupsService.delete(id).subscribe(
      res => {
        this.getCompetition();
      })
  }

  createGroup(stage: number) {
    this.group = this.newGroup(stage);
  }

  finishGroup(toFinish: Group) {
    toFinish.status = GroupStatus.FINISHED;
    this.groupsService.finish(toFinish.id).subscribe();
  }

  saveGroup() {
    !this.group.id
      ? this.groupsService.create(this.group).subscribe(
        res => {
          this.getCompetition();
        }
      )
      : this.groupsService.update(this.group.id, this.group).subscribe(
        res => {
          this.getCompetition();
        }
      )
  }

  //Team Methods
  addTeam() {
    var selectedTeam = this.teams.find(team => team.id == this.currentTeamId);

    // var scoreSheet;
    if (!this.group.scoreSheets) {
      this.group.scoreSheets = [];
    }

    var scoreSheet = this.group.scoreSheets.find(sc => sc.team.id == this.currentTeamId);

    if (!scoreSheet) {
      scoreSheet = this.newScoreSheet(selectedTeam)
    }

    this.group.scoreSheets.push(scoreSheet);
  }

  newScoreSheet(selectedTeam: Team): ScoreSheet {
    return {
      points: 0,
      goalFavor: 0,
      goalAgainst: 0,
      goalDifference: 0,
      group: null,
      team: selectedTeam
    }
  }

  newGroup(stage: number) : Group {
    return {
      name: "",
      stage: stage,
      competition: this.competition,
      status: GroupStatus.ACTIVE
    }
  }

  addMatch(stageId: number) {

  }

  getMatches(groupId: number){
    this.matchesService.getByGroupId(groupId).subscribe(
      (response: Match[]) =>{
        return response;
      });
  }

  /*elimina los elementos del array asi no aparecen cuando se abre
  la pantalla modal para cargar un nuevo group*/
  cleanModal(){
    while (this.scores.length > 0) {
      this.scores.pop();
    }
    this.group.name="";
  }

  removeTeam(scoreId: number) {
    //this.group.teams = this.group.teams.filter(team => team.id != teamId);
    this.group.scoreSheets.slice(this.getScoreIndex(scoreId), 1);
    location.reload();//added no me parece lo optimo
  }

  /*difierente a cuando edito un grupo porque todavia no se han creado
  los scoresheets entonces no tienen id, elijo hacer la busqueda por el
  nombre del team pero queda a*/
  getScoreIndex(id: number) {
    var indice = -1;
    this.group.scoreSheets.filter(function (score, i) {
      if (score.id === id) {
        indice = i;
      }
    });
    return indice;
  }

  setTeams() {
    this.teamService.getAll()
    .subscribe((response: Team[]) => {
        this.teams = response
      })
  }
  
  //MATCH METHODS

  deleteMatch(match : Match){
    this.match = match;
  }

  deleteSingleMatch(id: number){
    this.matchesService.delete(id).subscribe(
      res=>{
        this.getCompetition();
      }
    );
  }

  setDate() {
    this.singleMatch.date = new Date(2020, 5, 15, this.hours, this.minutes);
  }

  singleMatchGroup(group : Group){
    this.group = group;
  }

  saveSingleMatch(){
    this.setDate();
    this.singleMatch.group = this.group;
    this.singleMatch.groupId = this.group.id;
    this.singleMatch.stage = this.group.stage;
    this.singleMatch.competitionId = this.group.competition.id;
    this.matchesService.createSingleMatch(this.singleMatch).subscribe(
      res => {
        this.getCompetition();
      });
  }
}
