# Uniswap demo

This demo provides a minimal setup to get started with a swap interaction using the OKcontract permissionless SDK.

You are welcome to fork this repo to get started!

# Getting started

Install dependencies, build and run the app:

```sh
npm i
npm run build
npm run preview
```

# How it works

## Contract Interactions

You can create interactions on the [app.okcontract.com](https://app.okcontract.com) hub. Or you can use an existing interaction to start with.

The OKcontract Interactions Hub is a place where developers can easily view smart contracts ABIs, choose methods and set parameters of their interactions.

In this template, we are using Uniswap v3 router smart contract interaction to swap ETH to USDC on Sepolia testnet.

## InteractionID

The Uniswap V3 USDC swap `interactionID` is defined in main.tsx file:

```tsx
const interactionID = "AbX2IbtBDbgJdkAXucGu";
```

# Philosophy

The idea behind the OKcontract SDK is to operate a permissionless SDK that doesn't require an API key, making it much easier for developers to kickstart smart contract development.
