function talk() {
    var know = {
        "Hi" : "Hello, mini-bit here.",
        "How are you": "Good :)",
        "what is your name": " My name is Tuesday ",
        "what can you do": "For today I can just asnwer some questions" ,
        "What can I do for you": "Please help me stop working(",
        "ok": "Thank You So Much! <3",
        "Bye": "Ok, will see soon."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    } else
    { document.getElementById('chatLog').innerHTML = "Sorry, I didn't understand <br>";
    }
}