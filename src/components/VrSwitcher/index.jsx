import React from 'react'

const VrSwitcher = () => (
	<div>
		<div class="a-enter-vr" data-a-enter-vr-no-headset="" data-a-enter-vr-no-webvr="">
			<button class="a-enter-vr-button"></button>

			<div class="a-enter-vr-modal">
				<p>Your browser does not support WebVR. To enter VR, use a VR-compatible browser or a mobile phone.</p>
				<a href="http://mozvr.com/#start" target="_blank">Learn more.</a>
			</div>
		</div>

		<div class="a-orientation-modal a-hidden">
			<button>Exit VR</button>
		</div>
	</div>
);

export default VrSwitcher;
