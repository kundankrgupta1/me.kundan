import { Box, Flex, Image, SimpleGrid, Text, useColorMode } from "@chakra-ui/react"
import TitleButton from "../Components/TitleButton"
import Hicon from "../assets/Hicon.svg"
import data from "../../db.json"

const Skills = () => {
	const { colorMode } = useColorMode();
	const isDark = colorMode === "dark";
	return (
		<Box maxWidth={'1300px'} m={'auto'} mt={20} id="skills">
			<Box width={'100%'}>
				<TitleButton title={"skills that matters"} />
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
					>my skills</Text>
					<Image src={Hicon} />
				</Flex>
			</Box>
			<Box>
				<SimpleGrid minChildWidth='150px' spacingX={0} spacingY={4}>
					{
						data.skills.map((e, ind) =>
							<Box
								background={isDark ? "linear-gradient(120deg, rgba(52, 53, 54), rgba(31, 32, 33))" : "linear-gradient(120deg, rgba(245, 245, 245), rgba(213, 222, 235))"}
								borderRadius="10px"
								p={5}
								height={'160px'} width={'150px'}
								key={ind}
							>
								<Image src={e.tech} />
								<Text textAlign={'center'} fontWeight={600}>{e.name}</Text>
							</Box>
						)
					}
				</SimpleGrid>
				<br />
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
					>tools</Text>
					<Image src={Hicon} />
				</Flex>
				<SimpleGrid minChildWidth='150px' spacingX={0} spacingY={4}>
					{
						data.tools.map((e, ind) =>
							<Box
								background={isDark ? "linear-gradient(120deg, rgba(52, 53, 54), rgba(31, 32, 33))" : "linear-gradient(120deg, rgba(245, 245, 245), rgba(213, 222, 235))"}
								borderRadius="10px"
								p={5}
								height={'160px'} width={'150px'}
								key={ind}
							>
								<Image src={e.tool} />
								<Text textAlign={'center'} fontWeight={600}>{e.name}</Text>
							</Box>
						)
					}
				</SimpleGrid>
			</Box>
		</Box>
	)
}

export default Skills