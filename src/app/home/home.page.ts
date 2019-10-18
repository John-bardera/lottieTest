import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
      private http: HttpClient
  ) {
    console.log('hoge');
    this.http.get('hogehoge').subscribe(_ => {
      console.log(_);
    });
  }

}
