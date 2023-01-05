import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cercle',
  templateUrl: './cercle.component.html',
  styleUrls: ['./cercle.component.css']
})
export class CercleComponent implements OnInit {
  @Input() image! : string;
  constructor() { }

  ngOnInit(): void {
  }

}
