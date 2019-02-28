export default class ConfettiGenerator {
	constructor(options) {
		this.parent = options.target || document.body;
		this.canvas = document.createElement('canvas');
		this.ctx = this.canvas.getContext('2d');
		this.width = options.width || this.parent.offsetWidth;
		this.height = options.height || this.parent.offsetHeight;
		this.numParticles = options.numParticles || ConfettiGenerator.CONST.NUM_PARTICLES;
		this.sprites = [];

		// Set default canvas style
		this.canvas.style.cssText = [
			'display: block',
			'position: absolute',
			'top: 0',
			'right: 0',
			'bottom: 0',
			'left: 0',
			'pointer-events: none',
		].join(';');

		this.build();
		this.render = this.render.bind(this);
		this.parent.appendChild(this.canvas);

		requestAnimationFrame(this.render);
	}

	static get CONST() {
		return {
			NUM_PARTICLES: 150,
			PARTICLE_TYPES: ['circle', 'triangle', 'line'],
			PARTICLE_ANGLES: [[4, 0, 4, 4], [2, 2, 0, 4], [0, 4, 2, 2], [0, 4, 4, 4]],
			COLORS: [[238, 96, 169], [68, 213, 217], [245, 187, 152], [144, 148, 188], [235, 234, 77]],
		};
	}

	build = () => {
		this.canvas.width = this.width;
		this.canvas.height = this.height;

		for (let i = 0; i < this.numParticles; i++) {
			this.sprites.push({
				x: Math.random() * this.width, // X-coordinate
				y: Math.random() * this.height, // Y-coordinate
				r: Math.random() * 4 + 1, // Radius
				d: Math.random() * this.numParticles, // Density
				l: Math.floor(Math.random() * 65 + -30), // Line Angle
				a:
					ConfettiGenerator.CONST.PARTICLE_ANGLES[
						Math.floor(Math.random() * ConfettiGenerator.CONST.PARTICLE_ANGLES.length)
					], // Triangle Rotation
				c:
					ConfettiGenerator.CONST.COLORS[
						Math.floor(Math.random() * ConfettiGenerator.CONST.COLORS.length)
					], // Color
				t:
					ConfettiGenerator.CONST.PARTICLE_TYPES[
						Math.floor(Math.random() * ConfettiGenerator.CONST.PARTICLE_TYPES.length)
					], // Shape
			});
		}
	};

	update = () => {
		for (let i = 0; i < this.numParticles; i++) {
			let p = this.sprites[i];
			p.y += Math.cos(p.d) + 1 + p.r / 2;
			p.x += Math.sin(0) * 2;

			if (p.x > this.width + 5 || p.x < -5 || p.y > this.height) {
				this.sprites[i] = {
					x: Math.random() * this.width,
					y: -10,
					r: p.r,
					d: p.d,
					l: p.l,
					a: p.a,
					c: p.c,
					t: p.t,
				};
			}
		}
		requestAnimationFrame(this.render);
	};

	render = () => {
		this.ctx.clearRect(0, 0, this.width, this.height);

		for (let i = 0; i < this.numParticles; i++) {
			let p = this.sprites[i];
			let op = p.r <= 3 ? 0.4 : 0.8;

			if (p.t === 'circle') {
				this.ctx.fillStyle = 'rgba(' + p.c + ', ' + op + ')';
				this.ctx.beginPath();
				this.ctx.moveTo(p.x, p.y);
				this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
				this.ctx.fill();
			} else if (p.t === 'triangle') {
				this.ctx.fillStyle = 'rgba(' + p.c + ', ' + op + ')';
				this.ctx.beginPath();
				this.ctx.moveTo(p.x, p.y);
				this.ctx.lineTo(p.x + p.r * p.a[0], p.y + p.r * p.a[1]);
				this.ctx.lineTo(p.x + p.r * p.a[2], p.y + p.r * p.a[3]);
				this.ctx.closePath();
				this.ctx.fill();
			} else if (p.t === 'line') {
				this.ctx.strokeStyle = 'rgba(' + p.c + ',' + op + ')';
				this.ctx.beginPath();
				this.ctx.moveTo(p.x, p.y);
				this.ctx.lineTo(p.x + p.l, p.y + p.r * 5);
				this.ctx.lineWidth = 2;
				this.ctx.stroke();
			}
		}
		this.update();
	};
}
