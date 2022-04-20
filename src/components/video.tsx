import {Composition} from 'remotion';
import {SnappifyLogo} from './snappify-logo';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="SnappifyLogo"
				component={SnappifyLogo}
				durationInFrames={180}
				fps={30}
				width={240}
				height={240}
			/>
		</>
	);
};
