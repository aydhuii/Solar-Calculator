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

----------------------------------------------------------------------------

# 📅 July 28, 2026

## 🎯 Sprint Goal

Add charge controller sizing to the calculator so the system can recommend a controller current rating based on the installed solar capacity and battery voltage.

---

## ✅ Completed

- Added a charge controller safety margin input
- Added charge controller validation
- Calculated the minimum controller output current
- Applied a safety margin to create a controller design target
- Rounded the controller recommendation upward to the nearest 10 amps
- Added charge controller results to the results section
- Added the controller margin to the system input summary
- Updated the Reset button to clear the new controller input and outputs
- Added a note reminding users to check the controller’s PV input-voltage limit separately

---

## 🐞 Bugs Encountered

No major bugs were encountered during this sprint.

---

## 💡 What I Learned

- A charge controller can be sized approximately using installed solar capacity divided by battery voltage.
- Safety margins help prevent electrical components from being sized too close to their minimum requirement.
- `Math.ceil()` is useful when a recommendation needs to round upward for safety.
- Existing calculator values can be reused instead of asking the user to enter the same information again.
- A calculator should clearly explain what it can and cannot verify.
- Charge controller current sizing does not automatically verify the controller’s maximum PV input voltage.

---

## 🔜 Next Sprint

- Review whether any important calculator factors are still missing
- Improve user guidance and explanations
- Begin redesigning the calculator with a clean two-column layout
- Add modern dark-dashboard styling
- Improve the appearance of inputs, buttons, results, spacing, and section cards

----------------------------------------------------------------------

# 📅 July 29, 2026

## 🎯 Sprint Goal

Begin restructuring the calculator into a modern dashboard layout while preserving all existing functionality.

---

## ✅ Completed

- Planned the overall dashboard layout for the redesigned calculator
- Created a new application structure using a header, input panel, and results panel
- Added a responsive viewport meta tag
- Grouped calculator buttons into a dedicated button container
- Prepared the HTML structure for the upcoming redesign without changing the existing calculator logic

---

## 🐞 Bugs Encountered

No major bugs were encountered during this sprint.

---

## 💡 What I Learned

- Separating layout from functionality makes large projects easier to maintain.
- HTML classes are primarily used for styling, while IDs are used by JavaScript to locate elements.
- Building the page structure first makes the CSS redesign much easier.
- Responsive web design starts with a good HTML structure before adding styling.

---

## 🔜 Next Sprint

- Begin the full dashboard redesign
- Create the two-column desktop layout
- Add modern card styling, colors, spacing, and typography
- Improve button styling and overall user experience

----------------------------------------------------------------------

# 📅 July 30, 2026

## 🎯 Sprint Goal

Plan the transition from a functional calculator to a polished engineering dashboard while keeping the project ahead of schedule for an October launch.

---

## ✅ Completed

- Chose the overall dashboard design direction for the website
- Planned a modern two-column layout with separate input and results panels
- Identified the major CSS components needed for the redesign
- Reviewed how the HTML structure supports the upcoming styling phase
- Confirmed the project timeline remains ahead of schedule

---

## 🐞 Bugs Encountered

No bugs were encountered today because the focus was on planning the redesign before implementation.

---

## 💡 What I Learned

- A well-organized HTML structure makes CSS much easier to write.
- Large visual redesigns should be broken into small, manageable steps.
- Planning the UI before coding helps avoid rewriting large sections later.
- Understanding why CSS properties are used is more valuable than simply copying them.

---

## 🔜 Next Sprint

- Build the two-column layout using CSS Grid
- Learn how each layout property affects the page
- Begin styling the dashboard one component at a time
- Continue keeping the calculator fully functional throughout the redesign

--------------------------------------------------------------------------------------------

# 📅 August 4, 2026

## 🎯 Sprint Goal

Improve the calculator dashboard layout by organizing the input sections into cards and fixing the HTML structure so the input and results panels display correctly.

---

## ✅ Completed

