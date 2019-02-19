import { Store } from '@ngrx/store';
// Store: 它提供了Store.select()和Store.dispatch()来与reducer协同工作。Store.select()用于选择一个selector，Store.dispatch()用于向reducer分发action的类型。
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import * as articleReducer from '../reducers/article.reducer';
import * as fromActions from '../actions/article.actions';
import { ArticleState } from '../reducers/app.states';
import { Article, FAVORITE_ARTICLES } from '../models/article';

@Component({
    selector: 'app-article',
    templateUrl: 'article.component.html'
})
export class ArticleComponent {
    articles: Observable<Article[]>;

    constructor(private store: Store<ArticleState>) {
        this.articles = store.select(articleReducer.getArticles);
    }
    showJavaArticles() {
        this.store.dispatch(new fromActions.JavaArticlesAction());
    }
    showAngularArticles() {
        this.store.dispatch(new fromActions.AngularArticlesAction());
    }
    showFavoriteArticles() {
        this.store.dispatch(new fromActions.FavoriteArticlesAction(FAVORITE_ARTICLES));
    }
}
