// Gắn các thư viện JavaScript của Bootstrap và Popper.js từ CDN
const script1 = document.createElement('script');
script1.src = "https://code.jquery.com/jquery-3.5.1.slim.min.js";
document.body.appendChild(script1);

const script2 = document.createElement('script');
script2.src = "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js";
document.body.appendChild(script2);

const script3 = document.createElement('script');
script3.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";
document.body.appendChild(script3);

// Bạn có thể thêm các script tùy chỉnh tại đây nếu cần
console.log("Bootstrap đã được tải thành công!");

// Biến để quản lý chia sẻ màn hình
let screenStream = null;

// Lấy các phần tử HTML từ trang
const shareBtn = document.getElementById('shareBtn');
const screenVideo = document.getElementById('screenVideo');

// Hàm chia sẻ màn hình
async function startScreenShare() {
  try {
    // Yêu cầu chia sẻ màn hình từ người dùng
    screenStream = await navigator.mediaDevices.getDisplayMedia({
      video: {
        cursor: "always" // Hiển thị con trỏ chuột khi chia sẻ
      },
      audio: false // Bạn có thể thêm audio nếu cần
    });
    
    // Gán stream vào video player
    screenVideo.srcObject = screenStream;
    
    // Khi người dùng dừng chia sẻ màn hình, tắt video
    screenStream.getVideoTracks()[0].addEventListener('ended', () => {
      stopScreenShare();
    });

    console.log("Bắt đầu chia sẻ màn hình");
  } catch (err) {
    console.error("Không thể chia sẻ màn hình:", err);
  }
}

// Hàm dừng chia sẻ màn hình
function stopScreenShare() {
  if (screenStream) {
    let tracks = screenStream.getTracks();
    tracks.forEach(track => track.stop());
    screenVideo.srcObject = null; // Tắt video stream
    console.log("Dừng chia sẻ màn hình");
  }
}

// Thêm sự kiện click vào nút Share
shareBtn.addEventListener('click', startScreenShare);

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
      document.getElementById('firstStop').textContent = Math.abs(firstStopTime); // Sử dụng Math.abs để ẩn dấu trừ
  } else if (secondStopTime === 0) {
      // Lưu lần 2
      secondStopTime = Math.floor(document.getElementById('timer').textContent.split(':')[0]) * 60 + 
                       parseInt(document.getElementById('timer').textContent.split(':')[1]) - 900;
      document.getElementById('secondStop').textContent = Math.abs(secondStopTime); // Sử dụng Math.abs để ẩn dấu trừ

      // Tính và cập nhật sự khác biệt
      const timeDifference = firstStopTime - secondStopTime;
      document.getElementById('timeDifference').textContent = Math.abs(timeDifference); // Sử dụng Math.abs để ẩn dấu trừ
  }
}


// Thêm sự kiện cho các nút
document.getElementById('prepareBtn').addEventListener('click', function() {
    startTimer(5); // Khởi động đồng hồ 5 phút
});

document.getElementById('startTimerBtn').addEventListener('click', function() {
    startTimer(15); // Khởi động đồng hồ 15 phút
});

document.getElementById('stopTimerBtn').addEventListener('click', stopTimer); // Thay đổi để chỉ tạm dừng
document.getElementById('resetTimerBtn').addEventListener('click', resetTimer);
document.getElementById('saveTimeBtn').addEventListener('click', saveTime);

