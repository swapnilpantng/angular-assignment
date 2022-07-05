import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  constructor(private translate: TranslateService) { }

  add(message: string,params?: object) {
    this.messages.push(this.translate.instant(message, params));
    window.setInterval(() => this.clear(), 7000)
  }

  clear() {
    this.messages = [];
  }
}
