async function startScreenShare() {
    try {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        const videoElement = document.getElementById('screenVideo');
        videoElement.srcObject = screenStream;

        // Tự động phát video khi chia sẻ màn hình
        videoElement.play();

        // Thiết lập lắng nghe sự kiện visibility
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                videoElement.play(); // Phát video khi tab trở lại
            } else {
                videoElement.pause(); // Tạm dừng video khi tab không hiển thị
            }
        });
        
        // Tự động điều chỉnh kích thước video
        const resizeVideo = () => {
            videoElement.style.width = `${window.innerWidth}px`;
            videoElement.style.height = `${window.innerHeight}px`;
        };

        // Gọi hàm điều chỉnh kích thước khi cửa sổ thay đổi kích thước
        window.addEventListener('resize', resizeVideo);
        resizeVideo(); // Gọi ngay lập tức để thiết lập kích thước ban đầu

    } catch (err) {
        console.error("Error sharing screen: ", err);
    }
}

let interval; // Biến toàn cục để lưu trữ interval
let initialDuration; // Lưu trữ thời gian ban đầu để reset
let timerRunning = false; // Biến để theo dõi trạng thái hẹn giờ
let firstStopTime = 0; // Thời gian lưu lần 1
let secondStopTime = 0; // Thời gian lưu lần 2

function updateTimer(duration) {
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('timer').textContent = minutes + ':' + seconds;
}

function startTimer(durationInMinutes) {
    // Kiểm tra nếu hẹn giờ đã đang chạy
    if (timerRunning) return;

    let duration = durationInMinutes * 60;
    initialDuration = durationInMinutes; // Lưu thời gian ban đầu

    // Hiển thị thời gian ngay lập tức
    updateTimer(duration);

    timerRunning = true; // Đánh dấu rằng hẹn giờ đang chạy

    interval = setInterval(function () {
        if (duration <= 0) {
            clearInterval(interval);
            document.getElementById('timer').textContent = "Time's up!";
            timerRunning = false; // Đánh dấu hẹn giờ đã kết thúc
            return; // Kết thúc hàm nếu thời gian đã hết
        }

        duration--; // Giảm thời gian
        updateTimer(duration); // Cập nhật hiển thị
    }, 1000);
}

function stopTimer() {
    clearInterval(interval); // Dừng hẹn giờ
    timerRunning = false; // Đánh dấu hẹn giờ đã dừng
}

function resetTimer() {
    clearInterval(interval); // Dừng hẹn giờ
    const timerElement = document.getElementById('timer');
    timerElement.textContent = `${initialDuration}:00`; // Đặt lại hiển thị
    timerRunning = false; // Đánh dấu hẹn giờ đã được reset
    firstStopTime = 0; // Reset thời gian lần 1
    secondStopTime = 0; // Reset thời gian lần 2
    document.getElementById('firstStop').textContent = '0'; // Reset giá trị hiển thị
    document.getElementById('secondStop').textContent = '0';
    document.getElementById('timeDifference').textContent = '0';
}

function saveTime() {
    if (firstStopTime === 0) {
        // Lưu lần 1
        firstStopTime = Math.floor(document.getElementById('timer').textContent.split(':')[0]) * 60 + 
                        parseInt(document.getElementById('timer').textContent.split(':')[1]) - 900;
        document.getElementById('firstStop').textContent = firstStopTime; // Cập nhật hiển thị
    } else if (secondStopTime === 0) {
        // Lưu lần 2
        secondStopTime = Math.floor(document.getElementById('timer').textContent.split(':')[0]) * 60 + 
                         parseInt(document.getElementById('timer').textContent.split(':')[1]) - 900;
        document.getElementById('secondStop').textContent = secondStopTime; // Cập nhật hiển thị

        // Tính và cập nhật sự khác biệt
        const timeDifference = firstStopTime - secondStopTime;
        document.getElementById('timeDifference').textContent = timeDifference < 0 ? 0 : timeDifference; // Đảm bảo không âm
    }
}

// Thêm sự kiện cho các nút
document.getElementById('startTimerBtn').addEventListener('click', function() {
    startTimer(15); // Ví dụ: Hẹn giờ 5 phút
});

document.getElementById('stopTimerBtn').addEventListener('click', stopTimer); // Thay đổi để chỉ tạm dừng
document.getElementById('resetTimerBtn').addEventListener('click', resetTimer);
document.getElementById('saveTimeBtn').addEventListener('click', saveTime);
document.getElementById('shareBtn').addEventListener('click', startScreenShare);
document.getElementById('resizeBtn').addEventListener('click', resizeVideo); // Thêm sự kiện cho nút Resize
