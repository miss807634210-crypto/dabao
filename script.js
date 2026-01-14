/**
 * 达宝歌单网站 JavaScript
 * 包含歌曲数据和交互功能
 */

// 歌曲数据
const songData = {
    // 流行歌曲
    popular: [
        "光", "鱼", "吻", "画", "囍", "椿", "火", "当", "爱", "常", "笼", "喂", "啊", "谪仙", "大眠", "箴言", "爱你", "重来", "阴天", "齐天", "微微", "解药", "流年", "天涯", "飘摇", "大鱼", "祈祷", "倒带", "风月", "千古", "舞娘", "不哭", "叶子", "倾城", "命运", "小小", "火苗", "心跳", "人间", "尽头", "后来", "喜欢", "放过", "成全", "宝贝", "雨蝶", "信仰", "稻香", "芊芊", "天后", "宁夏", "说谎", "暖暖", "画沙", "江南", "心墙", "皈依", "趁早", "演员", "稻香", "沉溺", "消愁", "丝路", "月光", "红颜", "洋葱", "芒种", "信仰", "彩虹", "撒野", "年轮", "李白", "流年", "红豆", "暖暖", "答案", "逆战", "走马", "暧昧", "触电", "囚鸟", "听海", "花火", "纪念", "传奇", "不染", "自洽", "禁区", "Andy", "够爱", "月下", "是你", "再见", "赤伶", "摆渡", "山川", "无期", "怀念", "红黑", "人质", "浮白", "假装", "说客", "聊生", "愿望", "杀手", "晚婚", "活该", "爱情", "狐言", "哦想", "早春", "问风", "失忆", "重来", "悬溺", "不留", "如此", "精卫", "幻听", "循迹", "你走", "拥抱", "Amen", "离人", "空心", "心空", "叮咚", "放开", "用情", "蠢货", "青花", "冻夏", "夜车", "楼顶", "出卖", "骑士", "岁岁", "怪病", "乐园", "不得", "恋人", "阿妮", "时差", "沟壑", "侧脸", "过客", "对影", "大桥", "纹身", "骑士", "出卖", "忧愁", "挚友", "保留", "占有", "戒你", "仗着", "勉强", "棕旨", "窄门", "千年", "多嘴", "恰好", "岁岁", "嗵嗵", "太空", "春风吹", "多情岸", "天下局", "达尔文", "外婆桥", "广寒谣", "寄明月", "童话镇", "带我走", "云与海", "就是我", "鱼玄机", "小永远", "欧若拉", "万物生", "大丈夫", "盗将行", "说爱你", "广寒宫", "起风了", "安和桥", "胡广生", "醉清风", "牵丝戏", "雨樱花", "舞女泪", "追光者", "乐游记", "清平调", "大时代", "走天涯", "恶作剧", "我要你", "笑忘书", "卡路里", "月牙湾", "九张机", "醉赤壁", "红昭愿", "讲真的", "离人愁", "解语花", "紫藤花", "新地球", "回马枪", "失语者", "半山腰", "沈园外", "若把你", "学不会", "茉莉雨", "烦恼歌", "三国杀", "三国恋", "不要脸", "镜面人", "向云端", "春三月", "凄美的", "桃花诺", "听风吟", "龙卷风", "美人鱼", "丑八怪", "多情种", "爱人呢", "黑武士", "泸沽湖", "一剪梅", "镜面人", "麻醉师", "地球仪", "纯妹妹", "咸咸的", "不想睡", "相思垢", "大人中", "都不懂", "小红象", "野心家", "克卜勒", "石头歌", "太聪明", "叹云兮", "尕连手", "Radio", "走麦田", "爱不爱", "是风动", "关于你", "不想睡", "下等马", "离人赋", "麦恩粒", "楚歌起", "枫叶城", "琴弦上", "我的美丽", "光的方向", "飞鸟和蝉", "等你归来", "不再联系", "特别的人", "我本不灭", "失恋无罪", "边界1999", "如初之光", "梦的光点", "秋殇别恋", "修炼爱情", "万物生长", "潇洒小姐", "爱情错觉", "即刻出发", "夏天的风", "不醉不会", "匆匆那年", "仙人指路", "梦醒时分", "狂野想乡", "再见青春", "浮生未歇", "清风徐来", "大笑江湖", "勿忘心安", "无愧于心", "空空如也", "忽然之间", "百万个吻", "我怀念的", "明月天涯", "我好想你", "不再联系", "爱我别走", "兔子先生", "像风一样", "我们的爱", "梦特别矫", "路过人间", "浪漫血液", "不死之身", "彩色翅膀", "寂寞先生", "白色羽毛", "屋顶着火", "如果的事", "作势装腔", "连名带姓", "最后一页", "一荤一素", "我的世界", "万物起舞", "金风玉露", "天若有情", "梦特别娇", "第三人称", "漠河舞厅", "俩俩相忘", "喜剧之王", "影子对手", "sensitive", "泪不停流", "爱情讯息", "如果可以", "西楼儿女", "同手同脚", "四风判词", "昨日青空", "春雨夏至", "到此为止", "没语季节", "想要和你", "小巷酒馆", "月色薄衣", "晚点再爱", "让她降落", "台北车站", "额尔古纳", "红拂夜奔", "龙门客栈", "可惜没如果", "东京不太热", "奇妙能力歌", "普通disco", "陪我看日出", "红色高跟鞋", "我最亲爱的", "至少还有你", "客官不可以", "慢慢喜欢你", "如果没有你", "爱要坦荡荡", "最炫民族风", "其实都没有", "易燃易爆炸", "吹灭小山河", "最初的梦想", "陪你去流浪", "爱有路可退", "在树上唱歌", "被驯服的象", "雨季开始了", "新娘不是我", "山楂树之恋", "爱你一万年", "伤心太平洋", "突然想起你", "美丽笨女人", "爱的天灵灵", "缘分一道桥", "坚强的理由", "无奈的思绪", "我要找到你", "别找我麻烦", "欠踹的背影", "生生世世爱", "我的歌声里", "诚实的想你", "疯狂的阳光", "梦到太空外", "法兰西多士", "三拜红尘凉", "爱在西元前", "如果没有你", "会呼吸的痛", "吻得太逼真", "生活在别处", "想你时风起", "怎么唱情歌", "眼泪的名字", "那时候的我", "爱情大魔咒", "我叫上官燕", "一刹的烟火", "最好的时光", "亲爱的你啊", "霓裳羽衣曲", "惜别的海岸", "到时说爱我", "寂寞的季节", "下完这场雨", "痴心无名氏", "爱x无限大", "不浪漫罪名", "云裳羽衣曲", "荒漠上行走", "猫猫静悄悄", "思念是一种病", "说好的幸福呢", "火红的萨日朗", "像我这样的人", "寂寞的恋人会", "化身孤岛的鲸", "你还要我怎样", "你潇洒我漂亮", "粉红色的回忆", "最重要的决定", "越单纯越幸福", "一如少年模样", "永不失联的爱", "若思念便思念", "亲爱的下雨了", "写不完的温柔", "我是来揍你的", "若思念便思念", "亲爱的下雨了", "有可能的夜晚", "寂寞寂寞不好", "云与尘的裂痕", "字和句关于你", "寂寞寂寞不好", "去有风的地方", "我管不住自己", "漂洋过海来看你", "不为谁而作的歌", "负重一万斤长大", "挥着翅膀的女孩", "一生只能爱一个", "我曾遇到一束光", "就让这大雨落下", "你就不要想起我", "因为单身的缘故", "爱我不要丢下我", "给月亮的三行诗", "美人鱼的玻璃鞋", "第57次取消发送", "给电影人的情书", "1987我不知会遇见你", "我还年轻我还年轻", "亲爱的那不是爱情", "你快乐所以我快乐", "你知道我害怕一个人天黑", "如果我们当时在一起会怎么样", "Say You Love Me feat", "Tamala"
    ],
    
    // 说唱歌曲
    rap: [
        "Burn me down",
        "嘴脸",
        "麒麟",
        "他在乎",
        "帽檐反戴",
        "罗生门",
        "真没睡",
        "电梯战神",
        "北派",
        "圣玛伊伦斯",
        "我的新衣",
        "雪distance",
        "宝贝在干嘛",
        "火棍",
        "小丑女",
        "百变酒精",
        "4u",
        "两难",
        "雀台"
    ],
    
    // 整活歌曲
    funny: [
        "逐客令（吹箫版）",
        "膨胀"
    ]
};

