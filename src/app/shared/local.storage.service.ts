import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorage {
  constructor() {}

  setToken(tokenName, tokenData) {
    let testForLocalStroage = this.testForLocalStroage();

    if (testForLocalStroage) {
      window.localStorage.setItem(tokenName, tokenData);
    } else {
      this.createCookie(tokenName, tokenData, 3);
    }
  }

  getToken(tokenName) {
    let testForLocalStroage = this.testForLocalStroage();
    if (testForLocalStroage) {

      return window.localStorage.getItem(tokenName);
    } else {
      return this.readCookie(tokenName);
    }
  }

  removeToken(tokenName) {
    let testForLocalStroage = this.testForLocalStroage();

    if (testForLocalStroage) {
      window.localStorage.removeItem(tokenName);
    } else {
      this.eraseCookie(tokenName);
    }
  }

  createCookie(name, value, days) {
    let  expires;
    let date;
    if (days) {
      date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = 'expires=' + date.toUTCString();
    } else {
      expires = '';
    }

    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  }

  readCookie(name) {
    let nameEQ = name + '=';
    let cookie = document.cookie.split(';');

    for (let i = 0; i < cookie.length; i++) {
      let c = cookie[i];
      while (c.charAt(0) === ' ') { c = c.substring(1, c.length); }
      if (c.indexOf(nameEQ) === 0) { return c.substring(nameEQ.length, c.length); }
    }

    return null;
  }

  eraseCookie(name) {
    this.createCookie(name, '', -1);
  }

  testForLocalStroage() {
    let mod = 'modernizr';
    try {
       window.localStorage.setItem(mod, mod);
       window.localStorage.removeItem(mod);

       return true;
     } catch (e) {

       return false;
     }
  }
}
