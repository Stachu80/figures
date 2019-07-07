import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { FigureActions } from "@app/core/store";
@Component({
  selector: "app-choose-a-figure",
  templateUrl: "./choose-a-figure.component.html",
  styleUrls: ["./choose-a-figure.component.scss"]
})
export class ChooseAFigureComponent implements OnInit {
  @Input() data;

  constructor(private store: Store<any>) {}

  ngOnInit() {}

  figureSelected(event, s) {
    console.log(event.isUserInput)
    if (event.isUserInput) {
      console.log(s)
      this.store.dispatch(new FigureActions.FigureSelected(s));
    }
  }
}
