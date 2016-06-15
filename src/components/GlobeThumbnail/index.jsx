import { Entity, Animation } from 'aframe-react';

const Globe = ( props ) => {
	const { radius, position, url, onClick } = props;
	const geometry = {
		primitive: 'sphere',
		radius: radius
	};
	const material = {
		src: 'url(' + url + ')'
	}

	return (
		<Entity geometry={ geometry } position={ position } material={ material } onClick={ onClick }>
			<Animation attribute="scale" dur="5000" repeat="indefinite" from="1 1 1" to="2 2 2" fill="forwards" direction="alternate" easing="ease-in-out"/>
		</Entity>
	);
};

export default Globe;
