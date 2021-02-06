var num=1;
var q = {
    1 : {
        "t-number": "Q1",
        "t-words" : ' "Hogwarts Letter" ',
        "title": "어느 날 평범하게 살던 당신에게 호그와트 입학 통지서가 도착했습니다. '내가 마법사라니!' 기쁨도 잠시 가족들은 당신이 호그와트에 가는 걸 완강히 반대하네요. 이 상황에서 당신은", "type1":"problem", "type2":"emotion", "type3" : "person", "type4":"hope", 
        "A":"호그와트에 가고 싶은 이유, 호그와트에서 공부할 계획을 차근차근 이야기하며 가족들을 설득한다.", 
        "B":"'하.. 답답해' 당장 카톡을 켜 친구에게 상황을 털어놓는다.", 
        "C":" '도대체 왜 반대하는 거야!' 버럭 화를 낸다.", 
        "D":"'반대한다 말겠지~' 한 귀로 듣고 한 귀로 흘린다.",
        "image" : "1.jpg"},
    2 : {
        "t-number": "Q2",
        "t-words" : '"Ollivanders"',
        "title": "호그와트 입학 준비물을 사기 위해 다이애건 앨리에 온 당신! 사야 할 준비물이 아직 많이 남았는데 벌써 스무번째 지팡이를 휘둘러봐도 당신에게 맞는 지팡이가 나타나지 않네요. 올리밴더 씨의 표정도 점점 난감해지는데요, 이 상황에서 당신은", 
        "type1":"problem", "type2":"emotion", "type3" : "person", "type4":"hope", 
        "A":"지금까지 아카시아나무, 사시나무, 자두나무 지팡이를 해봤죠? 아직 너도밤나무로 만든 지팡이는 안 해봤네요! 너도밤나무 지팡이 추천 부탁드려요!", 
        "B":"올리밴더 씨, 설마 저한테 맞는 지팡이가 없는 건 아니겠죠? 불안해요ㅜㅜ", 
        "C":"'언젠간 맞는 지팡이가 나오겠지..' 그냥 쥐어주는대로 계속 휘둘러본다.", 
        "D":"'빨리 제 지팡이를 찾게 해주세요' 속으로 기도한다. ",
        "image" : "2.jpg"},
    3 : {
        "t-number": "Q3" ,
        "t-words" : '"King\'s Cross Station"',
        "title": " 짐수레 가득 짐을 싣고 낑낑대며 킹스 크로스역에 도착했습니다. 9 ¾ 승강장에 도착해 기차를 타려는데, 주머니에 넣어놨던 기차표가 보이지 않습니다. 이제 곧 기차가 출발할 시간인데, 마음이 조급해집니다. 이 상황에서 당신은", 
        "type1":"problem", "type2"  :"emotion", "type3" : "person", "type4":"hope", 
        "A":"'기차표를 가장 최근에 본 게 언제지?' 차근차근 기억을 되짚어본다.", 
        "B":"'멘붕이야.. 어떡하지?' 친구에게 전화를 걸어 함께 대책을 강구한다.", 
        "C":" 쿵! 짐가방을 한 대 치며 답답한 마음을 푼다.", 
        "D":" '신입생인데 기차표 잃어버렸다고 하면 태워주지 않을까?' 그냥 한 번 시도해보기로 한다.",
        "image" : "3.jpg"},
    4 : {
        "t-number": "Q4" ,
        "t-words" : '"Hogwarts Express"',
        "title": " 무사히 호그와트 급행열차에 탑승했습니다. 자리에 앉아 숨을 돌리던 찰나 누군가 열차 칸을 벌컥 열고 들어오네요. 그리고 당신을 '잡종'이라며 조롱하고 나갔습니다. 이 상황에서 당신은", 
        "type1":"problem", "type2":"emotion", "type3" : "person", "type4":"hope", 
        "A":"저런 조롱에 대해 처벌할 수 있는 마법사 세계의 법이 있는지 찾아본다.", 
        "B":"다른 피해자 학생에게 가서 속이 풀릴 때까지 놀린 학생 욕을 한다.", 
        "C":"'.. 그냥 무시하자' 로브를 뒤집어쓰고 잠을 청한다.rson", 
        "D":"'오늘 운이 안 좋았네. 이런 일이 또 벌어지진 않을거야' 생각하고 넘긴다.",
        "image" : "4.png"},
    5 : {
        "t-number": "Q5" ,
        "t-words" : '"Sorting Hat"',
        "title": " 드디어 호그와트에 도착했습니다! 연회장에서 환영인사를 받고, 이제 기숙사가 정해질 시간입니다. 설레는 마음으로 모자를 쓰고, 긴 혼잣말 끝에 모자가 당신의 기숙사를 호명하네요! 아.. 정말 가고 싶지 않던 기숙사에 배정되었습니다. 이 상황에서 당신은", 
        "type1":"problem", "type2":"emotion", "type3" : "person", "type4":"hope", 
        "A":"배정된 기숙사에 대해 조사해보고, 기숙사의 강점을 최대한 활용할 수 있는 계획을 새로 짜본다.",
        "B":"'저 사실 이 기숙사에 배정돼서 너무 속상해요.. 잘 적응할 수 있을까요?' 지도교수님께 조언을 구한다.", 
        "C":"버터맥주를 잔뜩 마시며 왁자지껄한 연회 분위기에 몰입한다.", 
        "D":" '모자야 제발.. 이대로 끝내지 마' 버티고 앉아서 모자가 말을 바꾸길 바란다.",
        "image" : "5.jpg"},
    6 : {
        "t-number": "Q6",
        "t-words" : '"Class"',
        "title": "호그와트에서의 첫 수업이 시작되었습니다. 설레는 마음으로 교실에 들어갔지만 마법사세계에 처음 들어온 당신은 아는 사람이 없네요. 나 빼고 다들 무리지어 있는 교실, 어디에 앉아야 할지 고민되는 상황에서 당신은", 
        "type1":"problem", "type2":"emotion", "type3" : "person", "type4":"hope", 
        "A":' "안녕! 난 한국에서 온 새내기 마법사야. 혹시 이 자리 비었니?" 적극적으로 다가간다.', 
        "B":"책상 아래로 한국에 있는 친구에게 카톡을 보낸다. '나 지금 완전 머쓱타드야..'", 
        "C":"'난 자발적 아싸야. 내가 혼자 앉고 싶어서 혼자 앉는거야.' 생각하며 혼자 앉는다.", 
        "D":"'나랑 비슷한 학생이 한 명쯤은 있지 않을까?' 누군가 짠하고 나타나 옆에 앉아주길 바란다.",
        "image" : "6.jpg"},
    7 : {
        "t-number": "Q7" ,
        "t-words" : '"Broom Stick"',
        "title": " 오늘은 드디어 마법 빗자루 타는 법을 배우는 날입니다! 그런데 신나게 뛰어가다가 빗자루가 좁은 복도에 걸려 부러져 버렸습니다.. 이런 상황에서 당신은", 
        "type1":"problem", "type2":"emotion", "type3" : "person", "type4":"hope", 
        "A":"일단 지금은 다른 기숙사 친구한테 빌리고, 오늘 수업 끝나고 새 빗자루 사러 가야겠다", 
        "B":' "빗자루가 부러져 버렸어.. 내가 오늘 수업을 얼마나 기대했는데ㅠㅠ" 친구들에게 이야기한다.',
        "C":' "무슨 복도를 이렇게 좁게 만들어놨어!" 화를 낸다.', 
        "D":"대강 테이프로 붙여서 가져간다. '테이프 부분을 손으로 계속 잡고 있으면 안 들킬거야~'",
        "image" : "7.jpg"},
    8 : {
        "t-number": "Q8" ,
        "t-words" : '"O.W.L"',
        "title": " 처음 치뤄본 마법사 시험은 쉽지 않았습니다. 성적표를 받아보니.. 처참하네요. 나는 마법사가 될 자격이 없는걸까 하는 생각마저 듭니다. 이런 상황에서 당신은", 
        "type1":"problem", "type2":"emotion", "type3" : "person", "type4":"hope", 
        "A":"이번 시험기간을 되돌아보며 뭐가 문제였는지 생각해보고, 다음 시험기간에 보완할 계획을 세운다.", 
        "B":"선배에게 호그와트 시험에 대한 조언을 구한다.", 
        "C":" '뭐 어쩌겠어, 이미 끝난 시험!' 신나게 퀴디치 경기를 보러 간다.", 
        "D":" '이번엔 첫 시험이라 그래~ 다음엔 잘 볼거야'라고 기대한다.",
        "image" : "8.jpg"},
    9 : {
        "t-number": "Q9" ,
        "t-words" : '"Quidditch V.S Quiz"',
        "title": " 내일 퀴디치 팀 입단테스트가 있습니다! 퀴디치 참가는 당신의 오랜 꿈이기에 매일 열심히 연습 중인데요. 그런데 '어둠의 마법 방어술' 교수님이 내일 갑자기 쪽지시험을 본다고 합니다. 연습 일정만으로도 빠듯한 상황, 이런 상황에서 당신은", 
        "type1":"problem", "type2":"emotion", "type3" : "person", "type4":"hope", 
        "A":" '음.. 어차피 날이 어두워지면 퀴디치 연습하기에 위험하니까 밤에 쪽지시험 준비를 좀 해야겠다.' 꼼꼼하게 시간 배분 계획을 짠다.", 
        "B":' "내일 퀴디치 입단테스트 있는 거 다 아시면서 갑자기 쪽지시험이라니! 교수님 정말 왜 그러시는거야?" 친구들과 불평한다.', 
        "C":' "시험 끝난 지 얼마 되지도 않았는데 갑자기 쪽지시험이라고? 진짜 짜증나!" 퀴디치 연습시간에 쿼플(퀴디치 공)에 화풀이를 한다.', 
        "D":" '수업시간에 들은 내용으로 어느 정도 될거야. 따로 준비 안 해도 괜찮아~' 퀴디치 연습에 매진한다.",
        "image" : "9.png"},
    10 : {
        "t-number": "Q10" ,
        "t-words" : '"House Score"',
        "title": " 어느덧 호그와트에서의 첫 해가 마무리되고 마지막 연회 날입니다. 올해 우리 기숙사는 열심히 점수를 모아 우승 기숙사가 되었습니다. 연회홀이 우리 기숙사 깃발로 꾸며져 있는 걸 보니 정말 뿌듯하네요! 그런데 교장 선생님이 갑자기 다른 기숙사에 500점의 보너스 점수를 주어서 우승 기숙사가 바뀌어 버립니다.. 이런 상황에서 당신은", 
        "type1":"problem", "type2":"emotion", "type3" : "person", "type4":"hope", 
        "A":' "학기 마지막날 갑자기 이러시는 건 다른 학생들이 1년동안 해 온 노력을 무시하는 겁니다! 재고해주세요!" 교장 선생님에게 적극적으로 이의를 제기한다.', 
        "B":' "이건 말이 안되잖아.." 기숙사 반장에게 어떻게든 해달라고 한다.', 
        "C":"'허 참.. 더럽다 더러워!' 기숙사 점수는 빨리 잊어버리고 연회를 즐기려고 한다.", 
        "D":" '이건 꿈일거야' 교장 선생님이 말을 번복하길 기다린다.",
        "image" : "10.jpg"},
}

