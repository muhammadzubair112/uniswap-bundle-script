# Deployment Configuration Guide

This README provides information about the `deployconfig.ts` file, which contains all the settings necessary for deploying and interacting with your smart contract.

## File: deployconfig.ts

The `deployconfig.ts` file contains various configuration settings for your project. Here's an overview of the settings and how to modify them:

### Settings

1. `key`: Your private key for contract deployment.

   - **IMPORTANT**: Keep this private and never share it publicly.

2. `univ2`: Uniswap V2 Router address

   - Current value: '0x86dcd3293C53Cf8EFd7303B57beb2a3F671dDE98'

3. `weth`: WETH token address

   - Current value: '0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9'

4. `rpc`: RPC provider URL

   - Current value: 'https://rpc.ankr.com/eth_sepolia'

5. `flashbot_relayer`: Flashbots relay endpoint

   - Current value: 'https://relay-sepolia.flashbots.net'

6. `code`: Bytecode for your smart contract

7. `liqEth`: Amount of ETH for liquidity

   - Current value: "0.001"

8. `chainId`: Chain ID for the target network

   - Current value: 11155111 (Sepolia testnet)

9. `liquidityToken`: Amount of tokens for liquidity

   - Current value: "400"

10. `contractabi`: ABI (Application Binary Interface) for your smart contract

### How to Modify

To modify these settings:

1. Open the `deployconfig.ts` file in your preferred code editor.
2. Locate the setting you want to change.
3. Replace the current value with your desired value.
4. Save the file after making your changes.

### Example:

```typescript
// To change the RPC provider:
export const rpc = "https://your-new-rpc-provider.com";

// To change the chain ID:
export const chainId = 1; // This would change it to Ethereum mainnet

export const key = ''; // Private key for contract deployment
export const univ2 = ''; // Uniswap V2 Router address
export const weth = ''; // WETH address

```

Now in the config.ts file put the pvt keys of account

Remember to be cautious when modifying these settings, especially the private key and addresses. Always double-check your changes to ensure they are correct before deployment.

# node-bundle-script

Commands to run the code

1. Install the dependency

```

npm i

// To install the ts node globally

npm install -g ts-node

```

2. Run the code

```
npx univ2.ts
```
