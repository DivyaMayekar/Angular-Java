import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipecomponentComponent } from './components/pipecomponent/pipecomponent.component';
import { UppercasepipePipe } from './customPipe/uppercasepipe.pipe';
import { TempuraturePipe } from './customPipe/tempurature.pipe';
import { AsyncPipesComponent } from './asyncExample/async-pipes/async-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    PipecomponentComponent,
    UppercasepipePipe,
    TempuraturePipe,
    AsyncPipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
