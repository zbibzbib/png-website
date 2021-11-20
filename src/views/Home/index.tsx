import React, { useEffect, useState } from 'react';
import { PrimaryButton } from 'components/index';
import {
  Flex,
  Image,
  HStack,
  VStack,
  Box,
  Link,
  Heading,
  Text,
  List,
  ListItem,
  Center,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Icon
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import "assets/home/home.css";

import logoLight from 'assets/logo_light.png';
import twitter from 'assets/home/twitter.png';
import medium from 'assets/home/medium.png';
import telegram from 'assets/home/telegram.png';
import discord from 'assets/home/discord.png';
import bannerBg from 'assets/home/bg.png';
import bannerImg from 'assets/home/penuins.png';
import bonding from 'assets/home/bonding.png';
import staking from 'assets/home/staking.png';
import dex from 'assets/home/dex.png';
import { Duplex } from 'stream';
// import slide03 from 'assets/home/slide03.png';
// import item01 from 'assets/home/item01.png';
// import item02 from 'assets/home/item02.png';
// import item03 from 'assets/home/item03.png';
// import row01 from 'assets/home/row01.png';
// import row02 from 'assets/home/row02.png';
// import row03 from 'assets/home/row03.png';
// import areaBg from 'assets/home/area_bg.png';

export const Home: React.FC = () => {

  const [clientH, setClientH] = useState(0);

  useEffect(() => {
    const clientHeight = document.documentElement.clientHeight;
    setClientH(clientHeight);
  }, [])

  return (
    <Box>
      <Box maxW="100%" bg="#000" color="#fff" >
        <Flex p={{ base: "0 16px", md: "0 64px" }} h="96px" lineHeight="96px" alignItems="center" justifyContent="space-between">
          <Link isExternal flex={1}><Image src={logoLight} width="219px" /></Link>
          <HStack spacing={5} display={{ base: "none", sm: "flex" }}>
            <Box as={Link} isExternal href="https://twitter.com/png_fi"
              borderRadius="50%" w="32px" h="32px" display="flex" justifyContent="center" alignItems="center"
              background="linear-gradient(67.84deg, #6C9EFF -1.82%, #09CA65 36.96%, #7BD2A2 73.66%, #FBFE7F 106.59%)" className="feedback_links_up">
              <Image src={twitter} w="20px" />
            </Box>
            <Box as={Link} isExternal href="https://pngfi.medium.com"
              borderRadius="50%" w="32px" h="32px" display="flex" justifyContent="center" alignItems="center"
              background="linear-gradient(67.84deg, #6C9EFF -1.82%, #09CA65 36.96%, #7BD2A2 73.66%, #FBFE7F 106.59%)" className="feedback_links_up">
              <Image src={medium} w="20px" />
            </Box>
            <Box as={Link} isExternal href="https://t.me/pngfi_announcement"
              borderRadius="50%" w="32px" h="32px" display="flex" justifyContent="center" alignItems="center"
              background="linear-gradient(67.84deg, #6C9EFF -1.82%, #09CA65 36.96%, #7BD2A2 73.66%, #FBFE7F 106.59%)" className="feedback_links_up">
              <Image src={telegram} w="20px" />
            </Box>
            <Box as={Link} isExternal href="https://discord.gg/BGQGXKf3Dn"
              borderRadius="50%" w="32px" h="32px" display="flex" justifyContent="center" alignItems="center"
              background="linear-gradient(67.84deg, #6C9EFF -1.82%, #09CA65 36.96%, #7BD2A2 73.66%, #FBFE7F 106.59%)" className="feedback_links_up">
              <Image src={discord} w="20px" />
            </Box>
          </HStack>
          <Box as={Link} isExternal href="#"
            display={{ base: "none", lg: "block" }} color="#000" p="0 24px" fontWeight="bold" fontSize="16px"
            background="linear-gradient(67.84deg, #6C9EFF -1.82%, #09CA65 36.96%, #7BD2A2 73.66%, #FBFE7F 106.59%)"
            borderRadius="100px" lineHeight="48px" ml="32px"
            _hover={{ background: "linear-gradient(to left bottom, #6C9EFF, #09CA65 35%, #7BD2A2 70%, #FBFE7F)", textDecoration: "none" }} >Get started</Box>
        </Flex>
      </Box>

      <Box bg={`#1a1a1c url(${bannerBg}) no-repeat`} bgSize="100% 100%" w="100%">
        <Box background="linear-gradient(0deg, var(--chakra-colors-transparent), #000 110%)" display="flex" flexDirection="column" alignItems="center" >
          <Text fontWeight="700" textAlign="center" fontSize={{ base: "48px", md: "56px" }} lineHeight="56px" mt="85px"
            background="linear-gradient(67.84deg, #6C9EFF -1.82%, #09CA65 36.96%, #7BD2A2 73.66%, #FBFE7F 106.59%)" backgroundClip="text" textfillcolor="transparent" className="top_down" ><>Penguin Finance</></Text>
          <Text fontSize={{ base: "16px", md: "20px" }} lineHeight="20px" textAlign="center" fontWeight="600" mt="32px" className="top_down">Treasury management services for bonding and staking (🐧,🐧)</Text>
          <Box as={Link} isExternal href="#" color="#000" p="0 24px" fontWeight="bold" m="44px 0" fontSize="16px" lineHeight="48px" borderRadius="100px"
            background="linear-gradient(67.84deg, #6C9EFF -1.82%, #09CA65 36.96%, #7BD2A2 73.66%, #FBFE7F 106.59%)" className="top_down"
            _hover={{ background: "linear-gradient(to left bottom, #6C9EFF, #09CA65 35%, #7BD2A2 70%, #FBFE7F)", textDecoration: "none" }}>Get started</Box>
          <Image src={bannerImg} maxW={{ base: "100%", md: "630px" }} pb="140px" className="top_up" />
        </Box>
      </Box>



      <Box maxW="736px" margin="-140px auto 0 auto" >
        <Box borderRadius="8px" m="120px 16px 0 16px"
          backgroundImage="linear-gradient(67.84deg, #6C9EFF -1.82%, #09CA65 36.96%, #7BD2A2 73.66%, #FBFE7F 106.59%)" padding="1px" position="relative" >
          <Box borderRadius="8px" backgroundColor="#1a1a1c" textAlign={{ base: "center", md: "left" }}>
            <Box borderRadius="8px" p="48px" backgroundImage="linear-gradient(230.04deg, rgba(63, 189, 159, 0.23) 2.11%, rgba(48, 72, 46, 0) 102.63%)" >
              <Text fontSize="32px" lineHeight="32px" fontWeight="bold" mt={{ base: "32px", md: "0" }}>Bonding</Text>
              <Text fontSize="14px" lineHeight={{ base: "20px", md: "14px" }} mt="16px">Manages protocol-owned assets to diversify treasuries</Text>
              <Image src={bonding} display={{ base: "none", md: "block" }} w="250px" position="absolute" right="0px" top="-40px" />
              <Image src={bonding} display={{ base: "block", md: "none" }} w="250px" position="absolute" left="50%" ml="-125px" top="-80px" />
            </Box>
          </Box>
        </Box>

        <Box borderRadius="8px" m={{ base: "120px 16px 0 16px", md: "80px 16px 0 16px" }}
          backgroundImage="linear-gradient(67.84deg, #6C9EFF -1.82%, #09CA65 36.96%, #7BD2A2 73.66%, #FBFE7F 106.59%)" padding="1px" position="relative" >
          <Box borderRadius="8px" backgroundColor="#1a1a1c" textAlign={{ base: "center", md: "right" }}>
            <Box borderRadius="8px" p="48px" backgroundImage="linear-gradient(230.04deg, rgba(63, 189, 159, 0.23) 2.11%, rgba(48, 72, 46, 0) 102.63%)">
              <Text fontSize="32px" lineHeight="32px" fontWeight="bold" mt={{ base: "32px", md: "0" }}>Staking</Text>
              <Text fontSize="14px" lineHeight={{ base: "20px", md: "14px" }} mt="16px">Incentivizes long-term community participation</Text>
              <Image src={staking} display={{ base: "none", md: "block" }} w="250px" position="absolute" left="0px" top="-40px" />
              <Image src={staking} display={{ base: "block", md: "none" }} w="250px" position="absolute" left="50%" ml="-125px" top="-80px" />
            </Box>
          </Box>
        </Box>

        <Box borderRadius="8px" m={{ base: "120px 16px 0 16px", md: "80px 16px 0 16px" }}
          backgroundImage="linear-gradient(67.84deg, #6C9EFF -1.82%, #09CA65 36.96%, #7BD2A2 73.66%, #FBFE7F 106.59%)" padding="1px" position="relative" >
          <Box borderRadius="8px" backgroundColor="#1a1a1c" textAlign={{ base: "center", md: "left" }}>
            <Box borderRadius="8px" p="48px" backgroundImage="linear-gradient(230.04deg, rgba(63, 189, 159, 0.23) 2.11%, rgba(48, 72, 46, 0) 102.63%)">
              <Text fontSize="32px" lineHeight="32px" fontWeight="bold" mt={{ base: "32px", md: "0" }}>Dex</Text>
              <Text fontSize="14px" lineHeight={{ base: "20px", md: "14px" }} mt="16px">Provides trading pools that integrates with the Jupiter router</Text>
              <Image src={dex} display={{ base: "none", md: "block" }} w="250px" position="absolute" right="0px" top="-40px" />
              <Image src={dex} display={{ base: "block", md: "none" }} w="250px" position="absolute" left="50%" ml="-125px" top="-80px" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box mt={{ base: "59px", md: "144px" }} background="linear-gradient(67.84deg, #6C9EFF -1.82%, #09CA65 36.96%, #7BD2A2 73.66%, #FBFE7F 106.59%)">
        <Flex h="50px" alignItems="center" justifyContent="center">
          <HStack spacing={6}>
            <Link isExternal className="feedback_up" href="https://twitter.com/png_fi" ><Image src={twitter} w="20px" /></Link>
            <Link isExternal className="feedback_up" href="https://pngfi.medium.com"><Image src={medium} w="20px" /></Link>
            <Link isExternal className="feedback_up" href="https://t.me/pngfi_announcement"><Image src={telegram} w="20px" /></Link>
            <Link isExternal className="feedback_up" href="https://discord.gg/BGQGXKf3Dn"><Image src={discord} w="20px" /></Link>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}

