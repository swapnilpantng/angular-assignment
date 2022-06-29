import { NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SharedModule } from '../shared/shared.module';
import { HomepageComponent } from './components/homepage/homepage.component';

export class EnsureModuleLoadedOnceGuard {
  constructor(targetModule: any) {
     if (targetModule) {
      console.error("Module already imported");
       throw new Error(`${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`);
     }
  }
}

const components = [
  HeaderComponent,
  SideNavComponent]

@NgModule({
  declarations: [
    ...components,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [...components]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  } }
