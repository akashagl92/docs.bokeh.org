
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
  };var element = document.getElementById("49c4b2c6-a154-44aa-8461-e9daa060ca49");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '49c4b2c6-a154-44aa-8461-e9daa060ca49' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"6fea454e-8202-4756-84ec-3084a46bc237":{"roots":{"references":[{"attributes":{},"id":"874d1442-33c6-43df-ba0d-5bdeaf1825e4","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":["None"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[9.0],"line_alpha":[1.0],"line_color":["black"],"width":[43.2],"x":["433.5"],"y":[4.5]}},"id":"0febb11c-a86e-46d6-a558-68690d53e557","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5f220454-c813-4706-9478-7c9d86e842de","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"269e54b1-cb8b-4e11-94a1-61b535ab983a","type":"Rect"},{"attributes":{"data_source":{"id":"3d7c2d45-5b59-45e7-827d-e0b42f8afe7f","type":"ColumnDataSource"},"glyph":{"id":"0e9a2412-9bd5-4e14-a08a-b9109248fa8e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d87aa392-3618-430d-a2fd-c2dda01d918a","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"0febb11c-a86e-46d6-a558-68690d53e557","type":"ColumnDataSource"},"glyph":{"id":"a205a1fa-6345-4107-94f7-f5e50dc5811d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d24e5dc6-80a4-48fd-9d79-728c5782da53","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":["None"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[18.0],"line_alpha":[1.0],"line_color":["black"],"width":[43.2],"x":["175.5"],"y":[9.0]}},"id":"3d7c2d45-5b59-45e7-827d-e0b42f8afe7f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7f79f5b6-5ee6-4a5f-aa47-856ae4ddbb30","type":"ColumnDataSource"},"glyph":{"id":"8bf7d252-37c2-4248-bf47-fb0638c2ddce","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e84466cb-f3b3-425e-802c-eb649259432e","type":"GlyphRenderer"},{"attributes":{"axis_label":"Count( Displ )","formatter":{"id":"874d1442-33c6-43df-ba0d-5bdeaf1825e4","type":"BasicTickFormatter"},"plot":{"id":"7f2d4324-26fa-495d-9f12-9a6537c59bfb","subtype":"Chart","type":"Plot"},"ticker":{"id":"fb29838c-65e2-4046-b680-1c381fb87c26","type":"BasicTicker"}},"id":"45b9a831-4242-4dc6-9f45-585035a3cc50","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":["None"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[44.0],"line_alpha":[1.0],"line_color":["black"],"width":[43.2],"x":["218.5"],"y":[22.0]}},"id":"6f2848c5-1176-4a41-b4ae-956710dcb269","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"cebca4b3-bab5-4649-adec-d37066fdffb0","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8bf7d252-37c2-4248-bf47-fb0638c2ddce","type":"Rect"},{"attributes":{"plot":{"id":"7f2d4324-26fa-495d-9f12-9a6537c59bfb","subtype":"Chart","type":"Plot"}},"id":"7ed55d24-7c7a-4d39-9663-fc5d890030f8","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":["None"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[42.0],"line_alpha":[1.0],"line_color":["black"],"width":[43.2],"x":["304.5"],"y":[21.0]}},"id":"76c81c3e-9731-431d-915a-46ca24d9f06d","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":["None"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[31.0],"line_alpha":[1.0],"line_color":["black"],"width":[43.2],"x":["347.5"],"y":[15.5]}},"id":"05656b11-47d2-4702-9140-152108375220","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"254fec7f-da15-4aec-8c27-3f861b1d6a8f","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":["None"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[28.0],"line_alpha":[1.0],"line_color":["black"],"width":[43.2],"x":["261.5"],"y":[14.0]}},"id":"1d1b871f-31f9-4035-b3da-07c8855a5421","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":["None"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[16.0],"line_alpha":[1.0],"line_color":["black"],"width":[43.2],"x":["390.5"],"y":[8.0]}},"id":"b367a959-53ba-4d6d-a974-aa694c26dc75","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a205a1fa-6345-4107-94f7-f5e50dc5811d","type":"Rect"},{"attributes":{"plot":{"id":"7f2d4324-26fa-495d-9f12-9a6537c59bfb","subtype":"Chart","type":"Plot"}},"id":"73907370-0a72-4074-88cc-7045628598a5","type":"PreviewSaveTool"},{"attributes":{"axis_label":"displ","formatter":{"id":"a572a879-f5a3-4d9a-98e4-6cba64ee11e6","type":"BasicTickFormatter"},"plot":{"id":"7f2d4324-26fa-495d-9f12-9a6537c59bfb","subtype":"Chart","type":"Plot"},"ticker":{"id":"31418e4b-06f8-4dee-b0ff-905c9deb27d5","type":"BasicTicker"}},"id":"0b363119-4b94-4692-b97f-55a7856a77f1","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"7f2d4324-26fa-495d-9f12-9a6537c59bfb","subtype":"Chart","type":"Plot"},"ticker":{"id":"fb29838c-65e2-4046-b680-1c381fb87c26","type":"BasicTicker"}},"id":"8c1aa8ef-0c9b-419d-914f-63eb9dc5285d","type":"Grid"},{"attributes":{"data_source":{"id":"1d1b871f-31f9-4035-b3da-07c8855a5421","type":"ColumnDataSource"},"glyph":{"id":"5f220454-c813-4706-9478-7c9d86e842de","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"42566188-2aa9-4214-ac76-90118da6aec6","type":"GlyphRenderer"},{"attributes":{},"id":"4c17cb5a-095c-422f-8ab0-5a45e9275c82","type":"ToolEvents"},{"attributes":{"data_source":{"id":"b367a959-53ba-4d6d-a974-aa694c26dc75","type":"ColumnDataSource"},"glyph":{"id":"b7118e9a-feba-4e97-a36f-e834ee66c215","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8de21168-6bba-4fc2-8ab4-8a941acd27d0","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"76c81c3e-9731-431d-915a-46ca24d9f06d","type":"ColumnDataSource"},"glyph":{"id":"cebca4b3-bab5-4649-adec-d37066fdffb0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7a58b4b0-b8b7-44ae-b156-8698d8d886d0","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":481.24,"start":41.55999999999999},"id":"780dd65e-7563-43bd-b185-11bd66fe8442","type":"Range1d"},{"attributes":{"plot":{"id":"7f2d4324-26fa-495d-9f12-9a6537c59bfb","subtype":"Chart","type":"Plot"}},"id":"812bde46-709d-4e90-b592-8c4e3adf9076","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a992e2e1-ea6c-41a9-8994-b029d59ea03b","type":"Rect"},{"attributes":{"data_source":{"id":"05656b11-47d2-4702-9140-152108375220","type":"ColumnDataSource"},"glyph":{"id":"a992e2e1-ea6c-41a9-8994-b029d59ea03b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"80bdeae6-00ad-4c92-8405-55e1cc669883","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"7f2d4324-26fa-495d-9f12-9a6537c59bfb","subtype":"Chart","type":"Plot"}},"id":"c29bbf98-96b5-419d-b8fa-ada3f63c8c13","type":"ResizeTool"},{"attributes":{"data_source":{"id":"6f2848c5-1176-4a41-b4ae-956710dcb269","type":"ColumnDataSource"},"glyph":{"id":"269e54b1-cb8b-4e11-94a1-61b535ab983a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c5d3515a-5cc0-4383-a17b-800dd1f0747b","type":"GlyphRenderer"},{"attributes":{},"id":"a572a879-f5a3-4d9a-98e4-6cba64ee11e6","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b7118e9a-feba-4e97-a36f-e834ee66c215","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0e9a2412-9bd5-4e14-a08a-b9109248fa8e","type":"Rect"},{"attributes":{"plot":{"id":"7f2d4324-26fa-495d-9f12-9a6537c59bfb","subtype":"Chart","type":"Plot"}},"id":"a02adcba-269b-4025-9ea0-561305291be4","type":"PanTool"},{"attributes":{"plot":{"id":"7f2d4324-26fa-495d-9f12-9a6537c59bfb","subtype":"Chart","type":"Plot"}},"id":"9c5d80b9-5dac-4a5f-a1a3-d303522d5c88","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":["None"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[116.0],"line_alpha":[1.0],"line_color":["black"],"width":[43.2],"x":["89.3"],"y":[58.0]}},"id":"2db9fae7-591e-4dd3-9e8f-71e1bc18bb3f","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":127.60000000000001},"id":"f2bca44d-57cd-48b1-81af-14a125419000","type":"Range1d"},{"attributes":{},"id":"fb29838c-65e2-4046-b680-1c381fb87c26","type":"BasicTicker"},{"attributes":{"data_source":{"id":"2db9fae7-591e-4dd3-9e8f-71e1bc18bb3f","type":"ColumnDataSource"},"glyph":{"id":"71e915ae-a522-4647-83db-f6788f321d2a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0baf1962-93e7-4bc7-8908-29c57edb06d9","type":"GlyphRenderer"},{"attributes":{},"id":"31418e4b-06f8-4dee-b0ff-905c9deb27d5","type":"BasicTicker"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"71e915ae-a522-4647-83db-f6788f321d2a","type":"Rect"},{"attributes":{"overlay":{"id":"254fec7f-da15-4aec-8c27-3f861b1d6a8f","type":"BoxAnnotation"},"plot":{"id":"7f2d4324-26fa-495d-9f12-9a6537c59bfb","subtype":"Chart","type":"Plot"}},"id":"0066c7bc-18d1-4a41-8e99-c5983216f211","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"0b363119-4b94-4692-b97f-55a7856a77f1","type":"LinearAxis"}],"left":[{"id":"45b9a831-4242-4dc6-9f45-585035a3cc50","type":"LinearAxis"}],"legend":null,"plot_height":400,"plot_width":400,"renderers":[{"id":"254fec7f-da15-4aec-8c27-3f861b1d6a8f","type":"BoxAnnotation"},{"id":"0baf1962-93e7-4bc7-8908-29c57edb06d9","type":"GlyphRenderer"},{"id":"e84466cb-f3b3-425e-802c-eb649259432e","type":"GlyphRenderer"},{"id":"d87aa392-3618-430d-a2fd-c2dda01d918a","type":"GlyphRenderer"},{"id":"c5d3515a-5cc0-4383-a17b-800dd1f0747b","type":"GlyphRenderer"},{"id":"42566188-2aa9-4214-ac76-90118da6aec6","type":"GlyphRenderer"},{"id":"7a58b4b0-b8b7-44ae-b156-8698d8d886d0","type":"GlyphRenderer"},{"id":"80bdeae6-00ad-4c92-8405-55e1cc669883","type":"GlyphRenderer"},{"id":"8de21168-6bba-4fc2-8ab4-8a941acd27d0","type":"GlyphRenderer"},{"id":"d24e5dc6-80a4-48fd-9d79-728c5782da53","type":"GlyphRenderer"},{"id":"0b363119-4b94-4692-b97f-55a7856a77f1","type":"LinearAxis"},{"id":"45b9a831-4242-4dc6-9f45-585035a3cc50","type":"LinearAxis"},{"id":"8c1aa8ef-0c9b-419d-914f-63eb9dc5285d","type":"Grid"}],"title":"DISPL Distribution","title_text_font_size":{"value":"14pt"},"tool_events":{"id":"4c17cb5a-095c-422f-8ab0-5a45e9275c82","type":"ToolEvents"},"tools":[{"id":"a02adcba-269b-4025-9ea0-561305291be4","type":"PanTool"},{"id":"812bde46-709d-4e90-b592-8c4e3adf9076","type":"WheelZoomTool"},{"id":"0066c7bc-18d1-4a41-8e99-c5983216f211","type":"BoxZoomTool"},{"id":"73907370-0a72-4074-88cc-7045628598a5","type":"PreviewSaveTool"},{"id":"c29bbf98-96b5-419d-b8fa-ada3f63c8c13","type":"ResizeTool"},{"id":"9c5d80b9-5dac-4a5f-a1a3-d303522d5c88","type":"ResetTool"},{"id":"7ed55d24-7c7a-4d39-9663-fc5d890030f8","type":"HelpTool"}],"x_mapper_type":"auto","x_range":{"id":"780dd65e-7563-43bd-b185-11bd66fe8442","type":"Range1d"},"xgrid":false,"xscale":"auto","y_mapper_type":"auto","y_range":{"id":"f2bca44d-57cd-48b1-81af-14a125419000","type":"Range1d"},"yscale":"auto"},"id":"7f2d4324-26fa-495d-9f12-9a6537c59bfb","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":["None"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[88.0],"line_alpha":[1.0],"line_color":["black"],"width":[43.2],"x":["132.5"],"y":[44.0]}},"id":"7f79f5b6-5ee6-4a5f-aa47-856ae4ddbb30","type":"ColumnDataSource"}],"root_ids":["7f2d4324-26fa-495d-9f12-9a6537c59bfb"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"6fea454e-8202-4756-84ec-3084a46bc237","elementid":"49c4b2c6-a154-44aa-8461-e9daa060ca49","modelid":"7f2d4324-26fa-495d-9f12-9a6537c59bfb"}];
          
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