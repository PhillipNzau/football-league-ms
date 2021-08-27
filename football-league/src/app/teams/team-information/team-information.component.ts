import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-team-information',
  templateUrl: './team-information.component.html',
  styleUrls: ['./team-information.component.scss']
})
export class TeamInformationComponent implements OnInit {
  randomColor: any;

  constructor() {
  }

  ngOnInit(): void {
    const colors = ['green', 'red', 'blue', 'maroon', 'purple'];
    this.randomColor = colors [Math.floor(Math.random() * colors.length)];
  }

  // getRandomColor(): any {
  //   const color = Math.floor(0x1000000 * Math.random()).toString(16);
  //   return '#' + ('000000' + color).slice(-6);
  // }


}
