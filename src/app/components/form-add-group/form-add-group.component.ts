import { Component, OnInit } from '@angular/core';
import { GroupsService } from 'src/app/services/groups.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Group } from 'src/app/models/Group';

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

  constructor(private groupService: GroupsService,
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
    ? this.groupService.create(this.group).subscribe(
      res => {
        this.router.navigate(['/futbol/group/'+this.actRoute.snapshot.params.competitionId]);
      }
    )
    : this.groupService.update(this.group.id, this.group).subscribe();
  }

  private getGroup(groupId: number) {
    this.groupService.getById(groupId)
    .subscribe(
      (group : Group) => { this.group = group }
    );
  };

}
