import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';  // Import TranslateService

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private translateService: TranslateService) {}

  changeLanguage(language: string) {
    this.translateService.use(language); // Switch the language using ngx-translate
  }
}
