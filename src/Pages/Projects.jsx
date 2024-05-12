import { Box, Flex, Heading, Image, SimpleGrid, Text, useColorMode } from "@chakra-ui/react"
import TitleButton from "../Components/TitleButton"
import Hicon from "../assets/Hicon.svg"
import data from "../../db.json"
import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
const project = data.projects;
console.log(project.poster);
const Projects = () => {
	const { colorMode } = useColorMode();
	const isDark = colorMode === "dark";

	return (
		<Box maxWidth={'1300px'} m={'auto'} mt={20} id="projects" p={2}>
			<Box width={'100%'}>
				<TitleButton title={"recently added project"} />
				<Flex
					display={'flex'}
					gap={5}
					justifyContent={'left'}
					alignItems={'center'}
				>
					<Text
						textTransform={'uppercase'}
						fontSize={{ base: "40px", md: "45px", lg: "45px" }}
						fontWeight={700}
					>my projects</Text>
					<Image src={Hicon} />
				</Flex>
			</Box>

			<SimpleGrid minChildWidth='310px' spacing={'12px'} m={'auto'} >
				{
					project.map((e) =>
						<Box key={e.id} width={'310px'} background={isDark ? "linear-gradient(120deg, rgba(52, 53, 54), rgba(31, 32, 33))" : "linear-gradient(120deg, rgba(245, 245, 245), rgba(213, 222, 235))"} borderRadius="10px" p={5}>
							{e.poster.map((e, ind) => <Box key={ind} borderWidth={2} borderRadius={10}><Image src={e} key={ind} h={'160px'} w={'100%'} borderRadius={10} /></Box>)}
							<Flex my={5}>{e.tech.map((e, ind) => <Image key={ind} src={e} h={7} />)}</Flex>
							<Heading fontFamily={'Poppins, "sans-serif"'} as='h3' size='sm' fontWeight={600} my={2}>{e.title}</Heading>
							<Text my={2} fontWeight={400} textAlign={'justify'} fontSize={'xs'} h={28}
							// borderWidth={2}
							>{e.des}</Text>
							<Box display={'flex'} justifyContent={'space-around'} alignContent={'center'} >
								<Link to={e.githublink} target="_blank">
									<Text bg='#d10a0a' textColor={'#fff'} p={2} borderRadius={5} display={'flex'} justifyContent={'space-around'} alignItems={'center'} gap={2}>
										<FaGithub />Github
									</Text>
								</Link>
								<Link to={e.deployelink} target="_blank" >
									<Text bg='#08a632' textColor={'#fff'} p={2} borderRadius={5} display={'flex'} justifyContent={'space-around'} alignItems={'center'} gap={2}>
										<IoIosSend />Go Live
									</Text>
								</Link>
							</Box>
						</Box>
					)
				}
			</SimpleGrid>
		</Box>
	)
}

export default Projects