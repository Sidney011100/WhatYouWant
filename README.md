# WhatYouWant ☕🥤

WhatYouWant is a group ordering application that helps friends collate their orders so that one selected person (“the chosen one”) can make a single purchase on behalf of everyone.

---

## ✨ Features

- Start and manage group orders
- Shareable link for friends to submit orders
- Real-time order updates for all participants
- Session auto-closes after **2 hours**
- Manual session ending by the chosen one
- Order summary remains viewable after session closes
- Optional phone number sharing for payment (e.g. PayLah)

---

## 🔄 How It Works
1. The chosen one starts a group order

2. A shareable link is generated
3. Friends place their orders via the link
4. Everyone can see updates in real time
5. Session ends manually or automatically after 2 hours

---

## 🧾 Ordering Experience

### Predefined Drinks (Example: Kopi)

After selecting a drink, configurable options appear.

**Kopi**
- Temperature: Hot / Cold (Peng)
- Milk: C / O / Normal condensed milk
- Sugar: Normal / Siew Dai / Kosong

**Default Drinks**
- Kopi
- Teh
- Yuan Yang
- Add a new drink

---

## 🏪 Stall Types (Nice-to-Have)

To speed up ordering, users can select a stall type to populate default options.

### Cafe
- Temperature: Hot / Cold
- Custom specifications allowed
- Drinks:
  - White
  - Black
  - Matcha
  - Add a new drink

### Bubble Tea
- Ice level
- Sugar level
- Toppings

---

## 👤 Authentication & Accounts

- Only authenticated users can **start** a group order
- Each user account includes:
  - Name
  - Phone number
  - Email
- Supported authentication methods:
  - Email & password
  - Gmail login

---

## 🛠 Tech Stack

- Authentication: Firebase Authentication
- Backend / Frontend: TBD (keeping it simple initially)

---

## 🚀 Getting Started (Local)

```bash
# clone the repository
git clone https://github.com/your-username/whatyouwant.git

# install dependencies
npm install

# run locally
npm run dev
