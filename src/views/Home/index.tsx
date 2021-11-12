import React, { useEffect, useState } from 'react';
import { Nav, PrimaryButton } from 'components/index';
import {
  Flex,
  Image,
  HStack,
  VStack,
  Box,
  Link,
  Text,
  List,
  ListItem,
  Center
} from '@chakra-ui/react';
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
              <Nav to="/swap" active={true} title="Swap" />
              <Nav to="/pools" title="Pools" />
              <Nav to="/farms" title="Farms" />
              <PrimaryButton>Launch App</PrimaryButton>
            </HStack>
            <PrimaryButton display={{ base: 'flex', md: 'none' }}>Launch App</PrimaryButton>
          </Flex>

          <Center h={clientH - 100}>
            <Flex w={["100%", 1200]} alignItems="center" justifyContent="space-between" overflow="hidden">
              <Box w={["100%", "500px"]} className="top_left" p="0 10px" >
                <Text fontSize="4xl" fontWeight="bold">The money market made for everyone</Text>
                <Text color="gray">
                  penguin is a leading cross-chain stable currency and packaged asset exchange
                </Text>
              </Box>
              <img src={homeBanner01} width="500px" className="top_right" />
            </Flex>
          </Center>
        </Box>
      </Box>

      <Box w={["100%", 1000]} h={clientH} margin="0 auto" padding="0 10px" textAlign="center" >
        <Box p="100px 0">
          <Text fontSize="4xl" fontWeight="bold">The money market made</Text>
          <Text color="gray">
            penguin is a leading cross-chain stable currency and packaged asset exchange
          </Text>
        </Box>
        <Image src={homeBanner02} width="100%" />
      </Box>

      <Box bg="#151A1D">
        <Flex w={["100%", 1200]} margin="0 auto" justifyContent="space-between" p={["0 10px", "150px 0"]} >
          <Image src={activeItem === 1 ? homeBanner03 : activeItem === 2 ? homeBanner02 : homeBanner01} width={[375, 500]} />
          <Box ml="100px" display={{ base: 'none', md: 'block' }} >
            <Box p="20px 0">
              <Text fontSize="4xl" fontWeight="bold">The money market made</Text>
              <Text color="gray" fontSize="xl" p="40px 0">
                penguin is a leading cross-chain stable currency and packaged asset exchange
              </Text>
            </Box>

            <List spacing={30}>
              <ListItem cursor="pointer" p="2px" borderRadius="20px" bgImg={activeItem === 1 ? "linear-gradient(270deg, #333, #1be068)" : '#1f2326'}
                onClick={() => onItemChange(1)}   >
                <Flex alignItems="center" justifyContent="space-between" p="30px" bg="#1f2326" borderRadius="20px" >
                  <img src={item01} width="50px" />
                  <Text ml="20px" fontSize="xl" color="gray">penguin is a leading cross-chain stable currency and packaged asset exchange</Text>
                </Flex>
              </ListItem>

              <ListItem cursor="pointer" p="2px" borderRadius="20px" bgImg={activeItem === 2 ? "linear-gradient(270deg, #333, #1be068)" : '#1f2326'}
                onClick={() => onItemChange(2)}   >
                <Flex alignItems="center" justifyContent="space-between" p="30px" bg="#1f2326" borderRadius="20px" >
                  <img src={item02} width="50px" />
                  <Text ml="20px" fontSize="xl" color="gray">penguin is a leading cross-chain stable currency and packaged asset exchange</Text>
                </Flex>
              </ListItem>

              <ListItem cursor="pointer" p="2px" borderRadius="20px" bgImg={activeItem === 3 ? "linear-gradient(270deg, #333, #1be068)" : '#1f2326'}
                onClick={() => onItemChange(3)}   >
                <Flex alignItems="center" justifyContent="space-between" p="30px" bg="#1f2326" borderRadius="20px" >
                  <img src={item03} width="50px" />
                  <Text ml="20px" fontSize="xl" color="gray">penguin is a leading cross-chain stable currency and packaged asset exchange</Text>
                </Flex>
              </ListItem>

            </List>
          </Box>
        </Flex>
      </Box>

      <Box w={["100%", 1000]} margin="0 auto" p="10px" textAlign="center" >
        <Flex justifyContent="space-between" p={["40px 0", "200px 0"]}  >
          <Box w={["30%", 200]} className="row_list">
            <Image src={row01} borderRadius="20px" width="100%" />
            <Box textAlign="center" mt="40px">
              <Text fontSize="2xl" fontWeight="bold">Swap</Text>
              <Text color="gray">penguin is a leading cross-chain stable</Text>
            </Box>
          </Box>
          <Box w={["30%", 200]} className="row_list">
            <Image src={row02} borderRadius="20px" width="100%" />
            <Box textAlign="center" mt="40px">
              <Text fontSize="2xl" fontWeight="bold">Swap</Text>
              <Text color="gray">penguin is a leading cross-chain stable</Text>
            </Box>
          </Box>
          <Box w={["30%", 200]} className="row_list">
            <Image src={row03} borderRadius="20px" width="100%" />
            <Box textAlign="center" mt="40px">
              <Text fontSize="2xl" fontWeight="bold">Swap</Text>
              <Text color="gray">penguin is a leading cross-chain stable</Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box bg={`#0b0b0f url(${bannerBg}) no-repeat  top left`} p="100px 0">
        <Center><Text fontSize="4xl" fontWeight="bold" textAlign="center">Get out of the house, and let's travel</Text></Center>
        <Center><Text color="gray" textAlign="center">penguin is a leading cross-chain stable currency and packaged asset exchange</Text></Center>
        <Center margin="50px 0"><Link to="/swap"><PrimaryButton>Launch App</PrimaryButton></Link></Center >

        <Box w={["100%", 1200]} margin="0 auto" p={["50px 10px", "50px 0 100px 0"]}>
          <Flex justifyContent="space-between">
            <Box w="40%" display={{ base: 'none', md: 'block' }}>
              <Image src={logoLight} width="140px" />
            </Box>
            <VStack
              spacing={1}
              align="stretch"
              color="gray"
            >
              <Box fontWeight="bold" color="#fff" mb="10px">App</Box>
              <Link>Swap</Link>
              <Link>Pools</Link>
              <Link>Stake</Link>
            </VStack>

            <VStack
              spacing={1}
              align="stretch"
              color="gray"
            >
              <Box fontWeight="bold" color="#fff" mb="10px">Resources</Box>
              <Box>Docs</Box>
              <Link>Github</Link>
              <Link>Defillama</Link>
              <Link>Coingecko</Link>
              <Link>Coinmarketcap</Link>
            </VStack>

            <VStack
              spacing={1}
              align="stretch"
              color="gray"
            >
              <Box fontWeight="bold" color="#fff" mb="10px">Connect</Box>
              <Link>Blog </Link>
              <Link>Twitter</Link>
              <Link>Discord</Link>
            </VStack>
          </Flex>
        </Box>
      </Box>
    </Box >
  );
}

