import {interpolateColors} from 'remotion';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Box, Flex} from '@chakra-ui/react';
import {WindowLayout} from './window-layout';
import '../fonts/Rubik.css';
import {
	BG_BLUE,
	BG_GREEN,
	BG_ORANGE,
	BG_PURPLE,
	CHANGE_COLOR_1,
	CHANGE_COLOR_2,
	CHANGE_COLOR_3,
	CHANGE_COLOR_FINISH_1,
	CHANGE_COLOR_FINISH_2,
	CHANGE_COLOR_FINISH_3,
	SCALE_BG_IN_FRAME,
	SCALE_BG_OUT_FRAME,
	SCALE_CODE_IN_FRAME,
	SCALE_CODE_OUT_FRAME,
} from '../consts';

const getScaleAnim = (frame: number, fps: number) =>
	spring({
		frame,
		config: {
			mass: 0.5,
		},
		fps,
	});

export const SnappifyLogo: React.FC<{
	transitionStart: number;
}> = () => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const scaleCodeIn = interpolate(
		getScaleAnim(frame - SCALE_CODE_IN_FRAME, videoConfig.fps),
		[0, 1],
		[1, 0.5]
	);
	const scaleCodeOut = interpolate(
		getScaleAnim(frame - SCALE_CODE_OUT_FRAME, videoConfig.fps),
		[0, 1],
		[0.5, 1]
	);
	let scaleCode = 1;
	if (frame >= SCALE_CODE_OUT_FRAME) {
		scaleCode = scaleCodeOut;
	} else if (frame >= SCALE_CODE_IN_FRAME) {
		scaleCode = scaleCodeIn;
	}

	const scaleBgOut = getScaleAnim(frame - SCALE_BG_OUT_FRAME, videoConfig.fps);
	const scaleBgIn = interpolate(
		getScaleAnim(frame - SCALE_BG_IN_FRAME, videoConfig.fps),
		[0, 1],
		[1, 0]
	);
	let scaleBg = 0;
	if (frame >= SCALE_BG_IN_FRAME) {
		scaleBg = scaleBgIn;
	} else if (frame >= SCALE_BG_OUT_FRAME) {
		scaleBg = scaleBgOut;
	}

	const colorFrom1 = interpolateColors(
		frame,
		[CHANGE_COLOR_1, CHANGE_COLOR_FINISH_1],
		[BG_ORANGE[0], BG_GREEN[0]]
	);
	const colorTo1 = interpolateColors(
		frame,
		[CHANGE_COLOR_1, CHANGE_COLOR_FINISH_1],
		[BG_ORANGE[1], BG_GREEN[1]]
	);
	const colorFrom2 = interpolateColors(
		frame,
		[CHANGE_COLOR_2, CHANGE_COLOR_FINISH_2],
		[BG_GREEN[0], BG_BLUE[0]]
	);
	const colorTo2 = interpolateColors(
		frame,
		[CHANGE_COLOR_2, CHANGE_COLOR_FINISH_2],
		[BG_GREEN[1], BG_BLUE[1]]
	);
	const colorFrom3 = interpolateColors(
		frame,
		[CHANGE_COLOR_3, CHANGE_COLOR_FINISH_3],
		[BG_BLUE[0], BG_PURPLE[0]]
	);
	const colorTo3 = interpolateColors(
		frame,
		[CHANGE_COLOR_3, CHANGE_COLOR_FINISH_3],
		[BG_BLUE[1], BG_PURPLE[1]]
	);
	let colorFrom = colorFrom1;
	let colorTo = colorTo1;
	if (frame >= CHANGE_COLOR_3) {
		colorFrom = colorFrom3;
		colorTo = colorTo3;
	} else if (frame >= CHANGE_COLOR_2) {
		colorFrom = colorFrom2;
		colorTo = colorTo2;
	}

	return (
		<Box pos="absolute" inset={0} bg="white">
			<Flex
				pos="absolute"
				align="center"
				justify="center"
				style={{
					width: videoConfig.width,
					height: videoConfig.height,
					transform: `scale(${scaleBg})`,
				}}
			>
				<Box
					borderRadius="8px"
					bg={`linear-gradient(354deg,  ${colorFrom}, ${colorTo})`}
					w="220px"
					h="200px"
				/>
			</Flex>
			<Flex
				pos="absolute"
				align="center"
				justify="center"
				style={{
					width: videoConfig.width,
					height: videoConfig.height,
					transform: `scale(${scaleCode})`,
				}}
			>
				<Box bg="#252525" borderRadius="10px" w="220px" h="170px">
					<WindowLayout />
					<Box
						textAlign="center"
						color="white"
						fontFamily="Rubik"
						fontWeight="bold"
						fontSize="90px"
						mt="5px"
					>
						&lt;&nbsp;&gt;
					</Box>
				</Box>
			</Flex>
		</Box>
	);
};
