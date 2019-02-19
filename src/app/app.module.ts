import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
// StoreModule: StoreModule是@ngrx/storeAPI中的一个模块，它被用来在应用模块中配置reducer。
import { AppComponent } from './app.component';
import { ArticleComponent } from './apps/components/article.component';
import { reducers, metaReducers } from './apps/reducers/reducers';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers })
    // StoreModule: StoreModule是@ngrx/storeAPI中的一个模块，它被用来在应用模块中配置reducer。
  ],
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
