"use client";
import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import "../scss/Dashboard/AskAi.scss";
import { FaPaperPlane } from "react-icons/fa";

const AskAi = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isChatStarted, setIsChatStarted] = useState(false);

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    if (!isChatStarted) {
      setIsChatStarted(true);
    }

    const newMessage = {
      sender: "User",
      text: inputMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...messages, newMessage]);

    setTimeout(() => {
      const aiResponse = {
        sender: "AI",
        text: "I’m sorry you’re feeling this way. It could be stress, burnout, or mild depression. Have you been managing your workload and taking breaks?",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    }, 1000);

    setInputMessage("");
  };

  return (
    <DashboardLayout>
      <div className="ask-ai-container">
        <div className="chat-window">
          <div className="chat-header-ai">
            <img src="/images/ai-icon.png" alt="" />
            <p className="chat-title">AI Assist</p>
          </div>

          {!isChatStarted ? (
            <div className="chat-start">
              <div className="chat-start-header">
                <img src="/images/metalog-icon.png" alt="AI Logo" className="ai-logo" />
                <p className="chat-start-text">What do you want to talking about?</p>
              </div>
              <div className="chat-input-center-ai">
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button onClick={handleSendMessage}>
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          ) : (
            <div className="chat-active">
              <div className="chat-messages">
                {messages.map((msg, index) => (
                  <div key={index} className={`chat-bubble ${msg.sender === "User" ? "user" : "ai"}`}>
                    <p>{msg.text}</p>
                    <span className="chat-time">{msg.time}</span>
                  </div>
                ))}
              </div>

              {/* Input Chat di Bawah */}
              <div className="chat-input">
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button onClick={handleSendMessage}>
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="chat-history">
            <img src="/images/metalog logo sidebar.png" alt="Metalog Logo" />
            <div>
                <h3>Today</h3>
                <p>Feeling Stressed and Unmotivated</p>
                <p>Lorem ipsum dolor sit amet, consectetur...</p>
                <p>Vestibulum mollis nunc a molestie dictum.</p>

                <h3>Yesterday</h3>
                <p>Feeling Stressed and Unmotivated</p>
                <p>Lorem ipsum dolor sit amet, consectetur...</p>
                <p>Vestibulum mollis nunc a molestie dictum.</p>

                <h3>Previous 7 Days</h3>
                <p>Feeling Stressed and Unmotivated</p>
                <p>Lorem ipsum dolor sit amet, consectetur...</p>
                <p>Vestibulum mollis nunc a molestie dictum.</p>
            </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default AskAi;
