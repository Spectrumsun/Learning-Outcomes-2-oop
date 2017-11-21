import MobilePhone from '../oop'
import Tablet from '../tablet'
import chai  from 'chai'

const assert = chai.assert;


describe("oop()", () => {
	describe('Create an instance of a class', () => {
        it('Create an instance of the MobilePhone class when instanciated', () => {
            let samsung = new MobilePhone('Samsung');
            let isTypeOf = samsung instanceof MobilePhone;
            assert.equal(isTypeOf, true);
        	});

    describe('Create an instance of a class', () => {
        it('Create an instance of the Tablet class when instanciated', () => {
            let apple = new Tablet('apple');
            let isTypeOf = apple instanceof Tablet;
            assert.equal(isTypeOf, true);
        	});
    	});

    describe('Create an instance of a class', () => {
       	it('Should return OS is ANDROID Open Source', () => {
            let samsung = new MobilePhone('samsung');
			assert.equal(samsung.os(), "OS is ANDROID Open Source");
        	});

    	});

    describe('Should be unable to make call when battery is below 35%', () => {
       	it('Should return apple Battery too low to make calls', () => {
            let apple = new MobilePhone('apple', 20);
            assert.equal(apple.makeCall(), "apple Battery too low to make calls and recieve calls");
        });

    });

    describe('Should be able to save new contact', () => {
       	it('Should be able to save new contact', () => {
            let nokia = new MobilePhone('nokia', 70, 200);
            assert.equal(nokia.saveContact('jane', 'Doe', "0803985124"), "Contact Saved: First Name:  jane  Last Name:  Doe  Phome Number: 0803985124");
        });

    });

    describe('Should not be able to save new contact', () => {
       	it('Should be able to save new contact on apple tablet', () => {
            let apple = new Tablet('apple', 70, 200);
            assert.equal(apple.makeCall(), 'apple table cant send application');
        });

    });


	});

});




      

 