
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
  };var element = document.getElementById("20e21ca1-89ad-4834-bd8e-af1f763a4c1e");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '20e21ca1-89ad-4834-bd8e-af1f763a4c1e' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"45c76efa-69ee-4a34-8574-5fde3f19acb6": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BasicTickFormatter", "id": "a28d209e-9919-42ec-a098-c447a64bb15d", "attributes": {}}, {"type": "LinearAxis", "id": "dddb2d0f-7182-4248-8018-6d13ff5a489f", "attributes": {"ticker": {"type": "BasicTicker", "id": "7048dbcf-ca26-4d00-9dc5-279b904ddc01"}, "visible": false, "formatter": {"type": "BasicTickFormatter", "id": "a28d209e-9919-42ec-a098-c447a64bb15d"}, "axis_label": null, "plot": {"type": "Plot", "subtype": "Chart", "id": "72cb31d0-4cfd-4ff0-8f4d-fd052f72a046"}}}, {"type": "WheelZoomTool", "id": "f9dafe1f-66db-4f73-853b-74b0f9419784", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "72cb31d0-4cfd-4ff0-8f4d-fd052f72a046"}}}, {"type": "ResetTool", "id": "7177215b-1a8f-453f-beea-7c0cbc500e18", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "72cb31d0-4cfd-4ff0-8f4d-fd052f72a046"}}}, {"type": "GlyphRenderer", "id": "a3f84331-0250-4933-8a86-54d1bb8dd10b", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "7076f94b-269a-4518-aa93-265e9b9883c9"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Text", "id": "339106d4-1ffc-4b1c-acc0-4ab2c5b7be19"}}}, {"type": "Plot", "id": "72cb31d0-4cfd-4ff0-8f4d-fd052f72a046", "attributes": {"y_range": {"type": "Range1d", "id": "120d48c3-a8d0-47b1-83a8-179a70ffbbe8"}, "width": 400, "legend": null, "yscale": "auto", "tools": [{"type": "PanTool", "id": "a796e99c-1267-4247-943f-2f57d8bba35d"}, {"type": "WheelZoomTool", "id": "f9dafe1f-66db-4f73-853b-74b0f9419784"}, {"type": "BoxZoomTool", "id": "f83348d6-120c-490c-ba7e-04e7594f3fcb"}, {"type": "PreviewSaveTool", "id": "0c4e3b9d-d323-4c27-88e1-9cfcafadde86"}, {"type": "ResizeTool", "id": "3e134de7-c334-4a3c-822c-b88c982df342"}, {"type": "ResetTool", "id": "7177215b-1a8f-453f-beea-7c0cbc500e18"}, {"type": "HelpTool", "id": "cab9b673-7fac-4102-b59f-af1baf9958a6"}], "xgrid": false, "x_mapper_type": "auto", "left": [{"type": "LinearAxis", "id": "ef8522f3-f277-4b37-82a8-0948c5f0f2cc"}], "x_range": {"type": "Range1d", "id": "3eb6d48a-18e6-40c1-820a-57a6fd09a3da"}, "y_mapper_type": "auto", "ygrid": false, "xscale": "auto", "below": [{"type": "LinearAxis", "id": "dddb2d0f-7182-4248-8018-6d13ff5a489f"}], "title_text_font_size": {"value": "14pt"}, "tool_events": {"type": "ToolEvents", "id": "e3ff2c7d-200d-49e6-b0f5-f27238d37ca2"}, "renderers": [{"type": "BoxAnnotation", "id": "e8ab4d95-0c93-4136-8f1c-6cc6cfa60f63"}, {"type": "GlyphRenderer", "id": "e74b3fe5-ea7c-400f-8cdc-df4b22c9a56a"}, {"type": "GlyphRenderer", "id": "a3f84331-0250-4933-8a86-54d1bb8dd10b"}, {"type": "LinearAxis", "id": "dddb2d0f-7182-4248-8018-6d13ff5a489f"}, {"type": "LinearAxis", "id": "ef8522f3-f277-4b37-82a8-0948c5f0f2cc"}]}, "subtype": "Chart"}, {"type": "PreviewSaveTool", "id": "0c4e3b9d-d323-4c27-88e1-9cfcafadde86", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "72cb31d0-4cfd-4ff0-8f4d-fd052f72a046"}}}, {"type": "BasicTicker", "id": "7048dbcf-ca26-4d00-9dc5-279b904ddc01", "attributes": {}}, {"type": "BoxZoomTool", "id": "f83348d6-120c-490c-ba7e-04e7594f3fcb", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "e8ab4d95-0c93-4136-8f1c-6cc6cfa60f63"}, "plot": {"type": "Plot", "subtype": "Chart", "id": "72cb31d0-4cfd-4ff0-8f4d-fd052f72a046"}}}, {"type": "ColumnDataSource", "id": "7076f94b-269a-4518-aa93-265e9b9883c9", "attributes": {"data": {"text_angle": [0.0, 0.021084514453622773, 0.0843380578144911, 0.25301417344347327, 0.0, 0.46385931797970104, 0.6325354336086833, 0.8855496070521565, 0.0, 1.0753102371347616, 1.222901838310121, 1.4126624683927258, 0.0, 1.560254069568085, 4.954860896601351, 5.186790555591202, 0.0, 5.355466671220184, 5.524142786849167, 5.62956535911728, 0.0, 5.840410503653509, 6.135593706004228, 6.388607879447701, 0.0, 6.662706567344796, 6.978974284149137, 7.23198845759261, 0.0, 7.4639181165824615, 7.738016804479558, 4.891607353240483, 0.0, 5.10245249777671, 5.186790555591202, 5.33438215676656, 0.0, 5.650649873570902, 5.988002104828866, 6.198847249365095], "x": [1.104805590886699, 2.249499892184141, 2.2420027205170387, 2.178365181744732, 0.8480965760393239, 2.012248106600736, 1.8146951444761354, 1.4239441276355629, 0.33860820772678335, 1.069783512354476, 0.767068174776323, 0.35432015483704005, -0.24703129626183343, 0.023719639391054256, -0.5402316686595636, -1.0278139286434214, -0.7656082347002524, -1.3492377266828857, -1.632364439995781, -1.7862476490719368, -1.104805590886699, -2.0330241374833724, -2.2255382623177966, -2.2375084170483754, -0.907347572238068, -2.0898947329938067, -1.7269834802180628, -1.3109764694102914, -0.10658027550270278, -0.8555561148769509, -0.2603364557048132, 0.40108616972985656, 0.5761387742118242, 0.8555561148769484, 1.0278139286434202, 1.3109764694102874, 1.0264482036225655, 1.8146951444761346, 2.1526849395915697, 2.2420027205170387], "text": ["AUT", "bronze", "gold", "silver", "CAN", "bronze", "gold", "silver", "CHE", "bronze", "gold", "silver", "DEU", "bronze", "gold", "silver", "FRA", "bronze", "gold", "silver", "NLD", "bronze", "gold", "silver", "NOR", "bronze", "gold", "silver", "RUS", "bronze", "gold", "silver", "SWE", "bronze", "gold", "silver", "USA", "bronze", "gold", "silver"], "y": [0.21220180570742547, 0.04743664262507488, 0.18953575175727672, 0.5632274273881197, 0.7391597917300259, 1.0066566234231777, 1.3301810149805693, 1.7420915938526873, 1.0728324574042563, 1.9794098202985961, 2.11520836213488, 2.221926467702353, 1.0975429552720013, 2.2498749695721223, 2.184181710430088, 2.0015240513385235, 0.8242991149814265, 1.8005714528714485, 1.5485110057849962, 1.3681444865894021, 0.21220180570742506, 0.9640087429115931, 0.3308767791179714, -0.23676165998250986, -0.6650905074902843, -0.8335706358820144, -1.4422302378794822, -1.8286171542049274, -1.1199400184267763, -2.0809910461836827, -2.234888124678964, -2.213962484878963, -0.9662758989283012, -2.0809910461836836, -2.001524051338524, -1.82861715420493, -0.46046616084138936, -1.3301810149805708, -0.6545590507017991, -0.18953575175727858]}, "column_names": ["text_angle", "x", "text", "y"], "callback": null}}, {"type": "ResizeTool", "id": "3e134de7-c334-4a3c-822c-b88c982df342", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "72cb31d0-4cfd-4ff0-8f4d-fd052f72a046"}}}, {"type": "LinearAxis", "id": "ef8522f3-f277-4b37-82a8-0948c5f0f2cc", "attributes": {"ticker": {"type": "BasicTicker", "id": "952f4be3-4daf-44c2-9b47-716771547a61"}, "visible": false, "formatter": {"type": "BasicTickFormatter", "id": "a55e6d0a-08f9-4f38-abfe-f5d082a7b455"}, "axis_label": null, "plot": {"type": "Plot", "subtype": "Chart", "id": "72cb31d0-4cfd-4ff0-8f4d-fd052f72a046"}}}, {"type": "Range1d", "id": "120d48c3-a8d0-47b1-83a8-179a70ffbbe8", "attributes": {"start": -3.1500000000000004, "end": 3.1500000000000004, "callback": null}}, {"type": "Text", "id": "339106d4-1ffc-4b1c-acc0-4ab2c5b7be19", "attributes": {"text_align": "center", "text_font_size": {"value": "8pt"}, "angle": {"units": "rad", "field": "text_angle"}, "x": {"field": "x"}, "y": {"field": "y"}, "text_baseline": "middle"}}, {"type": "BasicTickFormatter", "id": "a55e6d0a-08f9-4f38-abfe-f5d082a7b455", "attributes": {}}, {"type": "ColumnDataSource", "id": "bf58ae8e-87c5-4e3d-bb04-50a657dc8912", "attributes": {"data": {"centers": [1.125, 2.25, 2.25, 2.25, 1.125, 2.25, 2.25, 2.25, 1.125, 2.25, 2.25, 2.25, 1.125, 2.25, 2.25, 2.25, 1.125, 2.25, 2.25, 2.25, 1.125, 2.25, 2.25, 2.25, 1.125, 2.25, 2.25, 2.25, 1.125, 2.25, 2.25, 2.25, 1.125, 2.25, 2.25, 2.25, 1.125, 2.25, 2.25, 2.25], "color": ["#f22c40", "#f22c40", "#f22c40", "#f22c40", "#5ab738", "#5ab738", "#5ab738", "#5ab738", "#407ee7", "#407ee7", "#407ee7", "#407ee7", "#df5320", "#df5320", "#df5320", "#df5320", "#00ad9c", "#00ad9c", "#00ad9c", "#00ad9c", "#c33ff3", "#c33ff3", "#c33ff3", "#c33ff3", "#f22c40", "#f22c40", "#f22c40", "#f22c40", "#5ab738", "#5ab738", "#5ab738", "#5ab738", "#407ee7", "#407ee7", "#407ee7", "#407ee7", "#df5320", "#df5320", "#df5320", "#df5320"], "inners": [0.0, 1.5, 1.5, 1.5, 0.0, 1.5, 1.5, 1.5, 0.0, 1.5, 1.5, 1.5, 0.0, 1.5, 1.5, 1.5, 0.0, 1.5, 1.5, 1.5, 0.0, 1.5, 1.5, 1.5, 0.0, 1.5, 1.5, 1.5, 0.0, 1.5, 1.5, 1.5, 0.0, 1.5, 1.5, 1.5, 0.0, 1.5, 1.5, 1.5], "outers": [1.5, 3.0, 3.0, 3.0, 1.5, 3.0, 3.0, 3.0, 1.5, 3.0, 3.0, 3.0, 1.5, 3.0, 3.0, 3.0, 1.5, 3.0, 3.0, 3.0, 1.5, 3.0, 3.0, 3.0, 1.5, 3.0, 3.0, 3.0, 1.5, 3.0, 3.0, 3.0, 1.5, 3.0, 3.0, 3.0, 1.5, 3.0, 3.0, 3.0], "values": [9, 1, 2, 6, 16, 4, 4, 8, 10, 1, 6, 3, 15, 4, 8, 3, 10, 5, 3, 2, 20, 8, 6, 6, 19, 7, 8, 4, 21, 7, 6, 8, 9, 2, 2, 5, 20, 10, 6, 4], "abbr_medal": [["AUT", ""], ["AUT", "bronze"], ["AUT", "gold"], ["AUT", "silver"], ["CAN", ""], ["CAN", "bronze"], ["CAN", "gold"], ["CAN", "silver"], ["CHE", ""], ["CHE", "bronze"], ["CHE", "gold"], ["CHE", "silver"], ["DEU", ""], ["DEU", "bronze"], ["DEU", "gold"], ["DEU", "silver"], ["FRA", ""], ["FRA", "bronze"], ["FRA", "gold"], ["FRA", "silver"], ["NLD", ""], ["NLD", "bronze"], ["NLD", "gold"], ["NLD", "silver"], ["NOR", ""], ["NOR", "bronze"], ["NOR", "gold"], ["NOR", "silver"], ["RUS", ""], ["RUS", "bronze"], ["RUS", "gold"], ["RUS", "silver"], ["SWE", ""], ["SWE", "bronze"], ["SWE", "gold"], ["SWE", "silver"], ["USA", ""], ["USA", "bronze"], ["USA", "gold"], ["USA", "silver"]], "start": [0.0, 0.0, 0.04216902890724555, 0.12650708672173663, 0.37952126016520993, 0.37952126016520993, 0.5481973757941921, 0.7168734914231744, 1.0542257226811387, 1.0542257226811387, 1.0963947515883843, 1.3494089250318575, 1.475916011753594, 1.475916011753594, 1.6445921273825763, 1.9819443586405407, 2.1084514453622774, 2.1084514453622774, 2.319296589898505, 2.445803676620242, 2.530141734434733, 2.530141734434733, 2.8674939656926974, 3.1205081391361706, 3.373522312579644, 3.373522312579644, 3.6687055149303625, 4.006057746188326, 4.174733861817309, 4.174733861817309, 4.469917064168028, 4.722931237611501, 5.060283468869465, 5.060283468869465, 5.144621526683956, 5.228959584498447, 5.439804729034675, 5.439804729034674, 5.86149501810713, 6.114509191550603], "end": [0.37952126016520993, 0.04216902890724555, 0.12650708672173663, 0.37952126016520993, 1.0542257226811387, 0.5481973757941921, 0.7168734914231744, 1.0542257226811387, 1.475916011753594, 1.0963947515883843, 1.3494089250318575, 1.475916011753594, 2.1084514453622774, 1.6445921273825763, 1.9819443586405407, 2.1084514453622774, 2.530141734434733, 2.319296589898505, 2.445803676620242, 2.530141734434733, 3.373522312579644, 2.8674939656926974, 3.1205081391361706, 3.373522312579644, 4.174733861817309, 3.6687055149303625, 4.006057746188326, 4.174733861817309, 5.060283468869465, 4.469917064168028, 4.722931237611501, 5.060283468869465, 5.439804729034675, 5.144621526683956, 5.228959584498447, 5.439804729034674, 6.283185307179586, 5.86149501810713, 6.114509191550603, 6.283185307179585], "level": [0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0]}, "column_names": ["inners", "centers", "outers", "abbr_medal", "values", "start", "end", "color", "level"], "callback": null}}, {"type": "GlyphRenderer", "id": "e74b3fe5-ea7c-400f-8cdc-df4b22c9a56a", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "bf58ae8e-87c5-4e3d-bb04-50a657dc8912"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "AnnularWedge", "id": "a0c1c553-d7f2-4cac-917c-41bc40e5f03d"}}}, {"type": "BasicTicker", "id": "952f4be3-4daf-44c2-9b47-716771547a61", "attributes": {}}, {"type": "PanTool", "id": "a796e99c-1267-4247-943f-2f57d8bba35d", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "72cb31d0-4cfd-4ff0-8f4d-fd052f72a046"}}}, {"type": "HelpTool", "id": "cab9b673-7fac-4102-b59f-af1baf9958a6", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "72cb31d0-4cfd-4ff0-8f4d-fd052f72a046"}}}, {"type": "AnnularWedge", "id": "a0c1c553-d7f2-4cac-917c-41bc40e5f03d", "attributes": {"line_color": {"value": "White"}, "outer_radius": {"units": "data", "field": "outers"}, "y": {"value": 0}, "end_angle": {"units": "rad", "field": "end"}, "x": {"value": 0}, "start_angle": {"units": "rad", "field": "start"}, "inner_radius": {"units": "data", "field": "inners"}, "fill_color": {"field": "color"}, "fill_alpha": {"value": 0.8}}}, {"type": "Range1d", "id": "3eb6d48a-18e6-40c1-820a-57a6fd09a3da", "attributes": {"start": -3.1500000000000004, "end": 3.1500000000000004, "callback": null}}, {"type": "ToolEvents", "id": "e3ff2c7d-200d-49e6-b0f5-f27238d37ca2", "attributes": {}}, {"type": "BoxAnnotation", "id": "e8ab4d95-0c93-4136-8f1c-6cc6cfa60f63", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}], "root_ids": ["72cb31d0-4cfd-4ff0-8f4d-fd052f72a046"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "45c76efa-69ee-4a34-8574-5fde3f19acb6", "modelid": "72cb31d0-4cfd-4ff0-8f4d-fd052f72a046", "elementid": "20e21ca1-89ad-4834-bd8e-af1f763a4c1e"}];
          
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