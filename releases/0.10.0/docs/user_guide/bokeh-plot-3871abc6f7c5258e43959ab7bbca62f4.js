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

  var elt = document.getElementById("6a17f47b-272f-4236-a862-09cefa2b2c6b");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '6a17f47b-272f-4236-a862-09cefa2b2c6b' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 1.0}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "68abf5a6-c6e8-4423-95df-b2cd53b7b99a"}, "type": "Circle", "id": "68abf5a6-c6e8-4423-95df-b2cd53b7b99a"}, {"attributes": {"line_color": {"value": "orange"}, "line_width": {"value": 2}, "line_alpha": {"value": 1.0}, "doc": null, "tags": [], "line_dash": [4, 4], "y": {"field": "y"}, "x": {"field": "x"}, "id": "c2f14399-fb90-4d68-8f7e-556049fe0888"}, "type": "Line", "id": "c2f14399-fb90-4d68-8f7e-556049fe0888"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "line_alpha": {"value": 0.1}, "doc": null, "tags": [], "line_dash": [4, 4], "y": {"field": "y"}, "x": {"field": "x"}, "id": "5ed3d531-f4ec-4393-948c-e55a28b2e0ee"}, "type": "Line", "id": "5ed3d531-f4ec-4393-948c-e55a28b2e0ee"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "a312ffd0-735c-476c-95bd-4e2cdcb82a74"}, "type": "ToolEvents", "id": "a312ffd0-735c-476c-95bd-4e2cdcb82a74"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "9b538ea1-d579-4246-ab2e-9f7bd36ef34d"}, "type": "Square", "id": "9b538ea1-d579-4246-ab2e-9f7bd36ef34d"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "1ead76fc-c4eb-44fc-9ec6-d10549d4a2d6"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "e79a1b01-75e8-4d6c-b94a-da8491d329d0"}, "type": "BoxZoomTool", "id": "e79a1b01-75e8-4d6c-b94a-da8491d329d0"}, {"attributes": {"line_color": {"value": "green"}, "line_alpha": {"value": 1.0}, "tags": [], "doc": null, "y": {"field": "y"}, "x": {"field": "x"}, "id": "39a94bac-fc35-48c7-a26d-5032f5b2e2c7"}, "type": "Line", "id": "39a94bac-fc35-48c7-a26d-5032f5b2e2c7"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "1ead76fc-c4eb-44fc-9ec6-d10549d4a2d6"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "1211ae9b-5acc-46d6-b888-e53427b5b4fb"}, "ticker": {"type": "BasicTicker", "id": "98bcae7d-21e1-473b-a053-ccba331908df"}, "id": "1037aef3-c412-4c61-980e-55e5cf81570f"}, "type": "LinearAxis", "id": "1037aef3-c412-4c61-980e-55e5cf81570f"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [0.0, 0.12659245357374926, 0.2511479871810792, 0.3716624556603276, 0.4861967361004687, 0.5929079290546404, 0.690079011482112, 0.7761464642917568, 0.8497254299495144, 0.9096319953545183, 0.9549022414440739, 0.984807753012208, 0.998867339183008, 0.9968547759519424, 0.9788024462147787, 0.9450008187146685, 0.8959937742913359, 0.8325698546347714, 0.7557495743542583, 0.6667690005162917, 0.5670598638627709, 0.4582265217274105, 0.3420201433256689, 0.2203105327865408, 0.09505604330418244, -0.03172793349806786, -0.15800139597335008, -0.28173255684142984, -0.4009305354066138, -0.5136773915734064, -0.6181589862206053, -0.7126941713788629, -0.7957618405308321, -0.8660254037844388, -0.9223542941045814, -0.9638421585599422, -0.9898214418809327, -0.9998741276738751, -0.9938384644612541, -0.9718115683235417, -0.9341478602651068, -0.881453363447582, -0.8145759520503358, -0.7345917086575332, -0.6427876096865396, -0.5406408174555974, -0.4297949120891719, -0.31203344569848707, -0.18925124436040974, -0.06342391965656452, 0.06342391965656492, 0.18925124436041013, 0.31203344569848745, 0.4297949120891715, 0.5406408174555978, 0.6427876096865391, 0.7345917086575334, 0.8145759520503356, 0.8814533634475821, 0.9341478602651067, 0.9718115683235418, 0.9938384644612541, 0.9998741276738751, 0.9898214418809328, 0.963842158559942, 0.9223542941045816, 0.8660254037844383, 0.7957618405308319, 0.7126941713788629, 0.6181589862206056, 0.5136773915734058, 0.40093053540661344, 0.2817325568414299, 0.15800139597335056, 0.03172793349806701, -0.09505604330418282, -0.22031053278654034, -0.342020143325668, -0.45822652172741085, -0.5670598638627707, -0.6667690005162913, -0.7557495743542588, -0.8325698546347716, -0.8959937742913359, -0.9450008187146683, -0.9788024462147789, -0.9968547759519424, -0.998867339183008, -0.9848077530122081, -0.9549022414440737, -0.9096319953545183, -0.8497254299495145, -0.7761464642917573, -0.6900790114821116, -0.5929079290546404, -0.48619673610046904, -0.3716624556603267, -0.2511479871810788, -0.1265924535737493, -4.898587196589413e-16], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "id": "e7ebaae4-dc6e-4ca2-9dff-a231d1f86b93"}, "type": "ColumnDataSource", "id": "e7ebaae4-dc6e-4ca2-9dff-a231d1f86b93"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "61726546-2dea-4b3a-a30a-bdbb64ad1cb4"}, "type": "DataRange1d", "id": "61726546-2dea-4b3a-a30a-bdbb64ad1cb4"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "1ead76fc-c4eb-44fc-9ec6-d10549d4a2d6"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "98bcae7d-21e1-473b-a053-ccba331908df"}, "id": "855cfc9b-a567-4490-b12c-3ff71bec83e7"}, "type": "Grid", "id": "855cfc9b-a567-4490-b12c-3ff71bec83e7"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "a8c60596-e860-483a-abb5-f5b17d35f344"}, "type": "DataRange1d", "id": "a8c60596-e860-483a-abb5-f5b17d35f344"}, {"subtype": "Figure", "type": "Plot", "id": "1ead76fc-c4eb-44fc-9ec6-d10549d4a2d6", "attributes": {"x_range": {"type": "DataRange1d", "id": "61726546-2dea-4b3a-a30a-bdbb64ad1cb4"}, "right": [], "tags": [], "y_range": {"type": "DataRange1d", "id": "a8c60596-e860-483a-abb5-f5b17d35f344"}, "renderers": [{"type": "LinearAxis", "id": "1037aef3-c412-4c61-980e-55e5cf81570f"}, {"type": "Grid", "id": "855cfc9b-a567-4490-b12c-3ff71bec83e7"}, {"type": "LinearAxis", "id": "a8960be0-a654-4359-aeca-f3256c66cbd9"}, {"type": "Grid", "id": "955616f0-b925-4cc0-b9b0-2c3923277b2c"}, {"type": "Legend", "id": "cf166927-8a99-4d74-afa2-3f65a8e6acbb"}, {"type": "GlyphRenderer", "id": "8f2b04ee-d0f2-4b28-ba2a-3a9b4b437db3"}, {"type": "GlyphRenderer", "id": "eec76a01-4a7d-42c9-abe9-14c5d90c671f"}, {"type": "GlyphRenderer", "id": "6dfeb25d-b450-4cfe-84b7-5a29d0fddc0f"}, {"type": "GlyphRenderer", "id": "c545d2d1-0a52-40cb-9253-e9089436b205"}, {"type": "GlyphRenderer", "id": "7649c926-df27-4ec9-acc5-97989d959dfc"}], "extra_y_ranges": {}, "extra_x_ranges": {}, "tool_events": {"type": "ToolEvents", "id": "a312ffd0-735c-476c-95bd-4e2cdcb82a74"}, "above": [], "doc": null, "id": "1ead76fc-c4eb-44fc-9ec6-d10549d4a2d6", "tools": [{"type": "PanTool", "id": "ff43affd-c479-4be9-9e9e-17723b5c742d"}, {"type": "WheelZoomTool", "id": "bff7e5b1-83a3-4492-a5a1-09f3adff49c7"}, {"type": "BoxZoomTool", "id": "e79a1b01-75e8-4d6c-b94a-da8491d329d0"}, {"type": "PreviewSaveTool", "id": "13cab79e-4b09-4384-b39d-9e0be7c741a7"}, {"type": "ResizeTool", "id": "20316524-23dd-4923-89af-cd5410d3d66a"}, {"type": "ResetTool", "id": "11129b3b-1d3c-4f5e-88d4-4c6d82838994"}, {"type": "HelpTool", "id": "b95382ec-e98a-4ba7-a0a1-da64e6d8e1a4"}], "below": [{"type": "LinearAxis", "id": "1037aef3-c412-4c61-980e-55e5cf81570f"}], "left": [{"type": "LinearAxis", "id": "a8960be0-a654-4359-aeca-f3256c66cbd9"}]}}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "1ead76fc-c4eb-44fc-9ec6-d10549d4a2d6"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "bff7e5b1-83a3-4492-a5a1-09f3adff49c7"}, "type": "WheelZoomTool", "id": "bff7e5b1-83a3-4492-a5a1-09f3adff49c7"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "98bcae7d-21e1-473b-a053-ccba331908df", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "98bcae7d-21e1-473b-a053-ccba331908df"}, {"attributes": {"line_color": {"value": "green"}, "line_alpha": {"value": 1.0}, "fill_color": null, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "fe2be78e-7db9-4c59-9d68-be5f4fb3dacc"}, "type": "Square", "id": "fe2be78e-7db9-4c59-9d68-be5f4fb3dacc"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [0.0, 0.25318490714749853, 0.5022959743621584, 0.7433249113206551, 0.9723934722009374, 1.1858158581092808, 1.380158022964224, 1.5522929285835136, 1.6994508598990288, 1.8192639907090367, 1.9098044828881477, 1.969615506024416, 1.997734678366016, 1.9937095519038848, 1.9576048924295575, 1.890001637429337, 1.7919875485826717, 1.6651397092695428, 1.5114991487085165, 1.3335380010325835, 1.1341197277255417, 0.916453043454821, 0.6840402866513378, 0.4406210655730816, 0.19011208660836487, -0.06345586699613572, -0.31600279194670017, -0.5634651136828597, -0.8018610708132275, -1.0273547831468128, -1.2363179724412106, -1.4253883427577259, -1.5915236810616642, -1.7320508075688776, -1.8447085882091627, -1.9276843171198843, -1.9796428837618654, -1.9997482553477501, -1.9876769289225082, -1.9436231366470833, -1.8682957205302135, -1.762906726895164, -1.6291519041006717, -1.4691834173150664, -1.2855752193730792, -1.0812816349111949, -0.8595898241783438, -0.6240668913969741, -0.3785024887208195, -0.12684783931312904, 0.12684783931312985, 0.37850248872082026, 0.6240668913969749, 0.859589824178343, 1.0812816349111956, 1.2855752193730783, 1.4691834173150669, 1.6291519041006712, 1.7629067268951641, 1.8682957205302133, 1.9436231366470835, 1.9876769289225082, 1.9997482553477501, 1.9796428837618656, 1.927684317119884, 1.8447085882091632, 1.7320508075688765, 1.5915236810616638, 1.4253883427577259, 1.2363179724412112, 1.0273547831468115, 0.8018610708132269, 0.5634651136828598, 0.3160027919467011, 0.06345586699613402, -0.19011208660836565, -0.4406210655730807, -0.684040286651336, -0.9164530434548217, -1.1341197277255415, -1.3335380010325826, -1.5114991487085176, -1.6651397092695432, -1.7919875485826717, -1.8900016374293367, -1.9576048924295577, -1.9937095519038848, -1.997734678366016, -1.9696155060244163, -1.9098044828881473, -1.8192639907090367, -1.699450859899029, -1.5522929285835145, -1.3801580229642232, -1.1858158581092808, -0.9723934722009381, -0.7433249113206534, -0.5022959743621576, -0.2531849071474986, -9.797174393178826e-16], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "id": "ab5169c3-b1a4-431a-9e1f-2efd6f1dc745"}, "type": "ColumnDataSource", "id": "ab5169c3-b1a4-431a-9e1f-2efd6f1dc745"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "tags": [], "doc": null, "y": {"field": "y"}, "x": {"field": "x"}, "id": "8fcf1b2c-6250-49c1-9622-8e56c73fcf55"}, "type": "Line", "id": "8fcf1b2c-6250-49c1-9622-8e56c73fcf55"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "1ead76fc-c4eb-44fc-9ec6-d10549d4a2d6"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "befb8a8f-3729-45f4-af40-34e9fd904c20"}, "id": "955616f0-b925-4cc0-b9b0-2c3923277b2c"}, "type": "Grid", "id": "955616f0-b925-4cc0-b9b0-2c3923277b2c"}, {"attributes": {"doc": null, "id": "e5b8b13a-f4af-4d5a-af94-f7723888af67", "tags": []}, "type": "BasicTickFormatter", "id": "e5b8b13a-f4af-4d5a-af94-f7723888af67"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "1ead76fc-c4eb-44fc-9ec6-d10549d4a2d6"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "ff43affd-c479-4be9-9e9e-17723b5c742d"}, "type": "PanTool", "id": "ff43affd-c479-4be9-9e9e-17723b5c742d"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "1ead76fc-c4eb-44fc-9ec6-d10549d4a2d6"}, "tags": [], "doc": null, "id": "11129b3b-1d3c-4f5e-88d4-4c6d82838994"}, "type": "ResetTool", "id": "11129b3b-1d3c-4f5e-88d4-4c6d82838994"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "1ead76fc-c4eb-44fc-9ec6-d10549d4a2d6"}, "tags": [], "doc": null, "id": "13cab79e-4b09-4384-b39d-9e0be7c741a7"}, "type": "PreviewSaveTool", "id": "13cab79e-4b09-4384-b39d-9e0be7c741a7"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [0.0, 0.3797773607212478, 0.7534439615432377, 1.1149873669809827, 1.4585902083014062, 1.7787237871639212, 2.070237034446336, 2.3284393928752705, 2.549176289848543, 2.728895986063555, 2.8647067243322217, 2.954423259036624, 2.9966020175490238, 2.990564327855827, 2.936407338644336, 2.8350024561440055, 2.6879813228740077, 2.4977095639043143, 2.267248723062775, 2.000307001548875, 1.7011795915883126, 1.3746795651822317, 1.0260604299770066, 0.6609315983596225, 0.2851681299125473, -0.09518380049420358, -0.4740041879200503, -0.8451976705242895, -1.2027916062198414, -1.5410321747202191, -1.8544769586618157, -2.1380825141365887, -2.387285521592496, -2.5980762113533165, -2.767062882313744, -2.8915264756798265, -2.969464325642798, -2.999622383021625, -2.9815153933837624, -2.915434704970625, -2.8024435807953205, -2.644360090342746, -2.4437278561510074, -2.2037751259725997, -1.9283628290596186, -1.6219224523667923, -1.2893847362675157, -0.9361003370954613, -0.5677537330812292, -0.19027175896969356, 0.19027175896969478, 0.5677537330812303, 0.9361003370954624, 1.2893847362675144, 1.6219224523667934, 1.9283628290596173, 2.2037751259726, 2.443727856151007, 2.6443600903427464, 2.80244358079532, 2.9154347049706253, 2.9815153933837624, 2.999622383021625, 2.9694643256427984, 2.891526475679826, 2.767062882313745, 2.5980762113533147, 2.3872855215924957, 2.1380825141365887, 1.8544769586618168, 1.5410321747202174, 1.2027916062198403, 0.8451976705242896, 0.47400418792005167, 0.09518380049420103, -0.2851681299125485, -0.660931598359621, -1.026060429977004, -1.3746795651822326, -1.7011795915883123, -2.0003070015488738, -2.2672487230627763, -2.4977095639043148, -2.6879813228740077, -2.835002456144005, -2.9364073386443366, -2.990564327855827, -2.9966020175490238, -2.9544232590366244, -2.864706724332221, -2.728895986063555, -2.5491762898485435, -2.328439392875272, -2.070237034446335, -1.7787237871639212, -1.458590208301407, -1.11498736698098, -0.7534439615432363, -0.3797773607212479, -1.4695761589768238e-15], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "id": "a7b0cafd-5301-466d-a74c-b9672c02e8c7"}, "type": "ColumnDataSource", "id": "a7b0cafd-5301-466d-a74c-b9672c02e8c7"}, {"attributes": {"nonselection_glyph": {"type": "Line", "id": "5ed3d531-f4ec-4393-948c-e55a28b2e0ee"}, "data_source": {"type": "ColumnDataSource", "id": "ab5169c3-b1a4-431a-9e1f-2efd6f1dc745"}, "tags": [], "doc": null, "selection_glyph": null, "id": "6dfeb25d-b450-4cfe-84b7-5a29d0fddc0f", "glyph": {"type": "Line", "id": "c2f14399-fb90-4d68-8f7e-556049fe0888"}}, "type": "GlyphRenderer", "id": "6dfeb25d-b450-4cfe-84b7-5a29d0fddc0f"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "1ead76fc-c4eb-44fc-9ec6-d10549d4a2d6"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "e5b8b13a-f4af-4d5a-af94-f7723888af67"}, "ticker": {"type": "BasicTicker", "id": "befb8a8f-3729-45f4-af40-34e9fd904c20"}, "id": "a8960be0-a654-4359-aeca-f3256c66cbd9"}, "type": "LinearAxis", "id": "a8960be0-a654-4359-aeca-f3256c66cbd9"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "1ead76fc-c4eb-44fc-9ec6-d10549d4a2d6"}, "legends": [["sin(x)", [{"type": "GlyphRenderer", "id": "8f2b04ee-d0f2-4b28-ba2a-3a9b4b437db3"}, {"type": "GlyphRenderer", "id": "eec76a01-4a7d-42c9-abe9-14c5d90c671f"}]], ["2*sin(x)", [{"type": "GlyphRenderer", "id": "6dfeb25d-b450-4cfe-84b7-5a29d0fddc0f"}]], ["3*sin(x)", [{"type": "GlyphRenderer", "id": "c545d2d1-0a52-40cb-9253-e9089436b205"}, {"type": "GlyphRenderer", "id": "7649c926-df27-4ec9-acc5-97989d959dfc"}]]], "tags": [], "doc": null, "border_line_color": {"value": "navy"}, "border_line_width": {"value": 3}, "id": "cf166927-8a99-4d74-afa2-3f65a8e6acbb", "border_line_alpha": {"value": 0.5}}, "type": "Legend", "id": "cf166927-8a99-4d74-afa2-3f65a8e6acbb"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "1ead76fc-c4eb-44fc-9ec6-d10549d4a2d6"}, "tags": [], "doc": null, "id": "b95382ec-e98a-4ba7-a0a1-da64e6d8e1a4"}, "type": "HelpTool", "id": "b95382ec-e98a-4ba7-a0a1-da64e6d8e1a4"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 1.0}, "tags": [], "doc": null, "y": {"field": "y"}, "x": {"field": "x"}, "id": "4f4af06e-866a-4a97-964c-b0df2e3e20be"}, "type": "Line", "id": "4f4af06e-866a-4a97-964c-b0df2e3e20be"}, {"attributes": {"nonselection_glyph": {"type": "Line", "id": "5d71a2b3-d66a-442b-8fe7-72848a32e233"}, "data_source": {"type": "ColumnDataSource", "id": "a7b0cafd-5301-466d-a74c-b9672c02e8c7"}, "tags": [], "doc": null, "selection_glyph": null, "id": "7649c926-df27-4ec9-acc5-97989d959dfc", "glyph": {"type": "Line", "id": "39a94bac-fc35-48c7-a26d-5032f5b2e2c7"}}, "type": "GlyphRenderer", "id": "7649c926-df27-4ec9-acc5-97989d959dfc"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "8a4c3acf-a6b1-47ea-ac26-c21325c10a10"}, "type": "Circle", "id": "8a4c3acf-a6b1-47ea-ac26-c21325c10a10"}, {"attributes": {"nonselection_glyph": {"type": "Square", "id": "9b538ea1-d579-4246-ab2e-9f7bd36ef34d"}, "data_source": {"type": "ColumnDataSource", "id": "d93bee98-eb81-4282-812f-89e0d252e4b3"}, "tags": [], "doc": null, "selection_glyph": null, "id": "c545d2d1-0a52-40cb-9253-e9089436b205", "glyph": {"type": "Square", "id": "fe2be78e-7db9-4c59-9d68-be5f4fb3dacc"}}, "type": "GlyphRenderer", "id": "c545d2d1-0a52-40cb-9253-e9089436b205"}, {"attributes": {"doc": null, "id": "1211ae9b-5acc-46d6-b888-e53427b5b4fb", "tags": []}, "type": "BasicTickFormatter", "id": "1211ae9b-5acc-46d6-b888-e53427b5b4fb"}, {"attributes": {"nonselection_glyph": {"type": "Line", "id": "8fcf1b2c-6250-49c1-9622-8e56c73fcf55"}, "data_source": {"type": "ColumnDataSource", "id": "e293d0b3-907c-4bec-92ca-3f9fff82da2f"}, "tags": [], "doc": null, "selection_glyph": null, "id": "eec76a01-4a7d-42c9-abe9-14c5d90c671f", "glyph": {"type": "Line", "id": "4f4af06e-866a-4a97-964c-b0df2e3e20be"}}, "type": "GlyphRenderer", "id": "eec76a01-4a7d-42c9-abe9-14c5d90c671f"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [0.0, 0.3797773607212478, 0.7534439615432377, 1.1149873669809827, 1.4585902083014062, 1.7787237871639212, 2.070237034446336, 2.3284393928752705, 2.549176289848543, 2.728895986063555, 2.8647067243322217, 2.954423259036624, 2.9966020175490238, 2.990564327855827, 2.936407338644336, 2.8350024561440055, 2.6879813228740077, 2.4977095639043143, 2.267248723062775, 2.000307001548875, 1.7011795915883126, 1.3746795651822317, 1.0260604299770066, 0.6609315983596225, 0.2851681299125473, -0.09518380049420358, -0.4740041879200503, -0.8451976705242895, -1.2027916062198414, -1.5410321747202191, -1.8544769586618157, -2.1380825141365887, -2.387285521592496, -2.5980762113533165, -2.767062882313744, -2.8915264756798265, -2.969464325642798, -2.999622383021625, -2.9815153933837624, -2.915434704970625, -2.8024435807953205, -2.644360090342746, -2.4437278561510074, -2.2037751259725997, -1.9283628290596186, -1.6219224523667923, -1.2893847362675157, -0.9361003370954613, -0.5677537330812292, -0.19027175896969356, 0.19027175896969478, 0.5677537330812303, 0.9361003370954624, 1.2893847362675144, 1.6219224523667934, 1.9283628290596173, 2.2037751259726, 2.443727856151007, 2.6443600903427464, 2.80244358079532, 2.9154347049706253, 2.9815153933837624, 2.999622383021625, 2.9694643256427984, 2.891526475679826, 2.767062882313745, 2.5980762113533147, 2.3872855215924957, 2.1380825141365887, 1.8544769586618168, 1.5410321747202174, 1.2027916062198403, 0.8451976705242896, 0.47400418792005167, 0.09518380049420103, -0.2851681299125485, -0.660931598359621, -1.026060429977004, -1.3746795651822326, -1.7011795915883123, -2.0003070015488738, -2.2672487230627763, -2.4977095639043148, -2.6879813228740077, -2.835002456144005, -2.9364073386443366, -2.990564327855827, -2.9966020175490238, -2.9544232590366244, -2.864706724332221, -2.728895986063555, -2.5491762898485435, -2.328439392875272, -2.070237034446335, -1.7787237871639212, -1.458590208301407, -1.11498736698098, -0.7534439615432363, -0.3797773607212479, -1.4695761589768238e-15], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "id": "d93bee98-eb81-4282-812f-89e0d252e4b3"}, "type": "ColumnDataSource", "id": "d93bee98-eb81-4282-812f-89e0d252e4b3"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [0.0, 0.12659245357374926, 0.2511479871810792, 0.3716624556603276, 0.4861967361004687, 0.5929079290546404, 0.690079011482112, 0.7761464642917568, 0.8497254299495144, 0.9096319953545183, 0.9549022414440739, 0.984807753012208, 0.998867339183008, 0.9968547759519424, 0.9788024462147787, 0.9450008187146685, 0.8959937742913359, 0.8325698546347714, 0.7557495743542583, 0.6667690005162917, 0.5670598638627709, 0.4582265217274105, 0.3420201433256689, 0.2203105327865408, 0.09505604330418244, -0.03172793349806786, -0.15800139597335008, -0.28173255684142984, -0.4009305354066138, -0.5136773915734064, -0.6181589862206053, -0.7126941713788629, -0.7957618405308321, -0.8660254037844388, -0.9223542941045814, -0.9638421585599422, -0.9898214418809327, -0.9998741276738751, -0.9938384644612541, -0.9718115683235417, -0.9341478602651068, -0.881453363447582, -0.8145759520503358, -0.7345917086575332, -0.6427876096865396, -0.5406408174555974, -0.4297949120891719, -0.31203344569848707, -0.18925124436040974, -0.06342391965656452, 0.06342391965656492, 0.18925124436041013, 0.31203344569848745, 0.4297949120891715, 0.5406408174555978, 0.6427876096865391, 0.7345917086575334, 0.8145759520503356, 0.8814533634475821, 0.9341478602651067, 0.9718115683235418, 0.9938384644612541, 0.9998741276738751, 0.9898214418809328, 0.963842158559942, 0.9223542941045816, 0.8660254037844383, 0.7957618405308319, 0.7126941713788629, 0.6181589862206056, 0.5136773915734058, 0.40093053540661344, 0.2817325568414299, 0.15800139597335056, 0.03172793349806701, -0.09505604330418282, -0.22031053278654034, -0.342020143325668, -0.45822652172741085, -0.5670598638627707, -0.6667690005162913, -0.7557495743542588, -0.8325698546347716, -0.8959937742913359, -0.9450008187146683, -0.9788024462147789, -0.9968547759519424, -0.998867339183008, -0.9848077530122081, -0.9549022414440737, -0.9096319953545183, -0.8497254299495145, -0.7761464642917573, -0.6900790114821116, -0.5929079290546404, -0.48619673610046904, -0.3716624556603267, -0.2511479871810788, -0.1265924535737493, -4.898587196589413e-16], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "id": "e293d0b3-907c-4bec-92ca-3f9fff82da2f"}, "type": "ColumnDataSource", "id": "e293d0b3-907c-4bec-92ca-3f9fff82da2f"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "tags": [], "doc": null, "y": {"field": "y"}, "x": {"field": "x"}, "id": "5d71a2b3-d66a-442b-8fe7-72848a32e233"}, "type": "Line", "id": "5d71a2b3-d66a-442b-8fe7-72848a32e233"}, {"attributes": {"nonselection_glyph": {"type": "Circle", "id": "8a4c3acf-a6b1-47ea-ac26-c21325c10a10"}, "data_source": {"type": "ColumnDataSource", "id": "e7ebaae4-dc6e-4ca2-9dff-a231d1f86b93"}, "tags": [], "doc": null, "selection_glyph": null, "id": "8f2b04ee-d0f2-4b28-ba2a-3a9b4b437db3", "glyph": {"type": "Circle", "id": "68abf5a6-c6e8-4423-95df-b2cd53b7b99a"}}, "type": "GlyphRenderer", "id": "8f2b04ee-d0f2-4b28-ba2a-3a9b4b437db3"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "1ead76fc-c4eb-44fc-9ec6-d10549d4a2d6"}, "tags": [], "doc": null, "id": "20316524-23dd-4923-89af-cd5410d3d66a"}, "type": "ResizeTool", "id": "20316524-23dd-4923-89af-cd5410d3d66a"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "befb8a8f-3729-45f4-af40-34e9fd904c20", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "befb8a8f-3729-45f4-af40-34e9fd904c20"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("6a17f47b-272f-4236-a862-09cefa2b2c6b", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("6a17f47b-272f-4236-a862-09cefa2b2c6b", all_models);
    });
  }

}(this));