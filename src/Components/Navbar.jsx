import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, Image, List, ListItem, Spacer, useColorMode, useDisclosure } from "@chakra-ui/react"
import data from "../../db.json"
import logo from "../assets/logo.png"
import { FiMoon, FiSun } from "react-icons/fi"
import { FaBars } from "react-icons/fa"
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react"
const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === "dark";
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [fixed, setFixed] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 90 ? setFixed(true) : setFixed(false)
		})
	}, [])

	return (
		<>
			<Drawer placement="right" onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader borderBottomWidth='2px'>Menu</DrawerHeader>
					<DrawerBody p={0}>
						<List display='flex' flexDirection="column">
							{
								data.category.map((e, index) =>
									<ListItem key={index}>
										<ScrollLink to={e.link}>
											<Button bg="none" textTransform="uppercase">{e.name}</Button>
										</ScrollLink>
									</ListItem>
								)
							}
						</List>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
			<Box shadow={'md'} bg={isDark ? "#1A202C":"#fff"} w={'100%'} position={fixed ? 'fixed' : ""} transition={fixed ? "0.5s" : ""} zIndex={fixed ? 10 : 0} top={fixed ? 0 : 0}>
				<Flex
					maxWidth="1300px"
					m='auto'
					h={{ sm: "75px", md: "80px", lg: "90px" }}
					py={2}
					align="center"
				>
					<ScrollLink to="">
						<Image
							src={logo}
							h={{ base: "40px", sm: "40px", md: "50px", lg: "60px" }}
							px={{ base: "15px", sm: "15px", md: "15px", lg: "0px" }}
							py={{ base: "2px", sm: "2px", md: "2px" }} />
					</ScrollLink>
					<Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer />
					<Flex display={{ base: "none", sm: "none", md: "none", lg: "block", xl: "block" }} >
						<List display='flex' gap={10}>
							{
								data.category.map((e, index) =>
									<ListItem key={index}
										fontWeight={300}
										fontSize={'14px'}
										textTransform="uppercase"
										cursor="pointer"
									>
										<ScrollLink
											to={e.link}
											spy={true}
											offset={e.offset}
											smooth={true}
											duration={500}
										>
											{e.name}
										</ScrollLink>
									</ListItem>
								)
							}
						</List>
					</Flex>
					<Spacer />
					<Flex gap={{ base: "2", sm: "2", md: "4", lg: "3" }} display="flex" alignItems="center">

						<Spacer />
						<Box>
							<IconButton
								px={{ base: "15px", sm: "15px", md: "30px", lg: "20px" }}
								py={{ base: "15px", sm: "25px", md: "30px", lg: "20px" }}
								borderRadius="5px"
								border="none"
								outline="none"
								cursor="pointer"
								transition="all 0.3s ease"
								color="#ff014f"
								fontSize={{ base: "14px", sm: "14px", md: "13px" }}
								fontWeight="500"
								bgGradient="linear-gradient(145deg, #e2e8ec, #ffffff)"
								boxShadow={isDark ? "" : "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"}
								_hover={'none'}
								icon={isDark ? <FiSun /> : <FiMoon />} onClick={toggleColorMode} />
						</Box>
						<Spacer />
						<RouterLink to="https://resume-builder-test-new.masaischool.com/resume/public?resumeId=662a1e099ae9ae3f6894e766" target="_blank">
							<Button
								px={{ base: "15px", sm: "15px", md: "30px", lg: "20px" }}
								py={{ base: "15px", sm: "25px", md: "30px", lg: "20px" }}
								borderRadius="5px"
								border="none"
								outline="none"
								cursor="pointer"
								transition="all 0.3s ease"
								color="#ff014f"
								fontSize={{ base: "14px", sm: "14px", md: "20px", lg: "13px" }}
								fontWeight="500"
								bgGradient="linear-gradient(145deg, #e2e8ec, #ffffff)"
								boxShadow={isDark ? "" : "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"}
								textTransform={'uppercase'}
								_hover={'none'}
							>
								resume
							</Button>
						</RouterLink>
						<Spacer />
						<IconButton fontSize='2xl' variant='ghost' onClick={onOpen} display={{ lg: "none" }}><FaBars />
						</IconButton>
					</Flex>
				</Flex>
			</Box>
		</>
	)
}

export default Navbar