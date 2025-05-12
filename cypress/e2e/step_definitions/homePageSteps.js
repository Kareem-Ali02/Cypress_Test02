import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import { HomePage } from '../../pages/HomePage';

const homePage = new HomePage();


Then ('I should see the Automation Exercise logo', () => {
  homePage.getLogo().should('be.visible');
});

Then ('I should see the navigation bar', () => {
  homePage.getNavBar().should('be.visible');
});
