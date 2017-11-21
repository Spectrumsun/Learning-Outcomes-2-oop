class MobilePhone {
	constructor(brand, battryLevel, memory, screenSize){
		this.brand = brand || `Brand name not given`
		this.battryLevel = battryLevel || `Battery level unknow`;
		this.memory = memory || `memory Left not Specified`
		this.screenSize = screenSize || `screen size not given`	
	}

	os(){
		const phone = this.brand.toLowerCase()
		if(phone === 'apple'){
			return `OS is IOS Closed Source`
		}else if (phone === 'samsung' || 'htc' || 'nokia' || 'tecno'){
			return `OS is ANDROID Open Source`
		}else{
			return 'Unknow Maker'
		}
	}

	makeCall(){
		if (this.battryLevel >= 35){
			return  `${this.brand} can make calls`
			}
		return `${this.brand} Battery too low to make calls and recieve calls`;
	}

	saveContact(firstName, lastName, phoneNumber){
		if(this.memory <= 100){
			return "!!Memory too low to Store Contact Free some Space"
			}
		return  `Contact Saved: First Name:  ${firstName}  Last Name:  ${lastName}  Phome Number: ${phoneNumber}`
	}

	size(){
		if(this.screenSize  >= 6.5){
			return 'Not a phone!! too big' 
			}
		return 'Phone Screen Size'
	}

	sms(messgae){
		if(this.memory <= 50){
			return "Error Memory too low to send sms Free some Space"
		}else if (this.battryLevel <= 7){
			return 'Error Battery too low to send sms'
		}else if (messgae.length > 25  && this.memory < 100) {
			return '!!! messgae too much'
		}else {
			return `messgae sent: ${messgae}`
		}
	}

};






export default MobilePhone



/*const nokia = new MobilePhone("Nokia", 70, 500, 5.5);

/*const apple = new Tablet("APPLE", 70, 500, 5.5);

console.log(nokia.os());

console.log(nokia.sms('i am going'));

console.log(nokia.saveContact("john", "may" , 080323223));

console.log(nokia.size());

console.log(nokia.makeCall());

console.log(nokia.sms('i just want to say i love you!!!'))

*/

//








