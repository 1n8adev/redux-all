// src/redux/sagas/productSagas.js
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCT_DETAILS_REQUEST,
} from '../constants/productTypes';
import {
  fetchProductsSuccess,
  fetchProductsFail,
  fetchProductDetailsSuccess,
  fetchProductDetailsFail,
} from '../actions/productActions';
import {
  fetchProductsApi,
  fetchProductDetailsApi,
} from '../../services/apiService';

function* fetchProducts() {
  try {
    const response = yield call(fetchProductsApi);
    yield put(fetchProductsSuccess(response.data));
  } catch (error) {
    yield put(fetchProductsFail(error.message));
  }
}

function* fetchProductDetails(action) {
  try {
    const response = yield call(fetchProductDetailsApi, action.payload);
    yield put(fetchProductDetailsSuccess(response.data));
  } catch (error) {
    yield put(fetchProductDetailsFail(error.message));
  }
}

function* watchProductActions() {
  yield takeEvery(FETCH_PRODUCTS_REQUEST, fetchProducts);
  yield takeEvery(FETCH_PRODUCT_DETAILS_REQUEST, fetchProductDetails);
}

export default watchProductActions;
