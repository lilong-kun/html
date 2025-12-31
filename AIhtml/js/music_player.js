// 简单的音乐播放器功能
document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const songTitle = document.getElementById('songTitle');
    const songList = document.getElementById('songList');
    
    let currentSongIndex = 0;
    
    // 加载歌曲
    function loadSong(index) {
        audioPlayer.src = songs[index].src;
        songTitle.textContent = songs[index].title;
        
        // 更新播放列表显示
        updatePlaylistDisplay();
    }
    
    // 更新播放列表显示
    function updatePlaylistDisplay() {
        const songItems = songList.querySelectorAll('.song-item');
        songItems.forEach((item, index) => {
            item.classList.remove('active');
            if (index === currentSongIndex) {
                item.classList.add('active');
            }
        });
    }
    
    // 播放歌曲
    playBtn.addEventListener('click', function() {
        audioPlayer.play();
    });
    
    // 暂停歌曲
    pauseBtn.addEventListener('click', function() {
        audioPlayer.pause();
    });
    
    // 下一首
    nextBtn.addEventListener('click', function() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        audioPlayer.play();
    });
    
    // 上一首
    prevBtn.addEventListener('click', function() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        audioPlayer.play();
    });
    
    // 点击播放列表中的歌曲
    songList.addEventListener('click', function(e) {
        const songItem = e.target.closest('.song-item');
        if (songItem) {
            const index = parseInt(songItem.dataset.index);
            currentSongIndex = index;
            loadSong(currentSongIndex);
            audioPlayer.play();
        }
    });
    
    // 音频结束自动播放下一首
    audioPlayer.addEventListener('ended', function() {
        nextBtn.click();
    });
    
    // 初始化加载第一首歌
    loadSong(0);
});
