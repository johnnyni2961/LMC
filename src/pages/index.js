import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import SectionInfo from '@src/components/section_info'
import DaoButton from '@src/components/dao_button'
import NFTCard from '@src/components/nft_card'
import MembershipCardViewer from '@src/components/membership_card_viewer'
import Image from 'next/image'
import Faq from '@src/components/faq'
import AllocationCard from '@src/components/allocation_card'
import DaoIconButton from '@src/components/dao_icon_btn'
import Roadmap from '@src/components/roadmap'
import ImgLink from '@components/img_link'
import Modal from 'react-modal'
import { getCurrentSupply, getMaxSupply } from '@src/utils/helpers'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { postUrl } from '@src/common'
import Signup from '@src/components/signup/signup'
import SignupOnDialog from '@src/components/signup/signup_dialog'

import ImgLogo from '@src/assets/images/logo.png'
import InstagramImg from '@src/assets/social_links/instagram.svg'
import DiscordImg from '@src/assets/social_links/discord.svg'
import TwitterImg from '@src/assets/social_links/twitter.svg'
import TwitterWhiteImg from '@src/assets/social_links/twitter_white.svg'

import RoadmapBackground from '@src/assets/images/roadmap_bg.png'
import MembershipBackground from '@src/assets/images/background.jpg'
import CofounderBackground from '@src/assets/images/cofounder_bg.png'
import FaqBackground from '@src/assets/images/video_bg.png'
import CommunityBackground from '@src/assets/images/community-background.jpg'

import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CountDown from '@src/components/countdown'

const CaptionInfo = {
  welcome: {
    caption: 'WELCOME TO Long Horn Mansion Club',
    content:
      "The Long Horn Mansion Club is a community-driven, utility-oriented, and longhorn-designed community. LMC's mission is to launch a collective western brand to engineer a creative and self-powered community through IRL parties in mansions, web3 mansion meetups, spaces to innovate personal pursuits, and most importantly, bring together longhorn holders.",
  },
  membership: {
    caption: 'CLUB MEMBERSHIP',
    content1:
      'The Long Horn Mansion Club community is a highly selective and community-based collective project seeking to empower web3 through unique branding and developing new initiatives within the web3 space.',
    content2: ' As a Longhorn member, you will gain exclusive access to:',
    // content3: ' See FAQ tab to learn more on how to become a member.',
  },
  roadmap: {
    caption: 'ROADMAP',
  },
  team: {
    caption1: 'LMC FOUNDERS',
    caption2: 'LMC BULLS -- CORE BUILDERS',
    caption3: 'DOPE MARKETING STUFF',
    caption4: 'COLLABS/PARTNERSHIPS',
  },
  faq: {
    caption: 'FREQUENTLY ASKED QUESTIONS',
  },
  community: {
    caption1: 'LONGHORN VALUES',
    caption2: 'JOIN THE WEB3 CLUB TODAY',
  },
}

