let tilemap = [
    [ 2,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7, 19, 18,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  3],
    [ 5, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 14, 13, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,  6],
    [ 5, 32, 10, 12, 12, 12, 12, 12, 12, 12, 12, 11, 32, 14, 13, 32, 10, 12, 12, 12, 12, 12, 12, 12, 12, 11, 32,  6],
    [ 5, 33, 14, 34, 34, 34, 34, 34, 34, 34, 34, 13, 32, 14, 13, 32, 14, 34, 34, 34, 34, 34, 34, 34, 34, 13, 33,  6],
    [ 5, 32,  8, 15, 15, 15, 15, 15, 15, 15, 15,  9, 32,  8,  9, 32,  8, 15, 15, 15, 15, 15, 15, 15, 15,  9, 32,  6],
    [ 5, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,  6],
    [ 5, 32, 10, 12, 12, 11, 32, 10, 11, 32, 10, 12, 12, 12, 12, 12, 12, 11, 32, 10, 11, 32, 10, 12, 12, 11, 32,  6],
    [ 5, 32,  8, 15, 15,  9, 32, 14, 13, 32,  8, 15, 15, 24, 25, 15, 15,  9, 32, 14, 13, 32,  8, 15, 15,  9, 32,  6],
    [ 5, 32, 32, 32, 32, 32, 32, 14, 13, 32, 32, 32, 32, 14, 13, 32, 32, 32, 32, 14, 13, 32, 32, 32, 32, 32, 32,  6],
    [ 0,  4,  4,  4,  4, 11, 32, 14, 27, 12, 12, 11, 34, 14, 13, 34, 10, 12, 12, 26, 13, 32, 10,  4,  4,  4,  4,  1],
    [34, 34, 34, 34, 34,  5, 32, 14, 25, 15, 15,  9, 34,  8,  9, 34,  8, 15, 15, 24, 13, 32,  6, 34, 34, 34, 34, 34],
    [34, 34, 34, 34, 34,  5, 32, 14, 13, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 14, 13, 32,  6, 34, 34, 34, 34, 34],
    [34, 34, 34, 34, 34,  5, 32, 14, 13, 34, 29,  4,  4,  4,  4,  4,  4, 28, 34, 14, 13, 32,  6, 34, 34, 34, 34, 34],
    [ 7,  7,  7,  7,  7,  9, 32,  8,  9, 34,  6, 34, 34, 34, 34, 34, 34,  5, 34,  8,  9, 32,  8,  7,  7,  7,  7,  7],
    [34, 34, 34, 34, 34, 34, 32, 34, 34, 34,  6, 34, 34, 34, 34, 34, 34,  5, 34, 34, 34, 32, 34, 34, 34, 34, 34, 34],
    [ 4,  4,  4,  4,  4, 11, 32, 10, 11, 34,  6, 34, 34, 34, 34, 34, 34,  5, 34, 10, 11, 32, 10,  4,  4,  4,  4,  4],
    [34, 34, 34, 34, 34,  5, 32, 14, 13, 34, 31,  7,  7,  7,  7,  7,  7, 30, 34, 14, 13, 32,  6, 34, 34, 34, 34, 34],
    [34, 34, 34, 34, 34,  5, 32, 14, 13, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 14, 13, 32,  6, 34, 34, 34, 34, 34],
    [34, 34, 34, 34, 34,  5, 32, 14, 13, 34, 10, 12, 12, 12, 12, 12, 12, 11, 34, 14, 13, 32,  6, 34, 34, 34, 34, 34],
    [ 2,  7,  7,  7,  7,  9, 32,  8,  9, 34,  8, 15, 15, 24, 25, 15, 15,  9, 34,  8,  9, 32,  8,  7,  7,  7,  7,  3],
    [ 5, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 14, 13, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,  6],
    [ 5, 32, 10, 12, 12, 11, 32, 10, 12, 12, 12, 11, 32, 14, 13, 32, 10, 12, 12, 12, 11, 32, 10, 12, 12, 11, 32,  6],
    [ 5, 32,  8, 15, 24, 13, 32,  8, 15, 15, 15,  9, 32,  8,  9, 32,  8, 15, 15, 15,  9, 32, 14, 25, 15,  9, 32,  6],
    [ 5, 33, 32, 32, 14, 13, 32, 32, 32, 32, 32, 32, 32, 34, 34, 32, 32, 32, 32, 32, 32, 32, 14, 13, 32, 32, 33,  6],
    [20, 12, 11, 32, 14, 13, 32, 10, 11, 32, 10, 12, 12, 12, 12, 12, 12, 11, 32, 10, 11, 32, 14, 13, 32, 10, 12, 22],
    [21, 15,  9, 32,  8,  9, 32, 14, 13, 32,  8, 15, 15, 24, 25, 15, 15,  9, 32, 14, 13, 32,  8,  9, 32,  8, 15, 23],
    [ 5, 32, 32, 32, 32, 32, 32, 14, 13, 32, 32, 32, 32, 14, 13, 32, 32, 32, 32, 14, 13, 32, 32, 32, 32, 32, 32,  6],
    [ 5, 32, 10, 12, 12, 12, 12, 26, 27, 12, 12, 11, 32, 14, 13, 32, 10, 12, 12, 26, 27, 12, 12, 12, 12, 11, 32,  6],
    [ 5, 32,  8, 15, 15, 15, 15, 15, 15, 15, 15,  9, 32,  8,  9, 32,  8, 15, 15, 15, 15, 15, 15, 15, 15,  9, 32,  6],
    [ 5, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,  6],
    [ 0,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  1]
];