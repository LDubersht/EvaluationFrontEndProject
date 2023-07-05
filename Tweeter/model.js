const _tweetCollection = function(){
    let _objTweets = {};
    let _intCurrentKeyTweet = parseInt(0);
    let commentKeys = {};
    
    const addTweet = function(tweet){
        let _objTweet = {};
        let _objComm = {};
        let tweetKey = "t"+_intCurrentKeyTweet
        _objTweet["text"] = tweet;
        _objTweet["comments"] = _objComm;
        // _objTweet[_intCurrentKeyTweet] = tweet;
        _objTweets[tweetKey] = _objTweet;
        _intCurrentKeyTweet++;
        commentKeys[tweetKey] = parseInt(0);
        return _intCurrentKeyTweet;    
    }
    
    const addComment = function(tweetKey,cmText){
        let intCommentNum = commentKeys[tweetKey];
        cmKey = "c" + intCommentNum;
        _objTweets[tweetKey]["comments"][cmKey] = cmText;
        intCommentNum++;
        commentKeys[tweetKey] = intCommentNum;
        return intCommentNum; 
    }
    
    const dropTweet = function(keyTweet){
        delete _objTweets[keyTweet];
    }
    
    const dropComment = function(keyTweet,kewComment){
        delete _objTweets[keyTweet]["comments"][kewComment];
    }

    const getTW = function(){
        return {..._objTweets}; 
    }

    return {
        addTweet,
        dropTweet,
        addComment,
        dropComment,
        getTW
        
    }
}

