import Ember from 'ember';
const Droplet = window.Droplet;

export default Ember.Component.extend(Droplet.Preview, {
  classNames: ['profile-preview', 'img-circle']
});
