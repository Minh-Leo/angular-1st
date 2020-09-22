import { Component, OnInit } from "@angular/core";
import { DataService } from "./services/data.service";
import { LoggingService } from "./services/logging.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [DataService, LoggingService],
})
export class AppComponent implements OnInit {
  serverElements: { type: string; name: string; content: string }[];

  constructor(
    private loggingService: LoggingService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.serverElements = this.dataService.data;
    console.log(this.serverElements);
  }

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent,
    });
    this.loggingService.typeUpdated.emit("Event emitted service");
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
