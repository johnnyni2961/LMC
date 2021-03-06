import React, { useCallback, useEffect, useState } from 'react'
import ImgLink from '@components/img_link'
import NavWrapper from '@components/header/nav_wrapper'
import NavItem from '@components/header/nav_item'
import { providers } from 'ethers'
import { useSelector, useDispatch } from 'react-redux'
import { setWeb3Provider, setAddress, resetAddress } from '@src/redux/actions/web3Actions'
import web3Modal from '@src/web3'
import LogoImg from '@src/assets/images/logo.png'
import LogoSmallImg from '@src/assets/images/logo.png'

import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import InstagramImg from '@src/assets/social_links/instagram.svg'
import DiscordImg from '@src/assets/social_links/discord1.svg'
import TwitterImg from '@src/assets/social_links/twitter.svg'

const Header = props => {
  let [fixed, setFixed] = useState('')
  let [menuOpen, setMenuOpen] = useState(false)
  let offsetTop = 0
  const walletState = useSelector(store => store.wallet)

  const { provider, web3Provider, address, chainId } = walletState
  const dispatch = useDispatch()

  function checkMenu() {
    offsetTop = window?.pageYOffset
    if (offsetTop > 250) {
      if (fixed !== 'fixed animation') {
        setFixed('fixed animation')
      }
    } else if (offsetTop > 180) {
      if (fixed !== 'fixed') setFixed('fixed')
    } else if (offsetTop > 10) {
      setFixed('')
    }
  }

  function onMenuClicked() {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    document.addEventListener('scroll', checkMenu)
    return () => {
      document.removeEventListener('scroll', checkMenu)
    }
  }, [])

  const connect = useCallback(async function () {
    try {
      // This is the initial `provider` that is returned when
      // using web3Modal to connect. Can be MetaMask or WalletConnect.
      const provider = await web3Modal.connect()

      // We plug the initial `provider` into ethers.js and get back
      // a Web3Provider. This will add on methods from ethers.js and
      // event listeners such as `.on()` will be different.
      const web3Provider = new providers.Web3Provider(provider)

      const signer = web3Provider.getSigner()
      const address = await signer.getAddress()

      const network = await web3Provider.getNetwork()
      dispatch(setWeb3Provider({ provider, web3Provider, address, chainId: network.chainId }))
    } catch (e) {
      console.log('Error on Connection wallet')
    }
  }, [])

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider()
      if (provider?.disconnect && typeof provider.disconnect === 'function') {
        await provider.disconnect()
      }
      dispatch(resetAddress())
    },
    [provider]
  )

  // A `provider` should come with EIP-1193 events. We'll listen for those events
  // here so that when a user switches accounts or networks, we can update the
  // local React state with that new information.
  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = accounts => {
        dispatch(setAddress(accounts[0]))
      }

      // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
      const handleChainChanged = _hexChainId => {
        window.location.reload()
      }

      const handleDisconnect = () => {
        console.log('disconnect', error)
        disconnect()
      }

      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged)
      provider.on('disconnect', handleDisconnect)
      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }
  }, [provider, disconnect])

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect()
    }
  }, [connect])

  return (
    <header className={`main_header ${fixed}`}>
      <div className="w-full">
        <div className="container wallet-connection-wrapper mx-auto flex justify-end font-bold text-lightest_gold xl:pr-[50px] pr-[10px] h-[50px] items-center">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              return web3Provider ? disconnect() : connect()
            }}
          >
            {web3Provider ? (
              <>
                <span className="w-[10px] h-[10px] rounded-full bg-dao_green mr-[8px]"></span>WALLET CONNECT: XXXX
                {address.slice(-4)}
              </>
            ) : (
              'CONNECT WALLET'
            )}

            <FontAwesomeIcon icon={faCreditCard} className="ml-[16px] text-[27px]" />
          </div>
        </div>
        <div className="nav-menu-wrapper">
          <div className="container mx-auto bg-gray-100 relative">
            <div className="logo-big-img absolute xl:left-[50px] left-[10px] top-[-35px]">
              <ImgLink img={LogoImg} path={'/'} width={130} height={150} />
            </div>

            <div className="logo-small-img absolute left-[10px] top-[10px]" style={{ zIndex: 1 }}>
              <ImgLink img={LogoSmallImg} path={'/'} width={30} height={30} />
            </div>

            <div className="w-full flex absolute left-[0] top-[12px] space-x-[16px] items-center justify-center md:hidden">
              <ImgLink
                img={TwitterImg}
                width={30}
                height={30}
                target="_blank"
                path="https://twitter.com/LonghornMansion"
              />
              <ImgLink img={DiscordImg} path="https://discord.gg/cGJYpC7QnQ" target="_blank" width={33} height={33} />
              <ImgLink
                img={InstagramImg}
                width={30}
                height={30}
                path="https://twitter.com/LonghornMansion"
                target="_blank"
              />
            </div>

            <div className={`mobile-button ${menuOpen ? 'active' : ''}`} onClick={onMenuClicked}>
              <span></span>
            </div>
            <NavWrapper className={`${menuOpen ? 'show-menu' : ''} xl:pr-[50px] flex justify-end`}>
              <NavItem onClick={() => onMenuClicked()} name="MEMBERSHIP" href="/#membership" />
              <NavItem onClick={() => onMenuClicked()} name="ROADMAP" href="#roadmap" />
              <NavItem onClick={() => onMenuClicked()} name="TEAM" href="#team" />
              <NavItem onClick={() => onMenuClicked()} name="FAQ" href="#faq" />
              <NavItem className="pr-[0px]" onClick={() => onMenuClicked()} name="COMMUNITY VALUES" href="#community" />
            </NavWrapper>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
