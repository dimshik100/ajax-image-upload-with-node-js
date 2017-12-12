describe("ProgressBar", function () {
    var ProgressBar = require('../../public/assets/js/progressBar');
    var setProgressBarPercent = ProgressBar.setProgressBarPercent;
    var resetProgressBar = ProgressBar.resetProgressBar;

    beforeEach(function () {
        
    });

    describe("when file(s) is selected", function () {

        it("should set the progress bar to 0%", function () {
            loadFixtures('progressBarFixture.html');

            $progressBar = $('.progress-bar');

            resetProgressBar($progressBar);

            expect($progressBar).toHaveCss({ width: '0%' });
            
        });

    });


});