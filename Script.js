var Main = {};

Main.Player = function(firstName, lastName, num, battingAvg)
{
	this.FirstName = firstName;
	this.LastName = lastName;
	this.Num = num;
	this.BattingAvg = battingAvg;
	this.GetFullName = function()
	
	{
		return this.FirstName + " " + this.LastName;
	}
	
	
}
Main.Player.prototype.SetFirstName = function(name)
{
	this.FirstName = name;
}


Main.Guyer = new Main.Player("Brandon", "Guyer", 6, ".266");
Main.Kipnis = new Main.Player("Jason", "Kipnis", 22, ".275");
Main.Ramirez = new Main.Player("Jose", "Ramirez", 11, ".312");
Main.Perez = new Main.Player("Roberto", "Perez", 55, ".183");
Main.Napoli = new Main.Player("Mike", "Napoli", 26, ".239");
Main.Chisenhall = new Main.Player("Lonnie", "Chisenhall", 8, ".286");
Main.Santana = new Main.Player("Carlos", "Santana", 41, ".259");
Main.Lindor = new Main.Player("Francisco", "Lindor", 12, ".301");



Main.Lindor.SetFirstName("BigBoy");
document.getElementById("lineup1").innerHTML = "Now batting " + "#" + Main.Lindor.Num + " " + Main.Lindor.GetFullName() + "....Batting Average is " + Main.Lindor.BattingAvg;

document.getElementById("lineup2").innerHTML = "Now batting " + "#" + Main.Santana.Num + " " + Main.Santana.GetFullName() + "....Batting Average is " + Main.Santana.BattingAvg;

document.getElementById("lineup3").innerHTML = "Now batting " + "#" + Main.Chisenhall.Num + " " + Main.Chisenhall.GetFullName() + "....Batting Average is " + Main.Chisenhall.BattingAvg;

document.getElementById("lineup4").innerHTML = "Now batting " + "#" + Main.Napoli.Num + " " + Main.Napoli.GetFullName() + "....Batting Average is " + Main.Napoli.BattingAvg;

document.getElementById("lineup5").innerHTML = "Now batting " + "#" + Main.Perez.Num + " " + Main.Perez.GetFullName() + "....Batting Average is " + Main.Perez.BattingAvg;

document.getElementById("lineup6").innerHTML = "Now batting " + "#" + Main.Ramirez.Num + " " + Main.Ramirez.GetFullName() + "....Batting Average is " + Main.Ramirez.BattingAvg;

document.getElementById("lineup7").innerHTML = "Now batting " + "#" + Main.Kipnis.Num + " " + Main.Kipnis.GetFullName() + "....Batting Average is " + Main.Kipnis.BattingAvg;

document.getElementById("lineup8").innerHTML = "Now batting " + "#" + Main.Guyer.Num + " " + Main.Guyer.GetFullName() + "....Batting Average is " + Main.Guyer.BattingAvg;

