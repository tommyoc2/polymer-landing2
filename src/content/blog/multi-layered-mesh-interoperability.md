---
title: "Multi-Layered Mesh Interoperability"
description: "Polymer's Devain Pal Bansal explores how frameworks like Polymer support scalable, multi-layered mesh interoperability."
date: "2024-02-27T12:00:00.000Z"
author: "Polymer Labs"
readTime: 4
featured: false
cover: "/assets/blog/multi-layered-mesh-interoperability/MLMesh_Cover.webp"
slug: "multi-layered-mesh-interoperability"
---

The interoperability landscape has always been fascinated with drawing parallels to and striving to become the TCP/IP of the new internet era.

Now that launching an L3 is easier than launching a memecoin (kudos to teams like Conduit) - it has become evident that we need a new mental model to think about interop as we enter the dotcom boom for L3s.

![](/assets/blog/multi-layered-mesh-interoperability/deploy_a_rollup.png)

### **L3s the dotcom Moment for Internet Adoption**

Rewind to 2020, when Ethereum laid out its vision for a[ rollup centric roadmap](https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698), it took the space 4 years to reach about 50 rollups (L2s) live in production. And now…

`<blockquote class="twitter-tweet"><p lang="en" dir="ltr">We had around 50 inbound applications to build an L3 on <a href="https://twitter.com/modenetwork?ref_src=twsrc%5Etfw">@modenetwork</a> overnight <br><br>Send me a dm if you are keen to build<br><br>I will make sure you get:<br>- strategic support <br>- infra support <br>- added to our early devs group <a href="https://t.co/7AGNU5laJn">https://t.co/7AGNU5laJn</a></p>&mdash; James Ross 🟡 (@JRossTreacher) <a href="https://twitter.com/JRossTreacher/status/1760644501159227804?ref_src=twsrc%5Etfw">February 22, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`

We are finally seeing a Cambrian explosion of the Ethereum ecosystem in real time with the growth coming in layers. The launch of Ethereum was the big bang establishing itself as the center of the universe. As the universe expands outwards, layers of rollups are forming rings around the center.

![](/assets/blog/multi-layered-mesh-interoperability/cambrian_exp.png)

Rings in the form Layer 2s (L2s) and now Layer 3s (L3s) circling around the gravitational pull of Ethereum - the new internet.

To grasp the requirements of this new internet, we will introduce and explore the concept of multi-layered mesh interoperability as a scalable model for Ethereum and beyond. Let’s start with a few analogies.

### **Interop as a Service Mesh**

![](/assets/blog/multi-layered-mesh-interoperability/Interop_as_a_Service_Mesh.png)

Imagine the current Ethereum ecosystem as the internet of today. The foundational layer is the internet itself, with cloud providers and data centers building upon it to support server infrastructure. This, in turn, enables applications and microservices to be deployed and operate effectively.

![](/assets/blog/multi-layered-mesh-interoperability/microservices.png)

On Layer 2s, developers enjoy the ability to know and directly compose with other applications - build bigger applications that work in sync. Akin to a traditional architecture where processes are tightly integrated and communicated internally.

However, as applications transition to their own blockspaces on Layer 3s, there's a pressing need for a system that enables them to locate, communicate, and dynamically engage with one another in a distributed environment.

This is where the concept of a [service mesh](https://aws.amazon.com/what-is/service-mesh/#:~:text=service%20mesh%20requirements%3F-,What%20is%20a%20service%20mesh%3F,the%20performance%20of%20the%20services.) comes in, which manages service discovery, security, and traffic control for connected microservices (L3s).[ Istio](https://istio.io/) is an example of a service mesh seen below.

![](/assets/blog/multi-layered-mesh-interoperability/itsio.png)

Istio serves as a traffic control system for the network, connecting different parts of your application, comprised of microservices (small, independent services, or independent blockspace L3s).

It uses something called Envoy proxies, which are like gatekeepers for each microservice, managing who gets to talk to who and how. These proxies follow rules set by developers over Istio to control the flow of data, making sure everything runs smoothly and securely.

Think of Istio as having a big map (single network mode) where every service can find and communicate with every other service easily, no matter where they are.

You can set up Istio in different places, like various cloud services or data centers, and it will work the same in each one.

![](/assets/blog/multi-layered-mesh-interoperability/microservices_polymer.png)

When you have Istio set up in more than one place, you can connect all these setups together into what's called a federated control plane. This is like having a coordinated team that makes sure traffic rules are followed across all your app's services, no matter where they're located, making the whole system work as one.

### **Introducing Multi-Layered Mesh Interoperability**

Just like Istio allows applications to establish communication policies among their components, offering insights into their status and controlling traffic flow, Polymer, with the help of IBC, extends similar capabilities to L2s and L3s. It enables the efficient routing of communications between these layers, applies custom security rules over their traffic, and then monitors and regulates its flow.

![](/assets/blog/multi-layered-mesh-interoperability/settlement.png)

Envision a service mesh that spans across all layers of Ethereum, with each L2 or L3 hosting its own Polymer control plane. With every layer getting its own instance of a Polymer, each control plane inherits finality or re-org resistance from the shared settlement.

Different L3 control planes are federated together with the help of a Polymer instance on L2 (live soon) that provides a unified address space using Polymer’s[ ICS-33 multi-hop channel specification](https://github.com/cosmos/ibc/tree/main/spec/core/ics-033-multi-hop). Multi-hop channels create an accurate mapping of application connectivity between L3s across different L2-rollups via the underlying network topology.

![](/assets/blog/multi-layered-mesh-interoperability/polymer_hub.png)

Polymer introduces an infinitely scalable model of interoperability to Ethereum's "infinite garden." A singular Polymer L2, coupled with multiple L3 instances, constitutes a multi-layered IBC mesh. This model transcends the traditional peer-to-peer and hub-and-spoke frameworks, offering a scalable solution that evolves in tandem with Ethereum.

The IBC mesh formed by interconnected Polymers expands in layers alongside Ethereum’s growing ecosystem of L2s/3s, and *maybe…*

![](/assets/blog/multi-layered-mesh-interoperability/incepetion.png)

*…more.*
