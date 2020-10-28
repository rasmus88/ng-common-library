import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      BrowserAnimationsModule
    ],
    exports: [
      CommonModule,
      BrowserModule,
      BrowserAnimationsModule
    ]
})
export class SharedModule { }