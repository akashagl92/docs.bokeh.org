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

  var elt = document.getElementById("e55bc61d-211e-479e-8d96-7737449298b1");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'e55bc61d-211e-479e-8d96-7737449298b1' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"subtype": "Figure", "type": "Plot", "id": "c8a322eb-2cac-4df5-a377-8e62a8c9779a", "attributes": {"x_range": {"type": "DataRange1d", "id": "a03a0bbe-2657-4431-8bf3-412d9ab1b6b9"}, "right": [], "tags": [], "tools": [{"type": "LassoSelectTool", "id": "73aeeed9-5a00-46ff-a5ac-f7cda1ee9472"}], "title": "Select Here", "extra_y_ranges": {}, "plot_width": 400, "renderers": [{"type": "LinearAxis", "id": "0366f30d-7a08-485c-8012-df51321a816c"}, {"type": "Grid", "id": "543f6de5-5ac2-4dcf-acd2-c20d107ead5e"}, {"type": "LinearAxis", "id": "11471a06-5ed4-4898-90d2-8929f16acafd"}, {"type": "Grid", "id": "a69b74b6-c1a1-4a44-8c1c-1a7b72e8a3c9"}, {"type": "GlyphRenderer", "id": "da604106-a530-4136-b30b-a557e183161c"}, {"type": "GlyphRenderer", "id": "60dcaf9f-4ad0-468a-9822-c3e8d618d1c7"}], "extra_x_ranges": {}, "plot_height": 400, "tool_events": {"type": "ToolEvents", "id": "0e072593-fc58-42f8-9f14-d1db2cc92e77"}, "above": [], "doc": null, "id": "c8a322eb-2cac-4df5-a377-8e62a8c9779a", "y_range": {"type": "DataRange1d", "id": "8365450c-ae26-4eda-995a-8b80c557d6aa"}, "below": [{"type": "LinearAxis", "id": "0366f30d-7a08-485c-8012-df51321a816c"}], "left": [{"type": "LinearAxis", "id": "11471a06-5ed4-4898-90d2-8929f16acafd"}]}}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "c8a322eb-2cac-4df5-a377-8e62a8c9779a"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "23cb1aa1-519a-4a44-a584-289905d67944"}, "id": "a69b74b6-c1a1-4a44-8c1c-1a7b72e8a3c9"}, "type": "Grid", "id": "a69b74b6-c1a1-4a44-8c1c-1a7b72e8a3c9"}, {"attributes": {"column_names": ["ym", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"x": [0, 1], "ym": [0.5, 0.5]}, "id": "a1e7b4a8-70a7-4ccc-aa07-359f570b344f"}, "type": "ColumnDataSource", "id": "a1e7b4a8-70a7-4ccc-aa07-359f570b344f"}, {"attributes": {"doc": null, "id": "c3f48cd8-05fa-4b42-a7b7-3d613e957d53", "tags": []}, "type": "BasicTickFormatter", "id": "c3f48cd8-05fa-4b42-a7b7-3d613e957d53"}, {"attributes": {"line_color": {"field": "color"}, "line_alpha": {"value": 0.4}, "fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.4}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "3a71f6d1-79b1-4e2b-9c71-32e400ee0f43", "size": {"units": "screen", "value": 8}}, "type": "Circle", "id": "3a71f6d1-79b1-4e2b-9c71-32e400ee0f43"}, {"attributes": {"nonselection_glyph": {"type": "Circle", "id": "2e1ea793-d312-45a2-8adb-4fdc916bfafe"}, "data_source": {"type": "ColumnDataSource", "id": "0334db92-f776-4135-b34d-ae5ec67d13ab"}, "tags": [], "doc": null, "selection_glyph": null, "id": "da604106-a530-4136-b30b-a557e183161c", "glyph": {"type": "Circle", "id": "3a71f6d1-79b1-4e2b-9c71-32e400ee0f43"}}, "type": "GlyphRenderer", "id": "da604106-a530-4136-b30b-a557e183161c"}, {"attributes": {"code": "\n        var inds = cb_obj.get('selected')['1d'].indices;\n        var d = cb_obj.get('data');\n        var ym = 0\n\n        if (inds.length == 0) { return; }\n\n        for (i = 0; i < d['color'].length; i++) {\n            d['color'][i] = \"navy\"\n        }\n        for (i = 0; i < inds.length; i++) {\n            d['color'][inds[i]] = \"firebrick\"\n            ym += d['y'][inds[i]]\n        }\n\n        ym /= inds.length\n        s2.get('data')['ym'] = [ym, ym]\n\n        cb_obj.trigger('change');\n        s2.trigger('change');\n    ", "tags": [], "doc": null, "args": {"s2": {"type": "ColumnDataSource", "id": "a1e7b4a8-70a7-4ccc-aa07-359f570b344f"}}, "id": "5731f600-ce64-45a8-9643-3b29b7bf1ff3"}, "type": "CustomJS", "id": "5731f600-ce64-45a8-9643-3b29b7bf1ff3"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "c8a322eb-2cac-4df5-a377-8e62a8c9779a"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "a76b536c-480c-48dc-a1ab-466bd191a32d"}, "id": "543f6de5-5ac2-4dcf-acd2-c20d107ead5e"}, "type": "Grid", "id": "543f6de5-5ac2-4dcf-acd2-c20d107ead5e"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "8365450c-ae26-4eda-995a-8b80c557d6aa"}, "type": "DataRange1d", "id": "8365450c-ae26-4eda-995a-8b80c557d6aa"}, {"attributes": {"column_names": ["color", "y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": {"type": "CustomJS", "id": "5731f600-ce64-45a8-9643-3b29b7bf1ff3"}, "data": {"color": ["navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy"], "y": [0.13672516589310313, 0.15729124410273776, 0.8964742400369761, 0.5400601877515417, 0.5803007976763149, 0.1865127827180465, 0.8266954733875357, 0.808911713875194, 0.5380538024655225, 0.3251258961714535, 0.7535288950996988, 0.7891452025425358, 0.8686997261000575, 0.07559403707426604, 0.639300736005632, 0.1808898703608074, 0.282120267728046, 0.10131174348901584, 0.8220810508644248, 0.3666847427422243, 0.38688346537334106, 0.22622220606763577, 0.10273536571700326, 0.05300788391896005, 0.618879866191616, 0.8172538086282018, 0.47884997659995787, 0.057042006224385045, 0.16925274241095722, 0.6787658476557579, 0.05273144959680964, 0.15057964541413216, 0.10293515484184756, 0.9314177238182835, 0.8165616168644415, 0.12208748996267194, 0.18873271340647624, 0.386230079693906, 0.19149639843086375, 0.2576077516802646, 0.1035358642746359, 0.28614918485202745, 0.7206346696309156, 0.9654787254386422, 0.6574611434246896, 0.6983152838328728, 0.24696373530593185, 0.3496002978488192, 0.48814103261574804, 0.8362295384061651, 0.45830147460074167, 0.808253913359357, 0.23203831963345067, 0.46785652803715916, 0.20526103901340798, 0.12518629603463582, 0.4320431157792889, 0.6416682998927477, 0.8835386480236186, 0.6774331689645414, 0.5442901077917132, 0.3791424541350158, 0.8655135086290139, 0.24735273888217912, 0.9847978584179298, 0.8615117232244651, 0.8115952653200255, 0.46254304148082304, 0.19377521219287597, 0.8131877498304948, 0.2438555811496954, 0.35430575957788324, 0.08030766988162152, 0.9572692220108963, 0.1101669209298003, 0.15242994205672256, 0.2964469038022317, 0.6859454260836474, 0.2535059545213134, 0.0016369745909023958, 0.14045668670833433, 0.41956635670246856, 0.007008200710898138, 0.060096727388317506, 0.9377050003745744, 0.9454746799271851, 0.8878029281315959, 0.5027171136462508, 0.15387111550284582, 0.32651925852071817, 0.9286626523497997, 0.32224881918415904, 0.1308939947538419, 0.9496466230302368, 0.558412220085462, 0.1919046173273794, 0.945193694500561, 0.05574613738314971, 0.8655170220555668, 0.26497365429886954, 0.749620384602166, 0.26668346320239644, 0.5093934362983126, 0.8975395441364925, 0.6572733826318806, 0.551832258447482, 0.33162508071606456, 0.1823872329656845, 0.11996753979404673, 0.5762635610573721, 0.18009013920674344, 0.1357263743491408, 0.7665845883015378, 0.5238621557695551, 0.6040754794840304, 0.8012019249451543, 0.5881800367423825, 0.5850902932324505, 0.5445643700860329, 0.4428237885509001, 0.8561213063688026, 0.050177860051910717, 0.7072766671313955, 0.46570519785915865, 0.18133696317847003, 0.11729820071528319, 0.8467226416266854, 0.6715761578170646, 0.2467399038624839, 0.7151740373944808, 0.5182075716465613, 0.5613896302041619, 0.822707184309287, 0.22350736679842154, 0.3735371921488132, 0.6859554684391286, 0.20160334096662236, 0.031187265623922156, 0.3209942491386578, 0.2490708304971112, 0.2335490075323986, 0.5982835133408594, 0.3372957374535728, 0.7255371153472329, 0.3074428158771918, 0.6448710032448439, 0.8446467952842746, 0.5642288313978502, 0.8180434862950465, 0.45060103098855797, 0.858021763381091, 0.5938661977405472, 0.5181756163501939, 0.6122731912511418, 0.06872400031279702, 0.057790210623564486, 0.0354476410385387, 0.35309843012758957, 0.31856837670505245, 0.417875055706328, 0.016515116625120396, 0.19890428876893873, 0.7473930316094944, 0.2739755073709025, 0.4854867982297063, 0.0902511088924205, 0.2998020686344969, 0.07897569340503785, 0.610707692575748, 0.7292076790502668, 0.3597188130202459, 0.1568439170056346, 0.6111035707332783, 0.12856985066588844, 0.8555080090367284, 0.7151337533621521, 0.13686881706670817, 0.4604078105760473, 0.9947424109621713, 0.6127159395385091, 0.14949361792387017, 0.1591044767547366, 0.45378649276338934, 0.8789435911023651, 0.5276384385034464, 0.4996542030181188, 0.24050587647313182, 0.6423972361558636, 0.22674129544556132, 0.3715137199346752, 0.8096205291857536, 0.11098154481067712, 0.5999934677510158, 0.9059692450634377, 0.5952821530683888, 0.29601475602020844, 0.4820369552940208, 0.109417303392498, 0.8858629490132512, 0.04331688214664142, 0.8086264263123648, 0.09737478261774524, 0.6637200154572663, 0.654508263838181, 0.4079384755652108, 0.37454378498602625, 0.010783986981746319, 0.1454175023120836, 0.6253569807843294, 0.4438795327521069, 0.37395165356255833, 0.4648595923573541, 0.48902073983664796, 0.2933501513730896, 0.16955785610288288, 0.6785744309915693, 0.18240878216275358, 0.9840977681522539, 0.8836831085233314, 0.45561889285857726, 0.039644243956216685, 0.9357841636273919, 0.46799190893595466, 0.09608948763906355, 0.07276107299480072, 0.014537411728508864, 0.5480275371692425, 0.978802535413305, 0.2608097372333805, 0.23452250910067685, 0.9261571308182537, 0.6289147205993029, 0.27787044831313634, 0.8134060500978431, 0.9350221451017103, 0.6469020509056717, 0.9531748992719755, 0.2851582404183811, 0.9466914708552371, 0.2279301814347917, 0.0008161178173961003, 0.08031413813084387, 0.7683586593346794, 0.635290844910344, 0.27313288936872293, 0.07757170353355303, 0.711386174443629, 0.09675967284598641, 0.03986002411141509, 0.8013683181649204, 0.360353189740501, 0.6543542651847079, 0.6926689830194696, 0.679383391336717, 0.09921358338357777, 0.9783984687601158, 0.20830340706122719, 0.07152573800902584, 0.08919517022532497, 0.5917018531679645, 0.4850232847658237, 0.16249179028412342, 0.8961828993501674, 0.4689658700557293, 0.19863165054384424, 0.12916941362676837, 0.19112331280178896, 0.7862891855674226, 0.7523856746837306, 0.04735517525461663, 0.4635543833346455, 0.21620124323164558, 0.9089750912956686, 0.06650266184975251, 0.4515126709606615, 0.07551298885083779, 0.44548849858783524, 0.4611093926563422, 0.3333028270139968, 0.21130267965367489, 0.5628246400308955, 0.7920752711599499, 0.8036400267502932, 0.7411386128627142, 0.3544187470838994, 0.028017388689006606, 0.843732041894722, 0.5339843636916165, 0.2361138740078519, 0.3205743388547976, 0.2658683024016999, 0.7699946879860012, 0.38547369486831107, 0.011134870571735345, 0.7873599672653321, 0.0005728617326491436, 0.24957028359844213, 0.7682486816163616, 0.9528457518896684, 0.6085692877489899, 0.2826452532212378, 0.3748364982308243, 0.5569196094026035, 0.7515007220203687, 0.09233281758968492, 0.5359707284255477, 0.6830416773896242, 0.8511266095285486, 0.9874612208011037, 0.47041841872365997, 0.6453157545903713, 0.44262965944895627, 0.6065105935604851, 0.6967773913059664, 0.5683577453564829, 0.027411821892084354, 0.593214215614159, 0.11999801800703991, 0.18616488915208196, 0.9697428827862199, 0.224348002022005, 0.6357052135182932, 0.988917431908134, 0.24217700578622847, 0.5533852303953488, 0.5492648008798764, 0.1018649906092316, 0.71414242773, 0.8757906640589025, 0.6694950853649437, 0.11655369354454326, 0.6232550288591675, 0.6871329331862299, 0.24293215378136435, 0.3970235341270052, 0.3250039436428662, 0.3323550967137675, 0.7134592194184107, 0.23407938984289667, 0.6347225670221228, 0.8046986796844968, 0.5944229379713158, 0.7604020547042565, 0.02257890121758588, 0.7879335233753545, 0.11554709973468391, 0.9798656050821082, 0.8328681429584956, 0.4023094968272456, 0.9425886145967726, 0.7177124922936434, 0.8558246608598267, 0.7612043606786915, 0.695322887732221, 0.4583462310794687, 0.23460505780508756, 0.218010169025872, 0.4622418682900664, 0.5149846650982273, 0.851715191446803, 0.25700348271566154, 0.007670729563812428, 0.2823938170438369, 0.1772616467855006, 0.7845512493315773, 0.6775469497735805, 0.2971997149105261, 0.21991448783667333, 0.9046215063700191, 0.5961210284071585, 0.7880305372324325, 0.6646092274346668, 0.9524163561366443, 0.9950313551067117, 0.4541519595511535, 0.826299244838236, 0.9470343437085822, 0.45129774217398744, 0.2892938226493781, 0.373265209659962, 0.18702822928689944, 0.35035279706008127, 0.8161313184618036, 0.6293865349423359, 0.613281922192465, 0.28437987599524306, 0.29348129563230196, 0.560561415245059, 0.4445789168258464, 0.0639683281360135, 0.17517437926477308, 0.3281392915572434, 0.21134452276985882, 0.5226349763814668, 0.9944310689877096, 0.6259646022048501, 0.28646732154585386, 0.4463331607377067, 0.18627348004867816, 0.6987529213824148, 0.3135569976119156, 0.8977545797574068, 0.3144424792752062, 0.44765542125717406, 0.012704726216893891, 0.9751629064045263, 0.47482989342605364, 0.2647989909171925, 0.08166289984540964, 0.7889986816898897, 0.48578947387173954, 0.6117006639294448, 0.8280859544530704, 0.5782695787565925, 0.8743726502345615, 0.6713416592126289, 0.8754960581153056, 0.11248821090549632, 0.4383822906159548, 0.041051643424693696, 0.3582522161030611, 0.8283136551881002, 0.5421684976495478, 0.013868007230347645, 0.7265563610017748, 0.940044122608827, 0.20533417023816702, 0.2814104441796744, 0.30043020573772805, 0.6661972360082322, 0.2151902590814413, 0.4183991814184945, 0.82354790948119, 0.8223943958421412, 0.0839018734586946, 0.0457708359722816, 0.011304788692439227, 0.8400698193523809, 0.26092934957027425, 0.39788399058530466, 0.012367227930873304, 0.087831382930048, 0.08137013808418903, 0.16352392514241187, 0.2411368747630268, 0.5172014201690759, 0.7958867786572368, 0.9087465875969247, 0.8456160030774993, 0.38568503143913513, 0.9180263660516819, 0.17149232870000863, 0.8837247685836214, 0.43088435876735154, 0.04555674430236689, 0.9189022408353973, 0.6476218691545631, 0.5599785002767735, 0.5296169837191396, 0.2762625302767707, 0.9062942172601551, 0.535837642953017, 0.9672377454188833, 0.4039950153162182, 0.03569749509341158, 0.6045536515064334, 0.30850146797198785, 0.2860872733262173, 0.2538891383177725, 0.8059825660067657, 0.7041341879428709, 0.9206533859821567, 0.5979719784373358, 0.3691621387780514, 0.6859745156785383, 0.24248288238275761, 0.9703399267506271, 0.7714721996003332, 0.832892376153695, 0.9126921672165542, 0.7582401501439255, 0.6611961653593041, 0.7443244017332667, 0.9226654188517579, 0.9806916436832467, 0.9895860262032548, 0.7885725723839624, 0.24231000714395412, 0.07917239652020924, 0.4889429147516735, 0.43666548164522523, 0.15108975309475958, 0.7109404854935721, 0.4235555501702283, 0.7584051171069788, 0.2911442093718246, 0.3117134305022865, 0.30746317198625406, 0.014736339769117368, 0.3298203108531589], "x": [0.33480833703063184, 0.07356700307069886, 0.6638300993431006, 0.42956309813720406, 0.33385098707432814, 0.007781060007075902, 0.5594967046878538, 0.477117836419394, 0.7419532038355028, 0.9164014034521247, 0.7609558989396298, 0.8666760147994897, 0.5159710935237475, 0.9961973657177121, 0.10978914767510883, 0.15113165951435936, 0.5211965780785505, 0.42366447272061136, 0.6503932332264069, 0.13886767046331217, 0.03884494065926869, 0.0170575633941652, 0.45035403052287326, 0.9167237279977348, 0.074377021713122, 0.37948179156049855, 0.9836314108651296, 0.8297530661540242, 0.12765663589314624, 0.45420782839629636, 0.013291462001548293, 0.0398907594256811, 0.8462226521952321, 0.9192394105783783, 0.7745519558936867, 0.9532346891095833, 0.0261349207884245, 0.3789586207021832, 0.6049608015172696, 0.7105751952815458, 0.9582061526773374, 0.04044248353335134, 0.4556387925790424, 0.8288938775831777, 0.10873136174151454, 0.36703260910911517, 0.026900758984589546, 0.0327040902126583, 0.40411046296349784, 0.280964018542889, 0.12809980486255035, 0.1431179957493186, 0.652132505371699, 0.9725290393786227, 0.6404106758100179, 0.18523859816334953, 0.5811006578452443, 0.7749560423924482, 0.69887685959983, 0.054310345627320844, 0.2392336828652083, 0.8456899692467182, 0.5711840302123238, 0.5074145070615087, 0.9293416199011693, 0.4583375199688724, 0.09792068576482349, 0.12219017128434617, 0.24686320298769093, 0.5545346321355736, 0.2395916490129586, 0.7227773233033302, 0.5802416948078707, 0.21426534983034218, 0.522370163670758, 0.3537001320032045, 0.7034809224512468, 0.512076240412175, 0.5595528175314448, 0.6762428773435921, 0.196282741251407, 0.09018085108520946, 0.5512429391741597, 0.429500539713244, 0.32157993255779926, 0.18981503070491312, 0.7081551336416061, 0.05751651767858057, 0.976246595747826, 0.7156589530657576, 0.5843754467238378, 0.5257306924304577, 0.08740709557904858, 0.32462601042728656, 0.8663189671190445, 0.1624525291443839, 0.45290569370015743, 0.10202602940780581, 0.9344659835743044, 0.4569456586869167, 0.3478949298232171, 0.5900938510071131, 0.22575522022721117, 0.08789186661050541, 0.33039864073690195, 0.6618682759250268, 0.7578200306970624, 0.4321514031597904, 0.3271250971514116, 0.7651595250024648, 0.38242916893705325, 0.8267267137976542, 0.4989122464639931, 0.24008374966857648, 0.24319880283061013, 0.8718538336195605, 0.9029136900624829, 0.28857588634554787, 0.04119479119378888, 0.8035630179405049, 0.25493268103089783, 0.929047499858478, 0.06271022991024278, 0.2037123998500353, 0.469355763464963, 0.15540832810982252, 0.31243906689210776, 0.9770335753201635, 0.16762748833575603, 0.03894328032778793, 0.6577162199290599, 0.45307955367794484, 0.09509288478209665, 0.033933062803114034, 0.5069609855361464, 0.6335656941160009, 0.7394613319514303, 0.2388147055414337, 0.7917527826103609, 0.4074401825914493, 0.8112424437218709, 0.0025432709992393443, 0.43443664492763023, 0.48592948152681836, 0.8721801752307206, 0.33194779102876526, 0.783163592300599, 0.10192846750029672, 0.6180295716464328, 0.326909604703121, 0.3472761129297597, 0.9478440433463501, 0.4508868905576531, 0.9759264219515765, 0.19226000279915545, 0.5879412167857926, 0.12247852836860063, 0.6541058817625588, 0.23316897999648023, 0.2690472087504008, 0.5494555959609121, 0.8596679257474004, 0.04434433078416722, 0.3617567649497092, 0.8103280387317351, 0.8689608527027868, 0.7112759146329619, 0.00016090187797412892, 0.24567613341799144, 0.9091853994789683, 0.025582017950735003, 0.10447233553836832, 0.4845153219989191, 0.6493811010087589, 0.4717779151766345, 0.10624969401934248, 0.2024696629696695, 0.759370954821048, 0.07351614652553684, 0.27310758973120886, 0.17633277449930418, 0.5446288204247817, 0.10295406937812901, 0.7810769474582724, 0.12424724293727585, 0.5067519225548208, 0.19000317070162032, 0.5686926002226542, 0.9365037854337267, 0.9537779918121009, 0.2790721040429005, 0.5149496089600997, 0.250484318877935, 0.28136423372941377, 0.8156497565437163, 0.12476924604872319, 0.9507709176799126, 0.28561014847684074, 0.9798025190051382, 0.48065956881040606, 0.3835193970442189, 0.03927538525806107, 0.7543372986430062, 0.6602060018375409, 0.014975082607659451, 0.4959552795610578, 0.44802088109482563, 0.37452604348805174, 0.32735893793337234, 0.8527575171934749, 0.7824543923639035, 0.8283485396674882, 0.9081027464979932, 0.9791424568076248, 0.3524232017397265, 0.3090260629347824, 0.5039547421238934, 0.8412721194755547, 0.8144803451712669, 0.5531296796809176, 0.1946204355204768, 0.3253278575004106, 0.49327395338584423, 0.9803098819424747, 0.8581561797773058, 0.9222239576543786, 0.4407468400991258, 0.7566901338916006, 0.6606139294850091, 0.11650016573968502, 0.4459645270698642, 0.5410444154323173, 0.8515637913669606, 0.2390975940872052, 0.22363421182612297, 0.8783975890326996, 0.019509467787847012, 0.319436918474709, 0.2559091071385917, 0.6958953076006208, 0.010487078750462842, 0.4990440045628326, 0.5713796286764529, 0.9714663127160558, 0.5436717856854272, 0.7998842029714867, 0.6763368321629997, 0.09102156065976452, 0.7216467116392837, 0.8195665086014253, 0.5233823593932871, 0.43616722930717466, 0.36277927050753234, 0.5708281708435035, 0.7360892078157228, 0.32088118806921406, 0.7179007873852973, 0.6456929165262849, 0.7251015258689016, 0.15659075420806778, 0.3963993386250537, 0.034212459585139965, 0.8807933383264226, 0.9988759253681929, 0.5890350974007629, 0.5998124566509011, 0.5694392714653459, 0.7511739443393631, 0.8902549431191319, 0.2754106238018815, 0.112676980275762, 0.18104539902131933, 0.6289007765180985, 0.18942505228524686, 0.1117816265680801, 0.06031214052985534, 0.004911219999106375, 0.25741235099487825, 0.8336623613761664, 0.5952096273363111, 0.163652052630613, 0.6794282892683096, 0.3195337195660063, 0.8881058291479853, 0.750849112480502, 0.010971102763713159, 0.32700906320843504, 0.0869441992568285, 0.4265555011161959, 0.5450157285930157, 0.009221867810088602, 0.9046665847535921, 0.45463569543989013, 0.8259244053830257, 0.546157521351568, 0.5950035046063147, 0.4869257789138628, 0.5569492192403707, 0.907342044597893, 0.7777698330322168, 0.7431962409818145, 0.21382027297893702, 0.34600929945994063, 0.4855518236681625, 0.5176706195407106, 0.852490417188842, 0.8224133283382763, 0.4051427832866601, 0.6874117400370398, 0.7687773979827752, 0.28016138493147213, 0.025958179577002083, 0.43703699718722255, 0.5558693664658164, 0.8396382981437296, 0.2809975353647922, 0.6768220141518203, 0.04530784407553168, 0.25882992200467536, 0.46759743575685, 0.10473468104651995, 0.4281655573962142, 0.40848036331840687, 0.751874168176665, 0.8359752483556013, 0.9782274237650902, 0.8966070867221645, 0.7430835137339504, 0.9499983476258135, 0.8483626220709974, 0.30969263124199553, 0.41639306207642923, 0.2837356370966484, 0.15178125162973455, 0.8710862164987045, 0.1839257353613516, 0.976023735827305, 0.2540472122934343, 0.9530768246431971, 0.5099759308692492, 0.33157522636046, 0.5035252322264789, 0.07333454600581102, 0.36805937875416794, 0.9721665282731106, 0.6279491281170835, 0.23418759122939847, 0.5580773707706326, 0.39708606648877476, 0.39052993658705815, 0.042976790218217875, 0.4966774667301549, 0.6117919281066152, 0.27519789815671836, 0.5611160199082924, 0.174773520157669, 0.048180884934608814, 0.3491540590983181, 0.2519992087497963, 0.9109722230921485, 0.8803495413989101, 0.6666409630656157, 0.48563107803687144, 0.9393849370477024, 0.6022326853641051, 0.5697008774717592, 0.47954326681644766, 0.33530878726821856, 0.42703611767946237, 0.24941975143649342, 0.7166819421293155, 0.7423687536473097, 0.7524326404293022, 0.9100865035853394, 0.09078602569693428, 0.9862776000621686, 0.8615851156008906, 0.48270210398383706, 0.9611411265602985, 0.6854707541101773, 0.6991676911137521, 0.13688160659123805, 0.6161134304557242, 0.044190520788294996, 0.12231782765631549, 0.836165877974425, 0.25615836476893916, 0.03439184514993021, 0.8145997602471989, 0.6332503508258654, 0.25102061417536814, 0.55781922212228, 0.6485597483577259, 0.023606053469040433, 0.44301381170723475, 0.08070510982746171, 0.034409120417048245, 0.7423932229020908, 0.5884986859353616, 0.8081041765764906, 0.5019371731181234, 0.4041122713422596, 0.26983004214446005, 0.4976788798870003, 0.9346505790076313, 0.46497773295696276, 0.4275416846428777, 0.9214533799902133, 0.9232395194425047, 0.14065025203248127, 0.7019846838433601, 0.3817066758466907, 0.23149873799425036, 0.5030739306302756, 0.5229763842564459, 0.5191510150860639, 0.03758330405850374, 0.6408506638376579, 0.5585918400935784, 0.2772591956666497, 0.07158564435995729, 0.10358976178002977, 0.5462170915448451, 0.13560617260662544, 0.8272059892756769, 0.262038604132926, 0.9946250880168256, 0.3717415239324884, 0.5338855942813775, 0.704912899382012, 0.1951514401671165, 0.7592544947912996, 0.7275060518562759, 0.8189949719089358, 0.7846667667615617, 0.1341020930412412, 0.7905590512171202, 0.13947440243423825, 0.3690081302625856, 0.5351547492702188, 0.03277077835606823, 0.5229642361523859, 0.21510722746810718, 0.718413238735626, 0.10883409487705786, 0.3427807601030243, 0.579980111333536, 0.5632185812147157, 0.2444561141905507, 0.31477559916481057, 0.9929241815677268, 0.32103185964093595, 0.3679468736570246, 0.37280829630154577, 0.6459927380591499, 0.6284591801047912, 0.4093937931782552, 0.9210748226781097, 0.15792941951597794, 0.6533819701855701, 0.5264080069226268, 0.06649810388707278, 0.7493124949161178, 0.10321074514388828, 0.1135259454264902, 0.3297148730065096, 0.42982249325401645, 0.4233270636079135, 0.9830369487835556, 0.6839900586434291, 0.04606364656070161, 0.8119997006733001, 0.4821551653506442, 0.22426331180117876, 0.6893502674102022, 0.774914002751994, 0.44865220578075893, 0.08335785028996645, 0.5735728686829689, 0.3226090894925061, 0.9388147493041638, 0.29714568351535053, 0.4273134298967515, 0.405897118904741, 0.209943595211186, 0.7596440319343958, 0.9620116226750592, 0.3201634628760517, 0.5046133085147136, 0.8030031063741514, 0.4934029627881502, 0.6800933770587653, 0.7620035247189387, 0.19181405085052972, 0.9460038468638802, 0.9766574607266114, 0.3708829310784334, 0.5850115213923084, 0.16885206754023774, 0.5864046665255559]}, "id": "0334db92-f776-4135-b34d-ae5ec67d13ab"}, "type": "ColumnDataSource", "id": "0334db92-f776-4135-b34d-ae5ec67d13ab"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "c8a322eb-2cac-4df5-a377-8e62a8c9779a"}, "tags": [], "doc": null, "renderers": [], "names": [], "id": "73aeeed9-5a00-46ff-a5ac-f7cda1ee9472"}, "type": "LassoSelectTool", "id": "73aeeed9-5a00-46ff-a5ac-f7cda1ee9472"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "c8a322eb-2cac-4df5-a377-8e62a8c9779a"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "c3f48cd8-05fa-4b42-a7b7-3d613e957d53"}, "ticker": {"type": "BasicTicker", "id": "23cb1aa1-519a-4a44-a584-289905d67944"}, "id": "11471a06-5ed4-4898-90d2-8929f16acafd"}, "type": "LinearAxis", "id": "11471a06-5ed4-4898-90d2-8929f16acafd"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "c8a322eb-2cac-4df5-a377-8e62a8c9779a"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "145bbb3c-fda2-47b9-bba7-5cbd2bde9bae"}, "ticker": {"type": "BasicTicker", "id": "a76b536c-480c-48dc-a1ab-466bd191a32d"}, "id": "0366f30d-7a08-485c-8012-df51321a816c"}, "type": "LinearAxis", "id": "0366f30d-7a08-485c-8012-df51321a816c"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 5}, "line_alpha": {"value": 0.1}, "doc": null, "tags": [], "y": {"field": "ym"}, "x": {"field": "x"}, "id": "d5ee4ed1-8946-49b8-96ad-31a51b935161"}, "type": "Line", "id": "d5ee4ed1-8946-49b8-96ad-31a51b935161"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "a76b536c-480c-48dc-a1ab-466bd191a32d", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "a76b536c-480c-48dc-a1ab-466bd191a32d"}, {"attributes": {"line_color": {"value": "orange"}, "line_width": {"value": 5}, "line_alpha": {"value": 0.6}, "doc": null, "tags": [], "y": {"field": "ym"}, "x": {"field": "x"}, "id": "61500a61-58ac-41ca-ae48-0445465f05cc"}, "type": "Line", "id": "61500a61-58ac-41ca-ae48-0445465f05cc"}, {"attributes": {"doc": null, "id": "145bbb3c-fda2-47b9-bba7-5cbd2bde9bae", "tags": []}, "type": "BasicTickFormatter", "id": "145bbb3c-fda2-47b9-bba7-5cbd2bde9bae"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "2e1ea793-d312-45a2-8adb-4fdc916bfafe", "size": {"units": "screen", "value": 8}}, "type": "Circle", "id": "2e1ea793-d312-45a2-8adb-4fdc916bfafe"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "a03a0bbe-2657-4431-8bf3-412d9ab1b6b9"}, "type": "DataRange1d", "id": "a03a0bbe-2657-4431-8bf3-412d9ab1b6b9"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "0e072593-fc58-42f8-9f14-d1db2cc92e77"}, "type": "ToolEvents", "id": "0e072593-fc58-42f8-9f14-d1db2cc92e77"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "23cb1aa1-519a-4a44-a584-289905d67944", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "23cb1aa1-519a-4a44-a584-289905d67944"}, {"attributes": {"nonselection_glyph": {"type": "Line", "id": "d5ee4ed1-8946-49b8-96ad-31a51b935161"}, "data_source": {"type": "ColumnDataSource", "id": "a1e7b4a8-70a7-4ccc-aa07-359f570b344f"}, "tags": [], "doc": null, "selection_glyph": null, "id": "60dcaf9f-4ad0-468a-9822-c3e8d618d1c7", "glyph": {"type": "Line", "id": "61500a61-58ac-41ca-ae48-0445465f05cc"}}, "type": "GlyphRenderer", "id": "60dcaf9f-4ad0-468a-9822-c3e8d618d1c7"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("e55bc61d-211e-479e-8d96-7737449298b1", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("e55bc61d-211e-479e-8d96-7737449298b1", all_models);
    });
  }

}(this));