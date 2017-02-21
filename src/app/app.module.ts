import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BackendAngularApiModule } from '../api/backend-angular-api/backend-angular-api.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { HomePage } from '../pages/home/home';
import { HelpPage } from '../pages/help/help';
import { AdminPanelPage } from '../pages/admin-panel/admin-panel';

import { HeaderComponent } from './../components/header/header';

import { NoticeModalContent } from '../components/modals/notice/notice';

const appRoutes: Routes = [
  { path: 'panel', component: AdminPanelPage },  
  { path: '', component: AdminPanelPage },
];

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HelpPage,
    AdminPanelPage,
    NoticeModalContent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BackendAngularApiModule,
    RouterModule.forRoot( appRoutes, { useHash: !history.pushState }),
    NgbModule.forRoot()
  ],
  bootstrap: [ AppComponent ],
  providers: [ NgbActiveModal, BackendAngularApiModule ],
  entryComponents: [ NoticeModalContent ]
})
export class AppModule {}


