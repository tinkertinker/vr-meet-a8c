import { Animation, Entity } from 'aframe-react';

const Video = ( props ) => {
	const { url, position, width, height } = props;

	return (
		<Entity>
			<a-video src={ url } position={ position } width={ width } height={ height }>
				<Animation attribute="position" from={ [ position[0], -height, position[2] ] } to={ position } dur="5000"/>
			</a-video>
		</Entity>
	);
};

export default Video;
