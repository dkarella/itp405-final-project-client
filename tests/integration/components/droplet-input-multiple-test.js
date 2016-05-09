import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('droplet-input-multiple', 'Integration | Component | droplet input multiple', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{droplet-input-multiple}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#droplet-input-multiple}}
      template block text
    {{/droplet-input-multiple}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
