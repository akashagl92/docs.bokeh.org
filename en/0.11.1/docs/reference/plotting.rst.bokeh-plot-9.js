
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
  };var element = document.getElementById("7236b4f0-5758-4099-87ba-84699e5bf37e");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '7236b4f0-5758-4099-87ba-84699e5bf37e' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"bfee2f2b-7997-4044-9221-108a6e7840c6":{"roots":{"references":[{"attributes":{"formatter":{"id":"262a6f48-b583-4833-99b4-9284327782cc","type":"BasicTickFormatter"},"plot":{"id":"56c3405f-849c-46b5-afc1-c76d29dcc354","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed7157d3-ba2f-4632-8e6c-174dc8760f5a","type":"BasicTicker"}},"id":"0ef5cbbc-ffa0-475c-b58a-8068c5e296ed","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c89b796a-496e-4e83-bdf7-b1d17188e227","type":"Line"},{"attributes":{"plot":{"id":"56c3405f-849c-46b5-afc1-c76d29dcc354","subtype":"Figure","type":"Plot"},"ticker":{"id":"de8eac9b-e543-4e77-ab63-74c138cf1731","type":"BasicTicker"}},"id":"2561e090-c7cd-48a3-b9b3-3005225eb27f","type":"Grid"},{"attributes":{"plot":{"id":"56c3405f-849c-46b5-afc1-c76d29dcc354","subtype":"Figure","type":"Plot"}},"id":"ffb3563b-c2ef-45f3-8858-0449b806414d","type":"PanTool"},{"attributes":{"callback":null},"id":"0a4f60de-3bbd-437d-8df2-375b378d54fb","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"56c3405f-849c-46b5-afc1-c76d29dcc354","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed7157d3-ba2f-4632-8e6c-174dc8760f5a","type":"BasicTicker"}},"id":"a81ffa41-9e19-4a0b-a9ea-cbb154c6091f","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"79d3c230-1188-42f5-a8e7-ea6ee2a0ce92","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"56c3405f-849c-46b5-afc1-c76d29dcc354","subtype":"Figure","type":"Plot"}},"id":"e92f1a8f-baab-4321-bcf4-c4d33960fa2c","type":"PreviewSaveTool"},{"attributes":{"callback":null},"id":"bf27924b-3805-40d7-8797-848ee5d5c8c5","type":"DataRange1d"},{"attributes":{"overlay":{"id":"9e3ede6a-94f3-449c-b1b1-9ffc271fb70d","type":"BoxAnnotation"},"plot":{"id":"56c3405f-849c-46b5-afc1-c76d29dcc354","subtype":"Figure","type":"Plot"}},"id":"af6f0589-4d1e-44a1-b1a3-5fdac7742de3","type":"BoxZoomTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"cec77ffc-8dc4-40da-96ef-ce428b01c865","type":"Line"},{"attributes":{"plot":{"id":"56c3405f-849c-46b5-afc1-c76d29dcc354","subtype":"Figure","type":"Plot"}},"id":"14d17350-7798-4195-adab-b7246c681322","type":"ResizeTool"},{"attributes":{},"id":"262a6f48-b583-4833-99b4-9284327782cc","type":"BasicTickFormatter"},{"attributes":{},"id":"de8eac9b-e543-4e77-ab63-74c138cf1731","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9e3ede6a-94f3-449c-b1b1-9ffc271fb70d","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"79d3c230-1188-42f5-a8e7-ea6ee2a0ce92","type":"ColumnDataSource"},"glyph":{"id":"cec77ffc-8dc4-40da-96ef-ce428b01c865","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"c89b796a-496e-4e83-bdf7-b1d17188e227","type":"Line"},"selection_glyph":null},"id":"685bb611-f04d-434d-bf4a-b7e9852fe67c","type":"GlyphRenderer"},{"attributes":{},"id":"ed7157d3-ba2f-4632-8e6c-174dc8760f5a","type":"BasicTicker"},{"attributes":{"plot":{"id":"56c3405f-849c-46b5-afc1-c76d29dcc354","subtype":"Figure","type":"Plot"}},"id":"d2bdadd7-05c3-44a9-a1b6-20703cf3a128","type":"HelpTool"},{"attributes":{"plot":{"id":"56c3405f-849c-46b5-afc1-c76d29dcc354","subtype":"Figure","type":"Plot"}},"id":"72d5f9a5-6997-4746-b92d-1a8625d355d6","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"0eda3277-6c5c-4f04-8484-1d79b1032842","type":"LinearAxis"}],"left":[{"id":"0ef5cbbc-ffa0-475c-b58a-8068c5e296ed","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"0eda3277-6c5c-4f04-8484-1d79b1032842","type":"LinearAxis"},{"id":"2561e090-c7cd-48a3-b9b3-3005225eb27f","type":"Grid"},{"id":"0ef5cbbc-ffa0-475c-b58a-8068c5e296ed","type":"LinearAxis"},{"id":"a81ffa41-9e19-4a0b-a9ea-cbb154c6091f","type":"Grid"},{"id":"9e3ede6a-94f3-449c-b1b1-9ffc271fb70d","type":"BoxAnnotation"},{"id":"685bb611-f04d-434d-bf4a-b7e9852fe67c","type":"GlyphRenderer"}],"title":"line","tool_events":{"id":"eb394ed7-6190-4aaa-9ec3-07ace406cbae","type":"ToolEvents"},"tools":[{"id":"ffb3563b-c2ef-45f3-8858-0449b806414d","type":"PanTool"},{"id":"72d5f9a5-6997-4746-b92d-1a8625d355d6","type":"WheelZoomTool"},{"id":"af6f0589-4d1e-44a1-b1a3-5fdac7742de3","type":"BoxZoomTool"},{"id":"e92f1a8f-baab-4321-bcf4-c4d33960fa2c","type":"PreviewSaveTool"},{"id":"14d17350-7798-4195-adab-b7246c681322","type":"ResizeTool"},{"id":"e399a6c5-2ac1-438a-868f-c50aa5fcb288","type":"ResetTool"},{"id":"d2bdadd7-05c3-44a9-a1b6-20703cf3a128","type":"HelpTool"}],"x_range":{"id":"0a4f60de-3bbd-437d-8df2-375b378d54fb","type":"DataRange1d"},"y_range":{"id":"bf27924b-3805-40d7-8797-848ee5d5c8c5","type":"DataRange1d"}},"id":"56c3405f-849c-46b5-afc1-c76d29dcc354","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"56c3405f-849c-46b5-afc1-c76d29dcc354","subtype":"Figure","type":"Plot"}},"id":"e399a6c5-2ac1-438a-868f-c50aa5fcb288","type":"ResetTool"},{"attributes":{"formatter":{"id":"68a84952-ce84-44de-9081-2fdff611b132","type":"BasicTickFormatter"},"plot":{"id":"56c3405f-849c-46b5-afc1-c76d29dcc354","subtype":"Figure","type":"Plot"},"ticker":{"id":"de8eac9b-e543-4e77-ab63-74c138cf1731","type":"BasicTicker"}},"id":"0eda3277-6c5c-4f04-8484-1d79b1032842","type":"LinearAxis"},{"attributes":{},"id":"eb394ed7-6190-4aaa-9ec3-07ace406cbae","type":"ToolEvents"},{"attributes":{},"id":"68a84952-ce84-44de-9081-2fdff611b132","type":"BasicTickFormatter"}],"root_ids":["56c3405f-849c-46b5-afc1-c76d29dcc354"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"bfee2f2b-7997-4044-9221-108a6e7840c6","elementid":"7236b4f0-5758-4099-87ba-84699e5bf37e","modelid":"56c3405f-849c-46b5-afc1-c76d29dcc354"}];
          
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