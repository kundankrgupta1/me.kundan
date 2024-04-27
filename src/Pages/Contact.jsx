import { Box, Button, Flex, FormControl, Image, Input, Spacer, Text, Textarea, useColorMode } from '@chakra-ui/react'
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Social from '../Components/Social';
import icon2 from "../assets/icon2-2.png"
import { IoIosSend } from "react-icons/io";
const Contact = () => {
	const { colorMode } = useColorMode();
	const isDark = colorMode === "dark";
	return (
		<Flex maxWidth={'1300px'} m={'auto'} mt={20} id="contact">
			<Box flexBasis={'40%'}
				// borderWidth={2}
				display={'flex'}
				justifyContent={'center'}
				flexDirection={'column'}
				gap={10}
			>
				<Text textTransform={'uppercase'} mb={-8} >contact info</Text>
				<Flex gap={5}>
					<Box bg="linear-gradient(145deg, #e2e8ec, #ffffff)"
						boxShadow={isDark ? "" : "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"}
						borderRadius="7px" p={3}>
						<MdOutlineMailOutline fontSize={'40px'} />
					</Box>
					<Box>
						<Text textTransform={'uppercase'}>email me</Text>
						<Text>kundanprogrammerz@gmail.com</Text>
						<Text>example@email.com</Text>
					</Box>
				</Flex>
				<Flex gap={5}>
					<Box bg="linear-gradient(145deg, #e2e8ec, #ffffff)"
						boxShadow={isDark ? "" : "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"}
						borderRadius="7px" p={3}>
						<IoIosCall fontSize={'40px'} />
					</Box>
					<Box>
						<Text textTransform={'uppercase'}>contact me</Text>
						<Text>+91-8969122368</Text>
						<Text>+91-8935910543</Text>
					</Box>
				</Flex>
				<Flex gap={5}>
					<Box bg="linear-gradient(145deg, #e2e8ec, #ffffff)"
						boxShadow={isDark ? "" : "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"}
						borderRadius="7px" p={3}>
						<FaLocationDot fontSize={'40px'} />
					</Box>
					<Box>
						<Text textTransform={'uppercase'}>My Location</Text>
						<Text>Gopalganj, Bihar - 841427</Text>
						<Text>India</Text>
					</Box>
				</Flex>
				<Text mb={-8} textTransform={'uppercase'}>social info</Text>
				<Social />
			</Box>
			<Box
				background={isDark ? "linear-gradient(120deg, rgba(52, 53, 54), rgba(31, 32, 33))" : "linear-gradient(30deg, rgba(213, 222, 235), rgba(245, 245, 245))"}
				borderRadius="10px" p={3}
				flexBasis={'60%'}
			>
				<Flex px={5}>
					<Text
						fontWeight={500}
						fontSize={{ base: "18px", sm: "18px", md: "30px", lg: "30px" }}
						mt={8}
					>
						<Text as="span" textColor={'#FD185E'}>Let&#x27;s</Text> work together
					</Text><Spacer /><Image src={icon2} /></Flex>
				<form style={{ marginTop: "25px" }}>
					<FormControl px={5} display={'flex'} flexDirection={'column'} gap={10} width={'100%'}>
						<Input type='text' placeholder='Name*' borderColor="black" required />
						<Input type='email' placeholder='Email*' borderColor="black" required />
						<Input type='number' placeholder='Number*' borderColor="black" required />
						<Textarea placeholder='Your Message*' borderColor="black" required />
						<Button><IoIosSend />Send Message</Button>
					</FormControl>
				</form>
			</Box>
		</Flex>
	)
}

export default Contact