const _renderLibrary = function(){
    const _displayTweet = function(_objTweet){

        for (var key in _objTweet){
            const idiv = document.createElement("div");
            idiv.id = key;
            // $(idiv).Data("id") = key;
            idiv.style.marginLeft = "10px";   
            idiv.style.border = "thin solid #CCCCCC"; 
            idiv.style.padding = "8px";

            const tweetName = document.createElement("p");
            tweetName.id = "p" + key;
            tweetName.innerText = _objTweet[key]["text"]; 
            tweetName.style.fontSize = "20px";
            idiv.appendChild(tweetName);

            const ddiv = document.createElement("div");
            ddiv.style.border = "thin solid #FFCCCC"; 
            idiv.appendChild(ddiv);

            const commentBox = document.createElement("input");
            commentBox.type = "text";
            commentBox.id = "textComment"+key;
            commentBox.style.width = "320px";
            ddiv.appendChild(commentBox);
            
            const commentButton = document.createElement("button");
            commentButton.innerText = "Comment";
            commentButton.id = "btnComment"+key;
            commentButton.style.background = "#DDDDDD";
            ddiv.appendChild(commentButton);

            const tweetDrop = document.createElement("button");
            tweetDrop.innerText = "Delete Post";
            tweetDrop.id = "btnTweet"+key; 
            idiv.appendChild(tweetDrop);
            document.getElementById("tweet-div").appendChild(idiv);
            //add drop
            tweetDrop.addEventListener("click", tweetOperation.dropTweet(key));

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