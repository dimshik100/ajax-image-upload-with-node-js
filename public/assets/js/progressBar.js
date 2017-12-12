function setProgressBarPercent($progressBar, percent) {
    $progressBar.width(percent + '%');
}

function resetProgressBar($progressBar) {
    setProgressBarPercent($progressBar, 0);
}


module.exports = {
    setProgressBarPercent: setProgressBarPercent,
    resetProgressBar: resetProgressBar
}