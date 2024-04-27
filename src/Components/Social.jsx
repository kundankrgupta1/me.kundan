import { Button, ButtonGroup, Image, useColorMode } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import data from "../../db.json"

const Social = () => {
	const { colorMode } = useColorMode();
	const isDark = colorMode === "dark";
	return (
		<ButtonGroup>
			{
				data.social.map((e, ind) =>
					<Button _hover={'none'} py={6} px={2} w={'fit-content'} key={ind}
					display={'flex'}
					justifyContent={'center'}
					alignItems= {'center'}
					bg="linear-gradient(145deg, #e2e8ec, #ffffff)"
					boxShadow={isDark ? "":"5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"}
					borderRadius="7px"
					>
						<Link to={e.link} target="_blank">
							<Image h={38} src={e.img} />
						</Link>
					</Button>
				)
			}
		</ButtonGroup>
	)
}

export default Social
