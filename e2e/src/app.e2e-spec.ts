import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Angular Form Validations - Exercise', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('All the required Validations should be applied for FirstName FormControl', () => {
    let element = page.getFirstName();
    page.navigateTo();
    element.click();
    page.getForm().click();
    expect(element.getAttribute('aria-invalid')).toBe('true','Control should be invalid if value is empty');
    element.sendKeys('Deepan Chakkaravarthy');
    expect(element.getAttribute('aria-invalid')).toBe('false','Control should be valid for valid input value');
    element.clear();
    element.sendKeys('Deepan0987');
    expect(element.getAttribute('aria-invalid')).toBe('true','Control should be invalid for invalid input value');
    
  });

  it('All the required Validations should be applied for LastName FormControl', () => {
    let element = page.getLastName();
    page.navigateTo();
    element.click();
    page.getForm().click();
    expect(element.getAttribute('aria-invalid')).toBe('true','Control should be invalid if value is empty');
    element.sendKeys('Chakkaravarthy');
    expect(element.getAttribute('aria-invalid')).toBe('false','Control should be valid for valid input value');
    element.clear();
    element.sendKeys('Deepan#');
    expect(element.getAttribute('aria-invalid')).toBe('true','Control should be invalid for invalid input value');
    
  });

  it('All the required Validations should be applied for Address FormControl', () => {
    let element = page.getAddress();
    page.navigateTo();
    element.click();
    page.getForm().click();
    expect(element.getAttribute('aria-invalid')).toBe('true','Control should be invalid if value is empty');
    element.sendKeys('B-999, XYZ Apartments, New Delhi');
    expect(element.getAttribute('aria-invalid')).toBe('false','Control should be valid for valid input value');
    element.clear();
    element.sendKeys('B-214');
    expect(element.getAttribute('aria-invalid')).toBe('true','Control should be invalid for invalid input value');
    
  });

  it('All the required Validations should be applied for Email FormControl', () => {
    let element = page.getEmail();
    page.navigateTo();
    element.click();
    page.getForm().click();
    expect(element.getAttribute('aria-invalid')).toBe('true','Control should be invalid if value is empty');
    element.sendKeys('deepan@gmail.com');
    expect(element.getAttribute('aria-invalid')).toBe('false','Control should be valid for valid input value');
    element.clear();
    element.sendKeys('deepan@stackroute.in');
    expect(element.getAttribute('aria-invalid')).toBe('true','Control should be invalid for invalid input value');
    
  });

  it('All the required Validations should be applied for Password FormControl', () => {
    let element = page.getPassword();
    page.navigateTo();
    element.click();
    page.getForm().click();
    expect(element.getAttribute('aria-invalid')).toBe('true','Control should be invalid if value is empty');
    element.sendKeys('Deepan#321');
    expect(element.getAttribute('aria-invalid')).toBe('false','Control should be valid for valid input value');
    element.clear();
    element.sendKeys('deepan321');
    expect(element.getAttribute('aria-invalid')).toBe('true','Control should be invalid for invalid input value');
    
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
