import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

function PolicyForm() {
  const { connected, publicKey } = useWallet();

  const [location, setLocation] = useState("");
  const [threshold, setThreshold] = useState("");
  const [premium, setPremium] = useState("");
  const [payout, setPayout] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!connected || !publicKey) {
      alert("Please connect your wallet first.");
      return;
    }

    const policyData = {
      wallet: publicKey.toString(),
      location,
      rainfallThreshold: threshold,
      premium,
      payout,
    };

    console.log("Policy Created:", policyData);

    alert("Policy Submitted (currently frontend only)");

    // Reset form
    setLocation("");
    setThreshold("");
    setPremium("");
    setPayout("");
  };

  // Show message if wallet not connected
  if (!connected) {
    return (
      <div style={{ marginTop: "20px" }}>
        <p>Please connect your wallet to create an insurance policy.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <div style={{ marginBottom: "10px" }}>
        <label>Farmer Wallet:</label>
        <br />
        <input
          type="text"
          value={publicKey?.toString()}
          disabled
          style={{ width: "400px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Location:</label>
        <br />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Example: Meerut"
          required
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Rainfall Threshold (mm):</label>
        <br />
        <input
          type="number"
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
          placeholder="Example: 100"
          required
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Premium (SOL):</label>
        <br />
        <input
          type="number"
          value={premium}
          onChange={(e) => setPremium(e.target.value)}
          placeholder="Example: 1"
          required
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Payout Amount (SOL):</label>
        <br />
        <input
          type="number"
          value={payout}
          onChange={(e) => setPayout(e.target.value)}
          placeholder="Example: 5"
          required
        />
      </div>

      <button type="submit">
        Create Insurance Policy
      </button>
    </form>
  );
}

export default PolicyForm;