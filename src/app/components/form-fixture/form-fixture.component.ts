import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../../services/groups.service';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../../models/Group'
@Component({
  selector: 'app-form-fixture',
  templateUrl: './form-fixture.component.html',
  styleUrls: ['./form-fixture.component.css']
})
export class FormFixtureComponent implements OnInit {

  group: Group;
  
  constructor(
    private groupService: GroupsService, 
    private actRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getGroup(this.actRoute.snapshot.params.id);
    //this.getGroup(this.actRoute.snapshot.params.id);
  }

  getGroup(id: number) {
    this.groupService.getById(id)
    .subscribe((group: Group) =>{
      this.group = group;
    })
  }
}
