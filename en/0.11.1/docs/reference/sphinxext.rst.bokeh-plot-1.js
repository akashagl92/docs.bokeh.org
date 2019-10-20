
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
  };var element = document.getElementById("9f3bd4ff-837f-444b-a1c4-1714f50d1fde");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '9f3bd4ff-837f-444b-a1c4-1714f50d1fde' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"8ab500f1-556a-4646-a701-0b476e860cf0":{"roots":{"references":[{"attributes":{},"id":"9499d9e7-43e7-40e1-8813-b9ff3b6c4613","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"ba76a502-0c42-46eb-a4dc-39a594244b29","type":"Line"},{"attributes":{"callback":null},"id":"18f46b5e-a5d0-462d-b9ca-70ede48572cc","type":"DataRange1d"},{"attributes":{"plot":{"id":"ac115155-2bdd-44d5-866f-4b980d846d27","subtype":"Figure","type":"Plot"}},"id":"85cdc1bd-a474-4e49-943d-ad3b3d0f02b7","type":"ResizeTool"},{"attributes":{},"id":"2af43f7b-5f3d-49b8-8913-3e0231f322fe","type":"BasicTicker"},{"attributes":{},"id":"43c75257-1690-4634-b77f-310754930e5d","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"4aa4f0f7-154c-4ab0-8bee-c385cf93e07d","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"ac115155-2bdd-44d5-866f-4b980d846d27","subtype":"Figure","type":"Plot"},"ticker":{"id":"9499d9e7-43e7-40e1-8813-b9ff3b6c4613","type":"BasicTicker"}},"id":"e20cdb19-94c4-4f14-bd00-4abdeb094222","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9136a027-1462-4007-b15e-e2aed6d99bcd","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"58436529-ab33-4df3-88a1-c359da442506","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"ac115155-2bdd-44d5-866f-4b980d846d27","subtype":"Figure","type":"Plot"}},"id":"acafa6b0-3488-4700-b44b-2d5a1374c3cb","type":"PreviewSaveTool"},{"attributes":{"formatter":{"id":"18066272-a2d4-4f12-b99e-bd43b6cb7e76","type":"BasicTickFormatter"},"plot":{"id":"ac115155-2bdd-44d5-866f-4b980d846d27","subtype":"Figure","type":"Plot"},"ticker":{"id":"2af43f7b-5f3d-49b8-8913-3e0231f322fe","type":"BasicTicker"}},"id":"de4dfa51-8146-417d-a945-3f4ff1ae7e92","type":"LinearAxis"},{"attributes":{"plot":{"id":"ac115155-2bdd-44d5-866f-4b980d846d27","subtype":"Figure","type":"Plot"}},"id":"34ea91d9-45e8-4f77-bf86-16137b676f1b","type":"PanTool"},{"attributes":{"below":[{"id":"de4dfa51-8146-417d-a945-3f4ff1ae7e92","type":"LinearAxis"}],"left":[{"id":"03666b81-d15a-483c-b5cc-c948e41cfef1","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"de4dfa51-8146-417d-a945-3f4ff1ae7e92","type":"LinearAxis"},{"id":"09e43789-21ac-4786-86e5-fbd0539ba2cb","type":"Grid"},{"id":"03666b81-d15a-483c-b5cc-c948e41cfef1","type":"LinearAxis"},{"id":"e20cdb19-94c4-4f14-bd00-4abdeb094222","type":"Grid"},{"id":"9136a027-1462-4007-b15e-e2aed6d99bcd","type":"BoxAnnotation"},{"id":"36f7de58-ab04-4640-90d0-fa670f441c79","type":"GlyphRenderer"},{"id":"97a05b01-575e-45ed-8ee0-6424030f82fc","type":"GlyphRenderer"}],"title":"example","tool_events":{"id":"7862afce-fd33-42a9-8844-06ef06231b1e","type":"ToolEvents"},"tools":[{"id":"34ea91d9-45e8-4f77-bf86-16137b676f1b","type":"PanTool"},{"id":"52a3db2b-061e-4bac-8359-4aa99bf8a3c6","type":"WheelZoomTool"},{"id":"edad9869-aa02-4315-844f-f4dba247b6f7","type":"BoxZoomTool"},{"id":"acafa6b0-3488-4700-b44b-2d5a1374c3cb","type":"PreviewSaveTool"},{"id":"85cdc1bd-a474-4e49-943d-ad3b3d0f02b7","type":"ResizeTool"},{"id":"4584d044-7283-4942-a00f-6b292ed6a3a9","type":"ResetTool"},{"id":"4fc9036d-2396-4599-9d35-54bcf7ff177e","type":"HelpTool"}],"x_range":{"id":"cb227007-f9cb-44c4-8d44-dc874fb37784","type":"DataRange1d"},"y_range":{"id":"18f46b5e-a5d0-462d-b9ca-70ede48572cc","type":"DataRange1d"}},"id":"ac115155-2bdd-44d5-866f-4b980d846d27","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"cb227007-f9cb-44c4-8d44-dc874fb37784","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4a7571fb-f1b9-4ec6-ad9e-4a3d1b14b99b","type":"Circle"},{"attributes":{"plot":{"id":"ac115155-2bdd-44d5-866f-4b980d846d27","subtype":"Figure","type":"Plot"}},"id":"4584d044-7283-4942-a00f-6b292ed6a3a9","type":"ResetTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"be7c53b1-9e2a-4c08-bd6f-339cb3616da2","type":"Line"},{"attributes":{"data_source":{"id":"58436529-ab33-4df3-88a1-c359da442506","type":"ColumnDataSource"},"glyph":{"id":"ba76a502-0c42-46eb-a4dc-39a594244b29","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"be7c53b1-9e2a-4c08-bd6f-339cb3616da2","type":"Line"},"selection_glyph":null},"id":"36f7de58-ab04-4640-90d0-fa670f441c79","type":"GlyphRenderer"},{"attributes":{},"id":"18066272-a2d4-4f12-b99e-bd43b6cb7e76","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"ac115155-2bdd-44d5-866f-4b980d846d27","subtype":"Figure","type":"Plot"}},"id":"4fc9036d-2396-4599-9d35-54bcf7ff177e","type":"HelpTool"},{"attributes":{"plot":{"id":"ac115155-2bdd-44d5-866f-4b980d846d27","subtype":"Figure","type":"Plot"},"ticker":{"id":"2af43f7b-5f3d-49b8-8913-3e0231f322fe","type":"BasicTicker"}},"id":"09e43789-21ac-4786-86e5-fbd0539ba2cb","type":"Grid"},{"attributes":{"overlay":{"id":"9136a027-1462-4007-b15e-e2aed6d99bcd","type":"BoxAnnotation"},"plot":{"id":"ac115155-2bdd-44d5-866f-4b980d846d27","subtype":"Figure","type":"Plot"}},"id":"edad9869-aa02-4315-844f-f4dba247b6f7","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"43c75257-1690-4634-b77f-310754930e5d","type":"BasicTickFormatter"},"plot":{"id":"ac115155-2bdd-44d5-866f-4b980d846d27","subtype":"Figure","type":"Plot"},"ticker":{"id":"9499d9e7-43e7-40e1-8813-b9ff3b6c4613","type":"BasicTicker"}},"id":"03666b81-d15a-483c-b5cc-c948e41cfef1","type":"LinearAxis"},{"attributes":{"plot":{"id":"ac115155-2bdd-44d5-866f-4b980d846d27","subtype":"Figure","type":"Plot"}},"id":"52a3db2b-061e-4bac-8359-4aa99bf8a3c6","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"4aa4f0f7-154c-4ab0-8bee-c385cf93e07d","type":"ColumnDataSource"},"glyph":{"id":"4a7571fb-f1b9-4ec6-ad9e-4a3d1b14b99b","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"dc0a2bd2-bbfe-4dae-bb3e-0dcd3b737bbc","type":"Circle"},"selection_glyph":null},"id":"97a05b01-575e-45ed-8ee0-6424030f82fc","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"dc0a2bd2-bbfe-4dae-bb3e-0dcd3b737bbc","type":"Circle"},{"attributes":{},"id":"7862afce-fd33-42a9-8844-06ef06231b1e","type":"ToolEvents"}],"root_ids":["ac115155-2bdd-44d5-866f-4b980d846d27"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"8ab500f1-556a-4646-a701-0b476e860cf0","elementid":"9f3bd4ff-837f-444b-a1c4-1714f50d1fde","modelid":"ac115155-2bdd-44d5-866f-4b980d846d27"}];
          
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