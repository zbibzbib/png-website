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
import bannerBg from 'assets/home/banner_bg.png';
import homeBanner01 from 'assets/home/home_banner01.png';
import homeBanner02 from 'assets/home/home_banner02.png';
import homeBanner03 from 'assets/home/home_banner03.png';
import slide01 from 'assets/home/slide01.png';
import slide02 from 'assets/home/slide02.png';
import slide03 from 'assets/home/slide03.png';
import item01 from 'assets/home/item01.png';
import item02 from 'assets/home/item02.png';
import item03 from 'assets/home/item03.png';
import row01 from 'assets/home/row01.png';
import row02 from 'assets/home/row02.png';
import row03 from 'assets/home/row03.png';
import areaBg from 'assets/home/area_bg.png';
import bottom01 from 'assets/home/bottom_01.png';
import bottom02 from 'assets/home/bottom_02.png';
import bottom03 from 'assets/home/bottom_03.png';

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
        <Box maxW={1200} margin="0 auto"  >

          <Flex p="50px 10px" alignItems="center" justifyContent="space-between" h="50px">
            <Box flex={1} >
              <Link><Image src={logoLight} width="140px" /></Link>
            </Box>
            <HStack display={{ base: "none", md: "flex" }} fontWeight={500} spacing={10}>
              <Link to="/swap" className="navItem">Swap</Link>
              <Link to="/pools" className="navItem">Pools</Link>
              <Link to="/farms" className="navItem">Farms</Link>
            </HStack>

            <Box display={{ base: "block", md: "none" }}>
              <Menu colorScheme="gray" >
                <MenuButton as={IconButton} aria-label="menu" variant="unstyled">
                  <Icon w={6} h={6} as={FiMenu} />
                </MenuButton>
                <MenuList>
                  <MenuItem to="/swap">
                    Swap
                  </MenuItem>
                  <MenuItem as={"a"} href="/pools">
                    Pools
                  </MenuItem>
                  <MenuItem to="/farms">
                    Farms
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Flex>

          <Center h={clientH - 100}>
            <Flex display={{ base: "none", md: "flex" }} w={{ base: "100%", md: 1200 }} alignItems="center" justifyContent="space-between" overflow="hidden">
              <Box w={{ base: "100%", md: 500 }} className="top_left" p="0 10px">
                <Heading as="h1" size="4xl" isTruncated>PENGUIN</Heading>
                <Text fontSize="4xl" fontWeight="bold" mt="10px" >One-stop DeFi application platform</Text>
                <Text className="gray_text" mt="40px" fontSize="lg">
                  Penguin is the automatic market-making protocol based on Solana.
                </Text>
                <PrimaryButton mt="60px" size="lg"><a href="#">Launch App</a></PrimaryButton>
              </Box>
              <Image src={homeBanner01} className="top_right" />
            </Flex>

            <Box display={{ base: "block", md: "none" }} w={{ base: "100%", md: 500 }} opacity="0.3" position="absolute" >
              <Image src={homeBanner01} w={"100%"} className="top_right" ></Image>
            </Box>
            <Box display={{ base: "block", md: "none" }} w={{ base: "100%", md: 1200 }} alignItems="center" justifyContent="space-between" overflow="hidden" textAlign="center">


              <Box w={{ base: "100%", md: 500 }} className="top_left" p="0 10px" >
                <Heading as="h1" size="4xl" isTruncated>PENGUIN</Heading>
                <Text fontSize="4xl" fontWeight="bold">One-stop DeFi application platform</Text>
                <Text className="gray_text" mt="30px" fontSize="lg">
                  Penguin is the automatic market-making protocol based on Solana.
                </Text>
                <PrimaryButton mt="60px" size="lg"><a href="http://www.baidu.com">Launch App</a></PrimaryButton>
              </Box>
            </Box>
          </Center>
        </Box>
      </Box >

      <Box w="100%" margin="0 auto" padding="0 10px" textAlign="center" position="relative" >
        <Box p="100px 0">
          <Text fontSize="4xl" fontWeight="bold">PENGUIN swap</Text>
          <Text className="gray_text" mt="20px">
            PENGUIN adopts the mechanism of Automatic Market Maker (AMM) and aims to achieve self-driven liquidity creation.
          </Text>
        </Box>
        <Image src={areaBg} position="absolute" right="0" top={{ base: 350, md: 220 }} w="50%" h={{ base: "auto%", md: 280 }} />
        <Image src={homeBanner02} width="1200px" margin="0 auto" position="relative" />
      </Box>

      <Box bg="#151A1D">
        <Flex maxW={1200} margin="0 auto" justifyContent="space-between" p={"150px 10px"} >
          <Image src={activeItem === 1 ? homeBanner03 : activeItem === 2 ? slide02 : slide03} w={{ base: "100%", md: 500 }} margin={{ base: "0 auto", xl: "" }} />
          <Box ml="100px" display={{ base: "none", xl: "block" }} >
            <Box p="20px 0">
              <Text fontSize="4xl" fontWeight="bold">Safe fast and less slippage</Text>
              <Text className="gray_text" fontSize="xl" p="40px 0">
                leading currency asset exchange on solana
              </Text>
            </Box>

            <List spacing={30}>
              <ListItem className={activeItem === 1 ? "safe_item safe_item_active" : "safe_item"} onClick={() => onItemChange(1)}   >
                <Flex alignItems="center" justifyContent="flex-start" p="30px" bg="#1f2326" borderRadius="20px" >
                  <Image src={item01} width="50px" />
                  <Text ml="20px" fontSize="xl" lineHeight={1}>In Solana, use a far more granular verifiable delay function, a SHA 256 hash chain, to checkpoint the ledger and coordinate consensus.</Text>
                </Flex>
              </ListItem>

              <ListItem className={activeItem === 2 ? "safe_item safe_item_active" : "safe_item"} onClick={() => onItemChange(2)}   >
                <Flex alignItems="center" justifyContent="flex-start" p="30px" bg="#1f2326" borderRadius="20px" >
                  <Image src={item02} width="50px" />
                  <Text ml="20px" fontSize="xl">The resulting cluster wouldn"t be just 10 times faster, or a 100 times, or a 1,000 times, but 10,000 times faster, right out of the gate!</Text>
                </Flex>
              </ListItem>

              <ListItem className={activeItem === 3 ? "safe_item safe_item_active" : "safe_item"} onClick={() => onItemChange(3)}   >
                <Flex alignItems="center" justifyContent="flex-start" p="30px" bg="#1f2326" borderRadius="20px" >
                  <Image src={item03} width="50px" />
                  <Text ml="20px" fontSize="xl">lowest platform transaction fees，user can save more</Text>
                </Flex>
              </ListItem>

            </List>
          </Box>
        </Flex>

        <Box bg="#151A1D" maxW={1200} margin="0 auto" p="10px" textAlign="center" >
          <Box>
            <Text fontSize="4xl" fontWeight="bold">Features</Text>
            <Text className="gray_text" mt="20px">
              What we listed and under construction
            </Text>
          </Box>

          <Flex justifyContent="space-between" p={{ base: "50px 0 ", md: "150px 0" }}  >
            <Box w={{ base: "30%", md: 200 }} className="feedback_up">
              <Image src={row01} borderRadius="20px" width="140px" margin="0 auto" />
              <Box textAlign="center">
                <Text fontSize="2xl" fontWeight="bold">Swap</Text>
                <Text className="gray_text">safe fast and lower fees  </Text>
              </Box>
            </Box>
            <Box w={{ base: "30%", md: 200 }} className="feedback_up" al>
              <Image src={row02} borderRadius="20px" width="140px" margin="0 auto" />
              <Box textAlign="center">
                <Text fontSize="2xl" fontWeight="bold">Pools</Text>
                <Text className="gray_text">multiple trades piar supported</Text>
              </Box>
            </Box>
            <Box w={{ base: "30%", md: 200 }} className="feedback_up">
              <Image src={row03} borderRadius="20px" width="140px" margin="0 auto" />
              <Box textAlign="center">
                <Text fontSize="2xl" fontWeight="bold">Farms</Text>
                <Text className="gray_text">easy, sustainable yield farming for you</Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box bgGradient="linear-gradient(30deg, #000 5%, #182c33 15%, #11412f 20%, #11412f 30%, #000 60%)" pt="150px">
        <Center><Text fontSize="4xl" fontWeight="bold" textAlign="center">Join us and let's PNG</Text></Center>
        <Center><Text className="gray_text" textAlign="center">gives users the ability to swap, provide liquidity, farm to gain system.</Text></Center>
        <Center p="38px 0 85px 0"><PrimaryButton size="lg"><a href="#">Launch App</a></PrimaryButton></Center >

        ’
      </Box>
      <Box bg="#000" p="150px 0">
        <Box maxW={1200} margin="0 auto" p="0 10px" >
          <Flex flexDirection={{ base: "column", md: "row" }} justifyContent="space-between">
            <Box>
              <Image src={logoLight} width="140px" />
            </Box>
            <Flex flex="1" margin={{ base: "40px 0", md: 0 }} p="0 20px" justifyContent={{ base: "space-between", md: "space-around" }}>
              <VStack
                spacing={3}
                align="stretch"
                className="gray_text bottom_links"
              >
                <Box fontWeight="bold" color="#fff" mb="10px">App</Box>
                <Link>Swap</Link>
                <Link>Pools</Link>
                <Link>Stake</Link>
              </VStack>

              <VStack
                spacing={3}
                align="stretch"
                className="gray_text bottom_links"
              >
                <Box fontWeight="bold" color="#fff" mb="10px">Resources</Box>
                <Link>Docs</Link>
                <Link>Github</Link>
                <Link>Coingecko</Link>
              </VStack>

              <VStack
                spacing={3}
                align="stretch"
                className="gray_text bottom_links"
              >
                <Box fontWeight="bold" color="#fff" mb="10px">Connect</Box>
                <Link>Blog </Link>
                <Link>Twitter</Link>
                <Link>Discord</Link>
              </VStack>
            </Flex>
            <Flex>
              <Link className="bottom_icon bottom01 feedback_up"></Link>
              <Link className="bottom_icon bottom02 feedback_up"></Link>
              <Link className="bottom_icon bottom03 feedback_up"></Link>
            </Flex>

          </Flex>
        </Box>
      </Box>
    </Box >
  );
}

