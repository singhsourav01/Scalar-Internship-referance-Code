import { NgModule,   } from '@angular/core'; //LOCALE_ID
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule,  } from '@angular/common';

import { AppComponent } from './app.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { CustomPipePipe } from './custom-pipe.pipe';

import { CustomPipe } from './custom.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CustomPipeComponent,
    CustomPipePipe,
    CustomPipe,    
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
