class AlarmClock {
    alarmCollection = [];
    intervalId = null;
    constructor() {

    }

    addClock = (time, action) => {
        if (time && action) {
            if (this.alarmCollection.includes(time)) {
                console.warn('Уже присутствует звонок на это же время')
            } else {
                this.alarmCollection.push({
                    callback: action, 
                    time: time, 
                    canCall: true
                });
            }
        } else {
            throw new Error('Отсутствуют обязательные аргументы');
        }
    }

    removeClock = (time) => {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time != time)
    }

    getCurrentFormattedTime = () => {
        let currentDate = new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
        return currentDate;
    }

    start = () => {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach(alarm => {
                    if (alarm.time == this.getCurrentFormattedTime() && alarm.canCall) {
                        alarm.canCall = false;
                        alarm.callback();
                    } 
                })
            }, 1000);
        }

        return;
    }

    stop = () => {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls = () => {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        })
    }

    clearAlarms = () => {
        this.alarmCollection = [];
        this.stop();
    }
}