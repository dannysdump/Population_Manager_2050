window.onload = function() {
	let Population = 800000000;
	let IntroText = ["> Time has not been kind to the world.", "> Due to effects of climate change and overpopulation", "> Global scarcity and global warming have ravaged society.", "> Most of the worlds nations have fallen into chaos, such as the United States.", "> A civil war has endlessly damaged the nation, until now...", "> On december 27th, 2049, on the eve of the new year...", "> YOU have emerged as the new ruler of this nation."]
	let PoliticalParty = ["> Party For The Iron Fist", "> Coalition Of Tomorrow", "> Macgreubers Inc."];
	const ParentDiv = document.getElementById("ConsoleDiv");
	const CrtDiv = document.getElementById("CrtEffectButton");
	const Overlay = document.getElementById("OverlayDiv");
	
	function SmoothTypeText(TextElement, Speed) {
		var i = 0;
		var TextString = "";
		
		var OutputElement = document.createElement("h1");
		ParentDiv.appendChild(OutputElement);
		
		function TimeoutTyper() {
			TextString = TextString.concat(TextElement.substr(i,1));
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
		var i = 0
		var Speed2 = Speed * DelayMultiplier;
		function ArrayTyper() {
			SmoothTypeText(TypeArray[i], Speed);
			if (i++ < TypeArray.length) setTimeout(ArrayTyper, TypeArray[i-1].length * Speed2);
		}
		ArrayTyper();
	}
	
	//CrtDiv.onclick = function() {
		//alert("hi");
		//Overlay.style.opacity = 0;
	//};
	
	SmoothTypeArray(IntroText, 50, 2);
}