import MobilePhone from './mobileoop'

class Tablet extends MobilePhone {
	constructor(brand, battryLevel, memory, screenSize){
		super(brand, battryLevel, memory, screenSize)
	}

	makeCall(){
		if(this.brand === 'apple'){
			return `${this.brand} table cant send application`
		}else if (this.battryLevel <= 30) {
			return `Battery too low to make calls and recieve calls`;

		}else{
			return `can make calls`
		}
	}

	sms(messgae){
		const phone = this.brand.toLowerCase()
	if(phone === 'apple'){
		return `${this.brand} table cant make phone send sms`
	}
	 else if(this.memory <= 50){
		return "Error Memory too low to send sms Free some Space"
	}else if (this.battryLevel <= 7){
		return 'Error Battery too low to send sms'
	}else if (messgae.length > 25  && this.memory < 100) {
		return '!!! messgae too much'
	}else {
		return `messgae sent: ${messgae}`
	}

	}
}

export default Tablet
