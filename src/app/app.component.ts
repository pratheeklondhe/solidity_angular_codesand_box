import { Component } from "@angular/core";
import web3 from "../web3";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";

  ngOnInit() {}

  xyz() {
    console.log("fddfssss");
    // (window as any).sunnyleone = web3;
    console.log(web3.eth);
    web3.eth.requestAccounts().then(console.log);
  }
}
