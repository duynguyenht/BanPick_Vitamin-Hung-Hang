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


// Showw video

function showImage(imageSrc) {
    // Get the image element by ID
    const img = document.getElementById('empty-frame-img');
    // Set the source of the image
    img.src = imageSrc;
}


// Ban Trái

const images = {
    1: '/Avatar/Arlecchino.jpg',
    2: '/Avatar/Dehya.jpg',
    3: '/Avatar/Diluc.jpg',
    4: '/Avatar/Klee.jpg',
    5: '/Avatar/Lyney.jpg',
    6: '/Avatar/Hutao.jpg',
    7: '/Avatar/Yoimiya.jpg',
    8: '/Avatar/Bennett.jpg',
    9: '/Avatar/Xiangling.jpg',
    10: '/Avatar/Chevreuse.jpg',
    11: '/Avatar/Gaming.jpg',
    12: '/Avatar/Amber.jpg',
    13: '/Avatar/Xinyan.jpg',
    14: '/Avatar/Yanfei.jpg',
    15: '/Avatar/Furina.jpg',
    16: '/Avatar/Sangonomiya.jpg',
    17: '/Avatar/Neuvilet.jpg',
    18: '/Avatar/Nilou.jpg',
    19: '/Avatar/Sigewinne.jpg',
    20: '/Avatar/Yelan.jpg',
    21: '/Avatar/Ayato.jpg',
    22: '/Avatar/Mulani.jpg',
    23: '/Avatar/Mona.jpg',
    24: '/Avatar/Xingqiu.jpg',
    25: '/Avatar/Barbara.jpg',
    26: '/Avatar/Candace.jpg',
    27: '/Avatar/Kazuha.jpg',
    28: '/Avatar/Xianyun.jpg',
    29: '/Avatar/Xiao.jpg',
    30: '/Avatar/Venti.jpg',
    31: '/Avatar/Mochi.jpg',
    32: '/Avatar/Jean.jpg',
    33: '/Avatar/Sucrose.jpg',
    34: '/Avatar/Sayu.jpg',
    35: '/Avatar/Lynette.jpg',
    36: '/Avatar/Heizou.jpg',
    37: '/Avatar/Faruzan.jpg',
    38: '/Avatar/Clorine.jpg',
    39: '/Avatar/Cyno.jpg',
    40: '/Avatar/Yae.jpg',
    41: '/Avatar/Raiden.jpg',
    42: '/Avatar/Keqing.jpg',
    43: '/Avatar/Sara.jpg',
    44: '/Avatar/Shinobu.jpg',
    45: '/Avatar/Fischl.jpg',
    46: '/Avatar/Beido.jpg',
    47: '/Avatar/Lisa.jpg',
    48: '/Avatar/Sethos.jpg',
    49: '/Avatar/Dori.jpg',
    50: '/Avatar/Razor.jpg',
    51: '/Avatar/Ayaka.jpg',
    52: '/Avatar/Wriothesley.jpg',
    53: '/Avatar/Ganyu.jpg',
    54: '/Avatar/Eula.jpg',
    55: '/Avatar/Shenhe.jpg',
    56: '/Avatar/Qiqi.jpg',
    57: '/Avatar/Aloy.jpg',
    58: '/Avatar/Charlotte.jpg',
    59: '/Avatar/Diona.jpg',
    60: '/Avatar/Rosaria.jpg',
    61: '/Avatar/Layla.jpg',
    62: '/Avatar/Chongyun.jpg',
    63: '/Avatar/Kaeya.jpg',
    64: '/Avatar/Freminet.jpg',
    65: '/Avatar/Mika.jpg',
    66: '/Avatar/Emilie.jpg',
    67: '/Avatar/Kinich.jpg',
    68: '/Avatar/Alhaitham.jpg',
    69: '/Avatar/Nahida.jpg',
    70: '/Avatar/Tighnari.jpg',
    71: '/Avatar/Baizhu.jpg',
    72: '/Avatar/Kirara.jpg',
    73: '/Avatar/Kaveh.jpg',
    74: '/Avatar/Yaoyao.jpg',
    75: '/Avatar/Collei.jpg',
    76: '/Avatar/Zhongli.jpg',
    77: '/Avatar/Albedo.jpg',
    78: '/Avatar/Itto.jpg',
    79: '/Avatar/Navia.jpg',
    80: '/Avatar/Chiori.jpg',
    81: '/Avatar/Kachina.jpg',
    82: '/Avatar/Gorou.jpg',
    83: '/Avatar/Ningguang.jpg',
    84: '/Avatar/Yun Jin.jpg',
    85: '/Avatar/Noelle.jpg',
    86: '/Avatar/Character86.jpg',
    87: '/Avatar/Character87.jpg',
    88: '/Avatar/Character88.jpg',
    89: '/Avatar/Character89.jpg',
    90: '/Avatar/Character90.jpg',
    91: '/Avatar/Character91.jpg',
    92: '/Avatar/Character92.jpg',
    101: '/Character/Emilie.jpg',
};

