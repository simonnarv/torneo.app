import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../../services/groups.service';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../../models/group'
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-form-match',
  templateUrl: './form-match.component.html',
  styleUrls: ['./form-match.component.css']
})
export class FormMatchComponent implements OnInit {

  group: Group;
  competitionId;



  constructor(
    private groupService: GroupsService, 
    private actRoute: ActivatedRoute,
    private loginService: LoginService
    ) { }

  ngOnInit() {
    this.getGroup(this.actRoute.snapshot.params.id);
    this.competitionId = this.actRoute.snapshot.params.competitionId;
    
  }

  getGroup(id: number) {
    this.groupService.getById(id)
    .subscribe((group: Group) =>{
      this.group = group;
    })
  }

  
  hasAdminPermission() {
    return this.loginService.isAdmin();
  }
}
