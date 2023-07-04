//declaration
const tweetCollection = _tweetCollection();
const viewLibrary = _viewLibrary();
const render = _renderLibrary();

const _tweetOperation = function(){


    const _createTweet = function(){
        let twText = viewLibrary.getTweetText();
        let twKey = tweetCollection.addTweet(twText);
        let twObj = tweetCollection.getTW()
        render.clearTweets();
        render.displayTweet(twObj);
        $("btnTweet"+twKey).On("click", tweetOperation.dropTweet(twKey));
    } 

    const _dropTweet = function(twKey){
        let twObj = tweetCollection.dropTweet(twKey);
        render.clearTweets();
        render.displayTweet(twObj);
    } 

    return {
        createTweet: _createTweet,
        dropTweet: _dropTweet
    }
}

const tweetOperation = _tweetOperation()

viewLibrary.startInit();

document.getElementById("btnTweet").addEventListener("click", tweetOperation.createTweet);