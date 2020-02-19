import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../../services/groups.service';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../../models/group'
@Component({
  selector: 'app-form-match',
  templateUrl: './form-match.component.html',
  styleUrls: ['./form-match.component.css']
})
export class FormMatchComponent implements OnInit {

  group: Group;
  
  constructor(
    private groupService: GroupsService, 
    private actRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getGroup(this.actRoute.snapshot.params.id);
    this.getGroup(this.actRoute.snapshot.params.id);
  }

  getGroup(id: number) {
    this.groupService.getById(id)
    .subscribe((group: Group) =>{
      this.group = group;
    })
  }
}