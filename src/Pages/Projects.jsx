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
		<Box maxWidth={'1300px'} m={'auto'} mt={20} id="projects">
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
						fontSize={'45px'}
						fontWeight={700}
					>my projects</Text>
					<Image src={Hicon} />
				</Flex>
			</Box>

			<SimpleGrid minChildWidth='400px' spacing={'12px'}>
				{
					project.map((e) =>
						<Box key={e.id} width={'400px'} background={isDark ? "linear-gradient(120deg, rgba(52, 53, 54), rgba(31, 32, 33))" : "linear-gradient(120deg, rgba(245, 245, 245), rgba(213, 222, 235))"}
							borderRadius="10px" p={5}>
							{e.poster.map((e, ind) => <Box key={ind} borderWidth={2} borderRadius={10}><Image src={e} key={ind} h={'200px'} borderRadius={10} /></Box>)}
							<Flex>{e.tech.map((e, ind) => <Image key={ind} src={e} h={12} />)}</Flex>
							<Heading as='h3' size='lg' my={2}>{e.title}</Heading>
							<Text mb={5}>{e.des}</Text>
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