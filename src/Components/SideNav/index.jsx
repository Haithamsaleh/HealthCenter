import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';
import {
  FiStar,
  FiSettings,
  FiArrowRightCircle,
} from 'react-icons/fi';
import { RiMentalHealthLine ,RiFolderHistoryLine} from "react-icons/ri";
import Card from '../Card';
const LinkItems = [
  
  { name: 'History', icon: RiFolderHistoryLine },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
];



export default function SideNav({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} mt={{base: '4rem', md: 'none'}}onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children} 
        <Box mt='90'>
            
        <Card />
        
        </Box>

      </Box>
    </Box>
  );
}



const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('white', '#1A202C')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
       
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <NavItem key='Doctors' icon={RiMentalHealthLine} as={Link} href={''}color='white' bg='#38A169' >
      Doctors
        </NavItem>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} as={Link} href={link.url} >
          {link.name}
        </NavItem>
        
      ))}
      
        

    </Box>
  );
};


const NavItem = ({ icon, children, ...rest }) => {
    return (
      
      <div style={{ textDecoration: 'none' }}>
        <Flex
          as="button"
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: '#54944E',
            color: 'white',
          }}
          {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>

      </div>

    );
  };
  


const MobileNav = ({ onOpen, ...rest }) => {
  return (
    
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        color='green'
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiArrowRightCircle />}
      />

     
    </Flex>
    
  );
};