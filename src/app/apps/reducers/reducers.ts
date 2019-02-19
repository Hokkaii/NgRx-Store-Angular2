import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
//  ActionReducerMap注册了一系列的reducer，在应用中使用StoreModule对它进行配置。
// ActionReducer: 它被用于创建reducer，例如logger。
// MetaReducer: 在应用中使用StoreModule配置的MetaReducer构成了根的meta-reducer。
import { AppState } from './app.states';
import * as articleReducer from './article.reducer';
import { environment } from '../../../environments/environment';

export const reducers: ActionReducerMap<AppState> = {
    articleState: articleReducer.reducer
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return function (state: AppState, action: any): AppState {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
    ? [logger]
    : [];
