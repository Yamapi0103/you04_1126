-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- 主機: 127.0.0.1
-- 產生時間： 2018 年 12 月 18 日 03:00
-- 伺服器版本: 10.1.36-MariaDB
-- PHP 版本： 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `u04`
--

-- --------------------------------------------------------

--
-- 資料表結構 `active_categories`
--

CREATE TABLE `active_categories` (
  `id` int(11) NOT NULL,
  `active_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `active_categories`
--

INSERT INTO `active_categories` (`id`, `active_name`) VALUES
(1, '請選擇活動類型'),
(2, 'YouTube'),
(3, 'Facebook'),
(4, 'Instagram'),
(5, 'Blog');

-- --------------------------------------------------------

--
-- 資料表結構 `bsmember`
--

CREATE TABLE `bsmember` (
  `BS_sid` int(11) NOT NULL,
  `BS_email` varchar(255) NOT NULL,
  `BS_password` varchar(255) NOT NULL,
  `BS_photo` varchar(255) DEFAULT NULL,
  `BS_name` varchar(255) DEFAULT NULL,
  `BS_type` varchar(255) DEFAULT NULL,
  `BS_phone` varchar(255) DEFAULT NULL,
  `BS_link` varchar(255) DEFAULT NULL,
  `BS_info` varchar(500) DEFAULT NULL,
  `BS_create_at` datetime DEFAULT NULL,
  `BS_point` int(255) DEFAULT '0',
  `BS_status` varchar(255) NOT NULL DEFAULT '啟用中'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `bsmember`
--

INSERT INTO `bsmember` (`BS_sid`, `BS_email`, `BS_password`, `BS_photo`, `BS_name`, `BS_type`, `BS_phone`, `BS_link`, `BS_info`, `BS_create_at`, `BS_point`, `BS_status`) VALUES
(1, 'BSI0001@u04.com', 'BSI0001PS', 'bs01.jpg', '遊戲橘子', '資訊/遊戲', '20142197', 'https://www.gamania.com/', '在充滿驚奇的數位世界裡，Gamania總是吸引玩家目光。結合營運、平台與策略聯盟夥伴共同開發，完整佈局遊戲王國。玩家涵蓋中日韓。結合全新概念開發beanfun! 數位娛樂平台，打造耳目一新的遊戲體驗，豐富的遊戲類型 滿足玩家需求', '2018-12-01 08:00:00', 2200, '啟用中'),
(2, 'BSI0002@u04.com', 'BSI0002PS', 'bs02.jpg', '華碩', '科技/製造', '20037372', 'https://www.asus.com/tw/', '華碩電腦股份有限公司是一家總部設於台灣臺北市北投區的跨國硬體及電子元件公司。華碩其產品包括家用與商務用桌上型電腦、筆記型電腦、行動電話、網路裝置、顯示器、投影機、主機板、顯示卡、光儲存、多媒體產品、外圍裝置、可穿戴裝置、伺服器、工作站和平板電腦。該公司也是一家OEM製造商。 ', '2018-12-15 00:10:00', 700, '啟用中'),
(3, 'BSI0003@u04.com', 'BSI0003PS', 'bs03.jpg', '全聯福利中心', '零售/百貨', '20357795', 'http://www.pxmart.com.tw/px/index.px', '全聯實業股份有限公司，簡稱全聯，其下全聯福利中心是臺灣的主要零售通路之一，為目前臺灣店數最多的超級市場，成立於1998年10月。', '2018-12-07 08:00:00', 400, '啟用中'),
(4, 'BSI0004@u04.com', 'BSI0004PS', 'bs04.jpg', '蝦皮', '零售/百貨', '20360367', 'https://shopee.tw/', '蝦皮購物是一個電子商務平台，總部設在新加坡，隸屬於Sea Group，該公司於2009年由李小冬創立。蝦皮購物於2015年首次在新加坡推出，目前已擴展到馬來西亞、泰國、印度尼西亞、越南和菲律賓、臺灣。蝦皮購物為全世界華人地區用戶的線上購物和銷售商品提供服務。', '2018-12-02 08:00:00', 800, '啟用中'),
(5, 'BSI0005@u04.com', 'BSI0005PS', 'bs05.jpg', '信義房屋', '其他', '20131382', 'http://www.sinyi.com.tw/', '信義房屋仲介股份有限公司為台灣房屋仲介公司之一，由創辦人周俊吉設立於1981年，其時政府尚未核准仲介公司營業，因此以「信義代書事務所」提供房屋買賣仲介服務，至1987年正式成立「信義房屋仲介股份有限公司」。', '2018-12-18 00:10:00', 1200, '啟用中'),
(6, 'BSI0006@u04.com', 'BSI0006PS', 'bs06.jpg', '裕隆汽車', '科技/製造', '20427432', 'www.yulon-motor.com.tw/', '納智捷汽車股份有限公司，簡稱納智捷汽車或納智捷，為中華民國的汽車品牌，是裕隆汽車於2008年5月轉投資成立的全資子公司，亦為裕隆汽車於臺灣時間2009年1月6日下午正式發表的自有品牌。', '2018-12-19 00:10:00', 1600, '啟用中'),
(7, 'BSI0007@u04.com', 'BSI0007PS', 'bs07.jpg', '松菸文創', '藝文/展覽', '3294539', 'https://www.songshanculturalpark.org/', '松山文創園區，不只是在信義商圈中提供了一個新的活動展演空間，也是提供了一個讓民眾可以放鬆舒壓、體驗慢活的好場所！', '2018-12-07 08:00:00', 1400, '啟用中'),
(8, 'BSI0008@u04.com', 'BSI0008PS', 'bs08.jpg', '微風廣場', '旅遊/娛樂', '20485423', 'https://www.breezecenter.com/', '微風廣場官方網站，創造一場時尚新覺醒！ 打破既有百貨公司的網站形式，微風以更豐富、多元的素材，以及更符合需求的分類設計，讓對流行時尚、生活娛樂充滿興趣。', '2018-12-17 00:05:00', 1000, '啟用中'),
(9, 'BSI0009@u04.com', 'BSI0009PS', 'bs09.jpg', 'OPPO', '科技/製造', '20100960', 'https://www.oppo.com/tw/', 'OPPO，是中國大陸電子裝置及智慧型終端製造公司，總部位於廣東省東莞市，成立初期以生產MP3、MP4、DVD等影音播放裝置為主，後進軍手機市場，推出以快速充電及影像處理為主要賣點的拍照智慧型手機。', '2018-12-07 08:00:00', 2300, '啟用中'),
(10, 'BSI0010@u04.com', 'BSI0010PS', 'bs10.jpg', '任天堂', '資訊/遊戲', '20514968', 'http://www.nintendo.tw/index.html', '主要從事電子遊戲和玩具的開發、製造與發行的日本公司。於1889年在日本京都創立，至今公司總部仍設於京都。任天堂最初以生產花札起家，1970年代後期投入電子遊戲產業，在1983年推出家用遊戲機Family Computer、以及1985年推出遊戲軟體《超級瑪利歐兄弟》後，逐漸成為世界知名電子遊戲開發商。', '2018-12-02 08:00:00', 800, '啟用中'),
(11, 'BSI0011@u04.com', 'BSI0011PS', 'bs11.jpg', '聯成電腦', '學習/體驗', '20122768', 'https://www.lccnet.com.tw/', '聯成電腦是臺灣電腦教育訓練公司之一，於西元1991年成立。經營各國際軟體認證考試，與巨匠電腦、學承電腦、赫綵設計學院為台灣主要4大電腦教學業者之一，在台灣有27家訓練中心。提供相關資訊及設計訓練課程包含多媒體視覺創意、工業建築設計、網管程式設計以及職場電腦技能等。2018年成立子公司聯成外語。', '2018-12-09 08:00:00', 1600, '啟用中'),
(12, 'BSI0012@u04.com', 'BSI0012PS', 'bs12.jpg', '麥當勞', '服務/餐飲', '22135518', 'https://www.mcdonalds.com.tw/', '麥當勞是源自美國南加州的跨國連鎖快餐店，也是全球最大的快餐連鎖店，主要販售漢堡包及薯條、炸雞、碳酸飲料、冰品、沙拉、水果、美式热咖啡等快餐食品，目前總部位於美國芝加哥近郊的橡樹溪鎮。', '2018-12-16 00:01:00', 700, '啟用中'),
(13, 'BSI0013@u04.com', 'BSI0013PS', 'bs13.jpg', 'GQ', '藝文/展覽', '20308561', 'https://www.gq.com.tw/', '男性時尚生活類網站，宣導有型有款的時尚消費理念，為型男穿衣搭配提供權威指導，引領趣味與人文情懷兼具的男人生活方式，分享性感女人的私密話題。\r\n', '2018-12-07 08:00:00', 100, '停權'),
(14, 'BSI0014@u04.com', 'BSI0014PS', 'bs14.jpg', '雄獅旅行社', '旅遊/娛樂', '20472804', 'https://www.liontravel.com/', '全方位旅行社服務，包含國外旅遊、國內旅遊、機票查詢訂購、飯店住宿、自由行、票券、郵輪、高鐵假期、證照等，遍布全球的雄獅旅遊門市，旅人評價最愛的首選。', '2018-12-16 00:05:00', 800, '啟用中'),
(15, 'BSI0015@u04.com', 'BSI0015PS', 'bs15.jpg', '雷蛇', '科技/製造', '3284112', 'https://www.razer.com/hk-zh', '雷蛇是一家在新加坡創立的遊戲周邊裝置公司，又被稱為「燈廠」，近年開始進軍電子消費業務。雷蛇的兩個總部分別設立在新加坡及美國聖地牙哥。2017年11月在香港港交所上市，產品面向遊戲玩家，其產品大多數都以肉食動物命名。2018年推出電子錢包Razer Pay。', '2018-12-11 00:08:00', 1300, '啟用中'),
(16, 'BSI0016@u04.com', 'BSI0016PS', 'bs16.jpg', '特力屋', '零售/百貨', '20470353', 'https://www.trplus.com.tw/', '「特力屋」經營超過20年，未來的發展願景，將會針對商品、陳列、服務、系統、流程等多方面進行整合，提升服務質感，並提出四大核心價值：健康、安全、舒適、環保，藉由賣場中更多的商品互動體驗、說明與展示、現場人員專業知識與服務，希望每一位顧客都能輕鬆找到居家裝修、DIY修繕與居家生活機能的完整解決方案，持續提升生活品質，進一步發現更多的創意生活靈感，豐富生活樂趣。除', '2018-12-02 08:00:00', 800, '啟用中'),
(17, 'BSI0017@u04.com', 'BSI0017PS', 'bs17.jpg', '味丹', '服務/餐飲', '3281972', 'http://www.vedan.com.tw/', '味丹企業股份有限公司，是一家臺灣的食品公司，總部位於臺中市沙鹿區，並於中國大陸以及越南等地投資設廠。創業初期以生產麩胺酸鈉為主力產品，目前為世界三大味精廠商之一；除味精外，該企業於1973年後陸續投入速食麵、飲料、綠藻等領域，近來更延伸至養生、保健、保養等方面。此外，味丹為百事公司在臺灣第二代總代理。', '2018-12-17 00:01:00', 1000, '啟用中'),
(18, 'BSI0018@u04.com', 'BSI0018PS', 'bs18.jpg', '我的美麗日記', '美妝/時尚', '20415244', 'https://www.beautydiary.com.tw/', '我的美麗日記面膜實驗室從精華液基底出發，設計出極緻完美的極潤精華液，柔滑水潤配方，獨特植物發酵乳化科技，質地柔潤無負擔，易滲透吸收潤澤肌膚，滿足肌膚高修護的滋潤感。', '2018-12-03 08:00:00', 4000, '啟用中'),
(19, 'BSI0019@u04.com', 'BSI0019PS', 'bs19.jpg', '三陽機車', '科技/製造', '22965551', 'http://www.sym.com.tw/', '台灣第一家橫跨機、汽車製造的國際化企業，六十年來，累積了廣大的顧客、行銷通路、管理人才及國際關係等重要資源，奠定未來發展的基礎。面對全球化經營的挑戰，我們以「卓越創新、貢獻社會、深耕台灣、佈局全球」作為企業的發展藍圖；在機車事業上，不斷的研發創新、生產顧客滿意的產品，並持續建立海外生產營運基地，發展「台灣接單、多地生產、全球銷售」的分工模式，矢志使SYM成為國際知名品牌。此外，三陽更要以「優質與先進引擎」及「整車調和設計與發展」 的核心能力，快速發展相關 的動力製品， 創造公司利基及多元化的商品。', '2018-12-18 00:05:00', 100, '啟用中'),
(20, 'BSI0020@u04.com', 'BSI0020PS', 'bs20.jpg', '羅技', '科技/製造', '3255962', 'https://www.logitech.com/zh-tw', '羅技電子是一家著重創新與品質的瑞士公司，其個人週邊產品的設計為消費者提供絕佳的數位體驗。我們從 1981 年開始研發當時所沒有的滑鼠，讓使用者可以用更直覺的方式與個人電腦互動。羅技為了因應日新月異的個人電腦與筆記型電腦科技，重新研發了數十種滑鼠來滿足使用者的需求，如今我們已是全球電腦滑鼠的領導品牌。', '2018-12-16 00:08:00', 100, '啟用中'),
(21, 'BSI0021@u04.com', 'BSI0021PS', 'bs21.jpg', '康是美', '美妝/時尚', '20173236', 'https://www.cosmed.com.tw/', '康是美創立於民國84年，由國內第一大連鎖通路「統一超商」百分之百投資設立，主要從事藥妝百貨零售，截至2018年9月已有400家分店在台灣、澎湖、金門各地為大眾服務。\r\n康是美擁有優秀的經營團隊，秉持『誠信、創新、團結』的價值觀，追求企業永續經營及成長，整體營運穩定，獲利狀況也逐年提昇。', '2018-12-03 08:00:00', 200, '停權'),
(22, 'BSI0022@u04.com', 'BSI0022PS', 'bs22.jpg', '台中市政府', '旅遊/娛樂', '3288483', 'https://www.taichung.gov.tw/', '臺中市政府是中華民國臺中市地方自治事項的最高行政機關，在中華民國政府架構中為直轄市自治的行政機關，並同時負責執行中央機關委辦事項，臺中市的自治監督機關為行政院。臺中市政府共設有29個所屬一級機關、28個區公所、175個所屬二級機關、307所各級學校、22所幼兒園。此外，臺中市政府還經營2個市營事業機構。', '2018-12-12 00:08:00', 1300, '啟用中'),
(23, 'BSI0023@u04.com', 'BSI0023PS', 'bs23.jpg', '中國信託', '其他', '20130653', 'https://www.ctbcbank.com/', '中國信託商業銀行，簡稱中國信託、中信銀行、中信商銀、CTBC，是中華民國的商業銀行之一，於1966年由辜振甫所創立，目前為中國信託金融控股公司的全資擁有子公司。在臺灣共有150家分行，於美國、加拿大、日本、印尼、菲律賓、印度、泰國、越南、馬來西亞、香港、新加坡、中國大陸、緬甸及澳洲設有海外分支機構，合計達107處。', '2018-12-18 00:05:00', 2500, '啟用中'),
(24, 'BSI0024@u04.com', 'BSI0024PS', 'bs24.jpg', '技嘉', '科技/製造', '20480968', 'https://www.gigabyte.com/tw/', '技嘉致力於創新科技，提供消費者個人電腦的極致體驗，也專為企業應用推出全方位的伺服器產品，提供最佳化的商業解決方案，持續推動產業革新。', '2018-12-01 08:00:00', 800, '啟用中'),
(25, 'BSI0025@u04.com', 'BSI0025PS', 'bs25.jpg', '小三美日', '美妝/時尚', '3282608', 'https://s3.com.tw/', '最新美日韓平民美妝保養品牌盡在小三美日，提供多樣化、無限制的選擇！24小時開店，以批發價販售，保證正品。', '2018-12-13 00:08:00', 1300, '啟用中'),
(26, 'BSI0026@u04.com', 'BSI0026PS', 'bs26.jpg', 'U2電影院', '旅遊/娛樂', '80315552', 'http://www.u2mtv.com/', '1986 U2電影館成立，在繁華的西門商圈屹立，接連多家分館的成立， 奠定U2業界的佳績，不斷求新求變與努力 ，影音設備升級再升級，憑著特有的堅持與毅力，打造優質場所供大家來休憩。', '2018-12-18 00:01:00', 1700, '啟用中'),
(27, 'BSI0027@u04.com', 'BSI0027PS', 'bs27.jpg', '清心福全', '餐飲', '26611197', 'http://www.chingshin.tw/', '清心福全股份有限公司 是一家起源於台灣台南市的連鎖式冷熱飲專賣店，透過特許加盟由公司名稱為川億通事業有限公司，透過特許加盟的方式經營，目前台灣外島地區澎湖、馬祖、蘭嶼無分店之外，台灣本島各地區均有分店。', '2018-12-08 08:00:00', 1300, '啟用中'),
(28, 'BSI0028@u04.com', 'BSI0028PS', 'bs28.jpg', '全家便利商店', '零售/百貨', '24118265', 'http://www.family.com.tw', 'FamilyMart是一家日本國際連鎖便利商店集團，在台灣、中國大陸、泰國、越南、菲律賓、印尼、馬來西亞也設有連鎖店。 主要銷售日本便利店常見貨品，包括飲料、零食、便當、雜誌及漫畫等。日本', '2018-12-11 08:00:00', 800, '啟用中');

-- --------------------------------------------------------

--
-- 資料表結構 `bs_case`
--

CREATE TABLE `bs_case` (
  `BScase_sid` int(11) NOT NULL,
  `BScase_name` varchar(255) NOT NULL,
  `BScase_photo` varchar(255) DEFAULT NULL,
  `BScase_ask_people` int(255) DEFAULT NULL,
  `BScase_pay` varchar(255) DEFAULT NULL,
  `BScase_location` varchar(255) DEFAULT NULL,
  `BScase_time_limit` date DEFAULT NULL,
  `BScase_fans` varchar(255) DEFAULT NULL,
  `BScase_active` varchar(255) DEFAULT NULL,
  `BScase_info` varchar(255) DEFAULT NULL,
  `BScase_publish_at` datetime DEFAULT NULL,
  `industry_name` varchar(255) DEFAULT NULL,
  `BS_sid` int(255) DEFAULT NULL,
  `BS_state` int(11) NOT NULL DEFAULT '1',
  `hire_num` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `bs_case`
--

INSERT INTO `bs_case` (`BScase_sid`, `BScase_name`, `BScase_photo`, `BScase_ask_people`, `BScase_pay`, `BScase_location`, `BScase_time_limit`, `BScase_fans`, `BScase_active`, `BScase_info`, `BScase_publish_at`, `industry_name`, `BS_sid`, `BS_state`, `hire_num`) VALUES
(1, '【新楓之谷】加入英雄行列，挺身決戰黑暗！', 'bsc01.jpg', 3, '120000', '台北市', '2019-03-11', '500~1000', '2', '在充滿驚奇的數位世界裡，Gamania總是吸引玩家目光。結合營運、平台與策略聯盟夥伴共同開發，完整佈局遊戲王國。玩家涵蓋中日韓。結合全新概念開發beanfun! 數位娛樂平台，打造耳目一新的遊戲體驗，豐富的遊戲類型 滿足玩家需求', '2019-01-10 00:00:00', '3', 1, 1, 0),
(2, 'Zenfone Max 全螢幕電力怪獸', 'bsc02.jpg', 4, '30000', '新加坡', '2019-04-25', '100~500', '2', '華碩電腦股份有限公司是一家總部設於台灣臺北市北投區的跨國硬體及電子元件公司。華碩其產品包括家用與商務用桌上型電腦、筆記型電腦、行動電話、網路裝置、顯示器、投影機、主機板、顯示卡、光儲存、多媒體產品、外圍裝置、可穿戴裝置、伺服器、工作站和平板電腦。該公司也是一家OEM製造商。 ', '2019-02-24 00:00:00', '4', 2, 1, 0),
(3, '世界巧克力大賞 全聯價 85 折起', 'bsc03.jpg', 1, '15000', '香港', '2019-03-06', '500~1000', '2', '全聯實業股份有限公司，簡稱全聯，其下全聯福利中心是臺灣的主要零售通路之一，為目前臺灣店數最多的超級市場，成立於1998年10月。', '2019-01-05 00:00:00', '2', 3, 1, 0),
(4, '跨年瘋搶 買滿十件免運費', 'bsc04.jpg', 2, '10000', '台中市', '2019-04-15', '100~500', '5', '蝦皮購物是一個電子商務平台，總部設在新加坡，隸屬於Sea Group，該公司於2009年由李小冬創立。蝦皮購物於2015年首次在新加坡推出，目前已擴展到馬來西亞、泰國、印度尼西亞、越南和菲律賓、臺灣。蝦皮購物為全世界華人地區用戶的線上購物和銷售商品提供服務。', '2019-02-14 00:00:00', '2', 4, 1, 0),
(5, '永鼎富世居 兩千萬萬起換4房', 'bsc05.jpg', 2, '35000', '新北市', '2019-03-07', '1000~2000', '2', '蝦皮購物是一個電子商務平台，總部設在新加坡，隸屬於Sea Group，該公司於2009年由李小冬創立。蝦皮購物於2015年首次在新加坡推出，目前已擴展到馬來西亞、泰國、印度尼西亞、越南和菲律賓、臺灣。蝦皮購物為全世界華人地區用戶的線上購物和銷售商品提供服務。', '2019-01-06 00:00:00', '10', 5, 1, 0),
(6, 'U6 GT 新智駕SUV', 'bsc06.jpg', 4, '260000', '台北市', '2019-02-27', '500~1', '2', '納智捷汽車股份有限公司，簡稱納智捷汽車或納智捷，為中華民國的汽車品牌，是裕隆汽車於2008年5月轉投資成立的全資子公司，亦為裕隆汽車於臺灣時間2009年1月6日下午正式發表的自有品牌。', '2018-12-29 00:00:00', '4', 6, 1, 0),
(7, '2019 原創基地節', 'bsc07.jpg', 1, '36000', '桃園市', '2019-03-08', '10~50', '3', '松山文創園區，不只是在信義商圈中提供了一個新的活動展演空間，也是提供了一個讓民眾可以放鬆舒壓、體驗慢活的好場所！', '2019-01-07 00:00:00', '9', 16, 1, 0),
(8, '微風台北車站 耶誕童話節', 'bsc08.jpg', 5, '8000', '台中市', '2019-03-30', '10~50', '4', '微風廣場官方網站，創造一場時尚新覺醒！ 打破既有百貨公司的網站形式，微風以更豐富、多元的素材，以及更符合需求的分類設計，讓對流行時尚、生活娛樂充滿興趣。', '2019-01-29 00:00:00', '6', 8, 1, 0),
(9, 'OPPO AX7 Pro', 'bsc09.jpg', 3, '15000', '台中市', '2019-03-05', '1000~2000', '2', 'OPPO，是中國大陸電子裝置及智慧型終端製造公司，總部位於廣東省東莞市，成立初期以生產MP3、MP4、DVD等影音播放裝置為主，後進軍手機市場，推出以快速充電及影像處理為主要賣點的拍照智慧型手機。', '2019-01-04 00:00:00', '4', 9, 1, 0),
(10, '任天堂明星大亂鬥', 'bsc10.jpg', 1, '75000', '新北市', '2019-01-17', '500~1000', '2', '主要從事電子遊戲和玩具的開發、製造與發行的日本公司。於1889年在日本京都創立，至今公司總部仍設於京都。任天堂最初以生產花札起家，1970年代後期投入電子遊戲產業，在1983年推出家用遊戲機Family Computer、以及1985年推出遊戲軟體《超級瑪利歐兄弟》後，逐漸成為世界知名電子遊戲開發商。', '2018-11-18 00:00:00', '3', 10, 1, 0),
(11, 'Python程式資料分析班', 'bsc11.jpg', 2, '220000', '新竹市', '2019-01-16', '100~500', '4', '聯成電腦是臺灣電腦教育訓練公司之一，於西元1991年成立。經營各國際軟體認證考試，與巨匠電腦、學承電腦、赫綵設計學院為台灣主要4大電腦教學業者之一，在台灣有27家訓練中心。提供相關資訊及設計訓練課程包含多媒體視覺創意、工業建築設計、網管程式設計以及職場電腦技能等。2018年成立子公司聯成外語。', '2018-11-17 00:00:00', '8', 11, 1, 0),
(12, '年終限定 雙星饗宴 明太子海陸雙星堡', 'bsc12.jpg', 5, '200000', '桃園市', '2019-02-28', '50~100', '5', '麥當勞是源自美國南加州的跨國連鎖快餐店，也是全球最大的快餐連鎖店，主要販售漢堡包及薯條、炸雞、碳酸飲料、冰品、沙拉、水果、美式热咖啡等快餐食品，目前總部位於美國芝加哥近郊的橡樹溪鎮。', '2018-12-30 00:00:00', '5', 12, 1, 0),
(13, 'GQ 年度時尚特展', 'bsc13.jpg', 1, '158000', '中國上海', '2019-01-18', '500~1000', '2', '男性時尚生活類網站，宣導有型有款的時尚消費理念，為型男穿衣搭配提供權威指導，引領趣味與人文情懷兼具的男人生活方式，分享性感女人的私密話題。', '2018-11-19 00:00:00', '9', 13, 1, 0),
(14, '星夢郵輪 世界夢號【香港假期】', 'bsc14.jpg', 5, '110000', '桃園市', '2019-02-20', '50~100', '4', '全方位旅行社服務，包含國外旅遊、國內旅遊、機票查詢訂購、飯店住宿、自由行、票券、郵輪、高鐵假期、證照等，遍布全球的雄獅旅遊門市，旅人評價最愛的首選。', '2018-12-22 00:00:00', '6', 14, 1, 0),
(15, 'NEW RAZER BLADE 15', 'bsc15.jpg', 2, '78000', '香港', '2019-01-09', '1000~2000', '3', '雷蛇是一家在新加坡創立的遊戲周邊裝置公司，又被稱為「燈廠」，近年開始進軍電子消費業務。雷蛇的兩個總部分別設立在新加坡及美國聖地牙哥。2017年11月在香港港交所上市，產品面向遊戲玩家，其產品大多數都以肉食動物命名。2018年推出電子錢包Razer Pay。', '2018-11-10 00:00:00', '4', 15, 1, 0),
(16, '質感家具 12/12 起全台門市大特惠', 'bsc16.jpg', 3, '12000', '桃園市', '2019-02-19', '500~1000', '2', '「特力屋」經營超過20年，未來的發展願景，將會針對商品、陳列、服務、系統、流程等多方面進行整合，提升服務質感，並提出四大核心價值：健康、安全、舒適、環保，藉由賣場中更多的商品互動體驗、說明與展示、現場人員專業知識與服務，希望每一位顧客都能輕鬆找到居家裝修、DIY修繕與居家生活機能的完整解決方案，持續提升生活品質，進一步發現更多的創意生活靈感，豐富生活樂趣。除', '2018-12-21 00:00:00', '2', 16, 1, 0),
(17, '味味A 排骨雞麵', 'bsc17.jpg', 2, '8500', '台北市', '2019-01-11', '1000~2000', '2', '味丹企業股份有限公司，是一家臺灣的食品公司，總部位於臺中市沙鹿區，並於中國大陸以及越南等地投資設廠。創業初期以生產麩胺酸鈉為主力產品，目前為世界三大味精廠商之一；除味精外，該企業於1973年後陸續投入速食麵、飲料、綠藻等領域，近來更延伸至養生、保健、保養等方面。此外，味丹為百事公司在臺灣第二代總代理。', '2018-11-12 00:00:00', '5', 17, 1, 0),
(18, '細緻光 O2 活氧膜面膜', 'bsc18.jpg', 1, '14000', '新北市', '2019-01-12', '500~1000', '2', '我的美麗日記面膜實驗室從精華液基底出發，設計出極緻完美的極潤精華液，柔滑水潤配方，獨特植物發酵乳化科技，質地柔潤無負擔，易滲透吸收潤澤肌膚，滿足肌膚高修護的滋潤感。', '2018-11-13 00:00:00', '7', 18, 1, 0),
(19, 'RV80 EURO', 'bsc19.jpg', 2, '15000', '台北市', '2019-01-13', '100~500', '3', '台灣第一家橫跨機、汽車製造的國際化企業，六十年來，累積了廣大的顧客、行銷通路、管理人才及國際關係等重要資源，奠定未來發展的基礎。面對全球化經營的挑戰，我們以「卓越創新、貢獻社會、深耕台灣、佈局全球」作為企業的發展藍圖；在機車事業上，不斷的研發創新、生產顧客滿意的產品，並持續建立海外生產營運基地，發展「台灣接單、多地生產、全球銷售」的分工模式，矢志使SYM成為國際知名品牌。此外，三陽更要以「優質與先進引擎」及「整車調和設計與發展」 的核心能力，快速發展相關 的動力製品， 創造公司利基及多元化的商品。', '2018-11-14 00:00:00', '4', 19, 1, 0),
(20, 'SLIM COMBO', 'bsc20.jpg', 5, '8900', '新竹市', '2019-02-09', '500~1000', '5', '羅技電子是一家著重創新與品質的瑞士公司，其個人週邊產品的設計為消費者提供絕佳的數位體驗。我們從 1981 年開始研發當時所沒有的滑鼠，讓使用者可以用更直覺的方式與個人電腦互動。羅技為了因應日新月異的個人電腦與筆記型電腦科技，重新研發了數十種滑鼠來滿足使用者的需求，如今我們已是全球電腦滑鼠的領導品牌。', '2018-12-11 00:00:00', '4', 20, 1, 0),
(21, 'KATE TOKYO 深玫絲絨眼影盒', 'bsc21.jpg', 8, '80000', '台中市', '2019-03-06', '100~500', '4', '康是美創立於民國84年，由國內第一大連鎖通路「統一超商」百分之百投資設立，主要從事藥妝百貨零售，截至2018年9月已有400家分店在台灣、澎湖、金門各地為大眾服務。康是美擁有優秀的經營團隊，秉持『誠信、創新、團結』的價值觀，追求企業永續經營及成長，整體營運穩定，獲利狀況也逐年提昇。', '2019-01-05 00:00:00', '7', 21, 1, 0),
(22, '2019 臺中世界花卉博覽會', 'bsc22.jpg', 5, '12000', '台中市', '2019-01-15', '1000~2000', '2', '臺中市政府是中華民國臺中市地方自治事項的最高行政機關，在中華民國政府架構中為直轄市自治的行政機關，並同時負責執行中央機關委辦事項，臺中市的自治監督機關為行政院。臺中市政府共設有29個所屬一級機關、28個區公所、175個所屬二級機關、307所各級學校、22所幼兒園。此外，臺中市政府還經營2個市營事業機構。', '2018-11-16 00:00:00', '6', 22, 1, 0),
(23, '跨行交易 筆筆贈點 每滿 10 筆贈 10 點', 'bsc23.jpg', 8, '14000', '新竹市', '2019-02-12', '10~50', '3', '中國信託商業銀行，簡稱中國信託、中信銀行、中信商銀、CTBC，是中華民國的商業銀行之一，於1966年由辜振甫所創立，目前為中國信託金融控股公司的全資擁有子公司。在臺灣共有150家分行，於美國、加拿大、日本、印尼、菲律賓、印度、泰國、越南、馬來西亞、香港、新加坡、中國大陸、緬甸及澳洲設有海外分支機構，合計達107處。', '2018-12-14 00:00:00', '10', 23, 1, 0),
(24, '2019 AORUS 電競主機板 ', 'bsc24.jpg', 1, '75000', '新加坡', '2019-02-14', '500~1', '5', '技嘉致力於創新科技，提供消費者個人電腦的極致體驗，也專為企業應用推出全方位的伺服器產品，提供最佳化的商業解決方案，持續推動產業革新。', '2018-12-16 00:00:00', '4', 24, 1, 0),
(25, 'Silver Rose 水感瞬白素顏霜', 'bsc25.jpg', 2, '75000', '台北市', '2019-01-10', '10~50', '3', '最新美日韓平民美妝保養品牌盡在小三美日，提供多樣化、無限制的選擇！24小時開店，以批發價販售，保證正品。', '2018-11-11 00:00:00', '7', 25, 1, 0),
(26, 'U2 APP 快速通關 線上選片 馬上訂位', 'bsc26.jpg', 1, '240000', '中國上海', '2019-05-09', '1000~2000', '2', '1986 U2電影館成立，在繁華的西門商圈屹立，接連多家分館的成立， 奠定U2業界的佳績，不斷求新求變與努力 ，影音設備升級再升級，憑著特有的堅持與毅力，打造優質場所供大家來休憩。', '2019-03-10 00:00:00', '6', 26, 1, 0),
(27, '冷熱皆宜 芝麻綠豆小事 飲品新上市', 'bsc27.jpg', 10, '350000', '台中市', '2019-03-29', '500~1000', '3', '清心福全股份有限公司 是一家起源於台灣台南市的連鎖式冷熱飲專賣店，透過特許加盟由公司名稱為川億通事業有限公司，透過特許加盟的方式經營，目前台灣外島地區澎湖、馬祖、蘭嶼無分店之外，台灣本島各地區均有分店。', '2019-01-28 00:00:00', '5', 27, 1, 0),
(28, '唐寧醇奶茶 英倫午茶時光', 'bsc28.jpg', 5, '20000', '台北市', '2019-03-31', '100~500', '3', 'FamilyMart是一家日本國際連鎖便利商店集團，在台灣、中國大陸、泰國、越南、菲律賓、印尼、馬來西亞也設有連鎖店。 主要銷售日本便利店常見貨品，包括飲料、零食、便當、雜誌及漫畫等。日本', '2019-01-30 00:00:00', '2', 28, 1, 0),
(29, '天堂M 國際服 全面開戰', 'bsc29.jpg', 12, '360000', '台北市', '2019-05-09', '500~1000', '2', '在充滿驚奇的數位世界裡，Gamania總是吸引玩家目光。結合營運、平台與策略聯盟夥伴共同開發，完整佈局遊戲王國。玩家涵蓋中日韓。結合全新概念開發beanfun! 數位娛樂平台，打造耳目一新的遊戲體驗，豐富的遊戲類型 滿足玩家需求', '2019-01-30 00:00:00', '3', 1, 1, 0),
(30, '跑跑車神 全國校園排行爭霸戰', 'bsc30.jpg', 2, '40000', '台北市', '2019-05-22', '100~500', '2', '在充滿驚奇的數位世界裡，Gamania總是吸引玩家目光。結合營運、平台與策略聯盟夥伴共同開發，完整佈局遊戲王國。玩家涵蓋中日韓。結合全新概念開發beanfun! 數位娛樂平台，打造耳目一新的遊戲體驗，豐富的遊戲類型 滿足玩家需求', '2019-01-30 00:00:00', '3', 1, 1, 0),
(31, '華碩電競手機 ROG Phone', 'bsc31.jpg', 1, '4000', '台北市', '2018-12-28', '1000~2000', '2', '', '2018-12-17 07:34:11', '4', 2, 1, 0),
(32, '電競風扇', 'bsc32.jpg', 3, '5000', '台北市', '2019-01-15', '500~1000', '2', NULL, '2018-12-17 02:00:00', '4', 2, 1, 0),
(33, '華碩電競耳機', 'bsc33.jpg', 2, '20000', '台北市', '2018-12-28', '100~500', '2', NULL, '2018-12-17 05:12:00', '4', 2, 1, 0),
(34, '華碩電競吸盤扭', 'bsc34.jpg', 2, '60000', '新北市', '2018-12-27', '240000', '2', NULL, '2018-12-17 06:00:00', '4', 2, 1, 0),
(35, '華碩電競手機把手', 'bsc35.jpg', 2, '360000', '台中市', '2018-12-29', '1000~2000', '2', NULL, '2018-12-17 09:21:00', '4', 2, 1, 0),
(36, '技嘉電競椅子', 'bsc36.jpg', 1, '60000', '新北市', '2018-12-31', '100~500', '2', NULL, '2018-12-17 09:00:00', '4', 24, 1, 0),
(37, 'Razer Led炫光電競滑鼠', 'bsc37.jpg', 1, '3000', '台北市', '2019-01-30', '10~50', '2', NULL, '2018-12-17 20:33:44', '4', 15, 1, 0);

-- --------------------------------------------------------

--
-- 資料表結構 `bs_case_detail`
--

CREATE TABLE `bs_case_detail` (
  `sid` int(11) NOT NULL,
  `BScase_sid` varchar(200) NOT NULL,
  `ICmember_sid` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `bs_case_detail`
--

INSERT INTO `bs_case_detail` (`sid`, `BScase_sid`, `ICmember_sid`) VALUES
(5, '1', '42');

-- --------------------------------------------------------

--
-- 資料表結構 `bs_favor`
--

CREATE TABLE `bs_favor` (
  `BF_sid` int(100) NOT NULL,
  `BS_sid` varchar(100) DEFAULT NULL,
  `IC_sid` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `bs_favor`
--

INSERT INTO `bs_favor` (`BF_sid`, `BS_sid`, `IC_sid`) VALUES
(24, '5', '4'),
(26, '5', '6'),
(28, '5', '3'),
(33, '2', '6'),
(34, '2', '4'),
(36, '2', '5'),
(37, NULL, '3'),
(38, '3', '1'),
(39, '1', '3'),
(40, '1', '4'),
(43, '20', '47'),
(46, '5', '54'),
(51, '1', '48'),
(52, '1', '50'),
(53, '1', '57'),
(54, '1', '52'),
(55, '3', '20'),
(56, '3', '29'),
(57, '3', '35'),
(58, '3', '43'),
(60, '1', '11'),
(61, '31', '18'),
(63, '31', '11'),
(64, '31', '3'),
(65, '32', '2'),
(66, '32', '6'),
(67, '32', '8'),
(68, '32', '15'),
(69, '32', '12'),
(70, '32', '10'),
(71, '31', '1'),
(72, '31', '9'),
(73, '31', '16'),
(74, '31', '36'),
(75, '31', '28'),
(76, '31', '26'),
(77, '34', '2'),
(78, '34', '6'),
(79, '34', '8'),
(80, '34', '15'),
(81, '34', '10'),
(82, '34', '12'),
(83, '35', '3'),
(84, '35', '11'),
(85, '36', '1'),
(86, '36', '9'),
(87, '36', '16'),
(88, '36', '41'),
(89, '36', '38'),
(90, '37', '1'),
(91, '37', '7'),
(92, '37', '16'),
(93, '37', '37');

-- --------------------------------------------------------

--
-- 資料表結構 `bs_order`
--

CREATE TABLE `bs_order` (
  `BO_sid` int(11) NOT NULL,
  `BS_email` varchar(255) NOT NULL,
  `BO_amount` int(255) NOT NULL,
  `BO_point` int(255) NOT NULL,
  `BO_date` datetime NOT NULL,
  `BO_method` varchar(255) NOT NULL,
  `BO_re_name` varchar(255) NOT NULL,
  `BO_re_email` varchar(255) NOT NULL,
  `BO_receipt` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `bs_order`
--

INSERT INTO `bs_order` (`BO_sid`, `BS_email`, `BO_amount`, `BO_point`, `BO_date`, `BO_method`, `BO_re_name`, `BO_re_email`, `BO_receipt`) VALUES
(1, '', 300, 1500, '2018-11-27 16:54:30', 'Credit', '王大明', 'aaa@hotmail.com', 'donation_receipt'),
(2, '', 500, 3000, '2018-11-27 17:04:29', 'ATM', '王大明', 'aaa@hotmail.com', 'edit_receipt'),
(3, '', 750, 5000, '2018-11-27 17:09:37', 'Credit', '王大明', 'aaa@hotmail.com', 'phone_barcode'),
(4, '', 300, 1500, '2018-11-27 17:11:29', 'Credit', '王大明', 'aaa@hotmail.com', 'donation_receipt'),
(5, 'BSI0001@u04.com', 300, 1500, '2018-11-27 17:18:15', 'Credit', '王大明', 'aaa@hotmail.com', 'by_you04'),
(6, '', 500, 3000, '2018-11-27 17:32:12', 'Credit', '王大明', 'aaa@hotmail.com', 'donation_receipt'),
(7, '', 750, 5000, '2018-11-27 17:41:53', 'Credit', '王大明', 'aaa@hotmail.com', 'donation_receipt'),
(8, '', 300, 1500, '2018-11-27 17:44:00', 'Credit', '王大明', 'aaa@hotmail.com', 'phone_barcode'),
(9, 'BSI0001@u04.com', 300, 1500, '2018-11-27 17:46:12', 'Credit', '黃小花', 'aaa@hotmail.com', 'edit_receipt'),
(10, 'BSI0001@u04.com', 100, 500, '2018-11-27 17:49:06', 'Credit', '王大明', 'aaa@hotmail.com', 'phone_barcode'),
(11, 'BSI0001@u04.com', 300, 1500, '2018-11-27 17:53:31', 'Credit', '王大明', 'aaa@hotmail.com', 'donation_receipt'),
(12, 'BSI0001@u04.com', 100, 500, '2018-11-27 17:56:49', 'CVS', '王大明', 'aaa@hotmail.com', 'donation_receipt'),
(13, 'BSI0001@u04.com', 750, 5000, '2018-11-28 11:26:27', 'Credit', '王花花', 'aaa@hotmail.com', 'edit_receipt'),
(14, 'BSI0001@u04.com', 500, 3000, '2018-11-28 11:32:34', 'Credit', '王大明', 'aaa@hotmail.com', 'donation_receipt'),
(15, 'BSI0001@u04.com', 300, 1500, '2018-11-28 14:01:39', 'CVS', '王花花', 'aaa@hotmail.com', 'donation_receipt'),
(16, 'BSI0005@u04.com', 100, 500, '2018-11-28 15:42:12', 'Credit', '你好', 'eeee@gmail.com', 'donation_receipt'),
(17, 'BSI0005@u04.com', 300, 1500, '2018-11-28 15:43:52', 'Credit', 'sssss', 'sss@gmail.com', 'by_you04'),
(18, 'BSI0002@u04.com', 100, 500, '2018-11-29 12:28:00', 'ATM', '阿呆', '123@gmail.com', 'donation_receipt'),
(19, 'BSI0002@u04.com', 300, 1500, '2018-11-29 12:34:55', 'CVS', 'wwww', 'wwww@gmail.com', 'by_you04'),
(20, 'BSI0003@u04.com', 750, 5000, '2018-11-29 12:36:03', 'Credit', 'sss', 'ssss@gmail.com', 'by_you04'),
(21, 'BSI0001@u04.com', 300, 1500, '2018-11-29 17:25:05', 'ATM', 'ssss', 'sssss@gmail.com', 'Natural_barcode'),
(22, 'BSI0001@u04.com', 300, 1500, '2018-11-29 17:26:21', 'Credit', 'xxx', 'xxxxx@y04.com', 'by_you04'),
(23, 'BSI0004@u04.com', 100, 500, '2018-12-08 15:05:21', 'Credit', 'sss', 'sss@gmail.com', 'by_you04'),
(24, 'BSI0004@u04.com', 300, 1500, '2018-12-10 15:16:43', 'Credit', '333', '333@gmail.com', 'by_you04');

-- --------------------------------------------------------

--
-- 資料表結構 `bs_talk`
--

CREATE TABLE `bs_talk` (
  `sid` int(11) NOT NULL,
  `talk_sid` int(11) NOT NULL,
  `BS_content` varchar(500) NOT NULL,
  `time` datetime NOT NULL,
  `bs_talk_state` int(100) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `chat`
--

CREATE TABLE `chat` (
  `bssid` int(11) NOT NULL,
  `icsid` int(11) NOT NULL,
  `content` varchar(2000) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `chat`
--

INSERT INTO `chat` (`bssid`, `icsid`, `content`, `time`) VALUES
(1, 2, 'hello', '2018-11-16 09:49:29');

-- --------------------------------------------------------

--
-- 資料表結構 `contact_us`
--

CREATE TABLE `contact_us` (
  `sid` int(11) NOT NULL,
  `cu_name` varchar(100) NOT NULL,
  `cu_usertype` varchar(100) NOT NULL,
  `cu_content` varchar(500) NOT NULL,
  `cu_email` varchar(150) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `cu_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `contact_us`
--

INSERT INTO `contact_us` (`sid`, `cu_name`, `cu_usertype`, `cu_content`, `cu_email`, `status`, `cu_time`) VALUES
(4, '外省林', '廠商', '沒有什麼啦  無聊留個言', 'ttotoooto@gmamail.com', 1, '2018-12-06 22:37:43'),
(5, '測試小冰', '廠商', '我只是測試用的東西', 'test@gkkk.com.tt', 1, '2018-12-06 22:38:46'),
(6, '測試小網紅', '網紅', '測試用  不給差', 'teesssst@00fdkdk.com', 1, '2018-12-06 22:38:46'),
(7, '林老師的問題', '網紅', '我只是來留言冊數據', 'jhkjhk@gmak.colmm', 1, '2018-12-07 13:56:21'),
(8, '網紅007', '網紅', '廠商浩折價格不實', 'aaa@gmail.com', 1, '2018-12-17 17:46:07'),
(9, '訪客007', '', '廠商價格不實', 'aaa@gmail.com', 1, '2018-12-17 18:48:39'),
(10, '訪客007', '', '廠商價格不實', 'aaa@gmail.com', 1, '2018-12-17 19:23:50');

-- --------------------------------------------------------

--
-- 資料表結構 `icmember`
--

CREATE TABLE `icmember` (
  `IC_sid` int(11) NOT NULL,
  `IC_email` varchar(255) NOT NULL,
  `IC_password` varchar(255) NOT NULL,
  `IC_photo` varchar(255) DEFAULT NULL,
  `IC_name` varchar(255) DEFAULT NULL,
  `IC_gender` varchar(255) DEFAULT NULL,
  `IC_media` varchar(255) DEFAULT NULL,
  `IC_price` int(255) DEFAULT NULL,
  `IC_case` varchar(255) DEFAULT NULL,
  `IC_yt` varchar(255) DEFAULT NULL,
  `IC_ytfans` varchar(255) DEFAULT NULL,
  `IC_fb` varchar(255) DEFAULT NULL,
  `IC_fbfans` varchar(255) DEFAULT NULL,
  `IC_ig` varchar(255) DEFAULT NULL,
  `IC_igfans` varchar(255) DEFAULT NULL,
  `IC_web` varchar(255) DEFAULT NULL,
  `IC_create_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `icmember`
--

INSERT INTO `icmember` (`IC_sid`, `IC_email`, `IC_password`, `IC_photo`, `IC_name`, `IC_gender`, `IC_media`, `IC_price`, `IC_case`, `IC_yt`, `IC_ytfans`, `IC_fb`, `IC_fbfans`, `IC_ig`, `IC_igfans`, `IC_web`, `IC_create_at`) VALUES
(1, 'ICI0001@u04.com', 'ICI0001PS', 'ic01.jpg', '阿杰實況', '男', 'YouTube', 1, '50~100', 'https://www.youtube.com/channel/UCjzelMo2UzgQKXdxyPD15Gg', '500~1,000', 'https://www.facebook.com/jayplaygame/', '10~50', '', '', '', '2018-12-13 20:25:10'),
(2, 'ICI0002@u04.com', 'ICI0002PS', 'ic02.jpg', '阿心Liao', '女', 'Facebook', 3, '100~200', 'https://www.youtube.com/channel/UCscRCnRkxjTfaJSqNOH7YBQ', '100~500', 'https://www.facebook.com/hsinliao12345/', '10~50', 'https://www.instagram.com/jui0121', '100~500', '', '2018-12-07 08:00:00'),
(3, 'ICI0003@u04.com', 'ICI0003PS', 'ic03.jpg', '鬼鬼', '女', 'Instgram', 5, '100~200', 'https://www.youtube.com/channel/UC7SHHIlKiJs_-ORerKPL1kA', '500~1,000', 'https://www.facebook.com/RelaxOnityan/', '100~500', '', '', '', '2018-12-02 08:00:00'),
(4, 'ICI0004@u04.com', 'ICI0004PS', 'ic04.jpg', '萊斯Lice', '女', 'YouTube', 10, '300~500', 'https://www.youtube.com/channel/UC9WiXJEyHMGRqL-__3FIBEw', '100~500', 'https://www.facebook.com/Lice0424/', '10~50', '', '', '', '2018-12-18 00:10:00'),
(5, 'ICI0005@u04.com', 'ICI0005PS', 'ic05.jpg', '木曜4超玩', '團體', 'YouTube', 300, '200~300', 'https://www.youtube.com/channel/UCLW_SzI9txZvtOFTPDswxqg', '1,000~2,000', 'https://www.facebook.com/Muyao4/', '100~500', '', '', '', '2018-12-19 00:10:00'),
(6, 'ICI0006@u04.com', 'ICI0006PS', 'ic06.jpg', '諾斯Nox', '男', 'Facebook', 50, '100~200', 'https://www.youtube.com/channel/UCM_edhbKF1tGaDnkKC--yLA', '10~50', 'https://www.facebook.com/Hypnox9980922/', '1~5', '', '', '', '2018-12-07 08:00:00'),
(7, 'ICI0007@u04.com', 'ICI0007PS', 'ic07.jpg', '千千進食中', '女', 'YouTube', 100, '50~100', 'https://www.youtube.com/channel/UC9i2Qgd5lizhVgJrdnxunKw', '500~1', 'https://www.facebook.com/Chienseating/', '100~500', 'https://www.instagram.com/khshu_/', '100~500', '', '2018-12-17 00:05:00'),
(8, 'ICI0008@u04.com', 'ICI0008PS', 'ic08.jpg', '球球Lilballz', '男', 'Facebook', 300, '50~100', 'https://www.youtube.com/channel/UCqN5R22XDqgE9Z6V91TzynQ', '10~50', 'https://www.facebook.com/lilballzLoL/', '100~500', '', '', '', '2018-12-07 08:00:00'),
(9, 'ICI0009@u04.com', 'ICI0009PS', 'ic09.jpg', '聖結石', '男', 'YouTube', 1, '20~50', 'https://www.youtube.com/channel/UCIdhd_1spj49unBWx1fjS2A', '1,000~2,000', 'https://www.facebook.com/ShenJieShiSaint/', '500~1000', 'https://www.instagram.com/qoop1113', '100~500', '', '2018-12-02 08:00:00'),
(10, 'ICI0010@u04.com', 'ICI0010PS', 'ic10.jpg', '孫安佐', '男', 'Facebook', 3, '1~20', '', '', 'https://www.facebook.com/profile.php?id=100005600172890', '1~5', '', '', '', '2018-12-09 08:00:00'),
(11, 'ICI0011@u04.com', 'ICI0011PS', 'ic11.jpg', '星培', '男', 'Instgram', 5, '50~100', 'https://www.youtube.com/channel/UCRevYqA7N-NrSCGSm5k-KlA', '500~1,000', 'https://www.facebook.com/KingJasperHu/', '500~1,000', 'https://www.instagram.com/cba024538/', '100~500', '', '2018-12-16 00:01:00'),
(12, 'ICI0012@u04.com', 'ICI0012PS', 'ic12.jpg', '瑀熙Yuci', '女', 'Facebook', 10, '50~100', 'https://www.youtube.com/channel/UCjL1yWauBeI6WoQNVLyxwqQ', '100~500', 'https://www.facebook.com/yuci7001/', '100~500', 'https://www.instagram.com/uccu0323/', '100~500', '', '2018-12-07 08:00:00'),
(13, 'ICI0013@u04.com', 'ICI0013PS', 'ic13.jpg', 'Aries艾瑞絲', '女', 'Instgram', 30, '1~20', 'https://www.youtube.com/channel/UC3rrCl8CcCFDCI9Ti2rHsnw', '50~100', 'https://www.facebook.com/aries8248/', '100~500', 'https://www.instagram.com/aries_8248/', '100~500', '', '2018-12-16 00:05:00'),
(14, 'ICI0014@u04.com', 'ICI0014PS', 'ic14.jpg', 'Gina hello', '女', 'Blog', 50, '50~100', 'https://www.youtube.com/channel/UCSR9CHNMIg7YoNezbv4bh0A', '500~1,000', 'https://www.facebook.com/Gina.Hello/', '10~50', 'https://www.instagram.com/ginachiki/', '100~500', 'http://www.ginahello.com/', '2018-12-11 00:08:00'),
(15, 'ICI0015@u04.com', 'ICI0015PS', 'ic15.jpg', 'howhow', '男', 'Facebook', 100, '300~500', 'https://www.youtube.com/channel/UCxUzQ3wu0oJP_8YLWt71WgQ', '50~100', 'https://www.facebook.com/howfunofficial/', '100~500', 'https://www.instagram.com/howhowhasfriends/?hl=zh-tw', '100~500', '', '2018-12-02 08:00:00'),
(16, 'ICI0016@u04.com', 'ICI0016PS', 'ic16.jpg', 'Joeman', '男', 'YouTube', 300, '300~500', 'https://www.youtube.com/channel/UCPRWWKG0VkBA0Pqa4Jr5j0Q', '1,000~2,000', 'https://www.facebook.com/JoemanStation/', '100~500', 'https://www.instagram.com/joemanweng/', '100~500', '', '2018-12-17 00:01:00'),
(17, 'ICI0017@u04.com', 'ICI0017PS', 'ic17.jpg', 'the劉沛', '男', 'Instgram', 1, '100~200', 'https://www.youtube.com/channel/UCK3Ycl9dcHk0qz8yoN-6phA', '500~1,000', 'https://www.facebook.com/PierreLiuPei/', '100~500', 'https://www.instagram.com/pierreliupei/', '100~500', '', '2018-12-03 08:00:00'),
(18, 'ICI0018@u04.com', 'ICI0018PS', 'ic18.jpg', 'WACKYBOYS', '團體', 'Blog', 3, '200~300', 'https://www.youtube.com/channel/UCEfetJrzg6OcXWWuX8uhdhw', '1,000~2,000', 'https://www.facebook.com/Wackyboys.Fans/', '500~1,000', 'https://www.instagram.com/wackyboys520/', '100~500', '', '2018-12-18 00:05:00'),
(19, 'ICI0019@u04.com', 'ICI0019PS', 'ic19.jpg', '張瑋瑋', '女', 'Instgram', 5, '50~100', '', '', 'https://www.facebook.com/vianneFB/', '10~50', 'https://www.instagram.com/vnchang/', '50~100', '', '2018-12-16 00:08:00'),
(20, 'ICI0020@u04.com', 'ICI0020PS', 'ic20.jpg', 'Joyce Wu', '女', 'Blog', 10, '100~200', '', '', 'https://www.facebook.com/joycewu1120/', '100~500', 'https://www.instagram.com/joycewu1120/', '50~100', 'https://joycelohas.com/author/joycewu1120/', '2018-12-03 08:00:00'),
(21, 'ICI0017@u05.com', 'ICI0021PS', 'ic21.jpg', '湯舒雯', '女', 'Facebook', 30, '50~100', '', '', 'https://www.facebook.com/tang.s.wen.7', '10~50', '', '', '', '2018-12-12 00:08:00'),
(22, 'ICI0018@u05.com', 'ICI0022PS', 'ic22.jpg', '陳雪', '女', 'Facebook', 50, '20~50', '', '', 'https://www.facebook.com/profile.php?id=1660030768', '100~500', '', '', '', '2018-12-18 00:05:00'),
(23, 'ICI0019@u05.com', 'ICI0023PS', 'ic23.jpg', '徐展元', '男', 'Facebook', 100, '1~20', '', '', 'https://www.facebook.com/tesl.anchor/', '1~5', '', '', '', '2018-12-01 08:00:00'),
(24, 'ICI0020@u05.com', 'ICI0024PS', 'ic24.jpg', '蔡阿嘎', '男', 'Instgram', 300, '50~100', 'https://www.youtube.com/channel/UCtcaZ5FUqaNXGX6xhpiGPQA', '50~100', 'https://www.facebook.com/WithGaLoveTaiwan/', '100~500', 'https://www.instagram.com/yga0721/', '50~100', '', '2018-12-13 00:08:00'),
(25, 'ICI0017@u06.com', 'ICI0025PS', 'ic25.jpg', '仆街少女', '女', 'Facebook', 30, '50~100', '', '', 'https://www.facebook.com/pkgirls/', '100~500', '', '', '', '2018-12-18 00:01:00'),
(26, 'ICI0018@u06.com', 'ICI0026PS', 'ic26.jpg', '鄧佳華', '男', 'YouTube', 50, '1~20', 'https://www.youtube.com/channel/UCxhWOeqxIX9xgaGeXbC5gSQ', '50~100', 'https://www.facebook.com/profile.php?id=100011920206358', '100~500', '', '', '', '2018-12-08 08:00:00'),
(27, 'ICI0019@u06.com', 'ICI0027PS', 'ic27.jpg', '王世堅', '男', 'Facebook', 100, '50~100', '', '', 'https://www.facebook.com/shihchien888/', '100~500', '', '', '', '2018-12-11 08:00:00'),
(28, 'ICI0020@u06.com', 'ICI0028PS', 'ic28.jpg', '上班不要看', '團體', 'YouTube', 300, '300~500', 'https://www.youtube.com/channel/UCj_z-Zeqk8LfwVxx0MUdL-Q', '100~500', 'https://www.facebook.com/nsfwstudio/', '500~1,000', '', '', '', '2018-12-10 00:08:00'),
(29, 'ICI0017@u07.com', 'ICI0029PS', 'ic29.jpg', '愛蜜。樂芙愛美麗', '女', 'Blog', 1, '300~500', '', '', 'https://www.facebook.com/luv2beauty/', '10~50', '', '', 'http://luv2beauty.com/blog', '2018-12-11 00:08:00'),
(30, 'ICI0018@u07.com', 'ICI0030PS', 'ic30.jpg', '寧寧愛美遊樂園', '女', 'Blog', 3, '50~100', '', '', 'https://www.facebook.com/nikkie860625/', '100~500', '', '', 'http://kk9442001.pixnet.net/blog', '2018-12-16 00:10:00'),
(31, 'ICI0019@u07.com', 'ICI0031PS', 'ic31.jpg', '阿元的及樂世界', '女', 'Blog', 5, '20~50', '', '', 'https://www.facebook.com/yuanx2liang/', '10~50', '', '', 'http://yuanx2liang.pixnet.net/blog', '2018-12-01 08:00:00'),
(32, 'ICI0020@u07.com', 'ICI0032PS', 'ic32.jpg', '77涵', '女', 'Blog', 10, '1~20', '', '', 'https://www.facebook.com/love77han/', '100~500', '', '', 'http://eyes198877.pixnet.net/blog/', '2018-12-14 00:08:00'),
(33, 'ICI0017@u08.com', 'ICI0033PS', 'ic33.jpg', 'Ami 芽芽', '女', 'Blog', 30, '50~100', '', '', 'https://www.facebook.com/gogoami1986', '1~5', '', '', 'http://gogoami.pixnet.net/blog', '2018-12-10 08:00:00'),
(34, 'ICI0018@u08.com', 'ICI0034PS', 'ic34.jpg', 'PHAT G 恬寶', '女', 'Blog', 50, '50~100', '', '', 'https://www.facebook.com/tientien7575', '100~500', '', '', 'http://tientien7575.pixnet.net/blog', '2018-12-01 08:00:00'),
(35, 'ICI0019@u08.com', 'ICI0035PS', 'ic35.jpg', '蘇花猴愛敗家', '女', 'Blog', 100, '1~20', '', '', 'https://www.facebook.com/benshee.su', '100~500', '', '', 'http://benshee1005.pixnet.net/blog', '2018-12-06 08:00:00'),
(36, 'ICI0020@u08.com', 'ICI0036PS', 'ic36.jpg', '伊梓帆', '團體', 'YouTube', 300, '50~100', 'https://www.youtube.com/channel/UCj-DwSCVCo4Tdq9aQ09omvQ', '100~500', 'https://www.facebook.com/Love.Yibi.Chloe.Fan/', '500~1,000', '', '', '', '2018-12-11 08:00:00'),
(37, 'ICI0017@u09.com', 'ICI0037PS', 'ic37.jpg', '白癡公主', '女', 'YouTube', 1, '300~500', 'https://www.youtube.com/user/ATienDai/channels', '50~100', 'http://www.facebook.com/BaiChiGongZhu', '10~50', '', '', '', '2018-12-10 08:00:00'),
(38, 'ICI0018@u09.com', 'ICI0038PS', 'ic38.jpg', '阿滴英文', '團體', 'YouTube', 3, '300~500', '', '', 'https://www.facebook.com/RayDuEnglish', '100~500', 'https://www.instagram.com/rayduenglish/', '50~100', '', '2018-12-18 00:10:00'),
(39, 'ICI0019@u09.com', 'ICI0039PS', 'ic39.jpg', '那個女生 Kiki', '女', 'Instgram', 5, '50~100', 'https://www.youtube.com/channel/UCuggN8RzbtpxFSd6LHCeXew', '50~100', '', '', 'https://www.instagram.com/minikiki_0529/', '100~500', '', '2018-12-01 08:00:00'),
(40, 'ICI0020@u09.com', 'ICI0040PS', 'ic40.jpg', '古娃娃WawaKu', '女', 'Instgram', 10, '20~50', 'https://www.youtube.com/user/mincow', '100~500', 'https://www.facebook.com/Dulcieku/', '100~500', 'https://www.instagram.com/wawawaku/', '50~100', '', '2018-12-15 00:08:00'),
(41, 'ICI0017@u10.com', 'ICI0041PS', 'ic41.jpg', '三原 JAPAN', '男', 'YouTube', 30, '1~20', 'https://www.youtube.com/channel/UCCBq7s8VOCyek275uvq5lYQ', '50~100', 'https://www.facebook.com/MiharaKeigo/', '1~5', 'https://www.instagram.com/sanyuan_japan/', '100~500', '', '2018-12-04 08:00:00'),
(42, 'ICI0018@u10.com', 'ICI0042PS', 'ic42.jpg', '吃心絕對', '男', 'Blog', 50, '50~100', '', '', 'https://www.facebook.com/ksdelicacy/', '1~5', '', '', 'http://ksdelicacy.pixnet.net/blog', '2018-12-14 00:08:00'),
(43, 'ICI0019@u10.com', 'ICI0043PS', 'ic43.jpg', '大口老師的走跳學堂', '男', 'Blog', 100, '50~100', '', '', 'https://www.facebook.com/zine1314/', '100~500', '', '', 'https://zineblog.com.tw/', '2018-12-19 00:10:00'),
(44, 'ICI0020@u10.com', 'ICI0044PS', 'ic44.jpg', '鄭小柔Charlene', '女', 'Blog', 300, '1~20', '', '', 'https://www.facebook.com/Charlene520/', '100~500', '', '', 'http://mei30530.pixnet.net/blog', '2018-12-11 08:00:00'),
(45, 'ICI0017@u11.com', 'ICI0045PS', 'ic45.jpg', '飛天璇', '女', 'Blog', 1, '50~100', '', '', 'https://www.facebook.com/flyinghsuan/', '500~1,000', '', '', 'http://flyblog.cc/blog', '2018-12-03 08:00:00'),
(46, 'ICI0018@u11.com', 'ICI0046PS', 'ic46.jpg', '黃書庭', '女', 'Instgram', 3, '300~500', '', '', '', '', 'https://www.instagram.com/vivibabier/', '50~100', '', '2018-12-01 08:00:00'),
(47, 'ICI0019@u11.com', 'ICI0047PS', 'ic47.jpg', '黃珮涵', '女', 'Instgram', 5, '20~50', '', '', '', '', 'https://www.instagram.com/hph0117/', '100~500', '', '2018-12-03 08:00:00'),
(48, 'ICI0020@u11.com', 'ICI0048PS', 'ic48.jpg', '許路兒LureHsu ', '女', 'Instgram', 10, '50~100', '', '', '', '', 'https://www.instagram.com/lurehsu/', '50~100', '', '2018-12-03 08:00:00'),
(49, 'ICI0017@u12.com', 'ICI0049PS', 'ic49.jpg', '聖嫂嘟嘟', '女', 'Instgram', 30, '20~50', 'https://www.youtube.com/channel/UC8MQLq2uFUa-HXHCVjHlc-Q', '100~500', '', '', 'https://www.instagram.com/natalie83917/', '100~500', '', '2018-12-11 08:00:00'),
(50, 'ICI0018@u12.com', 'ICI0050PS', 'ic50.jpg', 'Hello Catie', '女', 'Blog', 50, '1~20', 'https://www.youtube.com/channel/UCxls4ftUSbEcrDR1zQWIwfA', '50~100', 'https://www.instagram.com/hellocatie45/', '1~5', '', '', 'http://hellocatie.pixnet.net/blog', '2018-12-05 08:00:00');

-- --------------------------------------------------------

--
-- 資料表結構 `ic_favor`
--

CREATE TABLE `ic_favor` (
  `sid` int(11) NOT NULL,
  `BScase_sid` varchar(200) NOT NULL,
  `ICmember_sid` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `ic_favor`
--

INSERT INTO `ic_favor` (`sid`, `BScase_sid`, `ICmember_sid`) VALUES
(6, '1', '42'),
(7, '2', '42'),
(8, '3', '42'),
(9, '6', '42'),
(14, '10', '1'),
(19, '35', '1'),
(20, '9', '1'),
(21, '37', '1'),
(22, '33', '1'),
(23, '31', '1');

-- --------------------------------------------------------

--
-- 資料表結構 `ic_talk`
--

CREATE TABLE `ic_talk` (
  `sid` int(11) NOT NULL,
  `talk_sid` int(11) NOT NULL,
  `IC_content` varchar(500) NOT NULL,
  `time` datetime NOT NULL,
  `ic_talk_state` int(100) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `industry_categories`
--

CREATE TABLE `industry_categories` (
  `id` int(11) NOT NULL,
  `industry_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `industry_categories`
--

INSERT INTO `industry_categories` (`id`, `industry_name`) VALUES
(1, '請選擇產業類型'),
(2, '零售/百貨'),
(3, '資訊/遊戲'),
(4, '科技/製造'),
(5, '服務/餐飲'),
(6, '旅遊/娛樂'),
(7, '美妝/時尚'),
(8, '學習/體驗'),
(9, '藝文/展覽'),
(10, '其他');

-- --------------------------------------------------------

--
-- 資料表結構 `u04_admin`
--

CREATE TABLE `u04_admin` (
  `sid` int(11) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `account` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `permission` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `u04_admin`
--

INSERT INTO `u04_admin` (`sid`, `nickname`, `account`, `password`, `permission`) VALUES
(1, '李政澔', 'tommy6300167', '123456', 1);

--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `active_categories`
--
ALTER TABLE `active_categories`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `bsmember`
--
ALTER TABLE `bsmember`
  ADD PRIMARY KEY (`BS_sid`),
  ADD UNIQUE KEY `BS_email` (`BS_email`);

--
-- 資料表索引 `bs_case`
--
ALTER TABLE `bs_case`
  ADD PRIMARY KEY (`BScase_sid`);

--
-- 資料表索引 `bs_case_detail`
--
ALTER TABLE `bs_case_detail`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `bs_favor`
--
ALTER TABLE `bs_favor`
  ADD PRIMARY KEY (`BF_sid`);

--
-- 資料表索引 `bs_order`
--
ALTER TABLE `bs_order`
  ADD PRIMARY KEY (`BO_sid`);

--
-- 資料表索引 `bs_talk`
--
ALTER TABLE `bs_talk`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `icmember`
--
ALTER TABLE `icmember`
  ADD PRIMARY KEY (`IC_sid`);

--
-- 資料表索引 `ic_favor`
--
ALTER TABLE `ic_favor`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `ic_talk`
--
ALTER TABLE `ic_talk`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `industry_categories`
--
ALTER TABLE `industry_categories`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `u04_admin`
--
ALTER TABLE `u04_admin`
  ADD PRIMARY KEY (`sid`);

--
-- 在匯出的資料表使用 AUTO_INCREMENT
--

--
-- 使用資料表 AUTO_INCREMENT `bsmember`
--
ALTER TABLE `bsmember`
  MODIFY `BS_sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- 使用資料表 AUTO_INCREMENT `bs_case`
--
ALTER TABLE `bs_case`
  MODIFY `BScase_sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- 使用資料表 AUTO_INCREMENT `bs_case_detail`
--
ALTER TABLE `bs_case_detail`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用資料表 AUTO_INCREMENT `bs_favor`
--
ALTER TABLE `bs_favor`
  MODIFY `BF_sid` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- 使用資料表 AUTO_INCREMENT `bs_order`
--
ALTER TABLE `bs_order`
  MODIFY `BO_sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- 使用資料表 AUTO_INCREMENT `bs_talk`
--
ALTER TABLE `bs_talk`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表 AUTO_INCREMENT `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表 AUTO_INCREMENT `icmember`
--
ALTER TABLE `icmember`
  MODIFY `IC_sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- 使用資料表 AUTO_INCREMENT `ic_favor`
--
ALTER TABLE `ic_favor`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- 使用資料表 AUTO_INCREMENT `ic_talk`
--
ALTER TABLE `ic_talk`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表 AUTO_INCREMENT `u04_admin`
--
ALTER TABLE `u04_admin`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
