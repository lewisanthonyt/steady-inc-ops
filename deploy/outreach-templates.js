/* Draft copy only. Recipient fields are merged locally; facts require Lewis's input. */
(function(root){
'use strict';
const unsubscribe="If you’d rather not get these emails, reply ‘unsubscribe’ and I won’t email you again.";
const names={sw:'SteadyWorks Ltd',sf:'Steady Flow, trading under SteadyWorks Ltd'};
const newsletters=[
 {key:'sw-winter',business:'sw',label:'Winter boiler and pipe reminder',subject:'A quick check before the cold weather',body:`Hi {first_name},

With colder weather on the way, it’s worth having a look for small plumbing problems before they become a bigger job. A dripping pipe or a damp patch around a radiator is easier to deal with when you’ve got time to plan it.

Since we last helped with {last_job}, has anything changed with your heating or hot water? If something has started making an unfamiliar noise, or you’ve noticed a leak, reply with a description. A photo can help me understand what you’re looking at before we discuss the next step.

It’s also worth checking that you know where your stopcock is, and that it’s accessible. Please leave gas work and boiler repairs to a suitably qualified engineer.

If there’s anything you’d like me to look at, let me know what’s happening and which days usually suit you. We can discuss the work and a suitable time before you commit.

Thanks,
Lewis
{business_name}

${unsubscribe}`},
 {key:'sw-service',business:'sw',label:'Annual service reminder',subject:'Is your next service coming up?',body:`Hi {first_name},

A quick note following {last_job}. If your annual boiler service is coming up, this is a useful time to check the date in your service record and plan ahead.

I don’t want to assume when it’s due or what your boiler needs. Your previous service paperwork should give you a better starting point than a reminder email. If you can’t find it, make a note of the boiler make and model before arranging anything.

Has the heating been working as you’d expect? Let me know about any changes in hot water or any visible leaks, so we can discuss what sort of help is appropriate. Please don’t remove the boiler cover or attempt gas work yourself.

If you’d like to talk through the next step, reply with a little background and the service date if you have it. I’ll come back to you about the work, rather than book anything without asking.

Thanks,
Lewis
{business_name}

${unsubscribe}`},
 {key:'sw-spring',business:'sw',label:'Spring maintenance checklist',subject:'A few spring maintenance checks',body:`Hi {first_name},

Now is a useful time to make a short list of the maintenance jobs you’ve been putting off. Following {last_job}, I thought these checks might be helpful around the property.

Have a look under the sinks for damp patches, and check whether taps are dripping after they’ve been turned off. Outside, look for visible leaks around the garden tap. You don’t need to take anything apart to spot a change that’s worth asking about.

If a room has been left unused over winter, give it a look too. A photo of a mark or a leak can be useful when explaining the problem, especially if it comes and goes.

Reply with the job that’s bothering you most and a little detail about where it is. I can discuss what’s needed and whether a visit makes sense. We’ll agree the work before anything is booked, so you know what happens next.

Thanks,
Lewis
{business_name}

${unsubscribe}`},
 {key:'sw-thanks',business:'sw',label:'Thank you and review request',subject:'Thanks for choosing SteadyWorks',body:`Hi {first_name},

Thanks for asking me to help with {last_job}. I appreciate you choosing SteadyWorks and making time for the work.

How has everything been since the job? If there’s something you’d like to ask about, reply here and explain what you’ve noticed. A photo is useful if it’s something you can show, but a few words are fine too. I’d rather you asked than left a question unanswered.

If you’re happy with the work and have a moment, would you be willing to leave an honest review? Reply and I’ll send you the right review link. There’s no need to write anything long; your own account of the job is what matters.

You’re also welcome to tell me privately what could have been better. That’s useful feedback, and you don’t need to leave a public review to share it.

Thanks again for the work. If another maintenance job comes up, you can reply to this email.

Lewis
{business_name}

${unsubscribe}`},
 {key:'sw-christmas',business:'sw',label:'Christmas closing dates',subject:'SteadyWorks over Christmas',facts:['christmas_dates'],body:`Hi {first_name},

A quick note about SteadyWorks over Christmas, following the work on {last_job}. I wanted you to have the dates before making plans for any plumbing or maintenance jobs.

{christmas_dates}

If you’ve got something you’d like to discuss before the break, reply with a description of the job and the dates you have in mind. I’ll confirm whether it’s something we can arrange. Please wait for that confirmation before setting aside time or making arrangements for access.

It’s worth keeping the details of any existing appointments somewhere handy too. This email doesn’t change a booking we’ve already agreed; if you’re unsure about one, ask me and we can check it together.

If you spot a small issue while preparing the property for Christmas, a photo and a few words will help explain it. This email isn’t an emergency service, so please use an appropriate emergency contact for an urgent problem.

Thanks for choosing SteadyWorks,
Lewis
{business_name}

${unsubscribe}`},
 {key:'sf-update',business:'sf',label:'Monthly client changes',subject:'This month at Steady Flow',facts:['confirmed_changes'],body:`Hi {first_name},

Here’s a short update from Steady Flow this month. Since our work on {last_job}, I wanted to keep you in the loop about the practical changes we’ve been working on.

{confirmed_changes}

The useful question is whether a change makes it easier for someone to understand a business and get in touch. A new page or a tidier layout only earns its place if it helps a real visitor do what they came to do.

If your own priorities have moved on, tell me what’s changed. Perhaps customers keep asking a question the website doesn’t answer, or a service you want to promote is difficult to find. That’s a sensible place to start a conversation.

Reply with one thing you’d like people to find or do more easily. I can look at it with you and discuss the next step, without assuming you need a new website or a bigger package.

Thanks,
Lewis
{business_name}

${unsubscribe}`},
 {key:'sf-health',business:'sf',label:'Website health check',subject:'Want a fresh look at your website?',body:`Hi {first_name},

Following our work on {last_job}, would it be useful to take another look at how your website feels to a customer?

A sensible starting point is to open it on your phone and try the thing you most want a visitor to do. Can you find the right service, understand where you work and get to the contact details without hunting around? It’s worth checking the pages people actually land on, as well as the homepage.

If something feels awkward, send me the page and tell me what you expected to happen. I can discuss a website health check with you and agree what to look at before we start. There’s no assumption that the answer is a rebuild.

You might already have a short list of things that need attention. If so, reply with the most pressing one. That gives us a useful starting point and keeps the conversation about your business rather than a list of features.

Thanks,
Lewis
{business_name}

${unsubscribe}`},
 {key:'sf-google',business:'sf',label:'Google Business Profile tips',subject:'A quick Google profile tidy-up',body:`Hi {first_name},

A practical thought following {last_job}: it’s worth looking at your Google Business Profile as if you were a customer who hasn’t heard of you before.

Are the opening hours still right, including any holiday changes? Does the website link take people to a useful page? Check the public view rather than relying on what you remember entering when the profile was set up.

If the business has changed, the wording and photos may need attention too. Use photos that show your actual work and make sure the services described are ones you still offer. There’s no need to make claims you couldn’t explain to a customer.

If you’ve noticed something wrong but aren’t sure how to fix it, reply with the detail. Don’t send passwords or sign-in codes. We can discuss the issue and the right way to handle access if help is needed.

Start with one correction that would make the profile more useful to the next person who finds it.

Thanks,
Lewis
{business_name}

${unsubscribe}`},
 {key:'sf-review',business:'sf',label:'Review request',subject:'How was working with Steady Flow?',body:`Hi {first_name},

Thanks for working with me on {last_job}. I’d like to hear how you found the process, now you’ve had a chance to reflect on it.

Was the communication clear, and did you know what was happening next? If there’s something you’d like me to explain or revisit, reply here. Useful feedback can be as simple as pointing out the bit that felt confusing, so please don’t feel you need to write a formal review.

If you’re happy to share your experience publicly, would you be willing to leave an honest review of Steady Flow? Reply and I’ll send you the right link. Your own words about the work and the way we handled it are more useful than anything polished.

There’s no need to claim results you can’t measure, or to include information about your customers. A straightforward account of working together is enough.

And if you’d rather keep your feedback private, that’s fine too. I’ll still read it.

Thanks,
Lewis
{business_name}

${unsubscribe}`}
];
const linkedin=[
 {key:'sw-connection',business:'sw',label:'Connection note',subject:'SteadyWorks connection note',step:1,message_kind:'connection',body:'Hi {first_name}, I’m Lewis at SteadyWorks Ltd. I’d like to connect with the team at {company} about plumbing and property maintenance in East London and Essex. Would it be useful to keep in touch?'},
 {key:'sw-connected',business:'sw',label:'After connecting',subject:'SteadyWorks after connecting',step:2,message_kind:'message',body:'Hi {first_name}, thanks for connecting. I’m Lewis at SteadyWorks Ltd. Who looks after plumbing and maintenance contractors for {company}? If you’re the right person, I’d be happy to discuss the sort of work you need covered. If it’s not relevant, let me know and I won’t follow up.'},
 {key:'sw-postcall',business:'sw',label:'After a call',subject:'SteadyWorks post-call follow-up',step:3,message_kind:'message',body:'Hi {first_name}, thanks for speaking with me about {company}. Lewis here from SteadyWorks Ltd. If you’d like to discuss a plumbing or maintenance job, send me a brief outline and we can agree the next step. If you’d rather leave it there, just say and I won’t follow up.'},
 {key:'sf-connection',business:'sf',label:'Connection note',subject:'Steady Flow connection note',step:1,message_kind:'connection',body:'Hi {first_name}, I’m Lewis at Steady Flow. I work on marketing and websites for local businesses. I’d like to connect with you at {company} and hear what you’re working on.'},
 {key:'sf-connected',business:'sf',label:'After connecting',subject:'Steady Flow after connecting',step:2,message_kind:'message',body:'Hi {first_name}, thanks for connecting. Lewis from Steady Flow here. Is there anything about the marketing or website at {company} that’s taking more time than it should? Happy to talk it through if useful. If it’s not for you, let me know and I won’t follow up.'},
 {key:'sf-postcall',business:'sf',label:'After a call',subject:'Steady Flow post-call follow-up',step:3,message_kind:'message',body:'Hi {first_name}, thanks for the chat about {company}. Lewis here from Steady Flow. If you’d like to pick up the marketing or website question we discussed, send me the detail you want to start with. We can agree the next step from there. If now isn’t right, just say and I won’t follow up.'}
];
const api={newsletters,linkedin,names,unsubscribe};
if(typeof module==='object'&&module.exports)module.exports=api;
root.OutreachTemplates=api;
})(typeof globalThis!=='undefined'?globalThis:this);
