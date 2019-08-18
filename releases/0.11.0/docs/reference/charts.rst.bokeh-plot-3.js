
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
  };var element = document.getElementById("1ca06e73-d420-4e8b-87f7-694562d207f6");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '1ca06e73-d420-4e8b-87f7-694562d207f6' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"43f54c33-062c-4cda-b0ab-d7bbd0f0c882": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BasicTicker", "id": "646e1999-8230-4663-8229-e287e12a7a27", "attributes": {}}, {"type": "PanTool", "id": "3430355d-e53b-484f-abda-07210245922d", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "b9c54aa0-57fd-46ff-ba9b-ff847481413f"}}}, {"type": "ToolEvents", "id": "eba1c587-e028-4068-b673-9fffb2ab3103", "attributes": {}}, {"type": "LinearAxis", "id": "a3531553-06a3-4bb4-82d7-ab4ca144721d", "attributes": {"ticker": {"type": "BasicTicker", "id": "09c0b9eb-d711-4767-81ce-ac575f898ea3"}, "visible": false, "formatter": {"type": "BasicTickFormatter", "id": "510a9de3-71c5-44b2-9a18-243f1adb8cb1"}, "axis_label": null, "plot": {"type": "Plot", "subtype": "Chart", "id": "b9c54aa0-57fd-46ff-ba9b-ff847481413f"}}}, {"type": "WheelZoomTool", "id": "15dfebcc-7d77-4839-b95e-2bbc2990c2b7", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "b9c54aa0-57fd-46ff-ba9b-ff847481413f"}}}, {"type": "PreviewSaveTool", "id": "4502b31c-657b-48f3-bc86-3ae8b8dde2b5", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "b9c54aa0-57fd-46ff-ba9b-ff847481413f"}}}, {"type": "ResetTool", "id": "9e66bc46-fe93-4a5f-907b-ba317ecbf498", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "b9c54aa0-57fd-46ff-ba9b-ff847481413f"}}}, {"type": "HelpTool", "id": "cad1c896-fb35-4d4c-9df6-d3b33afe6ae9", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "b9c54aa0-57fd-46ff-ba9b-ff847481413f"}}}, {"type": "AnnularWedge", "id": "36a47dfd-997f-4b76-b40e-14cef39f3098", "attributes": {"line_color": {"value": "White"}, "outer_radius": {"units": "data", "field": "outers"}, "y": {"value": 0}, "end_angle": {"units": "rad", "field": "end"}, "x": {"value": 0}, "start_angle": {"units": "rad", "field": "start"}, "inner_radius": {"units": "data", "field": "inners"}, "fill_color": {"field": "color"}, "fill_alpha": {"value": 0.8}}}, {"type": "BasicTicker", "id": "09c0b9eb-d711-4767-81ce-ac575f898ea3", "attributes": {}}, {"type": "GlyphRenderer", "id": "e30e9e17-02e4-49b4-ad88-db423e0c6c3d", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "e307c5ca-2515-46b9-ba9b-787950577ba8"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "AnnularWedge", "id": "36a47dfd-997f-4b76-b40e-14cef39f3098"}}}, {"type": "GlyphRenderer", "id": "ca6ca18f-6203-4175-a372-38a53494f928", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "6250c287-c1eb-4002-ae72-d8bb7ff13efa"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Text", "id": "4e207d1b-0fee-4435-aa61-6a350b43c6e1"}}}, {"type": "Range1d", "id": "3a21bcdc-2e0c-465d-9a74-fd3c31ebf53d", "attributes": {"start": -3.1500000000000004, "end": 3.1500000000000004, "callback": null}}, {"type": "BoxZoomTool", "id": "616bb8f0-4d1e-4d42-9f8f-df7e0f4b5ae6", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "ff2e3bb8-e652-4bb6-8e49-5a2aef0b3a16"}, "plot": {"type": "Plot", "subtype": "Chart", "id": "b9c54aa0-57fd-46ff-ba9b-ff847481413f"}}}, {"type": "Plot", "id": "b9c54aa0-57fd-46ff-ba9b-ff847481413f", "attributes": {"y_range": {"type": "Range1d", "id": "2bf712db-5571-47c0-84e3-34bb296fa127"}, "width": 400, "legend": null, "yscale": "auto", "tools": [{"type": "PanTool", "id": "3430355d-e53b-484f-abda-07210245922d"}, {"type": "WheelZoomTool", "id": "15dfebcc-7d77-4839-b95e-2bbc2990c2b7"}, {"type": "BoxZoomTool", "id": "616bb8f0-4d1e-4d42-9f8f-df7e0f4b5ae6"}, {"type": "PreviewSaveTool", "id": "4502b31c-657b-48f3-bc86-3ae8b8dde2b5"}, {"type": "ResizeTool", "id": "919910ba-8f36-499d-941f-d1cec075d076"}, {"type": "ResetTool", "id": "9e66bc46-fe93-4a5f-907b-ba317ecbf498"}, {"type": "HelpTool", "id": "cad1c896-fb35-4d4c-9df6-d3b33afe6ae9"}], "xgrid": false, "x_mapper_type": "auto", "left": [{"type": "LinearAxis", "id": "9730a07a-a571-429d-922b-90a2fb0d6dd6"}], "x_range": {"type": "Range1d", "id": "3a21bcdc-2e0c-465d-9a74-fd3c31ebf53d"}, "y_mapper_type": "auto", "ygrid": false, "xscale": "auto", "below": [{"type": "LinearAxis", "id": "a3531553-06a3-4bb4-82d7-ab4ca144721d"}], "title_text_font_size": {"value": "14pt"}, "tool_events": {"type": "ToolEvents", "id": "eba1c587-e028-4068-b673-9fffb2ab3103"}, "renderers": [{"type": "BoxAnnotation", "id": "ff2e3bb8-e652-4bb6-8e49-5a2aef0b3a16"}, {"type": "GlyphRenderer", "id": "e30e9e17-02e4-49b4-ad88-db423e0c6c3d"}, {"type": "GlyphRenderer", "id": "ca6ca18f-6203-4175-a372-38a53494f928"}, {"type": "LinearAxis", "id": "a3531553-06a3-4bb4-82d7-ab4ca144721d"}, {"type": "LinearAxis", "id": "9730a07a-a571-429d-922b-90a2fb0d6dd6"}]}, "subtype": "Chart"}, {"type": "BasicTickFormatter", "id": "510a9de3-71c5-44b2-9a18-243f1adb8cb1", "attributes": {}}, {"type": "LinearAxis", "id": "9730a07a-a571-429d-922b-90a2fb0d6dd6", "attributes": {"ticker": {"type": "BasicTicker", "id": "646e1999-8230-4663-8229-e287e12a7a27"}, "visible": false, "formatter": {"type": "BasicTickFormatter", "id": "be0d249d-62ce-4996-9ed6-e4c0dc4ff340"}, "axis_label": null, "plot": {"type": "Plot", "subtype": "Chart", "id": "b9c54aa0-57fd-46ff-ba9b-ff847481413f"}}}, {"type": "BasicTickFormatter", "id": "be0d249d-62ce-4996-9ed6-e4c0dc4ff340", "attributes": {}}, {"type": "ResizeTool", "id": "919910ba-8f36-499d-941f-d1cec075d076", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "b9c54aa0-57fd-46ff-ba9b-ff847481413f"}}}, {"type": "BoxAnnotation", "id": "ff2e3bb8-e652-4bb6-8e49-5a2aef0b3a16", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "Text", "id": "4e207d1b-0fee-4435-aa61-6a350b43c6e1", "attributes": {"text_align": "center", "text_font_size": {"value": "8pt"}, "angle": {"units": "rad", "field": "text_angle"}, "x": {"field": "x"}, "y": {"field": "y"}, "text_baseline": "middle"}}, {"type": "ColumnDataSource", "id": "e307c5ca-2515-46b9-ba9b-787950577ba8", "attributes": {"data": {"centers": [1.125, 2.25, 2.25, 2.25, 1.125, 2.25, 2.25, 2.25, 1.125, 2.25, 2.25, 2.25, 1.125, 2.25, 2.25, 2.25, 1.125, 2.25, 2.25, 2.25, 1.125, 2.25, 2.25, 2.25, 1.125, 2.25, 2.25, 2.25, 1.125, 2.25, 2.25, 2.25, 1.125, 2.25, 2.25, 2.25, 1.125, 2.25, 2.25, 2.25], "color": ["#f22c40", "#f22c40", "#f22c40", "#f22c40", "#5ab738", "#5ab738", "#5ab738", "#5ab738", "#407ee7", "#407ee7", "#407ee7", "#407ee7", "#df5320", "#df5320", "#df5320", "#df5320", "#00ad9c", "#00ad9c", "#00ad9c", "#00ad9c", "#c33ff3", "#c33ff3", "#c33ff3", "#c33ff3", "#f22c40", "#f22c40", "#f22c40", "#f22c40", "#5ab738", "#5ab738", "#5ab738", "#5ab738", "#407ee7", "#407ee7", "#407ee7", "#407ee7", "#df5320", "#df5320", "#df5320", "#df5320"], "inners": [0.0, 1.5, 1.5, 1.5, 0.0, 1.5, 1.5, 1.5, 0.0, 1.5, 1.5, 1.5, 0.0, 1.5, 1.5, 1.5, 0.0, 1.5, 1.5, 1.5, 0.0, 1.5, 1.5, 1.5, 0.0, 1.5, 1.5, 1.5, 0.0, 1.5, 1.5, 1.5, 0.0, 1.5, 1.5, 1.5, 0.0, 1.5, 1.5, 1.5], "outers": [1.5, 3.0, 3.0, 3.0, 1.5, 3.0, 3.0, 3.0, 1.5, 3.0, 3.0, 3.0, 1.5, 3.0, 3.0, 3.0, 1.5, 3.0, 3.0, 3.0, 1.5, 3.0, 3.0, 3.0, 1.5, 3.0, 3.0, 3.0, 1.5, 3.0, 3.0, 3.0, 1.5, 3.0, 3.0, 3.0, 1.5, 3.0, 3.0, 3.0], "values": [9, 1, 2, 6, 16, 4, 4, 8, 10, 1, 6, 3, 15, 4, 8, 3, 10, 5, 3, 2, 20, 8, 6, 6, 19, 7, 8, 4, 21, 7, 6, 8, 9, 2, 2, 5, 20, 10, 6, 4], "abbr_medal": [["AUT", ""], ["AUT", "bronze"], ["AUT", "gold"], ["AUT", "silver"], ["CAN", ""], ["CAN", "bronze"], ["CAN", "gold"], ["CAN", "silver"], ["CHE", ""], ["CHE", "bronze"], ["CHE", "gold"], ["CHE", "silver"], ["DEU", ""], ["DEU", "bronze"], ["DEU", "gold"], ["DEU", "silver"], ["FRA", ""], ["FRA", "bronze"], ["FRA", "gold"], ["FRA", "silver"], ["NLD", ""], ["NLD", "bronze"], ["NLD", "gold"], ["NLD", "silver"], ["NOR", ""], ["NOR", "bronze"], ["NOR", "gold"], ["NOR", "silver"], ["RUS", ""], ["RUS", "bronze"], ["RUS", "gold"], ["RUS", "silver"], ["SWE", ""], ["SWE", "bronze"], ["SWE", "gold"], ["SWE", "silver"], ["USA", ""], ["USA", "bronze"], ["USA", "gold"], ["USA", "silver"]], "start": [0.0, 0.0, 0.04216902890724555, 0.12650708672173663, 0.37952126016520993, 0.37952126016520993, 0.5481973757941921, 0.7168734914231744, 1.0542257226811387, 1.0542257226811387, 1.0963947515883843, 1.3494089250318575, 1.475916011753594, 1.475916011753594, 1.6445921273825763, 1.9819443586405407, 2.1084514453622774, 2.1084514453622774, 2.319296589898505, 2.445803676620242, 2.530141734434733, 2.530141734434733, 2.8674939656926974, 3.1205081391361706, 3.373522312579644, 3.373522312579644, 3.6687055149303625, 4.006057746188326, 4.174733861817309, 4.174733861817309, 4.469917064168028, 4.722931237611501, 5.060283468869465, 5.060283468869465, 5.144621526683956, 5.228959584498447, 5.439804729034675, 5.439804729034674, 5.86149501810713, 6.114509191550603], "end": [0.37952126016520993, 0.04216902890724555, 0.12650708672173663, 0.37952126016520993, 1.0542257226811387, 0.5481973757941921, 0.7168734914231744, 1.0542257226811387, 1.475916011753594, 1.0963947515883843, 1.3494089250318575, 1.475916011753594, 2.1084514453622774, 1.6445921273825763, 1.9819443586405407, 2.1084514453622774, 2.530141734434733, 2.319296589898505, 2.445803676620242, 2.530141734434733, 3.373522312579644, 2.8674939656926974, 3.1205081391361706, 3.373522312579644, 4.174733861817309, 3.6687055149303625, 4.006057746188326, 4.174733861817309, 5.060283468869465, 4.469917064168028, 4.722931237611501, 5.060283468869465, 5.439804729034675, 5.144621526683956, 5.228959584498447, 5.439804729034674, 6.283185307179586, 5.86149501810713, 6.114509191550603, 6.283185307179585], "level": [0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0]}, "column_names": ["inners", "centers", "outers", "abbr_medal", "values", "start", "end", "color", "level"], "callback": null}}, {"type": "Range1d", "id": "2bf712db-5571-47c0-84e3-34bb296fa127", "attributes": {"start": -3.1500000000000004, "end": 3.1500000000000004, "callback": null}}, {"type": "ColumnDataSource", "id": "6250c287-c1eb-4002-ae72-d8bb7ff13efa", "attributes": {"data": {"text_angle": [0.0, 0.021084514453622773, 0.0843380578144911, 0.25301417344347327, 0.0, 0.46385931797970104, 0.6325354336086833, 0.8855496070521565, 0.0, 1.0753102371347616, 1.222901838310121, 1.4126624683927258, 0.0, 1.560254069568085, 4.954860896601351, 5.186790555591202, 0.0, 5.355466671220184, 5.524142786849167, 5.62956535911728, 0.0, 5.840410503653509, 6.135593706004228, 6.388607879447701, 0.0, 6.662706567344796, 6.978974284149137, 7.23198845759261, 0.0, 7.4639181165824615, 7.738016804479558, 4.891607353240483, 0.0, 5.10245249777671, 5.186790555591202, 5.33438215676656, 0.0, 5.650649873570902, 5.988002104828866, 6.198847249365095], "x": [1.104805590886699, 2.249499892184141, 2.2420027205170387, 2.178365181744732, 0.8480965760393239, 2.012248106600736, 1.8146951444761354, 1.4239441276355629, 0.33860820772678335, 1.069783512354476, 0.767068174776323, 0.35432015483704005, -0.24703129626183343, 0.023719639391054256, -0.5402316686595636, -1.0278139286434214, -0.7656082347002524, -1.3492377266828857, -1.632364439995781, -1.7862476490719368, -1.104805590886699, -2.0330241374833724, -2.2255382623177966, -2.2375084170483754, -0.907347572238068, -2.0898947329938067, -1.7269834802180628, -1.3109764694102914, -0.10658027550270278, -0.8555561148769509, -0.2603364557048132, 0.40108616972985656, 0.5761387742118242, 0.8555561148769484, 1.0278139286434202, 1.3109764694102874, 1.0264482036225655, 1.8146951444761346, 2.1526849395915697, 2.2420027205170387], "text": ["AUT", "bronze", "gold", "silver", "CAN", "bronze", "gold", "silver", "CHE", "bronze", "gold", "silver", "DEU", "bronze", "gold", "silver", "FRA", "bronze", "gold", "silver", "NLD", "bronze", "gold", "silver", "NOR", "bronze", "gold", "silver", "RUS", "bronze", "gold", "silver", "SWE", "bronze", "gold", "silver", "USA", "bronze", "gold", "silver"], "y": [0.21220180570742547, 0.04743664262507488, 0.18953575175727672, 0.5632274273881197, 0.7391597917300259, 1.0066566234231777, 1.3301810149805693, 1.7420915938526873, 1.0728324574042563, 1.9794098202985961, 2.11520836213488, 2.221926467702353, 1.0975429552720013, 2.2498749695721223, 2.184181710430088, 2.0015240513385235, 0.8242991149814265, 1.8005714528714485, 1.5485110057849962, 1.3681444865894021, 0.21220180570742506, 0.9640087429115931, 0.3308767791179714, -0.23676165998250986, -0.6650905074902843, -0.8335706358820144, -1.4422302378794822, -1.8286171542049274, -1.1199400184267763, -2.0809910461836827, -2.234888124678964, -2.213962484878963, -0.9662758989283012, -2.0809910461836836, -2.001524051338524, -1.82861715420493, -0.46046616084138936, -1.3301810149805708, -0.6545590507017991, -0.18953575175727858]}, "column_names": ["text_angle", "x", "text", "y"], "callback": null}}], "root_ids": ["b9c54aa0-57fd-46ff-ba9b-ff847481413f"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "43f54c33-062c-4cda-b0ab-d7bbd0f0c882", "modelid": "b9c54aa0-57fd-46ff-ba9b-ff847481413f", "elementid": "1ca06e73-d420-4e8b-87f7-694562d207f6"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.css");
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