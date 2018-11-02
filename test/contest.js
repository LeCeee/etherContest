var Contest = artifacts.require("./Contest.sol");
contract("Contest",(accounts) => {
	// to check if getting initialised correctlty
	it("initialises with two contestants ", () => {
		return Contest.deployed().then((instance) => {
			return instance.contestantsCount();
		}).then((count) => {
			assert.equal(count,2);
		});
	});

	// test 2 to check if the initialisation is with correct values
	it("initialises contestants with correct values " ,() => {
		return Contest.deployed().then((instance) => {
			contestInstance = instance;
			return contestInstance.contestants(1);
		}).then((contestant) => {
			assert.equal(contestant[0],1,"contains correct id");
			assert.equal(contestant[1],"Tom","contains correct name");
			assert.equal(contestant[2],0,"contains correct vote count");
			return contestInstance.contestants(2);
		}).then((contestant) => {
			assert.equal(contestant[0],2,"contains correct id");
			assert.equal(contestant[1],"Jerry","contains correct name");
			assert.equal(contestant[2],0,"contains correct vote count");
		});
	});
	
});