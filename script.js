window.onload = function() {
	
	//Visible Game Stat Variables
	let Population = 800000000;

	let Trust = 0;
	let Justice = 0;
	let Technology = 0;
	let Resources = 0;
	let Wealth = 0;
	let Corruption = 0;
	let Authoritarianism = 0;
	
	let Faction = 0;
	let Year = 2050;
	
	//Game Key Variable Arrays
	var EndingNames = [];
	var EndingRequirements = [];
	var EndingDescriptions = [];
	
	var DecisionYears = [];
	var DecisionNames = [];
	var ChoiceNames = [];
	var ChoiceGains = [];
	var ChoiceDescriptions = [];
	
	var Gain1 = [];
	var Req1 = [];
	var InGame = false;
	var yn = true;
	
	//Nuh uh I'm just inserting the text here, you can't make me do anything else
	var KeyText = "Flanderization%A+20 M-5%Hedonistic aristocracy, massive wealth disparity, bureaucratic failure and mass corruption have turned America into a burning dumpster fire.%Bread and Circuses%A+20 T+5%Citizens are satisfied but are heavily monitored and controlled so they don't do the wrong thing.%The Machine Kills Order%A+20 T-5%An uprising of people wanting free will have marched up to your front door, and before the society could stop them, they have killed you.%Forever Tomorrow%Q+20 M+5 / T+5%Rebuilding your country successfully, finding ways to support the population, and keeping your back knife-free have led to this bright day. It may or may not be better than before, but there's always Tomorrow.%There Was a Machine Made of Dust%Q+30 P+5 %An AI machine created to automate microchip production loses control and turns populace, and eventually whole landscapes into microchips after running out of material.%Beware the Ides%Q+20 T-5%Your councilors are unhappy. Your reward is becoming a new human knife-holder.%Resources of the People%W+20 T-5%The H.R. department has revolted, ousting you from your position, and adopting more social policies...%Bigger is Better%W+25%Citizens are being sold goods made of the remains of other citizens, Cancer rates are skyrocketing, and symptoms of heavy metal poisoning are being treated as the flu, all in the name of increasing. that. PROFIT.%2050%The P.O.W. Problem%The Staple Scheme%R+2 J+1 M+1 W+1%They have some brilliant minds on their side, perhaps we can pardon some of them for their treasonous acts...%Guilty As Charged%J+2 M-1%We must not ignore what these people have done. They have tried, unsuccessfully, to stop us from reigning. They must be imprisoned.%High Treason%M-2 T+1 J+2%The crimes they've commited are unforgivable. They must be removed from the nation.%2055%The Sustenance Scramble%Operation Soylent%R+4 T-2 M-2 W+2%A solution to overpopulation and world hunger!%Growth Season%For the most part do nothing about the crisis but give moderate support to farmers in order to feign a sense of caring.%R+1 T+1%Farming Frenzy%Create large-scale industrial farms to feed the populace, at the cost of smaller farmers that used to inhabit the small amounts of fertile land left...%R+3 M-2 J-1 W+1%2060%The Drought Drama%More for Me%M-2 R+4 T-2%Why do we need to care about the matters of lowly citizens? We need all the water for ourselves.%Maximal Efficiency%R+1 Q+1%Reroute the rivers to maximize rain and minimize waste.%Just Borrowing%R+2 T-2%Collect water from other countries to 'bring it back'... eventually.%2065%The International Issue%Choice 1%M+1%Description 1%Choice 2%R+1%Description 2%Choice 3%T+1%Description 3%2070%The Technological Troubles%Choice 1%M+1%Description 1%Choice 2%R+1%Description 2%Choice 3%T+1%Description 3%2075%The Domestic Dispute%Choice 1%M+1%Description 1%Choice 2%R+1%Description 2%Choice 3%T+1%Description 3%2080%The Food Flight%Choice 1%M+1%Description 1%Choice 2%R+1%Description 2%Choice 3%T+1%Description 3%2085%The Energy Enigma%Choice 1%M+1%Description 1%Choice 2%R+1%Description 2%Choice 3%T+1%Description 3%2090%The Political Predicament%Choice 1%M+1%Description 1%Choice 2%R+1%Description 2%Choice 3%T+1%Description 3%2095%The Rebellion Routs%Choice 1%M+1%Description 1%Choice 2%R+1%Description 2%Choice 3%T+1%Description 3"
	
	//Processing Text into Key Arrays
	var kSplit1 = KeyText.split("%");
	for (var a = 0; a < kSplit1.length; a++) {
		if (a < 24) {
			if ((a + 2) % 3 == 0) { EndingRequirements[a / 3] = kSplit1[a]; }
			else if ((a + 1)% 3 == 0) { EndingDescriptions[a / 3] = kSplit1[a]; } 
			else if (a % 3 == 0) { EndingNames[a / 3] = kSplit1[a]; }
			//console.log(EndingNames[a/3]);
		}
		if (a > 23) {
			if ((a + 1) % 5 == 0) { DecisionYears[a / 5 - 23] = kSplit1[a]; }
			else if ((a + 2) % 5 == 0) { DecisionNames[a / 5 - 23] = kSplit1[a]; }
			else if ((a + 3) % 5 == 0) { ChoiceNames[a / 5 - 23] = kSplit1[a]; }
			else if ((a + 4) % 5 == 0) { ChoiceGains[a / 5 - 23] = kSplit1[a]; }
			else if (a % 5 == 0){ ChoiceDescriptions[a / 5 - 23] = kSplit1[a]; }
			console.log(DecisionYears[a / 5 - 23]);
			console.log(DecisionNames[a / 5 - 23]);
			console.log(ChoiceNames[a / 5 - 23]);
			console.log(ChoiceGains[a / 5 - 23]);
			console.log(ChoiceDescriptions[a / 5 - 23]);
		}
		//console.log(kSplit1[a]);
	}
	
	//Processing Stat Gains and Reqs
	function processStats(StatArray, NewArray) {
		for (var i = 0; i < StatArray.length; i++) {
			var TempProcess = StatArray[i].split(" ");
			console.log("hi");
			for (var j = 0; j < TempProcess.length * 2; j += 2) {
				var SubChoice = NewArray[i];
				SubChoice[j] = TempProcess[j / 2].charAt(1);
				SubChoice[j + 1] = TempProcess[j / 2].charAt(0);
				console.log(SubChoice[j]);
			}
		}
	}
	processStats(EndingRequirements, Req1);
	
	//Miscellaneous Strings
	let IntroText = ["> Time has not been kind to the world.", "> Due to effects of climate change and overpopulation...", "> Global scarcity and global warming have ravaged society.", "> Most of the worlds nations have fallen into chaos...", "> one such nation is the United States.","> A civil war has endlessly damaged the nation, until now...", "> On december 27th, 2049, on the eve of the new year...", "> YOU have emerged as the new ruler of this nation."]
	let PoliticalParty = ["> Party For The Iron Fist", "> Coalition Of Tomorrow", "> Macgreubers Inc."];
	
	var ArrayFinished = false;
	
	//HTML Element References
	const ConsoleDiv = document.getElementById("ConsoleDiv");
	
	//Visual Effect Functions 
	function SmoothTypeText(TextElement, Speed) {
		var i = 0;
		var TextString = "";
		
		var OutputElement = document.createElement("h1");
		ConsoleDiv.appendChild(OutputElement);
		//OutputElement.style.position = "relative";
		
		function TimeoutTyper() {
			TextString = TextString.concat(TextElement.substr(i, 1));
			OutputElement.innerHTML = TextString;
			if (i++ < TextElement.length) setTimeout(TimeoutTyper, Speed);
		}
		TimeoutTyper();
	}
	
	function SmoothFadeInOut(FadeElement, Speed, In) {
		var i = 0;
		var FadeDirection = -.01;
		var CurrentOpacity = 1;
		if (In == true) {
			FadeDirection = .01;
			var CurrentOpacity = 0;
		}
		
		function FadeSetter() {
			CurrentOpacity += FadeDirection;
			FadeElement.style.opacity = CurrentOpacity;
			FadeElement.zIndex = -1;
			if (i++ < 100) setTimeout(FadeSetter, Speed / 100);
		}
		FadeSetter();
	}
	
	function SmoothFlickerInOut(FlickerElement, Speed, Length, In) {
		var i = 0;
		var FlipFlopBool = true;
		
		function FlickerFunc() {
			if (FlipFlopBool == true) {
				FlickerElement.style.opacity = 0;
				FlipFlopBool = false
			} else {
				FlickerElement.style.opacity = 1;
				FlipFlopBool = true
			}
			if (i >= Length - 1) {
				if (In == true) {
					FlickerElement.style.opacity = 1;
				} else {
					FlickerElement.style.opacity = 0;
				}
			}
			if (i++ < Length) setTimeout(FlickerFunc, Speed);
		}
		FlickerFunc();
	}
	
	function SmoothTypeArray(TypeArray, Speed, DelayMultiplier) {
		ArrayFinished = false;
		var i = 0
		var Speed2 = Speed * DelayMultiplier;
		function ArrayTyper() {
			SmoothTypeText(TypeArray[i], Speed);
			if (i++ < TypeArray.length) setTimeout(ArrayTyper, TypeArray[i - 1].length * Speed2);
			else if (i > TypeArray.length - 2) {ArrayFinished = true;}
		}
		ArrayTyper();
		return ArrayFinished;
	}
	
	//CrtDiv.onclick = function() {
		//alert("hi");
		//Overlay.style.opacity = 0;
	//};
	
	//Intro Screen-Specific Transition
	function IntroScreen(DissapearDiv, FlickerIn) {
		DissapearDiv.style.opacity = 0;
		if (FlickerIn == true) {
			SmoothFlickerInOut(document.getElementById("MainMenuVis"), 20, 20, true);
			SmoothFlickerInOut(document.getElementById("MainMenuInvis"), 20, 20, true);
		} else {
			document.getElementById("MainMenuVis").style.opacity = 1;
			document.getElementById("MainMenuInvis").style.opacity = 1;
		}
	}
	
	//Game Intro Function Calls
	SmoothTypeArray(IntroText, 50, 2);
	if (ArrayFinished == true) {
		SmoothTypeText("Erm..what the skibidi",50)
	}
	
	//Handling Key Inputs
	document.onkeydown = function() {
		switch (yn) {
			case false:
				
				break;
			case true:
				break;
		}
	};
}
