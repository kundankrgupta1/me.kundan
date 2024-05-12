import { Box, Button, Flex, FormControl, Image, Input, Spacer, Text, Textarea, useColorMode } from '@chakra-ui/react'
import Social from '../Components/Social';
import icon2 from "../assets/icon2-2.png"
import { IoIosSend } from "react-icons/io";
import call from "../assets/call.png"
import location from "../assets/location.png"
import email from "../assets/email.png"
import { useState } from 'react';
const Contact = () => {
	const [result, setResult] = useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending....");
		const formData = new FormData(event.target);

		formData.append("access_key", "f6074d7d-d0e0-41b2-a78e-ec643816f7cc");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData
		});

		const data = await response.json();

		if (data.success) {
			setResult("Form Submitted Successfully");
			event.target.reset();
		} else {
			console.log("Error", data);
			setResult(data.message);
		}
	};
	const { colorMode } = useColorMode();
	const isDark = colorMode === "dark";
	return (
		<Flex maxWidth={'1300px'} m={'auto'} mt={20} id="contact"
			flexDirection={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
			gap={{ base: 5, sm: 5, md: 10, lg: 10 }}
			p={{ base: 2, md: 5, lg: 0 }}
		>
			<Box flexBasis={'40%'}
				display={'flex'}
				justifyContent={'center'}
				flexDirection={'column'}
				gap={10}
			>
				<Text textTransform={'uppercase'} mb={-8} fontWeight={700}
					fontSize={{ base: "18px", sm: "18px", md: "30px", lg: "30px" }}
				>contact info</Text>
				<Flex gap={5}>
					<Box bg="linear-gradient(145deg, #e2e8ec, #ffffff)"
						boxShadow={isDark ? "" : "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"}
						borderRadius="7px" p={3}
					>
						<Image src={email} h={14} />
					</Box>
					<Box>
						<Text textTransform={'capitalize'} fontWeight={600} textColor={'#2196F3'}>email me</Text>
						<Text>kundanprogrammerz@gmail.com</Text>
						<Text>example@email.com</Text>
					</Box>
				</Flex>
				<Flex gap={5}>
					<Box bg="linear-gradient(145deg, #e2e8ec, #ffffff)"
						boxShadow={isDark ? "" : "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"}
						borderRadius="7px" p={3}>
						<Image src={call} h={14} />
					</Box>
					<Box>
						<Text textTransform={'capitalize'} fontWeight={600} textColor={'#37C6D0'}>contact me</Text>
						<Text>+91-8969122368</Text>
						<Text>+91-8935910543</Text>
					</Box>
				</Flex>
				<Flex gap={5}>
					<Box bg="linear-gradient(145deg, #e2e8ec, #ffffff)"
						boxShadow={isDark ? "" : "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"}
						borderRadius="7px" p={3}>
						<Image src={location} h={14} />
					</Box>
					<Box>
						<Text textTransform={'capitalize'} fontWeight={600} textColor={'#FF3D00'}>My Location</Text>
						<Text>Gopalganj, Bihar - 841427</Text>
						<Text>India</Text>
					</Box>
				</Flex>
				<Text mb={-8} textTransform={'uppercase'} fontWeight={700}>social info</Text>
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
						<Text as="span" textColor={'#FD185E'}>Let&#x27;s</Text> connect me</Text>
					<Spacer /><Image src={icon2} />
				</Flex>
				<form style={{ marginTop: "25px" }} onSubmit={onSubmit}>
					<FormControl px={5} display={'flex'} flexDirection={'column'} gap={10} width={'100%'}>
						<Input type='text' placeholder='Name*' borderColor="black" required />
						<Input type='email' placeholder='Email*' borderColor="black" required />
						<Input type='number' placeholder='Number*' borderColor="black" required />
						<Textarea placeholder='Your Message*' borderColor="black" required />
						<Button type='submit'><IoIosSend />Send Message</Button>
						<Text>{result}</Text>
					</FormControl>
				</form>
			</Box>
		</Flex>
	)
}

export default Contact
