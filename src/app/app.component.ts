import { Component, OnInit } from "@angular/core";
import { DataService } from "./services/data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [DataService],
})
export class AppComponent implements OnInit {
  serverElements: { type: string; name: string; content: string }[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    const newData = this.dataService.getAccount();
    this.serverElements = this.dataService.data;
    console.log(this.serverElements);
  }

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: "blueprint",
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }
}
