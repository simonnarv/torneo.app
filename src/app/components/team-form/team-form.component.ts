import { Component, OnInit, HostBinding } from '@angular/core';
import { Team } from 'src/app/models/Team';
import {Router, ActivatedRoute} from '@angular/router';

import {TeamsService} from '../../services/teams.service';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent implements OnInit {

  //encierra el form en una clase tipo row
  @HostBinding('class') classes = 'row';

  //objeto donde se almacena el input del usuario
  team: Team={
    id: 0,
    name:"",
    description:""
  }

  edit: boolean = false;

  constructor(private teamService: TeamsService, 
              private router: Router,
              private activedRoute : ActivatedRoute) { }

  ngOnInit() {
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

  //metodo q se ejecuta para guardar los equipos en form
  saveNewTeam(){
    //nos permite borrar propiedades que no queremos mandar ej:
    //delete this.team.img;
    //delete this.team.description;
    
    //console.log(this.team);
    this.teamService.saveTeam(this.team).subscribe(
      res=>{
      console.log(res);
      //una vez añadido el equipo te lleva de nuevo al form lista de equipos
      this.router.navigate(['/teams']);
      },
      err=> console.error(err)
    )
  }

  updateTeam(){
    //console.log(this.team);

    //nos permite borrar propiedades que no queremos mandar ej:
    //delete this.team.img;

    this.teamService.updateTeam(this.team.id.toString(),this.team)
    .subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/teams']);
      },
      err=>console.log(err)
    )
  }

}
