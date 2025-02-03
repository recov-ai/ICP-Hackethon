"use client";
import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import "../scss/Dashboard/ChatPerson.scss";
import { FaPaperPlane } from "react-icons/fa";
import { RiTimerFill } from "react-icons/ri";

const ChatPerson = () => {
  const [messages, setMessages] = useState([
    {
      sender: "Receiver",
      text: "Hello! How are you feeling today?",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isChatStarted, setIsChatStarted] = useState(false);

  // Daftar dummy balasan dari lawan chat
  const responses = [
    "That sounds interesting!",
    "I see. Can you tell me more about it?",
    "How does that make you feel?",
    "Let's talk more about this.",
    "I understand. What do you think about that?",
  ];

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
    setInputMessage("");

    // Tambahkan delay sebelum lawan chat membalas
    setTimeout(() => {
      handleReceiveMessage();
    }, 1500);
  };

  // Fungsi untuk menangani balasan otomatis
  const handleReceiveMessage = () => {
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    const responseMessage = {
      sender: "Receiver",
      text: randomResponse,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prevMessages) => [...prevMessages, responseMessage]);
  };

  return (
    <DashboardLayout>
      <div className="chat-container">
        <div className="chat-person-window">
          <div className="chat-header">
            <div className="header-start">
              <img src="/images/profile1.png" alt="User Icon" />
              <div className="info-chat-user">
                <p className="chat-title-person">John Doe</p>
                <p className="chat-time-person"><RiTimerFill color="#3CB9DB" className="icon-time"/>30 Min Left</p>
              </div>
            </div>
            <button className="end-session-btn">End Session</button>
          </div>

          <div className="chat-content">
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`chat-bubble ${msg.sender === "User" ? "user" : "receiver"}`}>
                  <p>{msg.text}</p>
                  <span className="chat-time">{msg.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ChatPerson;
