# 🧠 **Metalog - Blockchain-Based Mental Health Platform**  

![Metalog Banner](./public/images/banner.png) 

**Metalog** is a decentralized mental health platform that prioritizes **security and anonymity** using **Internet Computer Protocol (ICP)**. This application provides professional psychologist consultations, an AI assistant, and a mental health community within a **secure and trusted ecosystem**.  

---

## 🚀 **Key Features**  
- **🩺 Professional Consultation** – Private sessions with certified psychologists, ensuring user comfort and anonymity.  

- **🤖 AI Mental Health Assistant** – AI-powered chatbot providing mental health recommendations and analyze psychologist consultations.  

- **🔒 Security & Privacy** – User data is secured using **blockchain technology** and **ICP-based encryption**, ensuring confidentiality.  

- **💰 ICP Token Payments** – Seamless transactions using **ICP tokens**, providing fast, efficient, and transparent payments.  

- **💬 Supportive Community** – An interactive forum for users to share experiences, provide support, and discuss mental health in an **anonymous** environment.  

---

## 🔧 **Installation & Deployment**  
Metalog uses **dfx (Dfinity SDK), Node.js, and Vite** for deployment.  

### **1️⃣ Install Dependencies**  
```sh
# Install Dfinity SDK (dfx)
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"

# Check dfx version
dfx --version

# Clone repository & install dependencies
git clone https://github.com/your-repo/metalog.git

cd metalog

npm install
```

---

### **2️⃣ Configure Environment Variables**
Ensure the .env file is set up in metalog_frontend/.env:
```sh
VITE_BACKEND_CANISTER_ID=<CANISTER_ID_METALOG_BACKEND>
VITE_FRONTEND_CANISTER_ID=<CANISTER_ID_METALOG_FRONTEND>
VITE_AUTH_PROVIDER=https://identity.ic0.app
```
🔹  Replace **<CANISTER_ID_METALOG_BACKEND>** and **<CANISTER_ID_METALOG_FRONTEND>** with the actual canister IDs after running dfx deploy.

---

### **3️⃣ Run on Local Network**
```sh
dfx start --background

rm -rf .dfx node_modules .vite

dfx deploy --network local

npm run dev

```

🔗 Access the application:
- 👉 Frontend: http://localhost:5173/?canisterId=<CANISTER_ID_METALOG_FRONTEND>
- 👉 Backend Candid UI: http://127.0.0.1:4943/?canisterId=<CANISTER_ID_METALOG_BACKEND>

### **4️⃣ Deploy to ICP Mainnet**
To deploy to the ICP main network:
```sh
dfx deploy --network ic
```
🔹 Once complete, use the new canister ID for the .env before restarting the application.

---

## **💡 ICP Integration in Metalog**

Metalog uses Internet Computer Protocol (ICP) to support application security, privacy, and scalability. Here are some key aspects of ICP integration in Metalog:

**✅ 1. Identity & Authentication**

- Users log in via Internet Identity (II) at identity.ic0.app.

- Each user is assigned a Principal ID, ensuring decentralized and secure authentication without email or passwords.

**✅ 2. Smart Contract (Canister) for Backend**

- metalog_backend acts as a smart contract (canister) on the ICP blockchain.

- Stores all user data, transactions, and logic in the backend canister.

- No centralized servers, all data is managed within ICP's blockchain ecosystem.

**✅ 3. Security & Decentralization**

- No centralized database → User data is stored in decentralized canisters.

- Enhanced privacy → Only users have full control over their data.

- No third-party access → No company can access or control user data.

- Uses ICP Stable Memory to ensure persistent and secure data storage.

**✅ 4. ICP Token Payments**

- Consultation sessions are paid using ICP Tokens, directly integrated into Metalog.

- ICP Wallets are supported for seamless transactions.

- No credit cards required, transactions are executed via ICP’s blockchain, ensuring transparency and speed.

---

## **🛠 Technology Stack**
Metalog was built using Web3 and ICP technology to create fast, secure and efficient applications.

**Backend & Blockchain:**

- Motoko → Smart contract programming language for ICP.

- ICP Canister → Used for decentralized backend services.

- DFX SDK → Canister management and deployment tool.

- Candid UI → Used for backend canister testing.

**Frontend & UI:**

- React.js + Vite → Fast and optimized frontend development.

- TailwindCSS / SCSS → Styling framework for modern UI.

- React Router → Navigation system for seamless page transitions.

- SweetAlert2 → User-friendly alert dialogs.

**Autentikasi & Keamanan:**

- Internet Identity (II) → Secure authentication using Web3 identity.

- @dfinity/auth-client → Authentication library for ICP.

- ICP Principal ID → Unique decentralized user identity.

**Penyimpanan & Database:**

- Stable Memory (ICP) → Stores data persistently on the ICP blockchain.

- ICP Web3 Storage → Blockchain-based file storage and transactions.

**Pembayaran & Wallet Web3:**

- ICP Tokens → Used for in-app transactions.

- Plug Wallet → Web3 wallet compatible with ICP.

---

## 📂 **Project Structure**
```bash
metalog/
│── src/
│   ├── metalog_backend/    # Smart contract (Motoko)
│   ├── metalog_frontend/   # Frontend (React + Vite)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── utils/
│   │   │   ├── context/
│   │   │   ├── scss/
│   │   │   ├── App.jsx
│   │   │   ├── main.jsx
│   │   ├── .env
│   ├── declarations/       # Auto-generated canister bindings
│── .dfx/                   # DFX build cache
│── package.json
│── dfx.json                # ICP Canister Configuration
│── vite.config.js          # Vite Configuration
│── README.md
```

## 📜 **Lisensi - MIT License**
MIT License

*This project is licensed under the MIT License. You can modify, use and distribute according to your needs.*

![Copyright (c) 2025 Metalog](https://mit-license.org/)
