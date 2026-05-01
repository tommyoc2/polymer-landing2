---
title: "Informal Systems Hosts Polymer Labs and Cosmos Dev Teams"
description: "Polymer Labs joins Informal Systems and Cosmos dev teams to discuss latest updates to architecture."
date: "2024-02-20T12:00:00.000Z"
author: "Polymer Labs"
readTime: 9
featured: false
cover: "/assets/blog/informal-systems-hosts-polymer-labs-and-cosmos-dev-teams/Infosys_Cover.webp"
slug: "informal-systems-hosts-polymer-labs-and-cosmos-dev-teams"
---

Polymer co-founders Bo Du and Peter Kim recently participated in a X Spaces hosted by [Informal Systems](https://informal.systems/), a leading research organization in Cosmos. The conversation dove deep into why Polymer chose to make critical changes to its architecture, notably shifting from being a sovereign Cosmos chain to becoming an Ethereum Layer 2. 

For those of you who missed the conversation entirely or want a refresher, we’ve synthesized the content of the Spaces for you into a blog that touches on our architecture design choices and IBC more generally. We hope you enjoy the read.

**Why Did Polymer switch from a Cosmos Appchain to an Ethereum L2?**‍

One of the goals with Polymer is to solve the distribution problem for IBC as a technology. The issue that we saw there is that native IBC integrations take quite a lot of time. Initially, we were solving this as a sovereign app chain.

As we saw the rollup thesis play out with lots of rollups emerging across multiple ecosystems, especially Ethereum. Having a sovereign app chain that acts as a distribution mechanism for IBC tech didn't make a lot of sense for roll-up to roll-up communication. When you're going from roll-up to roll-up, there's an interaction between the rollup itself and the settlement layer that it lives on.

‍The native bridge of these roll-ups inherits the trust minimized properties of the roll-up / settlement layer for cross-rollup communication. If you add another third-party validator set in the middle, it breaks those properties. The sovereign hub and spoke model doesn’t work for rollups the same way it does for connecting sovereign L1s. We wanted to create a solution that also inherits security from the same source as the roll-ups themselves. The approach that we landed on was to build Polymer as an L2.

**How far along was Polymer into building the Cosmos chain before the decision to change architecture?**  

We were almost done. When we had the insight to rebuild or package what we had built as an L2, we realized that we wouldn't necessarily need to change any of the application code. We could keep the Cosmos SDK application code as we had written it.

**What’s the new stack and how do all the pieces interact with each other?**

**‍**The new stack is a combination of the Cosmos SDK as the application or execution layer, and the OP stack for settlement and chain derivation logic from the L1.

With respect to how the Cosmos SDK and OP stack communicate, OP Stack has an API called the Engine API. It's the same API that separates the Ethereum consensus layer from the execution layer or ETH1.0 / ETH 2.0 as we know it. The OP Stack repurposed this Engine API for separating OP Geth and the rest of the OP stack infrastructure. Ethereum’s Engine API and the ABCI in the Cosmos SDK serve the same purpose. Our idea was to take the Engine API and make it ABCI compatible. This creates an Engine API wrapper around the ABCI application we had written. This supports Cosmos SDK applications as the execution engine on top of OP stack, instead of OP Geth.

**Was there any limitation from the Cosmos SDK side that you noticed that are now gone because of the new way you work with the OP Stack? Would it be possible to achieve the same goals while having a pure Cosmos SDK roll-up that also inherits Ethereum security properties using rollkit for instance?**

The issue with RollKit is it's built for sovereign rollups, meaning that there's no chain derivation logic in there to allow settlement to Ethereum. If you look in the OP stack, a good chunk of the logic is deriving the chain from the L1 plus posting of the batch data to the L1 and the handling of reorgs. 

**How far behind do you think the OP stack is compared to the SDK now that you have experience with both?**

The Optimism team has spent the last few years solving the settlement problem. This means they haven't spent as much time on app chain or rollup customizability or interoperability. 

‍Most roll-up frameworks on Ethereum allow developers to deploy  EVM layer 2s or 3s. You can deploy a rollup easily and maybe with a partner with a roll-up as a service (RaaS) provider, but what you're deploying is essentially an instance of Geth or some EVM compatible thing, ZK or otherwise. They’re not really frameworks for writing application specific rollups.

‍**There's Polygon with their CDK and ZK frameworks, Arbitrum and Scroll with their own solutions. Did you guys go through all of them and assess that the OP Stack was the best option for you? **

‍The OP stack was the easiest to customize for our use case and swap out the execution engine for a Cosmos SDK application. What Polymer has done is taken the rollup side of the OP stack and put the Cosmos SDK on top. This effectively merges the technology of both ecosystems allowing for experimentation. 

‍You can plug in different sequencers, and so on. The OP stack is also modular enough to do the same thing in the opposite direction, so it’s possible to take the sequencer and the roll-up parts and place any execution environment on top of that. 

‍**Is it true that OP Stack doesn’t have fraud proofs?**

‍They do not have fraud proofs running live in production today, but there are a number of teams working on the provability of their stack. The Optimism team has their fraud proof system [running in testnet](https://cointelegraph.com/news/optimism-network-launches-testnet-fault-proof-system-pursuit-decentralization). RiscZero is working on the validity proofs for both the roll-up side and the execution side. So combined with the work that is being done to make the Cosmos SDK provable, we think the work across all these different teams can come together to make a fully provable end-to-end of OP and Cosmos SDK.

‍**Wasn’t it a concern that they don’t have workable fraud proof at the moment?**

‍It wouldn't be entirely relevant for Polymer because proving the execution side for GETH is not the same as proving the execution side for the Cosmos SDK. That would have been work that we would have to do anyways.

‍**All the sequencers are centralized. Was that something that you guys took into account?**

‍The sequencer centralization problem doesn't affect the safety of the rollup depending on the rollup construction and how their settlement contracts are designed.  It affects the liveness and censorship resistance of the rollup.

‍There’s a spectrum of censorship resistance and liveness. Based rollups are the most censorship resistant and have the strongest liveness guarantees. The next best thing to using Ethereum as a sequencer would be to have a separate and lighter chain act as a decentralized sequencer. Using CometBFT for instance as a sequencer could make a lot of sense within this stack for Polymer's new architecture, the combination of the OP and the Cosmos SDK stack. 

‍We published a blog post a few weeks back on [virtual blockchain design](https://www.polymerlabs.org/blog/exploring-virtual-blockchain-design). We include a section where you can compare or you can combine an execution layer like Cosmos SDK with multiple kinds of these ABCI servers. You have OP stack being an ABCI server. You have Comet BFT as an ABCI server, and now you're wondering why you would have two ABCI servers? Well, one can handle the chain derivation and settlement logic. The other ABCI server can handle sequencing. Also, you don't necessarily need each of these CometBFT sequencers to be bootstrapped. You could use interchain security from the Cosmos hub to secure these sequencers for these Cosmos SDK / OP stack roll-ups on Ethereum.

‍**How did your switch from a sovereign chain to L2 change your mission to connect everyone via IBC?**

‍We see Ethereum in a similar fashion to the Cosmos Hub. Both Ethereum and the Cosmos Hub have practiced some level of protocol minimalism. Ethereum rarely enshrines things. Instead, it has relied on a roll-up-centric roadmap operated by many different teams that are building these roll-ups.

‍We wanted to add IBC to Ethereum because of protocol minimalism on the Ethereum side, and the best way to do it would be to add it as a layer 2. There are also cross rollup UX factors that come into play that favor an L2 hub spoke model over a sovereign one.

‍**How does a rollup connect to Polymer?**

‍Our internal protocol called Virtual IBC allows for permissionless IBC connectivity which wasn't possible before. The idea is that instead of needing to do a native integration of IBC, you can deploy a set of smart contracts, and instead have Polymer act as an IBC sidecar performing IBC execution on behalf of the connected rollup, making the roll-up appear as any normal IBC chain in the network itself.

‍**What does that mean for all of the IBC core components? What does that mean for relayers? What does that mean for my clients?**

‍We are reusing ibc-go which is the reference implementation for IBC that the IBC core team owns.

‍From Polymer to a regular Cosmos chain, as long as they generate the same events, have the same RPC endpoints, you'd be able to use Hermes. But between Polymer and these connected roll-ups that are connected virtually in a sense, those would have a relayer that we've worked on. In terms of the light client for verification of the state transitions of all these different chains, it would be dependent on who is talking to who.

‍If you were to go from roll-up to roll-up, the verification mechanism can default to using Ethereum itself for verification. Instead of having Polymer verify consensus, both Polymer and all of these rollups are deriving their blocks from Ethereum blocks.

‍And since Polymer produces interoperability or IBC state and settles onto Ethereum, you now have IBC compliant state embedded in Ethereum state. You can then unwrap Ethereum state to determine the interoperability state of all connected roll-ups where Ethereum acts like a unified settlement layer / verification layer.

‍**If all of these roll-ups start using a similar model where they combine the SDK and the OP stack and they have native IBC, what does that mean for Polymer from a business perspective where you wouldn't be able to be a middleman there that takes a commission or a transaction fee?**

‍We designed Polymer with the end state in mind, meaning that we are already designing for the state where IBC is ubiquitous.  Hypothetically, let's say every single rollup on Ethereum is a Cosmos SDK rollup and they all have IBC native already. We designed Polymer to be the most efficient middle hop possible, and we're making optimizations to support that.

‍For instance, if you have two rollups that have a lot of economic value and high interaction between two of them, they might want to connect directly, but direct connectivity comes at a cost to the system as a whole. If you look at the network topology of the internet, it's not like every node in the internet is directly connected to every node. You have a network of routing infrastructure to distribute the load, and optimize the overall network topology.

‍In the longrun, Polymer Labs is a network topology optimization solution. We're not planning on deploying only one single instance. Polymer will form an IBC mesh where multiple instances of Polymer on different domains optimizes the network topology of the entire industry

‍We currently have a deployment on Ethereum using the OP stack, but we could potentially have a deployment over Celestia using Rollkit. We would consider deploying to some of these other alternative settlement layers as these ecosystems evolve and grow.

‍**Get Started with Polymer**

‍As we accelerate towards our public testnet we invite you to visit our [docs page](https://docs.polymerlabs.org/) to get started with Polymer. If you have questions or would like to learn more about Polymer, please join our [Forum](https://discord.com/channels/839903468750635039/1197318071703048324/1197323406220206200) and [Discord](https://discord.gg/hvMQp4qcM6).
