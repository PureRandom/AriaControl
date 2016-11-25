# AriaControl
ARIA Control JavaScript Library

This libraries purpose is to automatically inject the necessary tags and commands to the users mark-up, so that it meets the standards as much as possible. There are also commands for the users to inject the methods on to specific parts if the library does not get them automatically. Also the automatic functionality can be turned off if only partly needed.

Here are some helpful links about ARIA to help understand the tags and their values.


* [Open Ajax](http://oaa-accessibility.org/)
* [W3C](http://w3c.github.io/html-reference/aria/aria.html)
* [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)

# Versions

* [Object based version](https://github.com/PureRandom/AriaControl/blob/master/aria-control.js)
* [Class based version](https://github.com/PureRandom/AriaControl/blob/master/ariaControl.js)

# Setup

1. Include JQuery 2.X or higher. [JQuery CDN](https://code.jquery.com/jquery-2.2.4.min.js)
2. Include the ARIA Control JavaScript.
3. If using the Auto Detection then you will only need to make sure all CSS class are added and initialise the ES6 class.
    ```javascript
    const acCtrl = new ariaControl();
    ```

# Aria Default Classes
Below are the object property names for the custom classes and the default classes that come with it.

| Object Property | Default Class |
| --- | --- |
| _alertClass | .acAlert | 
| _warningClass | .acWarning | 
| _msgClass | .acMsg | 
| _popupClass | .acTooltip | 
| _popupCtrlClass | .acTooltipCtrl | 
| _popupType | tooltip | 
| _hiddenMsgClass | .acHiddenMsg | 
| _navClass | .acNav | 
| _navParentClass | .acSubNav | 
| _navSubNavClass | .acSubMenu | 

To turn off the Auto Detection add in the property `_autoDetect` with a Boolean value.

# How to use?

### Hidden
Hide an element from screen readers.
##### Auto Detection
Add `display:none` or `visibility:hidden` to the element.
##### Function 
Hide element: `hidden(hiddenClass)`
Show element: `unhidden(hiddenClass)`

### Visible but Hideen
Hide an element from visibility, but visisble to screen readers.
##### Auto Detection
Set the object property `_hiddenMsgClass` when initialising ES6 class.
##### Function 
None

### Alert Messages
Announce the display of the message depending on level of alert.
##### Auto Detection
General Message: `_msgClass`
Alert: `_alertClass`
Warning: `_warningClass`
##### Function 
General Message: `autoMsg()`
Alert: `autoAlert()`
Warning: `autoWarning()`

### Required
Add the ARIA required property.
##### Auto Detection
Add the property `required` with either `true` or `false`
##### Function  
`required(requiredClass, isRequired)`
`requiredClass` is a String
`isRequired` is Boolean

### Pop Up
This can be for things like modal windows or tooltips. You will need to use the functions when showing and hiding the Pop Ups
##### Auto Detection
Pop Up Trigger Class: `_popupCtrlClass`
Pop Up Item: `_popupClass`
ARIA Pop Up Type: `_popupType`
    Example:
        * `tooltip`
        * `dialog`
##### Function  
Set Up Pop Up: `popup(pCtrlClass, pClass, pType)`
Show Pop Up: `showPopup(pClass)`
Hide Pop Up: `hidePopup(pClass)`

### Checked
Add the ARIA checked property for checkboxes and radio buttons.
##### Auto Detection
Add the property `checked` if it is checked.
##### Function  
`checked(checkedClass)`

### Disabled
Add the ARIA disabled property for input, button, select, textarea, optgroup, option and fieldset.
##### Auto Detection
Add the property `disabled` if it is disabled.
##### Function  
`disabled(disabledClass)`

### Selected
Add the ARIA selected property for the select elements option.
##### Auto Detection
Any option that is selected.
##### Function  
`selected(selectClass)`

### Max value
Add the ARIA max property on inputs with the max attribute.
##### Auto Detection
Any input that has a max attribute.
##### Function  
`max(maxClass)`

### Min value
Add the ARIA max property on inputs with the min attribute.
##### Auto Detection
Any input that has a min attribute.
##### Function  
`min(minClass)`

### Navigation
Add the ARIA properties for a menu. It will also handle the links, sub menus and the toggling of sub menus.
##### Auto Detection
Navigation Control: `_navClass`
Sub Menu Control: `_navSubNavClass`
##### Function  
None

## Release Notes
Please see all updates below

### 1.0.0
Initial release of ARIA Control 

### 1.5.0
Create README.md and upload to github.

### 2.0.0
* Convert to ES6 class.
* Conform to Airbnb Style Guide.
* Create QUnit tests.

## Testing
Testing is done using QUnit. Each function is broken down to test its full functionality.
All bugs found, please raise a bug on the [Git Hub Issues](https://github.com/PureRandom/AriaControl/issues).

* [ARIA Control Tests](http://purerandom.github.io/AriaControl/ariaControlTest/AiraControlTest.html)
