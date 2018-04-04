import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridStackModule } from 'ng4-gridstack';
import { AppComponent } from './app.component';
import { TestWidgetComponent } from './components/test-widget/test-widget.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2OdometerModule } from 'ng2-odometer'; // <-- import the module
import { DynamicModule } from 'ng-dynamic-component';

@NgModule({
  declarations: [
    AppComponent,
    TestWidgetComponent
  ],
  entryComponents: [TestWidgetComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Ng2OdometerModule.forRoot(), // <-- include it in your app module
    DynamicModule.withComponents([TestWidgetComponent]),
    GridStackModule, NgxChartsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
