import { Component, OnInit } from '@angular/core';
import { TeamGroupsService } from '../../services/team-groups.service';
import { ActivatedRoute } from '@angular/router';
import { TeamGroup } from '../../models/TeamGroup'
@Component({
  selector: 'app-form-fixture',
  templateUrl: './form-fixture.component.html',
  styleUrls: ['./form-fixture.component.css']
})
export class FormFixtureComponent implements OnInit {

  teamgroup;

  constructor(
    private teamgroupService: TeamGroupsService, 
    private actRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getGroup(this.actRoute.snapshot.params.id);
    this.getGroup(this.actRoute.snapshot.params.id);
  }

  getGroup(id: string) {
    this.teamgroupService.getTeamGroup(id)
    .subscribe((group: TeamGroup) =>{
      this.teamgroup = group;
    })
  }
}
