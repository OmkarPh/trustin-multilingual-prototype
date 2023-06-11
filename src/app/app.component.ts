import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['english', 'hindi', "marathi", "telugu", "tamil", "bengali"]);
    translate.setDefaultLang('english');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

}
