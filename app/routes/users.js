import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.get('store').query('user', {}).then((response) => {
            const users = response.content.map(obj => obj.__data);
            return JSON.parse(JSON.stringify(users));
        });
    }
});