- Fixed incorrect HTML closing tags that were breaking the dashboard layout
- Kept the input panel and results panel inside the main CSS Grid
- Created separate cards for Load, Solar, Battery, Inverter, and Charge Controller information
- Organized related inputs into two-column grids
- Added full-width fields where a complete row was more appropriate
- Added featured styling to the most important engineering results
- Improved input labels by connecting them to their matching input IDs
- Removed unnecessary line breaks from the form layout
- Confirmed the calculator displays inputs and results side by side on desktop

---

## 🐞 Bugs Encountered

### Bug 010

**Issue**

The calculator inputs appeared outside the dashboard panels, and headings and fields were placed in unexpected locations.

**Root Cause**

The input panel and main calculator layout were closed too early with misplaced `</section>`, `</main>`, and `</div>` tags.

**Resolution**

Moved the closing tags so all input sections remained inside the input panel and both panels remained inside the main calculator grid.

### Bug 011

**Issue**

Only the first input in several sections used the two-column layout while the remaining fields stretched across the page.

**Root Cause**

The `.input-grid` containers were closed immediately after the first input group.

**Resolution**

Moved the grid closing tags below all related input groups so every field became a direct child of the correct grid.

---

## 💡 What I Learned

- HTML nesting directly affects how CSS Grid organizes elements.
- Only direct children of a grid container become grid items.
- Closing a container too early can make later content appear outside its intended panel.
- Indentation makes it easier to identify mismatched or misplaced closing tags.
- One element can use multiple classes, such as `input-group full-width`.
- `grid-column: 1 / -1` allows an item to span the full width of a grid.
- Form sections make a long calculator easier to scan and understand.

---

## 🔜 Next Sprint

- Test the complete calculator after the layout changes
- Improve spacing and consistency between input cards
- Polish labels, helper text, and result hierarchy
- Test the responsive design on tablet and mobile widths
- Begin adding user-friendly explanations for technical inputs

-------------------------------------------------------

# 📅 August 5, 2026

## 🎯 Sprint Goal

Improve the calculator’s responsive design, clean up the HTML structure, and begin developing an appliance-based load calculator.

---

## ✅ Completed

- Removed unnecessary `<br>` tags from the form
- Connected remaining labels to their matching input IDs
- Corrected unclosed Battery, Inverter, and Results containers
- Removed the Engineering Calculator badge from the header
- Tested the two-column dashboard layout
- Added the first Appliance Load Builder interface
- Added appliance name, power, daily operating hours, and quantity fields
- Added a calculated daily-load display
- Added a button for transferring the calculated load into the solar calculator
- Styled the appliance fields using a four-column grid
- Added responsive behavior so appliance fields can stack on smaller screens
- Planned additional engineering features for the calculator

---

## 🐞 Bugs Encountered

### Bug 012

**Issue**

Some form cards and the results grid were not properly closed in the HTML.

**Root Cause**

Closing `</div>` tags were missing after the Battery grid, Inverter grid, and Results grid.

**Resolution**

Added the missing closing tags and checked the page’s container hierarchy.

---

## 💡 What I Learned

- Browsers may display invalid HTML without clearly showing an error.
- Proper indentation makes missing closing tags easier to find.
- CSS should control spacing instead of repeated `<br>` elements.
- A responsive form can use different grid-column ratios for fields of different importance.
- The `2fr 1fr 1fr 1fr` layout gives the appliance name more room than numerical inputs.
- A complex engineering calculator can calculate daily energy from individual appliance usage instead of requiring users to know the total beforehand.
- Interface development should happen before connecting the feature to JavaScript.

---

## 🔜 Next Sprint

- Decide whether the Appliance Load Builder should be inside the Load Information card or use its own card
- Calculate appliance energy using watts, hours, and quantity
- Update the displayed daily-load total automatically
- Transfer the calculated total into the Daily Energy field
- Add input validation for hours and quantity
- Begin supporting multiple appliance rows
  
--------------------------------------------------

# 📅 August 6, 2026

## 🎯 Sprint Goal

Make the Appliance Load Builder functional and begin restructuring it so users can eventually add multiple appliances.

---

## ✅ Completed

