var local = detectUserType();
var default_swipe=true;
var web_thumb_nav = false;
function detectUserType(){
		var ua = navigator.userAgent,
		event = (ua.match(/iPhone/i) || ua.match(/iPad/i)) ? false : true;
		return event;
}
if(local)
{
	default_swipe=false;
	web_thumb_nav = false;
}
var isNavCalled=false;
var isAllAssetsUpdated=true;
var curNavSlideName="";
	//Nav Object
var nav = {
slides : [ 
    {
        'slideno': '02_06_01',
        'keyMessageFileName': '乾癬MR研修用スライド（疾患編Part2）：治療_02_06_01_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '1',
    },
         {
        'slideno': '02_06_02',
        'keyMessageFileName': '目次_02_06_02_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '2',
    },
         {
        'slideno': '02_06_03',
        'keyMessageFileName': '治療 _02_06_03_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '3',
    },
         {
        'slideno': '02_06_04',
        'keyMessageFileName': '乾癬の治療の歴史_02_06_04_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '4',
    },
         {
        'slideno': '02_06_05',
        'keyMessageFileName': '治療の目的ゴール_02_06_05_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '5',
    },
         {
        'slideno': '02_06_06',
        'keyMessageFileName': '乾癬治療ピラミッド_02_06_06_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '6',
    },
         {
        'slideno': '02_06_07',
        'keyMessageFileName': '治療方針（一例）_02_06_07_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '7',
    },
         {
        'slideno': '02_06_08',
        'keyMessageFileName': 'European Evidence-based（S3）ガイドライン update 2018(ドイツ)_02_06_08_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '08',
    },
         {
        'slideno': '02_06_09',
        'keyMessageFileName': '米国皮膚科学会（AAD）ガイドライン(2011年版)_02_06_09_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '09',
    },
         {
        'slideno': '02_06_10',
        'keyMessageFileName': 'British Association of Dermatologists（BAD）1 2_02_06_10_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '10',
    },
         {
        'slideno': '02_06_11',
        'keyMessageFileName': 'British Association of Dermatologists（BAD）2 2_02_06_11_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '11',
    },
         {
        'slideno': '02_06_12',
        'keyMessageFileName': '全身療法の適応基準_02_06_12_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '12',
    },
         {
        'slideno': '02_06_13',
        'keyMessageFileName': '薬物療法および光線療法実施状況_02_06_13_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '13',
    },
         {
        'slideno': '02_06_14',
        'keyMessageFileName': '治療方針まとめ_02_06_14_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '14',
    },
         {
        'slideno': '02_06_15',
        'keyMessageFileName': '外用療法_02_06_15_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '15',
    },
         {
        'slideno': '02_06_16',
        'keyMessageFileName': 'ステロイド外用剤による治療　_02_06_16_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '16',
    },
         {
        'slideno': '02_06_17',
        'keyMessageFileName': 'ステロイド外用剤の薬効ランク_02_06_17_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '17',
    },
         {
        'slideno': '02_06_18',
        'keyMessageFileName': 'ステロイド外用剤による治療（シャンプー）（製品名：コムクロⓇ）_02_06_18_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '18',
    },
         {
        'slideno': '02_06_19',
        'keyMessageFileName': 'ビタミンD3外用剤による治療_02_06_19_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '19',
    },
         {
        'slideno': '02_06_20',
        'keyMessageFileName': '本邦で処方可能なビタミンD3外用剤_02_06_20_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '20',
    }
    ,
         {
        'slideno': '02_06_21',
        'keyMessageFileName': 'ステロイド外用剤とビタミンD3外用剤の併用_02_06_21_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '21',
    },
         {
        'slideno': '02_06_22',
        'keyMessageFileName': 'ステロイドとビタミンD3の混合製剤_02_06_22_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '22',
    },
         {
        'slideno': '02_06_23',
        'keyMessageFileName': 'ステロイドとビタミンD3の混合製剤_02_06_23_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '23',
    },
         {
        'slideno': '02_06_24',
        'keyMessageFileName': 'カルシポトリオール水和物  ベタメタゾンジプロピオン酸エステル配合剤 有効性と安全性_02_06_24_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '24',
    },
         {
        'slideno': '02_06_25',
        'keyMessageFileName': 'マキサカルシトール  ベタメタゾン酪酸エステルプロピオン酸エステル配合剤 有効性と安全性_02_06_25_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '25',
    },
         {
        'slideno': '02_06_26',
        'keyMessageFileName': '適応外の外用剤：タクロリムス_02_06_26_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '26',
    },
         {
        'slideno': '02_06_27',
        'keyMessageFileName': '外用剤の塗布量の目安_02_06_27_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '27',
    },
         {
        'slideno': '02_06_28',
        'keyMessageFileName': '外用療法まとめ_02_06_28_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '28',
    },
         {
        'slideno': '02_06_29',
        'keyMessageFileName': '光線療法_02_06_29_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '29',
    },
         {
        'slideno': '02_06_30',
        'keyMessageFileName': '近代光線療法の歴史_02_06_30_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '30',
    },
         {
        'slideno': '02_06_31',
        'keyMessageFileName': '光線療法の作用メカニズム_02_06_31_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '31',
    },
         {
        'slideno': '02_06_32',
        'keyMessageFileName': '紫外線療法の絶対禁忌・相対禁忌_02_06_32_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '32',
    },
         {
        'slideno': '02_06_33',
        'keyMessageFileName': 'PUVA療法　1 2_02_06_33_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '33',
    },
         {
        'slideno': '02_06_34',
        'keyMessageFileName': 'PUVA療法　2 2_02_06_34_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '34',
    },
         {
        'slideno': '02_06_35',
        'keyMessageFileName': 'ブロードバンドUVB療法_02_06_35_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '35',
    },
         {
        'slideno': '02_06_36',
        'keyMessageFileName': 'ナローバンドUVB療法_02_06_36_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '36',
    },    {
        'slideno': '02_06_37',
        'keyMessageFileName': 'UVAおよびUVB照射装置（一例）_02_06_37_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '37',
    },      {
        'slideno': '02_06_38',
        'keyMessageFileName': 'ターゲット型光線療法_02_06_38_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '38',
    },      {
        'slideno': '02_06_39',
        'keyMessageFileName': 'ターゲット型光線療法（一例）_02_06_39_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '39',
    },      {
        'slideno': '02_06_40',
        'keyMessageFileName': '光線治療の展望_02_06_40_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '40',
    },      {
        'slideno': '02_06_41',
        'keyMessageFileName': '乾癬の光線療法ガイドライン Clinical Question（CQ）_02_06_41_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '41',
    },      {
        'slideno': '02_06_42',
        'keyMessageFileName': '乾癬の光線療法ガイドライン Clinical Question（CQ）_02_06_42_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '42',
    },      {
        'slideno': '02_06_43',
        'keyMessageFileName': '乾癬の光線療法ガイドライン Clinical Question（CQ）_02_06_43_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '43',
    },      {
        'slideno': '02_06_44',
        'keyMessageFileName': '乾癬の光線療法ガイドライン Clinical Question（CQ）_02_06_44_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '44',
    },      {
        'slideno': '02_06_45',
        'keyMessageFileName': '光線療法まとめ　1 2_02_06_45_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '45',
    },      {
        'slideno': '02_06_46',
        'keyMessageFileName': '光線療法まとめ　2 2_02_06_46_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '46',
    },      {
        'slideno': '02_06_47',
        'keyMessageFileName': '内服療法_02_06_47_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '47',
    },      {
        'slideno': '02_06_48',
        'keyMessageFileName': 'レチノイドの作用機序（製品名：チガソンⓇ）_02_06_48_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '48',
    },      {
        'slideno': '02_06_49',
        'keyMessageFileName': 'レチノイドによる治療（製品名：チガソンⓇ）_02_06_49_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '49',
    },      {
        'slideno': '02_06_50',
        'keyMessageFileName': 'シクロスポリンの作用機序（製品名：ネオーラルⓇ）_02_06_50_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '50',
    },      {
        'slideno': '02_06_51',
        'keyMessageFileName': 'シクロスポリンによる治療（製品名：ネオーラルⓇ）_02_06_51_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '51',
    },      {
        'slideno': '02_06_52',
        'keyMessageFileName': 'シクロスポリン投与によるPASIスコアの変化と寛解率_02_06_52_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '52',
    },      {
        'slideno': '02_06_53',
        'keyMessageFileName': 'シクロスポリン投与によるPASIスコア改善までの期間_02_06_53_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '53',
    },      {
        'slideno': '02_06_54',
        'keyMessageFileName': 'シクロスポリンの用法_02_06_54_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '54',
    },      {
        'slideno': '02_06_55',
        'keyMessageFileName': 'シクロスポリン診療ガイドライン　1 2_02_06_55_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '55',
    },
    {
        'slideno': '02_06_56',
        'keyMessageFileName': 'シクロスポリン診療ガイドライン　2 2_02_06_56_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '56',
    },
    {
        'slideno': '02_06_57',
        'keyMessageFileName': 'メトトレキサートによる治療（製品名：リウマトレックスⓇ）_02_06_57_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '57',
    },
    {
        'slideno': '02_06_58',
        'keyMessageFileName': '本邦における乾癬に対するメトトレキサートによる治療_02_06_58_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '58',
    },
    {
        'slideno': '02_06_59',
        'keyMessageFileName': '関節リウマチ治療におけるMTX診療ガイドライン（2016年改訂版）：投与禁忌_02_06_59_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '59',
    },
    {
        'slideno': '02_06_60',
        'keyMessageFileName': '関節リウマチ治療におけるMTX診療ガイドライン（2016年改訂版）：投与開始前のスクリーニング_02_06_60_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '60',
    },
    {
        'slideno': '02_06_61',
        'keyMessageFileName': 'PDE4阻害薬の作用機序（製品名：オテズラⓇ錠）_02_06_61_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '61',
    },
    {
        'slideno': '02_06_62',
        'keyMessageFileName': 'PDE4阻害薬による治療（製品名：オテズラⓇ錠）_02_06_62_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '62',
    },
    {
        'slideno': '02_06_63',
        'keyMessageFileName': 'アプレミラスト 尋常性乾癬 国内後期第Ⅱ相臨床試験_02_06_63_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '63',
    },
    {
        'slideno': '02_06_64',
        'keyMessageFileName': '内服療法まとめ_02_06_64_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '64',
    },
    {
        'slideno': '02_06_65',
        'keyMessageFileName': '生物学的製剤_02_06_65_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '65',
    },
    {
        'slideno': '02_06_66',
        'keyMessageFileName': '生物学的製剤承認施設_02_06_66_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '66',
    },
    {
        'slideno': '02_06_67',
        'keyMessageFileName': '乾癬生物学的製剤検討委員会_02_06_67_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '67',
    },
    {
        'slideno': '02_06_68',
        'keyMessageFileName': '乾癬における生物学的製剤の使用ガイダンス（2018年版）生物学的製剤の使用指針_02_06_68_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '68',
    },
    {
        'slideno': '02_06_69',
        'keyMessageFileName': '乾癬における生物学的製剤の使用ガイダンス（2018年版）生物学的製剤の対象患者_02_06_69_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '69',
    },
    {
        'slideno': '02_06_70',
        'keyMessageFileName': '乾癬における生物学的製剤の使用ガイダンス（2018年版）対象患者についての重要な注意事項_02_06_70_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '70',
    },
    {
        'slideno': '02_06_71',
        'keyMessageFileName': '乾癬における生物学的製剤の使用ガイダンス（2018年版）全身療法の導入基準_02_06_71_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '71',
    },
    {
        'slideno': '02_06_72',
        'keyMessageFileName': '乾癬における生物学的製剤の使用ガイダンス（2018年版）生物学的製剤の選択基準（尋常性乾癬）_02_06_72_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '72',
    },
    {
        'slideno': '02_06_73',
        'keyMessageFileName': '乾癬における生物学的製剤の使用ガイダンス（2018年版）生物学的製剤の選択基準（関節症性乾癬）_02_06_73_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '73',
    },
    {
        'slideno': '02_06_74',
        'keyMessageFileName': '乾癬で使用可能な生物学的製剤（PASI75 90 100）_02_06_74_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '74',
    },
    {
        'slideno': '02_06_75',
        'keyMessageFileName': '乾癬で使用可能な生物学的製剤（ACR20 50 70）_02_06_75_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '75',
    },
    {
        'slideno': '02_06_76',
        'keyMessageFileName': '乾癬における生物学的製剤の使用ガイダンス（2018年版）治療ゴールおよび中止_02_06_76_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '76',
    },
    {
        'slideno': '02_06_77',
        'keyMessageFileName': '乾癬における生物学的製剤の使用ガイダンス（2018年版）特に注意が必要な患者　1 2_02_06_77_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '77',
    },
    {
        'slideno': '02_06_78',
        'keyMessageFileName': '乾癬における生物学的製剤の使用ガイダンス（2018年版）特に注意が必要な患者　2 2_02_06_78_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '78',
    },
    {
        'slideno': '02_06_79',
        'keyMessageFileName': '乾癬における生物学的製剤の使用ガイダンス（2018年版）生物学的製剤の治療開始前チェックリスト_02_06_79_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '79',
    },
    {
        'slideno': '02_06_80',
        'keyMessageFileName': '乾癬における生物学的製剤の使用ガイダンス（2018年版）生物学的製剤治療時の結核予防対策_02_06_80_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '80',
    },
    {
        'slideno': '02_06_81',
        'keyMessageFileName': '乾癬における生物学的製剤の使用ガイダンス型肝炎対策の推奨手順_02_06_81_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '81',
    },
    {
        'slideno': '02_06_82',
        'keyMessageFileName': '乾癬における生物学的製剤の使用ガイダンス（2018年版）生物学的製剤治療開始後チェックリストv_02_06_82_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '82',
    },
    {
        'slideno': '02_06_83',
        'keyMessageFileName': '乾癬における生物学的製剤の使用ガイダンス 生物学的製剤治療中における発熱 呼吸困難に対するフローチャート_02_06_83_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '83',
    },
    {
        'slideno': '02_06_84',
        'keyMessageFileName': '乾癬における生物学的製剤の使用ガイダンス（2018年版）生物学的製剤と他の全身療法との併用_02_06_84_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '84',
    },
    {
        'slideno': '02_06_85',
        'keyMessageFileName': '乾癬に適応をもつ生物学的製剤　1 2_02_06_85_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '85',
    },   
    {
        'slideno': '02_06_86',
        'keyMessageFileName': '乾癬に適応をもつ生物学的製剤　2 2_02_06_86_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '86',
    },   
    {
        'slideno': '02_06_87',
        'keyMessageFileName': '医薬品の抗体の種類_02_06_87_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '87',
    },   
    {
        'slideno': '02_06_88',
        'keyMessageFileName': '乾癬の病態と生物学的製剤_02_06_88_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '88',
    },  
    {
        'slideno': '02_06_89',
        'keyMessageFileName': 'Patient share of PsV（Derma)_02_06_89_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '83',
    },   
    {
        'slideno': '02_06_90',
        'keyMessageFileName': 'Patient share of PsA (Derma)_02_06_90_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '90',
    },   
    {
        'slideno': '02_06_91',
        'keyMessageFileName': 'インフリキシマブ（製品名：レミケードⓇ）_02_06_91_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '91',
    },   
    {
        'slideno': '02_06_92',
        'keyMessageFileName': 'アダリムマブ（製品名：ヒュミラⓇ）_02_06_92_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '92',
    },   
    {
        'slideno': '02_06_93',
        'keyMessageFileName': 'ウステキヌマブ（製品名：ステラーラⓇ）_02_06_93_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '93',
    },   
    {
        'slideno': '02_06_94',
        'keyMessageFileName': 'グセルクマブ（製品名：トレムフィアⓇ）_02_06_94_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '94',
    },   
    {
        'slideno': '02_06_95',
        'keyMessageFileName': 'リサンキズマブ（製品名：スキリージⓇ）_02_06_95_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '95',
    },   
    {
        'slideno': '02_06_96',
        'keyMessageFileName': 'チルドラキズマブ（製品名：イルミアⓇ）_02_06_96_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '96',
    },   
    {
        'slideno': '02_06_97',
        'keyMessageFileName': 'セクキヌマブ（製品名：コセンティクスⓇ）_02_06_97_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '97',
    },   
    {
        'slideno': '02_06_98',
        'keyMessageFileName': 'イキセキズマブ（製品名：トルツⓇ）_02_06_98_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '98',
    },   
    {
        'slideno': '02_06_99',
        'keyMessageFileName': 'ブロダルマブ（製品名：ルミセフⓇ）_02_06_99_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '99',
    },   
    {
        'slideno': '02_06_100',
        'keyMessageFileName': '生物学的製剤まとめ_02_06_100_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '100',
    },   
    {
        'slideno': '02_06_101',
        'keyMessageFileName': '顆粒球単球吸着除去療法（GMA）_02_06_101_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '101',
    },   
    {
        'slideno': '02_06_102',
        'keyMessageFileName': '顆粒球単球吸着除去療法（GMA）による治療_02_06_102_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '102',
    },   
    {
        'slideno': '02_06_103',
        'keyMessageFileName': '膿疱性乾癬（汎発型）診療ガイドライン2014年度版 Clinical Question（CQ）_02_06_103_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '103',
    },   
    {
        'slideno': '02_06_104',
        'keyMessageFileName': '膿疱性乾癬（汎発型）診療ガイドライン2014年度版 Clinical Question（CQ）_02_06_104_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '104',
    },
    {
        'slideno': '02_06_105',
        'keyMessageFileName': '膿疱性乾癬（汎発型）診療ガイドライン2014年度版 Clinical Question（CQ）_02_06_105_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '105',
    },
    {
        'slideno': '02_06_106',
        'keyMessageFileName': '乾癬性関節炎診療ガイドライン 2019 Clinical Question（CQ）_02_06_106_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '106',
    },
    {
        'slideno': '02_06_107',
        'keyMessageFileName': '顆粒球単球吸着除去療法まとめ_02_06_107_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '107',
    },
    {
        'slideno': '02_06_108',
        'keyMessageFileName': '薬剤費負担額の目安_02_06_108_V1',
        'presentationName': '疾患編part2：治療',
        'navOrder': '108',
    },

		],
						
	findSlideIndex:function (fileName){
    for( key in nav.slides ){        
		var slideno=nav.slides[key].slideno;
		 if (slideno == fileName){
            return key;
         };        
	}
		console.log("Error: wrong file name");
    },
    reprints: 
	[
	/* {'isi' : 'smpc_apr_2015',
	'keyMessageFileName': 'isi',
	'presentationName': ''
	}, 
	{'Derma Core Flow-SmPC-PIL': 'Derma Core Flow-SmPC-PIL',
	'keyMessageFileName': 'Derma Core Flow-SmPC-PIL',
	'presentationName': 'DERM_HUM_Core flow_MASTER_EN_Skin and beyond_SUMMER15_GL'
	}*/
	],
   
	//use this function to navigate to an HTML slide locally and in Veeva
	navSlide: function (fileName) {		
		//return false;
		curNavSlideName=fileName;	
		isNavCalled=true;
        var fileIndex=nav.findSlideIndex(fileName);		
		//alert(nav.slides[fileIndex].keyMessageFileName+",,,,"+nav.slides[fileIndex].presentationName);
        if (local) {	
			//alert();		
			if(window.location.href.indexOf(".com") > -1) {
				com.veeva.clm.gotoSlide(nav.slides[fileIndex].keyMessageFileName+".zip",nav.slides[fileIndex].presentationName);
			} else {
				fileName="../"+nav.slides[fileIndex].keyMessageFileName+"/"+nav.slides[fileIndex].keyMessageFileName;			
			    document.location = fileName + '.html';
				com.veeva.clm.gotoSlide(nav.slides[fileIndex].keyMessageFileName+".zip",nav.slides[fileIndex].presentationName);
			}
		}else{
			//alert(nav.slides[fileIndex].keyMessageFileName+",,,,"+nav.slides[fileIndex].presentationName);
			//if(isAllAssetsUpdated==true && sRequestObjCnt==0){ //If all the assets are tracked then it allows for navigation 
				//com.veeva.clm.gotoSlide(nav.slides[fileIndex].keyMessageFileName+".zip",nav.slides[fileIndex].presentationName);
			//}
		}
	},
	
	//use this function to navigate to a reprint locally and in Veeva navReprint: function (fileName) {
	navReprint: function (fileName) {     
		if (local) {
		   fileName="../"+fileName+"/"+fileName; 
		   document.location = fileName +'.pdf';
		}else{
			//alert(nav.reprints[fileName]);
			//com.veeva.clm.gotoSlide(nav.reprints[fileName]+".zip",nav.reprints[fileName].presentationName);
			com.veeva.clm.gotoSlide("Derma Core Flow-SmPC-PIL.zip","DERM_HUM_Core flow_MASTER_SE_Skin and beyond_SUMMER15_GL");
		}
	}
}

/* ----------------------------------------- Web Thumbnail Navigation ------------------------------- */