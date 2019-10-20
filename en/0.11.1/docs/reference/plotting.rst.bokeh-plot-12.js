
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
  };var element = document.getElementById("405d707f-b9a4-409c-b285-a7d4ef9b3d56");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '405d707f-b9a4-409c-b285-a7d4ef9b3d56' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"72186f61-b767-4382-8750-6ac8fd8931cb":{"roots":{"references":[{"attributes":{"plot":{"id":"b522a437-7459-48a1-b9fc-4daa40584952","subtype":"Figure","type":"Plot"}},"id":"8c32b357-042c-4873-aeeb-df49f7f603e3","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"9ffe6883-1830-48d4-9eba-b4a97ab929f0","type":"BoxAnnotation"},"plot":{"id":"b522a437-7459-48a1-b9fc-4daa40584952","subtype":"Figure","type":"Plot"}},"id":"ec7d934c-b619-4bb6-8d3b-e02f3af76d73","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"ceae3884-fa2a-4321-911c-a5d7c295c244","type":"ColumnDataSource"},"glyph":{"id":"8459df09-2289-44d5-bb6a-c401bbbf03e1","type":"Patch"},"hover_glyph":null,"nonselection_glyph":{"id":"b24e5e8d-4124-4e4b-a375-ce4ee453504b","type":"Patch"},"selection_glyph":null},"id":"ea5c41e2-4038-4c5b-9969-cb1864af9ca7","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#99d8c9"},"line_color":{"value":"#99d8c9"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8459df09-2289-44d5-bb6a-c401bbbf03e1","type":"Patch"},{"attributes":{"formatter":{"id":"ad591614-a10f-4c7a-813a-8c696fe744d6","type":"BasicTickFormatter"},"plot":{"id":"b522a437-7459-48a1-b9fc-4daa40584952","subtype":"Figure","type":"Plot"},"ticker":{"id":"343b5ba7-6b80-49a0-a85d-491e062af113","type":"BasicTicker"}},"id":"e685e674-0fbd-440e-bb11-6d2f8ea01496","type":"LinearAxis"},{"attributes":{"plot":{"id":"b522a437-7459-48a1-b9fc-4daa40584952","subtype":"Figure","type":"Plot"}},"id":"bb3b5818-8782-46c3-a554-5a962ec41d16","type":"ResetTool"},{"attributes":{},"id":"343b5ba7-6b80-49a0-a85d-491e062af113","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,2],"y":[6,7,2,2]}},"id":"ceae3884-fa2a-4321-911c-a5d7c295c244","type":"ColumnDataSource"},{"attributes":{},"id":"35080255-a3a4-4986-a4fd-f3b970c110ae","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"b522a437-7459-48a1-b9fc-4daa40584952","subtype":"Figure","type":"Plot"},"ticker":{"id":"35080255-a3a4-4986-a4fd-f3b970c110ae","type":"BasicTicker"}},"id":"64ab9946-21ef-44a3-8f1d-d5068379ea39","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b24e5e8d-4124-4e4b-a375-ce4ee453504b","type":"Patch"},{"attributes":{"plot":{"id":"b522a437-7459-48a1-b9fc-4daa40584952","subtype":"Figure","type":"Plot"}},"id":"e35eb92a-884e-4e0c-afb7-13b033f5d85a","type":"ResizeTool"},{"attributes":{"plot":{"id":"b522a437-7459-48a1-b9fc-4daa40584952","subtype":"Figure","type":"Plot"}},"id":"fd5a8c32-ed74-4c12-9025-f68251046334","type":"PreviewSaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9ffe6883-1830-48d4-9eba-b4a97ab929f0","type":"BoxAnnotation"},{"attributes":{},"id":"355abe21-8c71-4e90-a974-99c3042e4bde","type":"ToolEvents"},{"attributes":{"plot":{"id":"b522a437-7459-48a1-b9fc-4daa40584952","subtype":"Figure","type":"Plot"}},"id":"ead05fe6-b47a-40a1-84ff-d89fbc9ee68d","type":"HelpTool"},{"attributes":{"plot":{"id":"b522a437-7459-48a1-b9fc-4daa40584952","subtype":"Figure","type":"Plot"}},"id":"6cb18fe3-eaa2-4030-b81f-71506a152ca8","type":"PanTool"},{"attributes":{"callback":null},"id":"58688f97-c96a-4d70-accd-cb42b4e34166","type":"DataRange1d"},{"attributes":{"plot":{"id":"b522a437-7459-48a1-b9fc-4daa40584952","subtype":"Figure","type":"Plot"},"ticker":{"id":"343b5ba7-6b80-49a0-a85d-491e062af113","type":"BasicTicker"}},"id":"2be0de08-2a12-444b-9e19-22829aa1df83","type":"Grid"},{"attributes":{},"id":"ad591614-a10f-4c7a-813a-8c696fe744d6","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"e685e674-0fbd-440e-bb11-6d2f8ea01496","type":"LinearAxis"}],"left":[{"id":"4d73d748-be6b-4558-a784-77a1499a0369","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e685e674-0fbd-440e-bb11-6d2f8ea01496","type":"LinearAxis"},{"id":"2be0de08-2a12-444b-9e19-22829aa1df83","type":"Grid"},{"id":"4d73d748-be6b-4558-a784-77a1499a0369","type":"LinearAxis"},{"id":"64ab9946-21ef-44a3-8f1d-d5068379ea39","type":"Grid"},{"id":"9ffe6883-1830-48d4-9eba-b4a97ab929f0","type":"BoxAnnotation"},{"id":"ea5c41e2-4038-4c5b-9969-cb1864af9ca7","type":"GlyphRenderer"}],"tool_events":{"id":"355abe21-8c71-4e90-a974-99c3042e4bde","type":"ToolEvents"},"tools":[{"id":"6cb18fe3-eaa2-4030-b81f-71506a152ca8","type":"PanTool"},{"id":"8c32b357-042c-4873-aeeb-df49f7f603e3","type":"WheelZoomTool"},{"id":"ec7d934c-b619-4bb6-8d3b-e02f3af76d73","type":"BoxZoomTool"},{"id":"fd5a8c32-ed74-4c12-9025-f68251046334","type":"PreviewSaveTool"},{"id":"e35eb92a-884e-4e0c-afb7-13b033f5d85a","type":"ResizeTool"},{"id":"bb3b5818-8782-46c3-a554-5a962ec41d16","type":"ResetTool"},{"id":"ead05fe6-b47a-40a1-84ff-d89fbc9ee68d","type":"HelpTool"}],"x_range":{"id":"5298455d-aed7-4f33-a7dc-85925a01590e","type":"DataRange1d"},"y_range":{"id":"58688f97-c96a-4d70-accd-cb42b4e34166","type":"DataRange1d"}},"id":"b522a437-7459-48a1-b9fc-4daa40584952","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"55b71278-1808-47dd-98ce-b5576e891023","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"55b71278-1808-47dd-98ce-b5576e891023","type":"BasicTickFormatter"},"plot":{"id":"b522a437-7459-48a1-b9fc-4daa40584952","subtype":"Figure","type":"Plot"},"ticker":{"id":"35080255-a3a4-4986-a4fd-f3b970c110ae","type":"BasicTicker"}},"id":"4d73d748-be6b-4558-a784-77a1499a0369","type":"LinearAxis"},{"attributes":{"callback":null},"id":"5298455d-aed7-4f33-a7dc-85925a01590e","type":"DataRange1d"}],"root_ids":["b522a437-7459-48a1-b9fc-4daa40584952"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"72186f61-b767-4382-8750-6ac8fd8931cb","elementid":"405d707f-b9a4-409c-b285-a7d4ef9b3d56","modelid":"b522a437-7459-48a1-b9fc-4daa40584952"}];
          
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