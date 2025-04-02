import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees: any[] = [];
  newEmployee: any = {};

  constructor(private http: HttpClient, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

}
