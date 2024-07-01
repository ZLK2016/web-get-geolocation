export default class {
    constructor() {
        this.watchid = null;
    }
    async getLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((pos) => {
                const { lattitude, longitude, altitude, } = pos;
                resolve({

                })
            }, reject);
        });
    }
    async watchLocation() {
        return new Promise((resolve, reject) => {
            const watchid = navigator.geolocation.watchPosition((pos) => {
                resolve({

                });
                this.watchid = watchid;
            }, reject);
        });
    }
    stopWatchLocation() {
        navigator.geolocation.stopWatch(this.watchid);
    }
}