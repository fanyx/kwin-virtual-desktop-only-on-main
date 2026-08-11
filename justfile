install:
    kpackagetool6 --type=KWin/Script -i .
    qdbus org.kde.KWin /KWin reconfigure

uninstall:
    kpackagetool6 --type=KWin/Script -r virtual-desktop-only-on-main
    qdbus org.kde.KWin /KWin reconfigure