- Added a working appliance daily-energy calculation
- Calculated appliance energy using wattage, daily operating hours, and quantity
- Made the calculated daily load update from appliance information
- Connected the Use Calculated Load button to the main Daily Energy input
- Began converting the appliance builder from a single appliance to multiple appliances
- Replaced unique appliance input IDs with reusable classes
- Created the structure for storing multiple appliance rows
- Added an Add Appliance button for the next stage of development
- Continued improving the calculator into a more advanced system-design tool

---

## 🐞 Bugs Encountered

### Bug 013

**Issue**

The first multiple-appliance HTML structure was missing the container that will hold all appliance rows.

**Root Cause**

The individual `.appliance-row` was created without wrapping it inside the planned `#applianceRows` container.

**Resolution**

Added an `applianceRows` container so JavaScript will have one location where new appliance rows can be dynamically inserted.

### Bug 014

**Issue**

An accidental backslash appeared inside the Add Appliance button HTML.

**Root Cause**

A stray `\` was typed after `type="button"`.

**Resolution**

Removed the character and checked the button markup.

---

## 💡 What I Learned

- An ID should usually identify one unique element, while classes can be reused across many similar elements.
- Multiple appliance rows cannot all use the same input IDs.
- A parent container makes it easier for JavaScript to manage dynamically created elements.
- HTML structure should be designed around how JavaScript will eventually interact with the page.
- Reusing a calculation function is better than rewriting the same formula in multiple places.
- Event listeners can make results update immediately when users edit inputs.

---

## 🔜 Next Sprint

- Make the Add Appliance button dynamically create new rows
- Learn how `querySelector()` and `querySelectorAll()` work
- Learn how `cloneNode()` can duplicate an appliance row
- Calculate the combined energy consumption of every appliance
- Add a Remove button to each appliance row
- Improve validation for appliance hours, wattage, and quantity

---------------------------------------------------------------------

# 📅 August 7, 2026

## 🎯 Sprint Goal

Expand the Appliance Load Builder so it can support multiple appliances, update the total automatically, and allow users to remove individual appliance rows.

---

## ✅ Completed

- Converted the appliance builder into a multi-row system
- Used reusable classes for appliance name, wattage, hours, and quantity
- Added an `applianceRows` container for dynamically created rows
- Added an Add Appliance button that clones a new appliance row
- Cleared cloned values so new rows start blank
- Reset new appliance quantities to 1
- Added column headings for appliance, power, hours, and quantity
- Added a Remove Appliance button to each row
- Used event delegation so dynamically created rows still respond to input changes
- Prevented the last remaining appliance row from being deleted
- Updated the total automatically when appliance values change
- Updated the total automatically when rows are removed
- Confirmed multiple appliance loads add together correctly
- Kept the Use Calculated Load button connected to the main Daily Energy input

---

## 🐞 Bugs Encountered

### Bug 015

**Issue**

The calculated daily load did not update when appliance values were entered.

**Root Cause**

The live `input` event listener was missing after switching the appliance inputs from IDs to reusable classes.

**Resolution**

Added an event listener to the parent `applianceRows` container and used `event.target.matches()` to detect changes to appliance wattage, hours, and quantity fields.

### Bug 016

**Issue**

The Remove Appliance button originally did not work correctly with dynamically created rows.

**Root Cause**

The button and event-listener structure needed to be organized around the shared appliance-row container.

**Resolution**

Placed the Remove button inside each `.appliance-row` and used event delegation with `closest(".appliance-row")` to identify and remove the correct row.

---

## 💡 What I Learned

- `querySelectorAll()` can find multiple elements instead of only one.
- `forEach()` can loop through every appliance row and combine their energy usage.
- `+=` adds a new value to an existing running total.
- `cloneNode(true)` can duplicate an HTML element and everything inside it.
- Dynamically created elements work better with event delegation than individual event listeners.
- `event.target` identifies the exact element that caused an event.
- `matches()` can check whether that element belongs to a certain class.
- `closest()` can find the parent row that contains a clicked button.
- A parent container can manage input and click events for all current and future child elements.

---

## 🔜 Next Sprint

- Add an Energy (Wh/day) result for each individual appliance row
- Improve the appliance load builder so it looks more like an electrical load schedule
- Add clearer appliance-row styling
- Improve validation for appliance wattage, hours, and quantity
- Consider adding appliance presets or common-load examples

--------------------------------------------------------------------

# 📅 August 8, 2026

## 🎯 Sprint Goal

Improve the Appliance Load Builder so each appliance shows its own daily energy use and add validation for unrealistic appliance values.

---

## ✅ Completed

- Added an Energy (Wh/day) column to the appliance load schedule
- Calculated and displayed each appliance’s individual daily energy usage
- Updated the total load automatically when appliance values change
- Reset cloned appliance rows to 0 Wh
- Improved the appliance grid so headings and row values align more clearly
- Added validation for negative wattage, invalid hours, and quantity below 1
- Added red highlighting for appliance rows with invalid values
- Added an appliance-specific warning message
- Continued testing Add Appliance, Remove Appliance, and live calculations

---

## 🐞 Bugs Encountered

### Bug 017

**Issue**

The appliance validation warning remains visible even after the invalid value is corrected, although the red row outline disappears and the calculations update correctly.

**Root Cause**

The validation-message logic is still not clearing correctly after all appliance rows return to valid values.

**Resolution**

Not fully resolved yet. The validation code was reorganized using a `hasApplianceError` variable, but the warning still remains in some cases. This will be the first debugging task next sprint. :contentReference[oaicite:0]{index=0}

---

## 💡 What I Learned

- Individual row results make a load calculator easier to understand.
- `row.querySelector()` can target an element inside one specific appliance row.
- Validation needs to consider every dynamically created row, not only one input.
- A Boolean variable such as `hasApplianceError` can track whether any row contains invalid data.
- A feature can partly work while still having a separate UI-state bug that needs debugging.

---

## 🔜 Next Sprint

- Fix the appliance warning so it disappears when all rows are valid
- Improve appliance validation and error handling
- Polish the load schedule layout
- Consider common appliance presets
- Continue toward battery configuration and PV string sizing

--------------------------------------------------------------------------------------

# 📅 August 9, 2026

## 🎯 Sprint Goal

Expand the calculator with faster appliance input tools and begin a more realistic battery bank configuration system using series and parallel battery arrangements.

---

## ✅ Completed

- Fixed the Quick Add Appliance feature after debugging JavaScript object and event-listener syntax
- Added appliance presets for:
  - Refrigerator
  - LED Light
  - Laptop
  - Television
  - Fan
- Used a JavaScript object to store appliance preset information
- Connected the appliance preset dropdown to dynamically populate appliance rows
- Made Quick Add use the existing blank row before creating additional rows
- Allowed presets and manually entered appliances to work together
- Added Battery Module Voltage input
- Added Battery Module Capacity (Ah) input
- Added the new battery inputs to the calculator validation
- Calculated the number of battery modules required in series
- Calculated the number of parallel battery strings required
- Calculated the total number of modules in the configured battery bank
- Calculated configured battery-bank voltage
- Calculated installed battery-bank Ah
- Calculated configured battery-bank energy in Wh and kWh
- Added a Battery Bank Configuration result card
- Tested battery configuration calculations with a 48 V system and 12 V / 100 Ah modules
- Discovered that battery Wh, voltage, and Ah inputs can contradict each other and should be checked automatically

---

## 🐞 Bugs Encountered

### Bug 018

**Issue**

The Quick Add Appliance dropdown did not respond when an appliance preset was selected.

**Root Cause**

The event listener was accidentally placed inside the `appliancePresets` JavaScript object.

**Resolution**

Separated the preset data object from the event-listener code.

### Bug 019

**Issue**

Quick Add still failed after rearranging the preset code.

**Root Cause**

The `appliancePresets` object was missing its closing `};`, causing a JavaScript syntax error and preventing the code below it from running.

**Resolution**

Closed the preset object before starting the dropdown event listener and corrected the extra braces at the bottom of the script.

### Bug 020

**Issue**

The energy-based battery module count and the series/parallel battery configuration produced different battery quantities during testing.

**Root Cause**

The entered battery specifications were inconsistent. A 12 V, 100 Ah battery equals about 1,200 Wh, while the Battery Module Capacity field was set to 5,120 Wh.

**Resolution**

Identified the inconsistency. A battery specification consistency checker will be added next sprint so incompatible Wh, V, and Ah values are automatically flagged.

---

## 💡 What I Learned

- JavaScript objects can store related information such as appliance name, wattage, and operating hours together.
- Event listeners must be outside a data object unless they are intentionally stored as object properties.
- A missing brace can prevent an entire section of JavaScript from running.
- Series-connected batteries increase voltage while maintaining the same Ah capacity.
- Parallel battery strings increase Ah capacity while maintaining the same voltage.
- The required number of batteries can depend on electrical configuration, not only total energy capacity.
- Battery energy can be checked using voltage × amp-hours.
- Validating relationships between inputs is just as important as checking whether individual inputs are positive numbers.
- Testing with realistic engineering values can uncover problems that normal code debugging does not.

---

## 🔜 Next Sprint

- Add a battery specification consistency checker using module voltage, Ah, and Wh
- Update battery presets so each preset can automatically populate Wh, voltage, and Ah together
- Reconcile the old energy-only battery count with the new series/parallel configuration result
- Add warnings when a selected module cannot reasonably match the desired system voltage
- Improve reset behavior for the Appliance Load Builder and new battery inputs
- Continue toward PV panel string sizing and charge-controller voltage checking

--------------------------------------------------------------

# 📅 August 11, 2026

## 🎯 Sprint Goal

Improve the battery system by checking battery specifications for consistency and making battery presets automatically populate matching Wh, voltage, and Ah values.

---

## ✅ Completed

- Added battery module voltage and Ah values into the main calculator inputs
- Added a battery specification warning area to the Battery Information section
- Created calculations for comparing entered battery Wh against voltage × Ah
- Added a percentage-difference calculation for checking battery specification consistency
- Started a 5% tolerance system for small differences between advertised and calculated battery capacity
- Created a `batteryPresets` JavaScript object
- Expanded battery presets to store:
  - Watt-hours
  - Nominal voltage
  - Amp-hours
- Updated the Battery Module Preset dropdown so one selection can populate all three battery specification fields
- Added working presets for:
  - 5.12 kWh / 51.2 V / 100 Ah
  - 10.24 kWh / 51.2 V / 200 Ah
  - 15.36 kWh / 51.2 V / 300 Ah
- Tested the preset dropdown and confirmed the correct values now populate automatically
- Continued improving the battery system so users are less likely to enter contradictory specifications

---

## 🐞 Bugs Encountered

### Bug 021

**Issue**

Selecting a battery preset did not populate the battery Wh, voltage, or Ah fields.

**Root Cause**

`applyBatteryPreset()` was accidentally declared twice, with one copy nested inside the other. The outer function only created the inner function instead of running the preset logic.

**Resolution**

Removed the duplicate function declaration and kept one working `applyBatteryPreset()` function.

### Bug 022

**Issue**

The battery specification consistency checker is not fully ready yet.

**Root Cause**

`moduleWhDifferencePercent` is currently checked before the variable is calculated in `calculate()`.

**Resolution**

Identified the order-of-execution problem. The battery consistency calculations need to be moved above the validation check during the next sprint.

---

## 💡 What I Learned

- JavaScript executes code from top to bottom, so a variable must be calculated before it can be used in validation.
- Accidentally nesting two functions with the same name can cause the visible feature to do nothing even when most of the code looks correct.
- JavaScript objects are useful for storing multiple specifications for one equipment preset.
- Battery capacity in Wh can be checked using module voltage × module Ah.
- Presets can reduce user error by automatically filling related engineering values together.
- Debugging often involves checking code structure and execution order, not just formulas.

---

## 🔜 Next Sprint

- Fix the battery consistency checker execution order
- Test the 5% battery specification tolerance
- Unify the energy-only battery count with the physically buildable series/parallel battery count
- Update battery results to clearly show required versus configured capacity
- Improve the Reset button for appliance rows and new battery fields
- Begin PV string sizing if the battery section is stable

--------------------------------------------------------------------------------------

# 📅 August 12, 2026

## 🎯 Sprint Goal

Clean up the battery calculation system, fix the battery specification checker, and improve the Reset button before moving on to PV string sizing.

---

## ✅ Completed

- Fixed the battery specification checker execution order
- Moved battery Wh consistency calculations before the validation check
- Kept a 5% tolerance between entered battery Wh and voltage × Ah
- Unified the energy-based battery count with the series/parallel configuration
- Updated Battery Modules Required to use the configured battery count
- Updated Installed Battery Capacity to use the configured battery bank energy
- Kept the battery capacity margin connected to the final configured bank
- Improved the Reset button for the Appliance Load Builder
- Reset now removes all extra appliance rows
- Reset keeps one blank appliance row
- Reset restores appliance quantity to 1
- Reset clears individual appliance energy
- Reset clears the calculated daily appliance load
- Reset clears the Quick Add Appliance dropdown
- Reset clears appliance validation warnings
- Reset clears the battery specification warning
- Verified the JavaScript has no syntax errors

---

## 🐞 Bugs Encountered

### Bug 023

**Issue**

The battery specification checker previously tried to use `moduleWhDifferencePercent` before the value had been calculated.

**Root Cause**

The battery specification calculations were located too far down inside `calculate()`.

**Resolution**

Moved the calculated module Wh, Wh difference, and percentage difference above the battery consistency validation.

### Bug 024

**Issue**

The calculator could show one battery count based only on energy and another count from the series/parallel configuration.

**Root Cause**

The older battery module calculation was still being used for the main Battery Modules Required result.

**Resolution**

Changed the main battery recommendation and installed capacity to use the physically configured series/parallel battery bank.

### Bug 025

**Issue**

Reset previously left extra appliance rows and cleared the default quantity value.

**Root Cause**

The general number-input reset did not account for dynamically generated appliance rows.

**Resolution**

Added specific reset logic that removes extra rows, clears the first row, restores quantity to 1, and resets the load-builder interface.

### Bug 026

**Issue**

Battery Bank Configuration results may remain visible after pressing Reset.

**Root Cause**

The new battery configuration result IDs have not yet been added to the `resultIds` reset array.

**Resolution**

Identified for a quick fix during the next sprint.

---

## 💡 What I Learned

- JavaScript variables must be calculated before validation code can use them.
- A mathematically sufficient battery quantity is not always a physically buildable battery configuration.
- The final battery recommendation should respect series and parallel requirements.
- Dynamic interface elements need their own reset behavior instead of relying only on a general input reset.
- Reset functionality is part of application state management, not just clearing input boxes.
- Testing old features after adding new ones helps find places where new results were not added to existing systems.

---

## 🔜 Next Sprint

- Add Battery Bank Configuration outputs to the Reset function
- Test battery specification consistency with several valid and invalid examples
- Begin PV string design
- Add panel Voc and Vmp inputs
- Add charge controller PV voltage limit
- Calculate panels per string and number of parallel strings
- Add warnings for unsafe PV string voltage

--------------------------------------------------------------------

# 📅 August 13, 2026

## 🎯 Sprint Goal

Start making the calculator more modular and begin PV string design.

---

## ✅ Completed

* Added PV inputs for Voc, Vmp, and controller max voltage
* Added basic Voc/Vmp validation
* Started separating the calculator into smaller sections
* Added a Solar Only calculation button
* Made solar sizing work without needing battery or inverter inputs
* Kept the full calculator working while starting the refactor

---

## 🐞 Bugs Encountered

No major bugs today.

The main issue was realizing the calculator required too many inputs just to calculate one section.

---

## 💡 What I Learned

* Different parts of the calculator should use their own required inputs
* Smaller functions are easier to debug and update
* Advanced inputs should not block basic calculations

---

## 🔜 Next Sprint

* Make a Battery Only calculation
* Continue separating the main calculator into modules
* Continue PV string sizing
* Add cold-temperature Voc safety later




