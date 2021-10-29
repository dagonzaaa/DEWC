
function comparar(a,b) {
	if (a<b) {
		return -1
	}else if (a>b) {
		return 1
	}else{
		return 0
	}
}

var items = [
  { name: 'Pikachu', type: 'Electrico' },
  { name: 'Charmaleon', type: 'Fuego' },
  { name: 'Vaporeon', type: 'Agua' },
  { name: 'Sandlash', type: 'Tierra' },
  { name: 'Victor', type: 'Fantasma' },
  { name: 'kadabra', type: 'Psiquico' }
  { name: 'Arceus', type: 'Fantasma' },
];

function comparar(a,b) {
	if (a.type<b.type) {
		return -1;
	}else if (a.type>b.type) {
		return 1;
	}else{
		if (a.name<b.name) {
			return -1;
		}else if (a.name>b.name) {
			return 1;
		}else{
			return 0;
		};
	};
};


items.sort(comparar)