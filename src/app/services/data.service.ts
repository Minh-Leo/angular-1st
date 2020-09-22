import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class DataService {
  data: { type: string; name: string; content: string }[] = [
    { type: "blueprint", name: "Minh", content: "Meo" },
    { type: "server", name: "Linh", content: "Mio" },
  ];

  constructor(private loggingService: LoggingService) {}

  typeUpdated = new EventEmitter<string>();

  addAccount(name: string, content: string) {
    this.data.push({ type: "server", name: name, content: content });
  }

  getAccount() {
    this.loggingService.logStatusChange("From another service");
    return this.data;
  }
}
