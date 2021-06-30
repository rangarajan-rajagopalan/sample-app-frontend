const ApplicationController = Ember.Controller.extend({
    showAdd: false,
    isEdit: false,
    folderName: '',
    folderObj: {},
    onSaveClick: function () {
        if (!this.folderName || !this.folderName.trim()) {
            return;
        }
        if (this.isEdit) {
            this.store.find('folder', this.folderObj.folder_id).then((folder) => {
                folder.set('folder_name', this.folderName);
                folder.save();
            });
        } else {
            var newFolder = this.store.createRecord('folder', {
                user_id: 10000,
                folder_name: this.folderName
            });
            newFolder.save();
        }
        this.set('showAdd', false);
        this.set('isEdit', false);
    },
    actions: {
        onAddClick: function () {
            if (this.showAdd) {
                this.onSaveClick();
            } else {
                this.set('folderName', '');
                this.set('showAdd', true);
            }
        },
        onEditClick: function (obj) {
            this.set('showAdd', true);
            this.set('isEdit', true);
            this.set('folderName', obj.folder_name);
            this.set('folderObj', obj);
        },
        onDeleteClick: function (obj) {
            this.store.find('folder', obj.folder_id).then((folder) => {
                folder.deleteRecord();
                folder.save();
            });
        }
    }
});

export default ApplicationController;