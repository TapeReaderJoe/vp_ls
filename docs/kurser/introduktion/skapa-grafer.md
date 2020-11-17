# Skapa grafer

I den sista lektionen av vår grundkurs hoppas vi kunna ge dig inblick och några ledtrådar för hur du kan skapa och använda grafer för att förbättra din handel. Grafer är en representation av hur utbud och efterfrågan har spelat ut sig över tid och kan med fördel användas för att studera investerares beteende. För att kunna använda grafer krävs att du fokuserar på det mest väsentliga nämligen pris och volym. Vi kommer att demonstrera hur vi föredrar att studera pris och vad vi anser är mindre bra sätt. Efter den här lektionen kan du förhoppningsvis börja skapa dina egna grafer och träna din ögon till att bli bättre på mönsterigenkänning.

[[toc]]

## Program för grafer

Vi använder framför allt [Investing.com](https://www.investing.com) och [Tradingview](https://www.tradingview.com) för att studera aktier. Investing.com har fördelen att vara helt gratis och bygger på Tradingview. Investings plattform är dock en avskalad variant av Tradingview och saknar flera funktioner som exempelvis möjligheten att göra egna script eller indikatorer som ”volume profile.” Investing har dessutom en hel del reklam både i sin app och på sin webbsida. Fördelen med Investing är att de inte har några begränsningar vad gäller antalet indikatorer, antal alarm med mera, något Tradingview har om du inte väljer att betala för ditt medlemsskap. Väljer du att betala för Tradingview har du å andra sidan möjligheten att få alla tänkbara funktioner som du kan önska dig. Det finns betydligt fler program eller plattformar för att skapa grafer. Investing och Tradingview är de vi själva har använt oss av mest och därför de vi skapat graferna med som följer.

## Information overload

### För många indikatorer

För att graferna du skapar ska ge något mervärde krävs det att de innehåller tillräckligt med information utan att orsaka överbelastning. Dina ögon kan bara hantera och registrera en viss mängd information. För många indikatorer och trendlinjer tenderar att förvirra snarare än hjälpa. Kom ihåg att alla indikatorer är baserade på pris och måste därför vara en ”lagging indicator”. Pris och volym är vad du kan registrera i realtid och de två viktigaste faktorerna i all teknisk analys. Kom också ihåg att de flesta mönster du ser är slumpmässiga mönster oavsett vad dina ögon får dig att tro. Det krävs mycket träning för att ögonen ska lära sig att känna igen mönster som inte är slumpmässiga. För att lyckas med det bör graferna innehålla så lite information som möjligt. Här följer ett förenklat exempel på en ”setup” som vi inte tycker är särskilt användbar.

![img](/images/eolus_indikatorer.png)

### Less is more

Fler indikatorer kommer inte att hjälpa dig att identifiera nästa vinnare. Fokus bör stanna vid att visa pris och volym och eventuellt något medelvärde som ger en uppskattning av pristrenden. Medelvärden är inte magiska linjer som en del vill få det att låta som. Därför bör du se medelvärden som relativt godtyckliga som går att anpassa till din egen stil. Några få medelvärden vi funnit mervärde av är EMA8, EMA20 och MA50. De två första är exponentiella medelvärden och ger en uppskattning av den kortare trenden. MA50 eller WMA10 (weekly moving average 10) är medelvärden som många aktier tenderar att respektera över längre tidsperioder. Nedan följer ett exempel som illustrerar hur en tydligare graf bör se ut.

![img](/images/ren_chart.png)

## Inställningar

### Vilken typ av prisgraf

De vanligaste graferna är vanliga linjediagram och innehåller bara information om aktiens stängningskurs. Vi är däremot intresserade av att också kunna se öppningspris, högsta/lägsta nivå under dagen samt aktiens stängningspris. Dessa priser ger information om aktiviteten i en aktie och dess volatilitet. Två vanliga typer av grafer som kan användas för detta ändamål är ”bar charts” (till vänster i bilden) respektive ”candle charts” (höger).

![](/images/bar_chart.png)

Argumentet för bar charts är att de innehåller mindre information och tydligare visar intradagsrörelser dvs. aktiens rörelse under dagen. Candle charts tydliggör å andra sidan skillnaden mellan öppningspris och stängningspris på ett bättre sätt. Den ifyllda ”kroppen” på candle charts till höger i bilden indikerar var aktien öppnade och stängde. Kroppen är därmed det som syns mest i grafen och det blir svårare att se hur stor rörelsen varit under dagen. Vi har valt att använda oss av bar charts eftersom vi fäster mer fokus vid just detta. De som horisontella strecken på bar charts indikerar öppning (till vänster på varje bar) och stängning (till höger på varje bar).

### Färger

Färger påverkar hur hjärnan tolkar olika signaler. Rött aktiverar vår hjärna men kan även öka vårt stresspåslag medan blått verkar kunna ha en lugnande effekt. Du bör med fördel ha ett lugnt och balanserat sinne när du handlar aktier varför vi använder oss av blått respektive lila för att illustrera våra bar charts. Blått för positiva dagar samt för dagar med en högre stängningskurs än föregående dag. Lila för negativa dagar samt för dagar med lägre stängningskurs än föregående dag.

![](/images/colors.png)

### Medelvärden

Medelvärden används för att uppskatta och visualisera trender för olika tidsintervall. De kan också användas för att avgöra var du ska köpa eller sälja en aktie. Det finns dock inga naturlagar som innebär att priset på en aktie måste respektera eller följa ett visst medelvärde. Det är heller inte något speciellt med ex. MA200 utan MA199 eller MA201 kan lika gärna användas. En del medelvärden har populariserats och spridits varför de har blivit standard bland många investerare. Du bör se på medelvärden som ungefärliga ”zoner” istället för exakta värden.

Aktier rör sig i cykler och trender varför det ser ut som priset på en aktie följer vissa medelvärden. Kom ihåg att det är det bakomliggande beteendet på de som äger aktien som avspeglas i grafen. Det innebär t.ex. att om samtliga potentiella köpare i en specifik aktie är beredd att köpa vid MA50 eller MA200 så bör du se det i grafen när det sker. Av denna anledning kan en del medelvärden användas för att ge informationen om trendriktningen för olika tidsintervall. Vi använder vanliga medelvärden och exponentiellt beräknade medelvärden då vi funnit största nytta av dessa.

Vi använder EMA8, EMA20, MA50 och MA200 mest flitigt. Ibland använder vi EMA5 om en aktie rört sig extremt snabbt och kraftigt och ibland kan EMA65 också fungera bättre än MA50. Använd med fördel de medelvärden som du tycker fungerar bäst för dig. Kom också ihåg att du bör bara använda dessa om de faktiskt hjälper dig. Inte sällan är ”less is more” vägen att gå.

![](/images/medelvarden.png)

### Volym

Volym är nästan en lika viktig faktor som pris och indikerar alltså antalet aktier som har omsatts för det valda tidsperspektivet. Vi använder samma färger för volym som för pris-bars. Vi använder också ett medelvärde (blå linje) baserat på de senaste 50 dagarna för att ge en indikation om vad som är ”normal” volym i en aktie. Vid positiva rörelser vill du generellt sätt se högre volym (blå staplar) än vad som är normalt och när aktier konsoliderar vill du generellt sätt se lägre volym än normalt. Volym är alltså ytterligare en faktor som kan ge dig ledtrådar om den framtida prisutvecklingen. Försök att lägga märke till hur hög eller låg volymen är innan aktien gör en större positiv rörelse.

![](/images/volym.png)

### Skalor / Time frame

En faktor som många inte funderar kring är prisskalor och time frames eller tidsintervall. Vi använder logaritmiska prisskalor instället för vanliga linjära skalor och använder ”auto-justering”. Vårt mål är att illustrera pris på ett så konsekvent vis som möjligt över olika tidsperioder. Vi vill också känna prisrörelser som är utanför det normala. Aktier som stigit med en jämn takt och plötsligt accelererar i ökningstakt kommer att synas mycket tydligt på logaritmiska skala. Prisacceleration kan vara starten på en sista parabolisk uppgång men är inte sällan början på slutet för uppgången och därför viktig att notera.

![](/images/log_scale.png)

Olika ”time frames” eller tidsintervall är också viktiga att använda sig av. De vanligaste är ”daily” och ”weekly” och troligtvis de mest användbara för våra typ av handel. Ibland använder vi ”hourly” för mer precis tajming under dagen men mestadels är ”daily” och ”weekly” de som tillför mest till analysen. Weekly används med fördel för att identifiera större konsolideringar och baser medan daily kan användas för att precisera den exakta köppunkten. Här följer ett exempel på en konsolidering som vi håller ögonen öppna efter. Vi gillar att se små veckovisa rörelser innan en breakout.

![](/images/weekly.png)

Det viktiga är att varje time frame måste skilja sig från föregående och tillföra ett nytt perspektiv. En bra guide är att använda hourly, daily och weekly. Monthly har vi studerat emellanåt men tillför inte särskilt mycket över weekly. Här följer samma graf fast i daily och hjälper oss att identifiera vilken dag vi kommer att köpa aktien.

![](/images/daily.png)

## Sammanställning

### Kom ihåg

- Fler indikatorer kommer inte att hjälpa dig att identifiera nästa vinnare.
- Använd ett bra grafverktyg som ex. Investing eller Tradingview.
- Minimera mängden information i graferna.
- Använd lugnande färger för att illustrera prisrörelser.
- Använd bara medelvärden och indikatorer som tillför något.
- Använd medelvärden för volym och studera hur volym ser ut vid olika skeenden.
- Använd logaritmiska skalor för att se prisacceleration.
- Studera grafer med hjälp av olika tidsintervall.

Vi hoppas att du har fått en lite bättre inblick i hur du kan skapa grafer som är till nytta för din analys och aktiehandel. Vi har experimenterat med många olika inställningar men har som många andra funnit att de inställningar vi rekommenderat ovan fungerar. Det finns ytterligare några indikatorer som vi använder ibland och som vi avsiktligt utelämnat. Vi har gjort så för att det inte ska bli för mycket information att ta in i början. Experimentera gärna med inställningar eller använd de vi rekommenderat och ta gärna del av våra övriga kurser för att lära dig ännu mer om hur vi analyserar aktier med hjälp av teknisk analys.
