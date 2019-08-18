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
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.8.2.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.8.2.min.js"

  var elt = document.getElementById("7428f8cd-df88-4f17-a092-75c87ca6d0bd");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '7428f8cd-df88-4f17-a092-75c87ca6d0bd' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "49ffa24f-a305-41ae-b655-5e9b09cdb344", "type": "Circle", "attributes": {"fill_alpha": {"value": 0.1, "units": "data"}, "tags": [], "line_alpha": {"value": 0.1, "units": "data"}, "y": {"field": "y", "units": "data"}, "id": "49ffa24f-a305-41ae-b655-5e9b09cdb344", "fill_color": {"value": "#1f77b4"}, "line_color": {"value": "#1f77b4"}, "doc": null, "x": {"field": "x", "units": "data"}, "size": {"value": 10, "units": "screen"}}}, {"id": "0aee6fe7-91f1-4c2c-9043-a29f6b118d5c", "type": "BasicTickFormatter", "attributes": {"id": "0aee6fe7-91f1-4c2c-9043-a29f6b118d5c", "doc": null, "tags": []}}, {"id": "d97e2b76-6fe7-43ee-95e9-6be7379b4222", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"y": [1.0, 1.1185472664045446, 1.2190966885774355, 1.3000303886764002, 1.3600461131702537, 1.398178186585699, 1.4138130495871821, 1.4066991313762793, 1.3769508975600169, 1.3250470083564048, 1.2518226167723487, 1.1584559306791384, 1.0464492550067501, 0.9176048190951538, 0.773995778149588, 0.6179328553972467, 0.45192716168556174, 0.27864979076866114, 0.10088884040897328, -0.07849544915946294, -0.25661671756706184, -0.43060892692751285, -0.5976724774602394, -0.7551192540988663, -0.9004158792689021, -1.031224475881253, -1.1454402846497445, -1.2412255304559272, -1.3170389928386834, -1.3716608048083834, -1.4042120809633927, -1.414169059085184, -1.4013715276684988, -1.3660254037844384, -1.30869941979771, -1.2303159722499768, -1.1321362801542179, -1.0157400915086827, -0.8830002645602433, -0.7360526328141141, -0.5772616386732351, -0.4091822886748991, -0.2345190424791379, -0.05608229710040091, 0.1232568334324382, 0.30061271537558376, 0.47313162619744914, 0.6380376720424583, 0.7926774529022971, 0.9345627568153199, 1.0614105961284492, 1.1711799416231168, 1.2621045634394328, 1.3327214503757927, 1.3818943502867786, 1.4088320528055172, 1.4131011202146655, 1.394632861621534, 1.3537244382202647, 1.2910340818569788, 1.207570503832969, 1.1046766643622654, 0.9840081638390671, 0.8475066036076481, 0.6973683448699071, 0.5360091684114534, 0.3660254037844375, 0.19015215339316494, 0.011219283672541769, -0.16789410852218156, -0.34430602166157165, -0.5151779220254562, -0.6777604167730675, -0.8294374927030437, -0.9677686088851182, -1.0905279658772673, -1.1957403196719474, -1.2817127641115766, -1.347061970382334, -1.3907364452926034, -1.4120334501920464, -1.4106103082995434, -1.3864899185008817, -1.3400603868971102, -1.2720687820320904, -1.1836091142799687, -1.0761047328087305, -0.9512854233592658, -0.8111595753452784, -0.6579818661157981, -0.49421698235263173, -0.32249996233901235, -0.1455937972072353, 0.03365502662295894, 0.21236232847641823, 0.3876526409693158, 0.5567054773557463, 0.7168007142152776, 0.8653623592570461, 0.9999999999999996], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "column_names": ["x", "y"], "id": "d97e2b76-6fe7-43ee-95e9-6be7379b4222", "doc": null, "tags": []}}, {"id": "7a31575b-f2ec-4d18-90e8-a13414eea1c0", "type": "ToolEvents", "attributes": {"geometries": [], "id": "7a31575b-f2ec-4d18-90e8-a13414eea1c0", "doc": null, "tags": []}}, {"id": "5c5f39ba-bb67-4c15-9228-d03432ec1d41", "type": "Grid", "attributes": {"id": "5c5f39ba-bb67-4c15-9228-d03432ec1d41", "plot": {"id": "299063b1-29fe-4151-9d96-905cc20f59b5", "type": "Plot", "subtype": "Figure"}, "dimension": 0, "ticker": {"id": "352085da-1636-4812-aa9a-4b78d06f5eeb", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "2bfce448-0411-44ef-af28-05a3d2bf340f", "type": "Circle", "attributes": {"y": {"field": "y", "units": "data"}, "fill_alpha": {"value": 0.5, "units": "data"}, "id": "2bfce448-0411-44ef-af28-05a3d2bf340f", "fill_color": {"value": "navy"}, "line_color": {"value": "navy"}, "size": {"value": 10, "units": "screen"}, "x": {"field": "x", "units": "data"}, "doc": null, "tags": [], "line_alpha": {"value": 0.5, "units": "data"}}}, {"id": "2cb4197e-cd73-4336-989b-9276d23b5740", "type": "LinearAxis", "attributes": {"id": "2cb4197e-cd73-4336-989b-9276d23b5740", "formatter": {"id": "e8ffd945-23b3-4638-93a3-0bcdce71a0cf", "type": "BasicTickFormatter"}, "plot": {"id": "8ecbd1ef-8d05-4194-b741-9000d7399d15", "type": "Plot", "subtype": "Figure"}, "ticker": {"id": "32e31d3e-2768-44cd-a87b-98c056d49cbb", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "7cd73a1c-4737-4b12-b128-e9bfea9d8eff", "type": "PreviewSaveTool", "attributes": {"plot": {"id": "8ecbd1ef-8d05-4194-b741-9000d7399d15", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "7cd73a1c-4737-4b12-b128-e9bfea9d8eff"}}, {"id": "9cf482ea-a130-4466-bb16-44944399c302", "type": "LinearAxis", "attributes": {"id": "9cf482ea-a130-4466-bb16-44944399c302", "formatter": {"id": "0aee6fe7-91f1-4c2c-9043-a29f6b118d5c", "type": "BasicTickFormatter"}, "plot": {"id": "8ecbd1ef-8d05-4194-b741-9000d7399d15", "type": "Plot", "subtype": "Figure"}, "ticker": {"id": "ea64da25-9819-4107-9ca5-0f9ee9f4a5be", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "32e31d3e-2768-44cd-a87b-98c056d49cbb", "type": "BasicTicker", "attributes": {"num_minor_ticks": 5, "id": "32e31d3e-2768-44cd-a87b-98c056d49cbb", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "3fb81826-cb22-4a4e-8d65-82c1f9416aca", "type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "3fb81826-cb22-4a4e-8d65-82c1f9416aca", "plot": {"id": "299063b1-29fe-4151-9d96-905cc20f59b5", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "5014820c-4b52-4c17-af9a-4749c36bd2c7", "type": "PanTool", "attributes": {"dimensions": ["width", "height"], "id": "5014820c-4b52-4c17-af9a-4749c36bd2c7", "plot": {"id": "299063b1-29fe-4151-9d96-905cc20f59b5", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "33f5224a-0a89-4df6-a5dc-5fc5aa506bc6", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "c177bdd9-51fc-40f1-b7fb-2b62a934c257", "type": "ColumnDataSource"}, "columns": ["y"]}, {"source": {"id": "ee062f91-204b-498d-85ba-b0f052d0222f", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "33f5224a-0a89-4df6-a5dc-5fc5aa506bc6", "doc": null, "tags": []}}, {"id": "ba0d042d-f046-4e31-92c9-9241f45f869b", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": {"id": "32143851-0056-4e99-8782-0bdc8e4b6039", "type": "Triangle"}, "name": null, "data_source": {"id": "ee062f91-204b-498d-85ba-b0f052d0222f", "type": "ColumnDataSource"}, "id": "ba0d042d-f046-4e31-92c9-9241f45f869b", "glyph": {"id": "1bf88336-ef1e-4156-8479-339821cad11e", "type": "Triangle"}, "tags": [], "doc": null}}, {"id": "cb244d40-b26a-4e73-a475-ae584ea5df4b", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "d97e2b76-6fe7-43ee-95e9-6be7379b4222", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "cb244d40-b26a-4e73-a475-ae584ea5df4b", "doc": null, "tags": []}}, {"id": "180314ce-1bb3-410d-8903-7c6741d2271b", "type": "LinearAxis", "attributes": {"id": "180314ce-1bb3-410d-8903-7c6741d2271b", "formatter": {"id": "3908e7f7-1e84-4f1c-bf5a-7e69b3931ce6", "type": "BasicTickFormatter"}, "plot": {"id": "f611a5c5-c22a-48ac-a154-ac79ec7289fc", "type": "Plot", "subtype": "Figure"}, "ticker": {"id": "55ea377a-c2e3-41fb-ba46-7fa7b6813ee7", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "a18562fd-ebf2-43ab-a630-5421130a2e99", "type": "BasicTickFormatter", "attributes": {"id": "a18562fd-ebf2-43ab-a630-5421130a2e99", "doc": null, "tags": []}}, {"id": "52808fac-0379-45c2-9d4e-202abae81710", "type": "ToolEvents", "attributes": {"geometries": [], "id": "52808fac-0379-45c2-9d4e-202abae81710", "doc": null, "tags": []}}, {"id": "2f43013b-70d3-4c06-8e03-e5ad66788f04", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "c177bdd9-51fc-40f1-b7fb-2b62a934c257", "type": "ColumnDataSource"}, "columns": ["x"]}, {"source": {"id": "ee062f91-204b-498d-85ba-b0f052d0222f", "type": "ColumnDataSource"}, "columns": ["x"]}, {"source": {"id": "d97e2b76-6fe7-43ee-95e9-6be7379b4222", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "2f43013b-70d3-4c06-8e03-e5ad66788f04", "doc": null, "tags": []}}, {"id": "55ea377a-c2e3-41fb-ba46-7fa7b6813ee7", "type": "BasicTicker", "attributes": {"num_minor_ticks": 5, "id": "55ea377a-c2e3-41fb-ba46-7fa7b6813ee7", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "7a3c3b7e-9ad9-4f4a-97b1-7de0a641efef", "type": "BasicTickFormatter", "attributes": {"id": "7a3c3b7e-9ad9-4f4a-97b1-7de0a641efef", "doc": null, "tags": []}}, {"id": "cc9cf622-d223-448d-b5ca-54f0797edfb5", "type": "LinearAxis", "attributes": {"id": "cc9cf622-d223-448d-b5ca-54f0797edfb5", "formatter": {"id": "a18562fd-ebf2-43ab-a630-5421130a2e99", "type": "BasicTickFormatter"}, "plot": {"id": "f611a5c5-c22a-48ac-a154-ac79ec7289fc", "type": "Plot", "subtype": "Figure"}, "ticker": {"id": "5126d830-31fd-460b-8381-39259182958b", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "299063b1-29fe-4151-9d96-905cc20f59b5", "type": "Plot", "subtype": "Figure", "attributes": {"tool_events": {"id": "c5d40b1c-eb16-4f49-b966-e9bbf0f6ca08", "type": "ToolEvents"}, "title": null, "extra_y_ranges": {}, "renderers": [{"id": "af249722-f7a0-498f-a441-97dfea95d826", "type": "LinearAxis"}, {"id": "5c5f39ba-bb67-4c15-9228-d03432ec1d41", "type": "Grid"}, {"id": "b830f150-7758-4c3b-b1a2-136f44c93be7", "type": "LinearAxis"}, {"id": "4a8d310d-bddd-4d1f-b5af-77f21814dac7", "type": "Grid"}, {"id": "7e4df7e4-81b0-443c-a79c-d66ee0f172f3", "type": "GlyphRenderer"}], "id": "299063b1-29fe-4151-9d96-905cc20f59b5", "extra_x_ranges": {}, "doc": null, "below": [{"id": "af249722-f7a0-498f-a441-97dfea95d826", "type": "LinearAxis"}], "right": [], "x_range": {"id": "2f43013b-70d3-4c06-8e03-e5ad66788f04", "type": "DataRange1d"}, "left": [{"id": "b830f150-7758-4c3b-b1a2-136f44c93be7", "type": "LinearAxis"}], "above": [], "tools": [{"id": "5014820c-4b52-4c17-af9a-4749c36bd2c7", "type": "PanTool"}, {"id": "5108d53d-b81e-452d-a6d6-4489ea1431ec", "type": "WheelZoomTool"}, {"id": "3fb81826-cb22-4a4e-8d65-82c1f9416aca", "type": "BoxZoomTool"}, {"id": "ec587671-007a-46c4-8a97-a904520bc913", "type": "PreviewSaveTool"}, {"id": "fa499238-1f73-45b7-90bf-39a709640a57", "type": "ResizeTool"}, {"id": "b8531ca3-72d5-4085-863c-a5d7e3050baa", "type": "ResetTool"}], "plot_width": 250, "plot_height": 250, "y_range": {"id": "33f5224a-0a89-4df6-a5dc-5fc5aa506bc6", "type": "DataRange1d"}, "tags": []}}, {"id": "7a77d757-d8c4-4319-af66-6a29f0b46849", "type": "Grid", "attributes": {"id": "7a77d757-d8c4-4319-af66-6a29f0b46849", "plot": {"id": "f611a5c5-c22a-48ac-a154-ac79ec7289fc", "type": "Plot", "subtype": "Figure"}, "dimension": 0, "ticker": {"id": "55ea377a-c2e3-41fb-ba46-7fa7b6813ee7", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "4841849f-a349-489b-b0a3-dfc98349c7e2", "type": "Square", "attributes": {"y": {"field": "y", "units": "data"}, "fill_alpha": {"value": 0.5, "units": "data"}, "id": "4841849f-a349-489b-b0a3-dfc98349c7e2", "fill_color": {"value": "olive"}, "line_color": {"value": "olive"}, "size": {"value": 10, "units": "screen"}, "x": {"field": "x", "units": "data"}, "doc": null, "tags": [], "line_alpha": {"value": 0.5, "units": "data"}}}, {"id": "352085da-1636-4812-aa9a-4b78d06f5eeb", "type": "BasicTicker", "attributes": {"num_minor_ticks": 5, "id": "352085da-1636-4812-aa9a-4b78d06f5eeb", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "c177bdd9-51fc-40f1-b7fb-2b62a934c257", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"y": [0.0, 0.12659245357374926, 0.2511479871810792, 0.3716624556603276, 0.4861967361004687, 0.5929079290546404, 0.690079011482112, 0.7761464642917568, 0.8497254299495144, 0.9096319953545183, 0.9549022414440739, 0.984807753012208, 0.998867339183008, 0.9968547759519424, 0.9788024462147787, 0.9450008187146685, 0.8959937742913359, 0.8325698546347714, 0.7557495743542583, 0.6667690005162917, 0.5670598638627709, 0.4582265217274105, 0.3420201433256689, 0.2203105327865408, 0.09505604330418244, -0.03172793349806786, -0.15800139597335008, -0.28173255684142984, -0.4009305354066138, -0.5136773915734064, -0.6181589862206053, -0.7126941713788629, -0.7957618405308321, -0.8660254037844388, -0.9223542941045814, -0.9638421585599422, -0.9898214418809327, -0.9998741276738751, -0.9938384644612541, -0.9718115683235417, -0.9341478602651068, -0.881453363447582, -0.8145759520503358, -0.7345917086575332, -0.6427876096865396, -0.5406408174555974, -0.4297949120891719, -0.31203344569848707, -0.18925124436040974, -0.06342391965656452, 0.06342391965656492, 0.18925124436041013, 0.31203344569848745, 0.4297949120891715, 0.5406408174555978, 0.6427876096865391, 0.7345917086575334, 0.8145759520503356, 0.8814533634475821, 0.9341478602651067, 0.9718115683235418, 0.9938384644612541, 0.9998741276738751, 0.9898214418809328, 0.963842158559942, 0.9223542941045816, 0.8660254037844383, 0.7957618405308319, 0.7126941713788629, 0.6181589862206056, 0.5136773915734058, 0.40093053540661344, 0.2817325568414299, 0.15800139597335056, 0.03172793349806701, -0.09505604330418282, -0.22031053278654034, -0.342020143325668, -0.45822652172741085, -0.5670598638627707, -0.6667690005162913, -0.7557495743542588, -0.8325698546347716, -0.8959937742913359, -0.9450008187146683, -0.9788024462147789, -0.9968547759519424, -0.998867339183008, -0.9848077530122081, -0.9549022414440737, -0.9096319953545183, -0.8497254299495145, -0.7761464642917573, -0.6900790114821116, -0.5929079290546404, -0.48619673610046904, -0.3716624556603267, -0.2511479871810788, -0.1265924535737493, -4.898587196589413e-16], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "column_names": ["x", "y"], "id": "c177bdd9-51fc-40f1-b7fb-2b62a934c257", "doc": null, "tags": []}}, {"id": "1bf88336-ef1e-4156-8479-339821cad11e", "type": "Triangle", "attributes": {"y": {"field": "y", "units": "data"}, "fill_alpha": {"value": 0.5, "units": "data"}, "id": "1bf88336-ef1e-4156-8479-339821cad11e", "fill_color": {"value": "firebrick"}, "line_color": {"value": "firebrick"}, "size": {"value": 10, "units": "screen"}, "x": {"field": "x", "units": "data"}, "doc": null, "tags": [], "line_alpha": {"value": 0.5, "units": "data"}}}, {"id": "62ad27d6-7b92-45ec-b512-5e34aa8c5ea5", "type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "62ad27d6-7b92-45ec-b512-5e34aa8c5ea5", "plot": {"id": "f611a5c5-c22a-48ac-a154-ac79ec7289fc", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "d8ddb644-bdb5-42cb-a9d9-f3de6bebe6f3", "type": "BasicTicker", "attributes": {"num_minor_ticks": 5, "id": "d8ddb644-bdb5-42cb-a9d9-f3de6bebe6f3", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "9348b32a-2472-4c03-9338-ae6b39cf4284", "type": "PanTool", "attributes": {"dimensions": ["width", "height"], "id": "9348b32a-2472-4c03-9338-ae6b39cf4284", "plot": {"id": "8ecbd1ef-8d05-4194-b741-9000d7399d15", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "fa499238-1f73-45b7-90bf-39a709640a57", "type": "ResizeTool", "attributes": {"plot": {"id": "299063b1-29fe-4151-9d96-905cc20f59b5", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "fa499238-1f73-45b7-90bf-39a709640a57"}}, {"id": "afd9b06d-fc47-4aed-b145-5a0e281c015a", "type": "Square", "attributes": {"fill_alpha": {"value": 0.1, "units": "data"}, "tags": [], "line_alpha": {"value": 0.1, "units": "data"}, "y": {"field": "y", "units": "data"}, "id": "afd9b06d-fc47-4aed-b145-5a0e281c015a", "fill_color": {"value": "#1f77b4"}, "line_color": {"value": "#1f77b4"}, "doc": null, "x": {"field": "x", "units": "data"}, "size": {"value": 10, "units": "screen"}}}, {"id": "81764052-411c-4a0e-9da3-d611b38f5ce5", "type": "ResizeTool", "attributes": {"plot": {"id": "8ecbd1ef-8d05-4194-b741-9000d7399d15", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "81764052-411c-4a0e-9da3-d611b38f5ce5"}}, {"id": "937c5d2d-75d3-4c33-abcf-8eb5e4e02ed3", "type": "ResetTool", "attributes": {"plot": {"id": "8ecbd1ef-8d05-4194-b741-9000d7399d15", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "937c5d2d-75d3-4c33-abcf-8eb5e4e02ed3"}}, {"id": "f611a5c5-c22a-48ac-a154-ac79ec7289fc", "type": "Plot", "subtype": "Figure", "attributes": {"tool_events": {"id": "7a31575b-f2ec-4d18-90e8-a13414eea1c0", "type": "ToolEvents"}, "title": null, "extra_y_ranges": {}, "renderers": [{"id": "180314ce-1bb3-410d-8903-7c6741d2271b", "type": "LinearAxis"}, {"id": "7a77d757-d8c4-4319-af66-6a29f0b46849", "type": "Grid"}, {"id": "cc9cf622-d223-448d-b5ca-54f0797edfb5", "type": "LinearAxis"}, {"id": "e3e8e0a9-ad9f-4cda-8a47-6c961306ab46", "type": "Grid"}, {"id": "ba0d042d-f046-4e31-92c9-9241f45f869b", "type": "GlyphRenderer"}], "id": "f611a5c5-c22a-48ac-a154-ac79ec7289fc", "extra_x_ranges": {}, "doc": null, "below": [{"id": "180314ce-1bb3-410d-8903-7c6741d2271b", "type": "LinearAxis"}], "right": [], "x_range": {"id": "2f43013b-70d3-4c06-8e03-e5ad66788f04", "type": "DataRange1d"}, "left": [{"id": "cc9cf622-d223-448d-b5ca-54f0797edfb5", "type": "LinearAxis"}], "above": [], "tools": [{"id": "39428833-26a7-45ae-90f9-cc713abe280b", "type": "PanTool"}, {"id": "cf11f2e7-676e-40b0-8d14-9c6ee993fb80", "type": "WheelZoomTool"}, {"id": "62ad27d6-7b92-45ec-b512-5e34aa8c5ea5", "type": "BoxZoomTool"}, {"id": "e9cdfe35-8ad7-4794-9cc5-73a1ea222791", "type": "PreviewSaveTool"}, {"id": "b18e20a9-2f64-4888-aa33-4bf9ae4872f9", "type": "ResizeTool"}, {"id": "f6c45358-a330-4b3b-8dd3-5efe7cba7029", "type": "ResetTool"}], "plot_width": 250, "plot_height": 250, "y_range": {"id": "33f5224a-0a89-4df6-a5dc-5fc5aa506bc6", "type": "DataRange1d"}, "tags": []}}, {"id": "f6c45358-a330-4b3b-8dd3-5efe7cba7029", "type": "ResetTool", "attributes": {"plot": {"id": "f611a5c5-c22a-48ac-a154-ac79ec7289fc", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "f6c45358-a330-4b3b-8dd3-5efe7cba7029"}}, {"id": "e8ffd945-23b3-4638-93a3-0bcdce71a0cf", "type": "BasicTickFormatter", "attributes": {"id": "e8ffd945-23b3-4638-93a3-0bcdce71a0cf", "doc": null, "tags": []}}, {"id": "e9cdfe35-8ad7-4794-9cc5-73a1ea222791", "type": "PreviewSaveTool", "attributes": {"plot": {"id": "f611a5c5-c22a-48ac-a154-ac79ec7289fc", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "e9cdfe35-8ad7-4794-9cc5-73a1ea222791"}}, {"id": "39428833-26a7-45ae-90f9-cc713abe280b", "type": "PanTool", "attributes": {"dimensions": ["width", "height"], "id": "39428833-26a7-45ae-90f9-cc713abe280b", "plot": {"id": "f611a5c5-c22a-48ac-a154-ac79ec7289fc", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "ea64da25-9819-4107-9ca5-0f9ee9f4a5be", "type": "BasicTicker", "attributes": {"num_minor_ticks": 5, "id": "ea64da25-9819-4107-9ca5-0f9ee9f4a5be", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "fd358e98-befb-45cc-b65f-78204d3e76cc", "type": "Grid", "attributes": {"id": "fd358e98-befb-45cc-b65f-78204d3e76cc", "plot": {"id": "8ecbd1ef-8d05-4194-b741-9000d7399d15", "type": "Plot", "subtype": "Figure"}, "dimension": 1, "ticker": {"id": "ea64da25-9819-4107-9ca5-0f9ee9f4a5be", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "863c50d6-0e3f-4793-bec6-7b147c50ed8e", "type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "863c50d6-0e3f-4793-bec6-7b147c50ed8e", "plot": {"id": "8ecbd1ef-8d05-4194-b741-9000d7399d15", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "b8531ca3-72d5-4085-863c-a5d7e3050baa", "type": "ResetTool", "attributes": {"plot": {"id": "299063b1-29fe-4151-9d96-905cc20f59b5", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "b8531ca3-72d5-4085-863c-a5d7e3050baa"}}, {"id": "59bcaf16-2f67-4808-9504-8468436bb82e", "type": "ToolEvents", "attributes": {"geometries": [], "id": "59bcaf16-2f67-4808-9504-8468436bb82e", "doc": null, "tags": []}}, {"id": "cf11f2e7-676e-40b0-8d14-9c6ee993fb80", "type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "cf11f2e7-676e-40b0-8d14-9c6ee993fb80", "plot": {"id": "f611a5c5-c22a-48ac-a154-ac79ec7289fc", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "d1fb2d27-5fbd-4a6a-b939-08532bfc9c5e", "type": "BasicTickFormatter", "attributes": {"id": "d1fb2d27-5fbd-4a6a-b939-08532bfc9c5e", "doc": null, "tags": []}}, {"id": "5126d830-31fd-460b-8381-39259182958b", "type": "BasicTicker", "attributes": {"num_minor_ticks": 5, "id": "5126d830-31fd-460b-8381-39259182958b", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "8ecbd1ef-8d05-4194-b741-9000d7399d15", "type": "Plot", "subtype": "Figure", "attributes": {"tool_events": {"id": "52808fac-0379-45c2-9d4e-202abae81710", "type": "ToolEvents"}, "title": null, "extra_y_ranges": {}, "renderers": [{"id": "2cb4197e-cd73-4336-989b-9276d23b5740", "type": "LinearAxis"}, {"id": "486d6812-fdd9-4aad-98e4-55a483700814", "type": "Grid"}, {"id": "9cf482ea-a130-4466-bb16-44944399c302", "type": "LinearAxis"}, {"id": "fd358e98-befb-45cc-b65f-78204d3e76cc", "type": "Grid"}, {"id": "446ecad5-aa4f-49d1-a0e5-c159e94a82c5", "type": "GlyphRenderer"}], "id": "8ecbd1ef-8d05-4194-b741-9000d7399d15", "extra_x_ranges": {}, "doc": null, "below": [{"id": "2cb4197e-cd73-4336-989b-9276d23b5740", "type": "LinearAxis"}], "right": [], "x_range": {"id": "2f43013b-70d3-4c06-8e03-e5ad66788f04", "type": "DataRange1d"}, "left": [{"id": "9cf482ea-a130-4466-bb16-44944399c302", "type": "LinearAxis"}], "above": [], "tools": [{"id": "9348b32a-2472-4c03-9338-ae6b39cf4284", "type": "PanTool"}, {"id": "8bfc9c7a-b17a-4e27-bf66-3df9ee17b9f3", "type": "WheelZoomTool"}, {"id": "863c50d6-0e3f-4793-bec6-7b147c50ed8e", "type": "BoxZoomTool"}, {"id": "7cd73a1c-4737-4b12-b128-e9bfea9d8eff", "type": "PreviewSaveTool"}, {"id": "81764052-411c-4a0e-9da3-d611b38f5ce5", "type": "ResizeTool"}, {"id": "937c5d2d-75d3-4c33-abcf-8eb5e4e02ed3", "type": "ResetTool"}], "plot_width": 250, "plot_height": 250, "y_range": {"id": "cb244d40-b26a-4e73-a475-ae584ea5df4b", "type": "DataRange1d"}, "tags": []}}, {"id": "4e008d42-35f0-4de0-8cc4-468cd38324a2", "type": "GridPlot", "attributes": {"tool_events": {"id": "59bcaf16-2f67-4808-9504-8468436bb82e", "type": "ToolEvents"}, "above": [], "extra_y_ranges": {}, "renderers": [], "id": "4e008d42-35f0-4de0-8cc4-468cd38324a2", "extra_x_ranges": {}, "doc": null, "below": [], "children": [[{"id": "299063b1-29fe-4151-9d96-905cc20f59b5", "type": "Plot", "subtype": "Figure"}, {"id": "f611a5c5-c22a-48ac-a154-ac79ec7289fc", "type": "Plot", "subtype": "Figure"}, {"id": "8ecbd1ef-8d05-4194-b741-9000d7399d15", "type": "Plot", "subtype": "Figure"}]], "x_range": null, "left": [], "tools": [], "toolbar_location": null, "right": [], "y_range": null, "tags": []}}, {"id": "4a8d310d-bddd-4d1f-b5af-77f21814dac7", "type": "Grid", "attributes": {"id": "4a8d310d-bddd-4d1f-b5af-77f21814dac7", "plot": {"id": "299063b1-29fe-4151-9d96-905cc20f59b5", "type": "Plot", "subtype": "Figure"}, "dimension": 1, "ticker": {"id": "d8ddb644-bdb5-42cb-a9d9-f3de6bebe6f3", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "32143851-0056-4e99-8782-0bdc8e4b6039", "type": "Triangle", "attributes": {"fill_alpha": {"value": 0.1, "units": "data"}, "tags": [], "line_alpha": {"value": 0.1, "units": "data"}, "y": {"field": "y", "units": "data"}, "id": "32143851-0056-4e99-8782-0bdc8e4b6039", "fill_color": {"value": "#1f77b4"}, "line_color": {"value": "#1f77b4"}, "doc": null, "x": {"field": "x", "units": "data"}, "size": {"value": 10, "units": "screen"}}}, {"id": "b830f150-7758-4c3b-b1a2-136f44c93be7", "type": "LinearAxis", "attributes": {"id": "b830f150-7758-4c3b-b1a2-136f44c93be7", "formatter": {"id": "7a3c3b7e-9ad9-4f4a-97b1-7de0a641efef", "type": "BasicTickFormatter"}, "plot": {"id": "299063b1-29fe-4151-9d96-905cc20f59b5", "type": "Plot", "subtype": "Figure"}, "ticker": {"id": "d8ddb644-bdb5-42cb-a9d9-f3de6bebe6f3", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "7e4df7e4-81b0-443c-a79c-d66ee0f172f3", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": {"id": "49ffa24f-a305-41ae-b655-5e9b09cdb344", "type": "Circle"}, "name": null, "data_source": {"id": "c177bdd9-51fc-40f1-b7fb-2b62a934c257", "type": "ColumnDataSource"}, "id": "7e4df7e4-81b0-443c-a79c-d66ee0f172f3", "glyph": {"id": "2bfce448-0411-44ef-af28-05a3d2bf340f", "type": "Circle"}, "tags": [], "doc": null}}, {"id": "b18e20a9-2f64-4888-aa33-4bf9ae4872f9", "type": "ResizeTool", "attributes": {"plot": {"id": "f611a5c5-c22a-48ac-a154-ac79ec7289fc", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "b18e20a9-2f64-4888-aa33-4bf9ae4872f9"}}, {"id": "ec587671-007a-46c4-8a97-a904520bc913", "type": "PreviewSaveTool", "attributes": {"plot": {"id": "299063b1-29fe-4151-9d96-905cc20f59b5", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "ec587671-007a-46c4-8a97-a904520bc913"}}, {"id": "ee062f91-204b-498d-85ba-b0f052d0222f", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"y": [1.0, 0.9919548128307953, 0.9679487013963562, 0.9283679330160726, 0.8738493770697849, 0.8052702575310586, 0.7237340381050701, 0.6305526670845225, 0.5272254676105024, 0.41541501300188644, 0.2969203753282749, 0.17364817766693041, 0.04758191582374218, -0.07924995685678854, -0.20480666806519074, -0.32706796331742166, -0.4440666126057741, -0.5539200638661103, -0.654860733945285, -0.7452644496757547, -0.8236765814298327, -0.8888354486549234, -0.9396926207859083, -0.975429786885407, -0.9954719225730846, -0.9994965423831851, -0.9874388886763943, -0.9594929736144974, -0.9161084574320696, -0.857983413234977, -0.7860530947427874, -0.7014748877063213, -0.6056096871376666, -0.4999999999999996, -0.3863451256931287, -0.26647381369003464, -0.14231483827328523, -0.01586596383480761, 0.11083819990101086, 0.23575893550942748, 0.35688622159187167, 0.4722710747726829, 0.5800569095711979, 0.6785094115571323, 0.7660444431189778, 0.8412535328311812, 0.9029265382866211, 0.9500711177409454, 0.9819286972627068, 0.9979866764718844, 0.9979866764718843, 0.9819286972627067, 0.9500711177409452, 0.9029265382866213, 0.841253532831181, 0.7660444431189781, 0.678509411557132, 0.5800569095711984, 0.47227107477268254, 0.3568862215918721, 0.2357589355094271, 0.11083819990101135, -0.015865963834808008, -0.14231483827328475, -0.26647381369003503, -0.38634512569312823, -0.5000000000000008, -0.6056096871376669, -0.7014748877063212, -0.7860530947427872, -0.8579834132349774, -0.9161084574320697, -0.9594929736144974, -0.9874388886763942, -0.9994965423831852, -0.9954719225730846, -0.9754297868854072, -0.9396926207859086, -0.8888354486549233, -0.8236765814298327, -0.745264449675755, -0.6548607339452844, -0.5539200638661099, -0.4440666126057742, -0.3270679633174221, -0.2048066680651899, -0.07924995685678815, 0.04758191582374214, 0.17364817766692972, 0.29692037532827553, 0.4154150130018866, 0.5272254676105022, 0.630552667084522, 0.7237340381050705, 0.8052702575310586, 0.8738493770697848, 0.9283679330160729, 0.9679487013963564, 0.9919548128307953, 1.0], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "column_names": ["x", "y"], "id": "ee062f91-204b-498d-85ba-b0f052d0222f", "doc": null, "tags": []}}, {"id": "8bfc9c7a-b17a-4e27-bf66-3df9ee17b9f3", "type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "8bfc9c7a-b17a-4e27-bf66-3df9ee17b9f3", "plot": {"id": "8ecbd1ef-8d05-4194-b741-9000d7399d15", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "e3e8e0a9-ad9f-4cda-8a47-6c961306ab46", "type": "Grid", "attributes": {"id": "e3e8e0a9-ad9f-4cda-8a47-6c961306ab46", "plot": {"id": "f611a5c5-c22a-48ac-a154-ac79ec7289fc", "type": "Plot", "subtype": "Figure"}, "dimension": 1, "ticker": {"id": "5126d830-31fd-460b-8381-39259182958b", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "3908e7f7-1e84-4f1c-bf5a-7e69b3931ce6", "type": "BasicTickFormatter", "attributes": {"id": "3908e7f7-1e84-4f1c-bf5a-7e69b3931ce6", "doc": null, "tags": []}}, {"id": "5108d53d-b81e-452d-a6d6-4489ea1431ec", "type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "5108d53d-b81e-452d-a6d6-4489ea1431ec", "plot": {"id": "299063b1-29fe-4151-9d96-905cc20f59b5", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "af249722-f7a0-498f-a441-97dfea95d826", "type": "LinearAxis", "attributes": {"id": "af249722-f7a0-498f-a441-97dfea95d826", "formatter": {"id": "d1fb2d27-5fbd-4a6a-b939-08532bfc9c5e", "type": "BasicTickFormatter"}, "plot": {"id": "299063b1-29fe-4151-9d96-905cc20f59b5", "type": "Plot", "subtype": "Figure"}, "ticker": {"id": "352085da-1636-4812-aa9a-4b78d06f5eeb", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "446ecad5-aa4f-49d1-a0e5-c159e94a82c5", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": {"id": "afd9b06d-fc47-4aed-b145-5a0e281c015a", "type": "Square"}, "name": null, "data_source": {"id": "d97e2b76-6fe7-43ee-95e9-6be7379b4222", "type": "ColumnDataSource"}, "id": "446ecad5-aa4f-49d1-a0e5-c159e94a82c5", "glyph": {"id": "4841849f-a349-489b-b0a3-dfc98349c7e2", "type": "Square"}, "tags": [], "doc": null}}, {"id": "c5d40b1c-eb16-4f49-b966-e9bbf0f6ca08", "type": "ToolEvents", "attributes": {"geometries": [], "id": "c5d40b1c-eb16-4f49-b966-e9bbf0f6ca08", "doc": null, "tags": []}}, {"id": "486d6812-fdd9-4aad-98e4-55a483700814", "type": "Grid", "attributes": {"id": "486d6812-fdd9-4aad-98e4-55a483700814", "plot": {"id": "8ecbd1ef-8d05-4194-b741-9000d7399d15", "type": "Plot", "subtype": "Figure"}, "dimension": 0, "ticker": {"id": "32e31d3e-2768-44cd-a87b-98c056d49cbb", "type": "BasicTicker"}, "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("7428f8cd-df88-4f17-a092-75c87ca6d0bd", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("7428f8cd-df88-4f17-a092-75c87ca6d0bd", all_models);
    });
  }

}(this));