import {Component} from "@angular/core";
import EventEmitter from "events";

@Component ({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  // collapsed = true
  // featureSelected = new EventEmitter<string>();
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
