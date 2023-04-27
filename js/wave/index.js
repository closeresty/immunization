	var SEPARATION = 120,
		AMOUNTX = 150,
		AMOUNTY = 70;

	var container, stats;
	var camera, scene, renderer;

	var particles, particle, count = 0;

	var mouseX = 0,
		mouseY = 0;

	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;

	init();
	animate();

	function init() {

		container = document.createElement('div');
		var main = document.body.appendChild(container);
		container.className = "wave-poistion";
		document.getElementById('wave').append(main);

		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
		camera.position.z = 10000;

		scene = new THREE.Scene();

		particles = new Array();

		var PI2 = Math.PI * 2;
		var material = new THREE.SpriteCanvasMaterial({

			color: 0xf9b707,
			program: function(context) {

				context.beginPath();
				context.arc(0.9, 0, 0.5, 0, PI2, true);
				context.fill();

			}

		});

		var i = 0;

		for (var ix = 0; ix < AMOUNTX; ix++) {

			for (var iy = 0; iy < AMOUNTY; iy++) {

				particle = particles[i++] = new THREE.Sprite(material);
				particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
				particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
				scene.add(particle);

			}

		}

		renderer = new THREE.CanvasRenderer();
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		container.appendChild(renderer.domElement);



		//

		window.addEventListener('resize', onWindowResize, false);

	}

	function onWindowResize() {

		windowHalfX = window.innerWidth / 2;
		windowHalfY = window.innerHeight / 2;

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);

	}

	//

	//

	function animate() {

		requestAnimationFrame(animate);

		render();
		// stats.update();

	}

	function render() {


		camera.position.set(300, 800, 122);

		var i = 0;

		for (var ix = 0; ix < AMOUNTX; ix++) {

			for (var iy = 0; iy < AMOUNTY; iy++) {

				particle = particles[i++];
				particle.position.y = (Math.sin((ix + count) * 0.3) * 50) +
					(Math.sin((iy + count) * 0.5) * 50);
				particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 4 +
					(Math.sin((iy + count) * 0.5) + 1) * 4;

			}

		}

		renderer.render(scene, camera);

		count += 0.1;

	}