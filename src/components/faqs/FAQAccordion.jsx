import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Helper component for rendering HTML content safely
const HTMLContent = ({ html }) => (
  <div className="text-[#d9d5c5]" dangerouslySetInnerHTML={{ __html: html }} />
);

const sectionAQuestions = [
  {
    id: "a1",
    question: "How is Deep Funding different from other allocation mechanisms?",
    answer: "In most funding rounds, selection procedures require a committee or donors to have an opinion on all eligible projects.<br/><br/>In deep funding, the jury votes carefully on a few projects. These selections serve as test data to choose a winning model that decides allocations to all projects."
  },
  {
    id: "a2",
    question: "So an AI model gets to decide which project should get how much funding?!",
    answer: "Yes, but it is not \"an\" AI model. There is a data science competition (like the ones on Kaggle or Pond) where anyone can submit models giving weights to projects in a round.<br/><br/>The jury data is used to rank the different model submissions in the competition. Models most closely aligning with juror preferences feature get to decide the funding amounts to all projects in a round."
  },
  {
    id: "a3",
    question: "I'm still confused, what is the end output of a Deep Funding challenge?",
    answer: `<p>Very simply, it is a table showing different repos & their relative importance to one another. You can see an example below, based on Github stars.</p>
            <img 
              src="/images/faqs/repos-importance-table.png" 
              loading="lazy" 
              alt="Table showing repos and their relative importance" 
              class="my-4 max-w-full"
            />
            <p>The weights assigned by the winning model are deployed into a <a href="https://splits.org/">Splits Contract</a> through which anyone can send money and have it distributed between repos.</p>`
  },
  {
    id: "a4",
    question: "How is this different from say Protocol Guild, which also uses a splits contract?",
    answer: "Protocol Guild directly rewards individuals working on a repo, almost like a Universal Basic Income (UBI) for core contributors. Deep Funding seeks to allocate at the organizational level, not to individuals.<br/><br/>The second key difference is Protocol Guild has equal weights to contributors based on time spent, whereas in deep funding weights are assigned according to relative importance between projects.<br/><br/>A third difference is simply scale: Protocol Guild rewards ~160 contributors and is intended to remain tight knit. Deep Funding rewards 5000 open source repos."
  },
  {
    id: "a5",
    question: "This sounds interesting, how can I integrate deep funding in my allocation mechanism?",
    answer: `There are 2 ways to do so, via deep funding or predictive funding:<br/><br/>In predictive funding, submitted Machine Learning (ML) models need to guess the amount that will be received by each project in a funding round <strong><em>before</em></strong> it even begins. This will show us what models are most likely to give an allocation similar to your funding mechanism. See some example submissions <a href="https://research.allo.capital/t/submission-of-entries-to-the-deep-funding-mini-contest/22">here</a>.<br/><br/>In deep funding, submitted ML models give weights to the edges of a dependency graph. A jury rates a subset of edges to indirectly select winning models that then allocate rewards across the entire graph. See the competition to get weights between Ethereum core repos <a href="https://cryptopond.xyz/modelfactory/detail/2564617">here</a>.`
  },
  {
    id: "a6",
    question: "How does Deep Funding and the team organizing the contest make money?",
    answer: "Long term, the cost of quantifying impact (as Deep Funding seeks to do) should ideally be 1-2% of the effort in making the impact itself (as the repos are doing). So Deep Funding will be included in the splits contract distributing funds to repos with a weight of 0.01 - 0.02<br/><br/>In the short term, benefactors keep the Deep Funding mission alive. Please support us in Gitcoin and Giveth QF rounds!"
  }
];

