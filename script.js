document.addEventListener('DOMContentLoaded', function () {
    // 테마 업데이트 함수 - 낮/밤 두 가지만 사용
    function updateTheme() {
        const now = new Date();
        const hour = now.getHours();

        // 낮(12시-17시): 밝은 테마
        // 밤(18시-11시): 어두운 테마
        const isDay = hour >= 12 && hour < 18;

        // CSS 변수 직접 설정으로 신뢰성 확보
        if (isDay) {
            // 낮 테마 설정
            document.body.style.backgroundColor = '#ffffff';
            document.body.style.color = '#333333';
            document.documentElement.style.setProperty('--main-bg-color', '#ffffff');
            document.documentElement.style.setProperty('--main-text-color', '#333333');
            document.documentElement.style.setProperty('--button-bg-gradient-from', '#4dabf7');
            document.documentElement.style.setProperty('--button-bg-gradient-to', '#3b8fd7');
            document.documentElement.style.setProperty('--button-text-color', '#ffffff');
            document.documentElement.style.setProperty('--divider-color', 'rgba(51, 154, 240, 0.3)');
            document.documentElement.style.setProperty('--accent-gradient-from', '#339af0');
            document.documentElement.style.setProperty('--accent-gradient-to', '#2884d8');
            document.documentElement.style.setProperty('--accent-color', '#339af0');
        } else {
            // 밤 테마 설정
            document.body.style.backgroundColor = '#2a2a2a';
            document.body.style.color = '#e0e0e0';
            document.documentElement.style.setProperty('--main-bg-color', '#2a2a2a');
            document.documentElement.style.setProperty('--main-text-color', '#e0e0e0');
            document.documentElement.style.setProperty('--button-bg-gradient-from', '#3d3d3d');
            document.documentElement.style.setProperty('--button-bg-gradient-to', '#2d2d2d');
            document.documentElement.style.setProperty('--button-text-color', '#ffffff');
            document.documentElement.style.setProperty('--divider-color', 'rgba(255, 255, 255, 0.15)');
            document.documentElement.style.setProperty('--accent-gradient-from', '#505050');
            document.documentElement.style.setProperty('--accent-gradient-to', '#404040');
            document.documentElement.style.setProperty('--accent-color', '#505050');
        }

        // 기존 테마 클래스 모두 제거
        document.body.classList.remove('theme-day', 'theme-night');

        // 새 테마 클래스 추가
        document.body.classList.add(isDay ? 'theme-day' : 'theme-night');
    }

    // 즉시 테마 설정 실행 (DOM 로드 즉시)
    updateTheme();

    // 한 번 더 지연 실행하여 다른 스크립트의 간섭 방지
    setTimeout(updateTheme, 100);

    // 1분마다 테마 업데이트
    setInterval(updateTheme, 60000);
});

// 페이지 전환 함수
function showPage(pageId) {
    // 모든 콘텐츠 숨기기
    document.querySelectorAll('.content-wrapper').forEach(function (content) {
        content.style.display = 'none';
    });

    // 선택한 페이지 보이기
    if (pageId === 'main') {
        document.getElementById('main-content').style.display = 'flex';
    } else if (pageId === 'academy') {
        document.getElementById('academy-content').style.display = 'flex';
    } else if (pageId === 'instructors') {
        document.getElementById('instructors-content').style.display = 'flex';
    } else if (pageId === 'jieun-profile') {
        document.getElementById('jieun-profile-content').style.display = 'flex';
    } else if (pageId === 'sion-profile') {
        document.getElementById('sion-profile-content').style.display = 'flex';
    } else if (pageId === 'heonkook-profile') {
        document.getElementById('heonkook-profile-content').style.display = 'flex';
    }

    // 페이지 전환 효과
    fadeInPage(pageId);
}

// 페이드인 효과
function fadeInPage(pageId) {
    let contentId;

    if (pageId === 'main') {
        contentId = 'main-content';
    } else if (pageId === 'jieun-profile') {
        contentId = 'jieun-profile-content';
    } else if (pageId === 'sion-profile') {
        contentId = 'sion-profile-content';
    } else if (pageId === 'heonkook-profile') {
        contentId = 'heonkook-profile-content';
    } else {
        contentId = pageId + '-content';
    }

    let content = document.getElementById(contentId);

    // 초기 투명도 설정
    content.style.opacity = '0';

    // 페이드인 애니메이션
    setTimeout(function () {
        content.style.transition = 'opacity 0.3s ease';
        content.style.opacity = '1';
    }, 10);
} 