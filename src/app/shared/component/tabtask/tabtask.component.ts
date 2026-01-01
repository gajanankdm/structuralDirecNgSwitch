import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabtask',
  templateUrl: './tabtask.component.html',
  styleUrls: ['./tabtask.component.scss']
})
export class TabtaskComponent implements OnInit {

  selectedskill:string="angular"
  constructor() { }

  ngOnInit(): void {
  }
selectedskillval(val:string){
this.selectedskill=val
}

}
