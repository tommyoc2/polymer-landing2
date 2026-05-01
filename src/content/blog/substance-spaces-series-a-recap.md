---
title: "Substance Spaces: Series A Recap"
description: "Polymer investors provide insights into Polymer's place in the blockchain interoperability landscape, its technical strategy, & more."
date: "2024-03-19T12:00:00.000Z"
author: "Polymer Labs"
readTime: 19
featured: false
cover: "/assets/blog/substance-spaces-series-a-recap/Substance_Spaces_Cover.webp"
slug: "substance-spaces-series-a-recap"
---

Today's blog post was adapted from a discussion held on Polymer Labs’ X, touching on our recent [$23 million Series A](https://www.polymerlabs.org/blog/polymer-labs-raises-23m-to-build-ethereums-interoperability-hub) fundraise. The discussion featured Polymer cofounders Peter Kim and Bo Du, along with several leading investors in Polymer, including Yuan Li and Joshua Rivera from Blockchain Capital, Ryan Yi from Coinbase Ventures, Chris Burniske from Placeholder, and Rain and Coffee from Maven 11. The conversation provided valuable insights into Polymer's place in the blockchain interoperability landscape, its technical strategy, and macro observations on Web3 as a whole. We hope you enjoy it.

‍

### **Introductions**

**‍Peter Kim: "Today marks the first in a series of discussions where we'll feature leaders from various sectors, including Ethereum and Cosmos, to discuss Polymer and its role in the future of cryptocurrency. I'm Peter Kim, cofounder of Polymer, and I'll be moderating today. We recently closed our Series A funding round, and we'll delve into that with representatives from Blockchain Capital, Placeholder, Maven 11, and Coinbase Ventures. We'll also discuss our architectural strategy, highlighting Polymer's development as an Ethereum Layer 2. Now, let's have our speakers introduce themselves, starting with Rain & Coffee."**

‍Rain & Coffee: "Can everyone hear me alright?"

Peter Kim: "Loud and clear. Welcome, everyone."

Rain & Coffee: "I'm Rain & Coffee from Maven 11, a crypto-only fund based in Amsterdam. My focus is on research and technical due diligence, particularly projects like Polymer."

Yuan Li: "Hello, everyone. I'm Yuan Li, an investor at Blockchain Capital, focusing on decentralized infrastructure. Our fund has been exclusively investing in crypto since 2013. Excited to be here."

Joshua Rivera: "Hi, I'm Joshua Rivera, a partner and the general counsel at Blockchain Capital. I work closely with Yuan on our investments. Congratulations to Polymer on the fundraising, and I'm looking forward to today's discussion."

‍Ryan Yi: "Thanks. I'm Ryan Yi from Coinbase Ventures. We are the investment arm of Coinbase, focusing on strategic investments in the crypto space."

‍Bo Du: "Hello, I'm Bo Du, a technical cofounder at Polymer Labs. My background is in databases and distributed systems. At Polymer Labs, we focus on interoperability solutions, including a productized version of the IBC protocol."

*Chris Burniske also joins us part way through, so we ask for his introduction as well*

Chris Burniske: "Thanks, Peter. Chris here, one of the partners at Placeholder, and I guess I cut my teeth in the crypto space working at Ark Invest under Kathy Wood from 2014 to 2017. I did a lot of Bitcoin work back then, and then Ethereum work, and then crypto kept expanding, and as a result, I'm still here, and it's a real pleasure to work with Peter and Bo and the whole Polymer team on extending IBC beyond Cosmos."

### ‍**Thoughts on Polymer & Solving Blockchain Interoperability **

**‍Peter Kim: "Before we start with questions, let's keep this session interactive and less formal. We're here to have a dynamic conversation. One key topic is understanding our investors' perspective on investing in Polymer and their thoughts on solving blockchain interoperability challenges."**

