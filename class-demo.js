class Marvel {
	constructor(name) {
		this.name = name;
	}

	superpower() {
		console.log(`Here is your ${this.name}'s SuperPowers`);
	}
}

let superman = new Marvel('BatMan');
superman.superpower();
