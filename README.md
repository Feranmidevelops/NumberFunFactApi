# NumberFunFactApi



A simple React app that fetches and displays fun facts about numbers using the [Numbers API](http://numbersapi.com).

 📌 Features
- Fetches fun facts about numbers
- User can input a number to get a specific fact
- Random number fact on page load
- Simple and clean UI

 1️⃣ Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14+ recommended)
- npm or yarn package manager

 2️⃣ Clone the Repository
```bash
git clone https://github.com/feranmidevelops/NumberFunFactApi.git
cd NumberFunFactApi
```

### 3️⃣ Install Dependencies
Using npm:
```bash
npm install
```

 4️⃣ Start the Development Server
Using npm:
```bash
npm start
```

The app will be available at `http://localhost:3000`.

 🛠 How It Works
- The app fetches data from `http://numbersapi.com/{number}`.
- If the user enters a number, it fetches a fact about that number.
- If no number is entered, it fetches a random fact.

 📌 Example API Response
When fetching `http://numbersapi.com/42`, the response will be:
```
42 is the answer to life, the universe, and everything.
```

 📦 Project Structure

numberfunfact/
│-- public/
|-- index.html
│-- src/
│─ NumberService.js
|--NumberUtils.js
│── App.js
|─ index.js
│
│-- package.json
│-- README.md
```


 🙌 Acknowledgments
- [Numbers API](http://numbersapi.com/#42)
- React.js 🚀

