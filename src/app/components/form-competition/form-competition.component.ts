import { Component, OnInit } from '@angular/core';

import { Competition } from 'src/app/models/competition';
import { CompetitionService } from '../../services/competition.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Team } from 'src/app/models/team';
import { TeamsService } from 'src/app/services/teams.service';
import { CompetitionType } from 'src/app/models/enums/competition-type';
import { CompetitionStatus } from 'src/app/models/enums/competition-status';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-form-competition',
  templateUrl: './form-competition.component.html',
  styleUrls: ['./form-competition.component.css']
})
export class FormCompetitionComponent implements OnInit {

  competitions;

  competition: Competition = {
    name: "",
    type: CompetitionType.TOURNAMENT,
    status: CompetitionStatus.ACTIVE,
    event: { "id": environment.eventId, "name": ""} 
  }

  team: Team = {
    name: "",
    description: ""
  }

  menuIsOpened = false;

  constructor(private teamService: TeamsService,
    private competitionService: CompetitionService,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.getCompetitions();
  }

  optionsClick() {
    this.menuIsOpened = !this.menuIsOpened;
  }

  isMenuOpened() : boolean {
    return this.menuIsOpened;
  }

  getCompetitions() {
    this.competitionService.getAll()
      .subscribe(
        (competitions: Competition[]) => {
          this.competitions = competitions;
        });
  }

  hasAdminPermission() {
    return true; //this.loginService.isAdmin();
  }

  createCompetition() {
    this.competition = {
      name: "",
      type: CompetitionType.TOURNAMENT,
      status: CompetitionStatus.ACTIVE,
      event: { "id": environment.eventId }
    }
  }

  editCompetition(competition: Competition) {
    this.competition = competition;
  }

  deleteCompetition(competition: Competition) {
    this.competition = competition;
  }

  /*
  saveCompetition() {
    !this.categ.id
      ? this.competitionService.create(this.categ).subscribe(
        res => {
          this.getCategories();
        }
      )
      : this.competitionService.update(this.categ.id, this.categ).subscribe(
        res => {
          this.getCategories();
        });
  };*/

  saveCompetition() {
    this.competitionService.create(this.competition).subscribe(
      res => {
        this.getCompetitions();
      }
    )
  };

  updateCompetition(id: number) {
    this.competitionService.update(id, this.competition).subscribe(
      res => {
        this.getCompetitions();
      });
  };

  saveTeam() {
    !this.team.id
      ? this.teamService.create(this.team).subscribe()
      : this.teamService.update(this.team.id, this.team).subscribe();
  }

  delete(id: number) {
    this.competitionService.delete(id).subscribe(
      res => {
        this.getCompetitions();
      }
    );
  }

}
