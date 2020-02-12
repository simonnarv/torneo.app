import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/models/Team';

@Component({
  selector: 'app-form-add-team',
  templateUrl: './form-add-team.component.html',
  styleUrls: ['./form-add-team.component.css']
})
export class FormAddTeamComponent implements OnInit {

  team: Team = {
    name : "",
    description : ""
  }

  constructor(private teamService: TeamsService,
    private router: Router,
    private actRoute: ActivatedRoute) { }

  ngOnInit() {
    var id = this.actRoute.snapshot.params.id;
    console.log(id);
    if (id) {
      // EDIT
     this.getTeam(id);
    }
  }

  save() {
    !this.team.id
    ? this.teamService.create(this.team).subscribe()
    : this.teamService.update(this.team.id, this.team).subscribe();
  }

  private getTeam(teamId: number) {
    this.teamService.getById(teamId)
    .subscribe(
      (team : Team) => { this.team = team }
    );
  };
}