Rain & Coffee: "I'm happy to go first here. I think for us, the story kind of starts before Polymer, and I think it starts with IBC. So, I think at Maven 11, we're generally of the belief that when you are dealing with questions of interoperability, you should have some sort of standardization. IBC is very good at this, having very good standards for how bridging should be solved, whether that's just data or tokens or other things as well. And it's also unique in the sense that it trusts the chains themselves and not necessarily just the smart contracts. So, I think for us, it started in the sense that we looked at IBC, realized that for us, this is the best way to do interoperability. And who do we see as the best team to bring this forward? And I think for us, looking at Polymer, specifically you, Peter, and Bo, this became very clear very quickly, especially with Bo's, I think, extremely unique technical skill set that has the sort of power to bring this forward. So, I think for us, a big part of it is the thesis on IBC, and then Polymer sort of followed that."

Yuan Li: "Yeah, I think like Rain & Coffee mentioned, for Blockchain Capital, we also went through a similar journey. I think it was pretty apparent quite a while ago that interoperability was going to become a massive problem in the crypto world."

Yuan Li: "Just if you try and use any application on-chain and try and use another one, having to click ten buttons, move a bunch of assets across different chains, it was a massive UX problem, not to mention all the hacks that have happened with bridges over the past few years. And so for us, it was always clear that interoperability is a problem that has to be solved for crypto to ever be adopted. That's number one. And number two, whatever solution ends up winning also has to be incredibly secure and battle-tested."

‍Yuan Li: "And I think, like Rain & Coffee mentioned, it was very clear that IBC was the most battle-tested and best interoperability standard that was out there. It had the most usage. It does millions of dollars of volume a day. It was adopted by, I think at this point, it's been adopted by over 100 chains. So compared to every single other interoperability standard out there, it was night and day."

‍Yuan Li: "And so it was always very clear to us, okay, IBC currently only works in Cosmos, but really, it's the interoperability standard that the rest of the crypto ecosystem needs to adopt."

‍

> *IBC currently only works in Cosmos, but really, it’s the interoperability standard that the rest of the crypto ecosystem needs to adopt*

‍

Yuan Li: "When we met you, Peter, and Bo, you guys had the same vision. You guys were incredibly excited about IBC. You guys were always very clear and certain that building around and trying to extend IBC to other ecosystems was the right approach. And that just really resonated with us. So, you know, when we spoke to you guys, it just fit really neatly into the thesis we already had. And so, yeah, we could not have been more excited to partner with you guys when we met you. But, yeah. Joshua, I don't know if you have anything to add there."

Joshua Rivera: "I think that's right. We spent a lot of time thinking about the proliferation of different blockchains in the crypto ecosystem and the types of problems that was going to continue to create over time. I remember early on, we looked at IBC and really liked the approach and the basic architecture. We were looking for some interoperability solution that was going to be either IBC-like or use IBC directly. So, once we met Peter and Bo, it became very obvious that we were like-minded in terms of how we viewed the space scaling over time. Our thesis, you know, we met you guys; it's been a while now, a couple of years since we first met, and I think we've just continued to strengthen that in our minds. That thesis continues to be the strongest one in terms of how we see the space growing. We think this is the right team, this is the right approach, and that's kind of the best you can hope for when you're trying to predict the future."

Rain & Coffee: "Yeah, I guess just to expand on the UX part quickly, I think we didn't really get to cover that, but most of the time now with IBC, there's quite a lot of things you have to cross out to be able to implement it. I think the cool part about Polymer, in particular, is that you're not just necessarily required to have a native integration of IBC, whether that's IBC Go or IBC-RS. But the fact that you can just do this through Polymer makes it a lot easier for devs that are looking to do something that's a little bit more."

‍

### **Why Collaborate with Polymer?**

**‍Peter Kim: "Could you also share a little bit about your thesis on blockchain interoperability? What about Polymer's approach or plan convinced you to collaborate with us?"**

