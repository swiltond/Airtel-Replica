var app = angular.module('myApp', ['ngRoute', 'ui.sortable', 'moment-picker']);

app.controller('myCtrl', function($timeout,$scope,$window,$location,$anchorScroll) {
	var self = this;
	var anywhereClick = angular.element(window.document);
	var sidebar = angular.element(document.getElementsByClassName("sidebar1"));
	var content = angular.element(document.getElementsByClassName("content"));
	var header = angular.element(document.getElementsByTagName('header'));
	var headerSmall = angular.element(document.getElementsByClassName("headerSmall"));
	var headerLarge = angular.element(document.getElementsByClassName("headerLarge"));
	
	this.subMenuShw = true;
	this.protectionSubMenuShw = false;
	this.servicesSubMenuShw = false;
	this.searchTextShow = false;
	this.searchBarShow = true;
	this.userOptionsShow = false;
	this.loaderShw = false;
	this.policyNumber=19364138;
	this.navsidebar;
	
	this.fbIconClass = 'socialIconsInactive';
	this.twitterIconClass = 'socialIconsInactive';
	this.googlePlusIconClass = 'socialIconsInactive';
	this.instagramIconClass = 'socialIconsInactive';
	this.youtubeIconClass = 'socialIconsInactive';
	this.yahooIconClass = 'socialIconsInactive';
	
	this.myPolicyName = "IPRU iCare II RP Option I 19364138";
	this.services = ["Log a Call", "Premium Paid Certificate", "Personal and Contact Details", "Update Nominee Details", "Change in Portfolio Strategy(CIPS)", "Fund Value", "Switch", "Statements", "Pay Premium", "Annuity Details", "Automatic Transfer Plan/Strategy", "Top-Up", "Premium Redirection", "Annuity Registration", "Annuity Postponement", "Unclaimed Amount", "Servicing Inbox"];
	
	this.imgProfileClass = 'largeImgProfile';
	this.headerClass = 'largeHeader';
	this.searchBarClass = 'largeSearchBar';
	this.userOptionsClass = 'largeUserOptions';
	this.headerWelcomeDivClass = 'largeHeaderWelcomeDiv';
	
	angular.element($window).bind(
		"scroll", function() {
         	//console.log(window.pageYOffset);
         	if(window.pageYOffset > 0) {
           		self.imgProfileClass = 'smallImgProfile';
           		self.headerClass = 'smallHeader';
           		self.searchBarClass = 'smallSearchBar';
           		self.userOptionsClass = 'smallUserOptions';
           		self.headerWelcomeDivClass = 'smallHeaderWelcomeDiv';
         	} else {
           		self.imgProfileClass = 'largeImgProfile';
           		self.headerClass = 'largeHeader';
           		self.searchBarClass = 'largeSearchBar';
           		self.userOptionsClass = 'largeUserOptions';
           		self.headerWelcomeDivClass = 'largeHeaderWelcomeDiv';
         	}
         	$scope.$apply();
   	});	
	
	this.sortableOptions = {
    	items: '> div'
  	};
  	
	this.goToAlerts = function() {
      $location.hash('alertsNotify');
      $anchorScroll();
    };
    
    this.socialNetworkSelect = function(socialNetwrkName) {
		switch(socialNetwrkName) {
			case 'facebook':
				this.fbLoginShw = true;
				this.fbUsername = '';
				this.fbPassword = '';
				this.enableFbLoginSave = false;
				break;
			case 'twitter':
				this.twitterLoginShw = true;
				this.twitterUsername = '';
				this.twitterPassword = '';
				this.enableTwitterLoginSave = false;
				break;
			case 'googlePlus':
				this.googlePlusLoginShw = true;
				this.googlePlusUsername = '';
				this.googlePlusPassword = '';
				this.enableGooglePlusLoginSave = false;
				break;
			case 'instagram':
				this.instagramLoginShw = true;
				this.instagramUsername = '';
				this.instagramPassword = '';
				this.enableInstagramSave = false;				
				break;
			case 'youtube':
				this.youtubeLoginShw = true;
				this.youtubeUsername = '';
				this.youtubePassword = '';
				this.enableYoutubeSave = false;					
				break;
			case 'yahoo':
				this.yahooLoginShw = true;
				this.yahooUsername = '';
				this.yahooPassword = '';
				this.enableYahooSave = false;				
				break;																					
		}    	
    };
    
    this.socialNetworkCancel = function() {
    	this.fbLoginShw = false;
    	this.twitterLoginShw = false;
    	this.googlePlusLoginShw = false;
    	this.instagramLoginShw = false;
    	this.youtubeLoginShw = false;
    	this.yahooLoginShw = false;	
    };
    
    this.validateFbLogin = function() {
    	(this.fbUsername !== '' && this.fbUsername !== undefined) && (this.fbPassword !== '' && this.fbPassword !== undefined) ? this.enableFbLoginSave = true : this.enableFbLoginSave = false;
    };
    
    this.saveFbLogin = function() {
    	this.fbLoginShw = false;
    	this.fbIconClass = 'fa-facebook-f';
    };
    
    this.validateTwitterLogin = function() {
    	(this.twitterUsername !== '' && this.twitterUsername !== undefined) && (this.twitterPassword !== '' && this.twitterPassword !== undefined) ? this.enableTwitterLoginSave = true : this.enableTwitterLoginSave = false;
    };
    
    this.saveTwitterLogin = function() {
    	this.twitterLoginShw = false;
    	this.twitterIconClass = 'fa-twitter ';
    };
    
    this.validateGooglePlusLogin = function() {
    	(this.googlePlusUsername !== '' && this.googlePlusUsername !== undefined) && (this.googlePlusPassword !== '' && this.googlePlusPassword !== undefined) ? this.enableGooglePlusLoginSave = true : this.enableGooglePlusLoginSave = false;
    };
    
    this.saveGooglePlusLogin = function() {
    	this.googlePlusLoginShw = false;
    	this.googlePlusIconClass = 'fa-google-plus-g';
    };
    
    this.validateInstagramLogin = function() {
    	(this.instagramUsername !== '' && this.instagramUsername !== undefined) && (this.instagramPassword !== '' && this.instagramPassword !== undefined) ? this.enableInstagramSave = true : this.enableInstagramSave = false;
    };
    
    this.saveInstagramLogin = function() {
    	this.instagramLoginShw = false;
    	this.instagramIconClass = 'fa-instagram';
    };
    
    this.validateYoutubeLogin = function() {
    	(this.youtubeUsername !== '' && this.youtubeUsername !== undefined) && (this.youtubePassword !== '' && this.youtubePassword !== undefined) ? this.enableYoutubeSave = true : this.enableYoutubeSave = false;
    };
    
    this.saveYoutubeLogin = function() {
    	this.youtubeLoginShw = false;
    	this.youtubeIconClass = 'fa-youtube';
    };
    
    this.validateYahooLogin = function() {
    	(this.yahooUsername !== '' && this.yahooUsername !== undefined) && (this.yahooPassword !== '' && this.yahooPassword !== undefined) ? this.enableYahooSave = true : this.enableYahooSave = false;
    };
    
    this.saveYahooLogin = function() {
    	this.yahooLoginShw = false;
    	this.yahooIconClass = 'fa-yahoo';
    };                         		
	
	this.toggleNav = function() {
		
		//sidebar.removeClass('navCloseSidebar navOpenSidebar');
		if (sidebar.hasClass('navCloseSidebar')) {
			sidebar.removeClass('navCloseSidebar');
			sidebar.addClass('navOpenSidebar');
		} else {
			sidebar.removeClass('navOpenSidebar');			
			sidebar.addClass('navCloseSidebar');
		}
		
		if (content.hasClass('navCloseContent')) {
			content.removeClass('navCloseContent');
			content.addClass('navOpenContent');
		} else {
			content.removeClass('navOpenContent');			
			content.addClass('navCloseContent');
		}
		
		if (header.hasClass('navCloseHeader')) {
			header.removeClass('navCloseHeader');
			header.addClass('navOpenHeader');
			headerSmall.removeClass('displayNone').addClass('displayBlock');
			headerLarge.removeClass('displayBlock').addClass('displayNone');
		} else {
			header.removeClass('navOpenHeader');			
			header.addClass('navCloseHeader');
			headerSmall.removeClass('displayBlock').addClass('displayNone');
			headerLarge.removeClass('displayNone').addClass('displayBlock');
		}		
	};
	
	this.expandPolicies = function() {
		this.subMenuShw === true ? this.subMenuShw = false : this.subMenuShw = true;
		this.servicesSubMenuShw = false;
	};
	
	this.expandProtection = function() {
		this.protectionSubMenuShw === true ? this.protectionSubMenuShw = false : this.protectionSubMenuShw = true;
	};	

	this.expandServices = function() {
		this.servicesSubMenuShw === true ? this.servicesSubMenuShw = false : this.servicesSubMenuShw = true;
		this.subMenuShw = false;
	};	
	
	anywhereClick.bind('click', function(event){
    	var isButtonClick = event.target.className;

    	if(!(isButtonClick.endsWith('optionShow'))){
			self.userOptionsShow = false;
		}
	
   		$scope.$apply();
	});
	
	this.expandUserOpts = function() {
		this.userOptionsShow === true ? this.userOptionsShow = false : this.userOptionsShow = true ;
	};
	
	this.searchClick = function() {
		this.searchBarShow = false;
		this.searchTextShow = true;
	};
		
	this.getPolicy = function(policyNumber) {
		//sidebar.addClass('navSidebarMobile');
		//content.addClass('navContentMobile');
		var self = this;
		this.loaderShw = true;
		this.policyNumber = policyNumber;
		
		$timeout( function(){
			switch(policyNumber){
				case 19364138:
					self.myPolicyName = "IPRU iCare II RP Option I 19364138";
					self.policyActive(true, false, false, false, false);
					break;
				case 18730138:
					self.myPolicyName = "IPRU iCare II RP Option II 18730138";
					self.policyActive(false, true, false, false, false);
					break;
				case 19371716:
					self.myPolicyName = "IPRU iCare II RP Option I 19371716";
					self.policyActive(false, false, true, false, false);
					break;
				case 19369282:
					self.myPolicyName = "ICICI Pru Smart Life-RP 19369282";
					self.policyActive(false, false, false, true, false);
					break;
				case 19038156:
					self.myPolicyName = "ICICI Pru Savings Suraksha-LP 19038156";
					self.policyActive(false, false, false, false, true);
					break;								
			}
			self.loaderShw = false;
        }, 1000 );
	};
		
	this.policyActive = function (policy1, policy2, policy3, policy4, policy5) {
		this.policy1 = policy1;
		this.policy2 = policy2;
		this.policy3 = policy3;
		this.policy4 = policy4;
		this.policy5 = policy5;
	};
					
});

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/PolicyCards.html"
    })
    .when("/policies", {
        templateUrl : "views/Policies.html"
    })
    .when("/policyDetails", {
        templateUrl : "views/PolicyDetails.html",
        controller: 'policyDetailsController',
        controllerAs: 'CtrlPolicyDetails'
    })
	.when("/myProfile", {
        templateUrl : "views/MyProfile.html",
        controller: 'myProfileController',
        controllerAs: 'CtrlProfile'
    })    
    .otherwise({
		redirectTo: "/"
 	});
});