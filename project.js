//challenge 1: Your Age in Days

function ageInDays() {
    var name = prompt("What is your name?");
    var birth_year = prompt("What is your year of birth?");
    var age_in_days = (2020 - birth_year) * 365;
    var h2 = document.createElement('h2');
    var answer = document.createTextNode(name + " is " + age_in_days + " days old. ");
    h2.setAttribute('id','ageInDays');
    h2.appendChild(answer);
    document.getElementById('flex-box-result').appendChild(h2);

}

function resetAnswer() {
    document.getElementById('ageInDays').remove();

}
 
// challenge two: generate cat
function generateCat() {
    var img = document.createElement('img');
    var div = document.getElementById('flex-box-id');
    //img.setAttribute('id' 'picture');
    img.src = 'pic1.png';
    img.width = '70';
     img.height = '50';
    
    
    div.appendChild(img);
}

function resetCat() {
    document.getElementById('picture').remove();
}