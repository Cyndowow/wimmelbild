const memelevel = require("./assets/memelevel.jpg");

const levelData = {
    level: "meme",
    name: "meme",
    board: memelevel,
    characters: [
        {
            id: "Spongebob",
            name: "Spongebob",
            found: false,
            xCoord: 1,
            yCoord: 2,
        },
        {
            id: "CJ",
            name: "CJ",
            found: false,
            xCoord: 3,
            yCoord: 4,
        },
        {
            id: "Duo",
            name: "Duo",
            found: false,
            xCoord: 5,
            yCoord: 6,
        }
    ]
}


export default levelData;