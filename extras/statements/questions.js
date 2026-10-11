/* Extra practice – Statements vs Expressions (8 questions)
   Same bilingual format as the main script.js: q/qcn, a/acn, e/ecn */
const extraQuestions = [
    {
        q: "Is 'if (score > 10) { win = true; }' a statement or expression?",
        qcn: "'if (score > 10) { win = true; }' 是语句还是表达式？",
        a: "statement",
        acn: "语句",
        e: "An if block controls the flow of the program; it performs an action instead of resolving to a value.",
        ecn: "if 代码块控制程序的执行流程，它执行的是一个动作，而不是求出一个值。"
    },
    {
        q: "Is the condition 'score > 10' inside an if (...) a statement or expression?",
        qcn: "if (...) 中的条件 'score > 10' 是语句还是表达式？",
        a: "expression",
        acn: "表达式",
        e: "A comparison evaluates to true or false, so it produces a value and can be used anywhere a value is expected.",
        ecn: "比较运算会求出 true 或 false，它产生一个值，因此可以用在任何需要值的地方。"
    },
    {
        q: "Is 'const area = (w, h) => w * h;' a statement or expression?",
        qcn: "'const area = (w, h) => w * h;' 是语句还是表达式？",
        a: "statement",
        acn: "语句",
        e: "The whole line is a declaration statement; the arrow function on the right side is the expression used as its value.",
        ecn: "整行是声明语句；右侧的箭头函数则是作为其值的表达式。"
    },
    {
        q: "Is a function call such as 'alert('Saved!')' a statement or expression?",
        qcn: "像 'alert('Saved!')' 这样的函数调用是语句还是表达式？",
        a: "expression",
        acn: "表达式",
        e: "Every function call evaluates to its return value (undefined for alert), so it is an expression.",
        ecn: "每个函数调用都会求出它的返回值（alert 返回 undefined），所以它是表达式。"
    },
    {
        q: "True or False: An expression can be stored inside a variable.",
        qcn: "判断题：表达式可以被保存到变量中。",
        a: "true",
        acn: "正确",
        e: "Because expressions resolve to a value, they can be assigned to variables or passed as arguments.",
        ecn: "因为表达式会求出一个值，所以它们可以被赋给变量，或者作为参数传递。"
    },
    {
        q: "Which one usually goes on the right side of an equals sign: a statement or an expression?",
        qcn: "等号右边通常放的是哪一个：语句还是表达式？",
        a: "expression",
        acn: "表达式",
        e: "Assignment needs a value to store, and only expressions produce values.",
        ecn: "赋值需要一个可供保存的值，而只有表达式才会产生值。"
    },
    {
        q: "Arrow functions can drop the braces and the 'return' keyword to use an ___ return.",
        qcn: "箭头函数可以省略花括号和 'return' 关键字，从而使用 ___ 返回。",
        a: "implicit",
        acn: "隐式",
        e: "A single-line arrow body returns automatically; this is called an implicit return.",
        ecn: "单行的箭头函数体会自动返回结果，这被称为隐式返回（implicit return）。"
    },
    {
        q: "Is 'for (let i = 0; i < 3; i++)' a statement or expression?",
        qcn: "'for (let i = 0; i < 3; i++)' 是语句还是表达式？",
        a: "statement",
        acn: "语句",
        e: "Loops repeat actions and do not resolve to a single value, so they are statements.",
        ecn: "循环重复执行动作，并不求出单一的值，所以它们是语句。"
    }
];
