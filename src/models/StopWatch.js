class StopWatch {
    constructor() {
        this.start = 0;
    }

    StartCount() {
        this.start = Date.now();
    }

    get Elapsed() {
        return Date.now() - this.start;
    }
}

export default StopWatch;
