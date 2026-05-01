---
title: "Introducing the Polymer Hub: A Rollup built for Interoperability"
description: "Polymer Hub enables rollups to network via IBC, providing an interop solution that can scale."
date: "2024-07-03T12:00:00.000Z"
author: "Polymer Labs"
readTime: 5
featured: false
cover: "/assets/blog/introducing-the-polymer-hub-a-rollup-built-for-interoperability/Introducing_Polymer_Hub_Cover-1.webp"
slug: "introducing-the-polymer-hub-a-rollup-built-for-interoperability"
---

*Polymer Hub is the first Rollup built for interoperability.‍*

*Rollups help Ethereum scale, dramatically lowering execution costs and taking load away from the L1. Not without flaws,  today’s rollups face a critical problem - bootstrapping connectivity. *

*A juxtaposition to rollups are AppChains. In the Cosmos ecosystem, appchains face a security bootstrapping challenge rather than a connectivity challenge. Cosmos solved connectivity issues with the Inter-Blockchain Communication (IBC) protocol.*

*Now imagine the best of the Cosmos tech meeting the best of Ethereum.**** IBC across Ethereum rollups, brought to you by a specialized rollup purpose built for interop.***

### **The Rollup Problem**

![blog-polymerhub-image1](/assets/blog/introducing-the-polymer-hub-a-rollup-built-for-interoperability/rollups.png)

Today there’s 50+ rollups live in production - launching a rollup is easier than launching your own memecoin. Rewind to 2020, when Ethereum laid out its vision for a [rollup centric roadmap](https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698), it took the space 2 years to reach 4 rollups. 

‍Only a handful, [around 20%](https://l2beat.com/scaling/summary), of rollups today are well connected. Existing interop solutions are not in the position to scale, partly due to their infrastructure overheads.  

*‍Present interop solutions can charge up to $1m to add a new chain because of their infrastructure overheads. This is the bootstrapping problem for the interconnected world.*

Polymer Hub: solving the rollup scalability problem.

**‍**

![blog-polymerhub-2](/assets/blog/introducing-the-polymer-hub-a-rollup-built-for-interoperability/blog-rollup-2.png)

### **Polymer Hub: A Rollup Built For Interop**

Ethereum is the global source of truth for all rollups. Rollups move the execution environment off-chain and settle back to Ethereum, retaining decentralization while keeping both environments in sync. 

The Polymer Hub, being a rollup, has direct access to any information present on Ethereum (technically the native bridge which acts as the L1 light client). Since Polymer Hub has access to all of this rollup state, it can validate any request sent between them.

![blog-polymerhub-image3](/assets/blog/introducing-the-polymer-hub-a-rollup-built-for-interoperability/blog-rollup-3.png)

**All rollups settle on Ethereum, since Polymer is also a rollup, it has access to the rollup state, allowing validation of any request sent between them. **This is in contrast to existing interop protocols that connect fragmented rollup environments with off-chain infrastructure and verification schemes. 

**‍Example of how this works with a tx sent from Optimism to Base:**

![blog-polymerhub-image5](/assets/blog/introducing-the-polymer-hub-a-rollup-built-for-interoperability/blog-rollup-5.png)

1. Tx originates on Optimism
2. Its data and state update gets sent to Ethereum, via Optimism’s native bridge
3. Polymer reads this submitted state and updates its view of Optimism  
a. this is possible by Polymer accessing/creating a client for Optimism (or any rollup)
4. Polymer’s latest state is submitted to Ethereum (it is also a rollup after all)
5. This state is used to update the view of Polymer on Base
6. Meanwhile the relayer takes the tx data from Optimism and submits it on Base, it is verified against the state of Polymer (which contains the state of Optimism and all other rollups maintained on the Hub) and then executed.  
‍

***The Polymer Hub does not directly pass messages**** or information to communicate between chains but only deals with the state of various execution environments. This allows an open market of relayers, who can actually service a 1000+ chains VS Polymer maintaining all the infra. *  

‍**Why can’t other interop protocols do this?‍**

- **Not a rollup:** Standard interop protocols do not share a global source of truth (Ethereum) with other rollups, causing them to primarily rely on off-chain infrastructure and third party security sources. There is no concept of state or settlement for these systems. They are inherently an additional trust assumption.
- **Cosmos SDK x OP Stack:** Polymer Hub is not simply a standard OP Stack chain. It merges the Cosmos SDK and OP Stack, bringing the best of Cosmos and Ethereum together, to create a protocol that allows the app state of the rollup to be tailored for interop.
- **Inter-Blockchain Communication (IBC):** IBC is the closest standard to TCP/IP.  With Polymer, you can now use IBC between Ethereum rollups and take advantage of the battle-tested standard that has over 120 developers actively contributing.  
‍

### **Features of Polymer Hub**

- **‍Anyone will be able to create a rollup client:** As new rollups emerge, teams can simply instantiate a client for new chains.
- **One rollup, one client:** Once a rollup state exists on Polymer, the entire network is enabled, unlike point to point connections.‍

y → number of P2P connections required to service all chains  
x → number of rollups

![blog-polymerhub-image4](/assets/blog/introducing-the-polymer-hub-a-rollup-built-for-interoperability/blog-rollup-4.png)

  
green = connections with Polymer hub (y = x)   
orange = connections with point to point systems (y = x*(x-1))

- **One update for all transactions:** Transactions are not proved one to one, Polymer Hub validates against the complete “chain view” [blocks], lowering the cost of transactions as the system scales.  
‍

y → cost of sending one message  
x → number of transactions on a given rollup

![blog-polymerhub-image6](/assets/blog/introducing-the-polymer-hub-a-rollup-built-for-interoperability/blog-rollup-6.png)

  
green = connections with point to point systems (y = x)  
red = connections with Polymer Hub (y = 1/x)

- **All transactions, all rollups, aggregated into one state:** Polymer Hub acts as the aggregated state of all transactions. This singular state is then used to validate transactions on destination rollups, enabling exponential scale.  
‍

### **Who Benefits?**

The Polymer Hub benefits many actors in the ecosystem such as:

- **L2’s:** Permissionless IBC interop, without any vendor lock-in. Onboard both developers and users from any ecosystem supported by Polymer Hub.
- **RaaS Providers:** Offer interconnected rollup clusters. Provide your customers with interop services upon go-live without any additional infrastructure requirements.
- **Relayers:** Polymer Hub is built with the vision to have an open market of relayers and anyone will be able to service traffic between rollups and earn fees.
- **Validation service providers:** Lagrange, Witnesschain, and similar services can be integrated with the Polymer Hub, to provide developers with different verification schemes that can optimize their use-case.
- **User Interfaces/Abstraction/Intent Protocols:** Each interop protocol introduces a new standard to build, causing more fragmentation since they are not composable with one another. Polymer Hub brings a robust standard, IBC.

### **Stay Connected**

We’re exploring several features for application developers, including rate limiting for specific application routes and implementing firewall concepts to manage transactions from outside the app cluster. Additionally, we’re considering app-specific settlement options. We are actively scoping and exploring various use cases with different teams in the space. If you have an innovative idea, please reach out to us!

We are excited to share more details as we roll out new features. Keep up to date by following us on [Twitter.](https://twitter.com/polymer_labs)
