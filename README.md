# KWin - Switch virtual desktops on only one screen

Registers `Window Management` shortcuts to always switch virtual desktops on
only one display/monitor/screen.

## Installation

You need to identify your target screen in `Display Configuration` using the
`Identify` button.
Note down the identifier, they look something like: `DP-1` or `HDMI-3`
Edit the `TARGET_SCREEN` constant in `contents/code/main.js` to that value.

Finally install using `just install` or run the commands listed in the `justfile`
yourself.

Edit shortcuts in `Keyboard/Shortcuts/Window Management`.
The shortcuts are called `Main Display - Desktop 1-10`.
