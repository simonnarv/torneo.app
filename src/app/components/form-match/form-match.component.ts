import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../../services/groups.service';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../../models/group'
import { LoginService } from 'src/app/services/login.service';
import { MatchesService } from 'src/app/services/matches.service';
import { Match } from 'src/app/models/match';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-form-match',
  templateUrl: './form-match.component.html',
  styleUrls: ['./form-match.component.css']
})
export class FormMatchComponent implements OnInit {

  competitionId;
  groupId;
  matches: Match[];

  match: Match = {
    
  }
  
  constructor(
    private groupService: GroupsService, 
    private actRoute: ActivatedRoute,
    private loginService: LoginService,
    private matchesService: MatchesService
    ) { }

  ngOnInit() {
    this.competitionId = this.actRoute.snapshot.params.competitionId;
    this.groupId = this.actRoute.snapshot.params.groupId;
    this.getMatches(this.actRoute.snapshot.params.groupId);
  }

  getMatches(id: number){
    this.matchesService.getByGroupId(id).subscribe(
      (response: Match[]) =>{
        this.matches = response;
      });
  }

  hasAdminPermission() {
    return this.loginService.isAdmin();
  }
  
  delete(id: number){
    this.matchesService.delete(id).subscribe(
      res=>{
        this.getMatches(this.actRoute.snapshot.params.groupId);
      }
    );
  }

  deleteMatch(match : Match){
    this.match = match;
  }
}
