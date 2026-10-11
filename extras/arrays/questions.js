/* Extra practice – Array Methods (8 questions)
   Same bilingual format as the main script.js: q/qcn, a/acn, e/ecn */
const extraQuestions = [
    {
        q: "Which method runs a callback for every item but returns undefined?",
        qcn: "哪个方法会对每个元素执行回调，但返回值是 undefined？",
        a: ".forEach()",
        acn: "",
        e: "forEach() is used for side effects; use map() when you need a new array back.",
        ecn: "forEach() 用于执行副作用；当你需要得到新数组时应使用 map()。"
    },
    {
        q: "Which method returns the first element that matches a condition?",
        qcn: "哪个方法会返回第一个符合条件的元素？",
        a: ".find()",
        acn: "",
        e: "find() returns the element itself; findIndex() would return its position instead.",
        ecn: "find() 返回元素本身；findIndex() 返回的则是它的位置。"
    },
    {
        q: "True or False: .includes() returns a boolean.",
        qcn: "判断题：.includes() 返回的是布尔值。",
        a: "true",
        acn: "正确",
        e: "includes() simply answers whether the value exists, giving true or false.",
        ecn: "includes() 只是回答该值是否存在，结果是 true 或 false。"
    },
    {
        q: "Which method checks whether at least one element passes a test?",
        qcn: "哪个方法用于检查是否至少有一个元素通过测试？",
        a: ".some()",
        acn: "",
        e: "some() returns true as soon as one element satisfies the condition; every() requires all of them.",
        ecn: "只要有一个元素满足条件，some() 就返回 true；every() 则要求所有元素都满足。"
    },
    {
        q: "True or False: .sort() leaves the original array untouched.",
        qcn: "判断题：.sort() 不会改动原始数组。",
        a: "false",
        acn: "错误",
        e: "sort() sorts in place and mutates the array; copy it with spread first if you need purity.",
        ecn: "sort() 是原地排序，会改动原数组；如果需要保持不可变，请先用展开运算符复制一份。"
    },
    {
        q: "In 'arr.slice(1, 3)', is the element at index 3 included?",
        qcn: "在 'arr.slice(1, 3)' 中，索引 3 的元素会被包含在内吗？",
        a: "no",
        acn: "不会",
        e: "The end index is exclusive, so slice(1, 3) returns only indexes 1 and 2.",
        ecn: "结束索引是取不到的（exclusive），所以 slice(1, 3) 只返回索引 1 和 2。"
    },
    {
        q: "Which method flattens nested arrays into a single array?",
        qcn: "哪个方法可以把嵌套数组拉平成一个数组？",
        a: ".flat()",
        acn: "",
        e: "flat() joins sub-arrays into the parent array, optionally to a given depth.",
        ecn: "flat() 会把子数组合并进父数组，还可选地指定拉平的层数。"
    },
    {
        q: "True or False: .filter() and .map() can be chained together.",
        qcn: "判断题：.filter() 和 .map() 可以链式调用。",
        a: "true",
        acn: "正确",
        e: "Because both return new arrays, the result can be piped straight into the next method.",
        ecn: "因为它们都返回新数组，所以结果可以直接传给下一个方法继续处理。"
    }
];
