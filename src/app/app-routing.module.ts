import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// routerLinkキーワードから呼ばれる
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // URLがlocalhost:4200/heroesのようなものである場合にHeroesComponentを表示します。
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
];

@NgModule({
  // forRoot()メソッドは、ルーティングに必要なサービス・プロバイダーとディレクティブを提供し、ブラウザの現在のURLを元に最初の遷移を行います。
  imports: [RouterModule.forRoot(routes)],
  // アプリケーション全体で利用できるようにします。
  exports: [RouterModule]
})
export class AppRoutingModule { }
