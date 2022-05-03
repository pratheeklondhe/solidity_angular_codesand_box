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

  async ngOnInit() {}

  async xyz() {
    console.log("fddfssss");
    let accounts;
    accounts = await web3.eth.requestAccounts();
    console.log(accounts);
    // .then((acc) => (accounts = acc));
    this.manager = await lottery.methods.manager().call({});
    // .send({
    //   from: accounts[0]
    // });
    console.log(lottery, this.manager);
  }
}
