const chatWindow = document.getElementById("chatWindow");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function appendMessage(text, sender) {
  const msgWrapper = document.createElement("div");

  if (sender === "bot") {
    msgWrapper.className = "message-row bot-row";
    msgWrapper.innerHTML = `
      <div class="avatar-container">
        <img src="icon.png" class="bot-avatar" alt="Bot Avatar" />
      </div>
      <div class="bubble-container">
        <div class="bot-bubble">${text}</div>
      </div>
    `;
  } else {
    msgWrapper.className = "message user";
    msgWrapper.textContent = text;
  }

  chatWindow.appendChild(msgWrapper);
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