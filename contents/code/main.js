/*
    KWin script: switch virtual desktops only on a specific monitor.
*/

// KWin cannot automatically determine your "primary" display.
// Set TARGET_SCREEN to your display identifier.
const TARGET_SCREEN = "DP-1";

function findTargetScreen() {
    for (let i = 0; i < workspace.screens.length; i++) {
        if (workspace.screens[i].name === TARGET_SCREEN) {
            return workspace.screens[i];
        }
    }
    return null;
}

function desktopIndex(desktop) {
    for (let i = 0; i < workspace.desktops.length; i++) {
        if (workspace.desktops[i].id === desktop.id) {
            return i;
        }
    }
    return 0;
}

function switchTargetScreenToDesktop(desktopNumber) {
    const screen = findTargetScreen();
    if (!screen) {
        print("Could not find target screen: " + TARGET_SCREEN);
        return;
    }

    const index = desktopNumber - 1;
    if (index < 0 || index >= workspace.desktops.length) {
        print("Desktop " + desktopNumber + " does not exist");
        return;
    }

    const targetDesktop = workspace.desktops[index];
    print("Switching " + TARGET_SCREEN + " to " + targetDesktop.name);
    workspace.setCurrentDesktopForScreen(targetDesktop, screen);
}

// Register shortcuts for switching target screen to desktops 1-10
function init() {
    for (let i = 1; i <= 10; i++) {
        registerShortcut(
            "Main Display - Desktop " + i,
            "Main Display - Desktop " + i,
            "",
            (function (desktopNumber) {
                return function () {
                    switchTargetScreenToDesktop(desktopNumber);
                };
            })(i)
        );
    }
}

function reconfigure() {
    init();
}

init();
