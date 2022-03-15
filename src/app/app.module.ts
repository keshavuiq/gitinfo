import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbActionsModule, NbCardModule, NbFormFieldModule, NbInputModule, NbIconModule,
NbButtonModule, NbUserModule, NbListModule, NbAlertModule  } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { UsersearchComponent } from './usersearch/usersearch.component';
import { UserreposComponent } from './userrepos/userrepos.component';
import { FormsModule } from '@angular/forms';
import { AppService } from './fetchrepos.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersearchComponent,
    UserreposComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbActionsModule,
    NbCardModule,
    NbFormFieldModule,
    NbInputModule,
    NbIconModule,
    NbButtonModule,
    NbUserModule,
    NbListModule,
    FormsModule,
    NbAlertModule,
  ],
  bootstrap: [AppComponent],
  providers: [AppService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
