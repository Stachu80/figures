import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { FiguresSelector } from "@app/core/store/selectors";
import { tap } from "rxjs/internal/operators";

@Component({
  selector: "app-selection-page",
  templateUrl: "./selection-page.component.html",
  styleUrls: ["./selection-page.component.scss"]
})
export class SelectionPageComponent{
  data$ = this.store.pipe(select(FiguresSelector.getFigureData));
  constructor(private store: Store<any>) {}
}
