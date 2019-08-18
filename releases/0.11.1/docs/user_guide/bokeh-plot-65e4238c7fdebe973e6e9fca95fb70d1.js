
(function(global) {
  function now() {
    return new Date();
  }

  if (typeof (window._bokeh_onload_callbacks) === "undefined") {
    window._bokeh_onload_callbacks = [];
  }

  function run_callbacks() {
    window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
    delete window._bokeh_onload_callbacks
    console.info("Bokeh: all callbacks have finished");
  }

  function load_libs(js_urls, callback) {
    window._bokeh_onload_callbacks.push(callback);
    if (window._bokeh_is_loading > 0) {
      console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
      return null;
    }
    if (js_urls == null || js_urls.length === 0) {
      run_callbacks();
      return null;
    }
    console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
    window._bokeh_is_loading = js_urls.length;
    for (var i = 0; i < js_urls.length; i++) {
      var url = js_urls[i];
      var s = document.createElement('script');
      s.src = url;
      s.async = false;
      s.onreadystatechange = s.onload = function() {
        window._bokeh_is_loading--;
        if (window._bokeh_is_loading === 0) {
          console.log("Bokeh: all BokehJS libraries loaded");
          run_callbacks()
        }
      };
      s.onerror = function() {
        console.warn("failed to load library " + url);
      };
      console.log("Bokeh: injecting script tag for BokehJS library: ", url);
      document.getElementsByTagName("head")[0].appendChild(s);
    }
  };var element = document.getElementById("60a71164-518f-4e43-b286-b09884ead5df");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '60a71164-518f-4e43-b286-b09884ead5df' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"5e9a3ba1-3aed-48ee-a499-004065d5a4d6":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"25702ad2-b6e3-4006-b712-296eb20f73ea","type":"Circle"},{"attributes":{"plot":{"id":"546b96bc-8bdd-41d6-b4a9-fc6cb73e3426","subtype":"Figure","type":"Plot"},"ticker":{"id":"48df0a77-978e-410e-acb0-78e993befee1","type":"BasicTicker"}},"id":"ad18e02b-598e-448c-beea-1273e9d2414e","type":"Grid"},{"attributes":{"callback":null},"id":"dcf936ab-3f2b-456f-8c53-5b4d5ef11c71","type":"DataRange1d"},{"attributes":{"data_source":{"id":"7a2ed481-c5bf-4283-b3ac-66f83c0bf082","type":"ColumnDataSource"},"glyph":{"id":"0ca67415-106c-4a7c-afb5-897212d5e8ab","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"25702ad2-b6e3-4006-b712-296eb20f73ea","type":"Circle"},"selection_glyph":null},"id":"6ee0dd24-fb54-459b-94ca-e8a40065fadc","type":"GlyphRenderer"},{"attributes":{},"id":"a91d6fea-47d3-4034-ba52-36fd817ecbcf","type":"BasicTickFormatter"},{"attributes":{},"id":"eff628f8-80a6-45a2-bb4a-2ea3dbcc247e","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"cb9992f6-7f60-46b0-8762-918db9fa2bb0","type":"BasicTickFormatter"},"plot":{"id":"3bb8461e-5f46-4269-b021-e9a83551d9a4","subtype":"Figure","type":"Plot"},"ticker":{"id":"14d4f420-e1aa-4f51-bbb2-fec0f0252130","type":"BasicTicker"}},"id":"74383bf8-72db-4344-a68e-f841cdfc8f32","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"3bb8461e-5f46-4269-b021-e9a83551d9a4","subtype":"Figure","type":"Plot"},"ticker":{"id":"14d4f420-e1aa-4f51-bbb2-fec0f0252130","type":"BasicTicker"}},"id":"de9d0df4-7eda-48c1-b3e6-03dafda5d0c7","type":"Grid"},{"attributes":{},"id":"a2eb749e-c149-4e37-8438-81b93f7b6fc3","type":"ToolEvents"},{"attributes":{"formatter":{"id":"a91d6fea-47d3-4034-ba52-36fd817ecbcf","type":"BasicTickFormatter"},"plot":{"id":"546b96bc-8bdd-41d6-b4a9-fc6cb73e3426","subtype":"Figure","type":"Plot"},"ticker":{"id":"48df0a77-978e-410e-acb0-78e993befee1","type":"BasicTicker"}},"id":"2a5bd606-9d7c-4f72-a592-1875608ca242","type":"LinearAxis"},{"attributes":{"callback":{"id":"c215c78f-3300-447f-843a-7e631cde9e84","type":"CustomJS"},"column_names":["y","x"],"data":{"x":[0.7315389445602091,0.8969700950519041,0.38370584925752427,0.8597582622515534,0.5349739251734809,0.22112462886021,0.4421131309533909,0.43086311865014004,0.627528396147803,0.8157148506051752,0.7504033430941687,0.07809106048888792,0.6680054776434216,0.5789851048661643,0.32529189439397577,0.5471225051336148,0.4636781425464833,0.23551917768375796,0.20450567776628759,0.20702200781025704,0.9420994343464271,0.6802184409074118,0.9615859309539904,0.6546438332700769,0.20287572480566285,0.10512652723131155,0.30901452147995623,0.9024114983456011,0.24137945728566723,0.7014903016355828,0.4194845662531451,0.19200045635351348,0.8923566316645588,0.6606139387688259,0.04405489320129219,0.5608166595305552,0.7907013851900035,0.5433608826197983,0.024891916694792626,0.9343982680670391,0.827794718882938,0.1530479169332145,0.8273654523031184,0.3483807997115377,0.9600348877706785,0.6794819216973069,0.4082033782326505,0.06759137137445681,0.14130747090708928,0.9931806367237295,0.35367286670684017,0.8875493536983251,0.5219020461201422,0.006800162690412059,0.6052488032904458,0.7186147650052516,0.967857768911119,0.5586290063384701,0.8104220161168746,0.09471560332041296,0.06822877213713152,0.07509549296435492,0.12413325346344029,0.023650908506045565,0.8711241667503288,0.6536431329758527,0.7253860736489193,0.3149586470995158,0.7791459632415483,0.31710320280322635,0.6354228613703508,0.3165856215406081,0.9285979456731477,0.004675096110378418,0.33073718252259887,0.9715497052072354,0.5279410519530517,0.042205007217449575,0.09342955629162242,0.7098257446558356,0.944649581771313,0.7581461237082199,0.23918689520293657,0.8962380937557877,0.7619867368624041,0.8970478310757902,0.05856246540192023,0.029170035516572046,0.29372870856396516,0.8027715420834117,0.007401692293999007,0.5554003214144899,0.9941676481241188,0.7839956440010813,0.1229528339936583,0.9562566463428659,0.4675327038291849,0.9679027578095513,0.32970085279738326,0.35473073009766964,0.02830182613654386,0.28577678076997404,0.33647714258783445,0.8568200415883085,0.505673285004189,0.44854965123457013,0.25538535861766565,0.8124011439891994,0.35624021137412265,0.4737171270121642,0.8195143873157895,0.7939833092337786,0.5885433187410846,0.36521846889891385,0.2690315584445827,0.9188598132488751,0.26014416105275184,0.01709355277852176,0.14105198030117072,0.8683737171151817,0.4352843085063034,0.38318856015312963,0.03713969540084805,0.8329425546627605,0.5109338823763974,0.5619284936132507,0.3624419364075131,0.05890894516565737,0.7927724224816816,0.16278816352250547,0.28356180491078764,0.7545088394000548,0.3301159063840612,0.3043851565446659,0.05261836515985152,0.03717136200829296,0.8440843974653549,0.7007695664050029,0.06074968953922444,0.533471583213656,0.8880874944892059,0.947088848181771,0.3984954904103266,0.1398701661978664,0.905103615074991,0.5358304137775971,0.433762685644158,0.6152439580342404,0.900018217886217,0.7350991605089516,0.5633632057922001,0.1046347762581532,0.4841856020743528,0.29658781347131813,0.03436372666070686,0.9526198417895472,0.39308571463858866,0.910077253139687,0.24143254548790705,0.8783286129746846,0.5500076357972797,0.7184724101177992,0.4721218940650389,0.5886001824915116,0.8122659184598078,0.7307583448060375,0.19529010320258489,0.7577035423582442,0.9920106909301702,0.6564907015753921,0.39079089642980647,0.8133936388104024,0.5659275323403253,0.11395812313448861,0.5313561829090117,0.46972267304662474,0.7626882782237505,0.21508542863141666,0.8970824260687393,0.9696049233888577,0.8452447429248424,0.8115714045875803,0.5935473306661688,0.929238748009345,0.003239257636102999,0.9821130440857975,0.058515732028280754,0.22776084748552916,0.8397684152047022,0.1402404961659769,0.38981285374574015,0.6295948641206892,0.016166794717249244,0.2567980459002508,0.3607269046494519,0.6406544267880001,0.7676240465516185,0.9122077728803505,0.11765312711654052,0.6344920218826657,0.027748966774830186,0.953856575006248,0.934973543504601,0.7151864419755032,0.7779043808755145,0.682234332178359,0.2337607202354568,0.29728512337366697,0.10739084313343117,0.43798423055048075,0.32335978766577356,0.5253537285513695,0.5218628630075226,0.09423579645503188,0.4883335423722993,0.7570618245005336,0.8930193386718488,0.6415678603206102,0.28388582599253986,0.4411173169388065,0.3799423201615867,0.46480913309790617,0.47021691581662084,0.6646391732758588,0.5145923251720311,0.9246891218324512,0.08058542059163953,0.6712846277634023,0.48579859937190395,0.4444381803149938,0.7414049392670715,0.25913443781239875,0.014546873526955939,0.06307838440674773,0.9867068664379091,0.7982558336272634,0.10846272864550599,0.10702913783086321,0.27040197422179724,0.5472946736386509,0.7426215055539459,0.8916659538589621,0.31615450168769044,0.7753554242723962,0.6175886451561357,0.31770499428634025,0.7720666052416354,0.430322826925537,0.30851567017740433,0.09145374691372121,0.9057175216990909,0.951899634235486,0.4400984478758164,0.08156221527636598,0.9203681602324358,0.10370513956216254,0.1034341671554827,0.29380463265709145,0.3692687455437098,0.7851867857260344,0.47788985651301763,0.20869113911142934,0.17887147334620157,0.3911780523553725,0.6635886651887113,0.6261506463532007,0.137607217648407,0.42613129607892986,0.0794216978418264,0.9736938528783206,0.11844767874075646,0.2030803475689975,0.6321469137885138,0.7408151250725745,0.8875773856154078,0.3946140534662992,0.13334813591904682,0.6160684875214155,0.10785757849491406,0.06656387341253622,0.8330426551208396,0.05698492252013354,0.0850490311956158,0.6606897823525597,0.13897011925179392,0.3462222522660402,0.9477237736824332,0.5045676177473101,0.8812035438121768,0.6937194859100838,0.7415906735695812,0.9347281994100908,0.30719919822627506,0.42344196947037194,0.7942263636918158,0.1103558702634686,0.5471710169653597,0.24315480584574412,0.3847968154328828,0.1811288338665562,0.09184522200635314,0.11522381195630971,0.9196129490810981,0.21258099617548032,0.08935500446616917,0.5942372662690371,0.3454561991255427,0.8163801252522213,0.8036465053183561,0.17811194566152166,0.09462803143970744,0.355125050517062,0.5785481351135839,0.9458935531775142,0.8785072344092888,0.03218578798056304,0.5715594861567332,0.1807190407845105,0.9140746626174552,0.1731690633011962,0.11115805660078204,0.8945490311331461,0.9416479668736127,0.3008226116199286,0.5355081282518794,0.3030193990371137,0.9954376179968831,0.44659791700084395,0.623260389730146,0.26176401345138145,0.505106677839634,0.25193176141482476,0.336712021206089,0.5123133649468972,0.2661443203428905,0.6757755345508134,0.03085274483680478,0.004439966316196364,0.07100098104944308,0.10326482614169763,0.44513792908572447,0.1574654537566521,0.556814181712215,0.009747032652754228,0.7034874550675496,0.6216533298630671,0.49782859398608004,0.9392071866141225,0.996068326303581,0.586148804403199,0.7705610869184017,0.7606637727182999,0.8895883007603219,0.6917171981900113,0.33321347941737745,0.513469205464211,0.4301086665292799,0.01244971018644836,0.11213332174766377,0.6964588165136059,0.2930076976884324,0.10251184828883753,0.014205709508583464,0.5895899663981505,0.5956993359359322,0.427502957845733,0.13427711637578432,0.6935088311466582,0.5354422111347972,0.11236247930358989,0.5874908989476941,0.4114343575302212,0.5179664896839786,0.6136046209512765,0.8237221117356424,0.03336274148931684,0.0020728159415785985,0.9522573449495968,0.619192135851185,0.6610031119252294,0.05926775646631066,0.6352108340379945,0.24061411135272115,0.3506553340167161,0.8704994489946125,0.3637408261712146,0.31848513499071696,0.6913723667245273,0.21286919099096246,0.612657419438773,0.3563522335922301,0.651070306333173,0.556521474719045,0.15317638731444705,0.7449968261662421,0.5796417772726397,0.7342299467287257,0.3327757249905351,0.010524749835756797,0.5377794846693218,0.5774687123710799,0.4393337981554917,0.7976728389040771,0.531532922529203,0.30376977974540864,0.7694542887940218,0.8467549222359106,0.20646939717417767,0.6436220680095017,0.048367007050007405,0.5345821186874059,0.8488444354803186,0.7237811753106811,0.19144859112857304,0.051034755384666175,0.33458107218181476,0.02419710694510102,0.41661648184016487,0.22100722456410649,0.06970930330888525,0.5344586213341681,0.15360521733410637,0.21826898476897838,0.7000533681770641,0.23903466785734884,0.6207129751219657,0.011328818298304011,0.712446148508702,0.27506797049192744,0.906278033211183,0.9687742010188104,0.5886735394037456,0.37455479536764325,0.5451375890253085,0.7820659465479627,0.9564802049558955,0.470745530860853,0.47283099707861953,0.8327225129554227,0.16281926519484047,0.9440059882938633,0.47998243792406614,0.3012401142838118,0.20191634756799914,0.10706537101672042,0.23645911946765763,0.07883703492047944,0.4403890163816633,0.7776609197182454,0.7221378852821957,0.1200882254894069,0.9572098228724546,0.1214593179020923,0.851532610243197,0.42073209742481354,0.6612390298008365,0.8529192387173992,0.6687625605669681,0.13187187083323404,0.46961047582782534,0.9971555102739252,0.30432263962675776,0.39953640519745937,0.2493942639686777,0.04526502168427704,0.2744290360855849,0.10191118935474985,0.3738312672268279,0.19887492492469128,0.5112924963527572,0.5415558015277,0.13895663004600245,0.24306492515753253,0.4004753668525747,0.6681686781495321,0.11286859465211707,0.32240507868448054,0.7163948983416842,0.5252395454989375,0.6024918519189889,0.7092039172827342,0.06216367797256295,0.21413862432014485,0.6175371409460242,0.4757005431401363,0.5255155379023455,0.5069446099524902,0.09898847807185274,0.22570156067181235,0.7248492813648999,0.7480366258096691,0.21655176747256522,0.9531071634997123,0.4772256066401709,0.023687718625576948,0.10644434175029949,0.9073534281426043,0.7158954480305811,0.7493605587887582,0.47642789163525756],"y":[0.19511778360991183,0.6588802790516842,0.9927427220709307,0.7875357660059147,0.8236848728730158,0.8454387892332144,0.55215581461042,0.1920156775514411,0.3786358285582765,0.1768760978689201,0.6110702643361896,0.22261115193135728,0.39513522950311086,0.7613978982293697,0.842908823290284,0.3059488398959128,0.770852782819997,0.5695178329393723,0.6393467619239758,0.9054378463399165,0.8166626469530858,0.2172112789398979,0.7647528743224856,0.3327054753931601,0.9364226382301525,0.8573059819564328,0.28203932625867345,0.23250615239971473,0.7451939689896824,0.39643115127433337,0.5618104718072275,0.7345491890387201,0.05516026239507399,0.8078556728880065,0.10928598319011085,0.4227941881669832,0.6317800295355834,0.9808505962128085,0.36654739471501285,0.7183025787819884,0.3878527752426685,0.7438868154436232,0.681091962751764,0.9636209101003269,0.8616796747006509,0.13442516975338692,0.6131182732305812,0.8972893941552617,0.3815928567544452,0.956610640703032,0.13401707662828366,0.42587485897179755,0.06720092434590075,0.008881239094925775,0.3570677110988125,0.9745132434095791,0.032853956060865275,0.5606162740843946,0.482040208408564,0.65203576306071,0.7565861011278789,0.28794524524109666,0.5024674841389968,0.4162161208475672,0.23296392694016654,0.470256867729535,0.9029470639574663,0.10325217442903833,0.25711633471372475,0.9150507089508311,0.19241982146753944,0.3182442201397573,0.31752930008605207,0.34919090588812973,0.5045797730873012,0.2584490790475732,0.551914554311123,0.190797097614533,0.5917560506426467,0.28190943887374276,0.34697428506734307,0.6610800803417395,0.56895847848837,0.30692291062166843,0.758518082716087,0.9041491430371043,0.47800382798130037,0.4691833191449547,0.05176281379808201,0.9333271125719624,0.4376365342975861,0.5944733422770987,0.25996115138606646,0.722912512200845,0.4323284095398622,0.564163781388699,0.7092518265831498,0.2917943833436186,0.41940412061841825,0.7545070799946545,0.27748192067087796,0.6015940184657518,0.31313514783474106,0.0652339943101351,0.9154149958767874,0.21566178951259152,0.5782225213570322,0.10708372487072737,0.04104453154035992,0.9398570330640619,0.46270044573591174,0.10407190324366511,0.7405487074133947,0.24744250856229888,0.88008421613901,0.23316897669769276,0.9308384875946356,0.13621723025532584,0.35477501572765513,0.29096994199619586,0.15188953526864157,0.21425315140068701,0.8620893588490371,0.23643913798402105,0.1850388211190469,0.5985962102886303,0.7843652623643215,0.5188964067140263,0.9959052480019355,0.6202943082615768,0.7717485652359731,0.8099108887481811,0.4820843242430466,0.031213140790481098,0.002346356896584023,0.27906572038036714,0.7683700291004883,0.6489797614839349,0.450994746054315,0.7573748355497536,0.3240835291104024,0.6114722257376642,0.5067402228528988,0.7406613972225502,0.7067706731595174,0.289267425431634,0.7909499644108636,0.6162253222882149,0.37781172843935285,0.8809773427631334,0.7671996148627388,0.5592584562941975,0.8887900841667978,0.8407212753310026,0.005840531179823971,0.7768133314414462,0.7589743324250539,0.7527699114581173,0.955985690627143,0.5643152107728945,0.8772136744368887,0.2932937548154375,0.11305443331342768,0.20446145984162867,0.06953625794641416,0.6516077999966823,0.1385439154266761,0.2189781397518923,0.1329044543879251,0.35080125687522945,0.49574188243380635,0.7943401963112653,0.575274712357957,0.6480958588421255,0.21400934095992996,0.06867028740686865,0.24071504449401038,0.9695817721015548,0.9413068618409279,0.770492206493534,0.0006973480726341075,0.5636069384225628,0.44668751740737533,0.3849538450148009,0.3105424596639096,0.1392567301928237,0.06306469636536371,0.39841237053078904,0.8030543526300177,0.7748379382240583,0.4556887578060157,0.5768284228599172,0.71050636356156,0.3835574636126108,0.9192833515322512,0.11722270586085526,0.7953613044534221,0.45798522859289303,0.6411179622914199,0.03394722528750027,0.16143992387051587,0.279191772200564,0.04339470231775988,0.020858773660550778,0.4084997557855753,0.521211181253228,0.4297099280426546,0.9774910628691305,0.7873863951703298,0.46607432853731534,0.3709778784302714,0.32113935480243117,0.5315381277630048,0.35870938496329663,0.023466875554116085,0.810497941426923,0.7001689842438898,0.35528332385874983,0.47325060587625367,0.5694126064163307,0.14653632574115383,0.4336726233617091,0.7971752614481974,0.754785812697478,0.47650777292550517,0.8297698139843708,0.6843701815874618,0.9088272152467052,0.27980513933032136,0.23998472337858368,0.2789831249219812,0.8261565277236091,0.16304742523557614,0.5767807250188306,0.20028509101382252,0.2357513422285622,0.2508350790080559,0.6661340665164714,0.1851248081258855,0.21251563190233203,0.6218601140346531,0.24576270176641246,0.9649339643784988,0.5934635086024701,0.09443574995384418,0.7824748298512629,0.7464369425218869,0.7926016525961886,0.005624382496782987,0.1063324664042623,0.11255402298109796,0.8198314988521237,0.12934903482495053,0.7299799652018423,0.9646605294038892,0.9491006186798587,0.6099281202486307,0.3341440432900876,0.9278322564409026,0.43900342611594356,0.17804269819106655,0.8456545983241373,0.8170798250460725,0.1594977419937066,0.6419605694533588,0.6268672467193251,0.11546565998070679,0.824024793037487,0.31164813623260135,0.4063144959372923,0.19974671352022866,0.8963426260478038,0.6608789981900723,0.4172873730115506,0.9108734746278406,0.6013191232449021,0.1712887451847226,0.620049570491606,0.7479459040624312,0.5452677595346039,0.5169656510158575,0.9572258606365982,0.426400938676021,0.8087763714577667,0.9822337366406404,0.3843932182464276,0.10632842292746458,0.34043820241043266,0.41998234479270524,0.21890162668748203,0.964304584619461,0.9135161283694824,0.596970993001265,0.7084028379376316,0.04270961314678445,0.5367347191271276,0.988961241378017,0.5860888492046868,0.8178886100383129,0.8450090202030955,0.8306087733651095,0.9772669905022245,0.6651351680422012,0.14335737583694907,0.061611588835955855,0.4051172780368195,0.24446882218882637,0.7681459364363417,0.7077789226255395,0.1885349213541545,0.6386591573812556,0.31888258306625217,0.10626399955185506,0.3896068646475732,0.8821565492585884,0.08543676181683502,0.510123551722134,0.49060936314124726,0.42410519731844665,0.9655714536098878,0.6070338446779312,0.25080394198568634,0.7538915972458372,0.2551893154324667,0.58574295224707,0.4235425815029742,0.38764750272387016,0.4749329583613038,0.4984710904548427,0.15419427800013208,0.2833712151334741,0.6658377427500117,0.1485961903897639,0.9163798330174521,0.7064023918252451,0.48394917667651083,0.006182430502685188,0.7180014236136831,0.9777743474363949,0.6966886322599267,0.10059106702049314,0.44200423554766255,0.8042390652915782,0.16990486081349954,0.599372826837094,0.5024023394808728,0.41656852987090276,0.9178176239894237,0.37992140750833314,0.054080980233150555,0.19049482097049975,0.040770539987442844,0.22181323419068244,0.4285380823293634,0.38311291230375744,0.7333558409685441,0.8420783918003155,0.19533560836843067,0.9414865172675261,0.2334123010719017,0.714228059975629,0.6493562749388408,0.1942403279574345,0.1408053455028786,0.2404400378701962,0.7092931462896489,0.4724361784184732,0.5813845962379901,0.46468070552150353,0.8133264286430765,0.7291194694413358,0.9349066729988343,0.01799128020893559,0.7084562955362442,0.1850387514397417,0.4841933393810378,0.6184230890743007,0.1879470897003358,0.07802819545905326,0.14896628674351942,0.3482298987083168,0.7236541580646092,0.5678238516188922,0.2292157780757631,0.5162543021864944,0.8375403628985036,0.31796016676142924,0.24020036858361293,0.4893663257928158,0.5022357530554288,0.37999155915267036,0.28786273653940986,0.8354390582794031,0.723214225496242,0.6914330145455005,0.12628295340733742,0.7265240094864986,0.9606070429254314,0.6568975783611526,0.07174742823433478,0.9194127554068178,0.9047906743962153,0.6903767374862992,0.23823352447062063,0.11752421071800034,0.8348392192703472,0.45621433608252626,0.007589139519259103,0.9390579492695972,0.4531790665935018,0.7337682460640312,0.31339671984064754,0.5402300531227033,0.29737689301954096,0.6528345318734596,0.7184605561760402,0.26634732856161425,0.436805926542701,0.657586767721701,0.7695336998843557,0.6447023071368733,0.22713548151264618,0.12760645577591068,0.5763293956833546,0.3968969374383463,0.7561859315598816,0.7044525652201855,0.2565319115112762,0.7476392541630178,0.2075318095739499,0.46326450008090303,0.26045279124698995,0.6813075155348369,0.7030629539672943,0.516334899722142,0.38188395648775286,0.11216324231172636,0.5897438745339463,0.5701334278347444,0.08652689737371466,0.08150234396724565,0.2660294070820963,0.5095472872154307,0.3265577684579468,0.8210905178343961,0.8593056619123405,0.35638854989740687,0.7407156761856737,0.32156863357815835,0.2350713431546605,0.612277273414839,0.986693126842238,0.7980989011174053,0.2924191304535637,0.379324973251594,0.5260127984352623,0.38365263318237997,0.789955905007833,0.27950254044377154,0.5742514903203254,0.6329240056324204,0.28653660613919485,0.5805879233873212,0.1343044191539633,0.2337013699344267,0.5991272512319652,0.2328692827132085,0.11338003133316976,0.08535604557258347,0.8250584633456549,0.3153863942226486,0.3050408803200829,0.8108285924757437,0.9358043794450891,0.5611241921787304,0.5713564552330507,0.2611857062906283,0.009323466682291004,0.22846978343647595,0.2927467537926616,0.4460280923732066,0.06328774509002077,0.1538120263236763,0.9756750520164338,0.8237311881343569,0.6183399257693981,0.9197609344194381,0.04440356926874167,0.9041401024207375,0.05634620935022161,0.06018062999342699,0.9102921678023579,0.13504927489391583,0.7548126856224386,0.7623210453604369,0.9327204575049651,0.5864152657623968,0.6987862479653271,0.6879722346014225,0.8235204199520559]}},"id":"7a2ed481-c5bf-4283-b3ac-66f83c0bf082","type":"ColumnDataSource"},{"attributes":{},"id":"cb9992f6-7f60-46b0-8762-918db9fa2bb0","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"2d7d127f-3316-4df5-91b4-78f35ad9a903","type":"LinearAxis"}],"left":[{"id":"74383bf8-72db-4344-a68e-f841cdfc8f32","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"2d7d127f-3316-4df5-91b4-78f35ad9a903","type":"LinearAxis"},{"id":"dfaeea80-8e3a-47ed-9450-14da6ab58336","type":"Grid"},{"id":"74383bf8-72db-4344-a68e-f841cdfc8f32","type":"LinearAxis"},{"id":"de9d0df4-7eda-48c1-b3e6-03dafda5d0c7","type":"Grid"},{"id":"e0c6c54e-13a7-467d-8bbd-6c6cff5d4382","type":"GlyphRenderer"}],"title":"Watch Here","tool_events":{"id":"2ccfc33a-6656-4d6a-ad3b-c9cb497cce1c","type":"ToolEvents"},"x_range":{"id":"5b126358-1893-4409-ac43-dfc03cbbfec2","type":"Range1d"},"y_range":{"id":"e1544f11-9fbe-42bc-9333-c002721dc09e","type":"Range1d"}},"id":"3bb8461e-5f46-4269-b021-e9a83551d9a4","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[],"y":[]}},"id":"5eecebe0-3cb4-4dfd-bd25-5da351cd57ad","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"6a2fde65-be39-4db2-9f54-6d62bf1ca2cd","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"5b126358-1893-4409-ac43-dfc03cbbfec2","type":"Range1d"},{"attributes":{"callback":null},"id":"e1544f11-9fbe-42bc-9333-c002721dc09e","type":"Range1d"},{"attributes":{},"id":"2ccfc33a-6656-4d6a-ad3b-c9cb497cce1c","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"546b96bc-8bdd-41d6-b4a9-fc6cb73e3426","subtype":"Figure","type":"Plot"},"ticker":{"id":"91e61bcb-a163-4150-bd75-ec9688edba16","type":"BasicTicker"}},"id":"656f79d9-9859-4269-ae60-465f85235815","type":"Grid"},{"attributes":{"overlay":{"id":"6a2fde65-be39-4db2-9f54-6d62bf1ca2cd","type":"PolyAnnotation"},"plot":{"id":"546b96bc-8bdd-41d6-b4a9-fc6cb73e3426","subtype":"Figure","type":"Plot"}},"id":"8b9ab4e5-0eb8-4276-afd6-61c52f3147fa","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0ca67415-106c-4a7c-afb5-897212d5e8ab","type":"Circle"},{"attributes":{},"id":"14d4f420-e1aa-4f51-bbb2-fec0f0252130","type":"BasicTicker"},{"attributes":{"plot":{"id":"3bb8461e-5f46-4269-b021-e9a83551d9a4","subtype":"Figure","type":"Plot"},"ticker":{"id":"758da81d-c13f-435f-a788-76dc3004a0d6","type":"BasicTicker"}},"id":"dfaeea80-8e3a-47ed-9450-14da6ab58336","type":"Grid"},{"attributes":{},"id":"758da81d-c13f-435f-a788-76dc3004a0d6","type":"BasicTicker"},{"attributes":{"data_source":{"id":"5eecebe0-3cb4-4dfd-bd25-5da351cd57ad","type":"ColumnDataSource"},"glyph":{"id":"08548ae9-31e9-454f-9eb5-0839d2b7cb54","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"ab9d9987-3d0d-46d6-87aa-3a72cbf33776","type":"Circle"},"selection_glyph":null},"id":"e0c6c54e-13a7-467d-8bbd-6c6cff5d4382","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"08548ae9-31e9-454f-9eb5-0839d2b7cb54","type":"Circle"},{"attributes":{},"id":"217550dd-ae1a-48d2-abfb-704d3781e25d","type":"BasicTickFormatter"},{"attributes":{},"id":"48df0a77-978e-410e-acb0-78e993befee1","type":"BasicTicker"},{"attributes":{"below":[{"id":"2a5bd606-9d7c-4f72-a592-1875608ca242","type":"LinearAxis"}],"left":[{"id":"c77366da-2ec5-453d-8b09-6868853c0c57","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"2a5bd606-9d7c-4f72-a592-1875608ca242","type":"LinearAxis"},{"id":"ad18e02b-598e-448c-beea-1273e9d2414e","type":"Grid"},{"id":"c77366da-2ec5-453d-8b09-6868853c0c57","type":"LinearAxis"},{"id":"656f79d9-9859-4269-ae60-465f85235815","type":"Grid"},{"id":"6a2fde65-be39-4db2-9f54-6d62bf1ca2cd","type":"PolyAnnotation"},{"id":"6ee0dd24-fb54-459b-94ca-e8a40065fadc","type":"GlyphRenderer"}],"title":"Select Here","tool_events":{"id":"a2eb749e-c149-4e37-8438-81b93f7b6fc3","type":"ToolEvents"},"tools":[{"id":"8b9ab4e5-0eb8-4276-afd6-61c52f3147fa","type":"LassoSelectTool"}],"x_range":{"id":"b79d5f7e-e6bc-4491-b2e4-b795ee93382f","type":"DataRange1d"},"y_range":{"id":"dcf936ab-3f2b-456f-8c53-5b4d5ef11c71","type":"DataRange1d"}},"id":"546b96bc-8bdd-41d6-b4a9-fc6cb73e3426","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"b79d5f7e-e6bc-4491-b2e4-b795ee93382f","type":"DataRange1d"},{"attributes":{},"id":"91e61bcb-a163-4150-bd75-ec9688edba16","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ab9d9987-3d0d-46d6-87aa-3a72cbf33776","type":"Circle"},{"attributes":{"formatter":{"id":"eff628f8-80a6-45a2-bb4a-2ea3dbcc247e","type":"BasicTickFormatter"},"plot":{"id":"3bb8461e-5f46-4269-b021-e9a83551d9a4","subtype":"Figure","type":"Plot"},"ticker":{"id":"758da81d-c13f-435f-a788-76dc3004a0d6","type":"BasicTicker"}},"id":"2d7d127f-3316-4df5-91b4-78f35ad9a903","type":"LinearAxis"},{"attributes":{"children":[{"id":"546b96bc-8bdd-41d6-b4a9-fc6cb73e3426","subtype":"Figure","type":"Plot"},{"id":"3bb8461e-5f46-4269-b021-e9a83551d9a4","subtype":"Figure","type":"Plot"}]},"id":"02edea4b-a01a-48b2-9ac4-72da7f5def9d","type":"HBox"},{"attributes":{"formatter":{"id":"217550dd-ae1a-48d2-abfb-704d3781e25d","type":"BasicTickFormatter"},"plot":{"id":"546b96bc-8bdd-41d6-b4a9-fc6cb73e3426","subtype":"Figure","type":"Plot"},"ticker":{"id":"91e61bcb-a163-4150-bd75-ec9688edba16","type":"BasicTicker"}},"id":"c77366da-2ec5-453d-8b09-6868853c0c57","type":"LinearAxis"},{"attributes":{"args":{"s2":{"id":"5eecebe0-3cb4-4dfd-bd25-5da351cd57ad","type":"ColumnDataSource"}},"code":"\n        var inds = cb_obj.get('selected')['1d'].indices;\n        var d1 = cb_obj.get('data');\n        var d2 = s2.get('data');\n        d2['x'] = []\n        d2['y'] = []\n        for (i = 0; i < inds.length; i++) {\n            d2['x'].push(d1['x'][inds[i]])\n            d2['y'].push(d1['y'][inds[i]])\n        }\n        s2.trigger('change');\n    "},"id":"c215c78f-3300-447f-843a-7e631cde9e84","type":"CustomJS"}],"root_ids":["02edea4b-a01a-48b2-9ac4-72da7f5def9d"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"5e9a3ba1-3aed-48ee-a499-004065d5a4d6","elementid":"60a71164-518f-4e43-b286-b09884ead5df","modelid":"02edea4b-a01a-48b2-9ac4-72da7f5def9d"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
    }
  ];

  function run_inline_js() {
    for (var i = 0; i < inline_js.length; i++) {
      inline_js[i](window.Bokeh);
    }
  }

  if (window._bokeh_is_loading === 0) {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    run_inline_js();
  } else {
    load_libs(js_urls, function() {
      console.log("Bokeh: BokehJS plotting callback run at", now());
      run_inline_js();
    });
  }
}(this));