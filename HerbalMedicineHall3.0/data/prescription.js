const prescription_data = [{
	"name":"解表剂",
	"num":14,
	"intro":"解表剂(prescriptions for relieving Exterior Disorder)，以辛散轻扬的解表药为主组成的方剂的统称。有发汗解肌、疏散表邪及解表透疹、解表消疮、宣肺通窍、疏风明目等作用。主治各种表证以及表邪外束，麻疹不透；疮疡初起，兼有表证；风热上攻，目赤翳障等证。",
	"matters":"使用解表剂要根据季节的变化恰当掌握用量。服药后宜避风寒或加衣加被保暖助汗，以全身微汗出为佳，切不可大汗淋漓，以防耗伤气阴，甚则出现伤阴亡阳的危重证候。服用解表剂时，饮食宜清淡素食为主。用治疮疡初起、麻疹不透时，忌食鱼、虾、蟹等腥膻发物。解表药物辛散质轻，不宜久煎。",
	"content":[
		{"name":"麻黄汤","yuan":"《伤寒论：辨太阳病脉证并治中》","zu":" 麻黄（9克） 桂枝（6克） 杏仁（6克） 甘草（3克）","xiao":"发汗解表，宣肺平喘。","zhi":"外感风寒。恶寒发热，头痛身疼，无汗而喘，舌苔薄白，脉浮紧。（本方常用于感冒、流行性感冒、急性支气管炎、支气管哮喘等属风寒表实证者。）"},
		{"name":"桂枝汤","yuan":"《伤寒论》","zu":"桂枝(去皮）（9克） 芍药（9克） 生姜（9克） 大枣（切）（3枚） 甘草（6克）","xiao":"解肌发表，调和营卫。","zhi":"外感风寒表虚证。头痛发热，汗出恶风，鼻鸣干呕，苔白不渴，脉浮缓或浮弱者。本方不单可用于外感风寒的表虚证，对病后、产后、体弱而致营卫不和。证见时发热自汗出，兼有微恶风寒等，都可酌情使用。（本方常用于感冒、流行性感冒、原因不明的低热、产后及病后的低热、妊娠呕吐、多形红斑、冻疮、荨（qian）麻疹等属营卫不和者。）"},
		{"name":"麻黄桂枝各半汤","yuan":"《奇效良方》","zu":"麻黄（去根节）、桂枝、芍药，各二钱半。甘草（炙.二钱），杏仁（去皮尖.十个）。","xiao":"伤寒通治。","zhi":"太阳病，外感风寒，多日不解，症如疟状，发热恶寒，热多寒少；荨麻疹表寒无汗者"},
		{"name":"葛根汤","yuan":"《医学心悟》卷二","zu":"葛根6克 升麻 秦艽 荆芥 赤芍各3克 苏叶 白芷各2.4克 甘草1.5克 生姜2片","xiao":"发汗解肌。","zhi":"阳明经病，目痛，鼻干，唇焦，漱水不欲咽，脉长。"},
		{"name":"瓜蒌桂枝汤","yuan":"《金匮要略》","zu":"瓜蒌根 桂枝 芍药 甘草 生姜 大枣","xiao":"调和营卫，柔润筋脉","zhi":"柔痉，感受风湿，身热汗出，颈项强急"},
		{"name":"荆防败毒散","yuan":"《摄生众妙方》","zu":"荆芥、防风、羌活、独活、川芎、柴胡、前胡、桔梗、枳壳、茯苓各30克、甘草15克。","xiao":"发散风寒，解表祛湿：用于“流感”、感冒等病证初起，出现恶寒、发热、无汗、剧烈头痛、肌肉关节酸痛，舌苔白腻，脉浮或浮数者。本方亦可用于痢疾、疮痈初起而有表寒证者。","zhi":"便毒，初起之时，寒热交作，两腿牵绊肿起，不能屈伸。"},
		{"name":"香苏散","yuan":"《世医得效方》卷一","zu":"香附150克(炒去毛) 紫苏(去根)75克陈皮60克 甘草60克 苍术60克(切片，米泔浸，炒黄)","xiao":"理气解表","zhi":"外感风寒，内有气滞，形寒身热，头痛无汗，胸脘痞闷，不思饮食，舌苔薄白。"},
		{"name":"九味羌活汤","yuan":"《此事难知》","zu":"羌活（9克） 防风（9克） 苍术（9克） 细辛（3克） 川芎（6克） 白芷（6克） 生地（6克） 黄芩（6克） 甘草（6克）","xiao":"发汗祛湿，兼清里热。","zhi":"外感风寒湿邪，内有蕴热证。恶寒发热，无汗，头痛项强，肢体酸楚疼痛，口苦微渴，舌苔白或微黄，脉浮。（本方常用于感冒、风湿性关节炎、偏头痛、腰肌劳损等属外感风寒湿邪，兼有里热者。）"},
		{"name":"葱豉汤","yuan":"《类证活人书》卷十九","zu":"葱白3枚 豉6克","xiao":"通阳发汗。主外感初起，恶寒发热，无汗，头痛鼻塞者。","zhi":"外感轻症，恶寒发热无汗，头痛鼻塞；风寒闭肺，小儿喘嗽"},
		{"name":"三拗汤","yuan":"《太平惠民和剂局方》卷二","zu":"麻黄（不去根节），杏仁（不去皮尖），甘草（不炙），各等分（30克）。　","xiao":"宣肺解表，止咳平喘。","zhi":"外感风寒，肺气不宣证，症见鼻塞声重，语言不出，或伤风受寒，头痛目眩，四肢拘急，咳嗽痰多，胸闷气促，无汗，口不渴，苔白，脉浮。"},
		{"name":"金沸草散","yuan":"《类证活人书》卷十七","zu":"前胡90克 荆芥120克 半夏30克(净洗，姜汁浸) 赤芍药60克 细辛30克 甘草(炙)30克 旋复花90克","xiao":"解表散寒，降气化痰","zhi":"外感风寒，恶寒发热，头目昏痛，颈项强急，肢体烦疼，胸膈满闷，咳嗽喘满，痰涎不利，涕唾稠粘。　"},
		{"name":"华盖散","yuan":"《圣济总录》卷五十","zu":"赤茯苓(去黑皮) 甜葶苈(隔纸炒) 桑根白皮(锉)各30克 大黄15克(湿纸裹，煨熟)","xiao":"宣肺化痰，止咳平喘。","zhi":"肺感寒邪，咳嗽上气，朐膈烦满，项背拘急，声重久塞，头昏目眩，痰气不利，呀呷有声。"},
		{"name":"六味汤","yuan":"《外台》卷二十五引《许仁则方》","zu":"附子（炮）2两，细辛2两，甘草（炙）2两，人参2两，干姜3两，大黄5两。","xiao":"辛温解表，疏风散寒，宣肺利咽","zhi":"风寒喉痹，咽喉淡红不肿，吞咽不顺，恶寒发热，鼻流清涕"},
		{"name":"羌活胜湿汤","yuan":"《内外伤辨惑论》","zu":"羌活 独活各3克 藁本 防风 甘草(炙) 川芎各1.5克 蔓荆子0.9克","xiao":"祛风胜湿。","zhi":"风湿在表，头痛项强，腰背重痛，一身尽痛，难以转侧，恶寒发热，脉浮。"},
	]
},{
	"name":"清热剂",
	"num":17,
	"intro":"清热剂(Heat-clearing prescriptions)，以清热药为主组成的方剂的统称。有清热泻火、清热燥湿、清热解毒、清营凉血、清解暑热、清退虚热等作用。主治里热证。",
	"matters":"首先辨清热证的虚实，实热证宜苦寒直折，清热泻火，若属虚热，则宜凉血除蒸，甘寒养阴；再分热证真假，如热深厥深，真热假寒，才可使用清热剂。为避免寒热格拒，可采用寒药温服法，若阴盛格阳，真寒假热，绝不可妄投清热剂。热为阳邪，易耗伤阴液，应配合养阴生津之品，以顾护阴液。清热剂药性多寒凉且易伤阳败胃，故不宜多服久用，以免损伤脾胃。服用清热剂宜食清淡食物和清凉饮料，忌食辛辣油腻黏腻之品。",
	"content":[
		{"name":"白虎汤","yuan":"《伤寒论》","zu":"知母18克 石膏30～45克(碎) 甘草6克(炙) 粳米18克","xiao":"清热生津。","zhi":"伤寒阳明热盛，或温病热在气分证。壮热面赤，烦渴引饮，口舌干燥，大汗出，脉洪大有力，现用于流行性乙型脑炎、流行性脑脊髓膜炎、大叶性肺炎，夏季热等属于热在气分者。"},
		{"name":"竹叶石膏汤","yuan":"《伤寒论》","zu":"竹叶（6克） 石膏（50克） 半夏（9克） 麦门冬（20克） 人参（6克） 粳米（10克） 甘草（6克）","xiao":"清热生津，益气和胃。","zhi":"伤寒、温病、暑病余热未清，气津两伤证。身热多汗，心胸烦闷，气逆欲呕，口干喜饮，或虚烦不寐，舌红苔少，脉虚数。（本方常用于流脑后期、夏季热、中暑等属余热未清，气津两伤者。糖尿病的干渴多饮属胃热阴伤者，亦可应用。）"},
		{"name":"清营汤","yuan":"《温病条辨》","zu":"犀角［水牛角代］（30克） 生地黄（15克） 元参（9克） 竹叶心（3克） 麦冬（9克） 丹参（6克） 黄连（5克） 银花（9克） 连翘（6克）　","xiao":"清营解毒，透热养阴。","zhi":"热入营分证。身热夜甚，神烦少寐，时有谵语，目常喜开或喜闭，口渴或不渴，斑疹隐隐，脉细数，舌绛而干。（本方常用于乙型脑炎、流行性脑脊髓膜炎、败血症、肠伤寒或其他热性病证属热人营分者。）"},
		{"name":"犀角地黄汤","yuan":"《小品方》录自《外台秘要","zu":"犀角［水牛角代]（30克） 生地黄（24克） 芍药（12克） 牡丹皮（9克）","xiao":"清热解毒，凉血散瘀。","zhi":"温病热入血分，热甚动血或蓄血发狂"},
		{"name":"黄连解毒汤","yuan":"《外台秘要》引崔氏方","zu":"黄连（9克） 黄芩（6克） 黄柏（6克） 栀子（9克）","xiao":"泻火解毒。","zhi":"一切实热火毒，三焦热盛之证。大热烦躁，口燥咽干，错语，不眠；或热病吐血、衄血；或热甚发斑，身热下痢，湿热黄疸；外科痈疽疔毒，小便赤黄，舌红苔黄，脉数有力。（本方常用于败血症、脓毒血症、痢疾、肺炎、泌尿系感染、流行性脑脊髓膜炎、乙型脑炎以及感染性炎症等属热毒为患者。"},
		{"name":"普济消毒饮","yuan":"《东垣试效方》","zu":"黄芩（15克） 黄连（15克） 陈皮（6克） 甘草（6克） 玄参（6克） 柴胡（6克） 桔梗（6克） 连翘（3克） 板蓝根（3克） 马勃（3克） 牛蒡子（3克） 薄荷（3克） 僵蚕（2克） 升麻（2克）","xiao":"清热解毒，疏风散邪。","zhi":"大头瘟。恶寒发热，头面红肿灼痛，目不能开，咽喉不利，舌燥口渴，舌红苔白兼黄，脉浮数有力。（本方常用于丹毒、腮腺炎、急性扁桃体炎、淋巴结炎伴淋巴管回流障碍等属风热邪毒为患者。）"},
		{"name":"清瘟败毒饮","yuan":"《疫疹一得》卷下","zu":"生石膏大剂六两至八两，中剂二两至四两两，小剂八钱至一两二钱，小生地大剂六钱至一两，中剂三钱至五钱，小剂二钱至四钱，乌犀角大剂六钱至八钱，中剂三钱至四钱，小剂二钱至四钱，小剂一钱至一钱半，生栀子、桔梗、黄芩、知母、赤芍、玄参、连翘、竹叶、甘草、丹皮。","xiao":"清热解毒，凉血泻火。","zhi":"瘟疫热毒，充斥内外，气血两燔证。大热渴饮，头痛如劈，干呕狂燥，谵语神昏，视物错瞀，或发斑疹，或吐血、衄血，四肢或抽搐，舌绛唇焦，脉沉数，可沉细而数，或浮大而数。现代多用于治疗流行性出血热、败血症、脓毒血症、脑炎、病毒性脑炎、髋关节炎、传染性单核细胞增多症、钩端螺旋体、麻疹等。"},
		{"name":"加味导赤散","yuan":"《医方考》卷六","zu":"生地1钱5分（切片），木通8分，红花4分，赤芍8分，防风6分，荆芥6分，蝉蜕8分，甘草4分，归尾8分。","xiao":"清利湿热。","zhi":"脾不化湿，湿热熏蒸，口内红肿糜烂。"},
		{"name":"龙胆泻肝汤","yuan":"《医方集解》引《太平惠民和剂局方》","zu":"龙胆草（6克） 黄芩（9克） 山栀子（9克） 泽泻（12克） 木通（9克） 车前子（9克） 当归（8克） 生地黄（20克） 柴胡（10克） 生甘草（6克）","xiao":"泻肝胆实火，清下焦湿热。","zhi":"肝胆实火上扰，症见头痛目赤，胁痛口苦，耳聋、耳肿；或湿热下注，症见阴肿阴痒，筋痿阴汗，小便淋浊，妇女湿热带下等。（本方常用于顽固性偏头痛、头部湿疹、高血压、急性结膜炎、虹膜睫状体炎、外耳道疖肿、鼻炎、急性黄疸性肝炎、急性胆囊炎，以及泌尿生殖系统炎症、急性肾盂肾炎、急性膀胱炎、尿道炎、外阴炎、睾丸炎、腹股沟淋巴腺炎、急性盆腔炎、带状疱疹等属肝经实火、湿热者。）"},
		{"name":"左金丸","yuan":"《丹溪心法》","zu":"黄连 吴茱萸","xiao":"清肝泻火，降逆止呕。","zhi":"肝火犯胃，胸胁胀痛，嘈杂吞酸，呕吐口苦，脘痞嗳气；肝火上炎，绿风内障。"},
		{"name":"泻白散","yuan":"《小儿药证直诀》卷下","zu":"地骨皮（30克） 桑白皮（炒，30克） 甘草（炙，3克）","xiao":"清泻肺热，宽气进食，止咳平喘。","zhi":"肺热喘咳证。气喘咳嗽，皮肤蒸热，日哺尤甚，舌红苔黄，脉细数。（可用于小儿麻疹初期、肺炎或支气管炎等属肺中伏火郁热者。）"},
		{"name":"清胃散","yuan":"《脾胃论》","zu":"生地黄（6克）当归身（6克）牡丹皮（9克）黄连（6克）升麻（9克）","xiao":"清胃凉血。","zhi":"胃火牙痛。牙痛牵引头疼，面颊发热，其齿喜冷恶热，或牙宣出血，或牙龈红肿溃烂，或唇舌腮颊肿痛，口气热臭，口干舌燥，舌红苔黄，脉滑数。（本方常用于口腔炎、牙周炎、三叉神经痛等属胃火上攻者。）"},
		{"name":"玉女煎","yuan":"玉女煎","zu":"石膏（9-15克） 熟地（9-30克） 麦冬（6克） 知母（5克） 牛膝（5克）","xiao":"清胃热，滋肾阴。","zhi":"胃热阴虚证。头痛，牙痛，齿松牙衄，烦热干渴，舌红苔黄而干。亦治消渴，消谷善饥等。（本方常用于牙龈炎、糖尿病、急性口腔炎、舌炎等属胃热阴虚者。）"},
		{"name":"芍药汤","yuan":"《素问病机气宜保命集》","zu":"芍药（30克） 当归（15克） 黄连（15克） 槟榔（6克） 木香（6克） 炙甘草（6克） 大黄（9克） 黄芩（15克） 肉桂（5克）","xiao":"清热燥湿，调气和血。","zhi":"湿热痢疾。腹痛，便脓血，赤白相兼，里急后重，肛门灼热，小便短赤，舌苔黄腻，脉弦数。（本方常用于细菌性痢疾、阿米巴痢疾、过敏性结肠炎、急性肠炎等属湿热为患者。）"},
		{"name":"白头翁汤","yuan":"《伤寒论》","zu":"白头翁（15克） 黄柏（12克） 黄连（6克） 秦皮（12克）","xiao":"清热解毒，凉血止痢","zhi":"热毒痢疾。腹痛，里急后重，肛门灼热，下痢脓血，赤多白少，渴欲饮水，舌红苔黄，脉弦数。（本方常用于阿米巴痢疾、细菌性痢疾属热毒偏盛者。）"},
		{"name":"青蒿鳖甲汤","yuan":"《温病条辨》","zu":"青蒿6克,鳖甲15克,细生地12克,知母6克,丹皮9克。","xiao":"养阴透热。","zhi":"邪热内伏证,表现为夜热早凉,热退无汗,能食形瘦,舌红少苔,脉数。肺结核、贫血、其他慢性消耗性疾病等证属阴虚火旺者,可用本方加减治疗。"},
		{"name":"清骨散","yuan":"《证治准绳.类方》卷一","zu":"银柴胡5克,胡黄连、秦艽、鳖甲、地骨皮、青蒿、知母各3克,甘草2克。","xiao":"清虚热,退骨蒸。","zhi":"骨蒸潮热证,表现为午後或夜间潮热,骨蒸心烦,形瘦盗汗,两颊潮红,手足心热,舌红少苔,脉细数。肺结核、其他慢性消耗性疾病等证属阴虚内热、虚劳骨蒸者,可用本方加减治疗。"}
	]
},{
	"name":"泻下剂",
	"num":10,
	"intro":"泻下剂(prescriptions for purga tion)，以泻下药为主组成的方剂的统称。有泻热通便、攻逐冷积、润肠通便等作用。主治里实便秘证。",
	"matters":"泻下剂专治里实便秘。若表证未解，里实未成者，不可用泻下剂；若表证未解，里实已成，则需要权衡轻重，或先解表，后治里，或表里双解，以免表邪内陷。泻下剂除润下剂外，均较峻烈，有的还有毒副作用，故年老体弱、孕妇、产后、久病体虚、津伤阴亏、血虚者均应慎用，必要时可根据病情及体质的不同，或先予攻下，后顾其虚，或攻补兼施，虚实兼顾。泻下剂易伤胃气，奏效即止，不可过服。凡重症、急症而必须急下者，可加大剂量煎成汤剂服用；若病情较缓，只需缓下者，药量不宜过大，可制成丸剂服用。服药期间忌食油腻辛辣和不易消化的食物，以防重伤胃气。",
	"content":[
		{"name":"大承气汤","yuan":"《伤寒论》","zu":"大黄（12克） 厚朴（15克） 枳实（12克） 芒硝（9克）","xiao":"峻下热结。","zhi":"阳明腑实证，大便不通，频转矢气，脘腹痞满，腹痛拒按，苔黄燥起刺，脉沉实；热结旁流，下利清水，色纯青，脐腹疼痛，按之坚硬有块，脉滑实；里热实证之热厥，痉病或发狂等；疮疡，皮肤病，急腹，证属里热实证者。"},
		{"name":"大黄甘草汤","yuan":"《金匮要略》卷中","zu":"大黄12克 甘草3克","xiao":"通便止呕。","zhi":"胃肠积热，浊腐之气上逆，食已即吐，吐势急迫，或大便秘结不通，苔黄，脉滑实者。"},
		{"name":"青麟丸","yuan":"《中药成方配本》","zu":"大黄10千克 黄柏250克 黄芩250克 猪苓250克 赤苓250克 泽泻250克 木通250克 车前子250克 米仁250克 粉萆薢250克 生侧柏250克 玄参250克 广皮250克 薄荷250克 制香附250克","xiao":"清热利湿。","zhi":"舌麻（一作糜）口碎，目赤鼻疮，唇肿喉闭，齿痛耳聋头痛，时疫暑热，火郁呛咳；吐血、齿血、溺血、便血、遗精、淋浊；肺痈、肠痈、痰火昏狂，如醉如痴者；胸闷脘胀，气阻噎膈，肝胃气痛，大小便闭者；湿热黄疸，瘴气疟疾，水肿臌胀，食积腹痛，痢疾初起，里急后重不爽；从高坠下，损伤蓄血于内，不思饮食者，妇女经痛，经事不调，产后恶露不尽，瘀血作痛，痰扰头晕，气闷呕恶，发热腹痛便秘者；妇女赤白带下，骨蒸发热；小儿惊风，疳臌食积，形瘦内热。"},
		{"name":"当归龙荟丸","yuan":"《宣明论方》","zu":"当归（酒炒）100g、龙胆（酒炒）100g、芦荟50g、青黛50g、栀子100g等。","xiao":"清泻肝胆实火。","zhi":"肝胆实火证。头晕目眩，神志不宁，谵语发狂，或大便秘结，小便赤涩。"},
		{"name":"更衣丸","yuan":"《先醒斋医学广笔记》卷一","zu":"朱砂(研飞如面)15克 芦荟<研细)21克","xiao":"泻火，通便，安神。","zhi":"肝火上炎，肠热便秘，目赤易怒，头晕心烦，睡眠不安。"},
		{"name":"调胃承气汤","yuan":"《奇效良方》","zu":"大黄（去皮，清酒洗，12克） 甘草（炙，6克） 芒硝（9克）","xiao":"缓下热结。","zhi":"阳明病胃肠燥热证。大便不通，口渴心烦，蒸蒸发热，或腹中胀满，或为谵语，舌苔正黄，脉滑数；以及胃肠热盛而致发斑吐衄，口齿咽喉肿痛等。"},
		{"name":"新加黄龙汤","yuan":"《温病条辨》","zu":"细生地（15克） 生甘草（6克） 人参（另煎，4.5克） 生大黄（9克） 芒硝（3克） 玄参（15克） 麦冬（15克） 当归（4.5克） 海参（洗，2条） 姜汁（6匙）","xiao":"泄热通便，滋阴益气。","zhi":"热结里实，气阴不足证。大便秘结，腹中胀满而硬，神倦少气，口干咽燥，唇裂舌焦，苔焦黄或焦黑燥裂。"},
		{"name":"凉膈散","yuan":"《和剂局方》","zu":"川大黄 朴硝 甘草各600克 山栀子仁 薄荷叶（去梗）黄芩各300克 连翘1．2千克","xiao":"凉膈泻热。","zhi":"上、中二焦积热，烦躁多渴，面热头昏、唇焦咽燥，舌肿喉闭，目赤鼻衄，颔颊结硬，口舌生疮，涕唾稠粘，睡卧不宁，谵语狂妄，大便秘结，小便热赤，以及小儿惊风，舌红苔黄，脉滑数。"},
		{"name":"白虎承气汤","yuan":"《重订通俗伤寒论》","zu":"生石膏24克(细研) 生大黄9克 生甘草2.4克 知母12克 元明粉6克 陈仓米9克(荷叶包)","xiao":"清热泻火，通便。","zhi":"伤寒阳明病，邪火壅闭，昏不识人，谵语发狂，大热大烦，大渴大汗，大便燥结，小便赤涩。"},
		{"name":"增液承气汤","yuan":"《温病条辨》卷二","zu":"玄参30克（一两），麦冬（连心）、细生地各25克（各八钱），大黄9克（三钱），芒硝5克（一钱五分）","xiao":"滋阴增液，泄热通便。","zhi":"阳明温病，热结阴亏，大便秘结，口干唇燥，舌苔薄患而干，脉细数。"}
	]
},{
	"name":"祛风湿剂",
	"num":11,
	"intro":"祛风湿剂(antirheumatic prescriptions)，以祛风湿药为主组成的方剂的统称。有祛风除湿、杀虫止痒等作用。主治各种风湿痹证和疥癣疮癞等皮肤疾患。",
	"matters":"使用祛风湿剂须根据痹症的不同证候及患者体质辨证用药。对痹证经久不愈的患者，见瘀血、痰湿阻络者，可配活血祛瘀、化痰通络药同用；气血不足者配补益气血药同用，以扶正祛邪。祛风湿剂类药物多辛散温燥，易伤阴耗血，阴亏血虚者，当慎用。由于痹证病程较长，经久不愈者，多制成丸剂、酒剂服用。使用祛风除湿杀虫止痒剂治疗多种皮肤病时，宜针对病因配合内服药以增疗效。治疗期间忌食鱼、虾、蟹、羊肉等腥膻发物，以免加重病情。",
	"content":[
		{"name":"川芎茶调散","yuan":"《和剂局方》","zu":"川芎 荆介 白芷 羌活 甘草 细辛 防风 薄荷","xiao":"疏风止痛。","zhi":"风邪头痛，偏正头痛或巅顶作痛，恶寒发热，目眩鼻塞，舌苔薄白，脉浮。"},
		{"name":"防风汤","yuan":"《宋.太平惠民和剂局方》","zu":"秦艽（去苗土）、独活（去芦）、麻黄（去节）、半夏（汤洗七次切片）、防风（去芦），各二两。升麻、防己、白术、石膏（煅）、芍药（白）、黄芩、甘草、当归（去芦）、远志（去心）、人参（去芦），各一两。","xiao":"祛风通络，散寒除湿。","zhi":"行痹，肢体关节疼痛，屈伸不利，疼痛游走不定，上下走窜，但以上肢为多见。"},
		{"name":"消风散","yuan":"《儒门事亲》卷十二","zu":"川芎 羌活(去芦) 人参(去芦) 白茯苓(去皮) 白僵蚕 蝉壳各30克 陈皮(去白) 厚朴(去粗皮，姜制)各30克","xiao":"祛风化痰。","zhi":"风痰风厥，涎潮不利，半身不遂，失音不语，留饮飧泄，痰实呕逆，旋晕，口歪搐搦，僵仆目眩，小儿惊悸狂妄，胃脘当心而痛，上支两胁，咽膈不通，偏正头痛。"},
		{"name":"蛇床子散","yuan":"《圣惠》卷九十一","zu":"蛇床子1分，吴茱萸1分，腻粉1钱，硫黄1分（细研），芜荑1分。","xiao":"祛风燥湿，杀虫止痒。","zhi":"肝肾阴虚阴痒症，伴灼热感（外用）"},
		{"name":"小活络丹","yuan":"《太平惠民和剂局方.卷一治诸风》","zu":"川乌 炮，去皮脐 草乌 炮，去皮脐 地龙 去土 天南星 炮 各六两 [各6g] 乳香 研 没药 研 各二两二钱 [各5g]","xiao":"祛风除湿，化痰通络，活血止痛。","zhi":"风寒湿痹。肢体筋脉疼痛，麻木拘挛，关节屈伸不利，疼痛游走不定。亦治中风，手足不仁，日久不愈，经络中湿痰瘀血，而见腰腿沉重，或腿臂间作痛。"},
		{"name":"加味金刚丸","yuan":"《赵锡武医疗经验》","zu":"萆薢 杜仲 肉苁蓉 巴戟天 天麻 僵蚕 全蝎 木瓜 乌贼骨各30克 菟丝子15克 精制马钱子60克（必须严格炮制，以解其毒）","xiao":"滋养肝肾，强筋壮骨。","zhi":"小儿麻痹证后期肌肉萎缩。"},
		{"name":"舒筋汤","yuan":"《外伤科学》","zu":"当归 白芍 姜黄 宽筋藤 松节 海桐皮 羌活 防风 续断 甘草","xiao":"祛风舒筋活络。","zhi":"骨折及关节脱位后期，或软组织病变所致的筋络挛痛。"},
		{"name":"薏苡仁汤","yuan":"《类证治裁》","zu":"薏苡仁（一两） 当归（一两） 芍药（一两） 麻黄（一两） 官桂（一两） 甘草（炙.一两） 苍术（米泔浸一宿.去皮.挫炒.一两）","xiao":"痰湿咳嗽。","zhi":"风肿在脾，唇口瞤动，或生结核，或为浮肿。"},
		{"name":"神应养真丹","yuan":"《外科正宗》","zu":"当归 川芎 白芍 天麻 羌活 熟地 木瓜 菟丝子","xiao":"养血祛风止痒","zhi":"风盛血燥之斑秃，头发成片脱落，皮色红而光泽"},
		{"name":"驱风一字散","yuan":"《世医得效方》卷十六","zu":"川乌15克（炮，去皮、尖）羌活 防风各7.5克 川芎 荆芥各9克","xiao":"祛风止痒。","zhi":"风邪侵痒，两眦作痒。"},
		{"name":"宣痹汤","yuan":"《温病条辨》卷二","zu":"防己15克（五钱）； 杏仁15克（五钱）； 滑石15克（五钱）； 连翘9克（三钱）； 山栀9克（三钱）； 薏苡15克（五钱）； 半夏(醋炒)9克（三钱）； 晚蚕沙9克（三钱）； 赤小豆皮(取五谷中之赤小豆，凉水浸，取皮用)9克（三钱）。","xiao":"清化湿热，宣痹通络。","zhi":"湿热痹证。湿聚热蒸，阻于经络，寒战发热，骨节烦疼，面色痿黄，小便短赤，舌苔黄腻或灰滞，面目痿黄。"}
	]
},{
	"name":"祛湿利水剂",
	"num":6,
	"intro":"祛湿利水剂(prescriptions for elimination Dampness)，以利水渗湿药和芳香化湿药等为主组成的方剂的统称。有化湿利水、通淋泄浊、逐水涤饮等作用。",
	"matters":"湿邪重着黏腻，易阻气机，故祛湿利水剂中常配理气药同用，以求气化水行。祛湿利水剂多由辛香温燥或甘淡渗利药组成，易耗伤阴津，素体阴虚津亏者慎用。攻逐水饮剂多由峻下逐水药组成，药性猛烈，胸腹积水非形症俱实者不可轻投，且此类药物多具毒性，应中病即止，不可过服久用；体虚及孕妇尤当注意，避免中毒。服药饮食禁忌：用治肾炎水肿者忌食盐，用治阴寒水肿者忌食清泄食物，用治湿热黄疸者忌食油腻食物，用治湿热疮毒，皮肤病者忌食鱼、虾、蟹、猪头肉、猪蹄、鹅肉、鸡肉等荤腥发物，用治痔漏肿痛者忌食辛辣刺激物。",
	"content":[
		{"name":"甘草麻黄汤","yuan":"《三因极一病证方论》卷十四","zu":"甘草6克 麻黄12克","xiao":"宣肺利尿消肿。","zhi":"里水，一身面目悉肿，小便不利。"},
		{"name":"越婢汤","yuan":"《金匮》卷中","zu":"麻黄6两，石膏半斤，生姜3两，大枣15枚，甘草2两","xiao":"发汗利水。","zhi":"风水恶风，一身悉肿，脉浮不渴，续自汗出，无大热者。"},
		{"name":"越婢加术汤","yuan":"《金匮要略》卷中","zu":"麻黄12克 石膏25克 生姜9克 甘草6克 白术12克 大枣15枚","xiao":"疏风泄热，发汗利水。","zhi":"皮水，一身面目悉肿，发热恶风，小便不利，苔白，脉沉者。(水肿)"},
		{"name":"萍豆瓜皮汤","yuan":"《验方》","zu":"浮萍 麻黄 连翘 赤小豆 冬瓜皮 西瓜皮 木贼草 甘草","xiao":"宣肺发汗，清热利尿。","zhi":"风水，水肿，小便不利，兼恶寒发热。"},
		{"name":"麻黄附子汤","yuan":"《金匮要略》卷中","zu":"麻黄9克 甘草6克 附子3克（炮）","xiao":"宣肺利尿，助阳发汗。","zhi":"肾阳不足，水气在表，身目浮肿，小便不利。"},
		{"name":"麻黄连轺赤小豆汤","yuan":"《伤寒论》","zu":"麻黄6克(去节) 连轺6克(即连翘根)杏仁6克 赤小豆10克 大枣12枚(擘) 生梓白皮(切)10克 生姜6克 甘草6克(炙)","xiao":"解表发汗，清热利湿。","zhi":"阳黄兼表证。发热恶寒，无汗身痒，周身黄染如橘色，脉浮滑。"}
	]
},{
	"name":"温里剂",
	"num":9,
	"intro":"温里剂(prescriptions for dispelling internal Cold)，以温里药为主组成的方剂的统称。有温中祛寒，暖肝散寒，温经通络，回阳救逆等作用。主治里寒证。",
	"matters":"使用温里剂首先要辨别寒热真假，内真热外假寒者切不可用温里剂，以防火上加油，变生他端。阴寒太盛，服热药入口即吐者，可热药冷服或少佐寒凉之品，以反佐为用。温里剂的药多辛温燥烈，对平素火旺、阴亏血虚的里寒证患者，可减少用量，防止劫阴动血，复生他证。回阳救逆剂中多用附子、乌头之类，须使用炮制品，且要久煮，以沸煮45～60分钟为宜，并不得与半夏、瓜蒌、贝母、白蔹、白芨配伍使用，以免中毒。服药饮食禁忌生冷固硬、难以消化的食物。",
	"content":[
		{"name":"理中丸","yuan":"《伤寒论》","zu":"人参（15克） 干姜（15克） 白术（15克） 甘草（15克） ｛原方丸剂各用90克｝","xiao":"温中祛寒，补气健脾。","zhi":"脾胃虚寒证。脘腹疼痛，喜温欲按，自利不渴，畏寒肢冷，呕吐，不欲饮食，舌淡苔白，脉沉细；或阳虚失血；小儿慢惊；或病后喜唾涎沫；霍乱吐泻，以及胸痹等中焦虚寒所致者。"},
		{"name":"小建中汤","yuan":"《伤寒论》","zu":"饴糖（30克） 桂枝（9克） 芍药（18克） 生姜（9克） 大枣（6枚） 炙甘草（6克）","xiao":"温中补虚，和里缓急。","zhi":"中焦虚寒，肝脾不和证。腹中拘急疼痛，喜温喜按，神疲乏力，虚怯少气；或心中悸动，虚烦不宁，面色无华；或伴四肢酸楚，手足烦热，咽干口燥。舌淡苔白，脉细弦。（本方常用于胃及十二指肠溃疡、慢性肝炎、慢性胃炎、神经衰弱、再生障碍性贫血、功能性发热等属中焦虚寒，肝脾不和者。）"},
		{"name":"吴茱萸汤","yuan":"《伤寒论》","zu":"吴茱萸9克 人参9克 生姜18克 大枣4枚","xiao":"温中补虚，降逆止呕。","zhi":"胃中虚寒，食谷欲吐，胸膈满闷，或胃脘痛，吞酸嘈杂；厥阴头痛，干呕吐涎沫；少阴吐利，手足逆冷，烦躁欲死"},
		{"name":"大建中汤","yuan":"《金匮要略》","zu":"蜀椒（6克 ） 干姜（12克） 人参（6克）","xiao":"温中补虚，降逆止痛。","zhi":"中阳衰弱，阴寒内盛之脘腹剧痛证。腹痛连及胸脘，痛势剧烈，其痛上下走窜无定处，或腹部时见块状物上下攻撑作痛，呕吐剧烈，不能饮食，手足厥冷，舌质淡，苔白滑，脉沉伏而迟。"},
		{"name":"四逆汤","yuan":"《伤寒论》","zu":"附子 干姜 甘草","xiao":"回阳救逆。","zhi":"少阴病，四肢厥逆，恶寒蜷卧，呕吐不渴，腹痛下利，神衰欲寐，舌苔白滑，脉微细欲绝；太阳病误汗亡阳。"},
		{"name":"回阳救急汤","yuan":"《伤寒六书》","zu":"熟附子（9克） 干姜（6克） 人参（6克） 炙甘草（6克） 炒白术（9克） 肉桂（3克） 陈皮（6克） 五味子（3克）茯苓（9克） 制半夏（9克）","xiao":"回阳固脱，益气生脉。","zhi":"寒邪直中三阴，真阳衰微证。四肢厥冷，神衰欲寐，恶寒蜷卧，吐泻腹痛，口不渴，甚则身寒战栗，或指甲口唇青紫，或吐涎沫，舌淡苔白，脉沉微，甚或无脉。（本方常用于急性胃肠炎吐泻过多、休克、心力衰竭等属亡阳欲脱者。）"},
		{"name":"当归四逆汤","yuan":"《伤寒论》","zu":"当归（12克） 桂枝（9克） 芍药（9克） 细辛（3克） 通草（6克） 大枣（8枚，擘[bo]） 炙甘草（6克）","xiao":"温经散寒，养血通脉。","zhi":"血虚寒厥证。手足厥寒，或腰、股、腿、足、肩臂疼痛，口不渴，舌淡苔白，脉沉细或细而欲绝。（本方常用于血栓闭塞性脉管炎、无脉症、雷诺病、小儿麻痹、冻疮、妇女痛经、肩周炎、风湿性关节炎等属血虚寒凝者。）"},
		{"name":"黄芪桂枝五物汤","yuan":"《金匮要略》卷上","zu":"黄芪三两[9g]　芍药三两[9g]　桂枝三两[9g]　生姜六两[18g]　大枣十二枚[4枚]（一方有人参）","xiao":"调养荣卫，祛风散邪；益气温经，和血通痹。［本方立法：以益气通经，和血通痹为立法。］","zhi":"血痹。阴阳俱微，外证肌肤麻木不仁，如风痹状。寸口关上微，尺中小紧，脉微涩而紧。"},
		{"name":"暖肝煎","yuan":"《景岳全书》卷五十一","zu":"当归二三钱（6～9g） 枸杞三钱（9g） 小茴香二钱（6g） 肉桂一二钱（3～6g） 乌药二钱（6g） 沉香一钱（或木香亦可）（3g） 茯苓二钱（6g）","xiao":"温补肝肾，行气止痛。","zhi":"肝肾虚寒证。睾丸冷痛，或小腹疼痛，畏寒喜暖，舌淡苔白，脉弦沉迟。"}
	]
},{
	"name":"理气剂",
	"num":14,
	"intro":"理气剂(prescriptions for regulating Qi flow)，以理气药为主组成的方剂的统称。有调理气分，疏畅气机，消除气滞、气逆等作用。用治气滞、气逆诸证。",
	"matters":"首先应辨明病情的虚实，气滞实证方可使用理气剂，若误投补气剂，壅塞气机，则气滞更甚。理气药多辛温香燥，易耗气伤阴，气阴不足者，不宜多用。使用疏肝理气剂治肝郁气滞时，要注意精神护理，保持正常心态，才能收到良好效果。治疗脾胃不和、肝脾失调、肝胃不和、胃肠失和诸证时，应忌食辛辣刺激、寒冷固硬、腥膻油腻、不易消化的食物。",
	"content":[
		{"name":"香砂六君子汤","yuan":"《古今名医方论》卷一","zu":"人参1钱，白术1钱，茯苓1钱，半夏1钱，陈皮1钱，藿香8分，甘草（炒）6分，宿砂仁（炒）8分。","xiao":"健脾和胃，理气止痛。","zhi":"脾胃气虚，湿阻痰聚，气滞胃逆，脘腹胀痛，呕吐泄泻。"},
		{"name":"曲麦枳术丸","yuan":"《北京市中药成方选集》","zu":"白术（炒）160两，橘皮160两，枳实（炒）160两，桔梗32两，山楂32两，神曲32两，麦芽（炒）32两，枳壳（炒）32两。","xiao":"开胃健脾，消食化滞。","zhi":"气滞胸满，饮食不消，肚腹膨胀，两胁刺痛。"},
		{"name":"丁香沉膈散","yuan":"《和剂局方》","zu":"白术 香附 人参 砂仁 丁香 麦芽 木香 肉豆蔻 神曲 甘草 沉香 青皮 厚朴 藿香 陈皮 半夏 草果","xiao":"温中健脾，降气和胃。","zhi":"脾胃不和，中寒上气，胁胀胀满，心腹疠痛，痰逆恶心，或时呕吐，饮食减少，十嗝五噎，痞塞不通，噫气吞酸，口苦失味。"},
		{"name":"旋覆代赭汤","yuan":"《奇效良方》","zu":"旋覆花3两，人参2两，代赭石1两，甘草3两（炙），半夏半升（洗），生姜5两，大枣12枚（擘）。","xiao":"降逆化痰，益气和胃。","zhi":"胃气虚弱，痰浊内阻，心下痞硬，嗳气不除。"},
		{"name":"小半夏汤","yuan":"《金匮要略》卷中","zu":"半夏18克 生姜15克","xiao":"和胄降逆，消痰蠲饮。","zhi":"痰饮内停，心下痞闷，呕吐不渴，及胃寒呕吐，痰饮咳嗽。"},
		{"name":"小半夏加茯苓汤","yuan":"《金匮要略》卷中","zu":"半夏18克 生姜15克 茯苓9克","xiao":"和胃化饮，降逆止呕。","zhi":"痰饮上逆，呕吐眩晕。"},
		{"name":"大半夏汤","yuan":"《金匮要略》卷中","zu":"半夏9克（洗，完用）人参6克 白蜜20毫升","xiao":"益气生津，降逆止吐。","zhi":"胃家久虚，食停气滞，朝食暮吐，暮食朝吐。"},
		{"name":"来复丹","yuan":"《扁鹊心书.神方》","zu":"陈皮（去白）6两，青皮6两，大川附（制）6两，五灵脂6两，硝石3两，硫黄3两。","xiao":"理气和中，镇逆止吐，助阳化浊。","zhi":"脾胃虚寒，脘腹疼痛，呕吐泄泻；小儿慢惊或吐利不止，虚风抽搐，胃气将绝；老人伏暑迷闷；妇人产后血逆上抢闷绝，恶露不止，赤白带下。"},
		{"name":"橘皮竹茹汤","yuan":"《金匮要略》卷中","zu":"橘皮12克 竹茹12克 大枣5枚 生姜9克 甘草6克 人参3克","xiao":"理气降逆，益胃清热。","zhi":"久病体弱或吐下后胃虚有热，气逆不降，呃逆或呕吐，舌嫩红，脉虚数。"},
		{"name":"丁香柿蒂汤","yuan":"《症因脉治》卷二","zu":"丁香6g、柿蒂9g、人参3g、生姜 6g","xiao":"温中降逆，益气和胃。","zhi":"胃虚有寒，呃逆不止，或恶心呕吐，得热则减，得寒则甚者。"},
		{"name":"半夏泻心汤","yuan":"《伤寒论》","zu":"半夏（9克） 黄芩（6克） 干姜（6克） 人参（6克） 炙甘草（6克） 黄连（3克） 大枣（4枚）","xiao":" 寒热平调，消痞散结。","zhi":"寒热错杂之痞证。心下痞，但满而不痛，或呕吐，肠鸡下利，舌苔腻而微黄。（本方常用于急慢性胃肠炎、慢性结肠炎、慢性肝炎、早期肝硬化等属中气虚弱，寒热互结者。）"},
		{"name":"生姜泻心汤","yuan":"《伤寒论》","zu":"生姜12克(切) 甘草9克(炙) 人参9克 干姜3克 黄芩9克 半夏9克(洗) 黄连3克 大枣12枚(擘)","xiao":"和胃消痞，散结除水。","zhi":"伤寒汗后，胃阳虚弱，水饮内停，心下痞硬，肠鸣下利；妊娠恶阻，噤口痢。现用于胃下垂、胃扩张、慢性胃炎等属胃阳虚弱，水饮内停者。　"},
		{"name":"甘草泻心汤","yuan":"《伤寒论》","zu":"甘草12克(炙) 黄芩9克 干姜9克 半夏9克(洗) 大枣12枚(擘) 黄连3克","xiao":"益气和胃，消痞止呕。","zhi":"伤寒中风，医反下之，以致胃气虚弱，其人下利日数十行，完谷不化，腹中雷鸣，心下痞硬而满，干呕，心烦不得安。　"},
		{"name":"黄连汤","yuan":"《伤寒论》","zu":"黄连9克 甘草9克(炙) 干姜9克 桂枝9克(去皮) 人参6克 半夏6克(洗) 大枣12枚(擘)","xiao":"平调寒热，和胃降逆。","zhi":"伤寒，胸中有热，胃中有邪气，腹中痛，欲呕吐者。"}
	]
},{
	"name":"消导剂",
	"num":5,
	"intro":"消导剂(prescriptions for resol ving food stagnancy)，以消导药为主组成的方剂的统称。有消食导滞、消痞除满、开胃进食的作用。主治食积内停等证。",
	"matters":"使用消导剂需根据病情适当配伍。如食积气阻，脘腹胀痛加剧者可配行气宽中药同用；若食积兼见湿浊中阻，脘痞不饥者，当配芳香化湿药同用；若食积化热，便秘尿赤者，可配清热泻火通便药同用。消导剂虽有渐消缓散之性，但究属克伐之剂，若见脾胃虚弱积滞日久，正气受戕者，当选用消补兼施剂，或用消食导滞剂配健脾和胃药同用，使消积而不伤正气，以求标本兼顾。服药期间忌食油炸黏腻，寒冷固硬，不易消化的食物。",
	"content":[
		{"name":"保和丸","yuan":"《丹溪心法》","zu":"半夏、陈皮、茯苓、莱菔子、连翘、六神曲、麦芽、山楂。","xiao":"消食，导滞，和胃。","zhi":"用于食积停滞，脘腹胀满，嗳腐吞酸，不欲饮食。"},
		{"name":"枳实导滞丸","yuan":"《内外伤辨惑论》","zu":"大黄30克 枳实(麸炒，去瓤) 神曲(炒)各15克 茯苓(去皮) 黄芩(去腐) 黄连(拣净) 白术各10克 泽泻6克","xiao":"消滞利湿，泄热通便。","zhi":"湿热积滞内阻，胸脘痞闷，下痢或泄泻，腹痛，里急后重，或大便秘结，小便黄赤，舌苔黄腻，脉象沉实。"},
		{"name":"木香槟榔丸","yuan":"《医方集解》","zu":"木香 槟榔 青陈皮 枳壳 莪术 黄连 三棱 大黄 黄柏 香附 玄明粉 黑丑","xiao":"行气导滞，故积泄热。","zhi":"积滞内停，脘痞胀痛，大便秘结；或积滞泻痢，里急后重，下痢赤白，肛门灼热。"},
		{"name":"健脾丸","yuan":"《证治准绳》","zu":"人参 白术 茯苓 山楂 神曲 麦芽 山药 肉豆蔻 木香 砂仁 陈皮 黄连 甘草","xiao":"健脾消食，清热和中。","zhi":"脾虚食停，积滞化热，食少难消，脘腹痞闷，倦怠乏力，大便溏薄，苔腻微黄。"},
		{"name":"启脾丸","yuan":"《医学入门》","zu":"人参 白术 茯苓 陈皮 山药 莲子 泽泻 山楂 神曲 麦芽","xiao":"健脾和胃，消食止泻。","zhi":"脾虚食停，脘痞胀痛，不思饮食，呕恶嗳腐，或积滞泄泻，腹痛肠鸣，粪便酸臭，面色萎黄，倦怠乏力。"}
	]
},{
	"name":"驱虫剂",
	"num":3,
	"intro":"凡以驱虫药物为主组成，具有驱杀人体内寄生虫的作用，用治人体寄生虫病的方剂，统称驱虫剂。",
	"matters":"服药时应忌吃油腻食物，并以空腹为宜，尤以临睡前服用为妥。有些驱虫药含有毒性，因此在运用时要注意剂量，用量过大，易伤正气或中毒；用量不足，则难生效。有些驱虫药具有攻伐作用，对年老体弱、孕妇等，使用宜慎重，或禁用。服驱虫剂之后，见有脾胃虚弱者，宜适当内服调补脾胃之剂，以善其后。凡见有寄生虫病症状，可以先作粪便检查，发现虫卵，再结合辨证使用驱虫剂，这样可以达到安全、准确的目的。",
	"content":[
		{"name":"乌梅丸","yuan":"《太平圣惠方》卷十三","zu":"乌梅肉22克(微炒) 黄连22克(去须，微炒) 当归22克(锉，微炒) 诃黎勒皮22克(煨微黄) 阿胶15克(捣碎，炒令黄燥) 干姜7.5克(炮裂，锉)","xiao":"上药捣罗为末，炼蜜和丸，如梧桐子大。每服20丸，以粥饮调下，不计时候。","zhi":"伤寒，下痢腹痛。"},
		{"name":"化虫丸","yuan":"《太平惠民和剂局方》卷十","zu":"胡粉(炒)1.5千克 鹤虱(去土)1.5千克 槟榔 苦楝根(去浮皮)各1.5千克 白矾(枯)375克","xiao":"杀肠中诸虫。","zhi":"小儿虫积。腹痛时作时止，往来上下，或结聚成团，或呕吐清水涎沫，多食而瘦，面色青黄。"},
		{"name":"追虫丸","yuan":"《医学入门》卷七","zu":"大黄 黑丑各30克 山楂 莪术各18克 槟榔 大腹子各12克 雷丸 砂糖各9克 木香6克 皂角3克","xiao":"驱虫除湿，理气通腑。","zhi":"蛔虫病，蛲虫病，绦虫病。"}
	]
},{
	"name":"止血剂",
	"num":3,
	"intro":"止血剂(hemostatic prescriptions)，以止血药为主组成的方剂的统称。有凉血、化瘀、收涩、温经止血的作用。用于制止人体内外各种出血证。",
	"matters":"对于出血初期或出血夹瘀者，宜选用化瘀止血剂，或收涩止血剂中酌加活血化瘀药，不可过早投入收敛性较强的止血药，以免瘀血阻滞。血热妄行的出血症不宜大量使用凉血止血剂，可少佐活血化瘀药，使血止而不留瘀。若出现大出血虚脱危证，当先补气固脱。服用止血散剂时，可装入胶囊吞服，或用藕汁、京墨调服更佳，切勿直接倒入口腔，以免引起呛咳，加重出血。血热出血证者，忌食辛辣刺激性食品，饮食宜清淡流食，如藕汁、梨汁、西瓜汁等，以助清凉止血之功；若属虚寒性出血证，宜食高营养、易消化的食品，如大枣粥、山药粥、茯苓粉粥等，补益气血，理脾和胃，以助益气摄血之效。",
	"content":[
		{"name":"十灰散","yuan":"《十药神书》","zu":"大蓟 小蓟 荷叶 侧柏叶 茅根 茜根 山栀 大黄 牡丹皮 棕榈皮 各等分［各9g］","xiao":"凉血止血。","zhi":"血热妄行。吐血、咯血、嗽血、衄血。"},
		{"name":"小蓟饮子","yuan":"《玉机微义》","zu":"生地黄 洗，四两[30g] 小蓟 半两[15g] 滑石 半两[15g] 木通 半两[6g]  生地黄 洗，四两[30g] 小蓟 半两[15g] 滑石 半两[15g] 木通 半两[6g]  当归 （酒浸）半两[6g] 山栀子 半两[9g] 炙甘草 半两[6g]","xiao":"凉血止血，利水通淋。","zhi":"热结下焦之血淋、尿血。小便频数，赤涩热痛，尿中见血，或尿血，舌红苔黄，脉数等。"},
		{"name":"槐花散","yuan":"《良朋汇集》卷六","zu":"陈槐花30克 百草霜15克","xiao":"凉血止血。","zhi":"血崩。"}
	]
},{
	"name":"活血剂",
	"num":9,
	"intro":"活血剂(prescriptions for invigorating Blood circulation)，以活血化瘀药为主组成的方剂的统称。有通行血脉、消散瘀血、通经止痛、破血消症、疗伤消疮等作用。主要用治瘀血阻滞的各种病证。",
	"matters":"活血剂多能活血通经，有的还可堕胎催产，故月经过多或血虚无滞的经闭者和孕妇，均当慎用或忌用。饮食宜清淡和富于营养，忌肥甘厚味和刺激性食物。活血消症剂多含攻逐破血之品，药力猛烈，只可暂用，不可久服，以免损伤正气。",
	"content":[
		{"name":"桃仁承气汤","yuan":"《重订通俗伤寒论》","zu":"桃仁9克(勿研) 五灵脂6克(包) 生蒲黄4.5克 鲜生地24克 生川军6克(酒洗) 元明粉3克 生甘草1.8克 犀角汁4匙(冲)","xiao":"活血祛瘀,泄热泻下。","zhi":"下焦瘀热，热结血室，谵语如狂，小腹串痛，带下如注，腰痛如折。　"},
		{"name":"血府逐瘀汤","yuan":"《医林改错》卷上","zu":"当归 生地各9克 桃仁12克 红花9克 枳壳 赤芍各6克 柴胡3克 甘草3克 桔梗4.5克 川芎4.5克 牛膝10克","xiao":"活血祛瘀，行气止痛。","zhi":"上焦瘀血，头痛胸痛，胸闷呃逆，失眠不寐，心悸怔忡，瘀血发热，舌质暗红，边有瘀斑或瘀点，唇暗或两目暗黑，脉涩或弦紧，妇人血瘀经闭不行，痛经，肌肤甲错，日晡潮热；以及脱疽、白疙，眼科云雾移睛、青盲等目疾。现用于高血压、精神分裂症、脑震荡后遗症、慢性粒细胞性白血病、血栓性静脉炎、色素沉着、性功能低下、更年期综合征、顽固性头痛、顽固性低热、眼底出血等属瘀血内阻，日久不愈者。　"},
		{"name":"补阳还五汤","yuan":"《医林改错.卷下.瘫痿论》","zu":"黄芪 生，四两[20g]； 当归尾 二钱[3g]； 赤芍 一钱半[5g]； 地龙 一钱[3g]；川芎 一钱[3g]； 红花 一钱[3g]； 桃仁 一钱[3g]","xiao":"补气活血通络。","zhi":"中风。半身不遂，口眼歪斜，语言蹇涩，口角流涎，小便频数或遗尿不禁，舌黯淡，苔白，脉缓。"},
		{"name":"复元活血汤","yuan":"《医方一盘珠》卷二","zu":"玄胡1.5克 当归6克 甘草1.8克 山甲2.1克 熟庄黄9克 桃仁5～7粒(研) 红花0.9克 花粉1.5克","xiao":"活血祛瘀,疏肝通络。","zhi":"跌打损伤,瘀血留于胁下,痛不可忍。"},
		{"name":"七厘散","yuan":"《良方集腋》","zu":"血竭 麝香 冰片 乳香 没药 红花 朱砂 儿茶","xiao":"活血散瘀,定痛止血。","zhi":"跌打损伤,筋骨折断,瘀血肿痛,或刀伤出血;一切无名肿毒,烧伤烫伤。"},
		{"name":"温经汤","yuan":"《金匮.妇人杂病脉证并治第22》","zu":"吴茱萸 三两[9g] 当归 二两[6g] 芍药 二两[6g] 川芎 二两[6g] 人参 二两[6g] 桂枝 二两[6g] 阿胶 二两[6g] 牡丹皮 二两，去心 [6g] 生姜 二两[6g] 甘草 二两[6g] 半夏 半升[6g] 麦冬 去心，一升[9g]","xiao":"温经散寒，祛瘀养血。","zhi":"冲任虚寒，瘀血阻滞证。漏下不止，月经不调，或前或后，或一月再行，或经停不至，而见入暮发热，手心烦热，唇口干燥。亦治妇人久不受孕。"},
		{"name":"生化汤","yuan":"《傅青主女科.产后偏上卷》","zu":"全当归 八钱[各24g] 川芎 三钱[9g] 桃仁 去皮尖，十四枚[各6g] 干姜 炮黑，五分[2g] 甘草 炙，五分[2g]","xiao":"化瘀生新，温经止痛。","zhi":"产后瘀血腹痛。恶露不行，小腹冷痛。"},
		{"name":"桂枝茯苓丸","yuan":"《金匮要略》","zu":"桂枝 茯苓 赤芍 丹皮 桃仁","xiao":"活血化瘀,缓消癥块。","zhi":"瘀血留结胞宫,妊娠胎动不安,漏下不止,血 色晦暗,腹痛;经行不畅,痛经。"},
		{"name":"失笑散","yuan":"《苏沈良方》卷八","zu":"五灵脂 蒲黄各等分　","xiao":"活血祛瘀,散结止痛。","zhi":"瘀血停滞,心腹剧痛,痛有定处而拒按,或痛有针刺感,或见吐血黑便;积证初起属血滞血阻者;瘀血阻滞,月经不调,产后恶露不行,少腹急痛,小儿瘀血痛。"}
	]
},{
	"name":"化痰止咳平喘剂",
	"num":8,
	"intro":"化痰止咳平喘剂(prescriptions for facilitating expectoration，suppressing cough and relieving dyspnea)，以化痰止咳平喘药为主组成的方剂的统称。有消除痰饮、止咳平喘及化痰、散结、截疟等作用。用治痰病、咳嗽气喘及与痰有关的瘰疬瘿瘤、疟疾寒热等证。",
	"matters":"治疗外感咳嗽兼有表证者，宜与解表剂同用，以使表解气宣，痰浊亦化。治麻疹咳嗽时，忌用温燥收涩化痰止咳平喘药，以免影响疹毒透发。治痰嗽咯血者，也应忌用燥烈祛痰药，以免进一步伤阴动血。治燥痰咳嗽，莫过于阴柔滋腻，以防痰浊不化。治痰之要在于调气，故化痰类方剂又多与理气剂合用，以求气顺痰消。",
	"content":[
		{"name":"二陈汤","yuan":"《和剂局方》","zu":"半夏汤洗七次 橘红各五钱(各15g)白茯苓三钱(9g) 甘草炙,一钱半(4.5g) 生姜七片,乌梅一个","xiao":"燥湿化痰,理气和中。","zhi":"湿痰证.咳嗽痰多,色白易咯,恶心呕吐,胸膈痞闷,肢体困重,或头眩心悸,舌苔白滑或腻,脉滑。"},
		{"name":"指迷茯苓丸","yuan":"《全生指迷方》","zu":"茯苓266g 枳壳(麸炒)133g 半夏(制)533g 芒硝66g 生姜133g 制成 1000g","xiao":"燥湿行气，消解顽痰。","zhi":"痰停中脘，两臂酸痛，两手疲软。"},
		{"name":"陈夏六君汤","yuan":"《医学正传》","zu":"陈皮 法半夏 党参 茯苓 白术 炙甘草","xiao":"健脾益气，燥湿化痰。","zhi":"痰湿上蒙清窍之内耳眩晕。"},
		{"name":"苍附导痰丸","yuan":"《广嗣纪要》卷四","zu":"苍术（制）2两，香附（童便浸）2两。陈皮（去白）1两半，南星（炮，另制）1两，枳壳（麸炒）1两，半夏1两，川芎1两，滑石（飞）4两，白茯1两半，神曲（炒）1两。","xiao":"化痰燥湿调经。","zhi":"痰湿为患，妇人体质肥胖，痰涎壅盛，月经不行，或量少色淡。"},
		{"name":"启宫丸","yuan":"《医方集解》","zu":"芎藭 白术 半夏曲 香附各30克 茯苓 神曲各15克 橘红 甘草各3克","xiao":"燥湿化痰，理气调经。","zhi":"痰湿壅阻气机，久不受孕，形体肥胖，月经后期，色淡而黏。"},
		{"name":"橘半桂苓枳姜汤","yuan":"《温病条辨》卷三","zu":"半夏60克 小枳实30克 橘皮18克 桂枝30克 茯苓块18克 生姜18克","xiao":"燥湿化痰，健脾和胃。","zhi":"痰湿型阴吹，伴带下增多，色白质黏腻无臭，胸闷脘痞，口腻痰多。"},
		{"name":"半夏秫为汤","yuan":"《内经》","zu":"半夏 秫米","xiao":"化虫，和胃，安神。","zhi":"痰食饮浊中阻，胃中不和，夜寐不安。"},
		{"name":"金水六君煎","yuan":"《景岳全书》卷五十一","zu":"当归6克 熟地9～15克 陈皮4.5克 半夏6克 茯苓6克 炙甘草3克","xiao":"养阴化痰。","zhi":"肺肾虚寒，水泛为痰，或年迈阴虚，血气不足，外受风寒，咳嗽呕恶，喘逆多痰。"}
	]
},{
	"name":"安神剂",
	"num":5,
	"intro":"安神剂(sedative and tranquilizing prescriptions)，以安神药为主组成的方剂的统称。具有安神作用，治疗神志不安等疾患。",
	"matters":"因神志不安常以虚实夹杂证出现，故重镇安神剂和滋养安神剂往往配合应用，以求标本兼顾。重镇安神剂中多为金石类药物组成，质重碍胃，有的内含朱砂，有一定毒副作用，只宜暂服，不可久用，脾胃虚弱者尤当注意。矿石、介壳类等质地坚硬的药物，宜打碎先煎或久煎，以便充分发挥药力。使用安神剂服药期间忌服茶叶、咖啡等兴奋性饮料，饮食宜清淡；注意环境，防止噪声及恶性刺激，开展心理治疗，调节情志活动，建立正常心态，才能取得良效。",
	"content":[
		{"name":"朱砂安神丸","yuan":"无","zu":"黄连 朱砂 生地 当归 甘草","xiao":"镇心安神，清热养血。","zhi":"心火偏盛，阴血不足，证见失眠多梦，惊悸怔忡，胸中懊憹；小儿惊恐，夜啼不安。"},
		{"name":"磁朱丸","yuan":"无","zu":"磁石 朱砂 神曲","xiao":"重镇安神，清心明目。","zhi":"心神不安，心悸失眠，耳鸣耳聋，两目错花，视物不清，小儿夜啼。"},
		{"name":"珍珠母丸","yuan":"无","zu":"珍珠母 当归 熟地 人参 酸枣仁 柏子仁 犀角 茯神 沉香 龙齿","xiao":"镇心安神，滋阴养心。","zhi":"肝阳偏亢，阴血不不足，神志不宁，失眠，惊悸，头晕目眩。"},
		{"name":"琥珀多寐丸","yuan":"《景岳全书》","zu":"琥珀 茯苓 远志（制） 羚羊角 党参 甘草 鲜猪血","xiao":"平肝镇惊，安神养心。","zhi":"肝阳偏亢，心神失养，入睡艰难，时寐时寤，甚或彻夜不眠，心烦多梦，头晕耳鸣；心悸不安，善惊易恐，坐卧不安，头晕健忘。"},
		{"name":"生铁落饮","yuan":"《医学心悟》","zu":"天冬去心 麦冬去心 贝母各三钱 胆星 橘红 远志肉 石菖蒲 连翘 茯苓 茯神各一钱 元参 钩藤 丹参各一钱五分 辰砂三分","xiao":"镇心坠痰，安神定志。","zhi":"痰火上扰，惊痫癫狂；行经情志异常，狂躁不安，头痛失眠，面红目赤，心胸烦闷者。"}
	]
},{
	"name":"熄风剂",
	"num":11,
	"intro":"熄风剂(prescriptions for subduing endogenous　Wind［anticonvul sive］)，以熄风药为主组成的方剂的统称。有熄风止痉的作用。主要用治痉厥抽搐肝风内动诸证。",
	"matters":"治疗风病当首先辨明外风、内风，外风宜疏散，内风宜平熄。外风、内风病机不同，治疗多异，然而两者之间又常可互相影响，外风可以引动内风，内风也可兼杂外风，故熄风剂中专设祛风熄风剂一类，以适应此类复杂病情。治疗内风须区分虚实寒热，或投以凉肝熄风，或治以平肝熄风，或施以化痰熄风，或给予滋阴养血熄风之品，辨证用药，方能获效。肝风内动常合并窍闭神昏，证情危急者当熄风、开窍两剂合用，以共收熄风止痉回苏醒神之效，以资急救。饮食宜清淡素食，忌食酸辣肥甘厚腻之品，以免助火生痰，加重病情。",
	"content":[
		{"name":"钩藤散","yuan":"《圣济总录》卷一五五","zu":"钩藤2两，茯神2两，人参2两，当归2两，桔梗3两，寄生1两。","xiao":"熄风镇惊。","zhi":"吐泻日久,脾胃气虚,小儿慢惊风。"},
		{"name":"镇肝熄风汤","yuan":"《医学衷中参西录》","zu":"怀牛膝一两[30g] 生赭石 轧细，一两 [30g] 川楝子 捣碎，两钱 [6g]  五钱，捣碎 [15g] 生牡蛎 五钱，捣碎 [15g] 生龟版 五钱，捣碎[15g]  生杭芍 玄参 天冬 各五钱 [15g] 生麦芽 茵陈 各二钱 [各6g] 甘草 一钱半 [4.5g]","xiao":"肝熄风，滋阴潜阳。","zhi":"类中风。头目眩晕，目胀耳鸣，脑部热痛，心中烦热，面色如醉，或时常噫气，或肢体渐觉不利，口角渐形歪斜；甚或眩晕颠仆，昏不知人，移时始醒；或醒后不能复原，脉弦长有力者。"},
		{"name":"天麻钩藤饮","yuan":"《中医内科杂病证治新义》","zu":"天麻 栀子 黄芩 杜仲 益母草 桑寄生 夜交藤 朱茯神 ［各9g］ 川牛膝［12g］ 钩藤 后下 ［12g］ 石决明 先煎 ［18g］","xiao":"平肝熄风，清热活血，补益肝肾。","zhi":"肝经有热，肝阳偏亢，头痛头胀，耳鸣目眩，少寐多梦；或半身不遂，口眼喎斜，舌红，脉弦数。现用于高血压病。"},
		{"name":"建瓴汤","yuan":"《医学衷中参西录》中册","zu":"生怀山药30克 怀牛膝30克 生赭石24克(轧细) 生龙骨18克(捣细) 生牡蛎18克(捣细) 生怀地黄18克 生杭芍12克 柏子仁12克","xiao":"镇肝熄风,滋阴安神。","zhi":"肝阳上亢,头目眩晕,耳鸣目胀,心悸健忘,失眠多梦。"},
		{"name":"天麻丸","yuan":"《丹溪心法》","zu":"天麻 萆薢 牛膝 玄参 羌活 当归 独活 杜仲 附子 地黄","xiao":"散风活血，滋补肝肾，舒筋止痛。","zhi":"筋络拘挛，四肢麻木，风湿痹痛；肝肾不足，髓枯筋痿，腰膝酸软，筋骨无力，步履无力，步履艰难；中风口喎，半身不遂。"},
		{"name":"羚羊角散","yuan":"《济生方》","zu":"羚羊角 当归 川芎 酸枣仁 茯苓 木香 五加皮 防风 独活 薏苡仁 杏仁 甘草","xiao":"熄风镇痉,养血通络。","zhi":"妊娠中风,头项强直,筋脉挛急,言语蹇涩,痰涎不消;子痫抽搐,不省人事。"},
		{"name":"撮风散","yuan":"《直指小儿方》卷一","zu":"赤脚螟蚣半条（炙）钓藤7.5克 朱砂 直僵蚕（焙）血蝎梢各3克 麝香0.25克","xiao":"平肝熄风,除痰止痉。","zhi":"小儿撮口风,口撮如囊,吮乳不得;破伤风症,痉厥抽搐。"},
		{"name":"绿风羚羊饮","yuan":"《医宗金鉴》卷七十七","zu":"黑参6克 防风6克 茯苓6克 知母6克 黄芩2克 细辛3克 桔梗6克 羚羊角3克 车前子3克 大黄3克","xiao":"平肝熄风。","zhi":"外感风热,扰动肝阳,绿风内障。"},
		{"name":"涤痰汤","yuan":"《奇效良方》卷一","zu":"南星(姜制) 半夏(汤洗七次)各2.5克 枳实(麸炒) 茯苓(去皮)各6克 橘红4.5克 石菖蒲 人参各3克 竹茹2.1克 甘草1.5克","xiao":"豁痰开窍。","zhi":"中风，痰迷心窍，舌强不能言。"},
		{"name":"半夏白术天麻汤","yuan":"《脾胃论》（人卫本）卷下","zu":"黄柏2分，干姜3分，天麻5分，苍术5分，白茯芩5分，黄耆5分，泽泻5分，人参5分，白术1钱，炒曲1钱，半夏（汤洗7次）1钱5分，大麦糵面1钱5分，橘皮1钱5分。","xiao":"温凉并济，补泻兼施,补脾燥湿，化痰息风。","zhi":"痰厥头痛，咳痰稠粘，头眩烦闷，恶心吐逆，身重肢冷，不得安卧，舌苔白腻，脉弦滑。现用于美尼尔氏综合征见有上述症状者。"},
		{"name":"祛风导痰汤","yuan":"《杏苑生春》卷三","zu":"防风（去芦）南星（牛胆制）枳实 茯苓（去皮）羌活各3克 白术（土炒）半夏各4.5克 甘草（炙）1.5克 橘皮（去白）4.5克 生姜5片","xiao":"祛风利痰开窍。","zhi":"类中痰闭,神昏不语,痰涎壅盛,四肢颤抖或抽搐。"}
	]
},{
	"name":"开窍剂",
	"num":6,
	"intro":"开窍剂(prescriptions for inducing resuscitation)，以开窍药为主组成的方剂的统称。有开窍醒神的作用，主治神志昏迷。",
	"matters":"开窍剂只能用治实证的神昏窍闭，若因误汗、误吐、误下或大失血、久病体虚、元气衰微而见神志昏迷，四肢厥冷，冷汗淋漓，尿遗手撒，脉微欲绝，无气虚脱，属于神昏脱证者，不可使用开窍剂，以免犯虚虚之戒。运用开窍剂治疗神昏闭证时，要密切观察病情，一旦出现冷汗肢凉，尿遗手撒脱证时，应立即停药，改投回阳救逆固脱之剂，以资急救。开窍剂多含辛香走散之品，只可急用，不可久服，免伤元气。又开窍剂中多含雄黄、朱砂等有毒之品，也不能过服久用，以免中毒。部分开窍剂还含活血通经堕胎之品，孕妇慎用。",
	"content":[
		{"name":"安宫牛黄丸","yuan":"《温病条辨》","zu":"牛黄、水牛角浓缩粉、麝香、珍珠、朱砂、雄黄、黄连、黄芩、栀子、郁金、冰片。","xiao":"清热解毒，镇惊开窍。","zhi":"用于神昏谵语；中风昏迷及脑炎、脑膜炎、脑出血、败血症见上述症候者。"},
		{"name":"紫雪丹","yuan":"《太平惠民和剂局方》卷六","zu":"本方由石膏、寒水石、磁石、滑石、犀角、羚羊角、木香、沉香、元参、升麻、甘草、丁香、朴硝、硝石、麝香、朱砂等十六味药物配制而成。","xiao":"清热解毒，镇痉熄风，开窍定惊。","zhi":"温热病、热邪内陷心包，症见高热烦躁，神昏谵语、抽风痉厥、口渴唇焦，尿赤便闭，及小儿热盛惊厥。"},
		{"name":"至宝丹","yuan":"《太平惠民和剂局方.治诸风》","zu":"水牛角 浓缩粉 朱砂 研飞 雄黄 研飞 生玳瑁屑 研 琥珀 研，各一两 麝香 研 龙脑 研，各一分 金箔 半入药，半为衣 银箔 研，各五十片 牛黄 研，半两 安息香 一两半，为末，以无灰酒搅澄飞过，滤去沙土，约得净数一两，慢火熬成膏","xiao":"清热开窍，化浊解毒。","zhi":"痰热内闭心包证。神昏谵语，身热烦躁，痰盛气粗，舌红苔黄垢腻，脉滑数，以及中风、中暑、小儿惊厥属于痰热内闭者。"},
		{"name":"卧龙散","yuan":"《卫生鸿宝》","zu":"麝香 冰片 猪牙皂 灯心草 蟾酥 闹羊花 荆芥穗","xiao":"温宣开窍,通关镇痛。","zhi":"中暑中恶,气闭昏厥,神志不清,四肢厥冷,关窍紧闭。"},
		{"name":"苏合香丸","yuan":"《广济方》","zu":"苏合香，安息香，冰片 ，水牛角浓缩粉，麝香， 檀香 ，沉香 ，丁香 ，香附 ， 木香 ，乳香（制）， 荜茇 ，白术 ， 诃子肉， 朱砂","xiao":"芳香开窍，行气止痛。","zhi":"用于中风，中暑，痰厥昏迷，心胃气痛。"},
		{"name":"神犀丹","yuan":"《温热经纬》","zu":"犀角［水牛角代］（1800克）石菖蒲（180克）黄芩（180克）真怀生地（绞汁500克）银花（500克）金汁（300克）连翘（300克）板蓝根（270克）香鼓（240克）元参（210克）花粉（120克）紫草（120克）","xiao":"清热开窍，凉血解毒。","zhi":"温热暑疫，邪入营血证。高热昏谵，斑疹色紫，口咽糜烂，目赤烦躁，舌紫绛等。"}
	]
},{
	"name":"补益剂",
	"num":21,
	"intro":"补益剂(tonic prescriptions)，以补益药为主组成的方剂的统称。有滋养补虚、补益人体气血阴阳不足的作用，治疗各种虚证。",
	"matters":"正虚而外邪未尽者，当先祛邪，一般不宜过早使用补益剂，以免留邪为患，必要时扶正祛邪并用。要辨别虚实真假，若“大实而有羸状”出现真实假虚的证候时，不可妄投补剂而实其实；若“至虚而有盛候”出现真虚假实的证候时，当补反攻，以虚其虚，则贻害无穷。使用补益剂还要根据病情区别使用，若气血暴脱，元气虚极当用峻补之剂急救危亡；若久病体虚，病势较缓，病程较长的宜用平补之剂，缓慢调养。使用补益剂时一定要调理脾胃，以使补而不滞。补益剂多需久服，宜作丸散使用，又多属厚味，入煎剂宜久煎。服药期间可根据虚证的不同，选择相应滋补食品。",
	"content":[
		{"name":"四君子汤","yuan":"《太平惠民和剂局方》","zu":"人参（9克） 白术（9克） 茯苓（9克） 炙甘草（6克）","xiao":"益气健脾。","zhi":"脾胃气虚证。面色萎白，语声低微，气短乏力，食少便溏，舌淡苔白，脉虚弱。（该方常用于慢性胃炎、胃及十二指肠溃疡等属脾气虚者。）"},
		{"name":"参苓白术散","yuan":"《太平惠民和剂局方》","zu":"白扁豆、白术、茯苓、甘草、桔梗、莲子、人参、砂仁、山药、薏苡仁。","xiao":"补脾胃，益肺气。","zhi":"用于脾胃虚弱，食少便溏，气短咳嗽，肢倦乏力。"},
		{"name":"补中益气汤","yuan":"《脾胃论》","zu":"黄芪15、人参15、白术10、灸甘草15、当归10、陈皮6、升麻6、柴胡12、生姜9片、大枣6枚　","xiao":"补中益气,升阳举陷。","zhi":"脾胃虚弱,发热自汗,渴喜温饮,少气懒言,体倦肢软,面色白;气虚下陷,脱肛久泻,子宫下垂;疮疡痈肿;月经量多,崩漏胎漏;小儿五软;慢喉瘖;上睑下垂,圆翳内障,青风内障"},
		{"name":"琼玉膏","yuan":"《洪氏集验方》","zu":"生地黄汁 茯苓 人参 白蜜","xiao":"滋阴润肺。","zhi":"肺阴亏虚,肺痨咳嗽,颧红盗汗,痰中带血。"},
		{"name":"生脉饮","yuan":"《医学启源》","zu":"人参、麦冬、五味子。","xiao":"益气，养阴生津。","zhi":"用于气阴两亏，心悸气短，自汗。"},
		{"name":"人参五味子汤","yuan":"《幼幼集成》卷","zu":"人参3克 漂白术4.5克 白云苓3克 北五味1.5克 杭麦冬3克 炙甘草2.4克","xiao":"健脾益气,养阴敛肺。","zhi":"小儿久嗽,脾肺气虚,乏力口渴,自汗气短。"},
		{"name":"四物汤","yuan":"《外台》卷三十六引《小品方》","zu":"桔梗3分，紫菀3分，甘草1分（炙），麦门冬7分（去心）。","xiao":"补血和血，调经化瘀。","zhi":"冲任虚损，月经不调，脐腹亏痛，崩中漏下，血瘕块硬，时发疼痛；妊娠将理失宜，胎动不安，腹痛血下；及产后恶露不下，结生瘕聚，少腹坚痛，时作寒热；跌打损伤，腹内积有瘀血。"},
		{"name":"当归补血汤","yuan":"《内外伤辨惑论》","zu":"黄芪（30克） 当归（6克）","xiao":"补气生血。","zhi":"血虚阳浮发热证。肌热面赤，烦渴欲饮，脉洪大而虚，重按无力。亦治妇人经期、产后血虚发热头痛；或疮疡溃后，久不愈合者。（本方可用于妇人经期、产后发热等属血虚阳浮者，以及各种贫血、过敏性紫癜等属血虚气弱者。）"},
		{"name":"八珍汤","yuan":"《正体类要》","zu":"当归(酒拌)10g、川芎5g、白芍药8g、熟地黄(酒拌)15g、人参3g、白术(炒)10g、茯苓8g、炙甘草5g。","xiao":"补益气血。","zhi":"气血两虚。 面色苍白或萎黄,头晕眼花,四肢倦怠,气短懒言,心悸怔忡,食欲减退,舌质淡,苔薄白,脉细虚。"},
		{"name":"炙甘草汤","yuan":"《伤寒论》","zu":"炙甘草（12克） 生姜（9克） 桂枝（9克） 人参（6克） 生地黄（50克） 阿胶（6克） 麦门冬（10克） 麻仁（10克） 大枣（10枚）","xiao":"益气滋阴，通阳复脉。","zhi":"1．阴血阳气虚弱，心脉失养证。脉结代，心动悸，虚羸少气，舌光少苔，或质干而瘦小者。2．虚劳肺症。干咳无痰，或咳吐涎沫，量少，形瘦短气，虚烦不眠，自汗盗汗，咽干舌燥，大便干结，脉虚数。（本方常用于功能性心律不齐、期外收缩、冠心病、风湿性心脏病、病毒性心肌炎、甲状腺功能亢进等而有心悸气短、脉结代等属阴血不足，阳气虚弱者。）　"},
		{"name":"泰山磐石散","yuan":"《古今医统大全》卷八十五","zu":"人参（3克） 黄芪（6克） 白术（6克） 炙甘草（2克） 当归（3克） 川芎（2克） 白芍药（3克） 熟地黄（3克） 川续断（3克） 糯米（6克） 黄芩（3克） 砂仁（1.5克）","xiao":"益气健脾，养血安胎。","zhi":"气血虚弱所致的堕胎、滑胎。胎动不安，或屡有堕胎宿疾，面色淡白，倦怠乏力，不思饮食，舌淡苔薄白，脉滑无力。"},
		{"name":"六味地黄丸","yuan":"《小儿药证直诀》","zu":"熟地黄、山茱萸(制)、山药、牡丹皮、茯苓、泽泻。","xiao":"滋阴补肾。","zhi":"滋阴补肾"},
		{"name":"左归丸","yuan":"《景岳全书》","zu":"熟地 山药 枸杞 山茱萸 牛膝 菟丝子 鹿胶 龟胶","xiao":"滋阴补肾。","zhi":"真阴不足,头目眩晕,腰酸腿软,遗精滑泄,自汗盗汗;月经不调,崩漏带下,久不受孕。"},
		{"name":"大补阴丸","yuan":"《丹溪心法》","zu":"黄柏 知母 熟地黄 龟版 猪脊髓","xiao":"滋阴降火。","zhi":"肝肾阴虚,虚火上炎,骨蒸潮热,盗汗遗精,咳嗽咯血,心烦易怒,足膝疼热或痿软;红斑狼疮;产后虚羸。"},
		{"name":"一贯煎","yuan":"《柳州医话》","zu":"北沙参，麦冬，当归身各三钱(各9克)，生地黄六钱至一两五钱(18-30克)，枸杞子三钱至六钱(9-18克)，川楝子一钱半(4.5克)","xiao":"滋阴疏肝。","zhi":"肝肾阴虚，肝气不舒证。胸脘胁痛，吞酸吐苦，咽干口燥，舌红少津，脉细弱或虚弦。并治疝气瘕聚。"},
		{"name":"益胃汤","yuan":"《温病条辨》卷二","zu":"北沙参15克 麦冬15克 生地15克 玉竹5克 冰糖15克","xiao":"益胃生津，润肺止咳。用于慢性肝炎，脾胃阴虚，倦怠无力，食欲不振，烦热，口渴等症。","zhi":"阳明温病，下后汗出，胃阴受伤者。"},
		{"name":"调元肾气丸","yuan":"《外科正宗》卷二","zu":"怀生地（酒煮，捣膏）120克 山萸肉 山药 牡丹皮 白茯苓各60克 人参 当归身 泽泻 麦门冬（捣膏）龙骨 地骨皮各30克 木香 砂仁各9克 黄柏（盐水炒）知母（童便炒）各15克","xiao":"补益肾气,散肿破坚。","zhi":"骨瘤后期兼肾虚证。"},
		{"name":"右归丸","yuan":"《景岳全书》","zu":"熟地黄、附子（炮附片）、肉桂、山药、山茱萸（酒炙）、菟丝子、鹿角胶、枸杞子、当归、杜仲（盐炒）","xiao":"温补肾阳,填精补血。","zhi":"肾阳不足,命门火衰。气衰神疲,畏寒肢冷;阳痿遗精,阳衰无子;大便不实,完谷不化,小便自遗;腰膝软弱,下肢浮肿;气虚阳，微噎膈;疮疡痈疽,创伤后期;命门火衰,闭经不孕;圆翳内障,青风内障。"},
		{"name":"加减复脉汤","yuan":"《温病条辨》卷三","zu":"炙甘草（18克） 干地黄（18克） 生白芍（18克） 麦冬（15克） 阿胶（9克） 麻仁（9克）","xiao":"滋阴养血，生津润燥。","zhi":"温热病后期，邪热久羁，阴液亏虚证。身热面赤，口干舌燥，脉虚大，手足心热甚于手足背者。"},
		{"name":"健步虎潜丸","yuan":"《伤科补要》卷三","zu":"龟胶（蛤粉炒成珠）鹿角胶（制同止）虎胫骨（酥油炙）何首乌（黑豆拌，蒸、晒各九次）川牛膝（酒洗，晒干）杜仲（姜汁炒断丝）锁阳 威灵仙（酒洗）当归（洒洗，晒干）各60克 黄柏（酒洗，晒干，盐水拌，酒少许炒）人参 羌活 白芍（微炒）白术（土炒）各30克 熟地60克 大川附子45克（童便、盐水各250毫升，生姜30克切片，同煮一日，令极熟，水干再添盐水，煮毕取出，剥皮切片，又换净水，入川黄连15克、甘草15克，同煮约二小时，取出晒干，如琥珀色，明亮可用）","xiao":"补气血,壮筋骨。","zhi":"跌打损伤,血虚气弱,筋痿步艰。"},
		{"name":"七宝美髯丹","yuan":"《本草纲目》卷十八","zu":"赤白何首乌各500克（米泔水浸三四日，去皮切片，用黑豆2升同蒸至豆熟，取出去豆，晒干，换豆再蒸，如此九次。晒干） 赤白茯苓各500克（去皮，研末，以人乳拌匀晒干） 牛膝250克（酒浸一日，同何首乌第七次蒸至第九次，晒干） 当归240克（酒浸，晒） 枸杞子240克（酒浸，晒） 菟丝子240克（酒浸生芽，研烂，晒） 补骨脂120克（以黑脂麻拌炒）","xiao":"补肾，固精，乌发，壮骨，续嗣延年。","zhi":"肝肾不足，须发早白，齿牙动摇，梦遗滑精，崩漏带下，肾虚不育，腰膝酸软。"}
	]
},{
	"name":"固涩剂",
	"num":9,
	"intro":"固涩剂(prescriptions for arresting discharges)，以固涩药为主组成的方剂的统称。有收敛固涩的作用。用治气血精液滑脱耗散，疮疡久溃不敛之证。",
	"matters":"固涩剂常与补益剂同用，以收标本兼顾之效。有实邪者，如热病多汗，痰浊壅肺实证喘咳，实热积滞泄泻痢疾，湿热下注或虚火扰动遗精滑泄，湿热溺涩，湿热带下及火毒疮溃初起者，均不宜用。若外邪未尽，过早使用此类药剂，有闭门留寇之弊。",
	"content":[
		{"name":"牡蛎散","yuan":"《太平惠民和剂局方.卷之八治杂病》","zu":"黄芪去苗土 [30g] 麻黄根洗 [9g] 牡蛎 米泔浸，刷去土，火烧通赤，各一两[30g]","xiao":"益气固表，敛阴止汗。","zhi":"自汗，盗汗。常自汗出，夜卧更甚，心悸惊惕，短气烦倦，舌淡红，脉细弱。"},
		{"name":"九仙散","yuan":"《医学正传》卷二","zu":"人参、款冬花、桑白皮、桔梗、五味子、阿胶、乌梅 各一两 ［各10g］ 贝母 半两 ［5g］ 罂粟壳 八两，去顶，蜜炒黄 ［15g］","xiao":"敛肺止咳，益气养阴。","zhi":"久咳肺虚证。久咳不已，咳甚则气喘自汗，痰少而粘，脉虚数。"},
		{"name":"真人养脏汤","yuan":"《太平惠民和剂局方》","zu":"人参 当归 白术各六钱（各18g） 肉豆蔻半两（15g） 肉桂 甘草炙，各八钱（各24g） 白芍药一两六钱（48g） 木香一两四钱（42g） 诃子一两二钱（36g）罂粟壳三两六钱（108g）","xiao":"涩肠固脱，温补脾肾。","zhi":"久泻久痢，脾肾虚寒证。泻痢无度，滑脱不禁，甚至脱肛，或下痢赤白，或大便脓血，里急后重，日夜无度，臆脐腹疼痛，喜温喜按，倦怠食少，舌淡苔白，脉迟细。"},
		{"name":"四神丸","yuan":"《校注妇人良方》","zu":"肉豆蔻 补骨脂 五味子 吴茱萸 生姜 大枣","xiao":"温补脾肾，涩肠止泻。","zhi":"脾肾虚寒，五更泄泻，不思饮食，或久泻不愈，腹痛腰酸肢冷，神疲乏力。"},
		{"name":"桃花汤","yuan":"《圣济总录》卷九十七","zu":"桃花(干者)6克 甘遂(炒)7.5克 郁李仁(去皮、双仁，别研膏) 海蛤(捣碎，炒) 枳实(去瓤，麸炒) 大黄(锉，炒)各15克 木香 陈橘皮(汤浸，去白，炒)各7.5克","xiao":"温中涩肠。","zhi":"五脏风壅，膈实不宜，大便秘涩。"},
		{"name":"金锁固精丸","yuan":"《医方集解》","zu":"沙苑蒺藜 芡实 莲须 龙骨（煅） 牡蛎（煅） 莲子肉","xiao":"补肾涩精。","zhi":"肾虚不固，遗精滑泄，面色苍白，神疲乏力，四肢酸软，腰痛耳鸣，舌淡苔白，脉细弱。"},
		{"name":"桑螵蛸散","yuan":"《本草衍义》卷十七","zu":"桑螵蛸 远志 石菖蒲 人参 茯神 当归 龙骨 龟版(醋炙)各30克","xiao":"补肾养心，涩精止遗。","zhi":"心肾两虚，小便频数，如稠米泔，心神恍惚，健忘食少，或溺后遗沥不尽，或睡中遗尿，或梦遗失精，舌淡苔白，脉细弱者。"},
		{"name":"缩泉丸","yuan":"《魏氏家藏》","zu":"山药、益智(盐炒)、乌药","xiao":"温补肾阳，固涩小便。","zhi":"下元虚寒，遗尿、尿频。"}
	]
}
]

module.exports = {
	prescription:prescription_data
}