const allocationCard = {
  title: 'MINT Allocation',
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

export default function Index() {
  const [isOpenDlg, setIsOpenDlg] = useState(false)
  const [maxSupply, setMaxSupply] = useState(0)
  const [currentSupply, setCurrentSupply] = useState(0)
  const router = useRouter()
  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = isOpenDlg ? 'hidden' : 'auto'
  }, [isOpenDlg])

  const getNFTInfo = async () => {
    // const max = await getMaxSupply()
    const current = await getCurrentSupply()
    // setMaxSupply(parseInt(max))
    setCurrentSupply(current)
  }

  useEffect(() => {
    getNFTInfo()
  }, [])

  return (
    <>
      <div className="container mx-auto  md:flex justify-end space-x-[10px] xl:pr-[50px] pr-[10px] pt-[120px] hidden">
        <ImgLink img={TwitterImg} width={30} height={30} target="_blank" path="https://twitter.com/LonghornMansion" />
        <ImgLink
          className="bg-gradient-to-r from-medium_gold to-darkest_gold rounded-full p-5"
          img={DiscordImg}
          target="_blank"
          path="https://discord.gg/cGJYpC7QnQ"
          width={43}
          height={33}
        />
        <ImgLink
          img={InstagramImg}
          width={30}
          height={30}
          path="https://twitter.com/LonghornMansion"
          target="_blank"
        />
      </div>
      <section className="container mx-auto welcome-section center-container md:pt-[20px] pt-[120px]">
        <div className="md:flex md:space-x-[50px]">
          <div className="basis-1/2 flex justify-center flex-col items-center md:items-stretch">
            <div className={`section-info-wrapper mb-[50px]`}>
              <div className="caption-wrapper mb-[28px]">
                <h2 className="caption-left lightest_gold">{CaptionInfo['welcome']['caption']}</h2>
              </div>
              <p>{CaptionInfo['welcome']['content']}</p>
            </div>
            <DaoButton
              className="h-[60px] relative z-[1]"
              width="280px"
              onClick={() => {
                router.push('/nft')
              }}
            >
              MINT YOUR NFT
            </DaoButton>
          </div>

          <div
            className="cursor-pointer basis-1/2 justify-center md:mt-[0px] mt-[20px] opacity-80"
            style={{ zIndex: 1 }}
          >
            <NFTCard
              className="nft-card-shadow z-[1]"
              width={690}
              height={388}
              maxSupply={maxSupply}
              currentSupply={currentSupply}
            ></NFTCard>
          </div>
        </div>
      </section>

      <section id="membership" className="membership-section pt-[110px] relative">
        <div className="background">
          <Image alt="" src={MembershipBackground} layout="fill" objectFit="scale-down" objectPosition="right" />
        </div>

        <div className="container mx-auto">
          <div className="center-container">
            <SectionInfo className="sm:m-0 m-[-10px]" info_title={CaptionInfo['membership']['caption']}>
              <p className="mb-[36px]">{CaptionInfo['membership']['content1']}</p>
              <p>{CaptionInfo['membership']['content2']}</p>
              {/* <p>{CaptionInfo['membership']['content3']}</p> */}
            </SectionInfo>
          </div>
          <MembershipCardViewer className="mx-auto relative" onMintBtnEvent={() => router.push('/nft')} />
        </div>
      </section>
      <section id="roadmap" className="roadmap-section pt-[160px] absolute">
        <div className="background">
          <Image alt="" src={RoadmapBackground} layout="fill" />
        </div>
        <div className="center mx-auto relative z-2">
          <SectionInfo className="center-container" info_title={CaptionInfo['roadmap']['caption']}></SectionInfo>
          <Roadmap className="center-container mt-[77px]" />
        </div>
      </section>
      <section id="team" className="team-section mt-[200px] relative">
        <div className="background">
          <Image alt="" src={CofounderBackground} layout="fill" objectFit="scale-down" objectPosition="right" />
        </div>
        <div className="center-container">
          <div className="text-center">
            <Image src={ImgLogo} path={'/'} alt="Golden Dao logo" width={250} height={250} />
          </div>
          <SectionInfo className="mt-[80px] space-y-[20px]" info_title={CaptionInfo['team']['caption1']}>
            <div className="founder-info text-center lg:space-y-[50px] space-y-[20px] pt-[20px]">
              <p>Secret Rancher</p>
              <p>Secret Rancher</p>
              <p>Secret Rancher</p>
            </div>
          </SectionInfo>
          <SectionInfo className="mt-[170px]" info_title={CaptionInfo['team']['caption2']}>
            <div className="artists-info grid md:grid-cols-1 xl:grid-cols-3 pt-[20px] lg:gap-[50px] gap-[20px]">
              <p className="text-center">Secret Rancher</p>
              <p className="text-center">Secret Rancher</p>
              <p className="text-center">Secret Rancher</p>
              <p className="text-center">Secret Rancher</p>
              <p className="text-center">Secret Rancher</p>
              <p className="text-center">Secret Rancher</p>
              <p className="text-center">Secret Rancher</p>
            </div>
          </SectionInfo>
          <SectionInfo className="mt-[170px]" info_title={CaptionInfo['team']['caption4']}>
            <div className="artists-info grid md:grid-cols-1 xl:grid-cols-3 pt-[20px] lg:gap-[50px] gap-[20px]">
              <p className="text-center">Secret Rancher</p>
              <p className="text-center">Secret Rancher</p>
              <p className="text-center">Secret Rancher</p>
              <p className="text-center">Secret Rancher</p>
              <p className="text-center">Secret Rancher</p>
              <p className="text-center">Secret Rancher</p>
              <p className="text-center">Secret Rancher</p>
              <p className="text-center">Secret Rancher</p>
            </div>
          </SectionInfo>
        </div>
      </section>
      <section className="message-section mt-[170px] relative">
        <div className="center-container">
          <SectionInfo className="mt-[170px]" info_title={CaptionInfo['team']['caption3']}>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p> */}
          </SectionInfo>

          <div className="w-full mt-[60px] relative z-[1]">
            {/* <iframe
              className="mx-auto"
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/cTsEzmFamZ8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
            <video width="100%" controls>
              <source src="src/assets/images/marketing-stuff.mp4" type="video/mp4" />
              <source src="src/assets/images/marketing-stuff.mp4" type="video/ogg" />
              <img src="thumbnail.png" />
              Your browser does not support HTML video.
            </video>
          </div>
        </div>
      </section>
      <section id="faq" className="faq-section pt-[170px] relative">
        <div className="background">
          <Image alt="" src={FaqBackground} layout="fill" objectFit="scale-down" objectPosition="left" />
        </div>
        <div className="center-container">
          <SectionInfo info_title={CaptionInfo['faq']['caption']}></SectionInfo>
          <Faq className="pt-[40px] pr-[20px]" />
          <AllocationCard title={allocationCard.title} className="mt-[100px] relative">
            <div>
              ● Public Sale:
              <div className="ml-[16px]">
                <p>○ General Public mint</p>
                <p>
                  <b>○ Mint total: </b>TBD
                </p>
                <p>
                  <b>○ Priced: </b>TBD
                </p>
                <p>
                  <b>○ Sale Date: </b>Week of TBD
                </p>
              </div>
            </div>
            <br />
            <div>
              ● Presale:
              <div className="ml-[16px]">
                <p>
                  ○ Saved for individuals who show commitment (via social media, discord engagement, or other methods)
                  to LongHornMansion initiatives + mission
                </p>
                <p>
                  <b>○ Mint total: </b>TBD
                </p>
                <p>
                  <b>○ Priced: </b>TBD
                </p>
                <p>
                  <b>○ Sale Date: </b>Week of TBD
                </p>
              </div>
            </div>
            <br />
            <div>
              ● Reserves:
              <div className="ml-[16px]">
                <p>
                  ○ Reserved for individuals, partners who show long-term commitment to LongHornMansion initiatives + mission
                </p>
                <p>
                  <b>○ Mint total: </b>TBD
                </p>
              </div>
            </div>
          </AllocationCard>
        </div>
      </section>
      <section id="community" className="community-section pt-[95px] relative">
        <div className="background">
          <Image alt="" src={CommunityBackground} layout="fill" />
        </div>
        <div className="center-container relative">
          <SectionInfo info_title={CaptionInfo['community']['caption1']} className="text-center">
            <p>The LongHornMansion community values are built upon expressing the unique branding of Western culture and creativity:</p>
            <div className="dao-font-bold text-lightest_gold space-y-[45px] mt-[65px]">
              <p>Democratic-community</p>
              <p>Unique Branding</p>
              <p>Bridging Web2 and Web3</p>
              <p>Developing the world of tomorrow in Web3</p>
              <p>
                Pushing collaborations between initiatives and projects that impact the public community
              </p>
              <p>Creativity and Innovation</p>
              <p className="pt-[45px]">
                See &nbsp;
                <a
                  href="https://twitter.com/LonghornMansion"
                  className="underline"
                >
                  here
                </a>
                &nbsp; to learn more.
              </p>
            </div>
          </SectionInfo>
          <SectionInfo className="mt-[180px]" info_title={CaptionInfo['community']['caption2']} />
          <div className="flex justify-center pt-[20px]">
            <DaoIconButton
              width="580px"
              className="h-[60px]"
              onClick={e => window.open('https://discord.gg/cGJYpC7QnQ', '_blank')}
            >
              <Image className="mt-[5px]" src={DiscordImg} alt="Golden Dao logo" width={25} height={25} />
              <span className="mt-[15px] ml-[8px] text-[19px]">JOIN LMC DISCORD</span>
            </DaoIconButton>
          </div>
          <div className="flex justify-center mt-[50px]">
            <MailchimpSubscribe
              url={postUrl}
              render={({ subscribe, status, message }) => (
                <Signup
                  status={status}
                  message={message}
                  onValidated={formdata => {
                    subscribe(formdata)
                  }}
                />
              )}
            />
          </div>
        </div>
      </section>

      <Modal
        isOpen={isOpenDlg}
        style={customStyles}
        ariaHideApp={false}
        onRequestClose={() => setIsOpenDlg(false)}
        shouldCloseOnOverlayClick={true}
      >
        <div className="modal-wrapper grid md:grid-cols-2 grid-cols-1 2xl:w-[1240px] lg:w-[1000px] md:w-[800px] w-[400px] h-[auto] max-h-screen">
          <div className="bg-white 2xl:p-[40px] p-[20px] md:h-[100%] h-[auto]">
            <h4 className="modal-title 2xl:text-[24px] lg:text-[18px]">Minting Opens TBD</h4>
            <p className="2xl:text-[18px] md:text-[15px] text-[14px]">
              LMC Content.... TBD... Stay tuned fellow long horns...
            </p>
            <CountDown />
            <DaoIconButton
              className="2xl:w-[310px] md:w-[310px] 2xl:h-[60px] sm:h-[40px] h-[40px]"
              onClick={() => window.open('https://discord.gg/cGJYpC7QnQ')}
            >
              <Image className="mt-[5px]" src={DiscordImg} alt="Golden Dao logo" width={25} height={25} />
              <span className="2xl:mt-[15px] mt-[6px] 2xl:ml-[8px] lg:ml-[4px] text-[19px]">JOIN DISCORD</span>
            </DaoIconButton>

            <DaoIconButton
              className="2xl:w-[370px] md:w-[340px] lg:mt-[20px] mt-[10px] 2xl:h-[60px] sm:h-[40px] h-[40px]"
              onClick={() => window.open('https://twitter.com/LonghornMansion')}
            >
              <Image className="mt-[5px]" src={TwitterWhiteImg} alt="Golden Dao logo" width={25} height={25} />
              <span className="2xl:mt-[15px] mt-[6px] 2xl:ml-[8px] lg:ml-[4px] text-[19px]">FOLLOW ON TWITTER</span>
            </DaoIconButton>
            <div className="flex 2xl:mt-[20px] lg:mt-[20px] mt-[10px]">
              <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                  <SignupOnDialog
                    status={status}
                    message={message}
                    onValidated={formdata => {
                      subscribe(formdata)
                    }}
                  />
                )}
              />
            </div>
          </div>
          <div className="bg-dao_dlg_color flex items-center justify-center md:h-[100%] h-[400px]">
            <FontAwesomeIcon
              icon={faClose}
              className="p-[16px] absolute top-[6px] right-[12px] md:text-white cursor-pointer text-black z-10"
              size="2x"
              onClick={() => setIsOpenDlg(false)}
            />
            <div className="lg:p-[50px] p-[24px] w-full h-full flex justify-center items-center">
              <div className="w-full h-auto relative">
                <Image alt="" path={'/'} src={ImgLogo} layout="responsive" objectFit="cover" />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
