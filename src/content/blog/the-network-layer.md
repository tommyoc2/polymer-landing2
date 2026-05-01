---
title: "The Network Layer"
description: "Polymer's Tommy O’Connell explores the emergence of L3s challenging the definition of interop, comparing it to a solved problem in Web2 microservices."
date: "2024-04-09T12:00:44.000Z"
author: "Polymer Labs"
readTime: 4
featured: true
cover: "/assets/blog/the-network-layer/blog-general.webp"
slug: "the-network-layer"
---

**I**n the last few weeks Polymer released the [Multi-Layered Service Mesh](https://www.polymerlabs.org/blog/multi-layered-mesh-interoperability) piece, reviewing how Polymer can be the service mesh of Web3 from a technical perspective. Let’s dive into what this can mean from a product vantage.

As the Ethereum ecosystem continues to evolve, so do the conventional boundaries of Layer 2s (L2s). Recently there has been more and more commotion around Layer 3s (L3s) that not only augment scalability, but also specificity in functionality, echoing [Vitalik's sentiment](https://vitalik.eth.limo/general/2022/09/17/layer_3.html) on their potential for more customized solutions.

`<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The real L2 wars is to win the L3 narrative. Once you see it, it&#39;s very hard to unsee.</p>&mdash; Ryan Y Yi (@yiryan) <a href="https://twitter.com/yiryan/status/1770207048568909845?ref_src=twsrc%5Etfw">March 19, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`

The invocation of these L3s raises strong parallels to the early 2010s, when microservices became popular, raising a host of new problems with scaling and interoperability. 

`<blockquote class="twitter-tweet"><p lang="en" dir="ltr">L1s/L2s/L3s is just tree-based/hierarchical blockchain sharding, and it has been proposed even before rollups were a thing. Why should shards necessarily be arranged in a flat hierarchy?<br><br>Reasoning by analogy is bad, but the idea of L1s/L2s/L3s/L4s doesn&#39;t sound that crazy to me… <a href="https://t.co/3laUw6TniQ">pic.twitter.com/3laUw6TniQ</a></p>&mdash; Mustafa Al-Bassam (@musalbas) <a href="https://twitter.com/musalbas/status/1774748418734244152?ref_src=twsrc%5Etfw">April 1, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>‍`

This presents an opportunity to reimagine the architecture of decentralized applications and the underlying fabric of Web3 itself.

‍`<blockquote class="twitter-tweet">`  
`<p lang="en" dir="ltr">ding ding...all the literature from partitioning networks and sharded databases will make its way into crypto - this is just the start <a href="https://t.co/2bQwe4ubbl">https://t.co/2bQwe4ubbl</a></p>&mdash; Georgios Konstantopoulos (@gakonst) </blockquote> `

### **Remembering The Web2 Past**

To understand the significance of L3s, consider the case of e-commerce giants like Amazon, who already evolved from [monolithic architectures](https://www.spiceworks.com/tech/devops/articles/what-are-microservices/) to more flexible modular approaches. This transition involved breaking down the application into distinct submodules - such as web servers, payment gateways, shopping carts, and more. Each submodule operates as a microservice within the broader application ecosystem.

The initiation of microservices introduced a new challenge; the need for efficient communication between these disparate components. For example, when someone adds something to the shopping cart and checks out, they are then seamlessly directed to payment methods, even though these are two separate microservices [interop!].

Microservices in the cloud commonly communicate via a [service mesh](https://aws.amazon.com/what-is/service-mesh/#:~:text=service%20mesh%20requirements%3F-,What%20is%20a%20service%20mesh%3F,the%20performance%20of%20the%20services.), popularly leveraged by [Istio](https://istio.io/latest/about/service-mesh/), enhancing the overall application performance and UX. Today, the general architecture of most Web2 applications consist of a universal base layer, a coordination layer (such as AWS or cloud), and then a layer for all of these microservices. As the microservices expand, they need to be able to communicate with each other (via the service mesh).

![](/assets/blog/the-network-layer/660dd94df21160cf275c6925_lEBg0ZBYKz3cnacRr62Z_Mo5owR3lJvXgNYkseBPm9bqpe8Sc1muII5S7eE_Gds2CiyLEETdi9XL6AClrGpkVVnTDbpRhyi2lmIDyzlzJU7qKXpaavtYlWikw0AzP_PYUCdlNmJ65cXL-J1PhOmIqjY.png)

‍

### **Looking Into The Web3 Future**

The [emergence of L3s](https://x.com/conduitxyz/status/1770555819819753832?s=20) in the Ethereum ecosystem signals a similar shift towards more modularism, albeit on a much grander and more complex scale. In this new paradigm, L1 assumes the critical role of providing security, while L2s focus on scaling generalized execution. L3s, on the other hand, are designed to be application-specific, embodying the essence of modularism by serving distinct functional or application niches within the ecosystem.

![](/assets/blog/the-network-layer/660dd94d518acc329b5f130c_lpb2828UeQc0VVRnIgEVpp02SLJU0UdEADr6wJspAke1lY3SX23BA7YUkFw3Nq1W4GpEk6415zZpwe-m3XYqqvw_Xa7pI_4BTfnyK9IJhjgx2Zr7p0twIDLGoMnBsKh6JWmxR7WKjMXQivQbsoF5dPU.png)

This layered architecture not only facilitates specialization and optimization at each level but also creates a form of service mesh mechanism for L2s and L3s to communicate effectively. Such a mechanism enables compounding network effects, allowing an increasingly diverse array of L2s and L3s to interoperate seamlessly. The vision for this interconnected future is not limited to enhancing interoperability; it represents a fundamental shift towards a more dynamic, scalable, and modular future via the network layer.

‍

### **The Network Layer**

Polymer's vision extends beyond traditional interoperability solutions. It is the foundational network layer that facilitates this inevitable modular, multi-layered interaction. And it is all possible because Polymer establishes similar security standards, writing to the same L1 as the L2s and L3s (Ethereum).

This scaling playbook already exists…

L3s are the beginning of microservices for Web3. Where L1 owns the security, L2 owns a lot of the execution, and L3 is application specific. And as these L2s and L3s expand, there will need to be service mesh mechanisms that links them together. Creating a compounding network which allows more L2s and L3s to communicate.

This is the Network Layer. 

This is Polymer's future state, and it transcends just interop.

‍Polymer envisions a future where trust, scalability, and modularity converge to create a robust and versatile Web3 ecosystem, paving the way for a more interconnected and expansive Ethereum rollup network.
