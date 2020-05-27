window.matchMedia =
    window.matchMedia ||
    function () {
        return {
            matches: false,
            addListener: function () { },
            removeListener: function () { },
        };
    };

window.requestAnimationFrame =
    window.requestAnimationFrame ||
    function (callback) {
        setTimeout(callback, 0);
    };

// eslint-disable-next-line no-undef
const fetchMock = require("jest-fetch-mock");
fetchMock.enableFetchMocks();
// eslint-disable-next-line no-undef
jest.setMock("cross-fetch", fetchMock);
