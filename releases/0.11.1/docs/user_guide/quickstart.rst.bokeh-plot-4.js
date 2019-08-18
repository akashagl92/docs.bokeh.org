
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
  };var element = document.getElementById("16318cf2-8469-4d26-a3ed-7a6bd8ecbff9");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '16318cf2-8469-4d26-a3ed-7a6bd8ecbff9' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"f5edfdaf-e1d6-4c1c-80e3-ee3325b1603c":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"a7cc4d62-0b97-4408-90ba-92ef0481e234","type":"Circle"},{"attributes":{},"id":"868817af-ac80-47b0-a2c3-19ada748bac3","type":"ToolEvents"},{"attributes":{"plot":{"id":"366506da-107a-4876-a9c1-f55bfcd03a72","subtype":"Figure","type":"Plot"}},"id":"b6654072-8ca4-465c-bcd0-2d823b6bd69c","type":"PanTool"},{"attributes":{"plot":{"id":"1f831eb0-ffb3-4e69-8dba-53fb5d937062","subtype":"Figure","type":"Plot"}},"id":"e30b3522-b808-4439-9d5c-ce5f8d05c50f","type":"WheelZoomTool"},{"attributes":{},"id":"b950843e-d75e-4412-b0a2-ee1ba1257076","type":"BasicTicker"},{"attributes":{"plot":{"id":"366506da-107a-4876-a9c1-f55bfcd03a72","subtype":"Figure","type":"Plot"}},"id":"a47b0fa2-a0ef-4c63-a257-3c5c2d9af2b4","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"1f831eb0-ffb3-4e69-8dba-53fb5d937062","subtype":"Figure","type":"Plot"},"ticker":{"id":"9965bf92-4421-4d52-94f6-244dce6255d0","type":"BasicTicker"}},"id":"44788451-846d-4a4c-ad7f-703a5e357af5","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"77745ef6-3acf-424d-8bd1-33d6c40edb0f","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e106000d-90ce-4873-9ff1-379b2ea30ea6","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y0","y1"],"data":{"x":[0.0,0.04202799536574974,0.08405599073149948,0.12608398609724922,0.16811198146299897,0.21013997682874871,0.25216797219449844,0.2941959675602482,0.33622396292599793,0.3782519582917477,0.42027995365749743,0.4623079490232472,0.5043359443889969,0.5463639397547466,0.5883919351204964,0.6304199304862461,0.6724479258519959,0.7144759212177456,0.7565039165834954,0.7985319119492451,0.8405599073149949,0.8825879026807446,0.9246158980464944,0.9666438934122441,1.0086718887779937,1.0506998841437436,1.0927278795094932,1.134755874875243,1.1767838702409927,1.2188118656067426,1.2608398609724922,1.302867856338242,1.3448958517039917,1.3869238470697414,1.4289518424354912,1.4709798378012409,1.5130078331669907,1.5550358285327404,1.5970638238984902,1.6390918192642399,1.6811198146299897,1.7231478099957394,1.7651758053614892,1.8072038007272389,1.8492317960929887,1.8912597914587383,1.9332877868244882,1.9753157821902378,2.0173437775559875,2.0593717729217373,2.101399768287487,2.1434277636532366,2.1854557590189865,2.2274837543847363,2.269511749750486,2.3115397451162356,2.3535677404819855,2.3955957358477353,2.437623731213485,2.4796517265792346,2.5216797219449845,2.5637077173107343,2.605735712676484,2.6477637080422336,2.6897917034079835,2.7318196987737333,2.7738476941394827,2.8158756895052326,2.8579036848709825,2.8999316802367323,2.9419596756024817,2.9839876709682316,3.0260156663339814,3.0680436616997313,3.1100716570654807,3.1520996524312306,3.1941276477969804,3.2361556431627303,3.2781836385284797,3.3202116338942296,3.3622396292599794,3.404267624625729,3.4462956199914787,3.4883236153572286,3.5303516107229784,3.572379606088728,3.6144076014544777,3.6564355968202276,3.6984635921859774,3.740491587551727,3.7825195829174767,3.8245475782832266,3.8665755736489764,3.908603569014726,3.9506315643804757,3.9926595597462256,4.034687555111975,4.076715550477725,4.118743545843475,4.1607715412092245,4.202799536574974,4.244827531940724,4.286855527306473,4.328883522672223,4.370911518037973,4.412939513403723,4.454967508769473,4.4969955041352225,4.539023499500972,4.581051494866722,4.623079490232471,4.665107485598221,4.707135480963971,4.749163476329721,4.791191471695471,4.8332194670612205,4.87524746242697,4.917275457792719,4.959303453158469,5.001331448524219,5.043359443889969,5.085387439255719,5.127415434621469,5.1694434299872185,5.211471425352968,5.253499420718717,5.295527416084467,5.337555411450217,5.379583406815967,5.421611402181717,5.463639397547467,5.5056673929132165,5.5476953882789655,5.589723383644715,5.631751379010465,5.673779374376215,5.715807369741965,5.757835365107715,5.799863360473465,5.8418913558392145,5.8839193512049635,5.925947346570713,5.967975341936463,6.010003337302213,6.052031332667963,6.094059328033713,6.136087323399463,6.178115318765212,6.220143314130961,6.262171309496711,6.304199304862461,6.346227300228211,6.388255295593961,6.430283290959711,6.472311286325461,6.51433928169121,6.556367277056959,6.598395272422709,6.640423267788459,6.682451263154209,6.724479258519959,6.766507253885709,6.808535249251458,6.850563244617208,6.892591239982957,6.934619235348707,6.976647230714457,7.018675226080207,7.060703221445957,7.102731216811707,7.144759212177456,7.1867872075432055,7.228815202908955,7.270843198274705,7.312871193640455,7.354899189006205,7.396927184371955,7.438955179737704,7.480983175103454,7.5230111704692035,7.565039165834953,7.607067161200703,7.649095156566453,7.691123151932203,7.733151147297953,7.775179142663702,7.817207138029452,7.8592351333952015,7.901263128760951,7.943291124126701,7.985319119492451,8.0273471148582,8.06937511022395,8.1114031055897,8.15343110095545,8.1954590963212,8.23748709168695,8.2795150870527,8.321543082418449,8.363571077784199,8.405599073149949,8.447627068515699,8.489655063881449,8.531683059247198,8.573711054612946,8.615739049978696,8.657767045344446,8.699795040710196,8.741823036075946,8.783851031441696,8.825879026807446,8.867907022173195,8.909935017538945,8.951963012904695,8.993991008270445,9.036019003636195,9.078046999001945,9.120074994367695,9.162102989733445,9.204130985099193,9.246158980464942,9.288186975830692,9.330214971196442,9.372242966562192,9.414270961927942,9.456298957293692,9.498326952659442,9.540354948025191,9.582382943390941,9.624410938756691,9.666438934122441,9.708466929488191,9.75049492485394,9.79252292021969,9.834550915585439,9.876578910951189,9.918606906316938,9.960634901682688,10.002662897048438,10.044690892414188,10.086718887779938,10.128746883145688,10.170774878511438,10.212802873877187,10.254830869242937,10.296858864608687,10.338886859974437,10.380914855340187,10.422942850705937,10.464970846071685,10.506998841437435,10.549026836803185,10.591054832168934,10.633082827534684,10.675110822900434,10.717138818266184,10.759166813631934,10.801194808997684,10.843222804363434,10.885250799729183,10.927278795094933,10.969306790460683,11.011334785826433,11.053362781192183,11.095390776557931,11.13741877192368,11.17944676728943,11.22147476265518,11.26350275802093,11.30553075338668,11.34755874875243,11.38958674411818,11.43161473948393,11.47364273484968,11.51567073021543,11.55769872558118,11.59972672094693,11.641754716312679,11.683782711678429,11.725810707044177,11.767838702409927,11.809866697775677,11.851894693141427,11.893922688507176,11.935950683872926,11.977978679238676,12.020006674604426,12.062034669970176,12.104062665335926,12.146090660701676,12.188118656067426,12.230146651433175,12.272174646798925,12.314202642164675,12.356230637530423,12.398258632896173,12.440286628261923,12.482314623627673,12.524342618993423,12.566370614359172],"y0":[0.0,0.04201562375005714,0.08395704402592023,0.12575018840358776,0.1673212463279966,0.20859679946928297,0.24950395138633757,0.2899704562686571,0.32992484652912146,0.36929655902235725,0.40801605966577303,0.44601496624317477,0.483226169174079,0.5195839500354336,0.5550240976264254,0.5894840213713949,0.6229028618605774,0.6552215983334436,0.6863831529148176,0.7163324914196783,0.7450167205486168,0.7723851813022902,0.7983895384498959,0.8229838658936564,0.8461247277785513,0.8677712552040519,0.8878852184023752,0.9064310942557878,0.9233761290337134,0.9386903962388486,0.9523468494601222,0.9643213701391566,0.9745928101658707,0.9831430292279966,0.9899569268485472,0.9950224690546545,0.9983307096306772,0.9998758059180444,0.9996550291339309,0.9976687691905392,0.9939205340064791,0.988416943311459,0.9811677169552314,0.9721856577414404,0.9614866288166868,0.9490895256547461,0.9350162426854148,0.9192916346269248,0.9019434725902137,0.8830023950325767,0.8625018536473203,0.84047805428498,0.8169698930104421,0.7920188874088999,0.7656691032619608,0.7379670767234044,0.7089617321320334,0.6787042956067718,0.647248204576604,0.6146490134051379,0.5809642952764631,0.5462535405155903,0.5105780515230376,0.4740008345091279,0.43658648821919677,0.3984010898462414,0.35951207833249027,0.319988135265998,0.2798990635826164,0.23931566428755766,0.19830961141427728,0.1569533254415059,0.11531984539199412,0.07348269983884703,0.03151577704727028,-0.0105068055189361,-0.052510832095665226,-0.09442211969040283,-0.13616664909624643,-0.1776706956166664,-0.21886095927013058,-0.2596646942446463,-0.3000098373735883,-0.33982513540590753,-0.37904027084595904,-0.4175859861406961,-0.4553942059949107,-0.49239815759849354,-0.5285324885533883,-0.5637333822919653,-0.5979386707829789,-0.6310879443260529,-0.6631226582407953,-0.6939862362621142,-0.7236241704591302,-0.7519841175012183,-0.7790159911011677,-0.8046720504721937,-0.828906984642578,-0.8516779924790325,-0.8729448582774559,-0.8926700227875833,-0.9108186495460929,-0.9273586864010207,-0.9422609221188204,-0.9554990379741033,-0.9670496542309384,-0.9768923714336271,-0.9850098064340269,-0.9913876230917974,-0.9960145575933486,-0.9988824383447774,-0.9999862004036565,-0.9993238944241918,-0.9968966900999463,-0.992708874098054,-0.9867678424885691,-0.979084087682323,-0.9696711799003568,-0.9585457432076577,-0.9457274261535233,-0.931238867070408,-0.9151056540925363,-0.8973562799648924,-0.8780220917224003,-0.8571372353281633,-0.8347385953685362,-0.8108657299115398,-0.7855608006436556,-0.758868498408392,-0.730835964278124,-0.7015127062986041,-0.6709505120531783,-0.6392033572011263,-0.6063273101516626,-0.5723804330419425,-0.5374226791939626,-0.5015157872314542,-0.46472317204376834,-0.4271098127893215,-0.38874213813639713,-0.3496879089439763,-0.31001609858980345,-0.2697967711570244,-0.22910095769454164,-0.18800053076961812,-0.14656807753428164,-0.1048767715297075,-0.06300024345497936,-0.02101245112847572,0.02101245112847523,0.06300024345497886,0.104876771529707,0.14656807753428203,0.1880005307696185,0.22910095769454117,0.26979677115702394,0.310016098589803,0.3496879089439759,0.38874213813639674,0.42710981278932186,0.4647231720437688,0.5015157872314537,0.5374226791939621,0.5723804330419421,0.6063273101516623,0.639203357201126,0.670950512053178,0.7015127062986044,0.7308359642781244,0.7588684984083917,0.7855608006436553,0.8108657299115395,0.8347385953685359,0.857137235328163,0.8780220917224005,0.8973562799648926,0.9151056540925362,0.9312388670704079,0.9457274261535231,0.9585457432076576,0.9696711799003567,0.9790840876823229,0.9867678424885691,0.992708874098054,0.9968966900999462,0.9993238944241917,0.9999862004036565,0.9988824383447774,0.9960145575933487,0.9913876230917974,0.985009806434027,0.9768923714336272,0.9670496542309385,0.9554990379741034,0.9422609221188206,0.9273586864010209,0.9108186495460932,0.8926700227875832,0.8729448582774557,0.8516779924790323,0.8289069846425778,0.8046720504721935,0.7790159911011674,0.751984117501219,0.7236241704591309,0.6939862362621148,0.6631226582407956,0.6310879443260532,0.5979386707829792,0.5637333822919657,0.5285324885533883,0.49239815759849354,0.45539420599491076,0.41758598614069614,0.3790402708459587,0.3398251354059072,0.3000098373735879,0.25966469424464594,0.21886095927013147,0.17767069561666732,0.13616664909624732,0.09442211969040332,0.05251083209566572,0.010506805518936591,-0.03151577704726979,-0.07348269983884699,-0.11531984539199408,-0.15695332544150586,-0.19830961141427725,-0.23931566428755807,-0.2798990635826168,-0.3199881352659984,-0.35951207833249066,-0.3984010898462405,-0.4365864882191959,-0.47400083450912706,-0.5105780515230373,-0.5462535405155898,-0.5809642952764628,-0.6146490134051376,-0.647248204576604,-0.6787042956067718,-0.7089617321320334,-0.7379670767234043,-0.765669103261961,-0.7920188874089001,-0.8169698930104423,-0.8404780542849802,-0.8625018536473199,-0.8830023950325763,-0.9019434725902132,-0.9192916346269244,-0.9350162426854146,-0.949089525654746,-0.9614866288166868,-0.9721856577414403,-0.9811677169552314,-0.988416943311459,-0.9939205340064792,-0.9976687691905393,-0.9996550291339309,-0.9998758059180444,-0.9983307096306772,-0.9950224690546546,-0.9899569268485473,-0.9831430292279967,-0.9745928101658708,-0.9643213701391568,-0.9523468494601224,-0.9386903962388488,-0.9233761290337135,-0.9064310942557878,-0.8878852184023752,-0.8677712552040519,-0.8461247277785513,-0.8229838658936562,-0.7983895384498956,-0.7723851813022897,-0.7450167205486176,-0.7163324914196789,-0.6863831529148181,-0.6552215983334442,-0.6229028618605779,-0.5894840213713953,-0.5550240976264256,-0.5195839500354338,-0.4832261691740791,-0.44601496624317477,-0.4080160596657729,-0.36929655902235703,-0.32992484652912113,-0.2899704562686567,-0.24950395138633705,-0.20859679946928403,-0.16732124632799755,-0.12575018840358862,-0.08395704402592095,-0.042015623750057754,-4.898587196589413e-16],"y1":[1.0,0.9991169537951469,0.9964693747217873,0.9920619386492268,0.9859024295168594,0.9780017255870113,0.9683737802329244,0.9570355972958094,0.9440072010544918,0.9293116008606837,0.9129747505023436,0.8950255023668877,0.8754955564852082,0.8544194045464886,0.8318342689826936,0.8077800372303148,0.7822991912854713,0.7554367326767791,0.7272401029884932,0.6977591000742853,0.6670457901096327,0.635154415638141,0.6021412997741994,0.5680647467311558,0.5329849388506888,0.4969638303152295,0.46006503773115215,0.42235372777596647,0.3838965021079446,0.344761279741437,0.3050171770956176,0.2647343859284994,0.2239840493718048,0.1828381362856194,0.14136931415473492,0.0996508207511566,0.05775633478942844,0.015759845803216432,-0.026264476527046998,-0.06824241336467089,-0.11009982779403162,-0.1517627957532151,-0.19315773659074326,-0.23421154301580224,-0.2748517102124756,-0.3150064638899478,-0.3546048870425357,-0.3935770451956728,-0.43185410991665524,-0.4693684803720136,-0.5060539027168316,-0.5418455871051587,-0.576680322114867,-0.6104965863848613,-0.6432346572674896,-0.6748367163042575,-0.7052469513385696,-0.7344116550851543,-0.7622793199820932,-0.7888007291579354,-0.8139290433532413,-0.8376198836430415,-0.8598314098141207,-0.8805243942586999,-0.8996622912540179,-0.917211301505453,-0.9331404318392025,-0.9474215499390909,-0.9600294340308397,-0.970941817426052,-0.9801394278472417,-0.9876060214644566,-0.9933284115833829,-0.9972964919342662,-0.9995032545205177,-0.9999448019954837,-0.9986203545455203,-0.995532251267216,-0.9906859460363308,-0.9840899978757481,-0.9757560558394491,-0.9656988384392073,-0.9539361076503359,-0.9404886375423983,-0.9253801775902821,-0.9086374107304312,-0.890289906236314,-0.8703700674963548,-0.8489130747865546,-0.8259568231388738,-0.801541855415102,-0.7757112907044198,-0.7485107481711011,-0.719988266486854,-0.6901942189900867,-0.6591812247219377,-0.627004055496187,-0.5937195391671689,-0.5593864592665334,-0.5240654511860948,-0.48781889509012716,-0.45071080574622946,-0.4128067194693316,-0.37417357837850246,-0.3348796121709864,-0.2949942176222497,-0.2545878360248632,-0.2137318287826696,-0.1724983513799503,-0.130960225948172,-0.08919081265537408,-0.04726388014532912,-0.005253475255306219,0.03676620775748966,0.07872095824983136,0.12053668025532321,0.16213952334472492,0.20345601305263328,0.24441318064018117,0.2849386919645683,0.32496097522784506,0.3644093473793213,0.4032141389483648,0.4413068170871254,0.4786201066058767,0.5150881087872179,0.5506464177693007,0.5852322342925292,0.6187844766088583,0.6512438883578044,0.6825531432186541,0.7126569461540444,0.7415021310661067,0.7690377546927128,0.7952151865779787,0.819988194958146,0.843313028411149,0.8651484931256685,0.88545602565321,0.9041997610147167,0.9213465960414366,0.9368662478381796,0.9507313072657054,0.9629172873477992,0.9734026665175332,0.9821689266263426,0.9892005856487878,0.9944852250252416,0.9980135115942135,0.9997792140755745,0.9997792140755745,0.9980135115942136,0.9944852250252417,0.9892005856487878,0.9821689266263425,0.9734026665175333,0.9629172873477994,0.9507313072657056,0.9368662478381797,0.9213465960414369,0.9041997610147164,0.8854560256532098,0.8651484931256687,0.8433130284111492,0.8199881949581462,0.795215186577979,0.7690377546927132,0.7415021310661071,0.712656946154044,0.6825531432186539,0.6512438883578048,0.6187844766088587,0.5852322342925297,0.5506464177693011,0.5150881087872183,0.4786201066058764,0.44130681708712505,0.4032141389483653,0.36440934737932174,0.32496097522784556,0.2849386919645687,0.24441318064018164,0.20345601305263378,0.16213952334472456,0.12053668025532281,0.07872095824983183,0.03676620775749015,-0.005253475255305729,-0.04726388014532863,-0.0891908126553736,-0.1309602259481724,-0.1724983513799498,-0.2137318287826691,-0.2545878360248627,-0.29499421762224926,-0.3348796121709859,-0.374173578378502,-0.4128067194693312,-0.4507108057462298,-0.48781889509012744,-0.524065451186095,-0.5593864592665336,-0.5937195391671691,-0.6270040554961872,-0.6591812247219371,-0.6901942189900859,-0.7199882664868533,-0.7485107481711006,-0.7757112907044196,-0.8015418554151018,-0.8259568231388735,-0.8489130747865546,-0.8703700674963548,-0.890289906236314,-0.9086374107304312,-0.9253801775902822,-0.9404886375423984,-0.953936107650336,-0.9656988384392075,-0.975756055839449,-0.9840899978757479,-0.9906859460363306,-0.9955322512672159,-0.9986203545455203,-0.9999448019954837,-0.9995032545205177,-0.9972964919342662,-0.9933284115833829,-0.9876060214644566,-0.9801394278472417,-0.9709418174260519,-0.9600294340308396,-0.9474215499390908,-0.9331404318392024,-0.9172113015054535,-0.8996622912540182,-0.8805243942587003,-0.8598314098141209,-0.8376198836430417,-0.8139290433532416,-0.7888007291579358,-0.7622793199820932,-0.7344116550851543,-0.7052469513385697,-0.6748367163042576,-0.6432346572674893,-0.610496586384861,-0.5766803221148668,-0.5418455871051584,-0.5060539027168324,-0.46936848037201445,-0.43185410991665607,-0.3935770451956735,-0.3546048870425362,-0.31500646388994824,-0.2748517102124759,-0.2342115430158025,-0.19315773659074328,-0.15176279575321514,-0.11009982779403144,-0.06824241336467071,-0.026264476527046603,0.015759845803216828,0.057756334789429056,0.09965082075115546,0.14136931415473403,0.1828381362856185,0.22398404937180413,0.2647343859284989,0.30501717709561715,0.3447612797414367,0.3838965021079444,0.4223537277759664,0.46006503773115215,0.4969638303152296,0.5329849388506889,0.5680647467311561,0.6021412997741997,0.6351544156381415,0.6670457901096319,0.6977591000742847,0.7272401029884927,0.7554367326767787,0.7822991912854709,0.8077800372303146,0.8318342689826934,0.8544194045464885,0.8754955564852082,0.8950255023668877,0.9129747505023436,0.9293116008606838,0.9440072010544919,0.9570355972958096,0.9683737802329245,0.978001725587011,0.9859024295168592,0.9920619386492266,0.9964693747217872,0.9991169537951469,1.0]}},"id":"86bd2fe1-173e-48aa-a66a-7e46933450a6","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"1f831eb0-ffb3-4e69-8dba-53fb5d937062","subtype":"Figure","type":"Plot"},"ticker":{"id":"b950843e-d75e-4412-b0a2-ee1ba1257076","type":"BasicTicker"}},"id":"176f80fa-e461-4610-ae65-5643b552f6c3","type":"Grid"},{"attributes":{"overlay":{"id":"c38c4aa8-4301-45f7-b715-62357a309635","type":"PolyAnnotation"},"plot":{"id":"1f831eb0-ffb3-4e69-8dba-53fb5d937062","subtype":"Figure","type":"Plot"}},"id":"a310f56d-82d3-4d13-8f30-fb35b2bc1bba","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"bb0dc4b6-4f70-438c-8458-9c62e6047d1d","type":"PolyAnnotation"},{"attributes":{"formatter":{"id":"96255e58-4db7-4c0f-95e2-cda619d97231","type":"BasicTickFormatter"},"plot":{"id":"366506da-107a-4876-a9c1-f55bfcd03a72","subtype":"Figure","type":"Plot"},"ticker":{"id":"ab199efe-3a26-4802-99c5-aeffd0d9bec3","type":"BasicTicker"}},"id":"5747a5ef-5dfe-4191-beda-fac3cee2b838","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"655bbf0f-fe77-4e10-8764-129decc55756","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"f6a801bc-8f64-4a92-b850-039da41f34e1","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"2fa1b500-3654-42bb-aaba-62b55f8e07bf","type":"Circle"},{"attributes":{},"id":"9965bf92-4421-4d52-94f6-244dce6255d0","type":"BasicTicker"},{"attributes":{"plot":{"id":"366506da-107a-4876-a9c1-f55bfcd03a72","subtype":"Figure","type":"Plot"}},"id":"c3e343b6-4f12-4fd3-a72d-b4d530f0aa15","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"110cea4d-777a-48df-b5bf-f2ac3bbf1b96","type":"DataRange1d"},{"attributes":{"formatter":{"id":"243cf3a2-f5a3-40a0-a3e3-3378b5e7185b","type":"BasicTickFormatter"},"plot":{"id":"1f831eb0-ffb3-4e69-8dba-53fb5d937062","subtype":"Figure","type":"Plot"},"ticker":{"id":"9965bf92-4421-4d52-94f6-244dce6255d0","type":"BasicTicker"}},"id":"6da6b8f0-04d3-4855-a674-a685e1455d5a","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ed3450af-83b3-4537-9aad-2c2fb49d4118","type":"BoxAnnotation"},{"attributes":{},"id":"243cf3a2-f5a3-40a0-a3e3-3378b5e7185b","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"71d2f330-dcc6-429b-a997-f343b9ab5ebd","type":"DataRange1d"},{"attributes":{},"id":"96255e58-4db7-4c0f-95e2-cda619d97231","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"1f831eb0-ffb3-4e69-8dba-53fb5d937062","subtype":"Figure","type":"Plot"},{"id":"366506da-107a-4876-a9c1-f55bfcd03a72","subtype":"Figure","type":"Plot"}]]},"id":"ba792cf6-2340-4935-8ca2-75e95539c85b","type":"GridPlot"},{"attributes":{"plot":{"id":"1f831eb0-ffb3-4e69-8dba-53fb5d937062","subtype":"Figure","type":"Plot"}},"id":"9fbda819-0ced-461f-84b6-550752771537","type":"PanTool"},{"attributes":{"callback":null,"overlay":{"id":"77745ef6-3acf-424d-8bd1-33d6c40edb0f","type":"BoxAnnotation"},"plot":{"id":"1f831eb0-ffb3-4e69-8dba-53fb5d937062","subtype":"Figure","type":"Plot"},"renderers":[{"id":"1a442d6e-3471-4f9c-bcbe-eec4c056bfb3","type":"GlyphRenderer"}]},"id":"147acaa9-d211-4217-984d-2df497e36785","type":"BoxSelectTool"},{"attributes":{"data_source":{"id":"86bd2fe1-173e-48aa-a66a-7e46933450a6","type":"ColumnDataSource"},"glyph":{"id":"2fa1b500-3654-42bb-aaba-62b55f8e07bf","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"f6a801bc-8f64-4a92-b850-039da41f34e1","type":"Circle"},"selection_glyph":null},"id":"1a442d6e-3471-4f9c-bcbe-eec4c056bfb3","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"83d02b28-2fed-4f75-b0e3-d01f74a7854a","type":"DataRange1d"},{"attributes":{},"id":"ca9bec46-4718-4808-940e-981e59f77197","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"ca9bec46-4718-4808-940e-981e59f77197","type":"BasicTickFormatter"},"plot":{"id":"366506da-107a-4876-a9c1-f55bfcd03a72","subtype":"Figure","type":"Plot"},"ticker":{"id":"446b8b1e-9de7-46d2-9472-7afeea7da2f2","type":"BasicTicker"}},"id":"dcf8eae8-5eca-45f1-9677-4674e96b6336","type":"LinearAxis"},{"attributes":{"plot":{"id":"1f831eb0-ffb3-4e69-8dba-53fb5d937062","subtype":"Figure","type":"Plot"}},"id":"1a13f471-14a3-4430-90b6-e982854ffd71","type":"ResetTool"},{"attributes":{},"id":"ab199efe-3a26-4802-99c5-aeffd0d9bec3","type":"BasicTicker"},{"attributes":{},"id":"446b8b1e-9de7-46d2-9472-7afeea7da2f2","type":"BasicTicker"},{"attributes":{"overlay":{"id":"655bbf0f-fe77-4e10-8764-129decc55756","type":"BoxAnnotation"},"plot":{"id":"1f831eb0-ffb3-4e69-8dba-53fb5d937062","subtype":"Figure","type":"Plot"}},"id":"36b2cab8-8369-4162-b8e5-de0c72e8555e","type":"BoxZoomTool"},{"attributes":{},"id":"6a8af882-1c30-4650-a395-d9f0385b0d5f","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"bb0dc4b6-4f70-438c-8458-9c62e6047d1d","type":"PolyAnnotation"},"plot":{"id":"366506da-107a-4876-a9c1-f55bfcd03a72","subtype":"Figure","type":"Plot"}},"id":"9941acf0-6bc4-4267-bd70-f421628dfab1","type":"LassoSelectTool"},{"attributes":{"below":[{"id":"b89de8be-38e4-4baf-ba24-e880919a413e","type":"LinearAxis"}],"left":[{"id":"6da6b8f0-04d3-4855-a674-a685e1455d5a","type":"LinearAxis"}],"plot_height":350,"plot_width":350,"renderers":[{"id":"b89de8be-38e4-4baf-ba24-e880919a413e","type":"LinearAxis"},{"id":"176f80fa-e461-4610-ae65-5643b552f6c3","type":"Grid"},{"id":"6da6b8f0-04d3-4855-a674-a685e1455d5a","type":"LinearAxis"},{"id":"44788451-846d-4a4c-ad7f-703a5e357af5","type":"Grid"},{"id":"655bbf0f-fe77-4e10-8764-129decc55756","type":"BoxAnnotation"},{"id":"77745ef6-3acf-424d-8bd1-33d6c40edb0f","type":"BoxAnnotation"},{"id":"c38c4aa8-4301-45f7-b715-62357a309635","type":"PolyAnnotation"},{"id":"1a442d6e-3471-4f9c-bcbe-eec4c056bfb3","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"868817af-ac80-47b0-a2c3-19ada748bac3","type":"ToolEvents"},"tools":[{"id":"9fbda819-0ced-461f-84b6-550752771537","type":"PanTool"},{"id":"e30b3522-b808-4439-9d5c-ce5f8d05c50f","type":"WheelZoomTool"},{"id":"36b2cab8-8369-4162-b8e5-de0c72e8555e","type":"BoxZoomTool"},{"id":"1a13f471-14a3-4430-90b6-e982854ffd71","type":"ResetTool"},{"id":"00e5fb6b-9295-40f3-816c-8af0c6d87b31","type":"PreviewSaveTool"},{"id":"147acaa9-d211-4217-984d-2df497e36785","type":"BoxSelectTool"},{"id":"a310f56d-82d3-4d13-8f30-fb35b2bc1bba","type":"LassoSelectTool"}],"x_range":{"id":"fcab048a-47a1-49e9-863e-a8e75c66f3f9","type":"DataRange1d"},"y_range":{"id":"83d02b28-2fed-4f75-b0e3-d01f74a7854a","type":"DataRange1d"}},"id":"1f831eb0-ffb3-4e69-8dba-53fb5d937062","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"overlay":{"id":"ed3450af-83b3-4537-9aad-2c2fb49d4118","type":"BoxAnnotation"},"plot":{"id":"366506da-107a-4876-a9c1-f55bfcd03a72","subtype":"Figure","type":"Plot"},"renderers":[{"id":"41b755cb-bdbe-415b-ae22-5f1061a3f69a","type":"GlyphRenderer"}]},"id":"a692de5d-b271-447c-940e-ee1e68db2017","type":"BoxSelectTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"c38c4aa8-4301-45f7-b715-62357a309635","type":"PolyAnnotation"},{"attributes":{"plot":{"id":"366506da-107a-4876-a9c1-f55bfcd03a72","subtype":"Figure","type":"Plot"},"ticker":{"id":"446b8b1e-9de7-46d2-9472-7afeea7da2f2","type":"BasicTicker"}},"id":"76bb5b42-321f-4429-bac4-c6266981f4e0","type":"Grid"},{"attributes":{"formatter":{"id":"6a8af882-1c30-4650-a395-d9f0385b0d5f","type":"BasicTickFormatter"},"plot":{"id":"1f831eb0-ffb3-4e69-8dba-53fb5d937062","subtype":"Figure","type":"Plot"},"ticker":{"id":"b950843e-d75e-4412-b0a2-ee1ba1257076","type":"BasicTicker"}},"id":"b89de8be-38e4-4baf-ba24-e880919a413e","type":"LinearAxis"},{"attributes":{"plot":{"id":"1f831eb0-ffb3-4e69-8dba-53fb5d937062","subtype":"Figure","type":"Plot"}},"id":"00e5fb6b-9295-40f3-816c-8af0c6d87b31","type":"PreviewSaveTool"},{"attributes":{"plot":{"id":"366506da-107a-4876-a9c1-f55bfcd03a72","subtype":"Figure","type":"Plot"}},"id":"0437f3e5-cb6d-4fda-ae7d-bf4099cc3316","type":"PreviewSaveTool"},{"attributes":{"dimension":1,"plot":{"id":"366506da-107a-4876-a9c1-f55bfcd03a72","subtype":"Figure","type":"Plot"},"ticker":{"id":"ab199efe-3a26-4802-99c5-aeffd0d9bec3","type":"BasicTicker"}},"id":"158b9049-1c67-4654-bd24-80fd82a16ae6","type":"Grid"},{"attributes":{"below":[{"id":"dcf8eae8-5eca-45f1-9677-4674e96b6336","type":"LinearAxis"}],"left":[{"id":"5747a5ef-5dfe-4191-beda-fac3cee2b838","type":"LinearAxis"}],"plot_height":350,"plot_width":350,"renderers":[{"id":"dcf8eae8-5eca-45f1-9677-4674e96b6336","type":"LinearAxis"},{"id":"76bb5b42-321f-4429-bac4-c6266981f4e0","type":"Grid"},{"id":"5747a5ef-5dfe-4191-beda-fac3cee2b838","type":"LinearAxis"},{"id":"158b9049-1c67-4654-bd24-80fd82a16ae6","type":"Grid"},{"id":"e106000d-90ce-4873-9ff1-379b2ea30ea6","type":"BoxAnnotation"},{"id":"ed3450af-83b3-4537-9aad-2c2fb49d4118","type":"BoxAnnotation"},{"id":"bb0dc4b6-4f70-438c-8458-9c62e6047d1d","type":"PolyAnnotation"},{"id":"41b755cb-bdbe-415b-ae22-5f1061a3f69a","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"cee73bd9-392b-4a11-a130-ed652a826e51","type":"ToolEvents"},"tools":[{"id":"b6654072-8ca4-465c-bcd0-2d823b6bd69c","type":"PanTool"},{"id":"c3e343b6-4f12-4fd3-a72d-b4d530f0aa15","type":"WheelZoomTool"},{"id":"4145ba09-5057-402b-94f1-f61b0f4b7176","type":"BoxZoomTool"},{"id":"a47b0fa2-a0ef-4c63-a257-3c5c2d9af2b4","type":"ResetTool"},{"id":"0437f3e5-cb6d-4fda-ae7d-bf4099cc3316","type":"PreviewSaveTool"},{"id":"a692de5d-b271-447c-940e-ee1e68db2017","type":"BoxSelectTool"},{"id":"9941acf0-6bc4-4267-bd70-f421628dfab1","type":"LassoSelectTool"}],"x_range":{"id":"110cea4d-777a-48df-b5bf-f2ac3bbf1b96","type":"DataRange1d"},"y_range":{"id":"71d2f330-dcc6-429b-a997-f343b9ab5ebd","type":"DataRange1d"}},"id":"366506da-107a-4876-a9c1-f55bfcd03a72","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"ae4e2a62-5c5e-4e2e-a1f0-48d0939a5975","type":"Circle"},{"attributes":{},"id":"cee73bd9-392b-4a11-a130-ed652a826e51","type":"ToolEvents"},{"attributes":{"callback":null},"id":"fcab048a-47a1-49e9-863e-a8e75c66f3f9","type":"DataRange1d"},{"attributes":{"data_source":{"id":"86bd2fe1-173e-48aa-a66a-7e46933450a6","type":"ColumnDataSource"},"glyph":{"id":"ae4e2a62-5c5e-4e2e-a1f0-48d0939a5975","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"a7cc4d62-0b97-4408-90ba-92ef0481e234","type":"Circle"},"selection_glyph":null},"id":"41b755cb-bdbe-415b-ae22-5f1061a3f69a","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"e106000d-90ce-4873-9ff1-379b2ea30ea6","type":"BoxAnnotation"},"plot":{"id":"366506da-107a-4876-a9c1-f55bfcd03a72","subtype":"Figure","type":"Plot"}},"id":"4145ba09-5057-402b-94f1-f61b0f4b7176","type":"BoxZoomTool"}],"root_ids":["ba792cf6-2340-4935-8ca2-75e95539c85b"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"f5edfdaf-e1d6-4c1c-80e3-ee3325b1603c","elementid":"16318cf2-8469-4d26-a3ed-7a6bd8ecbff9","modelid":"ba792cf6-2340-4935-8ca2-75e95539c85b"}];
          
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