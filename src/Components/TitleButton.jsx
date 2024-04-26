import { Box, useColorMode } from "@chakra-ui/react"

const TitleButton = ({ title }) => {
	const { colorMode } = useColorMode();
	const isDark = colorMode === "dark";
	return (
		<Box
			width={'fit-content'}
			padding="5px"
			borderRadius="5px"
			textAlign="center"
			fontSize={{ base: "11px", md: "14px", lg: "14px" }}
			fontWeight="500"
			letterSpacing="3px"
			textTransform="uppercase"
			bgGradient="linear-gradient(145deg, #e2e8ec, #fff)"
			boxShadow={isDark ? "" : "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff"}
			textColor="black"
		>
			{title}
		</Box>
	)
}

export default TitleButton