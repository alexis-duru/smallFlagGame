let students;
let flag;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const userId = 'da';
let userX;
let userY;
var userScore,

(function () {
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight; 
        displayUsers();
    }
    resizeCanvas();
})();

function displayUsers() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (students) {
        for (const [studentKey, student] of Object.entries(students)) {
            const positionX = canvas.width * student.x / 100;
            const positionY = canvas.height * student.y / 100;
            if (studentKey === userId) {
                userX = student.x
                userY = student.y
            }
            ctx.beginPath();
            ctx.arc(positionX, positionY, 30, 0, 2 * Math.PI);
            studentKey === userId ? ctx.fillStyle = 'black' : ctx.fillStyle = 'green';
            ctx.fill();
        }
    }
};

function displayFlag() {
    if (flag) {
        const positionX = canvas.width * flag.x / 100;
        const positionY = canvas.height * flag.y / 100;

        ctx.beginPath();
        ctx.arc(positionX, positionY, 30, 0, 2 * Math.PI);
        ctx.fillStyle = 'red'
        ctx.fill();
    }
}

