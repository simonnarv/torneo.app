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

  constructor(private groupService: TeamGroupsService,
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

  save() {
    !this.group.id
    ? this.groupService.create(this.group).subscribe()
    : this.groupService.update(this.group.id, this.group).subscribe();
  }

  private getGroup(groupId: number) {
    this.groupService.getById(groupId)
    .subscribe(
      (group : TeamGroup) => { this.group = group }
    );
  };

}
