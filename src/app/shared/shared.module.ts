import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    BannerComponent,
    FooterComponent
  ]
})
export class SharedModule { }
