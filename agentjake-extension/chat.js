const chatWindow = document.getElementById("chatWindow");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function appendMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = "message" + (sender === "user" ? " user" : "");
  msg.textContent = text;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function handleSend() {
  const text = userInput.value.trim();
  if (text === "") return;
  appendMessage(text, "user");

  setTimeout(() => {
    appendMessage("Got your message: " + text, "bot");
  }, 500);

  userInput.value = "";
}

sendBtn.addEventListener("click", handleSend);
userInput.addEventListener("keydown", e => {
  if (e.key === "Enter") handleSend();
});