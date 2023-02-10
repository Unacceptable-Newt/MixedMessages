class sentence {
    constructor(listsOfWords, outline) {
        this._listsOfWords = listsOfWords;
        this._outline = outline;
    }

    get sentence(){

        return this._outline(this._listsOfWords.map( value => value[Math.floor(Math.random() * value.length)]));
    }
}

one = new sentence([['eat','cut','throw'],['Austin','James','Daniel'],['cock','ball','cat']],(words) => `I love ${words[0]}ing ${words[1]}'s ${words[2]}`);

