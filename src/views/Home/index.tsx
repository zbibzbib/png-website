import React from 'react';
import {
  Flex,
  Image,
  HStack,
  Box,
  Link,
  Text,
  Heading,
} from '@chakra-ui/react';
import {
  useSpring,
  animated,
  config
} from 'react-spring';

import logoLight from 'assets/logo_light.png';
import logoCircle from 'assets/logo_circle.png';
import twitter from 'assets/home/twitter.png';
import medium from 'assets/home/medium.png';
import telegram from 'assets/home/telegram.png';
import discord from 'assets/home/discord.png';
import bannerBg from 'assets/home/bg.png';
import bannerImg from 'assets/home/penuins.png';
import bonding from 'assets/home/bonding.png';
import staking from 'assets/home/staking.png';
import dex from 'assets/home/dex.png';

export const Home: React.FC = () => {

  const titleProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    opacity: 1,
    config: config.molasses,
    transform: 'translateY(0)'
  });

  const descriptionProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    opacity: 1,
    config: config.molasses,
    transform: 'translateY(0)'
  });

  const buttonProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    opacity: 1,
    config: config.molasses,
    transform: 'translateY(0)'
  });

  const boxProps = useSpring({
    from: { opacity: 0, scale: .98 },
    opacity: 1,
    scale: 1,
    config: config.molasses
  });

  return (
    <Box>
      <Box maxW="100%" bg="#000" color="#fff" >
        <Flex p={['0 16px', '0 64px']} h={['80px', '96px']} lineHeight={["50px", "96px"]} alignItems="center" justifyContent="space-between">
          <Link isExternal flex={1} pr="20px" display={{ base: "none", sm: "flex" }} ><Image src={logoLight} width="200px" /></Link>
          <Link isExternal flex={1} pr="20px" display={{ base: "flex", sm: "none" }} ><Image src={logoCircle} width="40px" /></Link>
          <HStack spacing={[3, 5]} >
            <Box as={Link} isExternal href="https://twitter.com/png_fi"
              transition="all 0.3s ease-in-out" _hover={{ transform: "translateY(-5px)" }}
              borderRadius="50%" w={['24px', '32px']} h={['24px', '32px']} display="flex" justifyContent="center" alignItems="center"
              background="linear-gradient(67.84deg, #6C9EFF -1.82%, #09CA65 36.96%, #7BD2A2 73.66%, #FBFE7F 106.59%)" className="feedback_links_up">
              <Image src={twitter} w={['14px', '20px']} />
            </Box>
            <Box as={Link} isExternal href="https://pngfi.medium.com"
              transition="all 0.3s ease-in-out" _hover={{ transform: "translateY(-5px)" }}
              borderRadius="50%" w={['24px', '32px']} h={['24px', '32px']} display="flex" justifyContent="center" alignItems="center"
              background="linear-gradient(67.84deg, #6C9EFF -1.82%, #09CA65 36.96%, #7BD2A2 73.66%, #FBFE7F 106.59%)" className="feedback_links_up">
              <Image src={medium} w={['14px', '20px']} />
            </Box>
            <Box as={Link} isExternal href="https://t.me/pngfi_announcement"
              transition="all 0.3s ease-in-out" _hover={{ transform: "translateY(-5px)" }}
              borderRadius="50%" w={['24px', '32px']} h={['24px', '32px']} display="flex" justifyContent="center" alignItems="center"
              background="linear-gradient(67.84deg, #6C9EFF -1.82%, #09CA65 36.96%, #7BD2A2 73.66%, #FBFE7F 106.59%)" className="feedback_links_up">
              <Image src={telegram} w={['14px', '20px']} />
            </Box>
            <Box as={Link} isExternal href="https://discord.gg/BGQGXKf3Dn"
              transition="all 0.3s ease-in-out" _hover={{ transform: "translateY(-5px)" }}
              borderRadius="50%" w={['24px', '32px']} h={['24px', '32px']} display="flex" justifyContent="center" alignItems="center"
              background="linear-gradient(67.84deg, #6C9EFF -1.82%, #09CA65 36.96%, #7BD2A2 73.66%, #FBFE7F 106.59%)" className="feedback_links_up">
              <Image src={discord} w={['14px', '20px']} />
            </Box>
          </HStack>
          <Box as={Link} isExternal href="https://app.png.fi"
            display={{ base: "none", lg: "block" }} color="#000" p="0 24px" fontWeight="bold" fontSize="16px"
            background="linear-gradient(67.84deg, #6C9EFF -1.82%, #09CA65 36.96%, #7BD2A2 73.66%, #FBFE7F 106.59%)"
            borderRadius="100px" lineHeight="48px" ml="32px"
            _hover={{ background: "linear-gradient(to left bottom, #6C9EFF, #09CA65 35%, #7BD2A2 70%, #FBFE7F)", textDecoration: "none" }} >Get started</Box>
        </Flex>
      </Box>

      <Box bg={`#1a1a1c url(${bannerBg}) no-repeat`} bgSize="100% 100%" w="100%">
        <Box background="linear-gradient(0deg, var(--chakra-colors-transparent), #000 110%)" display="flex" flexDirection="column" alignItems="center" >
          <animated.div style={titleProps}>
            <Heading textAlign="center"
              fontSize={['4xl', '6xl']} lineHeight="64px" mt={['53px', '85px']} p={['0 37px', 0]}
              background="linear-gradient(67.84deg, #6C9EFF -1.82%, #09CA65 36.96%, #7BD2A2 73.66%, #FBFE7F 106.59%)"
              backgroundClip="text" textfillcolor="transparent" >
              Penguin Finance
            </Heading>
          </animated.div>
          <animated.div style={descriptionProps}>
            <Text fontSize={['lg', 'xl']} lineHeight="30px" textAlign="center" fontWeight={600} mt={5} p={['0 37px', 0]}>
              Liquidity as a service, built on Solana (🐧,🐧)
            </Text>
          </animated.div>
          <animated.div style={buttonProps}>
            <Link isExternal href="https://app.png.fi" _hover={{ textDecoration: "none" }}>
              <Box color="#000" p="0 24px" fontWeight="bold" m="44px 0" fontSize="16px" lineHeight="48px" borderRadius="100px"
                background="linear-gradient(67.84deg, #6C9EFF -1.82%, #09CA65 36.96%, #7BD2A2 73.66%, #FBFE7F 106.59%)"
                _hover={{ background: "linear-gradient(to left bottom, #6C9EFF, #09CA65 35%, #7BD2A2 70%, #FBFE7F)", }}>Get started</Box>
            </Link>
          </animated.div>
          <animated.div style={{ ...boxProps, transform: boxProps.scale.to(s => `scale(${s})`) }}>
            <Box h={{ base: "300px", sm: "400px" }} >
              <Image src={bannerImg} maxW={['100%', '630px']} />
            </Box>
          </animated.div>
        </Box>
      </Box>

      <Box maxW="736px" margin="-140px auto 0 auto" >
        <Box borderRadius="8px" m="120px 16px 0 16px"
          backgroundImage="linear-gradient(67.84deg, #6C9EFF -1.82%, #09CA65 36.96%, #7BD2A2 73.66%, #FBFE7F 106.59%)" padding="1px" position="relative" >
          <Box borderRadius="8px" backgroundColor="#1a1a1c" textAlign={['center', 'left']}>
            <Box borderRadius="8px" p="48px" backgroundImage="linear-gradient(230.04deg, rgba(63, 189, 159, 0.23) 2.11%, rgba(48, 72, 46, 0) 102.63%)" >
              <Text fontSize="32px" lineHeight="32px" fontWeight="bold" mt={['32px', 0]}>Bonding</Text>
              <Text fontSize="14px" lineHeight={['20px', '14px']} mt="16px">Manages protocol-owned assets to diversify treasuries</Text>
              <Image src={bonding} display={['none', 'block']} w="250px" position="absolute" right="0px" top="-40px" />
              <Image src={bonding} display={['block', 'none']} w="250px" position="absolute" left="50%" ml="-125px" top="-80px" />
            </Box>
          </Box>
        </Box>

        <Box borderRadius="8px" m={['120px 16px 0 16px', '80px 16px 0 16px']}
          backgroundImage="linear-gradient(67.84deg, #6C9EFF -1.82%, #09CA65 36.96%, #7BD2A2 73.66%, #FBFE7F 106.59%)" padding="1px" position="relative" >
          <Box borderRadius="8px" backgroundColor="#1a1a1c" textAlign={['center', 'right']}>
            <Box borderRadius="8px" p="48px" backgroundImage="linear-gradient(230.04deg, rgba(63, 189, 159, 0.23) 2.11%, rgba(48, 72, 46, 0) 102.63%)">
              <Text fontSize="32px" lineHeight="32px" fontWeight="bold" mt={['32px', 0]}>Staking</Text>
              <Text fontSize="14px" lineHeight={['20px', '14px']} mt="16px">Incentivizes long-term community participation</Text>
              <Image src={staking} display={['none', 'block']} w="250px" position="absolute" left="0px" top="-40px" />
              <Image src={staking} display={['block', 'none']} w="250px" position="absolute" left="50%" ml="-125px" top="-80px" />
            </Box>
          </Box>
        </Box>

        <Box borderRadius="8px" m={['120px 16px 0 16px', '80px 16px 0 16px']}
          backgroundImage="linear-gradient(67.84deg, #6C9EFF -1.82%, #09CA65 36.96%, #7BD2A2 73.66%, #FBFE7F 106.59%)" padding="1px" position="relative" >
          <Box borderRadius="8px" backgroundColor="#1a1a1c" textAlign={['center', 'left']}>
            <Box borderRadius="8px" p="48px" backgroundImage="linear-gradient(230.04deg, rgba(63, 189, 159, 0.23) 2.11%, rgba(48, 72, 46, 0) 102.63%)">
              <Text fontSize="32px" lineHeight="32px" fontWeight="bold" mt={['32px', 0]}>Dex</Text>
              <Text fontSize="14px" lineHeight={['20px', '14px']} mt="16px">Provides trading pools that integrates with the Jupiter router</Text>
              <Image src={dex} display={['none', 'block']} w="250px" position="absolute" right="0px" top="-40px" />
              <Image src={dex} display={['block', 'none']} w="250px" position="absolute" left="50%" ml="-125px" top="-80px" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box mt={['59px', '144px']} background="linear-gradient(67.84deg, #6C9EFF -1.82%, #09CA65 36.96%, #7BD2A2 73.66%, #FBFE7F 106.59%)">
        <Flex h="50px" alignItems="center" justifyContent="center">
          <HStack spacing={6}>
            <Link isExternal className="feedback_up" href="https://twitter.com/png_fi"
              transition="all 0.3s ease-in-out" _hover={{ transform: " scale(1.2)" }} ><Image src={twitter} w="20px" /></Link>
            <Link isExternal className="feedback_up" href="https://pngfi.medium.com"
              transition="all 0.3s ease-in-out" _hover={{ transform: " scale(1.2)" }}><Image src={medium} w="20px" /></Link>
            <Link isExternal className="feedback_up" href="https://t.me/pngfi_announcement"
              transition="all 0.3s ease-in-out" _hover={{ transform: " scale(1.2)" }}><Image src={telegram} w="20px" /></Link>
            <Link isExternal className="feedback_up" href="https://discord.gg/BGQGXKf3Dn"
              transition="all 0.3s ease-in-out" _hover={{ transform: " scale(1.2)" }}><Image src={discord} w="20px" /></Link>
          </HStack>
        </Flex>
      </Box>
    </Box >
  );
}

