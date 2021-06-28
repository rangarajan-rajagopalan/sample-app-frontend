import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.get('store').query('folder', { user_id: 10000 }).then((response) => {
            const folders = response.content.map(obj => obj.__data);
            return JSON.parse(JSON.stringify(folders));
        });
    }
});
