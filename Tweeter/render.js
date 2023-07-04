const _renderLibrary = function(){
    const _displayTweet = function(_objTweet){

        for (var tkey in _objTweet){
            const idiv = document.createElement("div");
            idiv.id = tkey;
            idiv.classList.add("tweet-class");


            const tweetName = document.createElement("p");
            tweetName.id = "p_" + tkey;
            tweetName.innerText = _objTweet[tkey]["text"]; 
            tweetName.classList.add("tweet-text");
            idiv.appendChild(tweetName);
            //comment block 
            for (var ckey in _objTweet[tkey]["comments"]){
                const cdiv = document.createElement("div");
                cdiv.id = "c_" + tkey+"_"+ckey;
                cdiv.classList.add("comment-item");
                cdiv.innerHTML = '<span class="dropcomment">[x] </span>' + _objTweet[tkey]["comments"][ckey]
                $.data(cdiv, 'cmid', tkey);
                idiv.appendChild(cdiv);
  
            }
            //comment block
            const ddiv = document.createElement("div");
            ddiv.classList.add("comment-add");
            idiv.appendChild(ddiv);

            const commentBox = document.createElement("input");
            commentBox.type = "text";
            commentBox.id = "textCommentBox_"+tkey;
            commentBox.classList.add("comment-text");
            ddiv.appendChild(commentBox);
            
            const commentButton = document.createElement("button");
            commentButton.innerText = "Comment";
            $.data(commentButton, 'twid', tkey);
            commentButton.id = "btnComment_"+tkey;
            commentButton.classList.add("comment-button");
            ddiv.appendChild(commentButton);

            const tweetDrop = document.createElement("button");
            tweetDrop.innerText = "Delete Post";
            $.data(tweetDrop, 'twid', tkey);
            tweetDrop.id = "btnTweetDrop_"+tkey; 
            tweetDrop.classList.add("drop-tweet-class");
            idiv.appendChild(tweetDrop);
            document.getElementById("tweet-div").appendChild(idiv);

        }
    }



    const _clearTweets = function() {
        const rootNode = document.getElementById("tweet-div");
        while (rootNode.lastElementChild) {
            rootNode.removeChild(rootNode.lastElementChild);
        }
    }
        
        return {
            displayTweet: _displayTweet,
            clearTweets: _clearTweets,
        }
    
}