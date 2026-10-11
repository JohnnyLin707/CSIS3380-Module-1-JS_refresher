/* Extra practice – Arrow Functions & Callbacks (8 questions)
   Same bilingual format as the main script.js: q/qcn, a/acn, e/ecn */
const extraQuestions = [
    {
        q: "Can you omit the parentheses of a single-parameter arrow function?",
        qcn: "单参数的箭头函数可以省略括号吗？",
        a: "yes",
        acn: "可以",
        e: "With exactly one parameter, 'x => x * 2' is valid; with zero or many parameters the parentheses stay.",
        ecn: "当只有一个参数时，'x => x * 2' 是合法的；零个或多个参数时括号不能省略。"
    },
    {
        q: "Arrow functions with two or more parameters must wrap them in ___.",
        qcn: "拥有两个及以上参数的箭头函数必须把它们包在 ___ 里。",
        a: "parentheses",
        acn: "圆括号",
        e: "Multiple parameters require parentheses, for example '(a, b) => a + b'.",
        ecn: "多个参数必须放在圆括号中，例如 '(a, b) => a + b'。"
    },
    {
        q: "What unit does setTimeout() use for its delay argument?",
        qcn: "setTimeout() 的延迟参数使用的是什么单位？",
        a: "milliseconds",
        acn: "毫秒",
        e: "The second argument is milliseconds, so 1000 means one second.",
        ecn: "第二个参数的单位是毫秒，所以 1000 表示一秒。"
    },
    {
        q: "What do you call a function that accepts another function or returns one?",
        qcn: "接受另一个函数作为参数、或者返回一个函数的函数叫什么？",
        a: "higher-order function",
        acn: "高阶函数",
        e: "Functions like map() and filter() are higher-order because they take callbacks.",
        ecn: "像 map()、filter() 这样的函数接收回调作为参数，因此被称为高阶函数。"
    },
    {
        q: "Which three-dot feature collects a function's leftover arguments into an array?",
        qcn: "哪个三点语法会把函数剩余的参数收集进一个数组？",
        a: "rest parameter",
        acn: "剩余参数",
        e: "Rest parameters such as 'function sum(...nums)' gather every remaining argument into a real array.",
        ecn: "像 'function sum(...nums)' 这样的剩余参数会把所有余下的实参收集成一个真正的数组。"
    },
    {
        q: "True or False: Function declarations are hoisted to the top of their scope.",
        qcn: "判断题：函数声明会被提升（hoisted）到其作用域的顶部。",
        a: "true",
        acn: "正确",
        e: "You can call a declared function before its definition line; arrow functions stored in const cannot.",
        ecn: "你可以在定义行之前调用声明式函数；保存在 const 中的箭头函数则不行。"
    },
    {
        q: "Which symbol assigns a default value to a function parameter?",
        qcn: "哪个符号用于给函数参数指定默认值？",
        a: "=",
        acn: "等号",
        e: "Default parameters are written inside the signature, e.g. 'function greet(name = \"guest\")'.",
        ecn: "默认参数写在函数签名内部，例如 'function greet(name = \"guest\")'。"
    },
    {
        q: "True or False: Arrow functions can be used as constructors with 'new'.",
        qcn: "判断题：箭头函数可以用 'new' 当作构造函数来使用。",
        a: "false",
        acn: "错误",
        e: "Arrow functions have no 'prototype' property and cannot be constructed with new.",
        ecn: "箭头函数没有 'prototype' 属性，不能用 new 来构造实例。"
    }
];
