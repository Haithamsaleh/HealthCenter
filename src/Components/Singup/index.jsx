import React from 'react'
import {
    extendTheme,
    chakra,
    Flex,
    useColorModeValue,
    VisuallyHidden,
    HStack,
    IconButton,
    CloseButton,
    ChakraProvider,
    Box,
    VStack,
    Button,
    Input,
    FormLabel,
    FormHelperText,
    InputGroup,
    InputRightElement,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Stack,
    Tab,
    InputLeftElement,
    Tabs,
    Spacer,
    TabList,
    Avatar,
  } from "@chakra-ui/react";
  

const Singup = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
<Drawer
  isOpen={isOpen}
  placement="right"
  onClose={onClose}
>
  <DrawerOverlay />
  <DrawerContent>
    <DrawerCloseButton />
    <DrawerHeader borderBottomWidth="1px">Sign Up </DrawerHeader>

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
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </Box>
        <InputGroup>
          <FormLabel htmlFor="text">Avatar</FormLabel>
          <Input
            type="file"
            accept=".gif,.jpg,.jpeg,.png"
            onChange={(e) => {
              uploadPictures(e);
            }}
            id="img"
          />
        </InputGroup>

        <Box>
          <FormLabel htmlFor="email">Password</FormLabel>
          <InputGroup>
            <Input
              pr="4.5rem"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />

            <InputRightElement width="4.5rem">
              
            </InputRightElement>
          </InputGroup>
          
        </Box>

        <Box>
          <VStack>
            
          </VStack>
          <Button fontSize='14'  colorScheme="blue" onClick={() => {onClose();onOpenReportModal();}}>
          Already have an account? go to Sign In 
          </Button>
        </Box>
      </Stack>
    </DrawerBody>

    <DrawerFooter borderTopWidth="1px">
      <Button variant="outline" mr={3} onClick={onClose}>
        Cancel
      </Button>
      <Button
        id="signupSubmitButton"
        colorScheme="green"
        onClick={(e) => {
          e.preventDefault();
          signup(e);
        }}
      >
        {" "}
        Sign Up
      </Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
</Box>

  )
}

export default Singup