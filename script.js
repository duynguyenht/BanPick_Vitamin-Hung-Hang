let countdownInterval;
const countdownElement = document.getElementById('countdown');
const initialDuration = 90; // Default countdown duration in seconds
let clickCount = 0; // Variable to track button clicks

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function startCountdown() {
    let timer = initialDuration;
    
    // Check if the countdown is already running
    if (countdownInterval) {
        // If countdown is running, reset it
        resetCountdown();
        return;
    }
    
    // Start countdown
    countdownInterval = setInterval(function () {
        countdownElement.textContent = formatTime(timer);

        if (--timer < 0) {
            clearInterval(countdownInterval);
            countdownInterval = null; // Reset countdownInterval to null
            countdownElement.textContent = "00"; // Timer ends
        }
    }, 1000);
}

function resetCountdown() {
    clearInterval(countdownInterval);
    countdownInterval = null; // Reset countdownInterval to null
    countdownElement.textContent = formatTime(initialDuration); // Reset to initial time
}

function formatTime(seconds) {
    return `${seconds < 10 ? '0' + seconds : seconds}`;
}

// Function to handle button clicks
function handleButtonClick() {
    clickCount++;
    
    // Check if the button has been clicked twice
    if (clickCount % 2 === 0) {
        resetCountdown();
    } else {
        startCountdown();
    }
}

// Attach click event to the button
document.querySelector('.image-button').addEventListener('click', handleButtonClick);

// Start countdown when page loads
window.onload = function() {
    countdownElement.textContent = formatTime(initialDuration); // Set initial time display
};


function END(videoSrc) {
    showVideo(videoSrc); // Hiển thị video thay vì hình ảnh
}


function showVideo(videoSrc) {
    // Get the video element
    const video = document.getElementById('empty-frame-video');

    // Show the video element
    video.style.display = 'block';

    // Set the source of the video
    video.src = videoSrc;

    // Play the video
    video.play();
}

document.addEventListener('DOMContentLoaded', () => {
    const frame = document.querySelector('.empty-frame');
    const video = document.getElementById('empty-frame-video');

    // Kiểm tra nếu video không có nguồn hoặc xảy ra lỗi khi tải video
    video.addEventListener('error', () => {
        frame.style.display = 'none'; // Ẩn khung nếu video không tải được
    });

    // Kiểm tra nếu video có dữ liệu và tải thành công
    video.addEventListener('loadeddata', () => {
        if (video.readyState >= 2) {
            frame.style.display = 'flex'; // Hiển thị khung khi video tải thành công
        }
    });

    // Kiểm tra trạng thái video ngay từ đầu khi trang tải
    if (video.readyState < 2 || !video.src) {
        frame.style.display = 'none'; // Ẩn khung nếu video không có nội dung
    }
});

