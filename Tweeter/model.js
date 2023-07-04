const _tweetCollection = function(){
    let _objTweets = {};
    let _intCurrentKeyTweet = parseInt(0);
    
    const addTweet = function(tweet){
        let _objComm = {};
        let tweetKey = "t"+_intCurrentKeyTweet
        _objComm["text"] = tweet;
        // _objTweet[_intCurrentKeyTweet] = tweet;
        _objComm["comment"] = [];
        _objTweets[tweetKey] = _objComm;
        _intCurrentKeyTweet = _intCurrentKeyTweet + 1;
        return _intCurrentKeyTweet;    
    }
    
    const dropTweet = function(keyTweet){
        delete _objTweets[keyTweet];
        return {..._objTweets};    
    }
    
    const getTW = function(){
        return {..._objTweets}; 
    }

    return {
        addTweet,
        dropTweet,
        getTW
    }
}

