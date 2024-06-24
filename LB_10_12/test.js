let s1 = "Я люблю беларусь";
let s2 = "Я учусь в политехническом коллежде";

console.log("Длина строки s2:", s2.length); // Длина строки s2: 34

if (s1.includes("беларусь")) {
  console.log("Слово 'беларусь' присутствует в строке s1");
} else {
  console.log("Слово 'беларусь' не присутствует в строке s1");
}

let sixthSymbol = s2.charAt(5);
let asciiCode = sixthSymbol.charCodeAt(0);

console.log("Шестой символ в строке s2:", sixthSymbol);
console.log("ASCII-код шестого символа:", asciiCode);