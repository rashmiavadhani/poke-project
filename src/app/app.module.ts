import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Form module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Http client
import { HttpClientModule } from '@angular/common/http';

//Material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule}  from '@angular/material/snack-bar';

//Pages
import { LoginComponent } from './_pages/login/login.component';
import { PokemondashboardComponent } from './_pages/pokemondashboard/pokemondashboard.component';

//Components
import { HeaderComponent } from './_components/header/header.component';
import { AbilitiessearchdetailsComponent } from './_dialogs/abilitiessearchdetails/abilitiessearchdetails.component';

//Dialogs
import { FulldetailsComponent } from './_dialogs/fulldetails/fulldetails.component';

//Pipes
import { SanitizeUrlPipe } from './_pipes/sanitizeUrl.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PokemondashboardComponent,
    HeaderComponent,
    SanitizeUrlPipe,
    FulldetailsComponent,
    AbilitiessearchdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
