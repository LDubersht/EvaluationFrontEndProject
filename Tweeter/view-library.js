const _viewLibrary = function(){
    const _startInit = function(){
        //start feeling
        const header = document.createElement("h1");
        header.innerText = "Tweeter";
        document.body.appendChild(header);

        const div = document.createElement("div");
        div.id = "createTW";
        // div.style.display = "flex";
        div.style.marginLeft = "10px"; 

        const inputBox = document.createElement("input");
        inputBox.type = "text";
        inputBox.id = "tw-text";
        inputBox.style.width = "320px";
        div.appendChild(inputBox);

        const button = document.createElement("button");
        button.innerText = "Tweet";
        button.id = "btnTweet";
        button.style.background = "#3498db";

        div.appendChild(button);
        document.body.appendChild(div);

        const tdiv = document.createElement("div");
        tdiv.id = "tweet-div"
        document.body.appendChild(tdiv);

    }

    const _displayTweet = function(_objTweet){

        for (var key in _objTweet){
            const idiv = document.createElement("div");
            idiv.id = key;
            idiv.style.marginLeft = "10px";   
            idiv.style.border = "thin solid #CCCCCC"; 
            idiv.style.padding = "8px";

            const tweetName = document.createElement("p");
            tweetName.id = "p" + key;
            tweetName.innerText = key; 
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
        }
    }

    const _dequeueTweetText = function(){
            let node = document.getElementById("tw-text")
            let res = node.value;
            node.value = "";
            return res;
    } 

        const _clearTweets = function() {
            const rootNode = document.getElementById("tweet-div");
            while (rootNode.lastElementChild) {
                rootNode.removeChild(rootNode.lastElementChild);
            }
        }

        return {
            startInit: _startInit,
            displayTweet: _displayTweet,
            clearTweets: _clearTweets,
            getTweetText: _getTweetText

        }
}



