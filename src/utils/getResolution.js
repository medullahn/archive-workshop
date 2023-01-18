export const getDisplayInfo = (element) => {
	
	// const size = {
	// 	width: element.offsetWidth,
	// 	height: element.offsetHeight
	// }
	const size = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight
	}
	return size;
}