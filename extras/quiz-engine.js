/**
 * Shared quiz engine for the extra practice pages.
 * Behaviour mirrors the main page (script.js):
 * questions are shuffled, +1 for a correct answer, -1 for an incorrect one,
 * and every question / answer / explanation is shown in English with its Chinese translation.
 */
(function () {
    "use strict";

    var questions = [];
    var currentIndex = 0;
    var totalScore = 0;
    var config = null;

    function el(id) {
        return document.getElementById(id);
    }

    function shuffle(list) {
        return [...list].sort(() => Math.random() - 0.5);
    }

    function updateScoreDisplay() {
        el('score-board').innerText = `Total Score: ${totalScore}`;
    }

    function loadQuestion() {
        // Show the theory card only for the first question
        if (currentIndex === 0) {
            el('theory-card').classList.remove('hidden');
        } else {
            el('theory-card').classList.add('hidden');
        }

        const qData = questions[currentIndex];
        el('exercise-text').innerText = qData.q;
        el('exercise-text-cn').innerText = qData.qcn || "";
        el('q-count').innerText = currentIndex + 1;
        el('user-input').value = "";
        el('feedback').innerText = "";
        el('explanation-box').classList.add('hidden');
        el('next-btn').classList.add('hidden');
        el('restart-btn').classList.add('hidden');
        el('check-btn').classList.remove('hidden');
    }

    function checkAnswer() {
        const qData = questions[currentIndex];
        const userVal = el('user-input').value.trim().toLowerCase();
        const correctVal = qData.a.toLowerCase();

        el('explanation-box').classList.remove('hidden');
        el('correct-ans-display').innerText = qData.a;
        el('correct-ans-cn').innerText = qData.acn ? `（${qData.acn}）` : "";
        el('explanation-text').innerText = qData.e;
        el('explanation-text-cn').innerText = qData.ecn || "";

        if (userVal.includes(correctVal)) {
            totalScore += 1;
            el('feedback').innerText = "✅ Correct! (+1 point)";
            el('feedback').style.color = "green";
        } else {
            totalScore -= 1;
            el('feedback').innerText = "❌ Incorrect! (-1 point)";
            el('feedback').style.color = "red";
        }

        el('check-btn').classList.add('hidden');
        el('next-btn').classList.remove('hidden');
        updateScoreDisplay();
    }

    function completeRound() {
        el('exercise-text').innerText = "Round Completed! Great job.";
        el('exercise-text-cn').innerText = "本轮额外练习完成，做得很棒！";
        el('user-input').value = "";
        el('feedback').innerText = "";
        el('explanation-box').classList.add('hidden');
        el('next-btn').classList.add('hidden');
        el('check-btn').classList.add('hidden');
        el('restart-btn').classList.remove('hidden');
    }

    function nextQuestion() {
        currentIndex++;
        if (currentIndex < questions.length) {
            loadQuestion();
        } else {
            completeRound();
        }
    }

    function start(topicConfig) {
        config = topicConfig;
        questions = shuffle(config.questions);
        currentIndex = 0;
        totalScore = 0;

        el('topic-title').innerText = config.title;
        el('topic-theory').innerText = config.theory;
        el('topic-theory-cn').innerText = config.theoryCn || "";
        el('q-total').innerText = questions.length;
        el('exercise-card').classList.remove('hidden');
        updateScoreDisplay();
        loadQuestion();

        el('check-btn').onclick = checkAnswer;
        el('next-btn').onclick = nextQuestion;
        el('restart-btn').onclick = () => {
            questions = shuffle(config.questions);
            currentIndex = 0;
            completeRoundReset();
            loadQuestion();
        };
    }

    function completeRoundReset() {
        el('theory-card').classList.add('hidden');
        el('restart-btn').classList.add('hidden');
    }

    window.QuizEngine = { start: start };
})();
