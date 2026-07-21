import { Component, Input, OnInit } from '@angular/core';
import { FairService } from '../../service/fair.service';
import { Ifairs } from '../../module/fair';


@Component({
  selector: 'app-fairs-dashboard',
  templateUrl: './fairs-dashboard.component.html',
  styleUrls: ['./fairs-dashboard.component.css']
})
export class FairsDashboardComponent implements OnInit {
  fairsArr:Ifairs[]=[]

  constructor(
    private _fairsService:FairService
  ) { }

  ngOnInit(): void {
    this.getFairsDetails()
  }


  getFairsDetails(){
    this._fairsService.fetchFairs()
    .subscribe({
      next:data=>{
        this.fairsArr=data
      },
      error:err=>{
        console.log(err);
      }
    })
  }

}
