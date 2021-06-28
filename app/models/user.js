import DS from 'ember-data';

export default DS.Model.extend({
  user_id: DS.attr('number'),
  user_first_name: DS.attr('string'),
  user_last_name: DS.attr('string'),
  user_role: DS.attr('string')
});
