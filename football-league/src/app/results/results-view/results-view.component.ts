import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-view',
  templateUrl: './results-view.component.html',
  styleUrls: ['./results-view.component.scss']
})
export class ResultsViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  numSeq(n: number): Array<number> {
    return Array(n);
  }

}
