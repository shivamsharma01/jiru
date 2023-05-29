import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './reusable/header/header.component';
import { BubbleWaveSpacerComponent } from './reusable/bubble-wave-spacer/bubble-wave-spacer.component';
import { LayerWaveSpacerComponent } from './reusable/layer-wave-spacer/layer-wave-spacer.component';
import { StackWaveSpacerComponent } from './reusable/stack-wave-spacer/stack-wave-spacer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    BubbleWaveSpacerComponent,
    LayerWaveSpacerComponent,
    StackWaveSpacerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
