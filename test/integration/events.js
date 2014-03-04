module('Events', {
	setup: function() {
		Testing.setupMarketplace();
		Testing.createDebit();
		Testing.createCustomer();
		Testing.createCredit();
		Testing.setupEvent();
	},
	teardown: function() {}
});

test('can visit page', function(assert) {
	var elements = {
		'.event-info .control-group:last': {
			classNames: 'refrence-transaction',
			hasText: true,
			hasChildren: true
		},
		'.prettyprint': {
			count: 1,
			classNames: 'lang-js',
			hasText: true
		},
		'.event-data-info h3': 'Event data',
		'.webhook-info h3': 'Webhooks'
	};

	visit(Testing.EVENT_ROUTE)
		.checkElements(elements, assert);
});
