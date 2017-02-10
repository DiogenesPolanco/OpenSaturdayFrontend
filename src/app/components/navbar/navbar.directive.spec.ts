import { NavbarController } from './navbar.directive';

/**
 * @todo Complete the test
 * This example is not perfect.
 * Test should check if MomentJS have been called
 */
describe('directive navbar', function() {
  let element: angular.IAugmentedJQuery;
  let navbarController: NavbarController;
  let timeInMs: number;

  beforeEach(angular.mock.module('opensaturday'));
  
  it('should be compiled', function() {
    expect(element.html()).not.toEqual(null);
  });

  it('should have isolate scope object with instanciate members', function() {
    expect(navbarController).not.toBeNull();
    expect(navbarController.creationDate).toEqual(timeInMs);
    expect(navbarController.relativeDate).toEqual('a day ago');
  });
});