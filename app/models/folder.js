import DS from 'ember-data';

export default DS.Model.extend({
  folder_id: DS.attr('number'),
  user_id: DS.attr('number'),
  folder_name: DS.attr('string')
});
