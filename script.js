const topicBank = {
    statements: {
        theory: "Statements handle logic and structure (like variable declarations), while expressions resolve to a single piece of data.",
        questions: [
            { q: "Is 'const x = 10;' a statement or expression?", qcn: "'const x = 10;' 是语句还是表达式？", a: "statement", acn: "语句", e: "It is a variable declaration, which performs an action rather than resolving to a value.", ecn: "它是变量声明，执行的是一个动作，而不是求出一个值。" },
            { q: "Is 'Math.random()' a statement or expression?", qcn: "'Math.random()' 是语句还是表达式？", a: "expression", acn: "表达式", e: "It produces a random numeric value and can be used on the right side of an equal sign.", ecn: "它会求出一个随机数值，可以放在等号右侧使用。" },
            { q: "Is 'return x + y;' a statement or expression?", qcn: "'return x + y;' 是语句还是表达式？", a: "statement", acn: "语句", e: "It is a keyword instruction to exit a function.", ecn: "它是用于退出函数的关键字指令。" },
            { q: "Is '5 + 10' a statement or expression?", qcn: "'5 + 10' 是语句还是表达式？", a: "expression", acn: "表达式", e: "Arithmetic phrases resolve to a single piece of data (in this case, 15).", ecn: "算术式会求出单个数据（本例中是 15）。" },
            { q: "True or False: A statement can be wrapped in console.log().", qcn: "判断题：语句可以被包在 console.log() 里。", a: "false", acn: "错误", e: "Wrapping a statement in console.log() causes a syntax error because statements do not produce values.", ecn: "把语句包进 console.log() 会造成语法错误，因为语句并不产生值。" }
        ]
    },
    immutability: {
        theory: "Use 'const' to prevent variable reassignment and 'Object.freeze()' to prevent changes to an object's properties.",
        questions: [
            { q: "Which keyword should be avoided in modern JS because it is function-scoped?", qcn: "在现代 JS 中，哪个关键字因为是函数作用域而应避免使用？", a: "var", acn: "", e: "Modern JS uses let/const; var is function-scoped and often leads to scoping bugs.", ecn: "现代 JS 使用 let/const；var 是函数作用域，常常导致作用域相关的 bug。" },
            { q: "What JS method prevents changes to a frozen object's properties?", qcn: "哪个 JS 方法可以防止冻结对象的属性被修改？", a: "Object.freeze()", acn: "", e: "This method provides deep immutability by locking the object's properties.", ecn: "该方法通过锁定对象的属性来提供深度不可变性。" },
            { q: "Can you use .push() on an array declared with 'const'?", qcn: "对用 'const' 声明的数组可以使用 .push() 吗？", a: "yes", acn: "可以", e: "const prevents variable reassignment, but the contents of arrays and objects remain mutable.", ecn: "const 阻止的是变量被重新赋值，但数组和对象的内容仍然是可变的。" },
            { q: "Which variable keyword allows reassignment and is block-scoped?", qcn: "哪个变量关键字既允许重新赋值，又是块级作用域？", a: "let", acn: "", e: "let is the standard choice for variables that need to change within a block.", ecn: "对于需要在块内变化的变量，let 是标准选择。" },
            { q: "True or False: 'const' makes objects completely immutable by default.", qcn: "判断题：'const' 会让对象默认完全不可变。", a: "false", acn: "错误", e: "const only prevents reassigning the variable; it does not protect the internal properties.", ecn: "const 只能阻止变量被重新赋值，并不能保护对象内部的属性。" }
        ]
    },
    functions: {
        theory: "Arrow functions provide a concise syntax and inherit 'this' from their parent scope. Callbacks are functions passed as arguments.",
        questions: [
            { q: "What is the concise arrow syntax for a function returning x squared?", qcn: "返回 x 的平方的函数，其简洁的箭头函数写法是什么？", a: "x => x * x", acn: "", e: "Arrow functions allow implicit returns for single-line expressions.", ecn: "箭头函数对单行表达式支持隐式返回。" },
            { q: "What do you call a function passed into another function?", qcn: "被传入另一个函数的函数叫什么？", a: "callback", acn: "回调函数", e: "Callbacks are functions used as arguments to be executed later by the parent function.", ecn: "回调函数是作为参数传入的函数，稍后由父函数执行。" },
            { q: "True or False: Arrow functions have their own 'this' context.", qcn: "判断题：箭头函数拥有自己的 'this' 上下文。", a: "false", acn: "错误", e: "Arrow functions lexically bind 'this', meaning they borrow it from the surrounding scope.", ecn: "箭头函数按词法（lexical）绑定 'this'，也就是从外围作用域借用它。" },
            { q: "Does a callback run automatically?", qcn: "回调函数会自动运行吗？", a: "no", acn: "不会", e: "It only executes when the function it was passed into explicitly calls it.", ecn: "只有当接收它的函数显式调用它时，它才会执行。" },
            { q: "Is '() => console.log('Hi')' an arrow function?", qcn: "'() => console.log('Hi')' 是箭头函数吗？", a: "yes", acn: "是", e: "This is the correct syntax for an arrow function with no parameters.", ecn: "这是没有参数的箭头函数的正确写法。" }
        ]
    },
    data: {
        theory: "Spread (...) unpacks elements into new structures, while destructuring extracts properties into variables.",
        questions: [
            { q: "What character sequence is used for the spread operator?", qcn: "展开运算符使用的是什么字符序列？", a: "...", acn: "", e: "Three dots are used to 'unpack' arrays or objects into a new location.", ecn: "三个点用于把数组或对象“解包”到新的位置。" },
            { q: "Extract 'age' from 'user': const { ___ } = user;", qcn: "从 'user' 中提取 'age'：const { ___ } = user;", a: "age", acn: "", e: "Object destructuring uses property names inside braces to extract values into variables.", ecn: "对象解构在花括号中使用属性名，把对应的值提取到变量中。" },
            { q: "To rename 'name' to 'id' during destructuring, use { name: ___ }.", qcn: "解构时要把 'name' 重命名为 'id'，应使用 { name: ___ }。", a: "id", acn: "", e: "The colon syntax allows you to map a property to a brand new variable name.", ecn: "冒号语法可以把属性映射到一个全新的变量名。" },
            { q: "True or False: Spread can be used to merge two objects.", qcn: "判断题：展开运算符可以用来合并两个对象。", a: "true", acn: "正确", e: "Spread unpacks properties into a new object, allowing for easy merging.", ecn: "展开运算符把属性解包到新对象中，因此可以轻松完成合并。" },
            { q: "In '[a, b] = [1, 2]', what is the value of 'a'?", qcn: "在 '[a, b] = [1, 2]' 中，'a' 的值是什么？", a: "1", acn: "", e: "Array destructuring maps variables to values based on their index position.", ecn: "数组解构按照索引位置把变量映射到对应的值。" }
        ]
    },
    arrays: {
        theory: ".map() transforms, .filter() selects, and .reduce() accumulates values into one result.",
        questions: [
            { q: "Which method creates a new array with transformed data?", qcn: "哪个方法会创建一个包含转换后数据的新数组？", a: ".map()", acn: "", e: "map() iterates through an array and returns a transformed version in a new array.", ecn: "map() 遍历数组，并在新数组中返回转换后的版本。" },
            { q: "Which method is used to remove items that don't meet a criteria?", qcn: "哪个方法用于剔除不符合条件的元素？", a: ".filter()", acn: "", e: "filter() only keeps elements that match a specific logical condition.", ecn: "filter() 只保留符合特定逻辑条件的元素。" },
            { q: "Which method would you use to calculate a total sum?", qcn: "要计算总和，应该使用哪个方法？", a: ".reduce()", acn: "", e: "reduce() is used to accumulate multiple values into one single result.", ecn: "reduce() 用于把多个值累积成单个结果。" },
            { q: "Does .filter() modify the original array?", qcn: ".filter() 会修改原始数组吗？", a: "no", acn: "不会", e: "Modern array methods like filter and map are non-mutating; they return a new array.", ecn: "filter、map 这类现代数组方法都不会改动原数组，而是返回一个新数组。" },
            { q: "Which method helps find the maximum value in an array?", qcn: "哪个方法有助于找出数组中的最大值？", a: ".reduce()", acn: "", e: "By comparing current values to an accumulator, reduce can find a single max value.", ecn: "通过把当前值与累积器（accumulator）比较，reduce 可以找出唯一的最大值。" }
        ]
    }
};

