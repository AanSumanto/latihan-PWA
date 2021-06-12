const NotificationHelper = {
    sendNotification ({ title, option }) {
        if (!this._checkAvailability()) {
            console.log('Notification not Supported in this Browser');
            return;
        }

        if (!this._checkPermission()) {
            console.log('User did not yet Granted permission');
            this._requestPermisssion();
            return;
        }

        this._showNotification({ title, Option })
    },

    _checkAvailability() {
        return !!('Notification' in window);
    },

    _checkPermission() {
        return Notification.permission === 'granted';
    },

    async _requestPermisssion () {
        const status = await Notification.requestPermission();

        if (status === 'denied') {
            console.log('Notification Denied');
        }

        if(status ==='default') {
            console.log('Permission Closed');
        }
    },

    async _showNotification ({ title, option }) {
        const serviceWorkerRegistration = await navigator.serviceWorker.ready;
        serviceWorkerRegistration.showNotification(title, option);

    },

};

export default NotificationHelper;