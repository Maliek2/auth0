import { Component } from "@angular/core";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent {
  url;

  constructor(public authService: AuthService) {
    this.url = window.location.href;
  }

  signup() {
    window.open(
      "https://mobile.adball.tech",
      "_blank"
    );
  }
}
