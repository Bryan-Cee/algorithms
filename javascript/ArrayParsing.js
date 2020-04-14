const list = [
    { key: "a", value: "1" },
    { key: "a", value: "2" },
    { key: "b", value: "1" },
    { key: "c", value: "1" },
    { key: "c", value: "1" },
    { key: "c", value: "2" },
]

const answer = [
    { key: "a", count: 2, value: ["1", "2"] },
    { key: "b", count: 1, value: ["1"] },
    { key: "c", count: 2, value: ["1", "2"] }
]

function parseArray(list) {
    const _result = {};

    list.forEach(element => {
        if(_result.hasOwnProperty(element.key)){
            if (!_result[element.key].includes(element.value)) {
                _result[element.key].push(element.value);
            }
        } else {
            _result[element.key] = [element.value];
        }
    });

    const _final = [];

    for (const key in _result) {
        if (_result.hasOwnProperty(key)) {
            const value = _result[key];
            _final.push({ key, count: value.length, value })
        }
    }
    return _final;
};

const parsed = parseArray(list);
