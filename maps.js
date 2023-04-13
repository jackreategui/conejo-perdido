const emojis = {
    "-": " ",
    O: "🚪",
    X: "💣",
    I: "🎁",
    PLAYER: "💀",
    BOMB_COLLISION: "🔥",
    GAME_OVER: "👎",
    WIN: "🏆",
    HEART: "♥️",
};

const maps = [];

maps.push(`
    IXXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    OXXXXXXXXX
`);

maps.push(`
    O--XXXXXXX
    X--XXXXXXX
    XX----XXXX
    X--XX-XXXX
    X-XXX--XXX
    X-XXXX-XXX
    XX--XX--XX
    XX--XXX-XX
    XXXX---IXX
    XXXXXXXXXX
`);

maps.push(`
    I-----XXXX
    XXXXX-XXXX
    XX----XXXX
    XX-XXXXXXX
    XX-----XXX
    XXXXXX-XXX
    XX-----XXX
    XX-XXXXXXX
    XX-----OXX
    XXXXXXXXXX
`);

maps.push(`
    I-----XXXX
    XXXXX-XXXX
    XX----XXXX
    XX-XX-XXXX
    XXXXX--XXX
    XXXXXX-XXX
    XXXXX----X
    XXXX-XXXXX
    XX-----OXX
    XXXXXXXXXX
`);

maps.push(`
    XXXXX---XI
    XXXXX-XXX-
    XX----XX--
    XX-XX-X--X
    XX-XX---XX
    XX--XX-XXX
    X--------X
    X-XX-XXX-X
    XX-------X
    XXXXOXXXXX
`);

maps.push(`
    XXXX----XI
    -----XX---
    -X----XX--
    ---XX-X--X
    XX-XXXXXXX
    XX--X--XXX
    X----XXXXX
    X-XX-XXX-X
    XX--------
    XXXXXXXXXO
`);

maps.push(`
    XXXX----XO
    -----XX---
    -X----XX--
    ---XX-X--X
    XX-XXXXXXX
    XX--X--X-X
    X------X-X
    X-XX-X-X-X
    -X----X---
    X--XX-IX-X
`);
