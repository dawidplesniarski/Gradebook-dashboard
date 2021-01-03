import {compareArrays} from "../utils/helpers";

const firstArrayMock = [
    {
        _id: 1
    },
    {
        _id: 2
    },
    {
        _id: 3
    },
    {
        _id: 4
    }
];
const secondArrayMock = [
    {
        _id: 3
    },
    {
        _id: 4
    },
    {
        _id: 5
    },
    {
        _id: 6
    }
];

const resultArrayMock = [
    {
        _id: 3
    },
    {
        _id: 4
    }
];

test('Should return common part of two arrays', () => {
    expect(compareArrays(firstArrayMock, secondArrayMock)).toStrictEqual(resultArrayMock);
});