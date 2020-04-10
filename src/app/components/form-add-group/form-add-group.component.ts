import { Component, OnInit } from '@angular/core';
import { GroupsService } from 'src/app/services/groups.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Group } from 'src/app/models/group';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/models/team';
import { ScoreSheet } from 'src/app/models/score-sheet';
import { ScoresheetService } from 'src/app/services/scoresheet.service';
import { GroupName } from 'src/app/models/enums/group-name';
import { SingleMatch } from 'src/app/models/single-match';

@Component({
  selector: 'app-form-add-group',
  templateUrl: './form-add-group.component.html',
  styleUrls: ['./form-add-group.component.css']
})
export class FormAddGroupComponent implements OnInit {
  //competition
  competitionId;
  currentTeamId: number;

  //group
  groupId;
  group: Group = {
  }

  //team
  teams: Team[];
  
  //enum
  groupName = GroupName;
  keys = [];

  constructor(private groupService: GroupsService,
    private teamService: TeamsService,
    private scoreSheetService: ScoresheetService,
    private router: Router,
    private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.groupId = this.actRoute.snapshot.params.groupId;
    this.competitionId = this.actRoute.snapshot.params.competitionId;
    this.getGroup(this.groupId);
    this.setTeams();
    this.keys = Object.keys(this.groupName);
  }

  setTeams() {
    this.teamService.getAll().subscribe(
      teams => {
        this.teams = teams
      });
  }

  getGroup(groupId: number) {
    this.groupService.getById(groupId)
      .subscribe(
        (group: Group) => {
          this.group = group
        });
  }

  addTeam() {
    var selectedTeam = this.teams.find(team => team.id == this.currentTeamId);
    var scoreSheet = this.getScoreSheet(selectedTeam);
    this.group.scoreSheets.push(scoreSheet);
  }

  removeTeam(scoreId: number) {
    //tiene q preguntar si ya existe la scoresheet, en ese caso eliminarla de BD
    //sino eliminarlo del array de group
    //this.group.teams = this.group.teams.filter(team => team.id != teamId);
    if (scoreId) {
      this.scoreSheetService.delete(scoreId).subscribe()
    }
    else {
      this.group.scoreSheets.slice(this.getScoreIndex(scoreId), 1);
      location.reload();//added no me parece lo optimo
    }
  }

  getScoreIndex(id: number) {
    var indice = -1;
    this.group.scoreSheets.filter(function (score, i) {
      if (score.id === id) {
        indice = i;
      }
    });
    return indice;
  }

  updateGroup() {
    this.groupService.update(this.group.id, this.group).subscribe(
      res => {
        this.router.navigate(['/losmorenitos/competition/' + this.competitionId + '/groups']);
      })
  }

  //scoresheet methods
  getScoreSheet(selectedTeam: Team): ScoreSheet {
    return {
      points: 0,
      goalFavor: 0,
      goalAgainst: 0,
      goalDifference: 0,
      group: null,
      team: selectedTeam
    }
  }
  /*getScoreSheetById(id: number){
    return this.scoreSheetService.getById(id).subscribe();
  }*/

}