var result = {
    "problem": {"character1" :' 현명하고 적극적인 ', 
    "character2" : ' "헤르미온느 그레인저" ', 
    "character3" : "-문제중심적 대처- ", 
    "explain": '"듣고 싶은 수업들 시간이 겹치네? 그럼..시간을 돌려버리면 되지!"<br>듣고 싶은 수업을 모두 듣기 위해 시간을 돌려버리는 헤르미온느처럼, 당신은 어떠한 스트레스 상황에서도 회피해버리기보다는 적극적으로 문제 상황 자체를 변화시키려 노력합니다.<br> 문제해결을 위해 계획을 세우고 이를 실천해 나가죠, 헤르미온느가 이후 훌륭한 마법사로 성장해 해결사 역할을 톡톡히 해내듯, 당신은 스트레스 상황들을 지혜롭게 헤쳐나갈 수 있는 역량을 가지고 있습니다. ', 
    "stress_explain1" : "스트레스 대처유형이란?",
    "stress_explain2" : "사람들은 스트레스를 받을 때 저마다의 방법으로 대처합니다. 스트레스 대처유형은 스트레스에 대처하려는 노력이 자신의 내부로 향하는지<br> 혹은 외부로 향하는 지에 따라 대처방식을 범주화한 심리학적 지표로, 모두 4가지의 대처유형(문제중심적 대처방식,  정서완화적 대처방식, 사회적 지지 추구 대처방식, 소망적 사고 대처방식)으로 분류됩니다.<br>스트레스를 받는 것이 언제나 무조건 나쁜 것은 아니에요. 스트레스에 어떻게 대처하는지에 따라 발전의 계기가 될 수도, 마음이 힘들어질수도 있습니다. 따라서 자신의 스트레스 대처유형을 파악하는 것은 앞으로의 스트레스에 건강하게 대처하는 데에 도움이 된답니다 :) ",
    "stress_own" : "문제중심적 대처유형은",
    "stress_own2" : "스트레스의 원인이 되는 행동 또는 환경 자체를 변화시키려 노력합니다.<br> - 문제를 해결할 수 있는 방법을 차근차근 생각하고, 구체적으로 계획을 세워 실천합니다. <br> - 상황이 나아질 수 있도록 적극적으로 여러 변화를 시도합니다. <br> - 안 좋은 상황을 오히려 성찰의 기회로 삼고 교훈을 얻습니다. ",
    "stress_own3" : " ",
    "stress_own4" : " ",
    "stress_own5" : " ",
    "stress_own6" : " ",
    "stress_own7" : " ",
    "stress_own8" : " ",

    "img" : "./image/character/헤르미온느.jpg"},
    
    "person": {"character1" :' 굳건히 신의를 지키는 ', 
    "character2" : ' "도비" ', 
    "character3" : "-사회적지지 추구- ",
    "explain": '"Dobby if Free!"<br>당신은 스트레스 상황에 처했을 때 타인의 지지를 받기 위해 노력합니다. 내 입장과 심정을 털어놓고 때로는 조언을 구하기도 하죠. 해리에게 진심으로 의지하는 도비처럼요. 그렇게 감정을 해소하고 조언에서 해결책을 찾을 수도 있지만, 혼자서 헤쳐나갈 수밖에 없는 상황이 발생하면 막막해질 수 있어요. 그런 상황에 대비해 스스로 스트레스 상황에 대처하는 것을 훈련해두면 좋아요. <br>나를 변화시킬 수 있는 힘은 내 안에 있답니다', 
    "stress_explain1" : "스트레스 대처유형이란?",
    "stress_explain2" : "사람들은 스트레스를 받을 때 저마다의 방법으로 대처합니다. 스트레스 대처유형은 스트레스에 대처하려는 노력이 자신의 내부로 향하는지<br> 혹은 외부로 향하는 지에 따라 대처방식을 범주화한 심리학적 지표로, 모두 4가지의 대처유형(문제중심적 대처방식,  정서완화적 대처방식, 사회적 지지 추구 대처방식, 소망적 사고 대처방식)으로 분류됩니다.<br>스트레스를 받는 것이 언제나 무조건 나쁜 것은 아니에요. 스트레스에 어떻게 대처하는지에 따라 발전의 계기가 될 수도, 마음이 힘들어질수도 있습니다. 따라서 자신의 스트레스 대처유형을 파악하는 것은 앞으로의 스트레스에 건강하게 대처하는 데에 도움이 된답니다 :) ",
    "stress_own" : "사회적지지 추구 대처유형은",
    "stress_own2" : "스트레스 상황이 발생하면 타인의 지지와 도움을 받고자 합니다.<br>- 내가 지금 어떤 심정인지 털어놓으며 공감받고자 합니다.<br>- 문제 해결에 도움을 줄 만한 사람을 찾아가 조언을 구합니다.",
    "stress_own3" : " ",
    "stress_own4" : " ",
    "stress_own5" : " ",
    "stress_own6" : " ",
    "stress_own7" : " ",
    "stress_own8" : " ",
    "img" : "./image/character/도비.jpg"},
    
    "emotion": {"character1" :'상처받고 싶지 않은 ',
    "character2" : ' "리머스 루핀" ', 
    "character3" : "-정서완화적 대처- ",
    "explain": '"익숙한 일이야, 그만 작별하자, 해리. 언젠간 또 만나겠지"<br>당신은 스트레스 상황에서 최대한 감정적인 타격을 받지 않기 위해 노력합니다. 참지 않고 즉각적으로 감정을 분출해버리거나, 별로 큰일이 아니라고 스스로를 위안하고 회피해버리기도 하죠. 루핀 교수가 \'익숙한 일\'이라며 타의로 쫓겨나기 전 제발로 호그와트를 나간 것처럼요. <br>이러한 스트레스 대처는 마음을 편안하게 해줄 수 있습니다. 하지만 문제상황 자체를 바꾸기 위해 행동하지 않으면 그 편안한 마음은 잠시, 같은 상황이 또 찾아올 수 있다는 것을 유의해야 합니다. 마음이 조금 차분해졌을 때 스트레스 상황을 돌아보고 그 상황을 타개할 수 있는 작은 행동이라도 도전해보는 것은 어떨까요?', 
    "stress_explain1" : "스트레스 대처유형이란?",
    "stress_explain2" : "사람들은 스트레스를 받을 때 저마다의 방법으로 대처합니다. 스트레스 대처유형은 스트레스에 대처하려는 노력이 자신의 내부로 향하는지<br> 혹은 외부로 향하는 지에 따라 대처방식을 범주화한 심리학적 지표로, 모두 4가지의 대처유형(문제중심적 대처방식,  정서완화적 대처방식, 사회적 지지 추구 대처방식, 소망적 사고 대처방식)으로 분류됩니다.<br>스트레스를 받는 것이 언제나 무조건 나쁜 것은 아니에요. 스트레스에 어떻게 대처하는지에 따라 발전의 계기가 될 수도, 마음이 힘들어질수도 있습니다. 따라서 자신의 스트레스 대처유형을 파악하는 것은 앞으로의 스트레스에 건강하게 대처하는 데에 도움이 된답니다 :) ",
    "stress_own" : "정서완화적 대처유형은",
    "stress_own2" : "스트레스 상황에서 감정적인 타격을 크게 받지 않으려 노력합니다. 감정적인 타격을 완화하려는 성향은 두 가지의 상반되는 행동으로 나타납니다.<br>- 문제를 일으킨 사람이나 물건에 대해 당장 화를 냅니다. 때로는 제3자에게 분풀이를 하며 감정을 해소하기도 합니다.<br>- 상황에 대해 깊이 생각하는 것을 피하며, 별일 아닌 것처럼 행동하려 합니다. 의식적으로 현실을 잊어버리려 하거나 아예 다른 일에 몰입해 버리기도 합니다",
    "stress_own3" : " ",
    "stress_own4" : " ",
    "stress_own5" : " ",
    "stress_own6" : " ",
    "stress_own7" : " ",
    "stress_own8" : " ",
    "img" : "./image/character/리머스 루핀.jpg"},
    
    "hope": {"character1" :' 소심해 보이지만 희망을 잃지 않는 ', 
    "character2" : ' "루비우스 헤그리드" ', 
    "character3" : "-소망적 사고 대처- ",
    "explain": '"벅빅을 사형시킨대!ㅠㅠ"<br>당신은 주로 본인이 바라는 대로 상황이 바뀌기를 상상하며 스트레스 상황을 극복하고자 합니다. 스트레스 상황이 벌어지면 그 상황이 빨리 사라지거나 끝나버리기를 기다리고, 속으로 기적이 일어나길 바라기도 하죠. <br> "이 또한 지나가리라"라는 격언대로 기다림을 통해 자연히 해소되는 일들도 있지만, 하염없이 기다리는 동안 마음의 상처가 깊어지거나 많은 기회를 놓칠 수도 있다는 것을 유의해야 합니다. 해그리드가 아무리 울며 기적을 바랐어도 사형 위기에 처한 벅빅을 구할 수는 없었고, 결국 적극적으로 행동을 취한 해리, 헤르미온느, 론이 벅빅을 구할 수 있었죠. 적극적으로 행동을 취하면 생각보다 쉽게 해결되는 일들도 많답니다:) ', 
    "stress_explain1" : "스트레스 대처유형이란?",
    "stress_explain2" : "사람들은 스트레스를 받을 때 저마다의 방법으로 대처합니다. 스트레스 대처유형은 스트레스에 대처하려는 노력이 자신의 내부로 향하는지<br> 혹은 외부로 향하는 지에 따라 대처방식을 범주화한 심리학적 지표로, 모두 4가지의 대처유형(문제중심적 대처방식,  정서완화적 대처방식, 사회적 지지 추구 대처방식, 소망적 사고 대처방식)으로 분류됩니다.<br>스트레스를 받는 것이 언제나 무조건 나쁜 것은 아니에요. 스트레스에 어떻게 대처하는지에 따라 발전의 계기가 될 수도, 마음이 힘들어질수도 있습니다. 따라서 자신의 스트레스 대처유형을 파악하는 것은 앞으로의 스트레스에 건강하게 대처하는 데에 도움이 된답니다 :) ",
    "stress_own" : "소망적 사고 대처유형은",
    "stress_own2" : "내가 원하는 감정이나 결과를 ‘마음 속으로’ 바랍니다. <br> - 내게 스트레스를 주는 사람이 사라지거나 상황이 빨리 끝나버리기를 기다립니다. <br> - 상황이 저절로 자연스럽게 괜찮아졌으면 합니다. 때로는 기적을 빌기도 합니다. <br> - 이번엔 운이 나빠서 상황이 안 좋아졌지만, 이런 일이 또 벌어지진 않을 거라고 생각합니다.",
    "stress_own3" : " ",
    "stress_own4" : " ",
    "stress_own5" : " ",
    "stress_own6" : " ",
    "stress_own7" : " ",
    "stress_own8" : " ",
    "img" : "./image/character/헤그리드.jpg"},
    
    "problem & person": {"character1" :' 이 구역 로맨티스트 ', 
    "character2" : ' "세베루스 스네이프" ', 
    "character3" : "-문제 중심적 대처 + 사회적지지 추구- ",
    "explain": '"Always"<br>얄미울 정도로 해리를 괴롭히고 덤블도어를 죽이기까지 해 경악을 금치 못했던 스네이프. 하지만 알고보니 반전의 핵심이자 볼드모트를 무너뜨리는 데 크게 공헌한 인물이었죠. <br>오해와 오명을 감당하면서도 학생들을 지킨다는 목표를 달성한 스네이프처럼, 당신은 체계적으로 계획을 세워 스트레스 상황에 대처합니다. 그리고 스네이프가 릴리에 대한 한결같은 마음을 덤블도에에게 털어놓은 것처럼, 당신은 스트레스 상황 속 느끼는 심정을 친구들이나 누군가에게 털어놓으며 스트레스를 해소하기도 합니다. 다만 타인에게 과도하게 의존하게 되면 스스로 상황을 타개하는 역량을 잃을 수 있다는 점, 유의해주세요.', 
    "stress_explain1" : "스트레스 대처유형이란?",
    "stress_explain2" : "사람들은 스트레스를 받을 때 저마다의 방법으로 대처합니다. 스트레스 대처유형은 스트레스에 대처하려는 노력이 자신의 내부로 향하는지<br> 혹은 외부로 향하는 지에 따라 대처방식을 범주화한 심리학적 지표로, 모두 4가지의 대처유형(문제중심적 대처방식,  정서완화적 대처방식, 사회적 지지 추구 대처방식, 소망적 사고 대처방식)으로 분류됩니다.<br>스트레스를 받는 것이 언제나 무조건 나쁜 것은 아니에요. 스트레스에 어떻게 대처하는지에 따라 발전의 계기가 될 수도, 마음이 힘들어질수도 있습니다. 따라서 자신의 스트레스 대처유형을 파악하는 것은 앞으로의 스트레스에 건강하게 대처하는 데에 도움이 된답니다 :) ",
    "stress_own" : "문제중심적 대처유형은",
    "stress_own2" : "스트레스의 원인이 되는 행동 또는 환경 자체를 변화시키려 노력합니다.<br> - 문제를 해결할 수 있는 방법을 차근차근 생각하고, 구체적으로 계획을 세워 실천합니다. <br> - 상황이 나아질 수 있도록 적극적으로 여러 변화를 시도합니다. <br> - 안 좋은 상황을 오히려 성찰의 기회로 삼고 교훈을 얻습니다. ",
    "stress_own3" : "사회적지지 추구 대처유형은",
    "stress_own4" : "스트레스 상황이 발생하면 타인의 지지와 도움을 받고자 합니다.<br>- 내가 지금 어떤 심정인지 털어놓으며 공감받고자 합니다.<br>- 문제 해결에 도움을 줄 만한 사람을 찾아가 조언을 구합니다.",
    "stress_own5" : " ",
    "stress_own6" : " ",
    "stress_own7" : " ",
    "stress_own8" : " ",
    "img" : "./image/character/루비우스 헤그리드.jpg"},
    
    "problem & emotion": {"character1" :' 과감하고 혁신적인 ', 
    "character2" : ' "볼드모트/톰 리틀" ', 
    "character3" : "-문제 중심적 대처 + 정서완화적 대처- ",
    "explain": '"볼드모트는 내 과거이자, 현재이며, 미래다."<br>톰 리들은 죽음을 피하기 위해 자신의 영혼을 7개로 나누어 호크룩스에 봉인하고 스스로를 볼드모트라는 새로운 존재로 탈바꿈하다시피 합니다. 비틀린 방식이었지만, 불가능을 염두에 두지 않고 상황을 타개하려했죠. <br>당신도 스트레스 상황에서 쉽게 포기하지 않고 적극적으로 노력하는 사람입니다 (물론 볼드모트와 같은 방식은 아니죠!) 당신은 스트레스 상황을 마주했을 때 욱하고 감정을 표출하기도 합니다. 하지만 감정에 과도하게 휩싸이면 주변 사람들과의 오해나 다툼이 발생할 수 있으니 주의하는 것이 좋아요.', 
    "stress_explain1" : "스트레스 대처유형이란?",
    "stress_explain2" : "사람들은 스트레스를 받을 때 저마다의 방법으로 대처합니다. 스트레스 대처유형은 스트레스에 대처하려는 노력이 자신의 내부로 향하는지<br> 혹은 외부로 향하는 지에 따라 대처방식을 범주화한 심리학적 지표로, 모두 4가지의 대처유형(문제중심적 대처방식,  정서완화적 대처방식, 사회적 지지 추구 대처방식, 소망적 사고 대처방식)으로 분류됩니다.<br>스트레스를 받는 것이 언제나 무조건 나쁜 것은 아니에요. 스트레스에 어떻게 대처하는지에 따라 발전의 계기가 될 수도, 마음이 힘들어질수도 있습니다. 따라서 자신의 스트레스 대처유형을 파악하는 것은 앞으로의 스트레스에 건강하게 대처하는 데에 도움이 된답니다 :) ",
    "stress_own" : "문제중심적 대처유형은",
    "stress_own2" : "스트레스의 원인이 되는 행동 또는 환경 자체를 변화시키려 노력합니다.<br> - 문제를 해결할 수 있는 방법을 차근차근 생각하고, 구체적으로 계획을 세워 실천합니다. <br> - 상황이 나아질 수 있도록 적극적으로 여러 변화를 시도합니다. <br> - 안 좋은 상황을 오히려 성찰의 기회로 삼고 교훈을 얻습니다. ",
    "stress_own3" : "정서완화적 추구 대처유형은",
    "stress_own4" : "스트레스 상황에서 감정적인 타격을 크게 받지 않으려 노력합니다. 감정적인 타격을 완화하려는 성향은 두 가지의 상반되는 행동으로 나타납니다.<br>- 문제를 일으킨 사람이나 물건에 대해 당장 화를 냅니다. 때로는 제3자에게 분풀이를 하며 감정을 해소하기도 합니다.<br>- 상황에 대해 깊이 생각하는 것을 피하며, 별일 아닌 것처럼 행동하려 합니다. 의식적으로 현실을 잊어버리려 하거나 아예 다른 일에 몰입해 버리기도 합니다",
    "stress_own5" : " ",
    "stress_own6" : " ",
    "stress_own7" : " ",
    "stress_own8" : " ",
    "img" : "./image/character/루비우스 헤그리드.jpg"},
    
    "problem & hope": {"character1" :' 조용하게 강한 ', 
    "character2" : ' "루나 러브굿" ', 
    "character3" : "-문제중심적 대처 + 소망적 사고 대처- ",
    "explain": '“나도 어둠의 마법 방어술 배우려고! 근데 혹시 나글스 봤니? 부적으로 쫓을 수 있는데.” <br> 부적만 들고 있으면 나글스를 다 쫓아낼 수 있을 거라고 믿었던 루나처럼, 당신은 스트레스 상황에서 적극적으로 해결 방법을 찾기보다 저절로 해결될 거라 믿는 소망적 사고를 가지고 있습니다. <br> 하지만 해리포터 시리즈 후반부의 루나는 죽음을 먹는 자들과 맞서기 위해 비밀 결사 불사조 기사단에 가입하고 열심히 어둠의 마법 방어술을 배웁니다. 이런 모습은 종종 문제 상황을 적극적으로 타개하려 노력하는 당신과 닮아 있네요. 소망적 사고는 당장의 마음은 편하게 해주지만, 변화시키려는 노력이 없기에 상황은 더 악화될 확률이 높아요. 당신이 지니고 있는 추진력을 더 살려본다면 스트레스에 보다 적절히 대처할 수 있을 것입니다.', 
    "stress_explain1" : "스트레스 대처유형이란?",
    "stress_explain2" : "사람들은 스트레스를 받을 때 저마다의 방법으로 대처합니다. 스트레스 대처유형은 스트레스에 대처하려는 노력이 자신의 내부로 향하는지<br> 혹은 외부로 향하는 지에 따라 대처방식을 범주화한 심리학적 지표로, 모두 4가지의 대처유형(문제중심적 대처방식,  정서완화적 대처방식, 사회적 지지 추구 대처방식, 소망적 사고 대처방식)으로 분류됩니다.<br>스트레스를 받는 것이 언제나 무조건 나쁜 것은 아니에요. 스트레스에 어떻게 대처하는지에 따라 발전의 계기가 될 수도, 마음이 힘들어질수도 있습니다. 따라서 자신의 스트레스 대처유형을 파악하는 것은 앞으로의 스트레스에 건강하게 대처하는 데에 도움이 된답니다 :) ",
    "stress_own" : "문제중심적 대처유형은",
    "stress_own2" : "스트레스의 원인이 되는 행동 또는 환경 자체를 변화시키려 노력합니다.<br> - 문제를 해결할 수 있는 방법을 차근차근 생각하고, 구체적으로 계획을 세워 실천합니다. <br> - 상황이 나아질 수 있도록 적극적으로 여러 변화를 시도합니다. <br> - 안 좋은 상황을 오히려 성찰의 기회로 삼고 교훈을 얻습니다. ",
    "stress_own3" : "소망적 사고 대처유형은" ,
    "stress_own4" : "내가 원하는 감정이나 결과를 ‘마음 속으로’ 바랍니다. <br> - 내게 스트레스를 주는 사람이 사라지거나 상황이 빨리 끝나버리기를 기다립니다. <br> - 상황이 저절로 자연스럽게 괜찮아졌으면 합니다. 때로는 기적을 빌기도 합니다. <br> - 이번엔 운이 나빠서 상황이 안 좋아졌지만, 이런 일이 또 벌어지진 않을 거라고 생각합니다.",
    "stress_own5" : " ",
    "stress_own6" : " ",
    "stress_own7" : " ",
    "stress_own8" : " ","img" : "./image/character/루나 러브굿.jpg"},
    
    "person & emotion": {"character1" :' 본투비 슈퍼스타☆ ', 
    "character2" : ' "길더로이 록하트" ', 
    "character3" : "-정서완화적 대처 + 사회적지지 추구- ", 
    "explain": '"Obliviate"<br>당신은 스트레스 상황에 대해 아무 일 아닌 것처럼 모른 척 회피해버리거나, 스트레스를 일으키는 대상에게 분노, 실망 등의 감정을 곧바로 표출해 버립니다. <br>록하트가 비밀의 방에 갇힌 지니를 구하러 가야 하는 임무를 무시하고 도망치려 했고, 그 사실을 해리와 론에게 들키자 기억을 지워버리려고 덤빈 것처럼요. 그리고 록하트는 다른 마법사들의 공을 가로채면서까지 사람들의 시선을 받고자 하는 열망이 강한데요. 당신도 누군가에게 털어놓고 공감받으며 스트레스를 해소하는 면모가 있습니다.', 
    "stress_explain1" : "스트레스 대처유형이란?",
    "stress_explain2" : "사람들은 스트레스를 받을 때 저마다의 방법으로 대처합니다. 스트레스 대처유형은 스트레스에 대처하려는 노력이 자신의 내부로 향하는지<br> 혹은 외부로 향하는 지에 따라 대처방식을 범주화한 심리학적 지표로, 모두 4가지의 대처유형(문제중심적 대처방식,  정서완화적 대처방식, 사회적 지지 추구 대처방식, 소망적 사고 대처방식)으로 분류됩니다.<br>스트레스를 받는 것이 언제나 무조건 나쁜 것은 아니에요. 스트레스에 어떻게 대처하는지에 따라 발전의 계기가 될 수도, 마음이 힘들어질수도 있습니다. 따라서 자신의 스트레스 대처유형을 파악하는 것은 앞으로의 스트레스에 건강하게 대처하는 데에 도움이 된답니다 :) ",
    "stress_own" : "정서완화적 대처유형은",
    "stress_own2" : "스트레스 상황에서 감정적인 타격을 크게 받지 않으려 노력합니다. 감정적인 타격을 완화하려는 성향은 두 가지의 상반되는 행동으로 나타납니다.<br>- 문제를 일으킨 사람이나 물건에 대해 당장 화를 냅니다. 때로는 제3자에게 분풀이를 하며 감정을 해소하기도 합니다.<br>- 상황에 대해 깊이 생각하는 것을 피하며, 별일 아닌 것처럼 행동하려 합니다. 의식적으로 현실을 잊어버리려 하거나 아예 다른 일에 몰입해 버리기도 합니다",
    "stress_own3" : "사회적지지 추구 대처유형은",
    "stress_own4" : "스트레스 상황이 발생하면 타인의 지지와 도움을 받고자 합니다.<br>- 내가 지금 어떤 심정인지 털어놓으며 공감받고자 합니다.<br>- 문제 해결에 도움을 줄 만한 사람을 찾아가 조언을 구합니다.",
    "stress_own5" : " ",
    "stress_own6" : " ",
    "stress_own7" : " ",
    "stress_own8" : " ",
    "img" : "./image/character/길더로이 록하트.jpg"},
    
    "person & hope": {"character1" :' 5년의 짝사랑, 성공적 ', 
    "character2" : "지니 위즐리", 
    "character3" : "-사회적 지지 추구 + 소망적 사고 대처- ", 
    "explain": '"착하고 용감하고 멋진 해리 포터는 나에게 관심이 없어"<br>당신은 심정을 누군가에게 털어놓으며 스트레스를 해소하거나, 안 좋은 상황이 빨리 끝나길 가만히 기다리곤 합니다. 지니가 톰 리들의 일기장에 자신의 이야기를 모두 털어놓은 것처럼요. 하지만 지니는 톰 리들의 일기장에 마음을 너무 깊이 준 나머지 조종당하게 되죠. <br>누군가에게 마음을 털어놓으며 해소하는 것은 좋지만, 과도하게 의지하게 되면 스스로 상황을 타개할 역량을 잃을 수 있는 것을 주의해야 해요.그리고 지니는 해리를 좋아했지만 무려 5년간 바라보기만 하며 짝사랑을 했습니다. 그 짝사랑을 끝낼 수 있었던 건, 보다 적극적인 ‘행동’이었죠. <br>마음으로 간절히 바라온 것을 행동으로 한 번 이어가 보는 것은 어떨까요', 
    "stress_explain1" : "스트레스 대처유형이란?",
    "stress_explain2" : "사람들은 스트레스를 받을 때 저마다의 방법으로 대처합니다. 스트레스 대처유형은 스트레스에 대처하려는 노력이 자신의 내부로 향하는지<br> 혹은 외부로 향하는 지에 따라 대처방식을 범주화한 심리학적 지표로, 모두 4가지의 대처유형(문제중심적 대처방식,  정서완화적 대처방식, 사회적 지지 추구 대처방식, 소망적 사고 대처방식)으로 분류됩니다.<br>스트레스를 받는 것이 언제나 무조건 나쁜 것은 아니에요. 스트레스에 어떻게 대처하는지에 따라 발전의 계기가 될 수도, 마음이 힘들어질수도 있습니다. 따라서 자신의 스트레스 대처유형을 파악하는 것은 앞으로의 스트레스에 건강하게 대처하는 데에 도움이 된답니다 :) ",
    "stress_own" : "사회적지지 추구 대처유형은",
    "stress_own2" : "스트레스 상황이 발생하면 타인의 지지와 도움을 받고자 합니다.<br>- 내가 지금 어떤 심정인지 털어놓으며 공감받고자 합니다.<br>- 문제 해결에 도움을 줄 만한 사람을 찾아가 조언을 구합니다.",
    "stress_own3" : "소망적 사고 대처유형은" ,
    "stress_own4" : "내가 원하는 감정이나 결과를 ‘마음 속으로’ 바랍니다. <br> - 내게 스트레스를 주는 사람이 사라지거나 상황이 빨리 끝나버리기를 기다립니다. <br> - 상황이 저절로 자연스럽게 괜찮아졌으면 합니다. 때로는 기적을 빌기도 합니다. <br> - 이번엔 운이 나빠서 상황이 안 좋아졌지만, 이런 일이 또 벌어지진 않을 거라고 생각합니다.",
    "stress_own5" : " ",
    "stress_own6" : " ",
    "stress_own7" : " ",
    "stress_own8" : " ",
    "img" : "./image/character/지니 위즐리.jpg"},
    
    "emotion & hope": {"character1" :' 밝고 우아하지만 내면에 고민이 많은 ', 
    "character2" : "초 챙", 
    "character3" : "-정서완화적 대처 + 소망적 사고 대처- ",
    "explain": '"..."<br>당신은 스트레스 상황에 대해 가감없이 감정을 표출하기도 하지만 때로는 상황을 회피하며 저절로 나아지길 기다리기도 합니다. 헤르미온느에 대한 질투심을 숨기지 않고 해리와 말다툼을 벌였지만, 나중에 해리와 관계가 틀어진 이후에는 마주쳐도 그저 자리를 피해버린 초 처럼요.<br>하지만 정작 해리와 직면하고 나니 관계가 쉽게 풀어질 수 있었죠. 스트레스 상황에서도 마찬가지예요. 막막해 보여 회피하던 상황이더라도, 정작 직면하고 보면 쉽게 풀어지는 경우가 많답니다.', 
    "stress_explain1" : "스트레스 대처유형이란?",
    "stress_explain2" : "사람들은 스트레스를 받을 때 저마다의 방법으로 대처합니다. 스트레스 대처유형은 스트레스에 대처하려는 노력이 자신의 내부로 향하는지<br> 혹은 외부로 향하는 지에 따라 대처방식을 범주화한 심리학적 지표로, 모두 4가지의 대처유형(문제중심적 대처방식,  정서완화적 대처방식, 사회적 지지 추구 대처방식, 소망적 사고 대처방식)으로 분류됩니다.<br>스트레스를 받는 것이 언제나 무조건 나쁜 것은 아니에요. 스트레스에 어떻게 대처하는지에 따라 발전의 계기가 될 수도, 마음이 힘들어질수도 있습니다. 따라서 자신의 스트레스 대처유형을 파악하는 것은 앞으로의 스트레스에 건강하게 대처하는 데에 도움이 된답니다 :) ",
    "stress_own" : "정서완화적 대처유형은",
    "stress_own2" : "스트레스 상황에서 감정적인 타격을 크게 받지 않으려 노력합니다. 감정적인 타격을 완화하려는 성향은 두 가지의 상반되는 행동으로 나타납니다.<br>- 문제를 일으킨 사람이나 물건에 대해 당장 화를 냅니다. 때로는 제3자에게 분풀이를 하며 감정을 해소하기도 합니다.<br>- 상황에 대해 깊이 생각하는 것을 피하며, 별일 아닌 것처럼 행동하려 합니다. 의식적으로 현실을 잊어버리려 하거나 아예 다른 일에 몰입해 버리기도 합니다",
    "stress_own3" : "소망적 사고 대처유형은" ,
    "stress_own4" : "내가 원하는 감정이나 결과를 ‘마음 속으로’ 바랍니다. <br> - 내게 스트레스를 주는 사람이 사라지거나 상황이 빨리 끝나버리기를 기다립니다. <br> - 상황이 저절로 자연스럽게 괜찮아졌으면 합니다. 때로는 기적을 빌기도 합니다. <br> - 이번엔 운이 나빠서 상황이 안 좋아졌지만, 이런 일이 또 벌어지진 않을 거라고 생각합니다.",
    "stress_own5" : " ",
    "stress_own6" : " ",
    "stress_own7" : " ",
    "stress_own8" : " ",
    "img" : "./image/character/초 챙.jpg"},
    
    "problem & person & emotion": {"character1" :'솔직하고 대담한 ', 
    "character2" : "론 위즐리", 
    "character3" : "-문제중심적 대처 + 사회적지지 추구 + 정서완화적 대처- ", 
    "explain": '"Bloody Hell!"<br>해리포터 시리즈에서 론만큼 감정에 솔직한 캐릭터가 있을까요? <br>론은 다른 사람의 시선을 신경쓰지 않고 자신의 감정에 솔직합니다. 이런 론처럼 당신도 스트레스 상황에 대해 감정을 솔직하게 분출하는 편이네요. 다만 감정에 너무 휩쓸리면 주변 사람들과의 관계가 틀어지거나 오해가 생길 수 있으니 조심해야 합니다. 론이 해리에 대한 열등감에 휩싸여 헤르미온느와 해리를 오해하고 다투게 된 것처럼요. <br>당신은 종종 누군가에게 이야기를 털어놓거나 도움을 받기도 하기에 관계 악화를 더욱 주의해야겠죠.대담하게 아빠의 하늘을 나는 자동차를 몰고 해리를 구출해낸 론과 같이, 문제를 해결하려 적극적으로 행동하는 면모도 가지고 있네요!', 
    "stress_explain1" : "스트레스 대처유형이란?",
    "stress_explain2" : "사람들은 스트레스를 받을 때 저마다의 방법으로 대처합니다. 스트레스 대처유형은 스트레스에 대처하려는 노력이 자신의 내부로 향하는지<br> 혹은 외부로 향하는 지에 따라 대처방식을 범주화한 심리학적 지표로, 모두 4가지의 대처유형(문제중심적 대처방식,  정서완화적 대처방식, 사회적 지지 추구 대처방식, 소망적 사고 대처방식)으로 분류됩니다.<br>스트레스를 받는 것이 언제나 무조건 나쁜 것은 아니에요. 스트레스에 어떻게 대처하는지에 따라 발전의 계기가 될 수도, 마음이 힘들어질수도 있습니다. 따라서 자신의 스트레스 대처유형을 파악하는 것은 앞으로의 스트레스에 건강하게 대처하는 데에 도움이 된답니다 :) ",
    "stress_own" : "문제중심적 대처유형은",
    "stress_own2" : "스트레스의 원인이 되는 행동 또는 환경 자체를 변화시키려 노력합니다.<br> - 문제를 해결할 수 있는 방법을 차근차근 생각하고, 구체적으로 계획을 세워 실천합니다. <br> - 상황이 나아질 수 있도록 적극적으로 여러 변화를 시도합니다. <br> - 안 좋은 상황을 오히려 성찰의 기회로 삼고 교훈을 얻습니다. ",
    "stress_own3" : "정서완화적 대처유형은",
    "stress_own4" : "스트레스 상황에서 감정적인 타격을 크게 받지 않으려 노력합니다. 감정적인 타격을 완화하려는 성향은 두 가지의 상반되는 행동으로 나타납니다.<br>- 문제를 일으킨 사람이나 물건에 대해 당장 화를 냅니다. 때로는 제3자에게 분풀이를 하며 감정을 해소하기도 합니다.<br>- 상황에 대해 깊이 생각하는 것을 피하며, 별일 아닌 것처럼 행동하려 합니다. 의식적으로 현실을 잊어버리려 하거나 아예 다른 일에 몰입해 버리기도 합니다",
    "stress_own5" : "사회적지지 추구 대처유형은",
    "stress_own6" : "스트레스 상황이 발생하면 타인의 지지와 도움을 받고자 합니다.<br>- 내가 지금 어떤 심정인지 털어놓으며 공감받고자 합니다.<br>- 문제 해결에 도움을 줄 만한 사람을 찾아가 조언을 구합니다.",
    "stress_own7" : " ",
    "stress_own8" : " ",
    "img" : "./image/character/론 위즐리.jpg"},
    
    "problem & person & hope": {"character1" :' 이상적이고 지혜로운 ', 
    "character2" : "알버스 덤블도어", 
    "character3" : "-문제중심적 대처 + 사회적지지 추구 + 소망적 사고 대처- ", 
    "explain": '"꿈에 사로잡혀 살다가 진짜 삶을 놓쳐선 안돼"<br>덤블도어는 뛰어난 통찰력과 지혜를 바탕으로 해리포터 시리즈의 빅픽쳐를 그렸다고 해도 과언이 아닙니다. 이는 체계적으로 문제상황을 분석하고 해결방법을 적극적으로 실천하는 당신과 닮은 면모입니다. <br>하지만 아무리 덤블도어라도 모든 상황을 혼자서 해결할 수는 없죠. 불의 잔에서 해리의 이름이 나오자 혼란스러워하며 매드아이 무디에게 해리를 돌봐줄 것을 부탁하는데요. 이처럼 당신도 종종 누군가에게 심정을 털어놓거나 조언을 구하며 스트레스를 해소하려 노력합니다. 그리고 덤블도어에게는 아픈 과거가 있습니다. 자신의 꿈을 접고 동생들을 돌봐야 했는데, 이때는 부모님이 살아 돌아와 자기 대신 동생들을 책임져주길 바라며 살기도 했습니다. <br>당신은 과거 덤블도어의 모습도 일면 가지고 있어, 때때로 기적을 바라며 상황이 나아지길 바라기도 하네요.', 
    "stress_explain1" : "스트레스 대처유형이란?",
    "stress_explain2" : "사람들은 스트레스를 받을 때 저마다의 방법으로 대처합니다. 스트레스 대처유형은 스트레스에 대처하려는 노력이 자신의 내부로 향하는지<br> 혹은 외부로 향하는 지에 따라 대처방식을 범주화한 심리학적 지표로, 모두 4가지의 대처유형(문제중심적 대처방식,  정서완화적 대처방식, 사회적 지지 추구 대처방식, 소망적 사고 대처방식)으로 분류됩니다.<br>스트레스를 받는 것이 언제나 무조건 나쁜 것은 아니에요. 스트레스에 어떻게 대처하는지에 따라 발전의 계기가 될 수도, 마음이 힘들어질수도 있습니다. 따라서 자신의 스트레스 대처유형을 파악하는 것은 앞으로의 스트레스에 건강하게 대처하는 데에 도움이 된답니다 :) ",
    "stress_own" : "문제중심적 대처유형은",
    "stress_own2" : "스트레스의 원인이 되는 행동 또는 환경 자체를 변화시키려 노력합니다.<br> - 문제를 해결할 수 있는 방법을 차근차근 생각하고, 구체적으로 계획을 세워 실천합니다. <br> - 상황이 나아질 수 있도록 적극적으로 여러 변화를 시도합니다. <br> - 안 좋은 상황을 오히려 성찰의 기회로 삼고 교훈을 얻습니다. ",
    "stress_own3" : "소망적 사고 대처유형은",
    "stress_own4" : "내가 원하는 감정이나 결과를 ‘마음 속으로’ 바랍니다. <br> - 내게 스트레스를 주는 사람이 사라지거나 상황이 빨리 끝나버리기를 기다립니다. <br> - 상황이 저절로 자연스럽게 괜찮아졌으면 합니다. 때로는 기적을 빌기도 합니다. <br> - 이번엔 운이 나빠서 상황이 안 좋아졌지만, 이런 일이 또 벌어지진 않을 거라고 생각합니다.",
    "stress_own5" : "사회적지지 추구 대처유형은",
    "stress_own6" : "스트레스 상황이 발생하면 타인의 지지와 도움을 받고자 합니다.<br>- 내가 지금 어떤 심정인지 털어놓으며 공감받고자 합니다.<br>- 문제 해결에 도움을 줄 만한 사람을 찾아가 조언을 구합니다.",
    "stress_own7" : " ",
    "stress_own8" : " ",
    "img" : "./image/character/알버스 덤블도어.jpg"},
    
    "problem & emotion & hope": {"character1" :' 현명하고 적극적인 ', 
    "character2" : "네빌 롱바텀", 
    "character3" : "-문제중심적 대처 + 정서완화적 대처 + 소망적 사고 대처- ", 
    "explain": '"덤블도어의 군대여!"<br>해리포터 첫 편을 봤을 때 네빌이 이렇게 용감하게 성장할 줄은 아무도 몰랐을 거예요. 네빌은 위험한 사건이 발생하면 부적을 지니고 있으면서 괜찮을 거라고 스스로를 위안하는 등 소극적인 모습을 보였죠.<br> <br>당신도 스트레스 상황이 발생했을 때 \‘상황이 어서 끝났으면..\’하고 소극적으로 기다리는 면모가 있습니다. 하지만 항상 소극적인 건 아니죠. 선을 넘는 말포이에서 시원하게 화를 내는 네빌처럼, 감정을 분출하며 스트레스에 대처하기도 합니다. 그리고 내기니를 멋지게 처치해낸 네빌처럼, 스트레스 상황을 타개하려 종종 적극적인 행동도 취하네요!', 
    "stress_explain1" : "스트레스 대처유형이란?",
    "stress_explain2" : "사람들은 스트레스를 받을 때 저마다의 방법으로 대처합니다. 스트레스 대처유형은 스트레스에 대처하려는 노력이 자신의 내부로 향하는지<br> 혹은 외부로 향하는 지에 따라 대처방식을 범주화한 심리학적 지표로, 모두 4가지의 대처유형(문제중심적 대처방식,  정서완화적 대처방식, 사회적 지지 추구 대처방식, 소망적 사고 대처방식)으로 분류됩니다.<br>스트레스를 받는 것이 언제나 무조건 나쁜 것은 아니에요. 스트레스에 어떻게 대처하는지에 따라 발전의 계기가 될 수도, 마음이 힘들어질수도 있습니다. 따라서 자신의 스트레스 대처유형을 파악하는 것은 앞으로의 스트레스에 건강하게 대처하는 데에 도움이 된답니다 :) ",
    "stress_own" : "문제중심적 대처유형은",
    "stress_own2" : "스트레스의 원인이 되는 행동 또는 환경 자체를 변화시키려 노력합니다.<br> - 문제를 해결할 수 있는 방법을 차근차근 생각하고, 구체적으로 계획을 세워 실천합니다. <br> - 상황이 나아질 수 있도록 적극적으로 여러 변화를 시도합니다. <br> - 안 좋은 상황을 오히려 성찰의 기회로 삼고 교훈을 얻습니다. ",
    "stress_own3" : "정서완화적 대처유형은",
    "stress_own4" : "스트레스 상황에서 감정적인 타격을 크게 받지 않으려 노력합니다. 감정적인 타격을 완화하려는 성향은 두 가지의 상반되는 행동으로 나타납니다.<br>- 문제를 일으킨 사람이나 물건에 대해 당장 화를 냅니다. 때로는 제3자에게 분풀이를 하며 감정을 해소하기도 합니다.<br>- 상황에 대해 깊이 생각하는 것을 피하며, 별일 아닌 것처럼 행동하려 합니다. 의식적으로 현실을 잊어버리려 하거나 아예 다른 일에 몰입해 버리기도 합니다",
    "stress_own5" : "소망적 사고 대처유형은",
    "stress_own6" : "내가 원하는 감정이나 결과를 ‘마음 속으로’ 바랍니다. <br> - 내게 스트레스를 주는 사람이 사라지거나 상황이 빨리 끝나버리기를 기다립니다. <br> - 상황이 저절로 자연스럽게 괜찮아졌으면 합니다. 때로는 기적을 빌기도 합니다. <br> - 이번엔 운이 나빠서 상황이 안 좋아졌지만, 이런 일이 또 벌어지진 않을 거라고 생각합니다.",
    "stress_own7" : " ",
    "stress_own8" : " ",
    "img" : "./image/character/네빌 롱바텀.jpg"},
    
    "person & emotion & hope": {"character1" :' 현명하고 적극적인 ', 
    "character2" : "드레이코 말포이", 
    "character3" : "-사회적지지 추구 대처 + 정서완화적 대처 + 소망적 사고 대처- ", 
    "explain": '"나는 잡종과 달라! 죽음을 먹는 자들 편에 서서 우리 가족을 살릴거야!”<br>말포이는 해리 일행에게 지고 나면 분을 이기지 못하고 심하게 모욕을 주거나 다른 곳에 분풀이를 하기도 합니다. 말포이처럼 극단적인 방식은 아니지만, 당신은 스트레스를 받을 때 감정을 곧장 분출하며 스트레스를 해소합니다. 스트레스 받는 심정을 누군가에게 털어놓기도 합니다. 감정 분출이 과도하게 되면 말포이처럼 주변 사람들과 사이가 틀어질 수 있는 것을 유의해야 합니다. 그리고 타인에 대한 의존도가 너무 높아지면 피치 못하게 혼자서 헤쳐나가야 하는 상황이 생겼을 때 막막할 수 있으니 스스로 생각을 가다듬는 연습을 해보는 것이 좋아요. <br> 그리고 말포이는 볼드모트의 명령을 두려워하면서도 ‘운명’이라며 따르고자 하는데요. 이는 당신이 ‘어쩔 수 없어, 곧 지나가겠지’하며 스트레스 상황에 종종 순응하는 모습과 닮아 있습니다. 하지만 행동을 취하지 않으면 상황은 변하지 않을 확률이 높아요. 용기를 가지고 작은 행동이라도 취해보길 추천합니다!', 
    "stress_explain1" : "스트레스 대처유형이란?",
    "stress_explain2" : "사람들은 스트레스를 받을 때 저마다의 방법으로 대처합니다. 스트레스 대처유형은 스트레스에 대처하려는 노력이 자신의 내부로 향하는지<br> 혹은 외부로 향하는 지에 따라 대처방식을 범주화한 심리학적 지표로, 모두 4가지의 대처유형(문제중심적 대처방식,  정서완화적 대처방식, 사회적 지지 추구 대처방식, 소망적 사고 대처방식)으로 분류됩니다.<br>스트레스를 받는 것이 언제나 무조건 나쁜 것은 아니에요. 스트레스에 어떻게 대처하는지에 따라 발전의 계기가 될 수도, 마음이 힘들어질수도 있습니다. 따라서 자신의 스트레스 대처유형을 파악하는 것은 앞으로의 스트레스에 건강하게 대처하는 데에 도움이 된답니다 :) ",
    "stress_own" : "사회적지지 추구 대처유형은",
    "stress_own2" : "스트레스 상황이 발생하면 타인의 지지와 도움을 받고자 합니다.<br>- 내가 지금 어떤 심정인지 털어놓으며 공감받고자 합니다.<br>- 문제 해결에 도움을 줄 만한 사람을 찾아가 조언을 구합니다.",
    "stress_own3" : "정서완화적 대처유형은",
    "stress_own4" : "스트레스 상황에서 감정적인 타격을 크게 받지 않으려 노력합니다. 감정적인 타격을 완화하려는 성향은 두 가지의 상반되는 행동으로 나타납니다.<br>- 문제를 일으킨 사람이나 물건에 대해 당장 화를 냅니다. 때로는 제3자에게 분풀이를 하며 감정을 해소하기도 합니다.<br>- 상황에 대해 깊이 생각하는 것을 피하며, 별일 아닌 것처럼 행동하려 합니다. 의식적으로 현실을 잊어버리려 하거나 아예 다른 일에 몰입해 버리기도 합니다",
    "stress_own5" : "소망적 사고 대처유형은",
    "stress_own6" : "내가 원하는 감정이나 결과를 ‘마음 속으로’ 바랍니다. <br> - 내게 스트레스를 주는 사람이 사라지거나 상황이 빨리 끝나버리기를 기다립니다. <br> - 상황이 저절로 자연스럽게 괜찮아졌으면 합니다. 때로는 기적을 빌기도 합니다. <br> - 이번엔 운이 나빠서 상황이 안 좋아졌지만, 이런 일이 또 벌어지진 않을 거라고 생각합니다.",
    "stress_own7" : " ",
    "stress_own8" : " ",
    "img" : "./image/character/드레이코 말포이.jpg"},
    
    "all": {"character1" :' 용감하고 입체적인 ', 
    "character2" : "해리포터", 
    "character3" : "-문제중심적 대처 + 정서완화적 대처 + <br> + 사회적지지 추구 + 소망적 사고 대처- ",
    "explain": '"안 그런가, 리들?"<br>당신은 다양한 방식으로 스트레스에 대처하는 편입니다.<br>호그와트 입학 전의 해리는 더즐리 가족의 괴롭힘에도 반항하지 않고 그저 묵묵히 순응하는데요, 이는 스트레스 상황이 저절로 빨리 끝나버리길 기다리는 당신의 모습과 비슷합니다.<br> <br> 그리고 마법사 세계에 대해 아무것도 모르던 해리가 9와 3/4 <br>승강장을 찾지 못해 위즐리 가족에게 도움을 청한 것처럼, <br>당신도 종종 스트레스 상황에 대한 조언을 구하거나 심정을 <br>털어놓곤 합니다. 때로는 스트레스를 주는 사람이나 물건에<br> 대해 참지 않고 화를 내기도 해요. 시리우스의 죽음을 겪은 해리가 슬픔과 분노에 덤블도어 사무실 비품들을 때려부순 것처럼, 다른 대상에 분풀이를 하기도 하구요. <br> <br>그리고 수많은 모험과 시련을 망설임 없이 용감하게 이겨 내는 해리와 같이, 문제를 해결하려 적극적으로 행동하는 추진력도 가지고 있습니다.', 
    "stress_explain1" : "스트레스 대처유형이란?",
    "stress_explain2" : "사람들은 스트레스를 받을 때 저마다의 방법으로 대처합니다. 스트레스 대처유형은 스트레스에 대처하려는 노력이 자신의 내부로 향하는지<br> 혹은 외부로 향하는 지에 따라 대처방식을 범주화한 심리학적 지표로, 모두 4가지의 대처유형(문제중심적 대처방식,  정서완화적 대처방식, 사회적 지지 추구 대처방식, 소망적 사고 대처방식)으로 분류됩니다.<br>스트레스를 받는 것이 언제나 무조건 나쁜 것은 아니에요. 스트레스에 어떻게 대처하는지에 따라 발전의 계기가 될 수도, 마음이 힘들어질수도 있습니다. 따라서 자신의 스트레스 대처유형을 파악하는 것은 앞으로의 스트레스에 건강하게 대처하는 데에 도움이 된답니다 :) ",
    "stress_own" : "문제중심적 대처유형은",
    "stress_own2" : "내가 원하는 감정이나 결과를 ‘마음 속으로’ 바랍니다. <br> - 내게 스트레스를 주는 사람이 사라지거나 상황이 빨리 끝나버리기를 기다립니다. <br> - 상황이 저절로 자연스럽게 괜찮아졌으면 합니다. 때로는 기적을 빌기도 합니다. <br> - 이번엔 운이 나빠서 상황이 안 좋아졌지만, 이런 일이 또 벌어지진 않을 거라고 생각합니다.",
    "stress_own3" : "사회적지지 추구 대처유형은",
    "stress_own4" : "스트레스 상황이 발생하면 타인의 지지와 도움을 받고자 합니다.<br>- 내가 지금 어떤 심정인지 털어놓으며 공감받고자 합니다.<br>- 문제 해결에 도움을 줄 만한 사람을 찾아가 조언을 구합니다.",
    "stress_own5" : "정서완화적 대처유형은",
    "stress_own6" : "스트레스 상황에서 감정적인 타격을 크게 받지 않으려 노력합니다. 감정적인 타격을 완화하려는 성향은 두 가지의 상반되는 행동으로 나타납니다.<br>- 문제를 일으킨 사람이나 물건에 대해 당장 화를 냅니다. 때로는 제3자에게 분풀이를 하며 감정을 해소하기도 합니다.<br>- 상황에 대해 깊이 생각하는 것을 피하며, 별일 아닌 것처럼 행동하려 합니다. 의식적으로 현실을 잊어버리려 하거나 아예 다른 일에 몰입해 버리기도 합니다",
    "stress_own7" : "소망적 사고 대처유형은",
    "stress_own8" : "내가 원하는 감정이나 결과를 ‘마음 속으로’ 바랍니다. <br> - 내게 스트레스를 주는 사람이 사라지거나 상황이 빨리 끝나버리기를 기다립니다. <br> - 상황이 저절로 자연스럽게 괜찮아졌으면 합니다. 때로는 기적을 빌기도 합니다. <br> - 이번엔 운이 나빠서 상황이 안 좋아졌지만, 이런 일이 또 벌어지진 않을 거라고 생각합니다.",
    "img" : "./image/character/해리포터.jpg"},

}