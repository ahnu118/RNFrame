module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "airbnb",
    "installedESLint": true,
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "flowtype",
        "react-native",
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/jsx-filename-extension": "off",
        "react/require-extension": "off",
        "import/extensions": "error",
        "import/no-duplicates": "error",
        "global-require": "off",
        "react/sort-comp":"off",
        "generator-star-spacing": "off",
        "import/no-unresolved": [2, { ignore: ['\.png$','\.jpg$'] }],
        "no-duplicate-imports": "off",
        "react-native/no-unused-styles": "error",
        "flowtype/require-valid-file-annotation": ["error", "always"],
        "no-throw-literal": "off",
    },
    "globals": {
        "fetch": true,
        "__DEV__": true,
        "$Shape": true,
        "FormData":true,
    }
};