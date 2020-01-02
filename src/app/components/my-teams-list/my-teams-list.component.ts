import { Component, OnInit, HostBinding } from '@angular/core';

import { TeamsService } from '../../services/teams.service';
import { Team } from 'src/app/models/Team';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-my-teams-list',
  templateUrl: './my-teams-list.component.html',
  styleUrls: ['./my-teams-list.component.css']
})
export class MyTeamsListComponent implements OnInit {

  teams: any = [];

  //encierra el form en una clase tipo row
  @HostBinding('class') classes = 'row';

  //objeto donde se almacena el input del usuario
  team: Team={
    team_id: 0,
    name:"",
    description:"",
  }

  edit: boolean = false;
  
  constructor(private teamService: TeamsService, 
    private router: Router,
    private activedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.getTeams();

    const params = this.activedRoute.snapshot.params;
    //console.log(params);
    if(params.id){
      this.teamService.getTeam(params.id).subscribe(
        res=>{
          console.log(res);
          //paso el snapshot del objeto al team 
          this.team = res;
          this.edit = true;
        },
        err=>console.log(err)
      )
    }
  }

  //lista de equipos
  getTeams(){
    this.teamService.getTeams().subscribe(
      res => {
        this.teams = res;
      },
      err => console.error(err)
    );
  }

  
  saveNewTeam(){
    this.teamService.saveTeam(this.team).subscribe(
      res=>{
      console.log(res);
      //una vez añadido el equipo te lleva de nuevo al form lista de equipos
      this.router.navigate(['teams/allTeams']);
      },
      err=> console.error(err)
    )
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

  updateTeam(){
    //console.log(this.team);

    //nos permite borrar propiedades que no queremos mandar ej:
    delete this.team.img;

    this.teamService.updateTeam(this.team.team_id.toString(),this.team)
    .subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/teams']);
      },
      err=>console.log(err)
    )
  }

}
