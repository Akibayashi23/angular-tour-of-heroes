import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // 子に定義することで親で使えるようにする
  hero: Hero | undefined;

  constructor(
    // HeroDetailComponentのインスタンスへのルートに関する情報を保持します。 このコンポーネントは、URLから抽出されたルートのパラメータに関心があります。 "id"パラメータは、表示するヒーローのidです。
    private route: ActivatedRoute,
    // リモートサーバーからヒーローのデータを取得し、このコンポーネントはそれを使用して表示するヒーローを取得します。
    private heroService: HeroService,
    // ブラウザと対話するためのAngularサービスです。 これは前のビューに戻ることができるサービスです。
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    // route.snapshotは、コンポーネントが作成された直後のルート情報の静的イメージです。
    // paramMapは、URL から抽出されたルートパラメータ値の辞書です。 "id"キーは、フェッチするヒーローのidを返します。
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}
