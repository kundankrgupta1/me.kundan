import { Box, Text } from "@chakra-ui/react"

const Footer = () => {
	return (
		<Box bg={'grey'} maxWidth={'1300px'} m={'auto'} p={5} mt={5} id="contact">
			<Text textAlign={'center'} textColor={'#fff'} fontWeight={500}>
			Copyright © 2014 Kundan Kumar Gupta. All rights reserved.
			</Text>
		</Box>
	)
}

export default Footer
