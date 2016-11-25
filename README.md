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
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hide an element from screen readers.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Auto Detection

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add `display:none` or `visibility:hidden` to the element.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Function 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hide element: `hidden(hiddenClass)`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Show element: `unhidden(hiddenClass)`

### Visible but Hideen
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hide an element from visibility, but visisble to screen readers.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Auto Detection

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Set the object property `_hiddenMsgClass` when initialising ES6 class.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Function 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;None

### Alert Messages
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Announce the display of the message depending on level of alert.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Auto Detection

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;General Message: `_msgClass`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alert: `_alertClass`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Warning: `_warningClass`

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Function 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;General Message: `autoMsg()`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alert: `autoAlert()`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Warning: `autoWarning()`

### Required
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add the ARIA required property.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Auto Detection

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add the property `required` with either `true` or `false`

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Function  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`required(requiredClass, isRequired)`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`requiredClass` is a String

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`isRequired` is Boolean

### Pop Up
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This can be for things like modal windows or tooltips. You will need to use the functions when showing and hiding the Pop Ups

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Auto Detection

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pop Up Trigger Class: `_popupCtrlClass`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pop Up Item: `_popupClass`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ARIA Pop Up Type: `_popupType`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Example:

* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`tooltip`

* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`dialog`

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Function  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Set Up Pop Up: `popup(pCtrlClass, pClass, pType)`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Show Pop Up: `showPopup(pClass)`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hide Pop Up: `hidePopup(pClass)`

### Checked
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add the ARIA checked property for checkboxes and radio buttons.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Auto Detection

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add the property `checked` if it is checked.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Function  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`checked(checkedClass)`

### Disabled
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add the ARIA disabled property for input, button, select, textarea, optgroup, option and fieldset.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Auto Detection

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add the property `disabled` if it is disabled.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Function  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`disabled(disabledClass)`

### Selected
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add the ARIA selected property for the select elements option.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Auto Detection

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Any option that is selected.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Function  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`selected(selectClass)`

### Max value
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add the ARIA max property on inputs with the max attribute.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Auto Detection

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Any input that has a max attribute.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Function  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`max(maxClass)`

### Min value
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add the ARIA max property on inputs with the min attribute.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp Auto Detection

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Any input that has a min attribute.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Function  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`min(minClass)`

### Navigation
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add the ARIA properties for a menu. It will also handle the links, sub menus and the toggling of sub menus.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Auto Detection

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Navigation Control: `_navClass`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sub Menu Control: `_navSubNavClass`

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Function  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;None

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
