import globals from "globals";
import pluginJs from "@eslint/js";

module.exports = { 
    "env":{
        "browser": true,
        "es2020": true,
        "node": true
    },
    "extends": [
        "airbnb-base"
    ],
    "parserOption": {
      "ecmaVersion": 11,
      "sourcetype": "module"
    },
    "rules": {
      "import/no-extraneous-dependencies": 0,
      "no-console": 0,
      "no-underscore-dangle": 0,
      "no-restricted-globals": 0,
      "linebreak-style": 0
    }
};

export default [
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
];