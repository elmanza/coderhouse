let moment = require('moment');


class Dates {
    constructor(birth){
        this.birth = birth;
        this.today = moment();
    }

    getToday(){
        return this.today.format('L');
    }

    getAllYears(){
        return this.today.diff(this.birth, 'years', true);
    }

    getAlldays(){        
        return this.today.diff(this.birth, 'days', true);
    }

    getDifferences(time){
        return this.today.diff(this.birth, time, true);
    }

}

module.exports = Dates;