function Father() {
	if (this instanceof Father) {
		this.a = '22211'
	} else {
		return new Father()
	}
}
Father.prototype.say = function() {
	console.log('111')
}

function Sun() {
	this.b = '111'
}
Sun.prototype = new Father()

let a = new Father()
let b = new Sun()
console.log(a.a)
console.log(b.a)
console.log(b.b)
