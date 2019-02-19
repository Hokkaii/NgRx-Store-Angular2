import { Action } from '@ngrx/store'; // Action是状态的改变。它描述了某个事件的发生，但是没有指定应用的状态如何改变。
import { Article } from '../models/article';

export const JAVA = 'Java';
export const ANGULAR = 'Angular';
export const MY_ARTICLES = 'Favorite_Articles';

export class JavaArticlesAction implements Action {
  readonly type = JAVA;
}

export class AngularArticlesAction implements Action {
  readonly type = ANGULAR;
}

export class FavoriteArticlesAction implements Action {
  readonly type = MY_ARTICLES;
  constructor(public payload: Article[]) { }
}

export type All = JavaArticlesAction | AngularArticlesAction | FavoriteArticlesAction;
