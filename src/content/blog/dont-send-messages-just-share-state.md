---
title: "Don't Send Messages. Just Share State"
description: "It's time to leave messaging protocols on read to solve interoperability once and for all."
date: "2025-01-07T12:00:00.000Z"
author: "Tommy O'Connell"
readTime: 4
featured: false
cover: "/assets/blog/dont-send-messages-just-share-state/Dont_Send_Messages_Cover.png"
slug: "dont-send-messages-just-share-state"
---

Multi-chain apps are most commonly found in the Ethereum ecosystem. These are often deployed across different EVM rollups. And this was the status quo for the longest time – multi-chain apps where each app is deployed separately on each rollup.

But times are changing. A new paradigm shift is underway. Going multi-chain no longer means deploying your app on different rollups. The modern multi-chain app is a single application, served by its own network of dedicated rollups. As Andrew Huang put it,

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Most think that under the rollup-centric roadmap, apps will go multichain, as in deploy on Eth mainnet plus many rollups<br><br>But actually, the inverse is true<br><br>The real multichain is each app being served by its own network of dedicated appchains. Think of it as Multi-appchain</p>&mdash; Andrew Huang ⚡️⛓️ (@KAndrewHuang) <a href="https://twitter.com/KAndrewHuang/status/1856830977592422443?ref_src=twsrc%5Etfw">November 13, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### **Successful Applications Will Outgrow Their Chain**

We are moving to a future where applications – not chains – become the center of gravity, attracting attention, users, and liquidity. This makes it necessary for applications to not just be on 1-2 rollups, but instead, 100s of multiple rollups, if to scale for mass adoption. Unichain and Hyperliquid are just the beginning.

Binance processes millions of transactions per second. Most rollups can barely do a hundred. If we want to build apps that compete with web2 or CEXes, dApps need to scale as efficiently as their centralized counterparts do. Apps can’t afford to be on a single rollup. Or two. They need 1000s of rollups. [This is the scale that the web3 world is heading towards](https://www.polymerlabs.org/blog/connecting-infinity-real-time-interoperability-is-just-the-beginning).

To make this possible, interoperability protocols must enable rollups to communicate in split seconds and provide app builders with as much creative freedom as possible. Neither of these things are true today. **The fastest cross-chain messaging protocol takes at least 30 seconds to send a message between rollups (usually 2+ minutes) while forcing developers to conform to rigid standards and interfaces.**

‍

### **Cross-chain Messaging Is Not For Rollups**

Back when we only had L1 chains, interoperability was hard to implement. Most L1s had radically different programming languages and consensus mechanisms  (e.g. Bitcoin vs Ethereum vs Solana). Instead of trying to reconcile all of them, the 1st generation interoperability protocols standardized how these chains communicated, and built middleware (bridges and relayers) to enable the passage and verification of messages via simple call functions. Thus, cross-chain message passing was created to bridge the gap between L1s.

However, message passing greatly limits the scope of interop – we can only send small message packets – but using it is justified since it is THE ONLY way we could enable cheap interop between two L1s. This is especially true for token swaps, which accounts for the vast majority of cross-chain transactions. It is also restrictive and laborious for developers, who are forced to constantly modify and update their smart contracts to interoperate.

Rollups are different. **Plugging an interoperability solution built for L1s bottlenecks the L2s**. This is the main reason behind interop performance and usability issues with rollup applications. It also completely disregards the ONE thing rollups have in common with each other — ***Ethereum.***

‍

### **Unifying All of Ethereum into One**

Unlike L1s, Ethereum rollups share many similarities. So technically, something that’s readable on one chain can also be readable on another chain (in a similar format). All we have to do is make the information available.

This was our eureka moment at Polymer:** *****Instead of sending messages, what if we prove state?***

Instead of manually messaging rollup information when a transaction is initiated, what if we could provide a live feed of all rollups? Applications can use this feed to *see* and verify what the state of other rollups are, at any given time.

We can leverage the shared connections between rollups and Ethereum to fetch, batch, and share the latest states of all rollups to each other. Under this model, applications no longer need to send and verify individual messages with off-chain middlemen  — they can just prove any information or action with the most updated rollup state at any and all times. This would also make cross-rollup communication more gas-efficient and significantly reduce latency.

These realizations gave birth to today’s Polymer — an open scalable interoperability network that unites all Ethereum rollups using native merkle proof systems regardless of framework and confirmation scheme, so applications can build and grow freely.

‍

### **Proving State VS Cross-chain Messaging**

State proofs offer several noteworthy improvements over cross-chain messaging for rollup interoperability, most notably in performance and developer experience.

Listed below are a few benefits that Polymer’s early partners currently enjoy:

![](/assets/blog/dont-send-messages-just-share-state/Dont_Send_Messages._Just_Share_State.png)

### **Crypto/acc = Interop/acc**

The proliferation of rollups transformed demand for interoperability on Ethereum. It’s time interoperability technology changed too.

Polymer is on a mission to make cross-rollup interoperability fast and easy. Interoperability is the key to creating internet scale on-chain applications, and these applications cannot afford to use the interoperability protocols of yesterday. If you’re interested in working with us, [send me a DM on X](https://x.com/tommyoc0).

Prove any action, cross-chain. Let’s make Ethereum apps great again. 

Docs: [Developer Docs](https://docs.polymerlabs.org/docs/category/prove-api-1) | [Learn More](https://docs.polymerlabs.org/docs/learn/intro)

Socials: [X](https://x.com/Polymer_Labs) | [Discord](https://discord.gg/hvMQp4qcM6) | [YouTube](https://www.youtube.com/@PolymerDAO) | [LinkedIn](https://www.linkedin.com/company/polymer-labs)