let currentImage = null;
let currentGrid = 1; // Bắt đầu từ grid 1
const imageInGrids = new Set(); // Theo dõi ảnh đã xuất hiện trong các grid
let useLeft = true; // Biến trạng thái để theo dõi hàm nào đang hoạt động

function addImageLeft(imageNumber) {
    currentImage = images[imageNumber];
    const grid = document.getElementById(`grid${currentGrid}`);
    grid.style.backgroundImage = `url(${currentImage})`;
    imageInGrids.add(currentImage); // Thêm ảnh vào danh sách ảnh đã xuất hiện
}

function addImageRight(imageNumber) {
    currentImage = images[imageNumber];
    const grid = document.getElementById(`right-grid${currentGrid}`);
    grid.style.backgroundImage = `url(${currentImage})`;
    imageInGrids.add(currentImage); // Thêm ảnh vào danh sách ảnh đã xuất hiện
}

// Hàm ban hình ảnh
const media = {
  
};

let activeMedia = null;
let activeCell = 1;
const usedMedia = new Set(); // Theo dõi media đã xuất hiện trong các cell
let useLeftBan = true; // Bắt đầu với grid bên trái

function insertMediaLeft(mediaNumber) {
    activeMedia = media[mediaNumber];
    const cell = document.getElementById(`cell${activeCell}`);
    if (cell) {
        cell.style.backgroundImage = `url(${activeMedia})`;
        usedMedia.add(activeMedia); // Thêm media vào danh sách media đã xuất hiện
    }
}

function insertMediaRight(mediaNumber) {
    activeMedia = media[mediaNumber];
    const cell = document.getElementById(`right-cell${activeCell}`);
    if (cell) {
        cell.style.backgroundImage = `url(${activeMedia})`;
        usedMedia.add(activeMedia); // Thêm media vào danh sách media đã xuất hiện
    }
}



function updateMediafinal(imageNumber, videoSrc, mediaNumber) {
    if (useLeft ) {
        addImageLeft(imageNumber); // Thêm ảnh vào grid bên trái
        insertMediaLeft(mediaNumber); // Chèn media vào cell
    } else {
        addImageRight(imageNumber); // Thêm ảnh vào grid bên phải
        insertMediaRight(mediaNumber); // Chèn media vào cell

    }
    showVideo(videoSrc); // Hiển thị video
}



function swapFunction() {
    useLeft = !useLeft; // Chuyển đổi giữa true và false cho ảnh
    useLeftBan = !useLeftBan; // Chuyển đổi giữa true và false cho media
    findClosestGrid(); // Tìm vị trí gần nhất có ảnh trước khi swap
    const swapButton = document.getElementById('swapButton');
    // Thêm xử lý chuyển media cho đúng grid
    if (useLeftBan) {
        insertMediaLeft(activeCell); // Chèn media vào cell bên trái
    } else {
        insertMediaRight(activeCell); // Chèn media vào cell bên phải
    }
}

// Gán sự kiện cho nút "Swap"
document.getElementById('swapButton').addEventListener('click', swapFunction);

function findClosestGrid() {
    // Tìm vị trí gần nhất có ảnh trong grid và đặt con trỏ ngay sau vị trí đó
    let found = false;
    for (let i = currentGrid - 1; i >= 1; i--) {
        const grid = document.getElementById(useLeft ? `grid${i}` : `right-grid${i}`);
        if (grid && grid.style.backgroundImage) {
            currentGrid = i + 1; // Đặt con trỏ ngay sau ô có ảnh
            found = true;
            break;
        }
    }
    // Nếu không tìm thấy ảnh nào hoặc vị trí con trỏ vượt quá số lượng grid, đặt về vị trí 1
    if (!found || currentGrid > 8) {
        currentGrid = 1;
    }
}




