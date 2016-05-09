import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('welcome');
  this.route('dashboard', {path: '/'}, function() {
    this.route('search');
    this.route('musician', {path: '/musicians/:id'});
  });
  this.route('admin', function() {
    this.route('musicians', function() {
      this.route('musician', {path: '/:id'});
    });
    this.route('tags', function() {
      this.route('tag', {path: '/:id'});
    });
    this.route('music');
  });
});

export default Router;
