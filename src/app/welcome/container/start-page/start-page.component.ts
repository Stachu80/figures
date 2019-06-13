import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';



  @Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
  }

}