Chris Burniske: "Well, I mean, I guess to break down blockchain interoperability, there's interoperability of tokens, there's interoperability of, I guess, data passing, which doesn't strictly have to be tokens. And then there's interoperability of reading state, not necessarily writing state. And so for us, the interoperability of tokens is, at least right now, the focus, like the interoperability of state, might become more of a focus down the line for the industry. But IBC is far and away the most standardized, battle-tested interoperability protocol for tokens. And so Placeholder basically went out on a search to find the best team extending IBC, and that team turned out to be Polymer. And so this was really a team-based bet with the view that extending IBC beyond Cosmos was the right move. You know, Peter and Bo are a great combination in terms of a very strong business mind with a strong technical mind, and we like to see that pairing. If it's all business or all tech, there's typically imbalances that pop up. And so the balance between Peter and Bo and the talent that they then attract to the rest of the team is really important to the future success of Polymer."

Peter Kim: "Sweet. And also, a month ago, we announced an architectural decision, a design decision, where we'll be launching a Layer 2 that will extend IBC to Ethereum and its rollups. I guess I wanted to hear comments from you guys on your opinion of how this change in direction affects or benefits Polymer's plan and what your opinion is of this new plan."

Ryan Yi: "I can maybe give a couple of thoughts. Yeah, I think what's becoming clear is that there is kind of a security spectrum of different interoperability technologies. And I think we started a lot on the sort of, like, third-party security side, and a lot of those protocols have gotten a lot of traction. But I do think that the other side of the spectrum, in terms of bringing sort of more native and first-party security principles to interoperability, are going to probably start to become a lot more significant just in terms of attention and mindshare. Yeah. I would just point out, for example, chains that launch within certain L2 ecosystems have their own sort of native bridging technology. So one of the basically carrots that say, like an Optimism stack, if you're building on Optimism, will say is, hey, you'll get native interoperability with all the other Optimism stack chains. It's interesting that you also see that kind of in the Arbitrum ecosystems. And so it's been interesting because I think when Cosmos first came out, a lot of people were focusing on the fact that, hey, this was a really good way to launch your own chain. But I actually think one of the most important technologies that the Cosmos ecosystem really put forward was IBC. And I do think it's one of the most sort of battle-tested technologies out there in terms of first-party interoperability. So I think, to date, to answer your question, Peter, it's mostly lived within the Cosmos ecosystem, which is great, but I think such a powerful technology like IBC probably deserves to be in other ecosystems as well. So really excited to see how folks use it and understand the benefits of IBC once it does get productized into different parts of the ecosystem."

Chris Burniske: "I guess I can go next. I think what we've seen with the rollup-centric roadmap of Ethereum is that, despite the fact they're all settling to the same layer underneath, in this case, Ethereum, there's a lack of standardization in the different interoperability standards. Different app developers are going with different types of cross-investing protocols that are not necessarily interoperable with each other and lack certain standardization that comes from just being a protocol over years and years. And I think, in particular here, IBC is extremely strong, especially with things like interchain queries, which allows some very cool data queries on other chains, and also interchain accounts. I think interchain accounts is just one example of sorts of things you can use to build really cool applications, whether that's building an asset-based trading app with chain accounts as well. So I think what is important for the fact that Polymer is sort of an L2 now on Ethereum is the fact that if you're servicing a specific ecosystem, in this case, Ethereum rollups, it's also very much needed to be in that ecosystem. So I think that the right choice was made here. If you're sort of also dealing with Ethereum rollups, inheriting the native gas token, native utility token of that ecosystem in terms of security via EigenLayer, and EigenLayer is also, I think, extremely important, you are certainly aligned with the ecosystem that you're trying to service. I think the decision here was quite smart on the Polymer side."

‍Rain & Coffee: "The only thing I'd add is a lot of people for a long time have been excited about L2s as a way to scale Ethereum, and that's mostly proving out as a compression technology. But I think people had less forethought around how to pass value and data between the L2s. And so having dedicated teams that focus on that, because that really is one of the Achilles heels of the Ethereum L2 ecosystem right now, that are just as strong technically as the L2 builders themselves, is important. And so again, that's Polymer."

‍

> *How to pass value and data between the L2s…is one of the Achilles heels of the Ethereum L2 ecosystem. We need dedicated teams focused on that, that are just as strong technically as the L2 builders themselves, and that’s Polymer*

