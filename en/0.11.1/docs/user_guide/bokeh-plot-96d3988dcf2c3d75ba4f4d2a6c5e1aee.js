
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
  };var element = document.getElementById("bbf11898-42df-40c2-85c4-193f45265c1d");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'bbf11898-42df-40c2-85c4-193f45265c1d' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"57dc98b6-8eee-4139-8e47-8298376cac82":{"roots":{"references":[{"attributes":{"plot":{"id":"2fbebfd9-1671-4c04-afa0-e2094824c0ff","subtype":"Figure","type":"Plot"}},"id":"7b182a0f-e172-4069-89f0-007aa968406a","type":"HelpTool"},{"attributes":{"below":[{"id":"74a94533-3b75-46df-9a0d-d73f2ea203c3","type":"LinearAxis"}],"left":[{"id":"61109c62-5ecf-4953-9cef-a37e9dbc91f3","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"74a94533-3b75-46df-9a0d-d73f2ea203c3","type":"LinearAxis"},{"id":"3c315b86-83ac-4121-9029-5dd03211182e","type":"Grid"},{"id":"61109c62-5ecf-4953-9cef-a37e9dbc91f3","type":"LinearAxis"},{"id":"abb0d8cd-a7b7-4eb1-bbab-7086b2d62d38","type":"Grid"},{"id":"b4a71a19-e079-460a-8331-6fb219aa703b","type":"BoxAnnotation"},{"id":"11e6cc29-01df-454b-bac3-9482ee656642","type":"GlyphRenderer"}],"tool_events":{"id":"dddaf167-0489-4b61-9f65-962f16751b96","type":"ToolEvents"},"tools":[{"id":"ccc4ef95-dd75-4246-80d5-583632f79146","type":"PanTool"},{"id":"fa367866-28e8-409f-8edb-728ed25d5151","type":"WheelZoomTool"},{"id":"70eb9d92-eb84-4003-ac87-da509b52f29d","type":"BoxZoomTool"},{"id":"80237e7c-4235-4191-a4a6-affef272994f","type":"PreviewSaveTool"},{"id":"be696914-33a7-4b49-9a3f-050464c60675","type":"ResizeTool"},{"id":"f4e7b835-18f3-4227-a2b4-10a5e94aa893","type":"ResetTool"},{"id":"7b182a0f-e172-4069-89f0-007aa968406a","type":"HelpTool"}],"x_range":{"id":"f4449b4f-7716-42d1-aba0-e989ee8d4906","type":"DataRange1d"},"y_range":{"id":"e5277ffb-e196-4a1b-9882-d822baa9943c","type":"DataRange1d"}},"id":"2fbebfd9-1671-4c04-afa0-e2094824c0ff","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1367b548-ce1b-44b9-bef3-6c3a0a587e51","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"2fbebfd9-1671-4c04-afa0-e2094824c0ff","subtype":"Figure","type":"Plot"},"ticker":{"id":"dc4f7ce5-483c-462e-8cde-d277349ba87d","type":"BasicTicker"}},"id":"3c315b86-83ac-4121-9029-5dd03211182e","type":"Grid"},{"attributes":{"plot":{"id":"2fbebfd9-1671-4c04-afa0-e2094824c0ff","subtype":"Figure","type":"Plot"}},"id":"be696914-33a7-4b49-9a3f-050464c60675","type":"ResizeTool"},{"attributes":{"bounds":[2,4],"formatter":{"id":"04e30c2a-bec7-4fad-89f6-0b13a24b5f70","type":"BasicTickFormatter"},"plot":{"id":"2fbebfd9-1671-4c04-afa0-e2094824c0ff","subtype":"Figure","type":"Plot"},"ticker":{"id":"dc4f7ce5-483c-462e-8cde-d277349ba87d","type":"BasicTicker"}},"id":"74a94533-3b75-46df-9a0d-d73f2ea203c3","type":"LinearAxis"},{"attributes":{},"id":"04e30c2a-bec7-4fad-89f6-0b13a24b5f70","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"b4a71a19-e079-460a-8331-6fb219aa703b","type":"BoxAnnotation"},"plot":{"id":"2fbebfd9-1671-4c04-afa0-e2094824c0ff","subtype":"Figure","type":"Plot"}},"id":"70eb9d92-eb84-4003-ac87-da509b52f29d","type":"BoxZoomTool"},{"attributes":{},"id":"0c9bb51b-5efd-488b-b8c3-c6c4551a7691","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"2fbebfd9-1671-4c04-afa0-e2094824c0ff","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c9bb51b-5efd-488b-b8c3-c6c4551a7691","type":"BasicTicker"}},"id":"abb0d8cd-a7b7-4eb1-bbab-7086b2d62d38","type":"Grid"},{"attributes":{"callback":null},"id":"e5277ffb-e196-4a1b-9882-d822baa9943c","type":"DataRange1d"},{"attributes":{"formatter":{"id":"1367b548-ce1b-44b9-bef3-6c3a0a587e51","type":"BasicTickFormatter"},"plot":{"id":"2fbebfd9-1671-4c04-afa0-e2094824c0ff","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c9bb51b-5efd-488b-b8c3-c6c4551a7691","type":"BasicTicker"}},"id":"61109c62-5ecf-4953-9cef-a37e9dbc91f3","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a0f56e42-1776-48d1-947b-030a88d8a3d6","type":"Circle"},{"attributes":{"plot":{"id":"2fbebfd9-1671-4c04-afa0-e2094824c0ff","subtype":"Figure","type":"Plot"}},"id":"fa367866-28e8-409f-8edb-728ed25d5151","type":"WheelZoomTool"},{"attributes":{},"id":"dc4f7ce5-483c-462e-8cde-d277349ba87d","type":"BasicTicker"},{"attributes":{"plot":{"id":"2fbebfd9-1671-4c04-afa0-e2094824c0ff","subtype":"Figure","type":"Plot"}},"id":"ccc4ef95-dd75-4246-80d5-583632f79146","type":"PanTool"},{"attributes":{"data_source":{"id":"e9162cf2-f15b-4da7-8a46-d9038ff67c86","type":"ColumnDataSource"},"glyph":{"id":"2b046e77-50dd-4409-91c6-3818860cf5dd","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"a0f56e42-1776-48d1-947b-030a88d8a3d6","type":"Circle"},"selection_glyph":null},"id":"11e6cc29-01df-454b-bac3-9482ee656642","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b4a71a19-e079-460a-8331-6fb219aa703b","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2b046e77-50dd-4409-91c6-3818860cf5dd","type":"Circle"},{"attributes":{"callback":null},"id":"f4449b4f-7716-42d1-aba0-e989ee8d4906","type":"DataRange1d"},{"attributes":{},"id":"dddaf167-0489-4b61-9f65-962f16751b96","type":"ToolEvents"},{"attributes":{"plot":{"id":"2fbebfd9-1671-4c04-afa0-e2094824c0ff","subtype":"Figure","type":"Plot"}},"id":"80237e7c-4235-4191-a4a6-affef272994f","type":"PreviewSaveTool"},{"attributes":{"plot":{"id":"2fbebfd9-1671-4c04-afa0-e2094824c0ff","subtype":"Figure","type":"Plot"}},"id":"f4e7b835-18f3-4227-a2b4-10a5e94aa893","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"e9162cf2-f15b-4da7-8a46-d9038ff67c86","type":"ColumnDataSource"}],"root_ids":["2fbebfd9-1671-4c04-afa0-e2094824c0ff"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"57dc98b6-8eee-4139-8e47-8298376cac82","elementid":"bbf11898-42df-40c2-85c4-193f45265c1d","modelid":"2fbebfd9-1671-4c04-afa0-e2094824c0ff"}];
          
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