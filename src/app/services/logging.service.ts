import { EventEmitter } from "@angular/core";

export class LoggingService {
  logStatusChange(status: string) {
    console.log("new status here " + status);
  }

  typeUpdated = new EventEmitter<string>();
}
