module.exports = {
    "extends": "airbnb",
    "installedESLint": true,
    "plugins": [
        "react"
    ],
    "rules": {
      "func-names": 1,
      "react/prefer-es6-class": 1,
      "react/prefer-stateless-function": 0
    },
    "settings": {
      "ecmascript": 6,
      "import/parser": "webpack",
      "import/parser": "babel-eslint"
    },
    "globals": {
      "document": true,
    },
};
