import {React, useState} from 'react';

import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorMode,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
    Drawer,
    VStack,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    FormLabel,
    FormHelperText,
    InputGroup,
    InputRightElement,
  } from '@chakra-ui/react';
  import PasswordChecklist from "react-password-checklist";

  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

  
  export default function Nav() {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const {
      isOpen: isOpenReportModal,
      onOpen: onOpenReportModal,
      onClose: onCloseReportModal,
    } = useDisclosure();
    const {
      isOpen: isOpenReportModal1,
      onOpen: onOpenReportModal1,
      onClose: onCloseReportModal1,
    } = useDisclosure();
    const [show, setShow] = useState(false);

    return (
      <>
      <Box
      position="fixed"
     top="0"
      left="0"
      right="0"
      borderBottomWidth="1px"
      zIndex="3">
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
           <Image     boxSize='30px' src="../../../hospital.png"/>
            <Text
              display={{ base: 'none', md: 'flex' }}
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
                  <span style={{color: '#54944E'}}>Health</span><span style={{color: '#97C33C'}}>Center</span>

              {/* <Text color={'#54944E'}> Health</Text> <Text color={'#97C33C'}>Center </Text> */}
            </Text>
  
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
                 <Button
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        _focus={{ boxShadow: 'none' }}
        w="fit-content"
        >
        {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
      </Button>
            <Button
              as={'a'}
              
              fontSize={'sm'}
              fontWeight={400}
              href={'#'}
              variant="outline"
              colorScheme="green"
              onClick={onOpenReportModal1}
              >
              Sign In
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
        
              href={'#'}
              
              onClick={onOpenReportModal}

                colorScheme="green"
              >
              Sign Up
            </Button>
          </Stack>
        </Flex>
  
        <Collapse in={isOpenReportModal} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>





      <Drawer
        isOpen={isOpenReportModal}
        placement='left'
        onClose={onCloseReportModal}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
          <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="text">User name</FormLabel>
                  <Input
                    id="text"
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="email">Email address</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    
                  />
                </Box>
                

                <Box>
                  <FormLabel htmlFor="email">Password</FormLabel>
                  <InputGroup>
                    <Input
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      
                    />

                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" >
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  
                </Box>

                <Box>
                  <VStack>
                  
                  </VStack>
                  <Button fontSize='14'  colorScheme="green" onClick={() => {onCloseReportModal();onOpenReportModal1();}}>
                  Already have an account? go to Sign In 
                  </Button>
                </Box>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onCloseReportModal}>
                Cancel
              </Button>
              <Button
                id="signupSubmitButton"
                colorScheme="green"
                
              >
                {" "}
                Sign Up
              </Button>
            </DrawerFooter>
          </DrawerContent>

          
      </Drawer>

      <Drawer
          isOpen={isOpenReportModal1}
          placement="right"
          onClose={onCloseReportModal1}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Login</DrawerHeader>

            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="email">Email address</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    required
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor="email">Password</FormLabel>
                  <InputGroup>
                    <Input
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      
                      placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" >
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </Box>
                <Button
                colorScheme="green"
                
                
              >
                {" "}
                login
              </Button>
                <Button colorScheme="blue" >
                  forgot your password?
                </Button>
                <Button ml='100px'  colorScheme="blue" onClick={() => {onCloseReportModal1();onOpenReportModal();}}>
                    Don't have accept? go to sign Up 
                  </Button>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              {/* <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button> */}

              {/* <Button
                colorScheme="green"
                onClick={(e) => {
                  e.preventDefault();
                  login(e);
                }}
              >
                {" "}
                login
              </Button> */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  

  
  const NAV_ITEMS = [
    {
      label: 'Home',
      
    },
    {
      label: 'Our Staff',
      
    },
    {
      label: 'Our Services',
      href: '#',
    },
    {
      label: 'Book an Appointment',
      href: '#',
    },
  ];