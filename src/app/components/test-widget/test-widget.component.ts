import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-widget',
  templateUrl: './test-widget.component.html',
  styleUrls: ['./test-widget.component.css']
})
export class TestWidgetComponent implements OnInit {
  single = [{
    "name": "Germany",
    "value": 8940000
  }];
  multi: any[];
  public number: number = 1000;
  @Input() num: number;
  num2: number;
  view: any[];
  @Input() ododesc: string;;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };
  constructor() { }

  ngOnInit() {
  }

}
