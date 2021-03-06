import React from 'react'
import dynamic from 'next/dynamic'

const Collapsible = dynamic(
  import('react-collapsible').then(mod => mod),
  { ssr: false }
)

const faqQuestions = [
  {
    question: 'How do I mint a LongHorn member NFT?',
    answer: [
      'Step 1: Download <a class="underline" href="https://metamask.io/" target="_blank">MetaMask</a> (preferred), or other compatible wallet (WalletConnect, Trezor, Ledger, etc.)',
      'Step 2: Fund your MetaMask by sending ETH from your <a class="underline" href="https://metamask.io/" target="_blank">Coinbase</a> or other cryptocurrency wallet (see below on how to purchase ETH)',
      'Step 3: Connect your wallet here before our sale',
      'Step 4: Once wallet is connected and authorized, click add to cart during our sale',
      'Step 5: Review transaction details and complete purchase',
    ],
  },
  {
    question: 'How can I become a LongHorn Member?',
    answer: [
      'You can become an Longhorn member by purchasing one of our NFT-gated, unique collections on our website when the public sale launches. Stay tuned for more details and announcements for the public sale by following our social media',
      '<a class="main-logo inline-block" target="_blank" href="https://twitter.com/LonghornMansion" ><img src="twitter.svg" style="width:30px;height:30px"></a>&nbsp;<a class="main-logo inline-block" target="_blank" href="https://discord.gg/cGJYpC7QnQ" ><img src="discord.svg" style="width:30px;height:30px"></a>&nbsp;<a class="main-logo inline-block" target="_blank" href="https://twitter.com/LonghornMansion" ><img src="instagram.svg" style="width:30px;height:30px"></a>',
    ],
  },
  {
    question: 'If I’m unable to purchase one of the NFTs upon public sale, how else can I become a member?',
    answer: [
      'LongHornMansion Club NFTs are exclusive to the initial launch. They will be continue to be available for purchase from a secondary market(i.e. OpenSea).',
    ],
  },
  {
    question: 'How much will the NFT cost?',
    answer: [
      'Initial price will be set at [TBD]. Final price could be anywhere between [TBD - TBD] plus gas fees.',
    ],
  },
  {
    question: 'Why [type of minting sale, ie: dutch action]?',
    answer: [
      'Given our limited mint number and potential interest, we want to be cognizant of high gas fees. With [type of minting sale], the thought is that transactions are spread out over time as people observe pricing changes, helping reduce competitive gas prices. Unlike a [regular type], purchasers do not pay a higher premium even if they mint at a higher price. The difference between the higher price paid and the last price are refunded, i.e. Minter pays [TBD] but the final price is [TBD] post minting. Minter who paid [TBD] receives a [TBD] refund.',
    ],
  },
  {
    question: 'How long am I a member for?',
    answer: [
      'You are a member for as long as you hold the LMC NFT. Membership will be transferred to the new owner of the NFT if sold (available to be exchanged via secondary market).',
    ],
  },
  {
    question: 'Can I attend LongHorn events if I do not have an NFT membership?',
    answer: [
      'Currently, all planned events in-person and virtually are exclusively held for LongHorn members and partners. We plan on expanding membership for our Season 2 NFT drop (see roadmap for details). Membership will continue to be available for individuals via the secondary market(i.e. OpenSea).',
    ],
  },
  {
    question: 'When do I receive the LongHorn Member merchandise and exclusive airdrops?',
    answer: [
      'You must be a member (have the NFT in your wallet) in the designated month that the merchandise is released.',
    ],
  },
  {
    question: 'Are there differences in membership benefits between presale, public sale, and reserve?',
    answer: ['No. All NFT holders will receive the same benefits, including the gifted NFT merchandise + airdrops.'],
  },
  {
    question: 'When can I mint the NFT?',
    answer: [
      'Our presale date will be on [TBD]. Stay tuned for announcements on Twitter and Discord for exact sale time windows and public sale info.',
    ],
  },
]
export default function Faq(props) {
  return (
    <div className={`faq-wrapper space-y-[32px] ${props.className ? props.className : ''}`}>
      {faqQuestions.map((faq, index) => {
        return (
          <Collapsible key={index} trigger={faq.question} transitionTime={200}>
            {faq.answer.map((item, index) => (
              <div className="relative pl-[16px]" key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </Collapsible>
        )
      })}
    </div>
  )
}
