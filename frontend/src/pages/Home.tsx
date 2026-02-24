import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import PolicyForm from "../components/PolicyForm";

function Home() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>🌾 Solana Crop Insurance</h1>

      <div style={{ marginTop: "20px" }}>
        <WalletMultiButton />
      </div>

      <PolicyForm />
    </div>
  );
}

export default Home;