function moveImage() {
    // Chỉ di chuyển con trỏ đến grid tiếp theo
    if (currentImage) {
        if (currentGrid < 100) {
            currentGrid++;
        } else {
            currentGrid = 1; // Nếu con trỏ ở grid 5, chuyển về grid 1
        }
    }
}

function removeImage() {
    if (currentImage) {
        const grid = document.getElementById(`grid${currentGrid}`);
        grid.style.backgroundImage = ''; // Xóa ảnh từ grid hiện tại

        // Xóa ảnh khỏi danh sách ảnh đã xuất hiện nếu không còn ở grid nào
        let isImageInGrids = false;
        for (let i = 1; i <= 8; i++) {
            const grid = document.getElementById(`grid${i}`);
            if (grid.style.backgroundImage === `url(${currentImage})`) {
                isImageInGrids = true;
                break;
            }
        }
        if (!isImageInGrids) {
            imageInGrids.delete(currentImage);
        }

        // Nếu ảnh không còn ở bất kỳ grid nào, di chuyển con trỏ về trước 1 đơn vị
        currentImage = null; // Reset ảnh hiện tại

        // Tìm vị trí tiếp theo có ảnh để di chuyển con trỏ
        let found = false;
        for (let i = currentGrid - 1; i >= 1; i--) {
            const grid = document.getElementById(`grid${i}`);
            if (grid.style.backgroundImage) {
                currentGrid = i;
                found = true;
                break;
            }
        }
        if (!found) {
            // Nếu không tìm thấy ảnh, đặt con trỏ về vị trí 1
            currentGrid = 1;
        }
    }
}

function showImage(imageSrc) {
    // Get the image element by ID
    const img = document.getElementById('empty-frame-img');

    // Set the source of the image
    img.src = imageSrc;
}

function showImageBAN1(imageSrcBan) {
    // Get the image element by ID
    const img = document.getElementById('grid-ban1');
    // Set the source of the image
    img.src = imageSrcBan;
}



function handleImageButtonClick(imageNumber, imageSrc) {
    addImage(imageNumber);
    showImage(imageSrc);
}

function handleVideoButtonClick(videoNumber, videoSrc) {
    addImage(videoNumber); // Nếu cần, bạn có thể sử dụng hàm này để thêm ảnh vào các grid, nếu không thì có thể loại bỏ dòng này
    showVideo(videoSrc); // Hiển thị video thay vì hình ảnh
}


function END(videoSrc) {
    showVideo(videoSrc); // Hiển thị video thay vì hình ảnh
}



function showVideo(videoSrc) {
    // Get the video and image elements
    const video = document.getElementById('empty-frame-video');
    const img = document.getElementById('empty-frame-img');

    // Hide the image element
    img.style.display = 'none';

    // Show the video element
    video.style.display = 'block';

    // Set the source of the video
    video.src = videoSrc;

    // Play the video
    video.play();
}

document.addEventListener('DOMContentLoaded', () => {
    const fullscreenButton = document.getElementById('fullscreen-button');

    fullscreenButton.addEventListener('click', () => {
        // Kiểm tra nếu không đang ở chế độ fullscreen
        if (!document.fullscreenElement) {
            // Kích hoạt fullscreen
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
            });
        } else {
            // Thoát fullscreen nếu đang ở chế độ fullscreen
            document.exitFullscreen();
        }
    });
});



function banImage() {
    if (activeMedia) {
        // Điều chỉnh điều kiện cho phù hợp với số lượng cell thực tế
        const currentGrid = document.getElementById(`cell${activeCell}`);
        if (currentGrid) {
            // Làm mờ grid hiện tại để biểu thị đã bị khóa
        }
        const currentCellRight = document.getElementById(`right-cell${activeCell}`);
        if (currentCellRight) {
        }
        if (activeCell < 100) {
            activeCell++;
        } else {
            activeCell = 1; // Nếu con trỏ ở cell 8, chuyển về cell 1
        }
        // Di chuyển con trỏ đến ô tiếp theo trong grid phải
        if (activeCellRight < 8) { // Giả sử có 8 ô trong grid phải
            activeCellRight++;
        } else {
            activeCellRight = 1; // Nếu con trỏ ở ô cuối cùng, chuyển về ô đầu tiên
        }
 
    }
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

// Hàm để làm mờ nút
function makeButtonOpaque() {
    fullscreenButton.style.opacity = '0.001'; // Thay đổi độ mờ của nút
}

// Gọi hàm để làm mờ nút
makeButtonOpaque();