function searchImages() {
    // Lấy giá trị tìm kiếm
    const searchValue = document.getElementById('search-input').value.toLowerCase();

    // Lấy tất cả các nút hình ảnh
    const buttons = document.querySelectorAll('.image-button');

    // Lặp qua từng nút hình ảnh và ẩn/hiện dựa trên tên tìm kiếm
    buttons.forEach(button => {
        const name = button.getAttribute('data-name').toLowerCase();
        if (name.includes(searchValue)) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
}



document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.image-button');
    const gridCells = document.querySelectorAll('.grid-cell');
    const gridCellsRight = document.querySelectorAll('.grid-cell-right');

    // Xử lý sự kiện khi bắt đầu kéo
    button.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.src); // Lưu URL của hình ảnh vào đối tượng dataTransfer
    });

    // Xử lý sự kiện khi kéo qua các ô
    const handleDragOver = (event) => {
        event.preventDefault(); // Ngăn chặn hành vi mặc định để cho phép thả
        event.target.classList.add('droppable'); // Thêm lớp droppable để đổi màu ô khi kéo qua
    };

    const handleDragLeave = (event) => {
        event.target.classList.remove('droppable'); // Xóa lớp droppable khi kéo ra khỏi ô
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const imageSrc = event.dataTransfer.getData('text/plain'); // Lấy URL của hình ảnh từ dataTransfer
        event.target.style.backgroundImage = `url(${imageSrc})`; // Đặt hình ảnh làm nền cho ô
        event.target.style.backgroundSize = 'cover'; // Đảm bảo ảnh bao phủ toàn bộ ô
        event.target.style.backgroundPosition = 'center'; // Căn giữa ảnh
        event.target.classList.remove('droppable'); // Xóa lớp droppable khi thả
    };

    // Gán sự kiện cho các ô trong grid-left
    gridCells.forEach(cell => {
        cell.addEventListener('dragover', handleDragOver);
        cell.addEventListener('dragleave', handleDragLeave);
        cell.addEventListener('drop', handleDrop);
    });

    // Gán sự kiện cho các ô trong grid-right
    gridCellsRight.forEach(cell => {
        cell.addEventListener('dragover', handleDragOver);
        cell.addEventListener('dragleave', handleDragLeave);
        cell.addEventListener('drop', handleDrop);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.image-button');
    const gridCells = document.querySelectorAll('.grid-item');
    const gridCellsRight = document.querySelectorAll('.grid-item-right');

    // Hàm để xử lý khi kéo bắt đầu
    button.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.src); // Lưu URL của hình ảnh vào đối tượng dataTransfer
    });

    // Hàm để xử lý khi kéo qua các ô
    const handleDragOver = (event) => {
        event.preventDefault(); // Ngăn chặn hành vi mặc định để cho phép thả
        event.target.classList.add('droppable'); // Thêm lớp droppable để đổi màu ô khi kéo qua
    };

    const handleDragLeave = (event) => {
        event.target.classList.remove('droppable'); // Xóa lớp droppable khi kéo ra khỏi ô
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const imageSrc = event.dataTransfer.getData('text/plain'); // Lấy URL của hình ảnh từ dataTransfer
        event.target.style.backgroundImage = `url(${imageSrc})`; // Đặt hình ảnh làm nền cho ô
        event.target.style.backgroundSize = 'cover'; // Đảm bảo ảnh bao phủ toàn bộ ô
        event.target.style.backgroundPosition = 'center'; // Căn giữa ảnh
        event.target.classList.remove('droppable'); // Xóa lớp droppable khi thả
    };

    // Gán sự kiện cho các ô trong left-container
    gridCells.forEach(cell => {
        cell.addEventListener('dragover', handleDragOver);
        cell.addEventListener('dragleave', handleDragLeave);
        cell.addEventListener('drop', handleDrop);
    });

    // Gán sự kiện cho các ô trong right-container
    gridCellsRight.forEach(cell => {
        cell.addEventListener('dragover', handleDragOver);
        cell.addEventListener('dragleave', handleDragLeave);
        cell.addEventListener('drop', handleDrop);
    });
});


// Đảm bảo mã được thực thi sau khi trang được tải
document.addEventListener("DOMContentLoaded", function() {
    // Lấy các phần tử với ID cụ thể và thay đổi thuộc tính opacity
    var cells = document.querySelectorAll('.grid-left .grid-cell, .grid-right .grid-cell-right');
    cells.forEach(function(cell) {
        cell.style.opacity = '0.7'; // Đặt độ mờ cho các ô
    });
});


// Lấy phần tử nút bằng ID

const fullscreenButton = document.getElementById('fullscreen-button');

if (fullscreenButton) {
    fullscreenButton.addEventListener('click', function() {
        // Some code to handle fullscreen
    });
}

// Hàm để làm mờ nút
function makeButtonOpaque() {
    fullscreenButton.style.opacity = '0.001'; // Thay đổi độ mờ của nút
}

// Gọi hàm để làm mờ nút
makeButtonOpaque();


