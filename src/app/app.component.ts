import { Component, OnInit, ViewChildren, QueryList, ViewChild, ChangeDetectorRef } from '@angular/core';
import { GridStackItem, GridStackOptions, GridStackItemComponent, GridStackComponent } from 'ng4-gridstack'
import { TestWidgetComponent } from './components/test-widget/test-widget.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myWidget: GridStackItem;
  myWidget2: GridStackItem;
  options: GridStackOptions;
  inputs = { num: 600 }

  myWidgets: GridStackItem[] = [];

  ngOnInit() {
    this.options = new GridStackOptions();
    this.options.height = 12;
    this.options.width = 12;
    this.options.rtl = "true";

    this.myWidget = new GridStackItem();
    this.myWidget.width = 2;
    this.myWidget.height = 2;
    this.myWidget.locked = false;
    this.myWidget.noMove = false;
    this.myWidget.noResize = false;
    this.myWidget.minHeight = 2;
    this.myWidget.minWidth = 2;
    this.myWidget.componentType = TestWidgetComponent;
    this.myWidget.inputs = { num: 580, ododesc: "חשבונית אחרונה" };

    this.myWidget2 = new GridStackItem();
    this.myWidget2.width = 2;
    this.myWidget2.height = 2;
    this.myWidget2.locked = false;
    this.myWidget2.noMove = false;
    this.myWidget2.noResize = false;
    this.myWidget2.minHeight = 2;
    this.myWidget2.minWidth = 2;
    this.myWidget2.componentType = TestWidgetComponent;
    this.myWidget2.inputs = { num: 750, ododesc: "סהכ שורות" };

    this.myWidgets.push(this.myWidget);
    this.myWidgets.push(this.myWidget2);
  }
}