import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { DataService } from "../services/data.service";
import { LoggingService } from "../services/logging.service";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
  providers: [DataService],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // newServerName = ""; -> for ngModel
  // newServerContent = "";
  @ViewChild("serverContentInput", { static: true })
  serverContentInput: ElementRef;

  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {}

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
    this.loggingService.typeUpdated.subscribe((status: string) =>
      alert("new status is:" + status)
    );
    // this.serverCreated.emit({
    //   serverName: nameInput.value,
    //   serverContent: this.newServerContent,
    // });
  }
  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
