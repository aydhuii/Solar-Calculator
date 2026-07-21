# 📅 July 14, 2026

## 🎯 Sprint Goal

Create the first interactive version of the Off-Grid Solar Calculator by collecting user input with HTML and JavaScript.

---

## ✅ Completed

- Initialized the project structure
- Built the homepage
- Connected CSS styling
- Added a numerical input field
- Created the Calculate button
- Built the first JavaScript function
- Displayed user input dynamically

---

## 🐞 Bugs Encountered

### Bug 001

**Issue**

The Calculate button did not execute the JavaScript function when clicked.

**Root Cause**

An error in the HTML prevented the JavaScript event from being connected properly.

**Resolution**

Corrected the HTML configuration and verified that the button successfully executed the calculate() function.

---

## 💡 What I Learned

- HTML creates webpage structure.
- CSS controls presentation.
- JavaScript adds interactivity.
- Websites communicate across multiple files that must be properly linked together.
- Debugging often involves checking how different files interact rather than assuming the programming logic is incorrect.

---

## 🔜 Next Sprint

- Calculate solar array size
- Calculate battery bank capacity
- Improve page layout
- Add input validation

-----------------------------------------------------------------

## 📅 July 16, 2026

## 🎯 Sprint Goal

Implement the first engineering calculation by calculating the required solar array size based on user inputs.

---

## ✅ Completed
- Added Peak Sun Hours and System Efficiency input fields
- Used JavaScript to perform the solar array size calculation
- Displayed the required solar array size in both watts and kilowatts
---

## 🐞 Bugs Encountered

### Bug 001

**Issue**

Wouldn't output the Daily Energy Usage, Peak Sun Hours, System Efficiency

**Resolution**

Forgot to add quotation marks

---

## 💡 What I Learned

- User input needs to be converted into numbers before doing calculations.
- JavaScript can be used to apply engineering formulas and display the results on the webpage.
- Breaking a formula into smaller variables makes the code easier to understand.

---

## 🔜 Next Sprint

- Calculate battery bank capacity
- Add battery-related input fields
- Improve the results section

---------------------------------------------------------------

## 📅 July 18, 2026
## 🎯 Sprint Goal

Expand the Off-Grid Solar Calculator by adding battery sizing calculations and improving the organization of the user interface.

## ✅ Completed
- Added battery-related input fields (days of autonomy, battery voltage, and depth of discharge)
- Calculated battery capacity in watt-hours and amp-hours
- Added solar panel wattage input and calculated the number of panels required
- Organized the calculator into Load, Solar, Battery, and Results sections
- Improved the page layout with a centered container and cleaner styling

## 🐞 Bugs Encountered

### Bug 002

**Issue**

The Calculate button stopped displaying results after adding the battery calculations.

**Root Cause**

The battery variables were referenced before they were calculated, and one variable name contained a spelling mistake.

**Resolution**

Reordered the calculations so all variables were created before displaying the results and corrected the variable names.

## 💡 What I Learned
- JavaScript executes code from top to bottom, so variables must be created before they are used.
- Small spelling mistakes in variable names can stop an entire program from working.
- Organizing a webpage becomes more important as more features are added.

## 🔜 Next Sprint
- Calculate the number of batteries required
- Add input validation for missing or invalid values
- Improve the results display with separate result cards

## 📅 July 19, 2026
## 🎯 Sprint Goal

- Improve the calculator's layout and code structure by redesigning the results section and adding basic input validation.

## ✅ Completed
- Replaced the single results section with separate result cards
- Updated JavaScript to display each calculation in its own card
- Added basic input validation to prevent calculations with missing or invalid values
- Improved the overall layout to make the calculator easier to read and expand

## 🐞 Bugs Encountered

### Bug 003

***Issue***

The results section became difficult to manage as more calculations were added.

***Root Cause***

All of the output was being generated inside one large innerHTML statement, making the code harder to read and update.

***Resolution***

Separated the results into individual HTML elements and updated each one independently with JavaScript.

## 💡 What I Learned
- Separating HTML, CSS, and JavaScript makes the project easier to maintain.
- Updating individual page elements is cleaner than building one large HTML string.
- Input validation helps prevent errors before calculations are performed.

## 🔜 Next Sprint
- Calculate the number of battery modules required
- Add battery type selection
- Improve the calculator's appearance with icons, spacing, and a more polished layout

--------------------------------------------------------

# 📅 July 20, 2026

## 🎯 Sprint Goal

Add a calculation that converts the required battery capacity into the number of battery modules needed.

---

## ✅ Completed

- Added an input for battery module capacity
- Calculated the number of battery modules required
- Added a separate result card for the battery count
- Updated the input validation to check all calculator fields

---

## 🐞 Bugs Encountered

### Bug 004

**Issue**

The Calculate button stopped working after the battery module feature and input validation were added.

**Root Cause**

The validation statement had an extra `||` and misplaced parentheses. The JavaScript also tried to update the old `result` element even though it had been replaced by separate result cards.

**Resolution**

Corrected the validation statement and removed the old `innerHTML` output. Each result is now updated through its own HTML element.

---

## 💡 What I Learned

- One misplaced bracket or operator can prevent an entire JavaScript file from running.
- JavaScript should not try to update an HTML element that no longer exists.
- Input validation should happen before calculations are performed.

---

## 🔜 Next Sprint

- Add presets for common battery models
- Show the total installed battery capacity
- Improve the calculator layout for larger screens















