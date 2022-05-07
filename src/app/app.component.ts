import { Component } from "@angular/core";
import web3 from "../web3";
import lottery from "../lottery";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  manager: any;

  ngOnInit() {
    this.getContractDetails();
  }

  async getContractDetails() {
    await web3.eth.requestAccounts();
    this.manager = await lottery.methods.manager().call({});
    console.log(lottery, this.manager);
  }
}
