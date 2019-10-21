class QuestionsService1 {
    _currentComplainKey;
    complainKeyToCurrentQuestionIndex = {};
    answeredQuestions;

    constructor() {
        Object.keys(data.complains).forEach(key => {
            this.complainKeyToCurrentQuestionIndex[key] = 0;
        });
    }

    nextQuestion() {

    }

    currentQuestion() {
        const questionIndex = this.complainKeyToCurrentQuestionIndex[this._currentComplainKey];
        const questionKey = data.complains[this._currentComplainKey].questions[questionIndex];
        return data.questions[questionKey];
    }

    priviousQuestion() {

    }


    set currentComplainKey(value) {
        this._currentComplainKey = value;
    }

    get currentComplainKey() {
        return this._currentComplainKey;
    }
}


class QuestionsService {
    instance;

    static getInstance() {
        // check if instance is available
        if (!this.instance) {
            this.instance = new QuestionsService1();
            delete this.instance.constructor; // or set it to null
        }
        return this.instance;
    }
}
