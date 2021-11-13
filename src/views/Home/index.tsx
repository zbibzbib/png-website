import React, { useEffect, useState } from 'react';
import { Nav, PrimaryButton } from 'components/index';
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
  MenuDivider,
  IconButton,
  Icon
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import "assets/home/home.css";

import logoLight from 'assets/logo_light.png';
import bannerBg from 'assets/home/banner_bg.png';
import homeBanner01 from 'assets/home/home_banner01.png';
import homeBanner02 from 'assets/home/home_banner02.png';
import homeBanner03 from 'assets/home/home_banner03.png';
import item01 from 'assets/home/item01.png';
import item02 from 'assets/home/item02.png';
import item03 from 'assets/home/item03.png';
import row01 from 'assets/home/row01.png';
import row02 from 'assets/home/row02.png';
import row03 from 'assets/home/row03.png';
import areaBg from 'assets/home/area_bg.png';
import bottomFb from 'assets/home/bottom_fb.png';
import bottomT from 'assets/home/bottom_t.png';
import bottomO from 'assets/home/bottom_o.png';

export const Home: React.FC = () => {

  const [activeItem, setActiveItem] = useState(1);
  const [clientH, setClientH] = useState(0);

  const onItemChange = (item) => {
    setActiveItem(item);
  }

  useEffect(() => {
    const clientHeight = document.documentElement.clientHeight;
    setClientH(clientHeight);
  }, [])

  return (
    <Box maxW="100%" bg="#1B1A1C" color="#fff" >
      <Box bg={`#09090b url(${bannerBg}) left top no-repeat`} bgSize="100% 100%">
        <Box w={["100%", 1200]} margin="0 auto"  >

          <Flex p="50px 10px" alignItems="center" justifyContent="space-between" h="50px">
            <Box flex={1} >
              <Link><Image src={logoLight} width="140px" /></Link>
            </Box>
            <HStack display={{ base: 'none', md: 'flex' }} spacing={10}>
              <Nav to="/swap" active={true} title="Blog" />
              <Nav to="/pools" title="Twitter" />
              <Nav to="/farms" title="Telegram" />
            </HStack>

            <Box display={{ base: 'block', md: 'none' }}>
              <Menu colorScheme="gray" >
                <MenuButton  as={IconButton} aria-label="menu" variant="unstyled">
                  <Icon w={6} h={6} as={FiMenu} />
                </MenuButton>
                <MenuList>
                  <MenuItem to="/swap">
                    Swap
                  </MenuItem>
                  <MenuItem as={"a"} href="/pools">
                    Pools
                  </MenuItem>
                  <MenuItem  to="/farms">
                    Farms
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Flex>

          <Center h={clientH - 100}>
            <Flex display={{ base: 'none', md: 'flex' }} w={["100%", 1200]} alignItems="center" justifyContent="space-between" overflow="hidden">
              <Box w={["100%", "500px"]} className="top_left" p="0 10px">
                <Heading as="h1" size="4xl" isTruncated>PENGUIN</Heading>
                <Text fontSize="4xl" fontWeight="bold">One-stop DeFi application platform</Text>
                <Text color="gray" mt="30px" fontSize="lg">
                  Penguin is the automatic market-making protocol based on Solana.
                </Text>
                <PrimaryButton mt="60px" size="lg">Launch App</PrimaryButton>
              </Box>
              <Image src={homeBanner01} width="500px" className="top_right" />
            </Flex>
            <Box display={{ base: 'block', md: 'none' }} w={["100%", 1200]} alignItems="center" justifyContent="space-between" overflow="hidden" textAlign="center">
              <Box opacity="0.3">
                <Image src={homeBanner01} width="500px" className="top_right" position="absolute" ></Image>
              </Box>

              <Box w={["100%", "500px"]} className="top_left" p="0 10px" >
                <Heading as="h1" size="4xl" isTruncated>PENGUIN</Heading>
                <Text fontSize="4xl" fontWeight="bold">One-stop DeFi application platform</Text>
                <Text color="gray" mt="30px" fontSize="lg">
                Penguin is the automatic market-making protocol based on Solana.
                </Text>
                <PrimaryButton mt="60px" size="lg">Launch App</PrimaryButton>
              </Box>
            </Box>
          </Center>
        </Box>
      </Box >

      <Box w="100%" h={clientH} margin="0 auto" padding="0 10px" textAlign="center" position="relative" >
        <Box p="100px 0">
          <Text fontSize="4xl" fontWeight="bold">PENGUIN swap</Text>
          <Text color="gray" mt="20px">
          PENGUIN adopts the mechanism of Automatic Market Maker (AMM) and aims to achieve self-driven liquidity creation.
          </Text>
        </Box>
        <Image src={areaBg} position="absolute" right="0" top={["350px", "220px"]} w="50%" h={["auto", "280px"]} />
        <Image src={homeBanner02} width="1200px" margin="0 auto" position="relative" />
      </Box>

      <Box bg="#151A1D">
        <Flex w={["100%", 1200]} margin="0 auto" justifyContent="space-between" p={["0 10px 100px 0", "250px 0"]} >
          <Image src={activeItem === 1 ? homeBanner03 : activeItem === 2 ? homeBanner02 : homeBanner01} width={[375, 500]} />
          <Box ml="100px" display={{ base: 'none', md: 'block' }} >
            <Box p="20px 0">
              <Text fontSize="4xl" fontWeight="bold">Safe fast and less slippage</Text>
              <Text color="gray" fontSize="xl" p="40px 0">
                leading currency asset exchange on solana
              </Text>
            </Box>

            <List spacing={30}>
              <ListItem cursor="pointer" p="2px" borderRadius="20px" bgImg={activeItem === 1 ? "linear-gradient(270deg, #333, #1be068)" : '#1f2326'}
                onClick={() => onItemChange(1)}   >
                <Flex alignItems="center" justifyContent="flex-start" p="30px" bg="#1f2326" borderRadius="20px" >
                  <Image src={item01} width="50px" />
                  <Text ml="20px" fontSize="xl" color="gray" lineHeight={1}>In Solana, use a far more granular verifiable delay function, a SHA 256 hash chain, to checkpoint the ledger and coordinate consensus.</Text>
                </Flex>
              </ListItem>

              <ListItem cursor="pointer" p="2px" borderRadius="20px" bgImg={activeItem === 2 ? "linear-gradient(270deg, #333, #1be068)" : '#1f2326'}
                onClick={() => onItemChange(2)}   >
                <Flex alignItems="center" justifyContent="flex-start" p="30px" bg="#1f2326" borderRadius="20px" >
                  <Image src={item02} width="50px" />
                  <Text ml="20px" fontSize="xl" color="gray">The resulting cluster wouldn't be just 10 times faster, or a 100 times, or a 1,000 times, but 10,000 times faster, right out of the gate!</Text>
                </Flex>
              </ListItem>

              <ListItem cursor="pointer" p="2px" borderRadius="20px" bgImg={activeItem === 3 ? "linear-gradient(270deg, #333, #1be068)" : '#1f2326'}
                onClick={() => onItemChange(3)}   >
                <Flex alignItems="center" justifyContent="flex-start" p="30px" bg="#1f2326" borderRadius="20px" >
                  <Image src={item03} width="50px" />
                  <Text ml="20px" fontSize="xl" color="gray">lowest platform transaction fees，user can save more</Text>
                </Flex>
              </ListItem>

            </List>
          </Box>
        </Flex>
      </Box>

      <Box bg="#151A1D" w={["100%", 1000]} margin="0 auto" p="10px" textAlign="center" >
        <Box>
          <Text fontSize="4xl" fontWeight="bold">Features</Text>
          <Text color="gray" mt="20px">
            What we listed and under construction
          </Text>
        </Box>
        
        <Flex justifyContent="space-between" p={["50px 0", "150px 0"]}  >
          <Box w={["30%", 200]} className="row_list">
            <Image src={row01} borderRadius="20px" width="140px" margin="0 auto" />
            <Box textAlign="center">
              <Text fontSize="2xl" fontWeight="bold">Swap</Text>
              <Text color="gray">safe fast and lower fees  </Text>
            </Box>
          </Box>
          <Box w={["30%", 200]} className="row_list" al>
            <Image src={row02} borderRadius="20px" width="140px" margin="0 auto" />
            <Box textAlign="center">
              <Text fontSize="2xl" fontWeight="bold">Pools</Text>
              <Text color="gray">multiple trades piar supported</Text>
            </Box>
          </Box>
          <Box w={["30%", 200]} className="row_list">
            <Image src={row03} borderRadius="20px" width="140px" margin="0 auto" />
            <Box textAlign="center">
              <Text fontSize="2xl" fontWeight="bold">Farms</Text>
              <Text color="gray">easy, sustainable yield farming for you</Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box bg={`#0b0b0f url(${bannerBg}) no-repeat  top left`} bgSize="100% 100%" p="150px 0">
        <Center><Text fontSize="4xl" fontWeight="bold" textAlign="center">Join us, and let's PNG</Text></Center>
        <Center><Text color="gray" textAlign="center">gives users the ability to swap, provide liquidity, farm to gain system.</Text></Center>
        <Center margin="38px 0 230px 0"><Link to="/swap"><PrimaryButton size="lg">Launch App</PrimaryButton></Link></Center >

        <Box w={["100%", 1200]} margin="0 auto" p="0 10px">
          <Flex flexDirection={["column", "row"]} justifyContent="space-between">
            <Box>
              <Image src={logoLight} width="140px" />
            </Box>
            <Flex flex="1" margin={["40px 0", 0]} justifyContent={["space-between", "space-around"]}>
              <VStack
                spacing={3}
                align="stretch"
                color="gray"
              >
                <Box fontWeight="bold" color="#fff" mb="10px">App</Box>
                <Link>Swap</Link>
                <Link>Pools</Link>
                <Link>Stake</Link>
              </VStack>

              <VStack
                spacing={3}
                align="stretch"
                color="gray"
              >
                <Box fontWeight="bold" color="#fff" mb="10px">Resources</Box>
                <Box>Docs</Box>
                <Link>Github</Link>
                <Link>Coingecko</Link>
              </VStack>

              <VStack
                spacing={3}
                align="stretch"
                color="gray"
              >

                <Box fontWeight="bold" color="#fff" mb="10px">Connect</Box>
                <Link>Blog </Link>
                <Link>Twitter</Link>
                <Link>Discord</Link>
              </VStack>
            </Flex>
            <Flex>
              <Link><Image src={bottomFb} w="60px" mr="15px" /></Link>
              <Link><Image src={bottomT} w="60px" mr="15px" /></Link>
              <Link><Image src={bottomO} w="60px" mr="15px" /></Link>
            </Flex>

          </Flex>

        </Box>
      </Box>
    </Box >
  );
}

