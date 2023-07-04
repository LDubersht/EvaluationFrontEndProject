const _viewLibrary = function(){
    const _startInit = function(){
        //start feeling
        const header = document.createElement("h1");
        header.innerText = "Tweeter";
        document.body.appendChild(header);

        const div = document.createElement("div");
        div.id = "createTW";
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

    const _getTweetText = function(){
        let node = document.getElementById("tw-text")
        let res = node.value;
        node.value = "";
        return res;
    } 

    const _getCommentText = function(tweetkey) {
        let node = document.getElementById("textCommentBox_"+tweetkey);
        let res = node.value;
        node.value = "";
        return res;
    }

        return {
            startInit: _startInit,
            getTweetText: _getTweetText,
            getCommentText: _getCommentText
        }
}



