

type Constellation = {
    points: [number, number][]
    lines: [number, number][]
}

const CONSTELLATIONS: Constellation[] = [
  // Orion-like
    {
        points: [
            [10, 10], [30, 20], [50, 10],
            [40, 40], [20, 40]
        ],
        lines: [
            [0, 1], [1, 2], [1, 3], [3, 4]
        ]
    },

    // Serpent-like
    {
        points: [
            [10, 30], [25, 20], [40, 30],
            [55, 20], [70, 30]
        ],
        lines: [
            [0, 1], [1, 2], [2, 3], [3, 4]
        ]
    },

    // Triangulo
    {
        points: [
            [20, 20], [50, 10], [80, 30]
        ],
        lines: [
            [0, 1], [1, 2], [2, 0]
        ]
    }
]





