let currentQuestions = [];
let currentIndex = 0;
let totalScore = 0;

function startTopic(key) {
    currentQuestions = [...topicBank[key].questions].sort(() => Math.random() - 0.5);
    currentIndex = 0;
    document.getElementById('exercise-card').classList.remove('hidden');
    document.getElementById('topic-title').innerText = key.toUpperCase();
    document.getElementById('topic-theory').innerText = topicBank[key].theory;
    loadQuestion();
}

function loadQuestion() {
    // Show theory only for the first question
    if (currentIndex === 0) {
        document.getElementById('theory-card').classList.remove('hidden');
    } else {
        document.getElementById('theory-card').classList.add('hidden');
    }

    const qData = currentQuestions[currentIndex];
    document.getElementById('exercise-text').innerText = qData.q;
    document.getElementById('exercise-text-cn').innerText = qData.qcn || "";
    document.getElementById('q-count').innerText = currentIndex + 1;
    document.getElementById('user-input').value = "";
    document.getElementById('feedback').innerText = "";
    document.getElementById('explanation-box').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('check-btn').classList.remove('hidden');
}

function updateScoreDisplay() {
    document.getElementById('score-board').innerText = `Total Score: ${totalScore}`;
}

document.getElementById('check-btn').onclick = () => {
    const qData = currentQuestions[currentIndex];
    const userVal = document.getElementById('user-input').value.trim().toLowerCase();
    const correctVal = qData.a.toLowerCase();
    
    document.getElementById('explanation-box').classList.remove('hidden');
    document.getElementById('correct-ans-display').innerText = qData.a;
    document.getElementById('correct-ans-cn').innerText = qData.acn ? `（${qData.acn}）` : "";
    document.getElementById('explanation-text').innerText = qData.e;
    document.getElementById('explanation-text-cn').innerText = qData.ecn || "";

    if (userVal.includes(correctVal)) {
        totalScore += 1;
        document.getElementById('feedback').innerText = "✅ Correct! (+1 point)";
        document.getElementById('feedback').style.color = "green";
    } else {
        totalScore -= 1;
        document.getElementById('feedback').innerText = "❌ Incorrect! (-1 point)";
        document.getElementById('feedback').style.color = "red";
    }
    
    document.getElementById('check-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
    updateScoreDisplay();
};

document.getElementById('next-btn').onclick = () => {
    currentIndex++;
    if (currentIndex < 5) {
        loadQuestion();
    } else {
        document.getElementById('exercise-text').innerText = "Topic Completed! Great job.";
        document.getElementById('exercise-text-cn').innerText = "本主题练习完成，做得很棒！";
        document.getElementById('explanation-box').classList.add('hidden');
        document.getElementById('next-btn').classList.add('hidden');
    }
};
