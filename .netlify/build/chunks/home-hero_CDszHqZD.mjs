const heroImageSM = new Proxy({"src":"/_astro/Home-Hero-SM.BSdnepM0.png","width":375,"height":702,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/assets/images/Home-Hero-SM.png";
							}
							
							return target[name];
						}
					});

const heroImage = new Proxy({"src":"/_astro/home-hero.cpjZTgRU.png","width":2880,"height":907,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/assets/images/home-hero.png";
							}
							
							return target[name];
						}
					});

export { heroImage as a, heroImageSM as h };
