import React from 'react'
import Image from 'next/image'
import MemberShipCard from '@components/membership_card'
import DaoButton from '@components/dao_button'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import Diamond1 from '@src/assets/images/viewer/long-horn-chill-cowboy.jpg'
import Diamond2 from '@src/assets/images/viewer/long-horn-vr.jpg'
// import Diamond3 from '@src/assets/images/viewer/ring-3.JPG'

const membershipContent = {
  card11:
    'Exclusive, priority, and complimentary access to Longhorn Mansion member meet-ups, parties from IRL to web3-integrated mansion events powered by our Slipspace collaboration...',
  card12: 'Presale, skip the boring wait for new project drops and access to exclusive airdrops!',
  card21: 'Access future Longhorn Mansion events with innovative founders, investors, and builders',
  card22:
    'NFT-gated members-only discord chats with direct communication to founders, investors, and more. You can directly influence the direction of the project.',
  card31: 'Uniquely minted Longhorn Mansion Club NFT',
  card32: 'Secure a foot in the door to future LMC initiatives (potential LongHorn Labs initiative and community-powered DAO)',
  card33:
    'Exclusive, and uniquely designed and released LMC merchandise, airdrops, and more...',
}

const membershipContentFinal = {
  content:
    'Long Horn Mansion Club holders gain access to a lot more than what average web3 projects offer. We go beyond simple airdrops, NFT collections, and IRL meetups. Our unique branding goes into partnerships. Both web2 and web3. Our bold risks are your rewards. Stay tuned. Long live Long Horns.',
}

export default function MembershipCardViewer(props) {
  return (
    <div
      className={`membership-card-viewer xl:w-[1200px] xl:h-[920px] w-[360px] h-[2180px] mt-[80px] ${props.className}`}
    >
      <span className="w-[2px] h-[50px] bg-dark_gold absolute xl:top-[232px] xl:left-[180px] top-[232px] left-[180px]" />
      <span className="w-[2px] xl:h-[182px] xl:bottom-[-115px] h-[50px] bg-dark_gold absolute xl:top-[369px] xl:left-[180px]  top-[370px] left-[180px]" />
      {/* first column */}
      <MemberShipCard
        className="xl:top-0 xl:left-0 top-0 left-0 hover:top-[-30px] h-[232px] hover:h-[292px]"
        content={membershipContent.card11}
      ></MemberShipCard>

      <MemberShipCard
        className="xl:top-[282px] xl:left-0 top-[282px] left-0 hover:top-[252px] h-[88px] hover:h-[142px]"
        content={membershipContent.card12}
      ></MemberShipCard>

      {/* second column */}
      <span className="w-[2px] xl:h-[70px] h-[50px] bg-dark_gold absolute xl:top-[112px] xl:left-[588px] top-[532px] left-[180px]" />
      <span className="w-[2px] xl:h-[212px] xl:bottom-[-140px] h-[50px] bg-dark_gold absolute xl:top-[341px] xl:left-[588px] top-[742px] left-[180px]" />
      <MemberShipCard
        className="xl:top-0 xl:left-[410px] top-[420px] left-0 xl:hover:top-[-30px] hover:top-[390px] h-[112px] hover:h-[172px]"
        content={membershipContent.card21}
      ></MemberShipCard>
      <span className="w-[50px] h-[2px] bg-dark_gold absolute top-[40px] xl:left-[360px] left-[-500px]" />
      <span className="w-[50px] h-[2px] bg-dark_gold absolute top-[40px] xl:left-[770px] left-[-500px]" />

      <MemberShipCard
        className="xl:top-[182px] xl:left-[410px] top-[582px] left-0 xl:hover:top-[150px] hover:top-[552px] h-[160px] hover:h-[210px]"
        content={membershipContent.card22}
      ></MemberShipCard>
      <span className="w-[50px] h-[2px] bg-dark_gold absolute top-[320px] xl:left-[360px] left-[-500px]" />
      <span className="w-[50px] h-[2px] bg-dark_gold absolute top-[330px] xl:left-[770px] left-[-500px]" />

      {/* third column */}
      <span className="w-[2px] xl:h-[60px] h-[50px] bg-dark_gold absolute xl:top-[80px] xl:right-[192px] top-[872px] right-[180px]" />
      <span className="w-[2px] h-[50px] bg-dark_gold absolute xl:top-[275px] xl:right-[192px] top-[1058px] right-[180px]" />
      <span className="w-[2px] xl:h-[50px] h-[50px] bg-dark_gold absolute xl:top-[504px]  xl:right-[192px] top-[1291px] right-[180px]" />
      <MemberShipCard
        className="xl:top-0 xl:left-[820px] top-[792px] left-0 xl:hover:top-[-30px] hover:top-[762px] h-[80px] hover:h-[140px]"
        content={membershipContent.card31}
      ></MemberShipCard>
      <MemberShipCard
        className="xl:top-[138px] xl:left-[820px] top-[922px] left-0 xl:hover:top-[108px] hover:top-[892px] h-[136px] hover:h-[196px]"
        content={membershipContent.card32}
      ></MemberShipCard>
      <MemberShipCard
        className="xl:top-[324px] xl:left-[820px] top-[1108px] left-0 xl:hover:top-[294px] hover:top-[1078px] h-[184px] hover:h-[244px]"
        content={membershipContent.card33}
      ></MemberShipCard>

      <div className="xl:top-[554px] xl:left-0 top-[1770px] left-0 xl:w-[360px] w-[340px] absolute">
        <div className="carousel-background" />
        <Carousel showThumbs={false} showArrows={true} showStatus={false} emulateTouch={true} infiniteLoop={true}>
          <div>
            <Image alt="" src={Diamond1} layout="responsive" />
          </div>
          <div>
            <Image alt="" src={Diamond2} layout="responsive" />
          </div>
          {/* <div>
            <Image alt="" src={Diamond3} layout="responsive" />
          </div> */}
        </Carousel>
      </div>
      {/* <span className="w-[2px] h-[70px] bg-dark_gold absolute top-[1196px] left-[180px] xl:hidden" /> */}
      <MemberShipCard
        className="xl:top-[554px] xl:left-[410px] top-[1344px] left-0 xl:w-[770px] xl:hover:top-[524px] hover:top-[1304px] xl:h-[184px] xl:hover:h-[244px] h-[376px] hover:h-[436px]"
        content={membershipContentFinal.content}
      />
      <DaoButton
        className="absolute xl:top-[747px] xl:left-[595px] top-[2180px] left-[15px] w-[330px] xl:w-[410] mt-[50px] h-[60px] z-[1]"
        onClick={() => (props.onMintBtnEvent ? props.onMintBtnEvent() : '')}
      >
        JOIN THE CLUB
      </DaoButton>
    </div>
  )
}
