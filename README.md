# Software Engineering Team Tasks: JS Fundamentals

This is a list of challenges for our clients, and it will test your problem solving, planning, and JavaScript skills. You will be given some support in the explanations, but not always. In fact, sometimes you will have to decide things for yourselves to make things work.

Almost everything is based on a function - try to remember that a function is essentially an input-output machine. Key questions are what does it need to take in, and what does it need to give back.

<details>
<summary>👋 Some information that might be helpful</summary>

### Global Variables

Sometimes, functions are also ran in an environment that gives them access to more information. This is usually not a great practice to follow, but it’s important to understand it, so you’ll need a bit of that to complete these tasks. As an example:
    
```javascript

    const GREETING = "hello";
    
    function sayHiToSomeone(name) {
    	return `${GREETING} ${name}`
    }

```
    
In the code above, `GREETING`  is declared at the top level outside of the function and you can access it from inside the function. This is not a great idea, as how your function behaves will then depend on where your function is called from (can it see a `GREETING` variable or not). 
</details>

## 💡 OBJECTIVES FOR THE WORKSHOP

Here’s the project work for our team. You’ll find in the batch of work you’ll practice

- Breaking down problems into steps
- JavaScript fundamentals
- Move forwards as a team

If you’re racing ahead 🏎️, slow down and help explain to solidify your mental models and add value to the whole team. If you’re struggling to keep up 🥾, ask questions and learn from your peers to help speed up your progress and help others cement their understanding.

## 📚 PREPARATION

In order to complete this workshop successfully, you will need to have completed the preparation work set out in [learn.schoolofcode.co.uk](https://learn.schoolofcode.co.uk).

## 🎟️ TICKETS

Time to dive into action! 🤿 Here's what you'll be working on:

### Currency Conversion for a Travel-holics

A travel agency, Travel-holics, wants to create a travel tool to help their clients. They have grand plans, from allowing hotel and travel booking through to real-time translation. Having surveyed their customers, here were the results of the question "What is you biggest problem that we could help you with?":

1. 80% said understanding what their spending budget in £ is worth in €
2. 60% said understanding what their spending budget in £ is worth in $
3. 10% said being able to book transport through an app
4. 5% said being able to book hotels through an app
5. 2% said getting alerts about deals on hotels they've previously seen

Suggest an MVP to the travel agency that can test the value their clients are looking for. Think about it, and then once you have a best guess take a look at the MVPs suggested in the plan below.

### Plan

<details>
<summary>MVP 1</summary>
  
Write a JavaScript function `convertGBPtoEUR` that takes in a specified amount in £, and converts it to € using a given exchange rate. The function should return the converted amount.
</details>
<details>
<summary>MVP 2</summary>
  
Write another function `convertGBPtoUSD` that takes in a specified amount in £, and converts it to $ using a given exchange rate. It should behave in a very similar way to the previous function.
</details>
<details>
<summary>MVP 3</summary>
  
Write a function `convertGBPToCurrency` which takes in both a currency code (`"EUR"` or `"USD"`) and an amount of £ to convert. It should, based on which code has been entered, use one of your previously written functions to return the correct conversion. If an unknown code is entered, it should return `null`.
</details>

### **Temperature Display for a Gym's Sauna**

A local gym, FitLife, is looking to enhance their sauna experience based on member feedback. They are a unique gym, with a 50:50 British:American ratio of members 🤷‍♂️. They observed members using the facilities, and found that they stayed on average only 1 minute and 6 seconds inside the sauna (not what they expected), and they were keen to increase this as soon as possible. They conducted a survey to understand how they could improve, and here's some of the comments:

- “When I walk in, it feels hot - I can’t tell how hot it is, so I panic and walk out”
- “If there was a bar inside the sauna, that would be cool”
- “I’m never sure of the temperature - plus because half of the people are American and half are British, some use Celsius and some use Fahrenheit so we’re never sure how to communicate with each other anyway”
- “It’s scary not to know the temperature”
- “Given that I never know how hot it is, a timer would be good”

Solve the problem for the gym.

### Plan

<details>
<summary>MVP 1</summary>
  
Develop a JavaScript function `displayTemperatureInCelsius` that takes in a numerical Fahrenheit temperature reading and converts it to Celsius, returning the number representing the Celsius value.
</details>
<details>
<summary>MVP 2</summary>
  
Implement another function `displayTemperatureInFahrenheit` that performs the inverse operation.
</details>
<details>
<summary>MVP 3</summary>
  
Create a function `toggleTemperatureDisplay` that returns either Celsius or Fahrenheit depending on which was the last returned (if the last value returned was Fahrenheit, then you’ll want to return Celsius and vice versa). Start with a default of the last returned format being Celsius.
</details>

### **Discount Application for a Community Bookstore**

BookNook, a community bookstore, is exploring ways to increase sales and customer loyalty. They surveyed their customers to find out what would make them more likely to purchase books:

1. 70% indicated that discounts would encourage them to buy more.
2. 20% were interested in a loyalty program that rewards regular customers.
3. 10% suggested more author events and book signings.

BookNook has a low-margin model, meaning it doesn’t make much per book. The only discounts it authorises staff to give are 10%, but only when a customer is spending over £20 or more.

### Plan

<details>
<summary>MVP 1</summary>
  
Develop a JavaScript function `applyDiscount` that calculates the final price after applying a 10% discount on single purchases over £20. This function should help increase the average purchase value by offering an immediate incentive.
</details>
<details>
<summary>MVP 2</summary>
  
Create a function `calculateLoyaltyPoints` that awards points based on the purchase amount, where every dollar spent earns 1 point if no discount is applied. This function aims to build a foundation for a future loyalty program.
</details>
<details>
<summary>Customer Change</summary>
  
BookNook need to make more money, so the discounts function needs to change. `applyDiscount`  should now only apply the discount to the overspend above £20. Remember: Agile is all about embracing change 😅
</details>
