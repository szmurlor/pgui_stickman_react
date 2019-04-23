Stickman - Demonstracja

Zasadnicze cele aplikacji:

1. Napisać aplikację w Ractie i prześledzić jej tworzenie od początku.
2. Demonstracja jak osadzać obiekty SVG tak aby uzyskiwać dostęp do jego elementów.
   Zasadniczo mamy tutaj kilka trybów: osadzanie bezpośrednie (najefektywniejsze 
   z punktu widzenia modyfikacji), osadzanie za pomocą <img src...> (nie mamy dostępu do elementów),
   <object data...> (możemy się odwoływać uzyskując dostęp do elementu 
   `document.getElementById('svg').contentDocument.getElementById('pathId)`),
   embed lub iframe.   
   (http://slides.com/sarasoueidan/styling-animating-svgs-with-css--2#/)
3. Repreznetacja stylów SVG (możemy używać stylów CSS w zależności, gdzie utworzymy obiekty.)   
4. Warunkowa reprezentacja stanów na ekranie:
   * bezpieczny (lepiej neutral)
   * niebezpieczny (lepiej danger lub warning)
   * wartwy (lepiej error)  
   W ten sposób tworzymy uniwersalny język projektowy (Design Language / System). Pomagamy również
   wielokrotnie wykorzystywać komponenty.
5. Wyróżniamy różne rodzaje stanów:
   * stan dziedzinowy
   * stan wizualny
   * stan uniwersalny
   W celu tłumaczenia powinniśmy zbudować 'Model prezentacji' - zbiór metod i klas, które będą 
   potrafić przetłumaczyć stan. To jest podobne od idei 'skórek' - Themes.
6. Gdzie i jak przechowujemy stan:
   * stan może być utrwalony jako wartość komponentu,
   * stan może być wyznaczany za każdym razem dynamicznie za pomocą funktorów.
7. Uaktualnianie widoku elementu na ekranie:
   * componentDidMount lub componentDidUpdate
   * setTimeout(...)   
   * onLoad(...)

Przy okazji kilka elementów zwiazanych z JavaScriptem:

1. Spread operator (https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Operatory/Spread_operator)
