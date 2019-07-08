import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'consumer-app1-angular';
  postRes: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    let s = document.createElement('script');
    s.type = `module`;
    s.src = `http://localhost:3000/widgets/param`;

    document.body.appendChild(s);
    const elm = document.createElement('ae-widget1');

    const content = document.getElementById('content');
    content.appendChild(elm);
  }

  postRequest() {
    const url = 'http://localhost:3000/widgets/param'
    this.http.post(url, {}).subscribe((res: string) => {
      this.postRes = res;
    })
  }
}
