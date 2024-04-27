import { Box, Image, Text } from "@chakra-ui/react"
import TitleButton from "./TitleButton"
import Social from "./Social"
import coder_white from "../assets/coder_white.gif"

const Hero = () => {
	return (
		<Box maxW={'1300px'} m={'auto'}
			mt={{base: 0, md: 0, lg: 24}}
			display={'flex'}
			flexDirection={{ base: 'column-reverse', md: 'column-reverse', lg: "row" }}
			id="hero"
		>
			<Box
				// borderWidth={2}
				mt={{ base: 2, sm: 2, md: 2, lg: 0 }}
				w={{ base: "100%", sm: "100%", md: "100%" }}
				flexBasis={{base: "100%", lg: '50%' }}
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'center'}
				gap={{ base: 3, sm: 2, md: 5 }}
				px={{ base: "15px", sm: "15px", md: "30px", lg: "0" }}
				
			>
				<TitleButton title={"welcome to my world"} />
				<Text
					fontSize={{ base: "25px", sm: "30px", md: "45px", lg: "45px" }}
					fontWeight={700}
				>
					Hi,👋I&#x27;m <Text as="span" textColor={'#FD185E'}>Kundan Kr Gupta</Text>
				</Text>
				<Text
					fontWeight={700}
					fontSize={{ base: "18px", sm: "18px", md: "30px", lg: "30px" }}
				>
					<Text as="span" textColor={'#FD185E'}>an</Text> Aspiring Full Stack Developer...
				</Text>
				<Text as="p"
					fontSize={{ base: "14px", sm: "8px", md: "22px", lg: "16px" }}
					lineHeight={{ base: "22px", md: '40px', lg: "30px" }}
					textAlign={"left"}
				>
					Enthusiastic and technically adept front-end developer with a robust foundation in HTML, CSS, and JavaScript. Demonstrated commitment to coding excellence and a proactive approach to problem-solving.
				</Text>
				<Box>
					<Text>Connect with me</Text>
					<Social />
				</Box>
			</Box>
			<Box
				mt={{base: 5, md: 5, lg:0}}
				flexBasis={{ lg: '50%' }}
				p={{base: 2, md: 5, lg: 0}}
			>
				<Image src={coder_white} width={'100%'} h={'100%'} />
			</Box>
		</Box>
	)
}

export default Hero