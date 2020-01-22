app.controller('policyDetailsController', function() {

	this.tabNextDisabled = false;
	this.tabPrevDisabled = true;

	this.tabClick = function(tabName) {

		switch(tabName) {
			case 'snapShot':
				this.tab ='snapShot';
				this.policyTabVisibility(true, false);
				break;
			case 'members':
				this.tab ='members';
				this.policyTabVisibility(false, false);
				break;
			case 'dates':
				this.tab ='dates';
				this.policyTabVisibility(false, false);
				break;
			case 'paymentModes':
				this.tab ='paymentModes';
				this.policyTabVisibility(false, false);
				break;
			case 'productDetails':
				this.tab ='productDetails';
				this.policyTabVisibility(false, false);
				break;
			case 'services':
				this.tab ='services';
				this.policyTabVisibility(false, false);
				break;
			case 'actions':
				this.tab ='actions';
				this.policyTabVisibility(false, false);
				break;
			case 'others':
				this.tab ='others';
				this.policyTabVisibility(false, false);
				break;
			case 'important':
				this.tab ='important';
				this.policyTabVisibility(false, true);
				break;																																
		}
	};
	
	this.tabNextPolicy = function() {

		switch(this.tab) {
			case 'snapShot':
				this.tab = 'members';
				this.policyTabVisibility(false, '');
				break;
			case 'members':
				this.tab = 'dates';
				break;
			case 'dates':
				this.tab = 'paymentModes';
				break;
			case 'paymentModes':
				this.tab = 'productDetails';
				break;
			case 'productDetails':
				this.tab = 'services';
				break;
			case 'services':
				this.tab = 'actions';
				break;
			case 'actions':
				this.tab = 'others';
				break;
			case 'others':
				this.tab = 'important';
				this.policyTabVisibility('', true);
				break;																
		}
	};
	
	this.tabPrevPolicy = function() {
		switch(this.tab) {
			case 'important':
				this.tab = 'others';
				this.policyTabVisibility('', false);
				break;		
			case 'others':
				this.tab = 'actions';
				break;		
			case 'actions':
				this.tab = 'services';
				break;		
			case 'services':
				this.tab = 'productDetails';
				break;		
			case 'productDetails':
				this.tab = 'paymentModes';
				break;
			case 'paymentModes':
				this.tab = 'dates';
				break;
			case 'dates':
				this.tab = 'members';
				break;
			case 'members':
				this.tab = 'snapShot';
				this.policyTabVisibility(true, '');
				break;
		}
	};
			
	this.policyTabVisibility = function (tabPrevDisabled, tabNextDisabled) {
		this.tabPrevDisabled = tabPrevDisabled;
		this.tabNextDisabled = tabNextDisabled;
	};

});