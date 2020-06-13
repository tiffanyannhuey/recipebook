import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() tabClicked = new EventEmitter<string>();


  private collapsed = true;

  constructor() { }

  ngOnInit() {
  }

  onSelect(feature: string) {
    this.tabClicked.emit(feature);
  }



}
