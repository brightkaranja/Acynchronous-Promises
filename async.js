// Question one
//Pseudocode
//Create a function called sendReminder that takes in an email as an argument
//Return a new promise that set a timeout for 5000 milliseconds 
//Create another function called simulateRegistrations that schedules the reminder to the emails
//Then call the function simulateRegistrations
async function sendReminder(email) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Email reminder sent to ${email}`);
            resolve();
        }, 5000);
    });
}
async function simulateRegistrations() {
    console.log("Simulating user registrations and reminder scheduling...");
    (sendReminder("joykaranja@gmail.com"));
   ( sendReminder("brightkaranja@gmail.com"));
   ( sendReminder("dannysyombua@gmail.com"));

    console.log("All reminder processes initiated.");
}

simulateRegistrations();


 function simulateLogin(attempt) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (attempt === 3) {
                resolve("success");
            } else {
                reject("failure");
            }
        }, 1000);
    });
}

//Second question
//Pseudocode
//Create a function called tryLogin
//Create a variable that holds the number of attemp count
//Create another variable that store the number of maximum attemp 
//The attemp count should increment as the count is incrementing
//Return a new promise with a timeout for 1000 millisecond
//Set a condition that check if the attemp count is three then it is a success else a failure
async function tryLogin() {
    let attemptCount = 0;
    const maxAttempts = 3;

    while (attemptCount < maxAttempts) {
        attemptCount++;
        console.log(`Attempting login (Attempt ${attemptCount})`);

        try {
            const result = await simulateLogin(attemptCount);
            if (result === "success") {
                console.log("Login successful!");
                return;
            }
        } catch (error) {
            console.log(`Login attempt ${attemptCount} failed.`);
            if (attemptCount === maxAttempts) {
                console.log("Login failed after 3 attempts.");
            }
        }
    }
}
tryLogin();

//Question three
//Pseudocode
//Create a function called startCountdown
//Create a variable count that holds the count number
//Set interval to run every 1000 milliseconds
//Decrement the count 
//Set a condition if the count is less than 0 then the count should stop and log that the time is up
//Call the function
function startCountdown() {
  let count = 5;

  console.log(`Countdown starting from: ${count}`);

  const intervalId = setInterval(() => {
    count--; 

    if (count >= 0) {
      console.log(count);
    } 
    else {
      clearInterval(intervalId); 
      console.log("Time's up!");
    }
  }, 1000); 
}
startCountdown();

//Question four
//Pseudocode
//Create a function called delay that returns a new promise at a set timeout for the specified milliseconds
//Create another function loadpage which simulates loading a page in stages with delays
//At each stage log a message after the specisied duration
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function loadPage() {
  console.log("Loading header...");
  await delay(1000); 

  console.log("Loading content...");
  await delay(2000); 

  console.log("Loading footer...");
  await delay(1000); 

  console.log("Page fully loaded");
}
loadPage();


//Question five
//Pseudocode
//Create a function called fetchPrice that takes symbol as an argument
//Return a new promise with a timeout of 2000 miliseconds
//The promise will resolve with a message indicating the price retrieved
//Create another function that fetches stock prices for multiple symbols sequentially using async/await.
// Logs the retrieval message for each stock in order.
function fetchPrice(symbol) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Price for ${symbol} retrieved`);
    }, 2000); 
  });
}


async function fetchStockPrices() {
  console.log("Fetching stock prices...");

  const applePriceMessage = await fetchPrice("AAPL");
  console.log(applePriceMessage); 

  const googlePriceMessage = await fetchPrice("GOOG");
  console.log(googlePriceMessage); 

  console.log("All stock prices fetched.");
}

fetchStockPrices();