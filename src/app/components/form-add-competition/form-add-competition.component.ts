import { Component, OnInit } from '@angular/core';
import { Competition } from 'src/app/models/competition';
import { CompetitionService } from '../../services/competition.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CompetitionStatus } from 'src/app/models/enums/competition-status';
import { CompetitionType } from 'src/app/models/enums/competition-type';

@Component({
  selector: 'app-form-add-competition',
  templateUrl: './form-add-competition.component.html',
  styleUrls: ['./form-add-competition.component.css']
})
export class FormAddCompetitionComponent implements OnInit {

  competition: Competition = {
    name:"",
    status: CompetitionStatus.ACTIVE,
    type: CompetitionType.TOURNAMENT,
    event: { "id": 7, "name": "" }
  }

  constructor(private competitionService: CompetitionService,
    private actRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
   var competitionId = this.actRoute.snapshot.params.id;

   if (competitionId) {
     // EDIT
    this.getCompetition(competitionId);
   }
  };

  save() {
    !this.competition.id
      ? this.competitionService.create(this.competition).subscribe(
        res=>{
          this.router.navigate(['futbol/competition']);
        }
      )
      : this.competitionService.update(this.competition.id, this.competition).subscribe(  
        res=>{
        this.router.navigate(['futbol/competition']);
      });
  };

  private getCompetition(competitionId: number) {
    this.competitionService.getById(competitionId).subscribe(
      (competition : Competition) => { this.competition = competition }
      );
  };
}
