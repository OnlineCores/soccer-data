import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';
import { of as observableOf } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { switchMap } from 'rxjs/operators/switchMap';

/* interface LeagueTable {
    leagueCaption: String;
    matchday: Number;
    standing: Array<string>;
    rank: Number;
    team: String;
    teamId: Number;
    playedGames: Number;
    crestURI: String;
    points: Number;
    goals: Number;
    goalsAgainst: Number;
    goalDifference: Number;
} */

@Component({
    selector: 'app-league',
    templateUrl: './league.component.html',
    styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements AfterViewInit {
    /* public data: LeagueTable;

    private url = 'http://api.football-data.org/v1/competitions/';
    private competition = '398/';
    private type = 'leagueTable/';
    private today = new Date(); */

    /* displayedColumns = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    @ViewChild(MatSort) sort: MatSort;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {

        this.http.get<LeagueTable>(this.url + this.competition + this.type).subscribe(
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
        ); */

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

    /**
     * Set the sort after the view init since this component will
     * be able to query its view for the initialized sort.
     */
    /* ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    } */
    displayedColumns = ['created', 'state', 'number', 'title'];
    exampleDatabase: ExampleHttpDao | null;
    dataSource = new MatTableDataSource();

    resultsLength = 0;
    isLoadingResults = false;
    isRateLimitReached = false;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private http: HttpClient) { }

    ngAfterViewInit() {
        this.exampleDatabase = new ExampleHttpDao(this.http);

        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
            startWith({}),
            switchMap(() => {
                this.isLoadingResults = true;
                return this.exampleDatabase!.getRepoIssues(
                    this.sort.active, this.sort.direction, this.paginator.pageIndex);
            }),
            map(data => {
                // Flip flag to show that loading has finished.
                this.isLoadingResults = false;
                this.isRateLimitReached = false;
                this.resultsLength = data.total_count;

                return data.items;
            }),
            catchError(() => {
                this.isLoadingResults = false;
                // Catch if the GitHub API has reached its rate limit. Return empty data.
                this.isRateLimitReached = true;
                return observableOf([]);
            })
            ).subscribe(data => this.dataSource.data = data);
    }
}

export interface GithubApi {
    items: GithubIssue[];
    total_count: number;
}

export interface GithubIssue {
    created_at: string;
    number: string;
    state: string;
    title: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDao {
    constructor(private http: HttpClient) { }

    getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
        const href = 'https://api.github.com/search/issues';
        const requestUrl =
            `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;

        return this.http.get<GithubApi>(requestUrl);
    }
}
