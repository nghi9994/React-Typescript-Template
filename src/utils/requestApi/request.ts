import axios, { AxiosRequestConfig } from 'axios';
import { BASE_API_URL } from '../../config/constants';
import { localStorageUtil } from 'utils/localStorage';
import * as queryString from 'query-string';

interface HeaderOptions {
  unauthorize?: boolean;
}

interface CustomOptions {
  hideError?: boolean;
}

class Request {
  currentToken = '';
  lang = 'en';
  token = localStorage.getItem('token');

  private getHeaders = async () => {
    this.currentToken = (await localStorageUtil.getAccessToken()) || '';
    const config: AxiosRequestConfig = {
      headers: {
        authorization: 'Bearer ' + this.currentToken,
        'Accept-Language': this.lang,
      },
    };
    return config;
  };

  private getUnauthorizeHeaders = () => {
    const config: AxiosRequestConfig = {
      headers: {
        'Accept-Language': this.lang,
      },
    };
    return config;
  };

  private getUploadFileHeaders = async (unauthorize?: boolean) => {
    this.currentToken = (await localStorageUtil.getAccessToken()) || '';

    let config: AxiosRequestConfig;
    if (unauthorize) {
      config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept-Language': this.lang,
        },
      };
    } else {
      config = {
        headers: {
          Authorization: 'Bearer ' + this.currentToken,
          'Content-Type': 'multipart/form-data',
          'Accept-Language': this.lang,
        },
      };
    }
    return config;
  };

  async get(
    url: string,
    params?: any,
    withoutBaseUrl?: boolean,
    options?: HeaderOptions,
    customOpt?: CustomOptions,
  ) {
    try {
      // const header = options?.unauthorize
      //   ? this.getUnauthorizeHeaders()
      //   : this.getHeaders();

      const token = localStorage.getItem('token');

      const response = await axios.get(
        (!withoutBaseUrl ? BASE_API_URL : '') +
          url +
          '?' +
          queryString.stringify(params),
        // await header,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      );

      const res = response?.data;
      this.handleResponse(res);
      return res;
    } catch (error) {
      this.handleError(error, customOpt);
      throw error;
    }
  }

  async patch(
    url: string,
    body?: any,
    options?: HeaderOptions,
    customOpt?: CustomOptions,
  ) {
    try {
      const header = options?.unauthorize
        ? this.getUnauthorizeHeaders()
        : await this.getHeaders();

      const response = await axios.patch(BASE_API_URL + url, body, header);
      const res = response?.data;
      this.handleResponse(res);
      return res;
    } catch (error) {
      this.handleError(error, customOpt);
      throw error;
    }
  }

  async put(
    url: string,
    body?: any,
    options?: HeaderOptions,
    customOpt?: CustomOptions,
  ) {
    try {
      const header = options?.unauthorize
        ? this.getUnauthorizeHeaders()
        : await this.getHeaders();

      const response = await axios.put(BASE_API_URL + url, body, header);
      const res = response?.data;
      this.handleResponse(res);
      return res;
    } catch (error) {
      this.handleError(error, customOpt);
      throw error;
    }
  }

  async post(
    url: string,
    params?: any,
    body?: any,
    options?: HeaderOptions,
    customOpt?: CustomOptions,
  ) {
    try {
      const response = await axios.post(
        BASE_API_URL + url + '?' + queryString.stringify(params),
        body,
        {
          headers: {
            Authorization: 'Bearer ' + this.token,
          },
        },
      );
      const res = response?.data;
      this.handleResponse(res);
      return res;
    } catch (error: any) {
      return error.response;
      // this.handleError(error, customOpt);
      // throw error;
    }
  }

  async delete(
    url: string,
    body?: any,
    options?: HeaderOptions,
    customOpt?: CustomOptions,
  ) {
    try {
      const header = options?.unauthorize
        ? this.getUnauthorizeHeaders()
        : await this.getHeaders();

      const response = await axios.delete(BASE_API_URL + url, header);
      const res = response?.data;
      this.handleResponse(res);
      return res;
    } catch (error) {
      this.handleError(error, customOpt);
      throw error;
    }
  }

  async postFile(
    url: string,
    params?: any,
    headerOption?: HeaderOptions,
    customOpt?: CustomOptions,
  ) {
    try {
      const header = await this.getUploadFileHeaders(
        !!headerOption?.unauthorize,
      );
      const response = await axios.post(BASE_API_URL + url, params, header);
      const res = response?.data;
      this.handleResponse(res);
      return res;
    } catch (error) {
      this.handleError(error, customOpt);
      throw error;
    }
  }

  private handleError(error, customOpt?: CustomOptions) {
    // if (!customOpt?.hideError) {
    //   // const statusCode = error?.response?.status;
    //   const message = error?.response?.data?.error?.message || '';

    //   eventEmitter.emit(EVENT_EMITTER_CODE.GLOBAL, message);
    // }
    return error.response.data;
  }

  private handleResponse(res) {
    return res;
  }

  processLogout() {
    this.currentToken = '';
  }

  setLang(lang: string) {
    this.lang = lang;
  }
}

export const request = new Request();