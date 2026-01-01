import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {

  fruitsinfo:string='banana'
  constructor() { }

  ngOnInit(): void {
  }


  onvisitfruit(val:string){
    this.fruitsinfo=val

  }
}
