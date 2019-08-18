(function(global) {
  if (typeof (window._bokeh_onload_callbacks) === "undefined"){
    window._bokeh_onload_callbacks = [];
  }
  function load_lib(url, callback){
    window._bokeh_onload_callbacks.push(callback);
    if (window._bokeh_is_loading){
      console.log("Bokeh: BokehJS is being loaded, scheduling callback at", new Date());
      return null;
    }
    console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", new Date());
    window._bokeh_is_loading = true;
    var s = document.createElement('script');
    s.src = url;
    s.async = true;
    s.onreadystatechange = s.onload = function(){
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.10.0.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.10.0.min.js"

  var elt = document.getElementById("09fd4526-26c8-4e04-900a-7cc60b1ff721");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '09fd4526-26c8-4e04-900a-7cc60b1ff721' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "17eb2c45-b81b-4c48-87c2-9a32892ee6a9"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "7da8abba-5fa4-4828-b4ab-66bd49cd2a96"}, "type": "BoxZoomTool", "id": "7da8abba-5fa4-4828-b4ab-66bd49cd2a96"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "5bd48f86-f298-4a22-a281-615f824370ef"}, "type": "ToolEvents", "id": "5bd48f86-f298-4a22-a281-615f824370ef"}, {"attributes": {"doc": null, "id": "d6e3abea-f013-466f-bf48-cd93436406e3", "tags": []}, "type": "BasicTickFormatter", "id": "d6e3abea-f013-466f-bf48-cd93436406e3"}, {"attributes": {"doc": null, "id": "b56e009f-1a95-4e49-9e54-7f4446fdc10d", "tags": []}, "type": "BasicTickFormatter", "id": "b56e009f-1a95-4e49-9e54-7f4446fdc10d"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "85f55ea4-2c7b-4291-98dc-d54d3a4451d1"}, "tags": [], "doc": null, "id": "643efca7-ed92-4bc3-8d2c-e531156aabcc"}, "type": "ResetTool", "id": "643efca7-ed92-4bc3-8d2c-e531156aabcc"}, {"subtype": "Figure", "type": "Plot", "id": "17eb2c45-b81b-4c48-87c2-9a32892ee6a9", "attributes": {"x_range": {"type": "DataRange1d", "id": "c807851a-29a8-4245-854d-87c0ed0ddddd"}, "right": [], "tags": [], "tools": [{"type": "PanTool", "id": "0c9141ac-59e7-454c-9c5c-fb10f136be67"}, {"type": "WheelZoomTool", "id": "03208fc6-48cd-4624-9307-e29d2948f611"}, {"type": "BoxZoomTool", "id": "7da8abba-5fa4-4828-b4ab-66bd49cd2a96"}, {"type": "ResetTool", "id": "d46da3cb-de05-48a4-8bbf-53bbab0c813e"}, {"type": "PreviewSaveTool", "id": "f4334649-b4f6-455d-ae24-912c16467807"}, {"type": "BoxSelectTool", "id": "c6483c1c-5288-47be-8070-298a3bd805b2"}, {"type": "LassoSelectTool", "id": "a7fe41b8-0fee-4f1f-8c3b-7792a1ca0b27"}], "title": null, "extra_y_ranges": {}, "plot_width": 350, "renderers": [{"type": "LinearAxis", "id": "304f1d1d-b67f-406d-9b4c-5f395d6426c2"}, {"type": "Grid", "id": "163d389f-2865-4174-a183-c24295b10a07"}, {"type": "LinearAxis", "id": "e4fa5960-55a5-4f1b-8c2d-035023adcf23"}, {"type": "Grid", "id": "ad949f59-7caa-4c4e-b4f2-2de4e197d313"}, {"type": "GlyphRenderer", "id": "e77707eb-fdac-4c84-9842-f69fb6436ad2"}], "extra_x_ranges": {}, "plot_height": 350, "tool_events": {"type": "ToolEvents", "id": "b4eb6f1e-a280-453c-abc4-4cea5510b59d"}, "above": [], "doc": null, "id": "17eb2c45-b81b-4c48-87c2-9a32892ee6a9", "y_range": {"type": "DataRange1d", "id": "46550ff6-a473-40e5-8c5b-407afad4465f"}, "below": [{"type": "LinearAxis", "id": "304f1d1d-b67f-406d-9b4c-5f395d6426c2"}], "left": [{"type": "LinearAxis", "id": "e4fa5960-55a5-4f1b-8c2d-035023adcf23"}]}}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "b4eb6f1e-a280-453c-abc4-4cea5510b59d"}, "type": "ToolEvents", "id": "b4eb6f1e-a280-453c-abc4-4cea5510b59d"}, {"subtype": "Figure", "type": "Plot", "id": "85f55ea4-2c7b-4291-98dc-d54d3a4451d1", "attributes": {"x_range": {"type": "DataRange1d", "id": "1e973fe6-bfd8-4727-985a-4350abe420a3"}, "right": [], "tags": [], "tools": [{"type": "PanTool", "id": "f7e6bc3a-5115-477b-a2ea-05b6ad69422f"}, {"type": "WheelZoomTool", "id": "35ab444f-4eda-4313-9a4d-90879c6908a1"}, {"type": "BoxZoomTool", "id": "d4dcb39c-fc51-4fe2-93c7-23780056ad8d"}, {"type": "ResetTool", "id": "643efca7-ed92-4bc3-8d2c-e531156aabcc"}, {"type": "PreviewSaveTool", "id": "b529c973-82d2-4dc6-ad87-073f4f2ae7d5"}, {"type": "BoxSelectTool", "id": "f003faa4-63eb-4769-9b83-c92dae91fe21"}, {"type": "LassoSelectTool", "id": "6fb76cd0-566d-46cc-b415-79364523f58d"}], "title": null, "extra_y_ranges": {}, "plot_width": 350, "renderers": [{"type": "LinearAxis", "id": "41433894-0d03-45fd-82e4-b5e629b9b050"}, {"type": "Grid", "id": "cd1ebe27-b222-47ee-9c88-c129d2487de1"}, {"type": "LinearAxis", "id": "6eea803b-20a8-413f-b9ea-916885398f47"}, {"type": "Grid", "id": "d7f49701-5578-47a1-a3d9-c2c620da57d1"}, {"type": "GlyphRenderer", "id": "0f398d42-2550-49e1-aa03-ccfe60355f12"}], "extra_x_ranges": {}, "plot_height": 350, "tool_events": {"type": "ToolEvents", "id": "3195f1d3-01b9-4a01-9563-a8d546565909"}, "above": [], "doc": null, "id": "85f55ea4-2c7b-4291-98dc-d54d3a4451d1", "y_range": {"type": "DataRange1d", "id": "bc571625-c9e1-4d93-9c54-5fb6a04c907a"}, "below": [{"type": "LinearAxis", "id": "41433894-0d03-45fd-82e4-b5e629b9b050"}], "left": [{"type": "LinearAxis", "id": "6eea803b-20a8-413f-b9ea-916885398f47"}]}}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "17eb2c45-b81b-4c48-87c2-9a32892ee6a9"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "03208fc6-48cd-4624-9307-e29d2948f611"}, "type": "WheelZoomTool", "id": "03208fc6-48cd-4624-9307-e29d2948f611"}, {"attributes": {"column_names": ["y1", "y0", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y1": [1.0, 0.9991169537951469, 0.9964693747217873, 0.9920619386492268, 0.9859024295168594, 0.9780017255870113, 0.9683737802329243, 0.9570355972958094, 0.9440072010544918, 0.9293116008606837, 0.9129747505023434, 0.8950255023668877, 0.8754955564852082, 0.8544194045464886, 0.8318342689826936, 0.8077800372303148, 0.7822991912854713, 0.7554367326767791, 0.7272401029884932, 0.6977591000742853, 0.6670457901096327, 0.635154415638141, 0.6021412997741993, 0.5680647467311558, 0.5329849388506888, 0.4969638303152295, 0.4600650377311522, 0.42235372777596647, 0.3838965021079446, 0.344761279741437, 0.3050171770956176, 0.2647343859284994, 0.2239840493718048, 0.18283813628561943, 0.14136931415473494, 0.0996508207511566, 0.05775633478942844, 0.01575984580321643, -0.026264476527047, -0.06824241336467088, -0.1100998277940316, -0.1517627957532151, -0.19315773659074326, -0.23421154301580224, -0.2748517102124756, -0.3150064638899478, -0.3546048870425357, -0.3935770451956728, -0.43185410991665524, -0.4693684803720136, -0.5060539027168316, -0.5418455871051587, -0.5766803221148671, -0.6104965863848613, -0.6432346572674896, -0.6748367163042576, -0.7052469513385697, -0.7344116550851543, -0.7622793199820932, -0.7888007291579354, -0.8139290433532413, -0.8376198836430415, -0.8598314098141207, -0.8805243942586999, -0.8996622912540178, -0.917211301505453, -0.9331404318392025, -0.9474215499390909, -0.9600294340308397, -0.970941817426052, -0.9801394278472417, -0.9876060214644566, -0.9933284115833829, -0.9972964919342662, -0.9995032545205177, -0.9999448019954837, -0.9986203545455203, -0.995532251267216, -0.9906859460363308, -0.9840899978757481, -0.9757560558394491, -0.9656988384392073, -0.9539361076503359, -0.9404886375423983, -0.9253801775902821, -0.9086374107304312, -0.890289906236314, -0.8703700674963548, -0.8489130747865546, -0.8259568231388738, -0.801541855415102, -0.7757112907044198, -0.748510748171101, -0.719988266486854, -0.6901942189900866, -0.6591812247219377, -0.6270040554961869, -0.5937195391671689, -0.5593864592665334, -0.5240654511860948, -0.4878188950901271, -0.45071080574622946, -0.4128067194693316, -0.37417357837850246, -0.3348796121709864, -0.29499421762224975, -0.2545878360248632, -0.21373182878266958, -0.1724983513799503, -0.13096022594817197, -0.08919081265537408, -0.04726388014532912, -0.005253475255306219, 0.036766207757489656, 0.07872095824983134, 0.1205366802553232, 0.16213952334472495, 0.2034560130526333, 0.24441318064018117, 0.2849386919645683, 0.32496097522784506, 0.36440934737932124, 0.4032141389483648, 0.4413068170871254, 0.4786201066058767, 0.5150881087872179, 0.5506464177693007, 0.5852322342925292, 0.6187844766088584, 0.6512438883578044, 0.6825531432186542, 0.7126569461540443, 0.7415021310661067, 0.7690377546927128, 0.7952151865779787, 0.819988194958146, 0.8433130284111489, 0.8651484931256684, 0.88545602565321, 0.9041997610147167, 0.9213465960414366, 0.9368662478381796, 0.9507313072657054, 0.9629172873477992, 0.9734026665175332, 0.9821689266263426, 0.9892005856487878, 0.9944852250252416, 0.9980135115942135, 0.9997792140755745, 0.9997792140755745, 0.9980135115942136, 0.9944852250252417, 0.9892005856487878, 0.9821689266263425, 0.9734026665175333, 0.9629172873477994, 0.9507313072657056, 0.9368662478381797, 0.9213465960414369, 0.9041997610147166, 0.8854560256532098, 0.8651484931256687, 0.8433130284111492, 0.8199881949581462, 0.795215186577979, 0.7690377546927132, 0.7415021310661071, 0.7126569461540441, 0.6825531432186539, 0.6512438883578048, 0.6187844766088587, 0.5852322342925297, 0.5506464177693011, 0.5150881087872183, 0.47862010660587634, 0.441306817087125, 0.4032141389483652, 0.3644093473793217, 0.32496097522784556, 0.2849386919645687, 0.24441318064018164, 0.20345601305263378, 0.16213952334472456, 0.12053668025532281, 0.07872095824983183, 0.03676620775749015, -0.005253475255305729, -0.04726388014532863, -0.0891908126553736, -0.1309602259481724, -0.1724983513799498, -0.2137318287826691, -0.25458783602486273, -0.29499421762224926, -0.33487961217098594, -0.374173578378502, -0.4128067194693312, -0.45071080574622985, -0.4878188950901275, -0.5240654511860952, -0.5593864592665337, -0.5937195391671691, -0.6270040554961872, -0.6591812247219371, -0.6901942189900859, -0.7199882664868533, -0.7485107481711006, -0.7757112907044195, -0.8015418554151018, -0.8259568231388735, -0.8489130747865546, -0.8703700674963547, -0.890289906236314, -0.9086374107304312, -0.9253801775902822, -0.9404886375423984, -0.953936107650336, -0.9656988384392075, -0.975756055839449, -0.9840899978757479, -0.9906859460363306, -0.9955322512672159, -0.9986203545455203, -0.9999448019954837, -0.9995032545205177, -0.9972964919342662, -0.9933284115833829, -0.9876060214644566, -0.9801394278472417, -0.9709418174260519, -0.9600294340308396, -0.9474215499390908, -0.9331404318392024, -0.9172113015054534, -0.8996622912540182, -0.8805243942587003, -0.859831409814121, -0.8376198836430417, -0.8139290433532416, -0.7888007291579358, -0.7622793199820933, -0.7344116550851544, -0.7052469513385697, -0.6748367163042576, -0.6432346572674893, -0.6104965863848609, -0.5766803221148668, -0.5418455871051584, -0.5060539027168324, -0.46936848037201445, -0.43185410991665607, -0.39357704519567344, -0.3546048870425361, -0.31500646388994824, -0.2748517102124759, -0.2342115430158025, -0.1931577365907433, -0.15176279575321514, -0.11009982779403144, -0.06824241336467071, -0.026264476527046603, 0.015759845803216828, 0.057756334789429056, 0.09965082075115546, 0.141369314154734, 0.18283813628561849, 0.2239840493718041, 0.2647343859284989, 0.30501717709561715, 0.3447612797414368, 0.3838965021079444, 0.4223537277759664, 0.46006503773115215, 0.4969638303152296, 0.5329849388506889, 0.5680647467311561, 0.6021412997741997, 0.6351544156381415, 0.6670457901096319, 0.6977591000742847, 0.7272401029884926, 0.7554367326767787, 0.7822991912854709, 0.8077800372303146, 0.8318342689826934, 0.8544194045464885, 0.8754955564852082, 0.8950255023668877, 0.9129747505023436, 0.9293116008606838, 0.9440072010544919, 0.9570355972958097, 0.9683737802329245, 0.978001725587011, 0.9859024295168592, 0.9920619386492266, 0.9964693747217872, 0.9991169537951469, 1.0], "y0": [0.0, 0.04201562375005714, 0.08395704402592023, 0.12575018840358776, 0.1673212463279966, 0.20859679946928297, 0.24950395138633757, 0.2899704562686571, 0.32992484652912146, 0.36929655902235725, 0.408016059665773, 0.44601496624317477, 0.483226169174079, 0.5195839500354336, 0.5550240976264252, 0.5894840213713949, 0.6229028618605774, 0.6552215983334436, 0.6863831529148176, 0.7163324914196784, 0.7450167205486168, 0.7723851813022902, 0.7983895384498959, 0.8229838658936565, 0.8461247277785513, 0.867771255204052, 0.8878852184023752, 0.9064310942557878, 0.9233761290337134, 0.9386903962388486, 0.9523468494601222, 0.9643213701391566, 0.9745928101658707, 0.9831430292279966, 0.9899569268485472, 0.9950224690546545, 0.9983307096306772, 0.9998758059180444, 0.9996550291339309, 0.9976687691905392, 0.9939205340064791, 0.988416943311459, 0.9811677169552314, 0.9721856577414404, 0.9614866288166868, 0.9490895256547461, 0.9350162426854148, 0.9192916346269248, 0.9019434725902137, 0.8830023950325767, 0.8625018536473203, 0.84047805428498, 0.8169698930104421, 0.7920188874088998, 0.7656691032619608, 0.7379670767234044, 0.7089617321320334, 0.6787042956067718, 0.647248204576604, 0.6146490134051379, 0.5809642952764631, 0.5462535405155903, 0.5105780515230376, 0.4740008345091279, 0.43658648821919677, 0.3984010898462414, 0.35951207833249027, 0.319988135265998, 0.27989906358261646, 0.23931566428755768, 0.19830961141427728, 0.1569533254415059, 0.11531984539199412, 0.07348269983884703, 0.03151577704727028, -0.0105068055189361, -0.052510832095665226, -0.09442211969040283, -0.1361666490962464, -0.1776706956166664, -0.21886095927013058, -0.2596646942446463, -0.3000098373735883, -0.33982513540590753, -0.37904027084595904, -0.4175859861406961, -0.4553942059949107, -0.49239815759849354, -0.5285324885533883, -0.5637333822919653, -0.5979386707829789, -0.6310879443260528, -0.6631226582407953, -0.6939862362621142, -0.7236241704591302, -0.7519841175012184, -0.7790159911011677, -0.8046720504721937, -0.828906984642578, -0.8516779924790325, -0.8729448582774559, -0.8926700227875833, -0.9108186495460929, -0.9273586864010207, -0.9422609221188204, -0.9554990379741032, -0.9670496542309384, -0.9768923714336271, -0.9850098064340269, -0.9913876230917974, -0.9960145575933486, -0.9988824383447774, -0.9999862004036565, -0.9993238944241918, -0.9968966900999463, -0.992708874098054, -0.9867678424885691, -0.979084087682323, -0.9696711799003568, -0.9585457432076577, -0.9457274261535233, -0.931238867070408, -0.9151056540925363, -0.8973562799648924, -0.8780220917224003, -0.8571372353281633, -0.8347385953685361, -0.8108657299115397, -0.7855608006436556, -0.758868498408392, -0.730835964278124, -0.7015127062986041, -0.6709505120531783, -0.6392033572011264, -0.6063273101516626, -0.5723804330419425, -0.5374226791939626, -0.5015157872314542, -0.4647231720437684, -0.4271098127893215, -0.38874213813639713, -0.34968790894397633, -0.31001609858980345, -0.2697967711570244, -0.22910095769454164, -0.18800053076961812, -0.14656807753428164, -0.10487677152970748, -0.06300024345497934, -0.02101245112847572, 0.021012451128475232, 0.06300024345497886, 0.104876771529707, 0.14656807753428203, 0.1880005307696185, 0.22910095769454117, 0.26979677115702394, 0.310016098589803, 0.34968790894397583, 0.3887421381363967, 0.42710981278932186, 0.46472317204376873, 0.5015157872314537, 0.5374226791939621, 0.5723804330419421, 0.6063273101516623, 0.639203357201126, 0.670950512053178, 0.7015127062986044, 0.7308359642781243, 0.7588684984083917, 0.7855608006436553, 0.8108657299115395, 0.8347385953685359, 0.8571372353281631, 0.8780220917224005, 0.8973562799648926, 0.9151056540925362, 0.9312388670704079, 0.9457274261535231, 0.9585457432076576, 0.9696711799003567, 0.9790840876823229, 0.9867678424885691, 0.992708874098054, 0.9968966900999462, 0.9993238944241917, 0.9999862004036565, 0.9988824383447774, 0.9960145575933487, 0.9913876230917974, 0.985009806434027, 0.9768923714336272, 0.9670496542309385, 0.9554990379741034, 0.9422609221188206, 0.9273586864010209, 0.9108186495460932, 0.8926700227875832, 0.8729448582774557, 0.8516779924790323, 0.8289069846425777, 0.8046720504721935, 0.7790159911011675, 0.751984117501219, 0.7236241704591309, 0.6939862362621149, 0.6631226582407956, 0.6310879443260532, 0.5979386707829794, 0.5637333822919658, 0.5285324885533883, 0.49239815759849354, 0.45539420599491076, 0.4175859861406961, 0.37904027084595865, 0.3398251354059072, 0.3000098373735879, 0.2596646942446459, 0.21886095927013147, 0.17767069561666732, 0.13616664909624734, 0.09442211969040332, 0.05251083209566571, 0.010506805518936591, -0.03151577704726979, -0.07348269983884699, -0.11531984539199408, -0.15695332544150586, -0.19830961141427725, -0.23931566428755807, -0.2798990635826168, -0.3199881352659984, -0.35951207833249066, -0.39840108984624056, -0.43658648821919593, -0.47400083450912706, -0.5105780515230371, -0.5462535405155898, -0.5809642952764628, -0.6146490134051376, -0.647248204576604, -0.6787042956067718, -0.7089617321320334, -0.7379670767234043, -0.765669103261961, -0.7920188874089001, -0.8169698930104423, -0.8404780542849802, -0.8625018536473198, -0.8830023950325763, -0.9019434725902132, -0.9192916346269244, -0.9350162426854146, -0.949089525654746, -0.9614866288166868, -0.9721856577414403, -0.9811677169552314, -0.988416943311459, -0.9939205340064792, -0.9976687691905393, -0.9996550291339309, -0.9998758059180444, -0.9983307096306772, -0.9950224690546546, -0.9899569268485473, -0.9831430292279967, -0.9745928101658708, -0.9643213701391568, -0.9523468494601224, -0.9386903962388488, -0.9233761290337135, -0.9064310942557878, -0.8878852184023752, -0.8677712552040519, -0.8461247277785513, -0.8229838658936562, -0.7983895384498956, -0.7723851813022897, -0.7450167205486176, -0.7163324914196789, -0.6863831529148181, -0.6552215983334442, -0.6229028618605779, -0.5894840213713953, -0.5550240976264256, -0.5195839500354338, -0.4832261691740792, -0.44601496624317477, -0.40801605966577287, -0.36929655902235703, -0.32992484652912113, -0.28997045626865664, -0.24950395138633705, -0.20859679946928403, -0.16732124632799755, -0.12575018840358862, -0.08395704402592095, -0.04201562375005775, -4.898587196589413e-16], "x": [0.0, 0.04202799536574974, 0.08405599073149948, 0.12608398609724922, 0.16811198146299897, 0.21013997682874871, 0.25216797219449844, 0.2941959675602482, 0.33622396292599793, 0.3782519582917477, 0.42027995365749743, 0.4623079490232472, 0.5043359443889969, 0.5463639397547466, 0.5883919351204964, 0.6304199304862461, 0.6724479258519959, 0.7144759212177456, 0.7565039165834954, 0.7985319119492451, 0.8405599073149949, 0.8825879026807446, 0.9246158980464944, 0.9666438934122441, 1.0086718887779937, 1.0506998841437436, 1.0927278795094932, 1.134755874875243, 1.1767838702409927, 1.2188118656067426, 1.2608398609724922, 1.302867856338242, 1.3448958517039917, 1.3869238470697414, 1.4289518424354912, 1.4709798378012409, 1.5130078331669907, 1.5550358285327404, 1.5970638238984902, 1.6390918192642399, 1.6811198146299897, 1.7231478099957394, 1.7651758053614892, 1.8072038007272389, 1.8492317960929887, 1.8912597914587383, 1.9332877868244882, 1.9753157821902378, 2.0173437775559875, 2.0593717729217373, 2.101399768287487, 2.1434277636532366, 2.1854557590189865, 2.2274837543847363, 2.269511749750486, 2.3115397451162356, 2.3535677404819855, 2.3955957358477353, 2.437623731213485, 2.4796517265792346, 2.5216797219449845, 2.5637077173107343, 2.605735712676484, 2.6477637080422336, 2.6897917034079835, 2.7318196987737333, 2.7738476941394827, 2.8158756895052326, 2.8579036848709825, 2.8999316802367323, 2.9419596756024817, 2.9839876709682316, 3.0260156663339814, 3.0680436616997313, 3.1100716570654807, 3.1520996524312306, 3.1941276477969804, 3.2361556431627303, 3.2781836385284797, 3.3202116338942296, 3.3622396292599794, 3.404267624625729, 3.4462956199914787, 3.4883236153572286, 3.5303516107229784, 3.572379606088728, 3.6144076014544777, 3.6564355968202276, 3.6984635921859774, 3.740491587551727, 3.7825195829174767, 3.8245475782832266, 3.8665755736489764, 3.908603569014726, 3.9506315643804757, 3.9926595597462256, 4.034687555111975, 4.076715550477725, 4.118743545843475, 4.1607715412092245, 4.202799536574974, 4.244827531940724, 4.286855527306473, 4.328883522672223, 4.370911518037973, 4.412939513403723, 4.454967508769473, 4.4969955041352225, 4.539023499500972, 4.581051494866722, 4.623079490232471, 4.665107485598221, 4.707135480963971, 4.749163476329721, 4.791191471695471, 4.8332194670612205, 4.87524746242697, 4.917275457792719, 4.959303453158469, 5.001331448524219, 5.043359443889969, 5.085387439255719, 5.127415434621469, 5.1694434299872185, 5.211471425352968, 5.253499420718717, 5.295527416084467, 5.337555411450217, 5.379583406815967, 5.421611402181717, 5.463639397547467, 5.5056673929132165, 5.5476953882789655, 5.589723383644715, 5.631751379010465, 5.673779374376215, 5.715807369741965, 5.757835365107715, 5.799863360473465, 5.8418913558392145, 5.8839193512049635, 5.925947346570713, 5.967975341936463, 6.010003337302213, 6.052031332667963, 6.094059328033713, 6.136087323399463, 6.178115318765212, 6.220143314130961, 6.262171309496711, 6.304199304862461, 6.346227300228211, 6.388255295593961, 6.430283290959711, 6.472311286325461, 6.51433928169121, 6.556367277056959, 6.598395272422709, 6.640423267788459, 6.682451263154209, 6.724479258519959, 6.766507253885709, 6.808535249251458, 6.850563244617208, 6.892591239982957, 6.934619235348707, 6.976647230714457, 7.018675226080207, 7.060703221445957, 7.102731216811707, 7.144759212177456, 7.1867872075432055, 7.228815202908955, 7.270843198274705, 7.312871193640455, 7.354899189006205, 7.396927184371955, 7.438955179737704, 7.480983175103454, 7.5230111704692035, 7.565039165834953, 7.607067161200703, 7.649095156566453, 7.691123151932203, 7.733151147297953, 7.775179142663702, 7.817207138029452, 7.8592351333952015, 7.901263128760951, 7.943291124126701, 7.985319119492451, 8.0273471148582, 8.06937511022395, 8.1114031055897, 8.15343110095545, 8.1954590963212, 8.23748709168695, 8.2795150870527, 8.321543082418449, 8.363571077784199, 8.405599073149949, 8.447627068515699, 8.489655063881449, 8.531683059247198, 8.573711054612946, 8.615739049978696, 8.657767045344446, 8.699795040710196, 8.741823036075946, 8.783851031441696, 8.825879026807446, 8.867907022173195, 8.909935017538945, 8.951963012904695, 8.993991008270445, 9.036019003636195, 9.078046999001945, 9.120074994367695, 9.162102989733445, 9.204130985099193, 9.246158980464942, 9.288186975830692, 9.330214971196442, 9.372242966562192, 9.414270961927942, 9.456298957293692, 9.498326952659442, 9.540354948025191, 9.582382943390941, 9.624410938756691, 9.666438934122441, 9.708466929488191, 9.75049492485394, 9.79252292021969, 9.834550915585439, 9.876578910951189, 9.918606906316938, 9.960634901682688, 10.002662897048438, 10.044690892414188, 10.086718887779938, 10.128746883145688, 10.170774878511438, 10.212802873877187, 10.254830869242937, 10.296858864608687, 10.338886859974437, 10.380914855340187, 10.422942850705937, 10.464970846071685, 10.506998841437435, 10.549026836803185, 10.591054832168934, 10.633082827534684, 10.675110822900434, 10.717138818266184, 10.759166813631934, 10.801194808997684, 10.843222804363434, 10.885250799729183, 10.927278795094933, 10.969306790460683, 11.011334785826433, 11.053362781192183, 11.095390776557931, 11.13741877192368, 11.17944676728943, 11.22147476265518, 11.26350275802093, 11.30553075338668, 11.34755874875243, 11.38958674411818, 11.43161473948393, 11.47364273484968, 11.51567073021543, 11.55769872558118, 11.59972672094693, 11.641754716312679, 11.683782711678429, 11.725810707044177, 11.767838702409927, 11.809866697775677, 11.851894693141427, 11.893922688507176, 11.935950683872926, 11.977978679238676, 12.020006674604426, 12.062034669970176, 12.104062665335926, 12.146090660701676, 12.188118656067426, 12.230146651433175, 12.272174646798925, 12.314202642164675, 12.356230637530423, 12.398258632896173, 12.440286628261923, 12.482314623627673, 12.524342618993423, 12.566370614359172]}, "id": "d007657a-c677-46ef-b44f-23456d963658"}, "type": "ColumnDataSource", "id": "d007657a-c677-46ef-b44f-23456d963658"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "y": {"field": "y0"}, "x": {"field": "x"}, "id": "3cb4f682-20d6-4457-a155-d5fbeed1593d"}, "type": "Circle", "id": "3cb4f682-20d6-4457-a155-d5fbeed1593d"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "17eb2c45-b81b-4c48-87c2-9a32892ee6a9"}, "tags": [], "doc": null, "renderers": [], "names": [], "id": "a7fe41b8-0fee-4f1f-8c3b-7792a1ca0b27"}, "type": "LassoSelectTool", "id": "a7fe41b8-0fee-4f1f-8c3b-7792a1ca0b27"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "1e973fe6-bfd8-4727-985a-4350abe420a3"}, "type": "DataRange1d", "id": "1e973fe6-bfd8-4727-985a-4350abe420a3"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "3195f1d3-01b9-4a01-9563-a8d546565909"}, "type": "ToolEvents", "id": "3195f1d3-01b9-4a01-9563-a8d546565909"}, {"attributes": {"doc": null, "id": "54437685-6b1a-435b-8fbe-e66639dada5a", "tags": []}, "type": "BasicTickFormatter", "id": "54437685-6b1a-435b-8fbe-e66639dada5a"}, {"attributes": {"nonselection_glyph": {"type": "Circle", "id": "3cb4f682-20d6-4457-a155-d5fbeed1593d"}, "data_source": {"type": "ColumnDataSource", "id": "d007657a-c677-46ef-b44f-23456d963658"}, "tags": [], "doc": null, "selection_glyph": null, "id": "0f398d42-2550-49e1-aa03-ccfe60355f12", "glyph": {"type": "Circle", "id": "a1086a17-a3ae-4b5d-9889-775e6bafc01f"}}, "type": "GlyphRenderer", "id": "0f398d42-2550-49e1-aa03-ccfe60355f12"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "038076bb-81fe-4a08-8b2e-572ed02e3359", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "038076bb-81fe-4a08-8b2e-572ed02e3359"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "7c644c6f-34a3-451c-9869-ff212ce22137", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "7c644c6f-34a3-451c-9869-ff212ce22137"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "23621be4-00a1-4b5d-aa3b-859dc23d1e71", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "23621be4-00a1-4b5d-aa3b-859dc23d1e71"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "85f55ea4-2c7b-4291-98dc-d54d3a4451d1"}, "tags": [], "doc": null, "id": "b529c973-82d2-4dc6-ad87-073f4f2ae7d5"}, "type": "PreviewSaveTool", "id": "b529c973-82d2-4dc6-ad87-073f4f2ae7d5"}, {"attributes": {"x_range": null, "right": [], "tags": [], "tools": [], "children": [[{"subtype": "Figure", "type": "Plot", "id": "85f55ea4-2c7b-4291-98dc-d54d3a4451d1"}, {"subtype": "Figure", "type": "Plot", "id": "17eb2c45-b81b-4c48-87c2-9a32892ee6a9"}]], "renderers": [], "extra_y_ranges": {}, "extra_x_ranges": {}, "tool_events": {"type": "ToolEvents", "id": "5bd48f86-f298-4a22-a281-615f824370ef"}, "above": [], "doc": null, "id": "3656c887-21e1-466e-aeaa-4bc6cdb4cf5d", "y_range": null, "below": [], "left": []}, "type": "GridPlot", "id": "3656c887-21e1-466e-aeaa-4bc6cdb4cf5d"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 1.0}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "y": {"field": "y1"}, "x": {"field": "x"}, "id": "41a0426c-0121-4932-bfe9-b657c4781e4b"}, "type": "Circle", "id": "41a0426c-0121-4932-bfe9-b657c4781e4b"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "17eb2c45-b81b-4c48-87c2-9a32892ee6a9"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "b56e009f-1a95-4e49-9e54-7f4446fdc10d"}, "ticker": {"type": "BasicTicker", "id": "7c644c6f-34a3-451c-9869-ff212ce22137"}, "id": "e4fa5960-55a5-4f1b-8c2d-035023adcf23"}, "type": "LinearAxis", "id": "e4fa5960-55a5-4f1b-8c2d-035023adcf23"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "85f55ea4-2c7b-4291-98dc-d54d3a4451d1"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "23621be4-00a1-4b5d-aa3b-859dc23d1e71"}, "id": "cd1ebe27-b222-47ee-9c88-c129d2487de1"}, "type": "Grid", "id": "cd1ebe27-b222-47ee-9c88-c129d2487de1"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "85f55ea4-2c7b-4291-98dc-d54d3a4451d1"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "35ab444f-4eda-4313-9a4d-90879c6908a1"}, "type": "WheelZoomTool", "id": "35ab444f-4eda-4313-9a4d-90879c6908a1"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "17eb2c45-b81b-4c48-87c2-9a32892ee6a9"}, "tags": [], "doc": null, "id": "d46da3cb-de05-48a4-8bbf-53bbab0c813e"}, "type": "ResetTool", "id": "d46da3cb-de05-48a4-8bbf-53bbab0c813e"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "85f55ea4-2c7b-4291-98dc-d54d3a4451d1"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "54437685-6b1a-435b-8fbe-e66639dada5a"}, "ticker": {"type": "BasicTicker", "id": "038076bb-81fe-4a08-8b2e-572ed02e3359"}, "id": "6eea803b-20a8-413f-b9ea-916885398f47"}, "type": "LinearAxis", "id": "6eea803b-20a8-413f-b9ea-916885398f47"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "17eb2c45-b81b-4c48-87c2-9a32892ee6a9"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "0c9141ac-59e7-454c-9c5c-fb10f136be67"}, "type": "PanTool", "id": "0c9141ac-59e7-454c-9c5c-fb10f136be67"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "17eb2c45-b81b-4c48-87c2-9a32892ee6a9"}, "tags": [], "doc": null, "id": "f4334649-b4f6-455d-ae24-912c16467807"}, "type": "PreviewSaveTool", "id": "f4334649-b4f6-455d-ae24-912c16467807"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "y": {"field": "y1"}, "x": {"field": "x"}, "id": "e1028ce3-1a0f-4776-aad1-6390f77141e1"}, "type": "Circle", "id": "e1028ce3-1a0f-4776-aad1-6390f77141e1"}, {"attributes": {"nonselection_glyph": {"type": "Circle", "id": "e1028ce3-1a0f-4776-aad1-6390f77141e1"}, "data_source": {"type": "ColumnDataSource", "id": "d007657a-c677-46ef-b44f-23456d963658"}, "tags": [], "doc": null, "selection_glyph": null, "id": "e77707eb-fdac-4c84-9842-f69fb6436ad2", "glyph": {"type": "Circle", "id": "41a0426c-0121-4932-bfe9-b657c4781e4b"}}, "type": "GlyphRenderer", "id": "e77707eb-fdac-4c84-9842-f69fb6436ad2"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "bc571625-c9e1-4d93-9c54-5fb6a04c907a"}, "type": "DataRange1d", "id": "bc571625-c9e1-4d93-9c54-5fb6a04c907a"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "c807851a-29a8-4245-854d-87c0ed0ddddd"}, "type": "DataRange1d", "id": "c807851a-29a8-4245-854d-87c0ed0ddddd"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "17eb2c45-b81b-4c48-87c2-9a32892ee6a9"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "93fc708b-51f5-41da-8349-81d2b7be4ae2"}, "ticker": {"type": "BasicTicker", "id": "5a70d5de-4c07-4f09-bf85-2a086966fd17"}, "id": "304f1d1d-b67f-406d-9b4c-5f395d6426c2"}, "type": "LinearAxis", "id": "304f1d1d-b67f-406d-9b4c-5f395d6426c2"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "85f55ea4-2c7b-4291-98dc-d54d3a4451d1"}, "tags": [], "doc": null, "renderers": [], "names": [], "id": "6fb76cd0-566d-46cc-b415-79364523f58d"}, "type": "LassoSelectTool", "id": "6fb76cd0-566d-46cc-b415-79364523f58d"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "17eb2c45-b81b-4c48-87c2-9a32892ee6a9"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "renderers": [{"type": "GlyphRenderer", "id": "e77707eb-fdac-4c84-9842-f69fb6436ad2"}], "callback": null, "names": [], "id": "c6483c1c-5288-47be-8070-298a3bd805b2"}, "type": "BoxSelectTool", "id": "c6483c1c-5288-47be-8070-298a3bd805b2"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "5a70d5de-4c07-4f09-bf85-2a086966fd17", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "5a70d5de-4c07-4f09-bf85-2a086966fd17"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "85f55ea4-2c7b-4291-98dc-d54d3a4451d1"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "d4dcb39c-fc51-4fe2-93c7-23780056ad8d"}, "type": "BoxZoomTool", "id": "d4dcb39c-fc51-4fe2-93c7-23780056ad8d"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "85f55ea4-2c7b-4291-98dc-d54d3a4451d1"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "038076bb-81fe-4a08-8b2e-572ed02e3359"}, "id": "d7f49701-5578-47a1-a3d9-c2c620da57d1"}, "type": "Grid", "id": "d7f49701-5578-47a1-a3d9-c2c620da57d1"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "46550ff6-a473-40e5-8c5b-407afad4465f"}, "type": "DataRange1d", "id": "46550ff6-a473-40e5-8c5b-407afad4465f"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "85f55ea4-2c7b-4291-98dc-d54d3a4451d1"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "renderers": [{"type": "GlyphRenderer", "id": "0f398d42-2550-49e1-aa03-ccfe60355f12"}], "callback": null, "names": [], "id": "f003faa4-63eb-4769-9b83-c92dae91fe21"}, "type": "BoxSelectTool", "id": "f003faa4-63eb-4769-9b83-c92dae91fe21"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 1.0}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "y": {"field": "y0"}, "x": {"field": "x"}, "id": "a1086a17-a3ae-4b5d-9889-775e6bafc01f"}, "type": "Circle", "id": "a1086a17-a3ae-4b5d-9889-775e6bafc01f"}, {"attributes": {"doc": null, "id": "93fc708b-51f5-41da-8349-81d2b7be4ae2", "tags": []}, "type": "BasicTickFormatter", "id": "93fc708b-51f5-41da-8349-81d2b7be4ae2"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "85f55ea4-2c7b-4291-98dc-d54d3a4451d1"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "d6e3abea-f013-466f-bf48-cd93436406e3"}, "ticker": {"type": "BasicTicker", "id": "23621be4-00a1-4b5d-aa3b-859dc23d1e71"}, "id": "41433894-0d03-45fd-82e4-b5e629b9b050"}, "type": "LinearAxis", "id": "41433894-0d03-45fd-82e4-b5e629b9b050"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "17eb2c45-b81b-4c48-87c2-9a32892ee6a9"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "7c644c6f-34a3-451c-9869-ff212ce22137"}, "id": "ad949f59-7caa-4c4e-b4f2-2de4e197d313"}, "type": "Grid", "id": "ad949f59-7caa-4c4e-b4f2-2de4e197d313"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "85f55ea4-2c7b-4291-98dc-d54d3a4451d1"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "f7e6bc3a-5115-477b-a2ea-05b6ad69422f"}, "type": "PanTool", "id": "f7e6bc3a-5115-477b-a2ea-05b6ad69422f"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "17eb2c45-b81b-4c48-87c2-9a32892ee6a9"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "5a70d5de-4c07-4f09-bf85-2a086966fd17"}, "id": "163d389f-2865-4174-a183-c24295b10a07"}, "type": "Grid", "id": "163d389f-2865-4174-a183-c24295b10a07"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("09fd4526-26c8-4e04-900a-7cc60b1ff721", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("09fd4526-26c8-4e04-900a-7cc60b1ff721", all_models);
    });
  }

}(this));