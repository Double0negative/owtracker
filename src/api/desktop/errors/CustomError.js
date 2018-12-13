'use strict';
class CustomError extends Error {
    constructor(name, message) {
        super(message);
        this.name = name;
        this.message = message;
    }

    toJSON() {
        let {name, message} = this;
        return {name, message};
    }
}

export default CustomError;
