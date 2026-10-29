install:
    kpackagetool6 --type=KWin/Script -i . || kpackagetool6 --type=KWin/Script -u .
    just reconfigure

uninstall:
    kpackagetool6 --type=KWin/Script -r virtual-desktop-only-on-main
    just reconfigure

reconfigure:
    dbus-send --session --type=method_call --dest=org.kde.KWin /KWin org.kde.KWin.reconfigure