‍

Bo Du: "Yeah, I would add that to Chris's point. People probably didn't see L2s as a means of adding additional features to Ethereum itself. So from one perspective, you could look at it as we take IBC, we put it on this L2, and we add IBC as a feature to Ethereum, the core protocol, without natively enshrining it into the Layer 1."

‍

### **Ethereum’s Interoperability Hub and the Proliferation of L2s**‍

**Peter Kim: "So the third question we have is, how do you envision the Ethereum interoperability hub impacting the broader blockchain ecosystem? We may have touched on this a little bit, but maybe specifically around the proliferation of L2s and then applications on these L2s."**

Yuan Li: "I think I can start here, right? I think we're starting to see a new L2, a new rollup launch almost every week. Over the past few months, I think this is a trend that's going to continue, especially as rollups get easier to launch with people building new rollup SDKs, rollup as a service teams, and everything, more and more applications are going to choose to launch their own application as part of an application-specific rollup. And as we get this proliferation of rollups, the thing that hasn't been solved as far as interoperability, you might do one thing on one rollup, but if you want to go do another thing on another rollup, you have to go find the bridge that's the most secure, that works the best, that kind of gets you the most tokens. If you're moving your tokens across to another rollup, you need to do that search process. Then you need to figure out what application you want to use and what rollup that lives on and what bridges can actually take you there. The world's just getting more and more complex every day, especially as more and more rollups launch. So we still haven't solved this interoperability problem, right? But with this interoperability hub, and I think we've kind of alluded to this earlier by launching this layer two, Polymer is kind of adding IBC as a feature to the whole of the Ethereum ecosystem. Because it's also a rollup within the Ethereum ecosystem. Together with the rest of the rollups, they all share the same security layer. And so by routing messages through Polymer using IBC, you get the most trustless, battle-tested, and also the message passing system that has the most features."

‍Yuan Li: "I think Rain & Coffee also alluded to this earlier with things like interchain accounts, interchain queries, you just have so many more primitives that natively come with IBC that don't kind of exist with many of these other message-passing standards. And so I think by having all these things, you can, in the future, hopefully have this world where you can do things on one rollup. You don't have to worry about bridges anymore. You don't have to worry about where you need to go. That can all kind of be brought to you as a user. And crypto UX can kind of be 1,000x from where it is today, such that maybe even our grandmas can use blockchains."‍

> *You don’t have to worry about bridges anymore. Crypto UX can be 1,000x from where it is today, such that even our grandmas can use blockchains*

Chris Burniske: "Yeah, I just wanted to add something shortly. I think something that I'm quite excited for is sort of building these front ends of blockchains, and I'm quite excited to see applications built cross-chain natively from the very beginning. Having some sort of native integration of IBC makes this a lot easier. Interchain accounts, in particular, are one of the more interesting things that you can do with IBC as an application, or even as an application-specific rollup. With IBC and passing messages through Polymer, you can still sort of own your own bridge to some extent and customize that to how you see fit, while also communicating with deployments or apps that are living on other chains. The power here of Polymer is sort of having this unified API that has unified standards as well, which I think a lot of the current setups are currently lacking. So you can kind of call IBC, to some extent, this sort of modular software that you can help build modular applications with. So I'm pretty excited to see that come to fruition."

‍

### **Industry Observations and Polymer’s Fit**

**Peter Kim: "Let's take a step back with this last question. I believe all of you cover many verticals across the industry, obviously not just interoperability, not just infrastructure. So I was curious to hear from you guys how you believe Polymer fits into a broader investment thesis, how we fit into your portfolio of investments, and how you see the overall industry moving from a macro level."**

