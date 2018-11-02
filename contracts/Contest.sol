pragma solidity ^0.4.19;

/**
 * The Contest contract does this and that...
 */
contract Contest {
	
	// // declaring variables 
	// string public contestant;
	// // constructor
	// function Contest () {
	// 	contestant = "Tom";
	// }

	// creating a structure to model the contestant

	struct Contestant {
		uint id;
		string name;
		uint voteCount;
	}
	// using mapping to get of fetch the contestant details

	mapping (uint => Contestant) public contestants;

	// adding a variable to store contestant count
	
	uint public contestantsCount ;

	constructor () public {
		addContestant("Tom");
		addContestant("Jerry");
	}
		
	
	function addContestant (string _name) private {
		contestantsCount ++ ;
		contestants[contestantsCount] = Contestant(contestantsCount,_name,0);
		
	}
	


}
