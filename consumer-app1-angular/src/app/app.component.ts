import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'consumer-app1-angular';
  postRes: string;

  constructor(private http: HttpClient) {}

  postRequest() {
    const url = 'http://localhost:3000/widgets/param'
    this.http.post(url, {}).subscribe((res: string) => {
      this.postRes = res;
    })
  }
}
