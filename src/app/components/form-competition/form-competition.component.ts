import { Component, OnInit } from '@angular/core';

import { Competition } from 'src/app/models/competition';
import { CompetitionService } from '../../services/competition.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Team } from 'src/app/models/team';
import { TeamsService } from 'src/app/services/teams.service';
import { CompetitionType } from 'src/app/models/enums/competition-type';
import { CompetitionStatus } from 'src/app/models/enums/competition-status';
import { environment } from 'src/environments/environment';
import { EventService } from 'src/app/services/event.service';

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
    //event: { "id": environment.eventId, "name": ""} 
  }

  team: Team = {
    name: "",
    description: ""
  }

  teams;

  menuIsOpened = false;

  //event url AND event
  eventUrl;
  event;



  constructor(private teamService: TeamsService,
    private competitionService: CompetitionService,
    private loginService: LoginService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private eventService: EventService) { }

  ngOnInit() {
    this.eventUrl = this.actRoute.snapshot.params.eventUrl;
    this.getCompetitions();
    this.getTeams();
    if(localStorage.getItem("event")){
      this.competition.event = JSON.parse(localStorage.getItem("event"))
      console.log("event null",this.competition.event); //delete
    } else {
      this.getEventByUrl(this.eventUrl);
      this.competition.event = JSON.parse(localStorage.getItem("event"))
      console.log("event guardado en memoria",this.competition.event);//delete
    }
  }

  //event and local storage methods
  /*if (localStorage.getItem(eventUrl)) {
    this.competition.event.id = localStorage.getItem(eventUrl);
  } else {
    Event event = eventService.findByUrl(eventUrl);
    localStorage.setItem(event.url, event.id);
    // key = los-morenitos , value = 125
  }*/

  getEventByUrl(url : string){
    this.eventService.getByUrl(url).subscribe(
      (event: Event)=>{
        localStorage.setItem("event", JSON.stringify(event))
      })
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
    return this.loginService.isAdmin();
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

  getTeams(){
    this.teamService.getAll()
      .subscribe(
        (result: Competition[]) => {
          this.teams = result;
        });
  }
}
