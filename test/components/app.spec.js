import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests
describe('App', () => {
  let component;

  beforeEach(() => {
    // create an instance of App
    component = renderComponent(App);
  });

  // Use 'it' to test a single attribute of a target
  it('shows a comment box', () => {
    // Use 'expect' to make 'assertion' about a target
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });

});