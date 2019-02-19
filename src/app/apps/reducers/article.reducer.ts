import { createFeatureSelector, createSelector } from '@ngrx/store';
// createFeatureSelector: 它为状态（state）创建一个feature selector。
// createSelector: 它创建一个selector用于生成一个指定的状态;。
import * as fromActions from '../actions/article.actions';
import { JAVA_ARTICLES, ANGULAR_ARTICLES } from '../models/article';
import { ArticleState } from './app.states';

export const initialState: ArticleState = { articles: [] };

export function reducer(state = initialState, action: fromActions.All): ArticleState {
    switch (action.type) {
        case fromActions.JAVA: {
            return { articles: JAVA_ARTICLES };
        }
        case fromActions.ANGULAR: {
            return { articles: ANGULAR_ARTICLES };
        }
        case fromActions.MY_ARTICLES: {
            return { articles: action.payload };
        }
        default: {
            return state;
        }
    }
}

export const getArticleState = createFeatureSelector<ArticleState>('articleState');
// createFeatureSelector: 它为状态（state）创建一个feature selector。功能选择器

export const getArticles = createSelector(getArticleState, (state: ArticleState) => state.articles);
// createSelector: 它创建一个selector用于生成一个指定的状态。
