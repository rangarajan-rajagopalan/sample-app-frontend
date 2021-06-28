import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.get('store').query('note', { user_id: 10000 }).then((response) => {
            const notes = response.content.map(obj => obj.__data);
            return JSON.parse(JSON.stringify(notes));
        });
    }
});
