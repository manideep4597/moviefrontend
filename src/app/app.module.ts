import { HeaderModule } from './header/header.module';
import { BodyModule } from './body/body.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {routingComp} from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    routingComp
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HeaderModule,BodyModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
