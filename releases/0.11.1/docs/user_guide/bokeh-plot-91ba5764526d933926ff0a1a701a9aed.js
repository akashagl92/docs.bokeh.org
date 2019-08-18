
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
  };var element = document.getElementById("fc7c050a-45a0-4d15-a3cf-740752e4f1a6");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'fc7c050a-45a0-4d15-a3cf-740752e4f1a6' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"dcfdd431-d6ad-4ad2-9835-6877ad4a61f7":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["top","bottom","left","right"],"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]}},"id":"de9a5e1c-9812-497a-9189-43fb755b5109","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"036a09f2-906f-4dee-a98c-f977f2ac9959","type":"DataRange1d"},{"attributes":{},"id":"742694b1-485c-4617-9ceb-37b2534ffd67","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"658fb820-fa92-4cea-aa6f-c15ff5e05233","subtype":"Figure","type":"Plot"},"ticker":{"id":"aa689b3e-9695-4a78-bf3b-88e3f0b565d4","type":"BasicTicker"}},"id":"192b3836-0450-42ef-87c5-f4137816f1e4","type":"Grid"},{"attributes":{"callback":null},"id":"dac01b1d-3e6b-4c02-acec-89fc892da027","type":"DataRange1d"},{"attributes":{"data_source":{"id":"de9a5e1c-9812-497a-9189-43fb755b5109","type":"ColumnDataSource"},"glyph":{"id":"2a75e329-8c4d-45d5-b261-bd7ba92d228c","type":"Quad"},"hover_glyph":null,"nonselection_glyph":{"id":"84d80d86-e2e7-4cfd-8b3c-a6d12d2716ba","type":"Quad"},"selection_glyph":null},"id":"4f565e27-e8c6-45cc-aba8-1b3e43a67132","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"658fb820-fa92-4cea-aa6f-c15ff5e05233","subtype":"Figure","type":"Plot"}},"id":"49f69370-07aa-4bc4-a95f-4377acb95c70","type":"WheelZoomTool"},{"attributes":{},"id":"aa689b3e-9695-4a78-bf3b-88e3f0b565d4","type":"BasicTicker"},{"attributes":{"plot":{"id":"658fb820-fa92-4cea-aa6f-c15ff5e05233","subtype":"Figure","type":"Plot"}},"id":"64969d69-64e6-4a5a-a196-11b35ab92e26","type":"ResizeTool"},{"attributes":{"below":[{"id":"f199a4f7-0bfc-4936-be60-09fafb4e1e5a","type":"LinearAxis"}],"left":[{"id":"dc218ddd-f4ac-4386-9dc4-c6e8035427b2","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"f199a4f7-0bfc-4936-be60-09fafb4e1e5a","type":"LinearAxis"},{"id":"192b3836-0450-42ef-87c5-f4137816f1e4","type":"Grid"},{"id":"dc218ddd-f4ac-4386-9dc4-c6e8035427b2","type":"LinearAxis"},{"id":"02f89fe9-ec54-4c8a-abe8-71e59b6369fd","type":"Grid"},{"id":"67fe55e8-2c9e-481b-b926-7e04489d3892","type":"BoxAnnotation"},{"id":"4f565e27-e8c6-45cc-aba8-1b3e43a67132","type":"GlyphRenderer"}],"tool_events":{"id":"1415ea87-a97e-4725-a84b-f83990aeb0ae","type":"ToolEvents"},"tools":[{"id":"ae029e03-4ca9-4847-b64d-583c7de8c00b","type":"PanTool"},{"id":"49f69370-07aa-4bc4-a95f-4377acb95c70","type":"WheelZoomTool"},{"id":"e4e71657-837b-4e10-9596-60c438dabdb5","type":"BoxZoomTool"},{"id":"c8bb5099-64c7-4829-816e-1da966e14f7f","type":"PreviewSaveTool"},{"id":"64969d69-64e6-4a5a-a196-11b35ab92e26","type":"ResizeTool"},{"id":"ac84c96e-9053-488d-8b9b-d2a7c99a9d4a","type":"ResetTool"},{"id":"b6734a66-85d3-4921-851d-b0da7512eae6","type":"HelpTool"}],"x_range":{"id":"036a09f2-906f-4dee-a98c-f977f2ac9959","type":"DataRange1d"},"y_range":{"id":"dac01b1d-3e6b-4c02-acec-89fc892da027","type":"DataRange1d"}},"id":"658fb820-fa92-4cea-aa6f-c15ff5e05233","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"5ada2ae8-63f2-4e94-820a-d1ce63b9b5ca","type":"BasicTickFormatter"},"plot":{"id":"658fb820-fa92-4cea-aa6f-c15ff5e05233","subtype":"Figure","type":"Plot"},"ticker":{"id":"aa689b3e-9695-4a78-bf3b-88e3f0b565d4","type":"BasicTicker"}},"id":"f199a4f7-0bfc-4936-be60-09fafb4e1e5a","type":"LinearAxis"},{"attributes":{"overlay":{"id":"67fe55e8-2c9e-481b-b926-7e04489d3892","type":"BoxAnnotation"},"plot":{"id":"658fb820-fa92-4cea-aa6f-c15ff5e05233","subtype":"Figure","type":"Plot"}},"id":"e4e71657-837b-4e10-9596-60c438dabdb5","type":"BoxZoomTool"},{"attributes":{},"id":"5ada2ae8-63f2-4e94-820a-d1ce63b9b5ca","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"658fb820-fa92-4cea-aa6f-c15ff5e05233","subtype":"Figure","type":"Plot"}},"id":"ae029e03-4ca9-4847-b64d-583c7de8c00b","type":"PanTool"},{"attributes":{"formatter":{"id":"742694b1-485c-4617-9ceb-37b2534ffd67","type":"BasicTickFormatter"},"plot":{"id":"658fb820-fa92-4cea-aa6f-c15ff5e05233","subtype":"Figure","type":"Plot"},"ticker":{"id":"522d1a5e-c3c3-4f7e-bcb5-1579ce24b3b3","type":"BasicTicker"}},"id":"dc218ddd-f4ac-4386-9dc4-c6e8035427b2","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"67fe55e8-2c9e-481b-b926-7e04489d3892","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"658fb820-fa92-4cea-aa6f-c15ff5e05233","subtype":"Figure","type":"Plot"},"ticker":{"id":"522d1a5e-c3c3-4f7e-bcb5-1579ce24b3b3","type":"BasicTicker"}},"id":"02f89fe9-ec54-4c8a-abe8-71e59b6369fd","type":"Grid"},{"attributes":{"plot":{"id":"658fb820-fa92-4cea-aa6f-c15ff5e05233","subtype":"Figure","type":"Plot"}},"id":"b6734a66-85d3-4921-851d-b0da7512eae6","type":"HelpTool"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"2a75e329-8c4d-45d5-b261-bd7ba92d228c","type":"Quad"},{"attributes":{},"id":"1415ea87-a97e-4725-a84b-f83990aeb0ae","type":"ToolEvents"},{"attributes":{"plot":{"id":"658fb820-fa92-4cea-aa6f-c15ff5e05233","subtype":"Figure","type":"Plot"}},"id":"ac84c96e-9053-488d-8b9b-d2a7c99a9d4a","type":"ResetTool"},{"attributes":{"plot":{"id":"658fb820-fa92-4cea-aa6f-c15ff5e05233","subtype":"Figure","type":"Plot"}},"id":"c8bb5099-64c7-4829-816e-1da966e14f7f","type":"PreviewSaveTool"},{"attributes":{},"id":"522d1a5e-c3c3-4f7e-bcb5-1579ce24b3b3","type":"BasicTicker"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"84d80d86-e2e7-4cfd-8b3c-a6d12d2716ba","type":"Quad"}],"root_ids":["658fb820-fa92-4cea-aa6f-c15ff5e05233"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"dcfdd431-d6ad-4ad2-9835-6877ad4a61f7","elementid":"fc7c050a-45a0-4d15-a3cf-740752e4f1a6","modelid":"658fb820-fa92-4cea-aa6f-c15ff5e05233"}];
          
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