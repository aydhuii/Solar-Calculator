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

----------------------------------------------------

# 📅 July 21, 2026

## 🎯 Sprint Goal

Improve the battery results by showing the actual installed battery capacity after rounding up to whole battery modules.

---

## ✅ Completed

- Calculated the total installed battery capacity
- Calculated the extra battery capacity created by rounding up
- Added a result card for installed battery capacity
- Displayed the capacity in both Wh and kWh

---

## 🐞 Bugs Encountered

None today. The new battery capacity calculations worked as expected.

---

## 💡 What I Learned

- The required battery capacity may be different from the actual installed capacity.
- Multiplying the number of batteries by the capacity of one module gives the total installed capacity.
- Rounding up battery quantities can create extra storage capacity.

---

## 🔜 Next Sprint

- Add common battery model presets
- Show battery capacity margin as a percentage
- Improve the layout for desktop screens

------------------------------------------------------------

# 📅 July 22, 2026

## 🎯 Sprint Goal

Add more useful solar and battery results while improving the calculator’s controls and page layout.

---

## ✅ Completed

- Calculated installed solar capacity and the extra solar capacity after rounding up
- Added battery capacity margin as a percentage
- Added battery module presets and a Reset button
- Organized the result cards into a responsive grid
- Replaced the alert box with an error message displayed on the page

---

## 🐞 Bugs Encountered

None today. Each feature worked correctly after testing.

---

## 💡 What I Learned

- Installed system capacity can be higher than required capacity because panels and batteries must be whole units.
- Dropdown presets can make a calculator faster and easier to use.
- JavaScript can reset multiple inputs and results at the same time.
- Responsive CSS changes the layout depending on the user’s screen size.

---

## 🔜 Next Sprint

- Add presets for common solar panel wattages
- Add limits for efficiency and depth-of-discharge percentages
- Display a summary of all user inputs
- Improve the input layout for desktop screens

------------------------------------------------------------------------------

# 📅 July 25, 2026

## 🎯 Sprint Goal

Improve the calculator’s usability, validation, layout, number formatting, and system summary.

---

## ✅ Completed

- Added solar panel wattage presets
- Added automatic synchronization between panel presets and manually entered values
- Added automatic synchronization between battery presets and manually entered values
- Improved validation for blank, zero, negative, and invalid percentage inputs
- Organized solar and battery inputs into responsive grids
- Added comma formatting and consistent decimal places to results
- Added a full system input summary
- Updated the Reset button to clear presets, results, summary values, and error messages
- Restored missing result cards after the summary card accidentally replaced them

---

## 🐞 Bugs Encountered

### Bug 005

**Issue**

The Calculate button appeared to stop working after adding the system input summary.

**Root Cause**

The original result cards were accidentally removed from the HTML. JavaScript still tried to update elements such as `solarSize`, `panelCount`, and `batteryWh`, but those IDs no longer existed.

**Resolution**

Restored all of the original result cards and kept the System Input Summary as an additional card at the bottom of the results grid.

---

## 💡 What I Learned

- JavaScript stops running when it tries to update an HTML element that does not exist.
- HTML element IDs must match the IDs used in JavaScript exactly.
- A summary card should be added to the results section instead of replacing the existing result cards.
- Helper functions can reduce repeated code and make number formatting more consistent.
- Responsive grids can improve the desktop layout while still working on mobile screens.
- Preset menus can stay accurate by updating when users type custom values.

---

## 🔜 Next Sprint

- Add estimated inverter sizing
- Add inverter safety margin
- Add labels explaining each engineering assumption
- Add warnings when the selected system may be undersized
- Improve the overall visual design

-----------------------------------------------------------------

# 📅 July 26, 2026

## 🎯 Sprint Goal

Add inverter sizing to the calculator and improve the calculator by showing inverter requirements, warnings, and inverter-related assumptions in the summary.

---

## ✅ Completed

- Added inverter input fields for peak continuous load, surge load, and inverter safety margin
- Added validation for inverter inputs
- Calculated inverter minimum continuous rating, design target, and rounded recommendation
- Added inverter surge requirement and warning messages
- Added inverter information to the system summary
- Updated the reset function to clear the new inverter results and summary values

---

## 🐞 Bugs Encountered

### Bug 006

**Issue**

The Calculate button stopped working after the inverter feature was added.

**Root Cause**

The code tried to use the `recommendedInverterW` variable before it had been calculated, which caused the JavaScript to stop running.

**Resolution**

Moved the inverter warning logic to after the inverter calculations so the variable existed before it was used.

---

## 💡 What I Learned

- In programming, the order of calculations matters because JavaScript runs from top to bottom.
- An inverter must be sized using power (watts), not just daily energy usage.
- A safety margin helps size the inverter more realistically.
- Surge load is different from continuous load and should be checked separately.

---

## 🔜 Next Sprint

- Finish any remaining calculator features
- Add more helpful engineering guidance if needed
- Start redesigning the calculator layout and visual style





