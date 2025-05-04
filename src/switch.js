import { SaveLocalStorage, GetLocalStorage } from "./localstorage.js";

export default function makeSwitch(subject) {
    let switchHTML = `
           <label class="switch" id="switch" >
            <input onchange="console.log('hej'); SaveLocalStorage('${subject}', 'true');" type="checkbox" id="switchbox" checked>
                <span class="slider round"></span>
            </label>`;

    return switchHTML;
}
