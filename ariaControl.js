class ariaControl {
    get version(){ return 'ARIA Control | Written by Christopher Pateman | https://purerandomcode.wordpress.com/ | V2.0.0'; }
    set version(value){ }
    get dependencies(){ return 'jQuery 2.X and up'; }
    set dependencies(value){ }

    constructor(_customObj) {

        const _defaultObj = {
            _autoDetect: true,
            _alertClass: '.acAlert',
            _warningClass: '.acWarning',
            _msgClass: '.acMsg',
            _popupClass: '.acTooltip',
            _popupCtrlClass: '.acTooltipCtrl',
            _popupType: 'tooltip',
            _hiddenMsgClass: '.acHiddenMsg',
            _navClass: '.acNav',
            _navParentClass: '.acSubNav',
            _navSubNavClass: '.acSubMenu',
        };

        $.extend( _defaultObj, _customObj );
        $.extend( this, _defaultObj );

        this.init();
    }
    init() {
        if (this._autoDetect) {
            this.autohidden();
            this.autoAlert();
            this.autoWarning();
            this.autoMsg();
            this.autoRequired();
            this.autoPopup();
            this.autoChecked();
            this.autoDisabled();
            this.autoSelected();
            this.autoMax();
            this.autoMin();
            this.autoHiddenMsg();
            this.autoNavigation();
            this.autoButton();
        }
    }
    autohidden() {
        this.hidden($('body *').filter(function () {
            return $(this).css('display') == 'none' || $(this).css('visibility') == 'hidden';
        }));
    }
    hidden(hiddenClass) {
        $(hiddenClass).attr('aria-hidden', 'true');
        $(hiddenClass).attr('role', 'presentation');
    }
    unhidden(hiddenClass) {
        $(hiddenClass).attr('aria-hidden', 'false');
        $(hiddenClass).attr('role', ($(hiddenClass).attr('role') == 'presentation' ? '' : $(hiddenClass).attr('role')));
    }
    autoHiddenMsg() {
        $(this._hiddenMsgClass).css({
            'position': 'absolute',
            'left': '-10000px',
            'top': 'auto',
            'width': '1px',
            'height': '1px',
            'overflow': 'hidden',
            'clip': 'rect(1px, 1px, 1px, 1px)'
        });
    }
    autoAlert() {
        this.alert(this._alertClass);
    }
    autoWarning() {
        this.warning(this._warningClass);
    }
    autoMsg() {
        this.msg(this._msgClass);
    }
    alert(alertClass) {
        this.notification(alertClass, 'true', 'alert', 'rude');
    }
    warning(warningClass) {
        this.notification(warningClass, 'true', 'alert', 'assertive');
    }
    msg(msgClass) {
        this.notification(msgClass, 'true', 'alert', 'polite');
    }
    notification(noteClass, atomic, role, live) {
        $(noteClass).attr('aria-atomic', atomic);
        $(noteClass).attr('role', role);
        $(noteClass).attr('aria-live', live);
    }
    autoRequired() {
        this.required($('input[required="true"], button[required="true"], select[required="true"], textarea[required="true"], optgroup[required="true"], option[required="true"]'), true);
        this.required($('input[required="false"], button[required="false"], select[required="false"], textarea[required="false"], optgroup[required="false"], option[required="false"]'), false);
    }
    required(requiredClass, isRequired) {
        $(requiredClass).attr('aria-required', isRequired);
    }
    autoPopup() {
        this.popup(this._popupCtrlClass, this._popupClass, this._popupType);
    }
    popup(pCtrlClass, pClass, pType) {
        const identifier = ($(pClass).is('[id]') ? $(pClass).attr('id') : $(pClass).attr('class'));
        $(pCtrlClass).attr('aria-haspopup', 'true').attr('aria-describedby', identifier).attr('aria-controls', identifier);
        $(pClass).attr('role', pType).attr('aria-hidden', 'true').attr('aria-expanded', 'false');
    }
    showPopup(pClass) {
        $(pClass).attr('aria-hidden', 'false').attr('aria-expanded', 'true');
    }
    hidePopup(pClass) {
        $(pClass).attr('aria-hidden', 'true').attr('aria-expanded', 'false');
    }
    autoChecked() {
        this.checked($('input[type="checkbox"], input[type="radio"]'));
        const changeCheck = this.checked;
        $('input[type="checkbox"], input[type="radio"]').change(function () {
            changeCheck($(`input[name="${$(this).prop('name')}"]`));
        });
    }
    checked(checkedClass) {
        $(checkedClass).each(function () {
            $(this).attr('aria-checked', ($(this).prop('checked') ? 'true' : 'false'));
        });
    }
    autoDisabled() {
        this.disabled($('input:disabled, button:disabled, select:disabled, textarea:disabled, optgroup:disabled, option:disabled, fieldset:disabled'));
    }
    disabled(disabledClass) {
        $(disabledClass).each(function () {
            $(this).attr('aria-disabled', ($(this).prop('disabled') ? 'true' : 'false'));
        });
    }
    autoSelected() {
        this.selected('select');
        const changeSelected = this.selected;
        $('select').on('change', function () {
            changeSelected(this);
        });
    }
    selected(selectClass) {
        $(selectClass).children().attr('aria-selected', 'false');
        $(selectClass).children(':selected').attr('aria-selected', 'true');
    }
    autoMax() {
        this.max($('input').filter(function () {
            return $(this).attr('max') >= 0;
        }));
    }
    max(maxClass) {
        $(maxClass).each(function () {
            $(this).attr('aria-valuemax', $(this).attr('max'));
        });
    }
    autoMin() {
        this.min($('input').filter(function () {
            return $(this).attr('min') >= 0;
        }));
    }
    min(minClass) {
        $(minClass).each(function () {
            $(this).attr('aria-valuemin', $(this).attr('min'));
        });
    }
    autoNavigation() {
        const st = this;
        //menu tags
        $(st._navClass).attr('role', 'menubar').attr('aria-live', 'polite').attr('aria-atomic', 'false');
        //menu Items tags
        $(st._navClass + ' a').attr('role', 'menuitem');

        $(st._navClass + ' a' + st._navParentClass).each(function () {
            try {
                //find subnav menu items
                const navSubNav = $(this).parent().children(st._navSubNavClass);

                //sub nav controller
                $(this).attr('aria-label', $(this).text()).attr('aria-haspopup', (navSubNav.attr('class') !== undefined ? 'true' : 'false')).attr('aria-controls', ($(navSubNav).is('[id]') ? $(navSubNav).attr('id') : $(navSubNav).attr('class')));
                if (navSubNav.attr('class') !== undefined) {
                    //sub nav menu
                    $(navSubNav).attr('aria-labelledby', ($(this).is('[id]') ? $(this).attr('id') : $(this).attr('class'))).attr('aria-expanded', 'false').attr('aria-hidden', 'true');

                    //change sub nav
                    $(this).parent().hover(function () {
                        if ($(navSubNav).is(':visible'))
                            $(navSubNav).attr('aria-expanded', 'true').attr('aria-hidden', 'false');
                    }, function () {
                        if (!$(navSubNav).is(':visible'))
                            $(navSubNav).attr('aria-expanded', 'false').attr('aria-hidden', 'true');
                    })
                }

            } catch (e) {
                console.error(`${e.name} : ${e.message}`);
            }
        }, this);
    }
    autoButton() {
        this.button($('button, input[type="submit"], input[type="button"], input[type="image"]'));
    }
    button(btnClass) {
        $(btnClass).each(function () {
            $(this).attr('role', 'button');
        });
    }
}
