app.controller('myProfileController', function($timeout,$scope) {

	this.tabNextDisabledProfile = false;
	this.tabPrevDisabledProfile = true;
	this.profileEmail = "neeraj41173@gmail.com";
	this.profileDob = "11-04-1973";
	this.profileName = "Neeraj Sethi";
	this.profileGender = "Male";
	this.profileMaritialStatus = "Married";
	this.profileAadharNo = "726989611211";
	this.profileMobileNo = "9892200232";
	this.profileLandlineNo = "2242640232";
	this.profileCommAddress = "A 403 abrol vastu park, evershine nager malad west, near ryan school, addf,Mumbai, Maharashtra, 400064";
	
	angular.element(document).ready(function () {
		$('.myDate').dateDropper();
	});		
		
	this.tabClickProfile = function(tabName) { 

		switch(tabName) {
			case 'personalDetails':
				this.tabProfile ='personalDetails';
				this.profileTabVisibility(true, false);
				break;
			case 'contactDetails':
				this.tabProfile ='contactDetails';
				this.profileTabVisibility(false, false);
				break;
			case 'lifeAssured':
				this.tabProfile ='lifeAssured';
				this.profileTabVisibility(false, false);
				break;
			case 'uploadDocs':
				this.tabProfile ='uploadDocs';
				this.profileTabVisibility(false, true);
				break;													
		}	
	};
	
	this.tabNextProfile = function() {
	
		switch(this.tabProfile) {
			case 'personalDetails':
				this.tabProfile = 'contactDetails';
				this.profileTabVisibility(false, '');
				break;
			case 'contactDetails':
				this.tabProfile = 'lifeAssured';
				this.profileTabVisibility(false, '');
				break;
			case 'lifeAssured':
				this.tabProfile = 'uploadDocs';
				this.profileTabVisibility('', true);
				break;																				
		}	 
	};
		
	this.tabPrevProfile = function() {

		switch(this.tabProfile) {
			case 'uploadDocs':
				this.tabProfile = 'lifeAssured';
				this.profileTabVisibility('', false);
				break;		
			case 'lifeAssured':
				this.tabProfile = 'contactDetails';
				this.profileTabVisibility(false, '');
				break;		
			case 'contactDetails':
				this.tabProfile = 'personalDetails';
				this.profileTabVisibility(true, '');
				break;
		}	 
	};
	
	this.profileTabVisibility = function (tabPrevDisabledProfile, tabNextDisabledProfile) {
		this.tabPrevDisabledProfile = tabPrevDisabledProfile;
		this.tabNextDisabledProfile = tabNextDisabledProfile;
	};
	
	this.removeBodyScroll = function () {
		var body = angular.element( document.querySelector( 'body' ) );
		body.addClass('bodyNoScroll');
	};
	
	this.addBodyScroll = function () {
		var body = angular.element( document.querySelector( 'body' ) );
		body.removeClass('bodyNoScroll');
	};	
	
	this.addressSeparation = function (value) { 
		
		var addressSplit = value.split(',');
		
		this.compBuildingName = addressSplit[0];
		this.flatUnitNo = addressSplit[1];
		this.streetArea = addressSplit[2];
		this.landmark = addressSplit[3];
		this.city = addressSplit[4];
		this.state = addressSplit[5];
		this.pincode = addressSplit[6]; 
	};
	
	this.addressConcat = function (value) {
		this.profileCommAddress = this.compBuildingName + ', ' + this.flatUnitNo + ', ' + this.streetArea + ', ' + this.landmark + ', ' + this.city + ', ' + this.state + ', ' + this.pincode;  
	};
	
	this.uploadProfileImg = function($event) {
		var fileName = angular.element($('.uploadProfileImg')).val();
		fileName = fileName.split('\\').pop();		
	};
	
	this.editContact = function (editOption, value) {
		this.removeBodyScroll();
		
		if(editOption === "email") {
			this.profileEditShw = true;
			this.editEmailVal = value;
			this.enableSave = false;
			this.notValidEmail = false;
		} else if (editOption === "mobileNo") {
			this.profileMobileNoShw = true;
			this.editMobileNoVal = value;
			this.enableMobileNoSave = false;
			this.notValidMobileNo = false;
		} else if (editOption === "landlineNo") {
			this.profileLandlineNoShw = true;
			this.editLandlineNoVal = value;
			this.enableLandlineNoSave = false;
		} else if (editOption === "commAddress") {
			this.profileCommAddressShw = true;
			this.editCommAddressVal = value;
			this.addressSeparation(value);
			this.enableCommAddressSave = true;
		}
	};	
	
	this.editPersonal = function(editOption, value) {
		this.removeBodyScroll();
			
		if(editOption === "dob") {
			this.profileDobShw = true;
			this.dobdatepicker = value;
			this.enableDobSave = false;
			$timeout( function(){
				$('.myDate').dateDropper();
			}, 100 );			
		} else if (editOption === "name") {
			this.profileNameShw = true;
			this.editNameVal = value;
			this.enableNameSave = false;
		} else if (editOption === "gender") {
			this.profileGenderShw = true;
			this.editGenderVal = value;
			this.enableGenderSave = false;
		} else if (editOption === "maritialStatus") {
			this.profileMaritialStatusShw = true;
			this.editMaritialStatusVal = value;
			this.enableMaritialStatusSave = false;
		} else if (editOption === "aadharNo") {
			this.profileAadharNoShw = true;
			this.editAadharNoVal = value;
			this.enableEditAadharNoVal = true;
			this.enableAadharNoVerify = false;
			this.enableAadharNoSave = false;
			this.uploadBtnShw = false;
			this.aadharUploadFileNameShw = false;
			this.getOtpBtnShw = true;
			this.verifyBiometricBtnShw = true;
			this.saveBtnShw = false;
			this.aadharOtpShw = false;
		}
	};
	
	this.profileEditCancel = function () {
		this.addBodyScroll();
		this.profileEditShw = false;
		this.profileDobShw = false;
		this.profileNameShw = false;
		this.profileLastNameShw = false;
		this.profileGenderShw = false;
		this.profileMaritialStatusShw = false;
		this.profileAadharNoShw = false;
		this.profileMobileNoShw = false;
		this.profileLandlineNoShw = false;
		this.profileCommAddressShw = false;
	};
	
	this.validateEmail = function(value) {
		
		this.emailFormat  = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
		
		if(this.emailFormat.test(value) === true || value === "") {
			this.notValidEmail = false;
			value !== "" ? this.enableSave = true : this.enableSave = false;
		} else {
			this.notValidEmail = true;
			this.enableSave = false;
		}
	};
	
	this.updateEmail = function() {
		this.addBodyScroll();
		this.profileEmail = this.editEmailVal;
		this.profileEditShw = false;
	};
	
	this.validateDob = function () {
		this.enableDobSave = true;
	};
	
	this.updateDob = function(dobValue) {
		this.addBodyScroll();
		this.profileDob = dobValue;
		this.profileDobShw = false;
	};
	
	this.validateName = function() {
		
		this.editNameVal !== "" ? this.enableNameSave = true : this.enableNameSave = false;
	};
	
	this.updateName = function() {
		this.addBodyScroll();
		this.profileName = this.editNameVal;
		this.profileNameShw = false;
	};

	this.validateGender	= function() {
		this.enableGenderSave = true;
	};	
		
	this.updateGender = function() {
		this.addBodyScroll();
		this.profileGender = this.editGenderVal;
		this.profileGenderShw = false;
	};
	
	this.validateMaritialStatus	= function() {
		this.enableMaritialStatusSave = true;
	};
	
	this.updateMaritialStatus = function() {
		this.addBodyScroll();
		this.profileMaritialStatus = this.editMaritialStatusVal;
		this.profileMaritialStatusShw = false;
	};
	
	this.validateAadharNo = function(value) {
		value !== undefined && value.length === 12 ? this.enableAadharNoVerify = true : this.enableAadharNoVerify = false;
	};
	
	this.validateAadharOtp = function(value) {
		value !== undefined ? this.enableAadharNoSave = true : this.enableAadharNoSave = false;
	};
		
	this.generateAadhaarOtp = function() {
		this.aadharOtpVal = '';
		this.enableAadharNoSave = false;
		this.saveBtnShw = true;
		this.getOtpBtnShw = false;
		this.verifyBiometricBtnShw = false;
		this.enableEditAadharNoVal = false;
		this.aadharOtpShw = true;
		this.cancelOption = 'aadharOtp';
		this.okOption = 'otpBio';						
	};
	
	this.aadhaarBIOMCall = function() {
		this.saveBtnShw = true;
		this.enableAadharNoSave = false;
		this.getOtpBtnShw = false;
		this.verifyBiometricBtnShw = false;
		this.enableEditAadharNoVal = false;
		this.aadharBiometricOptionsShw = true;
		this.cancelOption = 'aadharOtp';
		this.okOption = 'otpBio';
	};
	
	this.biometricOption = function() {
		this.enableAadharNoSave = true;
	};		
	
	this.aadharSave = function() {
		if (this.okOption === 'otpBio') {
			this.aadharOtpShw = false;
			this.saveBtnShw = false;
			this.uploadBtnShw = true;
			this.cancelOption = 'cancelEdit';
			this.aadharUploadFileNameShw = true;
			this.aadharBiometricOptionsShw = false;
		} else if (this.okOption === 'aadharUpload') {
			this.addBodyScroll();
			this.profileAadharNo = this.editAadharNoVal;
			this.profileAadharNoShw = false;
		} 
	};
	
	this.uploadAadhar = function() {
		var fileName = angular.element($('#aadharUpload')).val();
		fileName = fileName.split('\\').pop();
		this.aadharUploadFileName = fileName;
		this.saveBtnShw = true;
		this.okOption = 'aadharUpload';
	};
			
	this.aadharOtpCancel = function() {
		if (this.cancelOption === 'aadharOtp') {
			this.saveBtnShw = false;
			this.getOtpBtnShw = true;
			this.verifyBiometricBtnShw = true;
			this.enableEditAadharNoVal = true;
			this.aadharOtpShw = false;
			this.cancelOption = 'cancelEdit';
			this.aadharBiometricOptionsShw = false;			
		} else if (this.cancelOption === 'cancelEdit') {
			this.profileEditCancel();
		}
	};
	
	this.validateMobileNo = function() {

		if(this.editMobileNoVal !== undefined && this.editMobileNoVal.length === 10) {
			this.enableMobileNoSave = true;
			this.notValidMobileNo = false;
		} else {
			this.enableMobileNoSave = false;
			this.notValidMobileNo = true;
		}
	};
	
	this.updateMobileNo = function() {
		this.addBodyScroll();	
		this.profileMobileNo = this.editMobileNoVal;
		this.profileMobileNoShw = false;
	};
	
	this.validateLandlineNo = function() {
		this.editLandlineNoVal !== undefined ? this.enableLandlineNoSave = true : this.enableLandlineNoSave = false;
	};
	
	this.updateLandlineNo = function() {
		this.addBodyScroll();	
		this.profileLandlineNo = this.editLandlineNoVal;
		this.profileLandlineNoShw = false;
	};
	
	this.updateCommAddress = function() {
		this.addBodyScroll();
		this.addressConcat();	
		this.profileCommAddressShw = false;
	};	
							
});