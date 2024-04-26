import { Box, Image, Text, useColorMode } from "@chakra-ui/react"
import about from "../assets/about.png"
import star from "../assets/star.png"
import icon2 from "../assets/icon2-2.png"
import TitleButton from "../Components/TitleButton"

const Abouts = () => {
	const { colorMode } = useColorMode();
	const isDark = colorMode === "dark";
	return (
		// <section id="#about">
		<Box maxWidth={'1300px'} m={'auto'} mt={20} display={'flex'} gap={10} id="about">
			<Box
				background={isDark ? "linear-gradient(120deg, rgba(52, 53, 54), rgba(31, 32, 33))" : "linear-gradient(120deg, rgba(245, 245, 245), rgba(213, 222, 235))"}
				borderRadius="30px"
				p={5}
				flexBasis={'30%'}
			>
				<Image src={about}
					bgGradient="linear(to-tr, #87CEEB, #87CEFA)"
					borderRadius="3xl"
					position="relative"
					width={'100%'}
				/>
			</Box>
			<Box
				flexBasis={'60%'}
			>
				<TitleButton title={"know me here"} />
				<Box
					display={'flex'}
					gap={5}
					justifyContent={'left'}
					alignItems={'center'}
				>
					<Image src={star} />
					<Text
						textTransform={'uppercase'}
						fontSize={'45px'}
						fontWeight={700}
					>self-summary</Text>
					<Image src={star} />
				</Box>
				<Box
					background={isDark ? "linear-gradient(120deg, rgba(52, 53, 54), rgba(31, 32, 33))" : "linear-gradient(120deg, rgba(245, 245, 245), rgba(213, 222, 235))"}
					borderRadius="30px"
					p={5}
					width={'100%'}
				>
					<Image src={icon2} />
					<Text
						fontSize={{ base: "25px", sm: "30px", md: "45px", lg: "45px" }}
						fontWeight={700}
					>
						<Text as="span" textColor={'#FD185E'}>Kundan Kumar </Text> Gupta
					</Text>
					<Text
						fontSize={{ base: "25px", sm: "30px", md: "45px", lg: "25px" }}
						fontWeight={700}
					>Full Stack Web Developer</Text>
					<Text
						mt={5}
						textColor={isDark?"":'#636363'}
						fontSize={'sm'}
					>
						Proactive full-stack web developer skilled in JavaScript and MERN stack (MongoDB, Express.js, React.js, Node.js). Collaborative team player translating project requirements into scalable web applications. Exceptional problem-solving and attention to detail, continuously updated with web dev trends for software excellence.
					</Text>
				</Box>
			</Box>
		</Box>
		// </section>
	)
}

export default Abouts