//declaration
const tweetCollection = _tweetCollection();
const viewLibrary = _viewLibrary();
const render = _renderLibrary();

const _tweetOperation = function(){


    const _createTweet = function(){
        let twText = viewLibrary.getTweetText();
        if (twText===""){return;}
        let twKey = tweetCollection.addTweet(twText);
        let twObj = tweetCollection.getTW()
        render.clearTweets();
        render.displayTweet(twObj);
        _addlisteners()
    } 

    const _dropTweet = function(){
        let twKey = $(this).data("twid");  
        tweetCollection.dropTweet(twKey);
        let twObj = tweetCollection.getTW();
        render.clearTweets();
        render.displayTweet(twObj);
        _addlisteners()
    } 

    const _addComment = function(){
        let twKey = $(this).data("twid");
        let cmText = viewLibrary.getCommentText(twKey);
        if (cmText===""){return;}
        let cmKey = tweetCollection.addComment(twKey,cmText);
        let twObj = tweetCollection.getTW();
        render.clearTweets();
        render.displayTweet(twObj);
        _addlisteners()
        
    }

    const _dropComment = function(){
        // console.log($(this).data("twid"));
        // console.log($(this).data("cmid"));
        tweetCollection.dropComment($(this).data("twid"),$(this).data("cmid"))
        let twObj = tweetCollection.getTW();
        render.clearTweets();
        render.displayTweet(twObj);
        _addlisteners()
    }

    const _addlisteners = function(){
            $(".drop-tweet-class").on("click", tweetOperation.dropTweet);
            $(".comment-button").on("click",tweetOperation.addComment)
            $(".dropcomment").on("click",tweetOperation.dropComment)
        }

    return {
        createTweet: _createTweet,
        dropTweet: _dropTweet,
        addComment: _addComment,
        dropComment: _dropComment
    }
}

const tweetOperation = _tweetOperation()

//add drop

viewLibrary.startInit();

document.getElementById("btnTweet").addEventListener("click", tweetOperation.createTweet);