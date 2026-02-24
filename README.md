# 🌾 Solana Insurance

A decentralized parametric crop insurance system built on Solana using Anchor. Farmers receive automatic payouts when rainfall exceeds predefined thresholds.

---

# 📁 Project Structure

```
solana-insurance/
│
├── frontend/                # React + TypeScript frontend
│   ├── src/
│   │   ├── components/     # UI components (PolicyForm, etc.)
│   │   ├── pages/          # Pages (Home, Dashboard)
│   │   ├── services/       # Solana connection logic
│   │   ├── types/          # TypeScript interfaces
│   │   └── main.tsx
│   └── package.json
│
├── programs/
│   └── solana-insurance/   # Anchor smart contract
│       ├── programs/
│       │   └── solana_insurance/
│       │       └── src/lib.rs   # Main smart contract
│       ├── tests/               # Anchor tests
│       ├── Anchor.toml
│       └── Cargo.toml
│
├── backend/                # Backend (Oracle + DB integration) [WIP]
│
├── database/               # Database schema and migrations
│
├── docs/                   # Documentation
│
├── .gitignore
└── README.md
```

---

# ⚙️ Prerequisites

Install these first:

## 1. Install Node.js (v18+)

https://nodejs.org

Check:

```
node -v
npm -v
```

---

## 2. Install Rust

```
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

Check:

```
rustc --version
```

---

## 3. Install Solana CLI

```
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
```

Restart terminal, then check:

```
solana --version
```

Set devnet:

```
solana config set --url devnet
```

---

## 4. Install Anchor

```
cargo install --git https://github.com/coral-xyz/anchor anchor-cli --locked
```

Check:

```
anchor --version
```

---

# 🚀 How to Clone and Run Project

## Step 1 — Clone repository

```
git clone https://github.com/YOUR_USERNAME/solana-insurance.git
cd solana-insurance
```

---

## Step 2 — Run Frontend

```
cd frontend
npm install
npm run dev
```

Open browser:

```
http://localhost:5173
```

Connect Phantom wallet.

---

## Step 3 — Build Anchor Program

From root folder:

```
cd programs/solana-insurance
anchor build
```

---

## Step 4 — Run Local Validator (optional)

```
solana-test-validator
```

In another terminal:

```
anchor deploy
```

---

# 🌐 Network

Currently configured for:

```
Solana Devnet
```

---

# 👨‍💻 How to Contribute

## 1. Fork repository

Click Fork on GitHub.

---

## 2. Clone your fork

```
git clone https://github.com/YOUR_USERNAME/solana-insurance.git
```

---

## 3. Create new branch

```
git checkout -b feature-name
```

---

## 4. Commit changes

```
git commit -m "Added new feature"
```

---

## 5. Push changes

```
git push origin feature-name
```

Create Pull Request on GitHub.

---

# 🔮 Planned Features

* Smart contract insurance logic
* Automatic rainfall oracle integration
* Database integration
* Farmer dashboard
* Policy NFTs

---

# 🧠 Tech Stack

* Solana
* Anchor
* Rust
* React
* TypeScript
* Node.js
* PostgreSQL

---

# 📜 License

MIT License
