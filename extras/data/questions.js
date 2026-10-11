/* Extra practice – Spread & Destructuring (8 questions)
   Same bilingual format as the main script.js: q/qcn, a/acn, e/ecn */
const extraQuestions = [
    {
        q: "In 'const [a, , b] = arr;' which punctuation is used to skip an element?",
        qcn: "在 'const [a, , b] = arr;' 中，用什么标点来跳过一个元素？",
        a: "comma",
        acn: "逗号",
        e: "Array destructuring follows positions, so an empty slot separated by commas skips that index.",
        ecn: "数组解构是按位置对应的，所以用逗号留出一个空位就可以跳过该索引。"
    },
    {
        q: "Which three-dot syntax gathers the leftover properties during destructuring?",
        qcn: "解构时，哪个三点语法用于收集剩余的属性？",
        a: "...rest",
        acn: "",
        e: "The rest element 'const { id, ...others } = user' copies everything except id into a new object.",
        ecn: "剩余元素 'const { id, ...others } = user' 会把除 id 以外的所有内容复制到一个新对象中。"
    },
    {
        q: "True or False: The spread operator creates a deep copy of nested objects.",
        qcn: "判断题：展开运算符会创建嵌套对象的深拷贝。",
        a: "false",
        acn: "错误",
        e: "Spread is shallow: nested objects are copied by reference and are still shared.",
        ecn: "展开是浅拷贝：嵌套对象按引用复制，仍然是共享的。"
    },
    {
        q: "What is the destructuring feature called that supplies a fallback for a missing property?",
        qcn: "解构时，为缺失属性提供兜底值的特性叫什么？",
        a: "default value",
        acn: "默认值",
        e: "A default value is applied when the destructured property is undefined, e.g. 'const { role = \"guest\" } = user;'.",
        ecn: "当被解构的属性为 undefined 时会使用默认值，例如 'const { role = \"guest\" } = user;'。"
    },
    {
        q: "How do you swap two variables using array destructuring?",
        qcn: "如何用数组解构交换两个变量的值？",
        a: "[a, b] = [b, a]",
        acn: "",
        e: "The right side is evaluated first, so both variables receive each other's old value without a temp variable.",
        ecn: "右侧会先求值，因此两个变量互相拿到对方旧的值，不需要临时变量。"
    },
    {
        q: "True or False: Destructuring also works directly in function parameters.",
        qcn: "判断题：解构也可以直接用在函数参数上。",
        a: "true",
        acn: "正确",
        e: "Parameters can be destructured, e.g. 'function show({ name, age })' pulls the properties out immediately.",
        ecn: "参数可以被解构，例如 'function show({ name, age })' 会立即把属性取出来。"
    },
    {
        q: "In nested destructuring 'const { user: { id } } = data;', which variable is created?",
        qcn: "在嵌套解构 'const { user: { id } } = data;' 中，会创建哪个变量？",
        a: "id",
        acn: "",
        e: "The pattern reaches into data.user and binds only id; 'user' itself is not declared.",
        ecn: "该模式会深入到 data.user 内部，只绑定 id；'user' 本身并不会被声明。"
    },
    {
        q: "Spreading an array inside a function call passes each item as a separate ___.",
        qcn: "在函数调用中展开数组，会把每个元素作为独立的 ___ 传入。",
        a: "argument",
        acn: "实参",
        e: "Math.max(...numbers) passes every array value as its own positional argument.",
        ecn: "Math.max(...numbers) 会把数组中的每个值作为各自位置上的实参传入。"
    }
];
