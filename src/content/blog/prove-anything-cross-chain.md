---
title: "Prove Anything. Cross-Chain"
description: "Introducing The Prove API - Revolutionizing Rollup Interop With Cross-Chain Proofs"
date: "2025-01-16T12:00:00.000Z"
author: "Devain Pal Bansal"
readTime: 6
featured: false
cover: "/assets/blog/prove-anything-cross-chain/Prove_Anything_Cover.png"
slug: "prove-anything-cross-chain"
---

I have a confession to make.

In my four years as an interoperability product manager, I did not spend enough time listening to users. 

We were too apathetic as interoperability builders. We laser-focused on optimizing our own creations, instead of adapting to the needs of our users.

Do we have anything to show for this? Nope, multi-chain apps are still struggling.

I decided things would be different when I joined Polymer one year ago. And with the upcoming release of Polymer’s Prove API, I'm proud to say that ***things are different***.

Nothing feels better than adoption. The feeling of making an impact. 

I firmly believe we are on the cusp of an interoperability revolution for rollups—moving away from rigid, archaic systems to one that emphasizes developer experience and flexibility.

‍

### **Multi-rollup Applications Are Struggling **

If your application is deployed to just 1-2 rollups, you can adjust with a cross-chain messaging protocol. But try doing the same across 100s of rollups, and current message passing solutions simply [fail to work](https://www.polymerlabs.org/blog/dont-send-messages-just-prove-state).

Take a cross-chain lending app as an example.The app deploys various instances on multiple rollups to tap into token yields, treating each rollup like a yield database. Part of their operations involve syncing all their contracts across chains to maintain the latest lending parameters.

Achieving this using traditional message-passing protocols presents significant challenges:

- Applications must modify their contract logic to fit the rigid structure of the messaging protocol.
- Each contract instance must be connected directly to others, increasing complexity and costs.
- Adding a new rollup means reconfiguring all existing instances, which can be both time-consuming and error-prone.
- - i.e. going from 6 to 7 rollups requires devs to manually connect all 6 rollups to the 7th one. This number increases exponentially as the number of rollups increase.

![](/assets/blog/prove-anything-cross-chain/Prove_Anything_G1.png)

Modern applications demand flexibility and openness—systems that eliminate interop challenges and empower developers to focus on innovation. 

*“ Imagine a world where interop challenges aren't just solved—they cease to exist entirely. “*

It’s time for a system that simplifies application development by replacing the manual effort and rigidity of today’s interop systems with a more intuitive, native approach. 

And this is what we’re building at Polymer.

‍

### **Understanding the Polymer Protocol**

The Polymer Protocol, at its core, is a **Proving Engine. **This is a paradigm shift from traditional interop, which relied on third party messaging protocols / off-chain elements to verify and transmit cross-chain messages manually. 

Instead, Polymer generates proofs for on-chain activity using Ethereum as settlement, and shares them between the rollups natively. Applications can simply verify any data or action with a proof – all in real-time, and in the most intuitive way possible.

Polymer enables this near-instantaneous interop with two key features:

**1. State Streaming**  
As a rollup itself, Polymer maintains a bird’s-eye view of all connected rollups by securely bundling rollups’ state data into its blocks. Polymer doesn’t store transactions one by one - instead, it securely stores information about the *entire* rollup and then share it across all connected rollups.

‍**2. Prove API**  
If state streaming is ‘public’ infrastructure for applications to share information across Ethereum rollups, the Prove API is the ‘private’ app-specific functionality that allows applications to orchestrate cross-chain action by proving it. Think of this as a way for developers to access that birds eye view created by Polymer, and request on-chain Merkle proofs to validate any action, such as an event or storage slot across rollups. 

Putting these two together, rollup interoperability becomes super simple and developer friendly:

1. Application contract emits an event on an origin chain. It uses the Prove API to generate a proof for the event.

2. The underlying state data of the proof is captured and state-streamed to the destination chain at ultra-low latency.

3. Developers call their execution function directly on other rollups, and submit the proof as call data to validate the external cross-chain event. 

That’s all it takes to interoperate! No messaging standards. No manual routing. No additional smart contracts. Just generate and validate cross-chain events directly with your smart contracts using Polymer. 

Our proof-based model offers the following advantages over traditional message passing protocols:

- **Ease of Use**  
Interop becomes a simple 3-step regime: emit event, request proof, validate action. Application contracts no longer need to do manual messaging or complex third-party integrations.

- **Extensibility**  
Developers get to use the same API and contract interactions across rollup clusters like Superchain, other OP stack rollups and Arbitrum rollups. Think Optimism’s superchain interop but for all Ethereum rollups.

- **Speed**  
Polymer reads and relays state information between rollups in 6 secs (on sequencer pre-confirmation path).  
Application can now interop in a matter of seconds, progressively getting faster as rollup blocktime reduces further.

- **Gas**  
Developers no longer have to build and integrate additional contracts and send additional transactions on source just to interop, which reduces both contract bloat and gas fees.

‍

### **Polymer In Action**

**(1) Chain Abstraction on Polymer**

[**Openfort**](https://www.openfort.xyz/)** i**s among the first teams leveraging the Prove API, Pierre their lead smart contract eng “Polymer feels like native infra”. Openfort combines resource locks and account abstraction (ERC4337). These enable users to lock funds into wallets on single or multi-chains and gain instant spendable balance across rollups. Prove API provides developers with execution proofs to validate user operations and facilitate repayments.

Check out my tweet below for more info:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Allow me to share the story behind this statement:<br><br>On my first call with Pierre, he told me he was new to interoperability and had never built cross-chain systems.<br><br>Fast forward two weeks, and he’d implemented the entire chain abstraction stack:<br>• ERC4337-compatible paymasters… <a href="https://t.co/4XuFhmaRwL">https://t.co/4XuFhmaRwL</a></p>&mdash; Mav 🛜 (@dpbmaverick98) <a href="https://twitter.com/dpbmaverick98/status/1877352210650341498?ref_src=twsrc%5Etfw">January 9, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

**(2) Intent Protocols on Polymer **

For intent protocols, money velocity is the biggest issue that can impact both solver returns and user fees by tackling settlement time and this is exactly what we are trying to solve. At the same time we are also preparing test apps with standards like ERC7683 and Tribunal to showcase the simplicity and speed of intent settlement.

The future of these systems lies in faster and cheaper settlements that improve money velocity and allow solvers to improve ROI while lowering user fees.

**(3) Multi-Rollup Applications on Polymer**

Applications that embrace the "fat app" thesis are leveraging rollups as servers for their operations. State sync test app exemplifies this innovation, showcasing contracts that synchronize key-value pairs across multiple chains in seconds. 

‍

### **Interop / Acc = App / Acc**

On-chain applications are finally in their hero arc. 

Testnets are filled with developers, adoption is growing - there’s never been a better time to build in this space.

App development is actively being redefined as applications are running instances across 10s, even 100s of rollups simultaneously. This evolution mirrors Web2’s cloud computing era, where rollups act as servers and apps layer on top—[often spanning across multiple rollups](https://bit.ly/4fiOsBW).

But Ethereum’s rollup-centric roadmap isn’t just about adding more rollups or app-specific rollups—it’s about helping applications scale and settle seamlessly across these customized blockspaces. 

Polymer’s  Prove API is the first tangible step towards making the above a reality. We’re putting developers first by reshaping rollup interoperability into a cross-chain proof system that is ultra fast and easy to integrate—can’t wait to share it with you all in the near future. 

Prove anything cross-chain, and interoperate across all rollups seamlessly.

Docs: [Developer Docs](https://docs.polymerlabs.org/docs/category/prove-api-1) | [Learn More](https://docs.polymerlabs.org/docs/learn/intro)

Socials: [X](https://x.com/Polymer_Labs) | [Discord](https://discord.gg/hvMQp4qcM6) | [YouTube](https://www.youtube.com/@PolymerDAO) | [LinkedIn](https://www.linkedin.com/company/polymer-labs)
