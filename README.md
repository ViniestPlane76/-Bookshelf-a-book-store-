# Bookshelf - Projekt Aplikacji dla Środowisk Chmurowych
## Opis
Bookshelf to projekt stworzony w ramach przedmiotu "Tworzenie Aplikacji dla Środowisk Chmurowych". Aplikacja jest internetowym sklepem z książkami, zbudowanym z użyciem Javy (backend), Angulara (frontend) i bazy danych PostgreSQL. API jest dostępne pod adresem [http://localhost:8080/api/book/v1](http://localhost:8080/api/book/v1), natomiast frontend działa na [http://localhost:4200](http://localhost:4200). Aplikacja pozwala na dodawanie książek do koszyka, korzysta z formularza do wprowadzania danych kontaktowych klienta i informacji o płatności. W projekcie zaimplementowane są metody HTTP (GET, POST, DELETE) do dodawania i usuwania książek z bazy danych.
## Funkcje
 -  **Katalog Książek:** Przeglądaj różnorodną kolekcję książek dostępnych w sklepie internetowym. 
 -  **Koszyk Zakupowy:** Dodawaj książki do koszyka dla wygodnego zakupowego doświadczenia. 
 -  **Formularz Zamówienia:** Przyjazny użytkownikowi formularz zbiera dane kontaktowe klienta i informacje o płatności. 
 -  **Interakcja z Bazą Danych:** Zaimplementowano metody HTTP (GET, POST, DELETE) do zarządzania dodatkowymi książkami w bazie danych.
## Technologie
-  **Backend:** Java 
-  **Frontend:** Angular 
-  **Baza Danych:** PostgreSQL 
-  **Konteneryzacja:** Docker 
## Struktura Projektu 
 -  `MVCsklep/`: Zawiera kod źródłowy backendu w Javie. 
 -  `sklep/`: Zawiera kod źródłowy frontendu w Angularze. 
 -  `docker-compose.yml`: Konfiguracja Docker Compose.
## Użycie
1. Sklonuj repozytorium: ``git clone git@github.com:ViniestPlane76/-Bookshelf-a-book-store-.git``
2. Uruchom aplikację za pomocą Docker Compose: ``docker compose up``
3. Otwórz aplikację: 
 -   Backend API: [http://localhost:8080/api/book/v1](http://localhost:8080/api/book/v1)
-   Frontend: [http://localhost:4200](http://localhost:4200/)