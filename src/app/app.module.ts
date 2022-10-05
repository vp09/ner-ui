import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NERComponent } from './ner/ner.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SharedMaterialModule } from './shared-material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedMaterialModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NERComponent,
    WelcomepageComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
