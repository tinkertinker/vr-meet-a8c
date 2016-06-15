export default function adjustPosition( original, adjustment ) {
	return [
		original[0] + adjustment[0],
		original[1] + adjustment[1],
		original[2] + adjustment[2],
	]
}
