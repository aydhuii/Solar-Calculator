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



















