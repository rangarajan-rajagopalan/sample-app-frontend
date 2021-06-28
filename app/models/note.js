import DS from 'ember-data';

export default DS.Model.extend({
  note_id: DS.attr('number'),
  folder_id: DS.attr('number'),
  user_id: DS.attr('number'),
  notes_title: DS.attr('string'),
  notes_description: DS.attr('string')
});