// DOM 元素
const categoryFilter = document.getElementById('category-filter');
const songSearch = document.getElementById('song-search');
const searchButton = document.getElementById('search-button');
const copyNotification = document.getElementById('copy-notification');
const popularSongsContainer = document.getElementById('popular-songs');
const rapSongsContainer = document.getElementById('rap-songs');
const funnySongsContainer = document.getElementById('funny-songs');
const searchResultsContainer = document.getElementById('search-results');
const searchResultsList = document.getElementById('search-results-list');
const popularSection = document.getElementById('popular-section');
const rapSection = document.getElementById('rap-section');
const funnySection = document.getElementById('funny-section');
const randomSongBtn = document.getElementById('random-song-btn');
const randomSongModal = document.getElementById('random-song-modal');
const modalContent = document.getElementById('modal-content');
const randomSongName = document.getElementById('random-song-name');
const confirmRandomSong = document.getElementById('confirm-random-song');

// 初始化页面
function initPage() {
    // 渲染所有歌曲
    renderSongs();
    
    // 添加事件监听器
    categoryFilter.addEventListener('change', handleCategoryChange);
    searchButton.addEventListener('click', handleSearch);
    songSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    randomSongBtn.addEventListener('click', handleRandomSong);
    confirmRandomSong.addEventListener('click', confirmRandomSongClick);
    
    // 实时搜索功能
    songSearch.addEventListener('input', handleRealTimeSearch);
}

