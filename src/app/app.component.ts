import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "vehicle",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/car-side-solid.svg")
    );

    this.matIconRegistry.addSvgIcon(
      "search",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/search-solid.svg")
    );

    this.matIconRegistry.addSvgIcon(
      "edit",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/edit-regular.svg")
    );

    this.matIconRegistry.addSvgIcon(
      "delete",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/trash-alt-regular.svg")
    );
  }
}
