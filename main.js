const price = document.getElementById("price");
const doButton = document.getElementById("doButton");
const result = document.getElementById("result");

let menu = [
    {name:"おろしハンバーグ",price:264},
    {name:"白身魚フライタルタルソース",price:264},
    {name:"チキンおろしだれ",price:308},
    {name:"チキン竜田揚げ",price:308},
    {name:"辛みそ豚丼小",price:319},
    {name:"辛みそ豚丼中",price:385},
    {name:"辛みそ豚丼大",price:473},
    {name:"チキン竜田丼小",price:407},
    {name:"チキン竜田丼中",price:473},
    {name:"チキン竜田丼大",price:561},
    {name:"ほうれん草と鶏のタルタル和え",price:88},
    {name:"ハムカツ",price:132},
    {name:"豚生姜焼き",price:198},
    {name:"マーボー豆腐",price:176},
    {name:"パリパリ春巻き",price:132},
    {name:"揚げ鶏の和風あんかけ",price:198},
    {name:"ロースカツ甘酢ソース",price:220},
    {name:"さば味噌煮",price:198},
    {name:"サバ塩焼き",price:198},
    {name:"牛肉コロッケ",price:110},
    {name:"揚げ餃子",price:66},
    {name:"フライドポテト",price:110},
    {name:"納豆",price:55},
    {name:"半熟卵",price:66},
    {name:"ほうれん草ゴマあえ",price:66},
    {name:"秋の惣菜トリオ",price:110},
    {name:"豆腐とわかめの味噌汁",price:33},
    {name:"豚汁",price:88},
    {name:"ライス小",price:76},
    {name:"ライス中",price:110},
    {name:"ライス大",price:165},
    {name:"ポテト＆コーンサラダ",price:88},
    {name:"薩摩ハーブ鶏のレバー煮",price:88},
    {name:"野菜生活100",price:66},
    {name:"旨辛豆腐",price:132},
    {name:"きんぴらごぼう",price:66},
    {name:"切り干し大根",price:66},
    {name:"ひじき煮",price:66},
    {name:"かぼちゃ煮",price:66},
    {name:"煮卵",price:66},
    {name:"オクラのおひたし",price:66},
    {name:"15品目のヘルシーサラダ",price:66},
    {name:"大根おろし",price:33},
    {name:"ほうれん草のおひたし",price:66},
    {name:"冷奴",price:66},
    {name:"ヒレカツカレー中",price:418},
    {name:"ヒレカツカレー大",price:506},
    {name:"カレーライス小",price:231},
    {name:"カレーライス中",price:264},
    {name:"カレーライス大",price:352},
    {name:"しょうゆラーメン中",price:363},
    {name:"しょうゆラーメン大",price:448},
    {name:"担々麺中",price:440},
    {name:"担々麺大",price:525},
    {name:"濃厚豚骨醤油ラーメン中",price:462},
    {name:"濃厚豚骨醤油ラーメン大",price:547},
    {name:"辛みそラーメン中",price:363},
    {name:"辛みそラーメン大",price:448},
    {name:"かき揚げうどん中",price:319},
    {name:"かき揚げそば中",price:319},
    {name:"かき揚げうどん大",price:404},
    {name:"かき揚そば大",price:404},
    {name:"釜玉うどん中",price:319},
    {name:"釜玉そば中",price:319},
    {name:"釜玉うどん台",price:404},
    {name:"釜玉そば大",price:404},
    {name:"きつねうどん中",price:319},
    {name:"きつねそば中",price:319},
    {name:"きつねうどん大",price:404},
    {name:"きつねそば大",price:404},
    {name:"かけうどん中",price:220},
    {name:"かけうどん大",price:305},
    {name:"かけそば中",price:220},
    {name:"かけそば大",price:305}
];

function compare(a,b){
    return a.price - b.price;
}

menu.sort(compare);


function alertprice(){

    let balance = price.value
    let i;
    result.innerHTML = '';
    while(1){

        function judge(a){
            return a.price <= balance;
        }

        let newmenu = menu.filter(judge);
        if(newmenu.length === 0){break;}

        i = Math.floor(Math.random()*newmenu.length);

        result.innerHTML += `<tr><td>${newmenu[i].name}</td> <td>${newmenu[i].price}円</td></tr>`;
        balance -= newmenu[i].price;
    }
    result.innerHTML += `残金 ${balance}円`;
}

doButton.onclick = alertprice;

