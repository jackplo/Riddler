export default function update() {
	let start = new Date("10/26/2022 00:00:00");
	let today = new Date();

	//let difference = today.getTime() - start.getTime();
	//let i = Math.floor(difference / (1000 * 3600 * 24));
	//return i;

	return Math.floor((today.getTime() - start.getTime()) / (1000 * 3600 * 24));
}

