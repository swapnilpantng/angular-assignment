import { TestBed } from '@angular/core/testing';
import { FakeMissingTranslationHandler, TranslateDefaultParser, TranslateFakeCompiler, TranslateFakeLoader, TranslateModule, TranslateParser, TranslateService, TranslateStore } from '@ngx-translate/core';
import { MessageService } from './message.service';

describe('MessageService', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule
      ],
      providers: [
        TranslateService,
        TranslateStore,
        TranslateFakeLoader,
        TranslateFakeCompiler,
        TranslateDefaultParser,
        FakeMissingTranslationHandler,
      ]
    });
  });

  it('should not have any messages in starting', () => {
    const messageService = new MessageService(new TranslateService(new TranslateStore,new TranslateFakeLoader,new TranslateFakeCompiler,new TranslateDefaultParser,new FakeMissingTranslationHandler,true,true,false,"en"));
    let count = messageService.messages.length;
    expect(count).toBe(0);
  });

  it('should add a message when add function is called', () => {
    const messageService = new MessageService(new TranslateService(new TranslateStore,new TranslateFakeLoader,new TranslateFakeCompiler,new TranslateDefaultParser,new FakeMissingTranslationHandler,true,true,false,"en"));

    messageService.add('message');

    expect(messageService.messages.length).toBe(1);
  })
});
