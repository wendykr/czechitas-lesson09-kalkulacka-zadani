# Základy formulářů - Lekce 9

Cvičení do breakrooms pro kurz JavaScript 1 od Czechitas.

## 1. Kalkulačka

Naklonujte si [repozitář](https://github.com/Czechitas-podklady-WEB/kalkulacka-zadani) se stránkou, která obsahuje číselník a display jednoduché kalkulačky.

Zařiďte, aby se při kliknutí na libovolné tlačítko na displeji kalkulačky objevila cifra, která je na tlačítku napsaná. Postupujte dle návodu:

![ukázka výsledku](https://kodim.cz/cms/assets/kurzy/javascript-vyuka/js-1/udalosti-formulare/cv-zaklady/cvlekce%3Ekalkulacka/kalkulacka.gif)

- Nejprve vyrobte funkci s názvem `handleDigitClick`. To bude posluchač, který později navěsíme na všechna tlačítka.
- Váš posluchač bude mít jeden parametr představující událost. Z vlastnosti `target` tohoto parametru získejte tlačítko, na které bylo kliknuto. Cifru zjistíte z jeho `textContent`.
- Jakmile znáte cifru, vložte ji jako `textContent` na displej kalkulačky.
- Pověste váš posluchač na všechna tlačítka s ciframi.
- U běžné kalkulačky mačkáním tlačítek postupně sestavujeme nějaké víceciferné číslo. Zařiďte, aby cifry na displeji přibývaly jako na běžné kalkulačce. Také zařiďte, aby se na displej nedalo vložit delší než devíticiferné číslo.


