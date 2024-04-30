window.onload = function() {
	let LinkYes = "> <a href=\"/index.html\">Here</a>";
	let ButtonYes = "> <a href=\"/index.html\"><input type=\"button\" name=\"link\" value=\"Yes\"></a>";
	let IntroText = ["> Welcome, User", "> You are about to enter a simulation of the terrors of overpopulation.", "> Do you wish to proceed?", "> Y/N"]
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

	document.onkeydown = function (e) {
		switch (e.key)
		{
			case "y": window.location.href = "/index.html"; break;
			case "n": SmoothTypeText("Are you sure you don't want to?", 50); break;
		}
	};
}