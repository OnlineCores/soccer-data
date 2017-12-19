import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

interface MatchFixtures {
    fixtures: Array<string>;
    date: string;
    matchday: number;
    homeTeamName: string;
    awayTeamName: string;
}

@Component({
    selector: 'app-fixture',
    templateUrl: 'fixture.component.html',
    styles: []
})
export class FixtureComponent implements OnInit {

    public data: MatchFixtures;
    private url = 'https://api.football-data.org/v1/teams/66/fixtures';
    private days = '?timeFrame=n10';// return n7 or p7
    private season = '?season=';// return integer year i.e. 2017
    // private apiKey = '21703283a7884751ab3600e48307da78';
    private today = new Date();
    private dd = this.today.getDate();
    private mm = this.today.getMonth() + 1;
    private yyyy = this.today.getFullYear();

    constructor(private http: HttpClient) {

    }

    ngOnInit(): void {
        if (this.dd < 10)
            this.dd = 0 + this.dd;
        if (this.mm < 10)
            this.mm = 0 + this.mm;

        this.http.get<MatchFixtures>(this.url + this.days).subscribe(
            data => {
                this.data = data;
            },
            (errorHandler: HttpErrorResponse) => {
                if (errorHandler.error instanceof Error) {
                    console.log('Client-side error occured');
                } else {
                    console.log('Server-side error occured');
                }
            }
        );

        /* //post
        const req = this.http.post(this.url, {
          title: 'foo',
          body: 'bar',
          userId: 1
        })
          .subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log('Error occured');
          }
          ) */
    }
}