‍Ryan Yi: "Yeah, I can put some thoughts here. I think the largest shift we're seeing, especially in this sort of infrastructure cycle of crypto, is the embedded wallets. So the idea that you can basically have a wallet without going through all the sort of typical onboarding that I think a lot of crypto users have been used to the past five, six years. And I think it also allows for penetration into creating real mobile crypto apps. But I think the idea is that we don't really know which apps users are going to like, but in the off chance that they're using apps that are built on their own rollups, and those rollups don't use the same underlying interoperability technology. They will basically want it to feel like a frontend where all those assets are unified. But I think what will actually be required is backend plumbing to make it happen. And I think interoperability actually really fits into this UX problem that crypto is going to want to basically perfect for users once we get them on. I think a lot of the conversation around IBC obviously is quite technical, and the existing crypto base is very geared towards that way. But I do view that in the future, everyone is like, 'hey, we'll be using crypto every day. We just don't know we'll be using crypto underneath.' I actually think interoperability is going to be a huge piece of the puzzle there to solve."

> *Interoperability really fits into this UX problem that crypto is going to want to basically perfect for users once we get them on*

Rain & Coffee: "I very much agree with what Ryan just said. The common example that's used is when we swipe a credit card, we don't worry about whether our transaction is going to go through or the credit card processing system that the payment navigates, and using apps in crypto should eventually get to that state. It should be cheaper, certainly on the merchant side, than a merchant who receives a credit card transaction, and it should be just as fast and convenient for the user. So that's a pretty high bar. I mean, credit cards on the user side, I guess it depends where in the world you are, but I guess it can take a second or two for it to clear. But that needs to be our end goal if we're actually improving. Value and data need to be shared openly and freely, basically, in how it transfers. And something like IBC is a key enabler of that."

> *Value and data need to be shared openly and freely, basically, in how it transfers. And something like IBC is a key enabler of that*

‍Yuan Li: "So I think for us at Blockchain Capital, we very much agree with everything that's been said by Chris, Ryan, and Rain & Coffee. UX has ways to go. Interoperability is going to be a massive part of that story. But I think another interesting thing here about how Polymer fits into how we view the crypto world, was also something we alluded to a little earlier. I think Bo, Chris, you guys both hinted at this, right? One thing we've been very excited about is thus far, Ethereum's kind of this big blockchain in the room, has the most traction, has the most users, it has the most liquidity. But thus far, if you've been a builder and you're excited about making crypto better, improving its UX, improving interoperability, right, and you want to add features to blockchains because you think something like Ethereum is not feature complete, you had to build your own blockchain from scratch."

‍Yuan Li: "And I think this also kind of goes in line with what Rain & Coffee mentioned, with kind of the modular thesis as well, and also fits into things like EigenLayer. We're now kind of in this world where if you're a builder and you wanted to make blockchains better and add features to existing blockchains, you don't have to go build a blockchain from scratch."‍

Yuan Li: "You can leverage something like EigenLayer to build an AVS, to add a feature to Ethereum. You can go build an L2 and bring IBC to the rest of the Ethereum ecosystem and all of its L2s. The barrier to adding features to existing blockchains to improve UX for everyone is getting so much lower, and it's much easier for builders to."

Peter Kim: "I think that's actually a really good segue into sharing a little bit about how Bo and I think about Polymer. At a high level, as you guys have all mentioned, the infrastructure is getting more mature. You can launch L2s for different uses, the dev tooling to build applications on top of this infrastructure is also becoming more mature. And the way that Bo and I see it is that down the line, as we hit a certain critical point, retail applications, whether that's mobile applications or applications on Web3 phones like Saga, will all eventually be adopted more and more. And at a certain point, we believe users won't even realize that the applications they're using are interfacing with blockchains. So for us, when these applications are speaking to each other on other chains without users realizing it, the way that we see it is that at a high level, these are what we're enabling, what we call the next generation of the Internet. If we're enabling the networking between all the chains and all the applications, it really does become an Internet.

‍

**Get Involved**

Polymer’s Polyverse Testnet is currently live with over 4000 participating developers. We encourage you to get involved and shape the future of blockchain interoperability with us by visiting the [Polyverse Testnet Page](https://polyverse.polymerlabs.org/). We’re waiting to support you in your journey and look forward to meeting.
