import {Box, BoxProps, Flex} from '@chakra-ui/react';

const COLOR_WHITE_ALPHA = {
	50: 'rgba(255, 255, 255, 0.04)',
	100: 'rgba(255, 255, 255, 0.06)',
	200: 'rgba(255, 255, 255, 0.08)',
	300: 'rgba(255, 255, 255, 0.16)',
	400: 'rgba(255, 255, 255, 0.24)',
	500: 'rgba(255, 255, 255, 0.36)',
	600: 'rgba(255, 255, 255, 0.48)',
	700: 'rgba(255, 255, 255, 0.64)',
	800: 'rgba(255, 255, 255, 0.80)',
	900: 'rgba(255, 255, 255, 0.92)',
};

export const CODE_WINDOW_TAB_HEIGHT = '45px';

export const WindowControl = (props: BoxProps) => (
	<Box boxSize="13px" rounded="50%" mr="8px" {...props} />
);

export const WindowLayout = () => {
	return (
		<Flex h={CODE_WINDOW_TAB_HEIGHT} align="center" bg={COLOR_WHITE_ALPHA[100]}>
			<Flex px="16px">
				<WindowControl bg="#ff5f57" />
				<WindowControl bg="#febc2e" />
				<WindowControl bg="#28c840" />
			</Flex>
		</Flex>
	);
};
