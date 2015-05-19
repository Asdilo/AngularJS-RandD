(function () {
	var app = angular.module('store', []);

	app.controller('StoreController', function () {
		this.products = gems;
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas aliquam rutrum.',
			images: [
				{
					full: 'img/rabobank-logo.jpg',
					thumb: 'img/rabobank-logo68x80.jpg'
				}
			],
			canPurchase: false,
			soldOut: false,
		},
		{
			name: 'Asterisk Gem',
			price: 312.84,
			description: 'The eight sided most ballin-est gem evaaars',
			images: [
				{
					full: 'img/rabobank-logo.jpg',
					thumb: 'img/rabobank-logo68x80.jpg'
				}
			],
			canPurchase: true,
			soldOut: false,
		}
	];
})();
