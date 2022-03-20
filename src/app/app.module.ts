import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NZ_I18N, zh_TW } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './components/member/member.component';
import { StringToColorPipe } from './components/string-to-color/string-to-color.pipe';
import { IconsProviderModule } from './icons-provider.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { UserGuard } from './user.guard';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MemberComponent,
    StringToColorPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzAvatarModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_TW }, NzModalService, UserGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
