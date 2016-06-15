const Sky = ( props ) => {
	const { url } = props;

	return (
		<a-sky src={ url }></a-sky>
	);
}

export default Sky;
