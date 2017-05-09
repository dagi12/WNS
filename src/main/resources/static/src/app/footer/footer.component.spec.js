/**
 * Created by eryk on 28.04.17.
 */

describe('footer-component', () => {
    let $componentController;

    beforeEach(angular.mock.module('app.footer'));
    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('should open login modal', function () {
        const ctrl = $componentController('appFooter');
        ctrl.openLoginModal()
    });

});
