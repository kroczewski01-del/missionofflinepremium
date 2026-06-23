# Mission Offline

Responsywna strona wakacyjnej Akademii Przygody dla dzieci, zbudowana w Next.js, TypeScript i Tailwind CSS.

## Uruchomienie lokalne

Wymagany jest Node.js 20.9 lub nowszy.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Strona będzie dostępna pod adresem `http://localhost:3000`.

## Build produkcyjny

```bash
npm run build
npm run start
```

## Formularz kontaktowy

Endpoint `/api/contact` wysyła wiadomości przez Resend na adres `biuro@akademiaprzygody.com`.

Formularz zawiera:

- imię i nazwisko rodzica,
- numer telefonu,
- adres e-mail,
- wiadomość.

Walidacja działa po stronie klienta i serwera. Endpoint ma podstawowe zabezpieczenia antyspamowe: ukryte pole honeypot, kontrolę minimalnego czasu wypełniania formularza oraz limit prób dla jednego adresu IP.

Wymagane zmienne środowiskowe:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
CONTACT_FROM_EMAIL="Mission Offline <formularz@akademiaprzygody.com>"
CONTACT_TO_EMAIL=biuro@akademiaprzygody.com
```

Adres w `CONTACT_FROM_EMAIL` musi należeć do domeny zweryfikowanej w Resend. Najwygodniej użyć subadresu typu `formularz@akademiaprzygody.com` albo `noreply@akademiaprzygody.com`.

## Wdrożenie na Vercel

1. Umieść projekt w repozytorium GitHub, GitLab lub Bitbucket.
2. W Vercel wybierz **Add New → Project** i zaimportuj repozytorium.
3. Dodaj zmienne Resend w **Settings → Environment Variables**.
4. Wybierz **Deploy**.
5. Po zmianie zmiennych środowiskowych wykonaj ponowny deployment, żeby Vercel użył nowych wartości.
