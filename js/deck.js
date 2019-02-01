//Tarot Card App

//MODULE 1: Declarations

//create a 3 layer object: 
var deck = new Object ();

//layer 1. card (78) 
//layer 2. position (7)
//layer 3. orientation (2)
deck = {
	fool: {
		thePast: {
			up: [],
			down: [],
		},

		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	magician: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},	
	},
	highPriestess: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	empress: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	hierophant: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	lovers: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	chariot: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	strength: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	hermit: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	wheelOfFortune: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	justice: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	hangedMan: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	death: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	temperance: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	devil: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	tower: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	star: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	moon: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	sun: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	judgement: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	world: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},
	aceOfWands: {
		thePast: {
			up: [],
			down: [],
		},
		thePresent: {
			up: [],
			down: [],
		},
		whatIsHelping: {
			up: [],
			down: [],
		},
		obstaclesToOvercome: {
			up: [],
			down: [],
		},
		attitudesOfOthers: {
			up: [],
			down: [],
		},
		whatYouShouldDo: {
			up: [],
			down: [],
		},
		theOutcome: {
			up: [],
			down: [],
		},
	},

};

// MODULE 2: Functions
//create functions that prints the string stored in the deck object for the card that is dealt.

//fetch the element class to get the name of the card. 
//fetch the element class to get the position of the card.
//fetch the element class to get the orientation of the card. 

//get & output the appropriate object based on the classes assigned to the element. 

// MODULE 3: Execution