
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
  };var element = document.getElementById("17b43a71-0156-4ac0-b151-0a6dd6a10e4d");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '17b43a71-0156-4ac0-b151-0a6dd6a10e4d' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"e6b96a4a-5e1e-49ba-966f-0a06fd635178":{"roots":{"references":[{"attributes":{"plot":{"id":"b6843896-7025-4bd0-b7e3-649624494afa","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d9887f7-ff3f-4a6d-9c3a-a633f685e611","type":"BasicTicker"}},"id":"948dcfc2-c274-42e0-9e6c-849f8c3906ae","type":"Grid"},{"attributes":{"plot":{"id":"b6843896-7025-4bd0-b7e3-649624494afa","subtype":"Figure","type":"Plot"}},"id":"8c394467-dff1-40e9-86b1-4e76575d0a27","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"95fd3d90-836e-4f1f-ba92-0b61547d18c8","type":"DataRange1d"},{"attributes":{"data_source":{"id":"b653610b-17b7-4523-8559-75f228d42338","type":"ColumnDataSource"},"glyph":{"id":"1a7c74c5-9af0-4920-a4f8-dc79025976c9","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":{"id":"f994b5d1-faab-476e-a6d2-ac9122906c92","type":"Triangle"},"selection_glyph":null},"id":"bbbcefc1-5671-43c3-a537-142f34ee3211","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"b6843896-7025-4bd0-b7e3-649624494afa","subtype":"Figure","type":"Plot"}},"id":"18642148-e8dd-433e-b5b9-f8e9ba9fae63","type":"ResizeTool"},{"attributes":{},"id":"401055c9-5562-4485-9fc1-784a039df11e","type":"BasicTicker"},{"attributes":{"formatter":{"id":"f56d9890-f88a-4e26-86d0-39cccd5ea7ae","type":"BasicTickFormatter"},"plot":{"id":"b6843896-7025-4bd0-b7e3-649624494afa","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d9887f7-ff3f-4a6d-9c3a-a633f685e611","type":"BasicTicker"}},"id":"0df8a3df-74bb-4414-bf8a-0b5952373460","type":"LinearAxis"},{"attributes":{"below":[{"id":"0df8a3df-74bb-4414-bf8a-0b5952373460","type":"LinearAxis"}],"left":[{"id":"4123d0a0-00f9-4bd5-b696-8808c5cd2946","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"0df8a3df-74bb-4414-bf8a-0b5952373460","type":"LinearAxis"},{"id":"948dcfc2-c274-42e0-9e6c-849f8c3906ae","type":"Grid"},{"id":"4123d0a0-00f9-4bd5-b696-8808c5cd2946","type":"LinearAxis"},{"id":"cd41cd2e-f08f-41a2-a2fa-a18d65809af3","type":"Grid"},{"id":"ec9e6fec-6fe0-44aa-95f8-bacaa14d9e3e","type":"BoxAnnotation"},{"id":"bbbcefc1-5671-43c3-a537-142f34ee3211","type":"GlyphRenderer"}],"tool_events":{"id":"3628d666-be81-48e3-8ae8-2b103a530d5d","type":"ToolEvents"},"tools":[{"id":"3c2211b2-f892-41c5-9997-0b528cc705c6","type":"PanTool"},{"id":"8c394467-dff1-40e9-86b1-4e76575d0a27","type":"WheelZoomTool"},{"id":"138bd836-0e18-4acd-b056-3bbe820d517d","type":"BoxZoomTool"},{"id":"bb7e2e8a-a2f5-4c87-855b-703e7fdb9608","type":"PreviewSaveTool"},{"id":"18642148-e8dd-433e-b5b9-f8e9ba9fae63","type":"ResizeTool"},{"id":"173a1e61-6708-49cd-bda0-4318cdf9376e","type":"ResetTool"},{"id":"6278b822-704b-4676-9d8f-c7f62304e496","type":"HelpTool"}],"x_range":{"id":"95fd3d90-836e-4f1f-ba92-0b61547d18c8","type":"DataRange1d"},"y_range":{"id":"8ca25920-328c-4bed-8841-bf4bcebe31f8","type":"DataRange1d"}},"id":"b6843896-7025-4bd0-b7e3-649624494afa","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f56d9890-f88a-4e26-86d0-39cccd5ea7ae","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"ec9e6fec-6fe0-44aa-95f8-bacaa14d9e3e","type":"BoxAnnotation"},"plot":{"id":"b6843896-7025-4bd0-b7e3-649624494afa","subtype":"Figure","type":"Plot"}},"id":"138bd836-0e18-4acd-b056-3bbe820d517d","type":"BoxZoomTool"},{"attributes":{},"id":"3628d666-be81-48e3-8ae8-2b103a530d5d","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ec9e6fec-6fe0-44aa-95f8-bacaa14d9e3e","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f994b5d1-faab-476e-a6d2-ac9122906c92","type":"Triangle"},{"attributes":{"plot":{"id":"b6843896-7025-4bd0-b7e3-649624494afa","subtype":"Figure","type":"Plot"}},"id":"6278b822-704b-4676-9d8f-c7f62304e496","type":"HelpTool"},{"attributes":{},"id":"26b6464e-f955-45da-a6ae-fb940681ef98","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"b6843896-7025-4bd0-b7e3-649624494afa","subtype":"Figure","type":"Plot"}},"id":"173a1e61-6708-49cd-bda0-4318cdf9376e","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"b6843896-7025-4bd0-b7e3-649624494afa","subtype":"Figure","type":"Plot"},"ticker":{"id":"401055c9-5562-4485-9fc1-784a039df11e","type":"BasicTicker"}},"id":"cd41cd2e-f08f-41a2-a2fa-a18d65809af3","type":"Grid"},{"attributes":{"plot":{"id":"b6843896-7025-4bd0-b7e3-649624494afa","subtype":"Figure","type":"Plot"}},"id":"bb7e2e8a-a2f5-4c87-855b-703e7fdb9608","type":"PreviewSaveTool"},{"attributes":{"formatter":{"id":"26b6464e-f955-45da-a6ae-fb940681ef98","type":"BasicTickFormatter"},"plot":{"id":"b6843896-7025-4bd0-b7e3-649624494afa","subtype":"Figure","type":"Plot"},"ticker":{"id":"401055c9-5562-4485-9fc1-784a039df11e","type":"BasicTicker"}},"id":"4123d0a0-00f9-4bd5-b696-8808c5cd2946","type":"LinearAxis"},{"attributes":{},"id":"3d9887f7-ff3f-4a6d-9c3a-a633f685e611","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#99D594"},"line_color":{"value":"#99D594"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1a7c74c5-9af0-4920-a4f8-dc79025976c9","type":"Triangle"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"b653610b-17b7-4523-8559-75f228d42338","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"b6843896-7025-4bd0-b7e3-649624494afa","subtype":"Figure","type":"Plot"}},"id":"3c2211b2-f892-41c5-9997-0b528cc705c6","type":"PanTool"},{"attributes":{"callback":null},"id":"8ca25920-328c-4bed-8841-bf4bcebe31f8","type":"DataRange1d"}],"root_ids":["b6843896-7025-4bd0-b7e3-649624494afa"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"e6b96a4a-5e1e-49ba-966f-0a06fd635178","elementid":"17b43a71-0156-4ac0-b151-0a6dd6a10e4d","modelid":"b6843896-7025-4bd0-b7e3-649624494afa"}];
          
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