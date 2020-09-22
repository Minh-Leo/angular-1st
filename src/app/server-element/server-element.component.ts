import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;
  @ContentChild("contentParagraph") paragraph: ElementRef;

  constructor() {
    // console.log("Constructor called");
  }

  ngOnInit(): void {
    // console.log("ngOnInit called");
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log("ngOnChanges called");
    // console.log(changes);
  }

  ngDoCheck() {
    // console.log("%c ngDoCheck called", "color: yellow");
  }

  ngAfterContentInit() {
    // console.log("%c ngAfterContentInit called", "color: green");
  }

  ngAfterContentChecked() {
    // console.log("%c ngAfterContentChecked called", "color: green");
  }
  ngAfterViewInit() {
    // console.log("%c ngAfterViewInit called", "color: orange");
  }

  ngAfterViewChecked() {
    // console.log("%c ngAfterViewChecked called", "color: orange");
  }

  ngOnDestroy() {
    // console.log("%c ngOnDestroy called", "color: red");
  }
}
