var allSigns = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
var messages = ["Your instincts urge an occasional break from conventional norms today; as long as you don’t harm anyone" +
"or break any laws, it’s all innocent fun. Sing from the heart. Dance like no one’s watching. Wear the purple hat" +
"with the crazy flower on it.", "Your concentration is epic today. Once your mind is set, it is fixed. Daydreams, gossip,"+
"sports, and all other typical diversions can breeze right by without latching hold.", "There’s change in the air today" +
"when your focus naturally shifts from acquiring more things toward taking better care of what you already own." +
"It’s easy to get swept away by the desire to fill your bureau drawers, closets and cupboards. But when those are" +
"stuffed to the breaking point, you might find yourself wondering what you’re going to do with all of this excess.", "Don’t" +
" shy away from the people, places, and life experiences that most pique your interest today. Good energy" +
"multiplies itself, so the more of it that you generate, the bigger your personal storehouse of positive vibes" +
"grows. When what you are building contains components like kindness, compassion, and nourishment, it’s made of" +
"indestructible stuff. Who you are is revealed by what you do.", "Be mindful of the simple choices you make today. " +
"Little things like which coffee shop to visit or who next to text may seem of only slight consequence on the surface," +
"but on a deeper level can reflect the course your intuition is urging you to take now.", "If a once-exciting project" +
"has lately become energy sapping, it’s time to adopt a different approach. The right tactics should build enthusiasm, " +
"rather than drain it. The bottom line is you might be trying to do something solo that’s ideally a job for two or more.", "As " +
"much as you might love to run off in search of glory today, the more productive strategy is to let recognition come to" +
" you instead. By concentrating on doing the very best job you can, your aura naturally emits an invisible but potent " +
"radiance of success. Your quiet authority is a bona fide positive-attention magnet.", "You’re often aware of a better" +
" way of doing things than the one dictated by the powers that be, and you expect your opinion to be heard. However, " +
"you might need to accept the current situation today, if there’s no room for debate or your job security is on the " +
"line.", "Prepare to seize the moment if the cosmos unexpectedly offers up a chance for a welcome do-over today. A " +
"sudden turn of events can jumpstart an entirely new level of energetic momentum for a project or bring fresh life " +
"to communications stuck at an impasse. ", "Work, art, or a hobby is powerfully motivating now, especially if you’re" +
" trying to get romantic confusion off your mind. Or, conversely, it could be precisely because you’re looking for " +
"love that you gravitate toward where your secret crush or sweetheart is most likely to be found.", "As eager as you " +
"are to assert your independence today, you’re inclined to do so via old and familiar ways. You’re so good at your " +
"performance that it’s only natural to want to demonstrate your prowess in action.", "There can be no coaxing you " +
"out of a shell if you’re not in one to begin with. Those that assume you’re timid because you are quiet or reserved " +
"are wildly mistaken."];
var images = ["images/Aquarius.jpg", "images/Pisces.jpg", "images/Aries.jpg", "images/Taurus.jpg", "images/Gemini." +
"jpg", "images/Cancer.jpg", "images/Leo.jpg", "images/Virgo.jpg", "images/Libra.jpg", "images/Scorpio.jpg", "images/Sag" +
"ittarius.jpg", "images/Capricorn.jpg"];
function runHoroscope(){
    var birthMonth = document.getElementById("birthMonth").value;
    var birthDay = document.getElementById("birthDay").value;
    if(checkDate(birthMonth, birthDay) == false){
       return false;
    }
    var name = document.getElementById("Name").value;
    if(checkName(name) == false){
        return false;
    }
    var x = new Date();
    if(x.getMonth() == birthMonth && x.getDate() == birthDay){
        document.getElementById("userName").innerHTML="Happy Birthday " + name + "!";
    } else{
        document.getElementById("userName").innerHTML="Hi " + name + ",";
    }
    var sign = yourSign(birthMonth, birthDay);
    document.getElementById("userSign").innerHTML="Your sign is " + allSigns[sign] + "!";
    document.getElementById("image").src= images[sign];
    document.getElementById("message").innerHTML= messages[sign];
}

function yourSign(birthMonth, birthDay){
    if(birthMonth == 0 && birthDay > 19 || birthMonth == 1 && birthDay < 19){
        var sign = 0;
    }
    if(birthMonth == 1 && birthDay > 18 || birthMonth == 2 && birthDay < 21){
        var sign = 1;
    }
    if(birthMonth == 2 && birthDay > 20 || birthMonth == 3 && birthDay < 20){
        var sign = 2;
    }
    if(birthMonth == 3 && birthDay > 19 || birthMonth == 4 && birthDay < 21){
        var sign = 3;
    }
    if(birthMonth == 4 && birthDay > 20 || birthMonth == 5 && birthDay < 21){
        var sign = 4;
    }
    if(birthMonth == 5 && birthDay > 20 || birthMonth == 6 && birthDay < 23){
        var sign = 5;
    }
    if(birthMonth == 6 && birthDay > 22 || birthMonth == 7 && birthDay < 23){
        var sign = 6;
    }
    if(birthMonth == 7 && birthDay > 22 || birthMonth == 8 && birthDay < 23){
        var sign = 7;
    }
    if(birthMonth == 8 && birthDay > 22 || birthMonth == 9 && birthDay < 23){
        var sign = 8;
    }
    if(birthMonth == 9 && birthDay > 22 || birthMonth == 10 && birthDay < 22){
        var sign = 9;
    }
    if(birthMonth == 10 && birthDay > 21 || birthMonth == 11 && birthDay < 22){
        var sign = 10;
    }
    if(birthMonth == 11 && birthDay > 21 || birthMonth == 0 && birthDay < 20){
        var sign = 11;
    }
    return sign;
}

function checkDate(birthMonth, birthDay){
    var validDate = true;
    if((birthMonth == 3 || birthMonth == 5 || birthMonth == 8 || birthMonth == 10) && birthDay == 31){
        validDate = false;
    }
    if(birthMonth == 1 && (birthDay == 30 || birthDay == 31)){
        validDate = false;
    }
    if(validDate == false){
        alert("Please enter a valid date");
        return false;
    }
    return true;
}

function checkName(name){
    var validName = true;
    if(name == ""){
        validName = false;
    }
    if(validName == false){
        alert("Please enter a name");
        return false;
    }
    return true;
}
