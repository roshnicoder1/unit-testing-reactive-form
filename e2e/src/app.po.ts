import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

getForm(){
  return element(by.className('form-container'));
}
  getFirstName(){
    return element(by.id('firstName'));
  }

  getLastName(){
    return element(by.id('lastName'));
  }

  getAddress(){
    return element(by.id('address'));
  }

  getEmail(){
    return element(by.id('email'));
  }

  getPassword(){
    return element(by.id('password'));
  }
}