// 渲染歌曲列表
function renderSongs() {
    renderCategorySongs('popular', songData.popular, popularSongsContainer);
    renderCategorySongs('rap', songData.rap, rapSongsContainer);
    renderCategorySongs('funny', songData.funny, funnySongsContainer);
}

// 渲染特定分类的歌曲
function renderCategorySongs(category, songs, container) {
    container.innerHTML = '';
    
    // 去重处理
    const uniqueSongs = [...new Set(songs)];
    
    uniqueSongs.forEach((song, index) => {
        const songElement = document.createElement('div');
        songElement.className = `song-item ${category}`;
        songElement.innerHTML = `
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <span class="song-number">${index + 1}</span>
                    <span class="song-name">${song}</span>
                </div>
                <span class="copy-icon">
                    <i class="fa fa-copy"></i>
                </span>
            </div>
        `;
        
        // 添加点击事件
        songElement.addEventListener('click', () => copySongName(song));
        
        container.appendChild(songElement);
    });
}

// 复制歌名
function copySongName(songName) {
    // 添加前缀
    const textToCopy = `点歌 ${songName}`;
    
    // 使用 Clipboard API 复制文本
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            // 显示复制成功提示
            showCopyNotification();
        })
        .catch(err => {
            console.error('复制失败:', err);
            // 降级方案
            fallbackCopyTextToClipboard(textToCopy);
        });
}

// 降级复制方案
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopyNotification();
    } catch (err) {
        console.error('降级复制方案也失败了:', err);
    }
    
    document.body.removeChild(textArea);
}

// 显示复制成功提示
function showCopyNotification() {
    copyNotification.classList.add('show-notification');
    
    // 3秒后隐藏提示
    setTimeout(() => {
        copyNotification.classList.remove('show-notification');
    }, 3000);
}

// 处理随机点歌
function handleRandomSong() {
    // 从所有歌曲中随机选择一首
    const allSongs = [
        ...songData.popular.map(song => ({name: song, category: 'popular'})),
        ...songData.rap.map(song => ({name: song, category: 'rap'})),
        ...songData.funny.map(song => ({name: song, category: 'funny'}))
    ];
    
    // 去重
    const uniqueSongs = [];
    const songNames = new Set();
    
    allSongs.forEach(song => {
        if (!songNames.has(song.name)) {
            songNames.add(song.name);
            uniqueSongs.push(song);
        }
    });
    
    const randomIndex = Math.floor(Math.random() * uniqueSongs.length);
    const randomSong = uniqueSongs[randomIndex];
    
    // 设置随机选中的歌曲名
    randomSongName.textContent = randomSong.name;
    
    // 显示中央弹窗
    randomSongModal.classList.remove('hidden');
    // 添加动画效果
    setTimeout(() => {
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
}

// 确认随机点歌并复制
function confirmRandomSongClick() {
    // 获取随机选中的歌曲名
    const songName = randomSongName.textContent;
    
    // 隐藏弹窗
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        randomSongModal.classList.add('hidden');
    }, 300);
    
    // 复制歌曲名（带前缀）
    copySongName(songName);
}

