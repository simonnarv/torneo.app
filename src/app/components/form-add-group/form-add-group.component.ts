import { Component, OnInit } from '@angular/core';
import { GroupsService } from 'src/app/services/groups.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Group } from 'src/app/models/group';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-form-add-group',
  templateUrl: './form-add-group.component.html',
  styleUrls: ['./form-add-group.component.css']
})
export class FormAddGroupComponent implements OnInit {

  group: Group = {
    name : "",
    stage : 1,
    competitionId: 0
  }

  currentTeamId : number;
  //teams : Team[];

  constructor(private groupService: GroupsService,
    private teamService: TeamsService,
    private router: Router,
    private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.group.competitionId = this.actRoute.snapshot.params.competitionId;
    var id = this.actRoute.snapshot.params.id;

    if (id) {
      // EDIT
     this.getGroup(id);
    }
  }

  /* setTeams() {
    this.teamService.getAll().subscribe(
      teams => { 
        this.teams = teams 
      }
    )
  } */

  getGroup(groupId: number) {
    this.groupService.getById(groupId)
    .subscribe(
      (group : Group) => { 
        this.group = group 
        // this.setTeams();
      }
    );
  };

  /* addTeam() {
    var selectedTeam = this.teams.find(team => team.id == this.currentTeamId);
    this.group.teams.push(selectedTeam);
  }

  removeTeam(teamId: number) {
    this.group.teams = this.group.teams.filter(team => team.id != teamId);
  } */

  save() {
    !this.group.id
    ? this.groupService.create(this.group).subscribe(
      res => {
        this.router.navigate(['/futbol/competition/' + this.group.competitionId + '/groups']);
      }
    )
    : this.groupService.update(this.group.id, this.group).subscribe(
      res => {
        this.router.navigate(['/futbol/competition/' + this.group.competitionId + '/groups']);
      }
    )
  }
}
