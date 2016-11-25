(function(ac) {
	ac.version = 'ARIA Control | Written by Christopher Pateman | https://purerandomcode.wordpress.com/ | V1';
	ac.dependencies = 'jQuery';

	ac = function(options) {
		this.custom = $.extend({}, this.st, options);
		this.init();
	}

	ac.prototype = {
		st: {
			autoDetect: true,
			alertClass: ".acAlert",
			warningClass: ".acWarning",
			msgClass: ".acMsg",
			popupClass: ".acTooltip",
			popupCtrlClass: ".acTooltipCtrl",
			popupType: "tooltip",
			hiddenMsgClass: ".acHiddenMsg",
			navClass: ".acNav",
			navParentClass: ".acSubNav",
			navSubNavClass: ".acSubMenu"
		},
		init: function() {
			if (this.st.autoDetect) {
				this.autohidden()
				this.autoAlert()
				this.autoRequired()
				this.autoPopup()
				this.autoChecked()
				this.autoDisabled()
				this.autoSelected()
				this.autoMax()
				this.autoMin()
				this.autoHiddenMsg()
				this.autoNavigation()
				this.autoButton()
			}

		},
		autohidden: function() {
			this.hidden($("body *").filter(function() {
				return $(this).css("display") == "none" || $(this).css("visibility") == "hidden"
			}));
		},
		hidden: function(hiddenClass) {
			$(hiddenClass).attr("aria-hidden", "true");
			$(hiddenClass).attr("role", "presentation");
		},
		unhidden: function(hiddenClass) {
			$(hiddenClass).attr("aria-hidden", "false");
			$(hiddenClass).attr("role", ($(hiddenClass).attr("role") == "presentation" ? "" : $(hiddenClass).attr("role")));
		},
		autoHiddenMsg: function() {
			$(this.st.hiddenMsgClass).css({
				"position": "absolute",
				"left": "-10000px",
				"top": "auto",
				"width": "1px",
				"height": "1px",
				"overflow": "hidden",
				"clip": "rect(1px, 1px, 1px, 1px)"
			})
		},
		autoAlert: function() {
			this.alert(this.st.alertClass);
		},
		autoWarning: function() {
			this.warning(this.st.warningClass);
		},
		autoMsg: function() {
			this.msg(this.st.msgClass);
		},
		alert: function(alertClass) {
			this.notification(alertClass, "true", "alert", "rude");
		},
		warning: function(warningClass) {
			this.notification(warningClass, "true", "alert", "assertive");
		},
		msg: function(msgClass) {
			this.notification(msgClass, "true", "alert", "polite");
		},
		notification: function(noteClass, atomic, role, live) {
			$(noteClass).attr("aria-atomic", atomic);
			$(noteClass).attr("role", role);
			$(noteClass).attr("aria-live", live);
		},
		autoRequired: function() {
			this.required($("body *[required='true']"));
			this.required($("body *[required='']"));
		},
		required: function(requiredClass) {
			$(requiredClass).attr("aria-required", "true");
		},
		autoPopup: function() {
			this.popup(this.st.popupCtrlClass, this.st.popupClass, this.st.popupType);
		},
		popup: function(pCtrlClass, pClass, pType) {
			var identifier = ($(pClass).is('[id]') ? $(pClass).attr('id') : $(pClass).attr('class'))
			$(pCtrlClass).attr('aria-haspopup', "true").attr('aria-describedby', identifier).attr('aria-controls', identifier);
			$(pClass).attr('role', pType).attr('aria-hidden', 'true').attr('aria-expanded', 'false');
		},
		showPopup: function(popUp) {
			$(popUp).attr('aria-hidden', 'false').attr('aria-expanded', 'true');
		},
		hidePopup: function(popUp) {
			$(popUp).attr('aria-hidden', 'true').attr('aria-expanded', 'false');
		},
		autoChecked: function() {
			this.checked($('input:checked'));
			var changeCheck = this.checked;
			$('input[type="checkbox"], input[type="radio"]').change(function() {
				changeCheck($('input[name="' + $(this).prop("name") + '"]'));
			});
		},
		checked: function(checkedClass) {
			$(checkedClass).each(function() {
				$(this).attr("aria-checked", ($(this).prop("checked") ? "true" : "false"));
			});
		},
		autoDisabled: function() {
			this.disabled($('*:disabled'));
		},
		disabled: function(disabledClass) {
			$(disabledClass).each(function() {
				$(this).attr("aria-disabled", ($(this).prop("disabled") ? "true" : "false"));
			});
		},
		autoSelected: function() {
			this.selected('select');
			var changeSelected = this.selected;
			$('select').on("change", function() {
				changeSelected(this)
			});
		},
		selected: function(selectClass) {
			$(selectClass).children().attr("aria-selected", "false");
			$(selectClass).children(':selected').attr("aria-selected", "true");
		},
		autoMax: function() {
			this.max($('input').filter(function() {
				return $(this).attr("max") >= 0
			}));
		},
		max: function(maxClass) {
			$(maxClass).each(function() {
				$(this).attr("aria-valuemax", $(this).attr("max"));
			});
		},
		autoMin: function() {
			this.min($('input').filter(function() {
				return $(this).attr("min") >= 0
			}));
		},
		min: function(minClass) {
			$(minClass).each(function() {
				$(this).attr("aria-valuemin", $(this).attr("min"));
			});
		},
		autoNavigation: function() {
			var st = this.st;
			//menu tags
			$(st.navClass).attr('role', 'menubar').attr('aria-live', 'polite').attr('aria-atomic', 'false');
			//menu Items tags
			$(st.navClass + ' a').attr('role', 'menuitem');

			var BreakException = {};
			$(st.navClass + ' a' + st.navParentClass).each(function(element) {
				try {
					//find subnav menu items
					var navSubNav = $(this).parent().children(st.navSubNavClass);

					//sub nav controller
					$(this).attr('aria-label', $(this).text()).attr('aria-haspopup', (navSubNav.attr('class') !== undefined ? "true" : "false")).attr('aria-controls', ($(navSubNav).is('[id]') ? $(navSubNav).attr('id') : $(navSubNav).attr('class')));
					if (navSubNav.attr('class') !== undefined) {
						//sub nav menu
						$(navSubNav).attr('aria-labelledby', ($(this).is('[id]') ? $(this).attr('id') : $(this).attr('class'))).attr('aria-expanded', 'false').attr('aria-hidden', 'true');

						//change sub nav
						$(this).parent().hover(function() {
							if ($(navSubNav).is(":visible"))
								$(navSubNav).attr('aria-expanded', 'true').attr('aria-hidden', 'false');
						}, function() {
							if (!$(navSubNav).is(":visible"))
								$(navSubNav).attr('aria-expanded', 'false').attr('aria-hidden', 'true');
						})
					}

				} catch (e) {

				}
			}, this);
		},
		autoButton: function() {
			this.button($('button, input[type="submit"], input[type="button"], input[type="image"]'));
		},
		button: function(btnClass) {
			$(btnClass).each(function() {
				$(this).attr("role", "button");
			})
		}
	}

	window.ac = ac;
})(window.ac = window.ac || {});
