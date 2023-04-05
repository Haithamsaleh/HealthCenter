import { useState } from "react";
import Swal from "sweetalert2";

import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  chakra,
  Select,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  Divider,
  useColorModeValue,
  List,
  ListItem,
  Center,
  Input,
  Textarea,
  InputLeftAddon,
  InputGroup,
  FormControl,
  FormLabel,
  Icon,
  useToast,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import { BsPerson } from 'react-icons/bs';
import {FaStar,FaRegStar } from "react-icons/fa";
import { HiChatAlt2 } from "react-icons/hi";
import { FcClock,FcPhone,FcExpired,FcRadarPlot,FcHome, } from "react-icons/fc";
import { useNavigate } from "react-router";
import './style.css'
export default function Card() {
    const [currentModal, setCurrentModal] = useState(null);
    const [sortBy, setSortBy] = useState('rating-desc');
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [formValid, setFormValid] = useState(false);

  const navigate = useNavigate();

  const {
    isOpen: isOpenReportModal,
    onOpen: onOpenReportModal,
    onClose: onCloseReportModal,
  } = useDisclosure();
  const toast = useToast()

  const Doctors = [
    
    { id: 1, name: 'Dr. John Smith', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80', rating: '4', Reviews: '120', det: 'Internal Medicine Specialist', Specialty:'Cardiology',SpecialtyList:[' Cardiology ', ' Endocrinology ', ' Gastroenterology '], extraDetails:"Education: MD, University of California, San Francisco; Board Certified: Internal Medicine",icon1:FcClock,icon2:FcPhone,icon3:HiChatAlt2,iconText1:"around the clock",iconText2:"available on phone",iconText3:"multi language",},
    { id: 2, name: 'Dr. Sarah Johnson', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80', rating: '3', Reviews: '90', det: 'Pediatrician', Specialty:'Pediatrics',SpecialtyList:[' Pediatrics ', 'Neonatology'], extraDetails:"Education: MD, Stanford University; Board Certified: Pediatrics",icon1:HiChatAlt2,icon2:FcRadarPlot,icon3:FcHome,iconText1:"multi language",iconText2:"flexible",iconText3:"home visit",},
    { id: 3, name: 'Dr. Michael Brown', img: 'https://plus.unsplash.com/premium_photo-1661766569022-1b7f918ac3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80', rating: '4', Reviews: '75', det: 'Orthopedic Surgeon',SpecialtyList:[' Dermatology ', ' Cosmetic Dermatology ',' Orthopedics ', ' Sports Medicine '], Specialty:'Orthopedics', extraDetails:"Education: DO, New York Medical College; Board Certified: Orthopedic Surgery",icon1:FcExpired,icon2:FcPhone,icon3:FcRadarPlot,iconText1:"available in short notice",iconText2:"around-the-clock",iconText3:"flexible",},
    { id: 4, name: 'Dr. Jennifer Lee', img: 'https://plus.unsplash.com/premium_photo-1661766708050-a164431ffdf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80', rating: '5', Reviews: '110', det: 'Dermatologist', Specialty:'Dermatology',SpecialtyList:[' Orthopedics ', ' Sports Medicine '], extraDetails:"Education: MD, Harvard Medical School; Board Certified: Dermatology",icon1:HiChatAlt2,icon2:FcRadarPlot,icon3:FcHome,iconText1:"multi language",iconText2:"flexible",iconText3:"home visit",},
    { id: 5, name: 'Dr. David Kim', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80', rating: '2', Reviews: '60', det: 'Gastroenterologist', Specialty:'Gastroenterology',SpecialtyList:[' Dermatology ', ' Cosmetic Dermatology '], extraDetails:"Education: MD, Yale School of Medicine; Board Certified: Gastroenterology",icon1:FcPhone,icon2:FcHome,icon3:FcExpired,iconText1:"available on phone",iconText2:"home visit",iconText3:"available in short notice",},
    { id: 6, name: 'Dr. Emily Chen', img: 'https://plus.unsplash.com/premium_photo-1661757221486-183030ef8670?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80', rating: '1', Reviews: '85', det: 'Obstetrician/Gynecologist', Specialty:'Obstetrics and Gynecology',SpecialtyList:[' Dermatology '], extraDetails:"Education: MD, University of Texas Southwestern Medical Center; Board Certified: Obstetrics and Gynecology",icon1:HiChatAlt2,icon2:FcRadarPlot,icon3:FcHome,iconText1:"multi language",iconText2:"flexible",iconText3:"home visit",}
  ];
  const sortedDoctors = [...Doctors];
  if (sortBy === 'rating-asc') {
    sortedDoctors.sort((a, b) => a.rating - b.rating);
  } else if (sortBy === 'reviews-desc') {
    sortedDoctors.sort((a, b) => b.Reviews - a.Reviews);
  } else if (sortBy === 'reviews-asc') {
    sortedDoctors.sort((a, b) => a.Reviews - b.Reviews);
  } else {
    sortedDoctors.sort((a, b) => b.rating - a.rating);
  }
  const ratingToStars = {
    1: <><FaStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></>,
    2: <><FaStar /><FaStar /><FaRegStar /><FaRegStar /><FaRegStar /></>,
    3: <><FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar /></>,
    4: <><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></>,
    5: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>,
  };
 
  const handleInputChange = () => {
    // check if all required fields are filled
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    if (firstName && lastName && email && phone && date) {
      setFormValid(true);
    } else {
    
      setFormValid(false);
    }
  }

  const bookAp = () => {
    try {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Appointment Booked",
        text: "You will receive a confirmation message on your phone ",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          container: 'my-swal'
        }    
        });
        onCloseReportModal()
    } catch (error) {
     
    }
  };
  return (
    <>
    <HStack>

     <Icon as={BsPerson}  color={useColorModeValue('black', 'gray.200')}  />
                <Text color={useColorModeValue('black', 'gray.200')} pl={2} fontWeight={700} lineHeight={1}>
                  {sortedDoctors.length} Doctors
                </Text>
                <Text htmlFor="sort-by">Sort by:</Text>
<Select focusBorderColor="green" id="sort-by" name="sort-by" maxW={'14rem'} onChange={(e) => setSortBy(e.target.value)}>
  <option  value="rating-asc">Rating: High to Low</option>
  <option value="rating-low-to-high">Rating: Low to High</option>
  <option value="reviews-desc">Reviews: High to Low</option>
  <option value="reviews-asc">Reviews: Low to High</option>
</Select>
    </HStack>
    {sortedDoctors.map((Doctor,index) => (
   <Box key={index} bg={useColorModeValue('#fff', 'gray.600')} p="4" m="5" borderRadius="xl" maxW={'7xl'}> 
   <Stack direction="row" alignItems="center" justifyContent="space-between">
    <Flex  alignItems="center">

      <Image borderRadius="full" boxSize="90px" src={Doctor.img} alt="Dan Abramov" />
      <VStack align="left" ml="4">
        <Text fontWeight="semibold">{Doctor.name}</Text>
        <Flex align="center">
          <Box as="span" color={useColorModeValue('orange.500', 'gray.400')} fontSize="sm">
            <HStack>

          {ratingToStars[Doctor.rating]}
            </HStack>
          </Box>
          <Text ml="1" fontSize="sm">
            {Doctor.Reviews} Reviews
          </Text>
        </Flex>
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
        {Doctor.det}
        </Text>
        <Stack display={{ md: 'none' }} direction={{ base: 'column', md: 'column' }} w={{ base: '11rem' }}>
          <Stack direction="column" spacing={2} justifyContent="space-between">
            <Button variant="outline" colorScheme="green" onClick={onOpen}>
              More Details
            </Button>
            <Button colorScheme="green" onClick={onOpenReportModal}>Book an Appointment</Button>
          </Stack>
        </Stack>
      </VStack>
      <Center>
      <Divider orientation='vertical'ml={8} borderColor='gray.200' borderWidth='1px' height='5rem' />
        <SimpleGrid maxW={"sm"} display={{ base: 'none', md: 'flex' }} columns={{ base: 5, md: 3,lg:9 }} spacing={{ base: 5, lg: 8 }} justifyContent="center">
        <Divider orientation='vertical' ml="5rem" mr="5" />
          
          <VStack alignItems='center'>
            <Icon
              as={Doctor.icon1}
              color={'black'}
              
              boxSize={5}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            />
            <Box align='center'>{Doctor.iconText1}</Box>
          </VStack>
          <Divider orientation='vertical' borderColor='gray.200' borderWidth='1px' height='50px' />

          <VStack alignItems='center'>
            
            <Icon
              as={Doctor.icon2}
          
              boxSize={5}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            />
            <Box align='center'>{Doctor.iconText2}</Box>
          </VStack>
          <Divider orientation='vertical' borderColor='gray.200' borderWidth='1px' height='50px' />

          <VStack alignItems='center'>
            <Icon
              as={Doctor.icon3}
              color={'#009688'}
              boxSize={5}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            />
            <Box align='center'>{Doctor.iconText3}</Box>
          </VStack>
          
        </SimpleGrid>
        <Divider orientation='vertical' />
      </Center>
    </Flex>
    <Stack display={{ base: 'none', md: 'block' }} direction={{ base: 'column', md: 'column' }} w={{ base: '11rem' }}>
      <Stack direction="column" spacing={2} justifyContent="space-between">
        <Button variant="outline" colorScheme="green" onClick={() => {onOpen();setCurrentModal(Doctor.name)}}>
          More Details
        </Button>
        <Button colorScheme="green" onClick={() => {onOpenReportModal();setCurrentModal(Doctor.name)}}>

        Book an Appointment</Button>
      </Stack>
     </Stack>
        </Stack>
      </Box>
      ))}

      {Doctors.map((Doctor,index) => (
     <Modal key= {index} isOpen={isOpen && currentModal === Doctor.name} onClose={onClose} size="4xl" >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Docter Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Container maxW={'7xl'}>
              <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}>
                <Flex>
                  <Image
                    src={Doctor.img}
                    rounded={'full'}
                    fit={'cover'}
                    align={'center'}
                    boxSize="lg"
                  // w={'100%'}
                  // h={{ base: '100%', sm: '400px', lg: '500px' }}
                  />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                  <Box as={'header'}>
                    <Heading
                      lineHeight={1.1}
                      fontWeight={600}
                      fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                      {Doctor.name}
                    </Heading>
                    <Text
                      color={useColorModeValue('gray.900', 'gray.400')}
                      fontWeight={300}
                      fontSize={'2xl'}>
                        {Doctor.Specialty}
                      
                    </Text>
                    <Box as="span" color={useColorModeValue('orange.500', 'gray.400')} fontSize="2xl">
                    <HStack>

{ratingToStars[Doctor.rating]}
  </HStack>
                    </Box>
                    <Text ml="1" fontSize="sm">
                    {Doctor.Reviews} Reviews
                    </Text>
                  </Box>

                  <Stack
                    spacing={{ base: 4, sm: 6 }}
                    direction={'column'}
                    divider={
                      <StackDivider
                        borderColor={useColorModeValue('gray.200', 'gray.600')}
                      />
                    }>
                    <VStack spacing={{ base: 4, sm: 6 }}>

                      <Text fontSize={'lg'}>
                      {Doctor.extraDetails}
                      </Text>
                    </VStack>
                    <Box>
                      <Text
                        fontSize={{ base: '16px', lg: '18px' }}
                        color={useColorModeValue('#38A169', '#38A169')}
                        fontWeight={'500'}
                        textTransform={'uppercase'}
                        mb={'4'}>
                        specialty
                      </Text>

                      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                        <List spacing={2}>
                          <ListItem>{Doctor.SpecialtyList}</ListItem>
                         
                        </List>
                       
                      </SimpleGrid>

                      <StackDivider
                        borderColor={useColorModeValue('gray.200', 'gray.600')}
                      />
                    </Box>
                    <SimpleGrid maxW={"sm"} display={{ base: 'none', md: 'flex' }} columns={{ base: 5, md: 3, }} spacing={{ base: 5, lg: 8 }} justifyContent="center">
        <Divider orientation='vertical'  />
          
          <VStack alignItems='center'>
            <Icon
              as={Doctor.icon1}
              color={'black'}
              
              boxSize={5}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            />
            <Box align='center'>{Doctor.iconText1}</Box>
          </VStack>
          <Divider orientation='vertical' borderColor='gray.200' borderWidth='1px' height='50px' />

          <VStack alignItems='center'>
            
            <Icon
              as={Doctor.icon2}
          
              boxSize={5}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            />
            <Box align='center'>{Doctor.iconText2}</Box>
          </VStack>
          <Divider orientation='vertical' borderColor='gray.200' borderWidth='1px' height='50px' />

          <VStack alignItems='center'>
            <Icon
              as={Doctor.icon3}
              color={'#009688'}
              boxSize={5}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            />
            <Box align='center'>{Doctor.iconText3}</Box>
          </VStack>
          
        </SimpleGrid>

                  </Stack>

                  <Button
                    rounded={'lg'}
                    w={'full'}
                    mt={8}
                    size={'lg'}
                    py={'7'}
                    bg={useColorModeValue('#38A169', '#38A169')}
                    color={useColorModeValue('white', 'white')}
                    textTransform={'uppercase'}
                    _hover={{
                      transform: 'translateY(2px)',
                      boxShadow: 'lg',
                    }}
                    onClick={onOpenReportModal}>
                    Book an Appointment
                  </Button>


                </Stack>
              </SimpleGrid>
            </Container>
          </ModalBody>


        </ModalContent>
      </Modal>
      ))}



            {Doctors.map((Doctor,index) => (
              
      <Modal key= {index} closeOnOverlayClick={true} isOpen={isOpenReportModal && currentModal === Doctor.name} onClose={onCloseReportModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book Appointment</ModalHeader>
          <ModalCloseButton />
          <Box>
          <ModalBody pb={1}>
            <Flex alignItems="center">

              <Image borderRadius="full" boxSize="90px" src={Doctor.img}  />
              <VStack align="left" ml="4">
                <Text fontWeight="semibold">{Doctor.name}</Text>
                <Text
                  color={useColorModeValue('gray.900', 'gray.400')}
                  fontWeight={300}
                  fontSize={'sm'}>
                {Doctor.Specialty}
                </Text>
                <Flex align="center">
                  <Box as="span" color={useColorModeValue('orange.500', 'gray.400')} fontSize="sm">
                  <HStack>

{ratingToStars[Doctor.rating]}
  </HStack>
                  </Box>
                  <Text ml="1" fontSize="sm">
                  {Doctor.Reviews} Reviews
                  </Text>
                </Flex>
                <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
                {Doctor.det}
                </Text>


              </VStack>
            </Flex>
            <Divider my={4} />
            <Box mt="8">
              <FormControl>
                <SimpleGrid columns={2} spacing={4}>
                  <FormControl id="first-name">
                    <FormLabel>First name</FormLabel>
                    <Input isRequired  type="text"onChange={handleInputChange} />
                  </FormControl>
                  <FormControl id="last-name">
                    <FormLabel>Last name</FormLabel>
                    <Input required type="text"onChange={handleInputChange} />
                  </FormControl>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input required type="email"onChange={handleInputChange} />
                  </FormControl>
                  <FormControl id="phone">
                    <FormLabel>Phone number</FormLabel>
                    <InputGroup>
                      <InputLeftAddon children='+966' />
                      <Input required type='tel' onChange={handleInputChange}/>
                    </InputGroup>

                  </FormControl>
                  <FormControl id="reason">
                    <FormLabel>Reason for visit</FormLabel>
                    <Textarea />
                  </FormControl>
                  <FormControl id="date">
                    <FormLabel>Preferred date and time</FormLabel>
                    <Input required type="datetime-local"onChange={handleInputChange} />
                  </FormControl>
                </SimpleGrid>

              </FormControl>
            </Box>
          </ModalBody>
              
</Box>
          <ModalFooter>
            <Button rounded={'lg'}
                    type="submit"
                    colorScheme="green" mr={3}
                    onClick={() => {
                      
                      if (!formValid) {
                        toast({
                          title: 'make sure you entered your informachn corctly.',                         
                          status: 'error',
                          duration: 9000,
                          isClosable: true,
                        })
                      } else {
                        bookAp();
                      }

                      
                    }}
                    disabled={!formValid} 
                    >
              Book Appointment
            </Button>
            <Button onClick={onCloseReportModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
                      
                      ))}
            

    </>
  );
}