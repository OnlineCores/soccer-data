/* Core */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SoccerAuthInterceptor } from './core/soccer.interceptor';

/* Angular Fire */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
const config = {
    apiKey: "AIzaSyDvbC7YCPSVS6bjqPrOqBNvVoHeyl2xXkM",
    authDomain: "soccer-data.firebaseapp.com",
    databaseURL: "https://soccer-data.firebaseio.com",
    projectId: "soccer-data",
    storageBucket: "",
    messagingSenderId: "25850729284"
};

/* Design */
import { LayoutModule } from '@angular/cdk/layout';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule,
    MatChipsModule, MatGridListModule, MatTabsModule, MatCardModule,
    MatSidenavModule, MatListModule, MatTableModule, MatProgressSpinnerModule,
    MatPaginatorModule
} from '@angular/material';

/* Modules */
import { AppRoutingModule } from './app-routing.module';

/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { Error404Component } from './components/error404/error404.component';
import { LeagueComponent } from './components/league/league.component';
import { TeamComponent } from './components/team/team.component';
import { PlayerComponent } from './components/player/player.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FixtureComponent } from './components/fixture/fixture.component';
import { CountryComponent } from './components/country/country.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        Error404Component,
        LeagueComponent,
        FixtureComponent,
        TeamComponent,
        PlayerComponent,
        TournamentComponent,
        FooterComponent,
        NavigationComponent,
        CountryComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AngularFireModule.initializeApp(config),
        AngularFireDatabaseModule,
        AppRoutingModule,
        LayoutModule, CdkTableModule,
        FlexLayoutModule,
        MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule,
        MatChipsModule, MatGridListModule, MatTabsModule, MatCardModule,
        MatSidenavModule, MatListModule, MatTableModule, MatProgressSpinnerModule,
        MatPaginatorModule,
        FormsModule, ReactiveFormsModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: SoccerAuthInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
