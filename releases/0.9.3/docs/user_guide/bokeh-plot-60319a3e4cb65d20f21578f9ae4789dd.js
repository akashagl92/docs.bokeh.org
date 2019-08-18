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
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.9.3.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.9.3.min.js"

  var elt = document.getElementById("068a3331-e383-4b06-b397-9f12369bc1f4");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '068a3331-e383-4b06-b397-9f12369bc1f4' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "Circle", "attributes": {"y": {"field": "y"}, "fill_alpha": {"value": 1.0}, "fill_color": {"value": "#1f77b4"}, "line_alpha": {"value": 1.0}, "line_color": {"value": "#1f77b4"}, "doc": null, "x": {"field": "x"}, "tags": [], "id": "39f1f440-b7d7-47c8-b7aa-b937b46e02db"}, "id": "39f1f440-b7d7-47c8-b7aa-b937b46e02db"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "30f3d4f5-0088-4343-9fcd-2c2a9545f99c", "tags": [], "geometries": []}, "id": "30f3d4f5-0088-4343-9fcd-2c2a9545f99c"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [0.0, 0.3797773607212478, 0.7534439615432377, 1.1149873669809827, 1.4585902083014062, 1.7787237871639212, 2.070237034446336, 2.3284393928752705, 2.549176289848543, 2.728895986063555, 2.8647067243322217, 2.954423259036624, 2.9966020175490238, 2.990564327855827, 2.936407338644336, 2.8350024561440055, 2.6879813228740077, 2.4977095639043143, 2.267248723062775, 2.000307001548875, 1.7011795915883126, 1.3746795651822317, 1.0260604299770066, 0.6609315983596225, 0.2851681299125473, -0.09518380049420358, -0.4740041879200503, -0.8451976705242895, -1.2027916062198414, -1.5410321747202191, -1.8544769586618157, -2.1380825141365887, -2.387285521592496, -2.5980762113533165, -2.767062882313744, -2.8915264756798265, -2.969464325642798, -2.999622383021625, -2.9815153933837624, -2.915434704970625, -2.8024435807953205, -2.644360090342746, -2.4437278561510074, -2.2037751259725997, -1.9283628290596186, -1.6219224523667923, -1.2893847362675157, -0.9361003370954613, -0.5677537330812292, -0.19027175896969356, 0.19027175896969478, 0.5677537330812303, 0.9361003370954624, 1.2893847362675144, 1.6219224523667934, 1.9283628290596173, 2.2037751259726, 2.443727856151007, 2.6443600903427464, 2.80244358079532, 2.9154347049706253, 2.9815153933837624, 2.999622383021625, 2.9694643256427984, 2.891526475679826, 2.767062882313745, 2.5980762113533147, 2.3872855215924957, 2.1380825141365887, 1.8544769586618168, 1.5410321747202174, 1.2027916062198403, 0.8451976705242896, 0.47400418792005167, 0.09518380049420103, -0.2851681299125485, -0.660931598359621, -1.026060429977004, -1.3746795651822326, -1.7011795915883123, -2.0003070015488738, -2.2672487230627763, -2.4977095639043148, -2.6879813228740077, -2.835002456144005, -2.9364073386443366, -2.990564327855827, -2.9966020175490238, -2.9544232590366244, -2.864706724332221, -2.728895986063555, -2.5491762898485435, -2.328439392875272, -2.070237034446335, -1.7787237871639212, -1.458590208301407, -1.11498736698098, -0.7534439615432363, -0.3797773607212479, -1.4695761589768238e-15], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "doc": null, "id": "87719d1e-18c0-4660-9f27-3673ebb000c5", "column_names": ["y", "x"]}, "id": "87719d1e-18c0-4660-9f27-3673ebb000c5"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "1c91dd53-23ab-47b2-827a-2e2a4dfc72b0"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "5e95d649-0a9c-4e01-918c-03859b7c8345", "subtype": "Figure"}, "dimension": 0, "id": "0af95d53-619d-4492-905c-f39617a2f26f"}, "id": "0af95d53-619d-4492-905c-f39617a2f26f"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "85597202-15bc-425c-8910-2f907a98978b", "tags": []}, "id": "85597202-15bc-425c-8910-2f907a98978b"}, {"type": "ResizeTool", "attributes": {"plot": {"type": "Plot", "id": "5e95d649-0a9c-4e01-918c-03859b7c8345", "subtype": "Figure"}, "id": "ad51d030-1faa-4df5-aa46-53a5a39fc79a", "tags": [], "doc": null}, "id": "ad51d030-1faa-4df5-aa46-53a5a39fc79a"}, {"type": "Plot", "attributes": {"right": [], "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "5cc42fbe-fcbb-4366-ba52-dc4b67860fee"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "30f3d4f5-0088-4343-9fcd-2c2a9545f99c"}, "renderers": [{"type": "LinearAxis", "id": "783d058c-6978-428c-a649-67295e961108"}, {"type": "Grid", "id": "0af95d53-619d-4492-905c-f39617a2f26f"}, {"type": "LinearAxis", "id": "305fc74f-dfe8-43d0-b8e2-4ba0676d39b3"}, {"type": "Grid", "id": "3e06a061-cb12-4652-8030-398a930175fb"}, {"type": "Legend", "id": "f85857a6-2b44-4304-88ad-db236a4c9c98"}, {"type": "GlyphRenderer", "id": "a3554a0d-1d37-49c3-adbe-863072a8aff7"}, {"type": "GlyphRenderer", "id": "49d8467c-f43e-4159-9aea-2f3d11279304"}, {"type": "GlyphRenderer", "id": "ea6119bc-1341-493f-9ed7-72d09e0ad2ac"}, {"type": "GlyphRenderer", "id": "dafaaaa6-14a5-4e64-a5d5-705004ad06fc"}, {"type": "GlyphRenderer", "id": "897425af-12f8-4c98-b0e0-e545804f038f"}], "below": [{"type": "LinearAxis", "id": "783d058c-6978-428c-a649-67295e961108"}], "left": [{"type": "LinearAxis", "id": "305fc74f-dfe8-43d0-b8e2-4ba0676d39b3"}], "above": [], "tags": [], "extra_y_ranges": {}, "tools": [{"type": "PanTool", "id": "d7b01a6d-1bcc-4946-b94c-21ae25f60d52"}, {"type": "WheelZoomTool", "id": "814c7185-14ff-45e1-95d6-9645f2fbfdba"}, {"type": "BoxZoomTool", "id": "205f8cfa-df27-410c-98c7-c66ebec929ba"}, {"type": "PreviewSaveTool", "id": "e232a6b5-b5ac-4f04-8f6c-c1040c7856f0"}, {"type": "ResizeTool", "id": "ad51d030-1faa-4df5-aa46-53a5a39fc79a"}, {"type": "ResetTool", "id": "67305c85-ca33-4aac-9469-128bad66ece0"}, {"type": "HelpTool", "id": "bf85553b-1f10-480c-a9b1-cffff6dbd5a9"}], "x_range": {"type": "DataRange1d", "id": "0ba0b8b7-3338-4bc0-8d14-4d9380544c37"}, "id": "5e95d649-0a9c-4e01-918c-03859b7c8345"}, "id": "5e95d649-0a9c-4e01-918c-03859b7c8345", "subtype": "Figure"}, {"type": "PreviewSaveTool", "attributes": {"plot": {"type": "Plot", "id": "5e95d649-0a9c-4e01-918c-03859b7c8345", "subtype": "Figure"}, "id": "e232a6b5-b5ac-4f04-8f6c-c1040c7856f0", "tags": [], "doc": null}, "id": "e232a6b5-b5ac-4f04-8f6c-c1040c7856f0"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [0.0, 0.25318490714749853, 0.5022959743621584, 0.7433249113206551, 0.9723934722009374, 1.1858158581092808, 1.380158022964224, 1.5522929285835136, 1.6994508598990288, 1.8192639907090367, 1.9098044828881477, 1.969615506024416, 1.997734678366016, 1.9937095519038848, 1.9576048924295575, 1.890001637429337, 1.7919875485826717, 1.6651397092695428, 1.5114991487085165, 1.3335380010325835, 1.1341197277255417, 0.916453043454821, 0.6840402866513378, 0.4406210655730816, 0.19011208660836487, -0.06345586699613572, -0.31600279194670017, -0.5634651136828597, -0.8018610708132275, -1.0273547831468128, -1.2363179724412106, -1.4253883427577259, -1.5915236810616642, -1.7320508075688776, -1.8447085882091627, -1.9276843171198843, -1.9796428837618654, -1.9997482553477501, -1.9876769289225082, -1.9436231366470833, -1.8682957205302135, -1.762906726895164, -1.6291519041006717, -1.4691834173150664, -1.2855752193730792, -1.0812816349111949, -0.8595898241783438, -0.6240668913969741, -0.3785024887208195, -0.12684783931312904, 0.12684783931312985, 0.37850248872082026, 0.6240668913969749, 0.859589824178343, 1.0812816349111956, 1.2855752193730783, 1.4691834173150669, 1.6291519041006712, 1.7629067268951641, 1.8682957205302133, 1.9436231366470835, 1.9876769289225082, 1.9997482553477501, 1.9796428837618656, 1.927684317119884, 1.8447085882091632, 1.7320508075688765, 1.5915236810616638, 1.4253883427577259, 1.2363179724412112, 1.0273547831468115, 0.8018610708132269, 0.5634651136828598, 0.3160027919467011, 0.06345586699613402, -0.19011208660836565, -0.4406210655730807, -0.684040286651336, -0.9164530434548217, -1.1341197277255415, -1.3335380010325826, -1.5114991487085176, -1.6651397092695432, -1.7919875485826717, -1.8900016374293367, -1.9576048924295577, -1.9937095519038848, -1.997734678366016, -1.9696155060244163, -1.9098044828881473, -1.8192639907090367, -1.699450859899029, -1.5522929285835145, -1.3801580229642232, -1.1858158581092808, -0.9723934722009381, -0.7433249113206534, -0.5022959743621576, -0.2531849071474986, -9.797174393178826e-16], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "doc": null, "id": "7e5877ce-1f2b-4018-a405-d798864f72bb", "column_names": ["y", "x"]}, "id": "7e5877ce-1f2b-4018-a405-d798864f72bb"}, {"type": "Line", "attributes": {"y": {"field": "y"}, "line_dash": [4, 4], "line_width": {"value": 2}, "line_color": {"value": "#1f77b4"}, "doc": null, "x": {"field": "x"}, "tags": [], "id": "67809310-a6cd-4662-9f09-c4cff8183ae5", "line_alpha": {"value": 0.1}}, "id": "67809310-a6cd-4662-9f09-c4cff8183ae5"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "1c91dd53-23ab-47b2-827a-2e2a4dfc72b0"}, "id": "1c91dd53-23ab-47b2-827a-2e2a4dfc72b0"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "db1dce6f-9713-48d8-8578-61cd9eac97a9"}, "tags": [], "glyph": {"type": "Line", "id": "d2d1a660-1209-40e9-8f82-57959b08f8d7"}, "doc": null, "nonselection_glyph": {"type": "Line", "id": "c69ba43d-5fba-4e4f-8487-cc359787b684"}, "selection_glyph": null, "id": "49d8467c-f43e-4159-9aea-2f3d11279304"}, "id": "49d8467c-f43e-4159-9aea-2f3d11279304"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [0.0, 0.3797773607212478, 0.7534439615432377, 1.1149873669809827, 1.4585902083014062, 1.7787237871639212, 2.070237034446336, 2.3284393928752705, 2.549176289848543, 2.728895986063555, 2.8647067243322217, 2.954423259036624, 2.9966020175490238, 2.990564327855827, 2.936407338644336, 2.8350024561440055, 2.6879813228740077, 2.4977095639043143, 2.267248723062775, 2.000307001548875, 1.7011795915883126, 1.3746795651822317, 1.0260604299770066, 0.6609315983596225, 0.2851681299125473, -0.09518380049420358, -0.4740041879200503, -0.8451976705242895, -1.2027916062198414, -1.5410321747202191, -1.8544769586618157, -2.1380825141365887, -2.387285521592496, -2.5980762113533165, -2.767062882313744, -2.8915264756798265, -2.969464325642798, -2.999622383021625, -2.9815153933837624, -2.915434704970625, -2.8024435807953205, -2.644360090342746, -2.4437278561510074, -2.2037751259725997, -1.9283628290596186, -1.6219224523667923, -1.2893847362675157, -0.9361003370954613, -0.5677537330812292, -0.19027175896969356, 0.19027175896969478, 0.5677537330812303, 0.9361003370954624, 1.2893847362675144, 1.6219224523667934, 1.9283628290596173, 2.2037751259726, 2.443727856151007, 2.6443600903427464, 2.80244358079532, 2.9154347049706253, 2.9815153933837624, 2.999622383021625, 2.9694643256427984, 2.891526475679826, 2.767062882313745, 2.5980762113533147, 2.3872855215924957, 2.1380825141365887, 1.8544769586618168, 1.5410321747202174, 1.2027916062198403, 0.8451976705242896, 0.47400418792005167, 0.09518380049420103, -0.2851681299125485, -0.660931598359621, -1.026060429977004, -1.3746795651822326, -1.7011795915883123, -2.0003070015488738, -2.2672487230627763, -2.4977095639043148, -2.6879813228740077, -2.835002456144005, -2.9364073386443366, -2.990564327855827, -2.9966020175490238, -2.9544232590366244, -2.864706724332221, -2.728895986063555, -2.5491762898485435, -2.328439392875272, -2.070237034446335, -1.7787237871639212, -1.458590208301407, -1.11498736698098, -0.7534439615432363, -0.3797773607212479, -1.4695761589768238e-15], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "doc": null, "id": "1af5dcb1-3995-4626-a9a7-33296ab788fc", "column_names": ["y", "x"]}, "id": "1af5dcb1-3995-4626-a9a7-33296ab788fc"}, {"type": "Line", "attributes": {"y": {"field": "y"}, "line_alpha": {"value": 1.0}, "tags": [], "doc": null, "line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "id": "d2d1a660-1209-40e9-8f82-57959b08f8d7"}, "id": "d2d1a660-1209-40e9-8f82-57959b08f8d7"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "0ba0b8b7-3338-4bc0-8d14-4d9380544c37", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "0ba0b8b7-3338-4bc0-8d14-4d9380544c37"}, {"type": "PanTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "5e95d649-0a9c-4e01-918c-03859b7c8345", "subtype": "Figure"}, "id": "d7b01a6d-1bcc-4946-b94c-21ae25f60d52"}, "id": "d7b01a6d-1bcc-4946-b94c-21ae25f60d52"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "87719d1e-18c0-4660-9f27-3673ebb000c5"}, "tags": [], "glyph": {"type": "Line", "id": "e44d3c5c-e28b-4249-b0c0-82c337273cb3"}, "doc": null, "nonselection_glyph": {"type": "Line", "id": "effdffaa-0011-4c79-8886-92089600b9f5"}, "selection_glyph": null, "id": "897425af-12f8-4c98-b0e0-e545804f038f"}, "id": "897425af-12f8-4c98-b0e0-e545804f038f"}, {"type": "Square", "attributes": {"y": {"field": "y"}, "fill_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "line_color": {"value": "#1f77b4"}, "doc": null, "x": {"field": "x"}, "tags": [], "id": "a9533ce6-3b5f-4a8b-95d0-25ed1bc82a8a"}, "id": "a9533ce6-3b5f-4a8b-95d0-25ed1bc82a8a"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "1af5dcb1-3995-4626-a9a7-33296ab788fc"}, "tags": [], "glyph": {"type": "Square", "id": "5ceb27fc-127e-4734-814a-54a545934619"}, "doc": null, "nonselection_glyph": {"type": "Square", "id": "a9533ce6-3b5f-4a8b-95d0-25ed1bc82a8a"}, "selection_glyph": null, "id": "dafaaaa6-14a5-4e64-a5d5-705004ad06fc"}, "id": "dafaaaa6-14a5-4e64-a5d5-705004ad06fc"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "c4f49a18-cec9-41a1-9e50-f99a3de46e12"}, "id": "c4f49a18-cec9-41a1-9e50-f99a3de46e12"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "c4f49a18-cec9-41a1-9e50-f99a3de46e12"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "85597202-15bc-425c-8910-2f907a98978b"}, "plot": {"type": "Plot", "id": "5e95d649-0a9c-4e01-918c-03859b7c8345", "subtype": "Figure"}, "id": "305fc74f-dfe8-43d0-b8e2-4ba0676d39b3"}, "id": "305fc74f-dfe8-43d0-b8e2-4ba0676d39b3"}, {"type": "Line", "attributes": {"y": {"field": "y"}, "line_alpha": {"value": 0.1}, "tags": [], "doc": null, "line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "id": "c69ba43d-5fba-4e4f-8487-cc359787b684"}, "id": "c69ba43d-5fba-4e4f-8487-cc359787b684"}, {"type": "Circle", "attributes": {"y": {"field": "y"}, "fill_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "line_color": {"value": "#1f77b4"}, "doc": null, "x": {"field": "x"}, "tags": [], "id": "e5c33b48-090d-4174-9e68-3c65d282beec"}, "id": "e5c33b48-090d-4174-9e68-3c65d282beec"}, {"type": "Line", "attributes": {"y": {"field": "y"}, "line_dash": [4, 4], "line_width": {"value": 2}, "line_color": {"value": "orange"}, "doc": null, "x": {"field": "x"}, "tags": [], "id": "95c8384b-f36b-4b22-8a98-e1ff3546a26b", "line_alpha": {"value": 1.0}}, "id": "95c8384b-f36b-4b22-8a98-e1ff3546a26b"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [0.0, 0.12659245357374926, 0.2511479871810792, 0.3716624556603276, 0.4861967361004687, 0.5929079290546404, 0.690079011482112, 0.7761464642917568, 0.8497254299495144, 0.9096319953545183, 0.9549022414440739, 0.984807753012208, 0.998867339183008, 0.9968547759519424, 0.9788024462147787, 0.9450008187146685, 0.8959937742913359, 0.8325698546347714, 0.7557495743542583, 0.6667690005162917, 0.5670598638627709, 0.4582265217274105, 0.3420201433256689, 0.2203105327865408, 0.09505604330418244, -0.03172793349806786, -0.15800139597335008, -0.28173255684142984, -0.4009305354066138, -0.5136773915734064, -0.6181589862206053, -0.7126941713788629, -0.7957618405308321, -0.8660254037844388, -0.9223542941045814, -0.9638421585599422, -0.9898214418809327, -0.9998741276738751, -0.9938384644612541, -0.9718115683235417, -0.9341478602651068, -0.881453363447582, -0.8145759520503358, -0.7345917086575332, -0.6427876096865396, -0.5406408174555974, -0.4297949120891719, -0.31203344569848707, -0.18925124436040974, -0.06342391965656452, 0.06342391965656492, 0.18925124436041013, 0.31203344569848745, 0.4297949120891715, 0.5406408174555978, 0.6427876096865391, 0.7345917086575334, 0.8145759520503356, 0.8814533634475821, 0.9341478602651067, 0.9718115683235418, 0.9938384644612541, 0.9998741276738751, 0.9898214418809328, 0.963842158559942, 0.9223542941045816, 0.8660254037844383, 0.7957618405308319, 0.7126941713788629, 0.6181589862206056, 0.5136773915734058, 0.40093053540661344, 0.2817325568414299, 0.15800139597335056, 0.03172793349806701, -0.09505604330418282, -0.22031053278654034, -0.342020143325668, -0.45822652172741085, -0.5670598638627707, -0.6667690005162913, -0.7557495743542588, -0.8325698546347716, -0.8959937742913359, -0.9450008187146683, -0.9788024462147789, -0.9968547759519424, -0.998867339183008, -0.9848077530122081, -0.9549022414440737, -0.9096319953545183, -0.8497254299495145, -0.7761464642917573, -0.6900790114821116, -0.5929079290546404, -0.48619673610046904, -0.3716624556603267, -0.2511479871810788, -0.1265924535737493, -4.898587196589413e-16], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "doc": null, "id": "db1dce6f-9713-48d8-8578-61cd9eac97a9", "column_names": ["y", "x"]}, "id": "db1dce6f-9713-48d8-8578-61cd9eac97a9"}, {"type": "HelpTool", "attributes": {"plot": {"type": "Plot", "id": "5e95d649-0a9c-4e01-918c-03859b7c8345", "subtype": "Figure"}, "id": "bf85553b-1f10-480c-a9b1-cffff6dbd5a9", "tags": [], "doc": null}, "id": "bf85553b-1f10-480c-a9b1-cffff6dbd5a9"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "18bffccb-0207-4703-bfed-61170acbc2e7"}, "tags": [], "glyph": {"type": "Circle", "id": "39f1f440-b7d7-47c8-b7aa-b937b46e02db"}, "doc": null, "nonselection_glyph": {"type": "Circle", "id": "e5c33b48-090d-4174-9e68-3c65d282beec"}, "selection_glyph": null, "id": "a3554a0d-1d37-49c3-adbe-863072a8aff7"}, "id": "a3554a0d-1d37-49c3-adbe-863072a8aff7"}, {"type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "5e95d649-0a9c-4e01-918c-03859b7c8345", "subtype": "Figure"}, "id": "814c7185-14ff-45e1-95d6-9645f2fbfdba"}, "id": "814c7185-14ff-45e1-95d6-9645f2fbfdba"}, {"type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "5e95d649-0a9c-4e01-918c-03859b7c8345", "subtype": "Figure"}, "id": "205f8cfa-df27-410c-98c7-c66ebec929ba"}, "id": "205f8cfa-df27-410c-98c7-c66ebec929ba"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "1c91dd53-23ab-47b2-827a-2e2a4dfc72b0"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "89592ffb-25d5-417c-aade-4d8233c1d26f"}, "plot": {"type": "Plot", "id": "5e95d649-0a9c-4e01-918c-03859b7c8345", "subtype": "Figure"}, "id": "783d058c-6978-428c-a649-67295e961108"}, "id": "783d058c-6978-428c-a649-67295e961108"}, {"type": "Line", "attributes": {"y": {"field": "y"}, "line_alpha": {"value": 1.0}, "tags": [], "doc": null, "line_color": {"value": "green"}, "x": {"field": "x"}, "id": "e44d3c5c-e28b-4249-b0c0-82c337273cb3"}, "id": "e44d3c5c-e28b-4249-b0c0-82c337273cb3"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "89592ffb-25d5-417c-aade-4d8233c1d26f", "tags": []}, "id": "89592ffb-25d5-417c-aade-4d8233c1d26f"}, {"type": "Square", "attributes": {"y": {"field": "y"}, "fill_alpha": {"value": 1.0}, "fill_color": null, "line_alpha": {"value": 1.0}, "line_color": {"value": "green"}, "doc": null, "x": {"field": "x"}, "tags": [], "id": "5ceb27fc-127e-4734-814a-54a545934619"}, "id": "5ceb27fc-127e-4734-814a-54a545934619"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [0.0, 0.12659245357374926, 0.2511479871810792, 0.3716624556603276, 0.4861967361004687, 0.5929079290546404, 0.690079011482112, 0.7761464642917568, 0.8497254299495144, 0.9096319953545183, 0.9549022414440739, 0.984807753012208, 0.998867339183008, 0.9968547759519424, 0.9788024462147787, 0.9450008187146685, 0.8959937742913359, 0.8325698546347714, 0.7557495743542583, 0.6667690005162917, 0.5670598638627709, 0.4582265217274105, 0.3420201433256689, 0.2203105327865408, 0.09505604330418244, -0.03172793349806786, -0.15800139597335008, -0.28173255684142984, -0.4009305354066138, -0.5136773915734064, -0.6181589862206053, -0.7126941713788629, -0.7957618405308321, -0.8660254037844388, -0.9223542941045814, -0.9638421585599422, -0.9898214418809327, -0.9998741276738751, -0.9938384644612541, -0.9718115683235417, -0.9341478602651068, -0.881453363447582, -0.8145759520503358, -0.7345917086575332, -0.6427876096865396, -0.5406408174555974, -0.4297949120891719, -0.31203344569848707, -0.18925124436040974, -0.06342391965656452, 0.06342391965656492, 0.18925124436041013, 0.31203344569848745, 0.4297949120891715, 0.5406408174555978, 0.6427876096865391, 0.7345917086575334, 0.8145759520503356, 0.8814533634475821, 0.9341478602651067, 0.9718115683235418, 0.9938384644612541, 0.9998741276738751, 0.9898214418809328, 0.963842158559942, 0.9223542941045816, 0.8660254037844383, 0.7957618405308319, 0.7126941713788629, 0.6181589862206056, 0.5136773915734058, 0.40093053540661344, 0.2817325568414299, 0.15800139597335056, 0.03172793349806701, -0.09505604330418282, -0.22031053278654034, -0.342020143325668, -0.45822652172741085, -0.5670598638627707, -0.6667690005162913, -0.7557495743542588, -0.8325698546347716, -0.8959937742913359, -0.9450008187146683, -0.9788024462147789, -0.9968547759519424, -0.998867339183008, -0.9848077530122081, -0.9549022414440737, -0.9096319953545183, -0.8497254299495145, -0.7761464642917573, -0.6900790114821116, -0.5929079290546404, -0.48619673610046904, -0.3716624556603267, -0.2511479871810788, -0.1265924535737493, -4.898587196589413e-16], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "doc": null, "id": "18bffccb-0207-4703-bfed-61170acbc2e7", "column_names": ["y", "x"]}, "id": "18bffccb-0207-4703-bfed-61170acbc2e7"}, {"type": "Line", "attributes": {"y": {"field": "y"}, "line_alpha": {"value": 0.1}, "tags": [], "doc": null, "line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "id": "effdffaa-0011-4c79-8886-92089600b9f5"}, "id": "effdffaa-0011-4c79-8886-92089600b9f5"}, {"type": "ResetTool", "attributes": {"plot": {"type": "Plot", "id": "5e95d649-0a9c-4e01-918c-03859b7c8345", "subtype": "Figure"}, "id": "67305c85-ca33-4aac-9469-128bad66ece0", "tags": [], "doc": null}, "id": "67305c85-ca33-4aac-9469-128bad66ece0"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "5cc42fbe-fcbb-4366-ba52-dc4b67860fee", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "5cc42fbe-fcbb-4366-ba52-dc4b67860fee"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "c4f49a18-cec9-41a1-9e50-f99a3de46e12"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "5e95d649-0a9c-4e01-918c-03859b7c8345", "subtype": "Figure"}, "dimension": 1, "id": "3e06a061-cb12-4652-8030-398a930175fb"}, "id": "3e06a061-cb12-4652-8030-398a930175fb"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "7e5877ce-1f2b-4018-a405-d798864f72bb"}, "tags": [], "glyph": {"type": "Line", "id": "95c8384b-f36b-4b22-8a98-e1ff3546a26b"}, "doc": null, "nonselection_glyph": {"type": "Line", "id": "67809310-a6cd-4662-9f09-c4cff8183ae5"}, "selection_glyph": null, "id": "ea6119bc-1341-493f-9ed7-72d09e0ad2ac"}, "id": "ea6119bc-1341-493f-9ed7-72d09e0ad2ac"}, {"type": "Legend", "attributes": {"legends": [["sin(x)", [{"type": "GlyphRenderer", "id": "a3554a0d-1d37-49c3-adbe-863072a8aff7"}, {"type": "GlyphRenderer", "id": "49d8467c-f43e-4159-9aea-2f3d11279304"}]], ["2*sin(x)", [{"type": "GlyphRenderer", "id": "ea6119bc-1341-493f-9ed7-72d09e0ad2ac"}]], ["3*sin(x)", [{"type": "GlyphRenderer", "id": "dafaaaa6-14a5-4e64-a5d5-705004ad06fc"}, {"type": "GlyphRenderer", "id": "897425af-12f8-4c98-b0e0-e545804f038f"}]]], "tags": [], "doc": null, "label_text_font": "times", "plot": {"type": "Plot", "id": "5e95d649-0a9c-4e01-918c-03859b7c8345", "subtype": "Figure"}, "label_text_font_style": "italic", "label_text_color": {"value": "navy"}, "id": "f85857a6-2b44-4304-88ad-db236a4c9c98"}, "id": "f85857a6-2b44-4304-88ad-db236a4c9c98"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("068a3331-e383-4b06-b397-9f12369bc1f4", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("068a3331-e383-4b06-b397-9f12369bc1f4", all_models);
    });
  }

}(this));