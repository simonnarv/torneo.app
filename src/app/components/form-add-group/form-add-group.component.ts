import { Component, OnInit } from '@angular/core';
import { TeamGroupsService } from 'src/app/services/team-groups.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamGroup } from 'src/app/models/TeamGroup';

@Component({
  selector: 'app-form-add-group',
  templateUrl: './form-add-group.component.html',
  styleUrls: ['./form-add-group.component.css']
})
export class FormAddGroupComponent implements OnInit {

  group: TeamGroup = {
    name : "",
    stage : 1,
    competitionId: 0
  }

  constructor(private teamGroupsService: TeamGroupsService,
    private router: Router,
    private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.group.competitionId = this.actRoute.snapshot.params.id;
  }

  save() {
    this.teamGroupsService.saveTeamGroup(this.group).subscribe();
  }

}
