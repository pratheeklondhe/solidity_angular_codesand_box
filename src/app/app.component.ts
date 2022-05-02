import { Component } from "@angular/core";
import { Web3 } from "../web3";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";

  ngOnInit() {
    console.log("hiiii ", Web3);
  }
}
