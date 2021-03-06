import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfaceComponent } from './Components/interface/interface.component';
import { QuestionsComponent } from './Components/questions/questions.component';
import { GetDataService } from './Services/get-data.service';
import { ChartsComponent } from './Components/charts/charts.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { EquipmentComponent } from './Components/equipment/equipment.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ChatbotComponent } from './Components/chatbot/chatbot.component';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    QuestionsComponent,
    ChartsComponent,
    NavbarComponent,
    EquipmentComponent,
    FooterComponent,
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUsefulSwiperModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
