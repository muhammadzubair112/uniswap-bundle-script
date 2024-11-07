interface WalletConfig {
  privateKey: string;
  amount: string;
}

const walletConfigs: WalletConfig[] = [
  {
      privateKey: '',
      amount: '0.0001' // Amount in ETH or any other denomination you're working with
  },
  {
      privateKey: '',
      amount: '0.0002'
  },
  // Add more wallet configurations as needed
];

export default walletConfigs;