// 处理分类筛选
function handleCategoryChange() {
    const selectedCategory = categoryFilter.value;
    
    // 重置搜索框
    songSearch.value = '';
    
    // 隐藏搜索结果
    searchResultsContainer.classList.add('hidden');
    
    // 根据选择的分类显示/隐藏对应的歌曲区域
    switch (selectedCategory) {
        case 'all':
            popularSection.classList.remove('hidden');
            rapSection.classList.remove('hidden');
            funnySection.classList.remove('hidden');
            break;
        case 'popular':
            popularSection.classList.remove('hidden');
            rapSection.classList.add('hidden');
            funnySection.classList.add('hidden');
            break;
        case 'rap':
            popularSection.classList.add('hidden');
            rapSection.classList.remove('hidden');
            funnySection.classList.add('hidden');
            break;
        case 'funny':
            popularSection.classList.add('hidden');
            rapSection.classList.add('hidden');
            funnySection.classList.remove('hidden');
            break;
    }
}

// 处理搜索
function handleSearch() {
    const searchTerm = songSearch.value.trim().toLowerCase();
    
    // 如果搜索词为空，显示所有歌曲
    if (!searchTerm) {
        searchResultsContainer.classList.add('hidden');
        handleCategoryChange(); // 应用当前分类筛选
        return;
    }
    
    // 搜索所有分类的歌曲
    const searchResults = searchInAllCategories(searchTerm);
    
    // 显示搜索结果
    displaySearchResults(searchResults);
    
    // 隐藏所有分类区域
    popularSection.classList.add('hidden');
    rapSection.classList.add('hidden');
    funnySection.classList.add('hidden');
}

// 实时搜索处理
function handleRealTimeSearch() {
    const searchTerm = songSearch.value.trim().toLowerCase();
    
    // 如果搜索词为空，显示所有歌曲
    if (!searchTerm) {
        searchResultsContainer.classList.add('hidden');
        handleCategoryChange(); // 应用当前分类筛选
        return;
    }
    
    // 搜索所有分类的歌曲
    const searchResults = searchInAllCategories(searchTerm);
    
    // 显示搜索结果
    displaySearchResults(searchResults);
    
    // 隐藏所有分类区域
    popularSection.classList.add('hidden');
    rapSection.classList.add('hidden');
    funnySection.classList.add('hidden');
}

// 在所有分类中搜索
function searchInAllCategories(searchTerm) {
    const results = [];
    
    // 搜索流行歌曲
    songData.popular.forEach(song => {
        if (song.toLowerCase().includes(searchTerm)) {
            results.push({
                name: song,
                category: 'popular'
            });
        }
    });
    
    // 搜索说唱歌曲
    songData.rap.forEach(song => {
        if (song.toLowerCase().includes(searchTerm)) {
            results.push({
                name: song,
                category: 'rap'
            });
        }
    });
    
    // 搜索整活歌曲
    songData.funny.forEach(song => {
        if (song.toLowerCase().includes(searchTerm)) {
            results.push({
                name: song,
                category: 'funny'
            });
        }
    });
    
    // 去重处理
    const uniqueResults = [];
    const songNames = new Set();
    
    results.forEach(result => {
        if (!songNames.has(result.name)) {
            songNames.add(result.name);
            uniqueResults.push(result);
        }
    });
    
    return uniqueResults;
}

// 显示搜索结果
function displaySearchResults(results) {
    searchResultsList.innerHTML = '';
    
    if (results.length === 0) {
        // 显示无结果提示
        searchResultsList.innerHTML = `
            <div class="no-results">
                <i class="fa fa-search"></i>
                <p>未找到匹配的歌曲</p>
                <p class="text-sm mt-2">请尝试其他关键词</p>
            </div>
        `;
    } else {
        // 显示搜索结果
        results.forEach((result, index) => {
            const songElement = document.createElement('div');
            songElement.className = `song-item ${result.category}`;
            songElement.innerHTML = `
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <span class="song-number">${index + 1}</span>
                        <span class="song-name">${result.name}</span>
                    </div>
                    <span class="copy-icon">
                        <i class="fa fa-copy"></i>
                    </span>
                </div>
            `;
            
            // 添加点击事件
            songElement.addEventListener('click', () => copySongName(result.name));
            
            searchResultsList.appendChild(songElement);
        });
    }
    
    // 显示搜索结果区域
    searchResultsContainer.classList.remove('hidden');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initPage);