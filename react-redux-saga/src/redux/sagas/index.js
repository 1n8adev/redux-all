import { all } from 'redux-saga/effects';
import watchProductActions from './productSagas';

export default function* rootSaga() {
  yield all([watchProductActions()]);
}
