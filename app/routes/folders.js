import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            folders: this.getFolders()
        });
    },

    setupController(controller, model) {
        this._super(...arguments);
        controller.set('model', model);
    },

    getFolders() {
        return this.store.query('folder', { user_id: 10000 }).then((response) => {
            const folders = response.content.map(obj => obj.__data);
            return JSON.parse(JSON.stringify(folders));
        });
    }
});
