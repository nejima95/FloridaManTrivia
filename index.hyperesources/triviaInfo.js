function getInfo() {
	window.numberOfQuestions = 10;
	window.currentSlide = 0;
	window.currentScore = 0;
	window.title = "FLORIDA MAN TRIVIA";

	window.questions = [
		"Florida man arrested for throwing an alligator through a drive-thru window. What year?",
		"Florida man tried to rob a store using a live iguana. What year?",
		"Florida man arrested for running in public inside a giant inflatable hamster ball. What year?",
		"Florida man arrested for stealing an excavator and crushing cars. What year?",
		"Florida man broke into jail just to hang out with friends. What year?",
		"Florida man chased by police while holding a sword. What year?",
		"Florida man used spaghetti sauce to vandalize a neighbor’s house. What year?",
		"Florida man called 911 because McDonald’s forgot his chicken nuggets. What year?",
		"Florida man arrested for practicing karate on swans. What year?",
		"Florida man arrested for stealing a lawn mower and driving it down the street. What year?"
	];

	window.correctAnswer = ["A","A","B","B","A","C","D","C","A","B"];

	window.answerA = ["2015","2018","2014","2004","2016","2014","2020","2016","2015","2014"];
	window.answerB = ["2010","2009","2015","2018","2008","2001","2011","2019","2011","2016"];
	window.answerC = ["2020","2012","2016","2011","2013","2019","2005","2018","2007","2018"];
	window.answerD = ["2003","2021","2018","2020","2021","2022","2017","2009","2019","2020"];
	window.answerE = ["2008","2015","2019","2019","2015","2016","2013","2021","2016","2021"];

	window.response = [
		"The gator-through-the-drive-thru incident happened in 2015. Only in Florida.",
		"The iguana robbery attempt occurred in 2018. The iguana was unharmed.",
		"The inflatable hamster ball incident happened in 2015 and confused everyone involved.",
		"The excavator rampage happened in 2018 and destroyed multiple cars.",
		"Breaking into jail to hang out with friends happened in 2016. Commitment issues.",
		"The sword chase occurred in 2019. Florida police were not amused.",
		"The spaghetti sauce vandalism took place in 2017. Very messy.",
		"The 911 chicken nugget complaint happened in 2019. Emergency nuggets.",
		"Karate on swans occurred in 2015. Swans won.",
		"The stolen lawn mower joyride happened in 2016. Slowest getaway ever."
	];
}
