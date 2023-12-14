import {FQCharacters} from "./scripts/fqcharacters.js";

export const TITLE = "Final Quest Battle System";
Hooks.once('init', async function () {
    console.log(`${TITLE} | App Initialisation`)
    FQCharacters.modifyActors()
});
Hooks.once('ready', async function () {
    console.log(`${TITLE} | App Ready`)
});
Hooks.once('setup', function () {
    console.log(`${TITLE} | Module Setup`)
});

Hooks.once('i18nInit', () => {
    console.log(`${TITLE} | Initialising`);
});
