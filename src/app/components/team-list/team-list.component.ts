import { Component, OnInit, HostBinding } from '@angular/core';

import { TeamsService } from '../../services/teams.service';
import { Team } from 'src/app/models/Team';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  //agrego una fila a todo este componente 
  @HostBinding('class') classes = 'row';

  teams: any = [];

  constructor(private teamService : TeamsService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(){
    this.teamService.getTeams().subscribe(
      res => {
        this.teams = res;
      },
      //res => console.log(res),
      err => console.error(err)
    );
  }

  deleteTeam(id: string){ 
    //console.log(id);
    this.teamService.deleteTeam(id).subscribe(
      res=>{
        console.log(res)
        this.getTeams();
      },
      err=>console.log(err)
    )
  }
}
