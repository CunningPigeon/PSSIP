function stroka() {
    var str1 = "Я люблю Беларусь";
    var str2 = "Я учусь в Политехническом колледже";
    var result;
    result += str2.length() + "<br>";
    if (str1.IndexOf("Беларусь") != Nan) { result += "В строке S1 есть слово \"Беларусь\"" + "<br>"; }
    else { result += "В строке S1 нет слова \"Беларусь\"" + "<br>";}

    str2[5].bold();
};



var text = "";
var str1 = "Я люблю Беларусь";
var str2 = "Я учусь в Политехническом колледже";
var result;

var elem = document.getElementById("result_string");

function my_string() {
    result += str2.length() + "<br>";
    if (str1.IndexOf("Беларусь") != Nan) { result += "В строке S1 есть слово \"Беларусь\"" + "<br>"; }
    else { result += "В строке S1 нет слова \"Беларусь\"" + "<br>";}

    str2[5].bold();
    document.querySelector('.result_string').innerHTML = result + "/n" + str1 + "/n" + str2;
} 
my_string();