// Dữ liệu các nhân vật (đã cập nhật)
const characters = [
  
        { name: "Arlecchino", imgSrc: "avatar/Arlecchino.jpg", videoSrc: "/Character/Furina" },
        { name: "Dehya", imgSrc: "avatar/Dehya.jpg", videoSrc: "/Character/Emilie 2.mp4" },
        { name: "Diluc", imgSrc: "avatar/Diluc.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Klee", imgSrc: "avatar/Klee.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Lyney", imgSrc: "avatar/Lyney.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Hutao", imgSrc: "avatar/Hutao.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Yoimiya", imgSrc: "avatar/Yoimiya.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Bennett", imgSrc: "/Avatar/Bennett.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Xiangling", imgSrc: "/Avatar/Xiangling.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Chevreuse", imgSrc: "/Avatar/Chevreuse.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Gaming", imgSrc: "/Avatar/Gaming.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Amber", imgSrc: "/Avatar/Amber.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Xinyan", imgSrc: "/Avatar/Xinyan.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Yanfei", imgSrc: "/Avatar/Yanfei.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Furina", imgSrc: "/Avatar/Furina.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Sangonomiya", imgSrc: "/Avatar/Sangonomiya.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Neuvilet", imgSrc: "/Avatar/Neuvilet.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Nilou", imgSrc: "/Avatar/Nilou.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Sigewinne", imgSrc: "/Avatar/Sigewinne.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Yelan", imgSrc: "/Avatar/Yelan.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Ayato", imgSrc: "/Avatar/Ayato.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Mulani", imgSrc: "/Avatar/Mulani.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Mona", imgSrc: "/Avatar/Mona.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Xingqiu", imgSrc: "/Avatar/Xingqiu.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Barbara", imgSrc: "/Avatar/Barbara.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Candace", imgSrc: "/Avatar/Candace.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Kazuha", imgSrc: "/Avatar/Kazuha.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Xianyun", imgSrc: "/Avatar/Xianyun.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Xiao", imgSrc: "/Avatar/Xiao.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Venti", imgSrc: "/Avatar/Venti.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Mochi", imgSrc: "/Avatar/Mochi.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Jean", imgSrc: "/Avatar/Jean.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Sucrose", imgSrc: "/Avatar/Sucrose.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Sayu", imgSrc: "/Avatar/Sayu.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Lynette", imgSrc: "/Avatar/Lynette.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Heizou", imgSrc: "/Avatar/Heizou.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Faruzan", imgSrc: "/Avatar/Faruzan.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Clorine", imgSrc: "/Avatar/Clorine.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Cyno", imgSrc: "/Avatar/Cyno.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Yae", imgSrc: "/Avatar/Yae.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Raiden", imgSrc: "/Avatar/Raiden.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Keqing", imgSrc: "/Avatar/Keqing.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Sara", imgSrc: "/Avatar/Sara.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Shinobu", imgSrc: "/Avatar/Shinobu.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Fischl", imgSrc: "/Avatar/Fischl.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Beidou", imgSrc: "/Avatar/Beidou.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Lisa", imgSrc: "/Avatar/Lisa.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Sethos", imgSrc: "/Avatar/Sethos.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Dori", imgSrc: "/Avatar/Dori.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Razor", imgSrc: "/Avatar/Razor.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Ayaka", imgSrc: "/Avatar/Ayaka.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Wriothesley", imgSrc: "/Avatar/Wriothesley.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Ganyu", imgSrc: "/Avatar/Ganyu.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Eula", imgSrc: "/Avatar/Eula.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Shenhe", imgSrc: "/Avatar/Shenhe.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Qiqi", imgSrc: "/Avatar/Qiqi.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Aloy", imgSrc: "/Avatar/Aloy.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Charlotte", imgSrc: "/Avatar/Charlotte.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Diona", imgSrc: "/Avatar/Diona.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Rosaria", imgSrc: "/Avatar/Rosaria.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Layla", imgSrc: "/Avatar/Layla.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Chongyun", imgSrc: "/Avatar/Chongyun.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Kaeya", imgSrc: "/Avatar/Kaeya.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Freminet", imgSrc: "/Avatar/Freminet.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Mika", imgSrc: "/Avatar/Mika.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Emilie", imgSrc: "/Avatar/Emilie.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Kinich", imgSrc: "/Avatar/Kinich.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Alhaitham", imgSrc: "/Avatar/Alhaitham.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Nahida", imgSrc: "/Avatar/Nahida.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Tighnari", imgSrc: "/Avatar/Tighnari.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Baizhu", imgSrc: "/Avatar/Baizhu.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Kirara", imgSrc: "/Avatar/Kirara.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Kaveh", imgSrc: "/Avatar/Kaveh.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Yaoyao", imgSrc: "/Avatar/Yaoyao.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Collei", imgSrc: "/Avatar/Collei.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Zhongli", imgSrc: "/Avatar/Zhongli.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Albedo", imgSrc: "/Avatar/Albedo.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Itto", imgSrc: "/Avatar/Itto.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Navia", imgSrc: "/Avatar/Navia.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Chiori", imgSrc: "/Avatar/Chiori.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Kachina", imgSrc: "/Avatar/Kachina.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Gorou", imgSrc: "/Avatar/Gorou.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Ningguang", imgSrc: "/Avatar/Ningguang.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Yun Jin", imgSrc: "/Avatar/Yun Jin.jpg", videoSrc: "/Character/Emilie 6.mp4" },
        { name: "Noelle", imgSrc: "/Avatar/Noelle.jpg", videoSrc: "/Character/Emilie 6.mp4" },
      

];

// Hàm để tạo nút từ dữ liệu
function createButtons() {
    const container = document.getElementById('CallButtons');
    
    characters.forEach(character => {
        const button = document.createElement('button');
        button.className = 'image-button';
        button.setAttribute('data-name', character.name);
        button.onclick = () => END(character.videoSrc);

        const img = document.createElement('img');
        img.src = character.imgSrc;
        img.alt = `Image of ${character.name}`;
        img.className = 'image-item';

        button.appendChild(img);
        container.appendChild(button);
    });
}
// Gọi hàm để tạo các nút
createButtons();
