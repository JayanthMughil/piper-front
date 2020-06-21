/* eslint-env node */

let isDevEnv = process.env.NODE_ENV === 'development';
let isWatchMode = process.env.iswatchmode;
let hash = "";


if (isDevEnv ) {
    if (!isWatchMode) {
        hash = 'hash';
    }
} else {
    hash = 'chunkhash';
}

const loggerConfig = {
    logger_dir: "./dist/logger/",
    stdout_file: "buildlog.txt",
    stderr_file: "buildlog.txt"
};

module.exports = {
    jsPath: 'assets/js/',
    cssPath: 'assets/css/',
    imagePath: 'assets/images/',
    fontPath: 'assets/fonts/',
    htmlPath: 'assets/html/',
    jsonPath: 'assets/json/',
    i18nPath: 'assets/i18n/', // NO I18N
    version: 'default',
    outputJsonDir: "output_json", // NO I18N
    hash,
    tempDirName: "tmTemp",
    bundleZipName: "mailapps.zip",
    distibutionFolderPath: "./dist",
    manifestPath: "./dist/output_json/", // NO I18N
    i18nManifestName: "i18n_manifest",	// NO I18N
    manifestName: "assets__manifest_",
    manifestType: "json",
    loggerConfig
};