const sectionBQuestions = [
  {
    id: "b1",
    question: "Where is the list of repos that I need to give weights to? How did you choose them?",
    answer: `<p>The list of seed nodes was taken from:</p>
            <ul class="list-disc pl-6 my-2">
              <li><a href="http://clientdiversity.org">clientdiversity.org</a> for the execution and consensus clients of Ethereum</li>
              <li>The 5000 child nodes comprise dependencies of the 34 seed nodes.</li>
            </ul>`
  },
  {
    id: "b2",
    question: "How are you selecting the jurors rating the seed nodes, against which you will test the weights given by models? Will their evaluations be made public?",
    answer: "The jury is constructed by either invitation or nomination. Select jurors are invited based on their application in the forum or outreach by our team for their special expertise. Other jurors are nominated by the existing jury. You can see the entire juror list and apply or nominate someone to be a juror <a href=\"https://research.allo.capital/t/join-the-deep-funding-jury/99\">here</a><br/><br/>All evaluations follow Chatham House rules. Ratings, comments, juror names and who they nominated are public but who made a specific rating will not be public."
  },
  {
    id: "b3",
    question: "How do you deal with conflicts of interest within the jury?",
    answer: "Jurors vote on random pairwise comparisons of one repo vs another. So they may not even be shown the project they have a vested interest in.<br/><br/>In case they do vote on a project they have a conflict in, the indirection of their votes translating to selecting a model mitigates the effect compared to their votes directly allocating weights.<br/><br/>The bigger bias to worry about in deep funding is when the jury is mostly composed of one category (like say execution clients) which lead them to undervalue other categories (like dev tooling)."
  },
  {
    id: "b4",
    question: "Where can I submit my model for the deep funding contest?",
    answer: "Pond is the host for the deep funding competition giving weights to ethereum core repos. You can see the leaderboard and make submissions <a href=\"https://cryptopond.xyz/modelfactory/detail/2564617\">here</a>. This is also where we share the training data from the jurors for you to train a model."
  },
  {
    id: "b5",
    question: "Do I have to use AI for giving weights?",
    answer: "You can use any method you want! Whether that relies on LLMs or a metrics based approach such as number of Github stars, contributors, open issues, etc. There are 15,000 weights requested so we encourage the use of AI."
  },
  {
    id: "b6",
    question: "Can I see the reviews made by jurors? How much of the data is publicly available for participants to train their models vs kept private to test?",
    answer: "We encourage you to check out the Pond competition page where this is shared in greater detail. In general, the jury data is divided at the project (repo) level between training, public test (leaderboard) and private test (selection of winning model) to prevent \"mutual information\" that limits ability to evaluate generalizability of models.<br/><br/>In the final week of the contest, all the jury data used for the public leaderboard will be released to either the training dataset or the private leaderboard."
  },
  {
    id: "b7",
    question: "What prizes are available? Can I also contribute to the prize pool?",
    answer: "As the originator of the mechanism, Vitalik Buterin is testing the mechanism with $170k to Ethereum repos based on weights given by the winning model. If successful, we will create a splits contract so that you can also fund Ethereum core development!<br/><br/>Vitalik has also kept aside a prize pool of $50,000 (total) for winning models whose weights are chosen for allocation and for those making open source submissions, contributing datasets and generally providing infrastructure useful to all participants."
  },
  {
    id: "b8",
    question: "How are you scoring submitted models?",
    answer: "There are 2 leaderboards, the first of which is indicative while the second is used to award prizes<br/><br/>a. <strong>Raw cost function value</strong>: Ranks models by total cost (lower is better). Scores calculated according to a cost function based on how far away your model is from the jury samples, on those questions where jurors have provided samples. <br/><br/>\"Under the hood\", each sample is converted into a \"logit\" form, for example, if a juror says that A contributed 4x more than B, then the sample will be in the form (A, B, -1.386), where 1.386 = ln(4), negative because A is higher.<br/><br/>If your model assigns A = 0.2 and B = 0.02, then those values are themselves converted into logits (here, -1.609 and -3.912), and the cost function term is (your_B - your_A - model_diff)^2 = (-3.912 + 1.609 + 1.386) ** 2 = 0.840.<br/><br/>If your model assigns A = 0.2 and B = 0.05, then you get (-2.995 + 1.609 + 1.386)^2 = 0: a perfect score, reflecting that your model exactly mirrors the juror's opinion that A contributed 4x more than B.<br/><br/>b. <strong>Contribution to composite model</strong>: the second leaderboard reflects how much your model is influencing the ensemble of models that determine the end allocation to projects. Most submissions will likely score 0 as only select models will form the composite model. This approach rewards originality in submissions rather than simply copying the leader. To give an example, if the second-best model is a copy of the first-best model but slightly adjusted to make it worse, it would score #2 in raw cost function value but its weight here may end up being zero. <br/><br/>You can see an example of the scoring script developed by Vitalik Buterin <a href=\"https://github.com/deepfunding/scoring/blob/main/example2.py\">here</a>"
  }
];

const FAQAccordion = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-8">Got questions?</h2>
      
      {/* Section A */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold mb-6 text-[#d9d5c5]">A. On <strong>Deep Funding as a mechanism</strong></h3>
        
        <Accordion type="multiple" className="mb-8">
          {sectionAQuestions.map((item, index) => (
            <AccordionItem 
              key={item.id} 
              value={item.id}
              className={`!text-lg ${index % 2 === 0 ? "bg-[#17301c]" : ""}`}
            >
              <AccordionTrigger className="mb-5">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className='p-6 m-0 text-lg'>
                <HTMLContent html={item.answer} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      {/* Section B */}
      <div>
        <h3 className="text-3xl font-bold mb-6">B. <strong>On the Deep Funding Challenge</strong></h3>
        
        <Accordion type="multiple">
          {sectionBQuestions.map((item, index) => (
            <AccordionItem 
              key={item.id} 
              value={item.id}
              className={index % 2 === 0 ? "bg-[#17301c]" : ""}
            >
              <AccordionTrigger className='mb-5'>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className='p-6 m-0 text-lg'>
                <HTMLContent html={item.answer} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQAccordion; 