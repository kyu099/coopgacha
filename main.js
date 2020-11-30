const price = document.getElementById("price");
const doButton = document.getElementById("doButton");
const result = document.getElementById("result");
const dotweet = document.getElementById("tweet");
const low = document.getElementById("low");
const high = document.getElementById("high");

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
    {name:"釜玉うどん大",price:404},
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

menu.sort(function(a,b){
    return a.name.localeCompare(b.name, 'ja');
})
menu.sort(compare);

let setmenu = [];
let money = [];
let checked = [];

function selectmenu(balance){

    let len = menu.length;
    let i;

    while(balance >= menu[0].price){

        while(menu[len - 1].price > balance){
            len--;
        }

        i = Math.floor(Math.random()*len);

        if(high.checked){
            setmenu[i]++;
        } else if(low.checked){
            setmenu.push(menu[i]);
        }
        balance -= menu[i].price;
    }
    money[1] = balance;
}

function rnorm(){
    return Math.sqrt(-2 * Math.log(1 - Math.random())) * Math.cos(2 * Math.PI * Math.random());
} // 標準正規分布に基づいた乱数

function selectdistribution(balance){
    let total = 0;
    let j = 0;
    while(j < menu.length){
        total += menu[j].price;
        j++;
    }

    average = Math.floor((balance - 10000000000) / total);

    j = 0;
    while(j < menu.length && balance > 10000000000){
        let quantity = Math.floor(average + Math.sqrt(average) * rnorm());
        setmenu[j] = quantity;
        balance -= menu[j].price * quantity;
        j++;
    }
    return balance;
}

function alertprice(){
    result.innerHTML = "";

    let balance = +price.value
    money[0] = balance;

    if(price.value.includes(".")){
        alert("数字以外の記号を入力しないでください");
        return;
    }

    if(balance < 0){
        alert("正の数を入力してください");
        return;
    }

    if(balance > Number.MAX_SAFE_INTEGER){
        alert("数字が大きすぎます");
        return;
    }

    let result_menu;
    checked = [high.checked, low.checked];

    if(checked[0] === true){
        setmenu = (new Array(menu.length).fill(0));
        let f = balance;

        if(balance > 10000000000){
            balance = selectdistribution(balance);
        }

        selectmenu(balance);

        // 分散を求める。
        /*
        let total = 0;
        let j = 0;
        while(j < menu.length){
            total += menu[j].price;
            j++;
        }

        let average = Math.floor(f/total);
        let dist = 0;
        j = 0;
        while(j < setmenu.length){
            dist += (average - setmenu[j]) * (average - setmenu[j])/setmenu.length;
            j++;
        }
        alert(`平均は${average}\n分散は${dist}`);
        */
        
        let i = 0;
        result_menu = "";
        while(i < menu.length) {
            if(setmenu[i] > 0)
            result_menu += `<tr><td>${menu[i].name}</td> <td>${menu[i].price}円</td> <td>×${setmenu[i]}<td></tr>`;
            i++;
        }
    } else if(checked[1] === true){
        setmenu = [];

        selectmenu(balance);

        setmenu.sort(function(a,b){
            return a.name.localeCompare(b.name, 'ja');
        })
        setmenu.sort(compare);

        let i = 0;
        result_menu = "";
        while(i < setmenu.length) {
            result_menu += `<tr><td>${setmenu[i].name}</td> <td>${setmenu[i].price}円</td></tr>`;
            i++;
        }
    }

    result_menu += `残金 ${money[1]}円`;
    result.innerHTML = result_menu;

}

function tweet(){
    let text = "";
    text += money[0] + "%E5%86%86%E3%81%A7%E3%82%AC%E3%83%81%E3%83%A3%E3%82%92%E5%9B%9E%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%0D%0A%0D%0A";
    let i = 0;

    if(checked[0] === true) {
        while(i < menu.length) {
            if(setmenu[i] > 0)
            text += menu[i].name + " " + menu[i].price + "%E5%86%86" + " %C3%97" + setmenu[i] + "%0D%0A";
            i++;
        }
    } else if (checked[1] === true){
        while(i < setmenu.length) {
            text += setmenu[i].name + " " + setmenu[i].price + "%E5%86%86%0D%0A";
            i++;
        }
    }

    text += `%0D%0A%E6%AE%8B%E9%87%91 ${money[1]}%E5%86%86%0D%0A`;
    text += "%0D%0A%23%E7%94%9F%E5%8D%94%E9%A3%9F%E5%A0%82%E3%82%AC%E3%83%81%E3%83%A3%0D%0Ahttps://kyu099.github.io/coopgacha/"
    window.open(`https://twitter.com/intent/tweet?text=${text}`,)
}

doButton.onclick = alertprice;
dotweet.onclick = tweet;

