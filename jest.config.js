module.exports = {
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
    },
    "snapshotSerializers": [
        "enzyme-to-json"
    ],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    "transform": {
        "\\.(ts|tsx)$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "setupTestFrameworkScriptFile": "<rootDir>src/setupTests.ts",
    collectCoverage: true,
};