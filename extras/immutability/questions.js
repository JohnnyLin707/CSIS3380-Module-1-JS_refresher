/* Extra practice – Immutability (8 questions)
   Same bilingual format as the main script.js: q/qcn, a/acn, e/ecn */
const extraQuestions = [
    {
        q: "Which array method adds an item to the end but mutates the original array?",
        qcn: "哪个数组方法会把元素加到末尾，并且会修改原始数组？",
        a: ".push()",
        acn: "",
        e: "push() changes the array in place and returns the new length, so it is a mutating method.",
        ecn: "push() 会直接原地修改数组并返回新的长度，因此它是会改动原数组的方法。"
    },
    {
        q: "Which operator lets you build a new array copy instead of mutating the original?",
        qcn: "哪个运算符可以让你创建数组的新副本，而不是修改原始数组？",
        a: "spread",
        acn: "展开运算符",
        e: "The spread operator (...) unpacks the old items into a brand new array, leaving the source untouched.",
        ecn: "展开运算符（...）会把原有元素解包到一个全新的数组中，不会动原来的数组。"
    },
    {
        q: "True or False: Object.freeze() deeply freezes every nested object.",
        qcn: "判断题：Object.freeze() 会深度冻结所有嵌套对象。",
        a: "false",
        acn: "错误",
        e: "It is a shallow freeze: properties of nested objects can still be changed.",
        ecn: "它只是浅层（shallow）冻结：嵌套对象的属性依然可以被修改。"
    },
    {
        q: "Which method removes the last item of an array and changes that array?",
        qcn: "哪个方法会移除数组的最后一个元素并改动该数组？",
        a: ".pop()",
        acn: "",
        e: "pop() removes the final element in place and returns the removed value.",
        ecn: "pop() 会原地移除最后一个元素，并返回被移除的那个值。"
    },
    {
        q: "True or False: 'let' allows you to reassign the variable.",
        qcn: "判断题：'let' 允许你重新给变量赋值。",
        a: "true",
        acn: "正确",
        e: "let is block-scoped and designed for values that are expected to change.",
        ecn: "let 是块级作用域，专为那些预期会变化的值而设计。"
    },
    {
        q: "Which method returns part of an array without changing the original one?",
        qcn: "哪个方法可以返回数组的一部分，同时不改动原始数组？",
        a: ".slice()",
        acn: "",
        e: "slice() is non-mutating; it returns a shallow copy of the selected elements.",
        ecn: "slice() 不会改动原数组，它会返回所选元素的浅拷贝。"
    },
    {
        q: "A value that can never be changed after it is created is called ___.",
        qcn: "创建之后永远无法被改变的值被称为 ___。",
        a: "immutable",
        acn: "不可变的",
        e: "Immutable data cannot be edited; you produce a new copy instead of mutating the old one.",
        ecn: "不可变（immutable）数据无法被编辑，你应该生成一个新副本，而不是去修改旧数据。"
    },
    {
        q: "True or False: Reassigning a variable declared with 'const' throws an error.",
        qcn: "判断题：给用 'const' 声明的变量重新赋值会抛出错误。",
        a: "true",
        acn: "正确",
        e: "Assigning a new value to a const binding causes a TypeError at runtime.",
        ecn: "给 const 绑定重新赋新值会在运行时抛出 TypeError。"
    }
];
