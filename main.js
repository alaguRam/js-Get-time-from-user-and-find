//Get time from user and find(morning,afternoon,or night)
var a=prompt("ENTER THE TIME");
	let b=new Date();
	 b.setHours(a);
	 let time=b.getHours(a);
	 
	 
	
	

	if(time<=12){
		document.write("morning");
		}
	else if(time>=12 && time<=17){
		document.write("afternoon");
		}
	else if(time>=18 && time<=20){
		document.write("evening");
		}	
	else if(time>=21 && time<=24){
		document.write("night");
	}
	else{
		document.write("only 24 hours");
	}