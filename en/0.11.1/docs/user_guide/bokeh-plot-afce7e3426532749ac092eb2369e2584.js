
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
  };var element = document.getElementById("deed1e25-86fc-4fc8-9a58-fa16b267e38e");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'deed1e25-86fc-4fc8-9a58-fa16b267e38e' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"01037824-40fb-4a01-9247-5419eb534ee9":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"2d8d920a-9cac-4961-901e-379df47a56ab","subtype":"Figure","type":"Plot"},"ticker":{"id":"ac8f3395-8bed-41ac-a1e9-e7c218f6c7c7","type":"BasicTicker"}},"id":"9da56f75-8ad0-440b-b92f-e11e1d6e553f","type":"Grid"},{"attributes":{"formatter":{"id":"5cd6e89f-8cc9-4233-ba92-17f96e174d9f","type":"BasicTickFormatter"},"plot":{"id":"2d8d920a-9cac-4961-901e-379df47a56ab","subtype":"Figure","type":"Plot"},"ticker":{"id":"ac8f3395-8bed-41ac-a1e9-e7c218f6c7c7","type":"BasicTicker"}},"id":"8587f092-86d1-463a-b63c-d8a92b2a7b8f","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e6003b01-4828-43b4-a6b4-7b82b2d05be1","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"bc2078e4-001e-4200-96c9-d490a1dc7029","type":"DataRange1d"},{"attributes":{"plot":{"id":"2d8d920a-9cac-4961-901e-379df47a56ab","subtype":"Figure","type":"Plot"}},"id":"7530cf6d-697a-46ee-9fab-e632d36f9516","type":"ResetTool"},{"attributes":{"plot":{"id":"2d8d920a-9cac-4961-901e-379df47a56ab","subtype":"Figure","type":"Plot"}},"id":"1f83817d-e6e5-4130-95d1-bf7e2b7192b2","type":"PanTool"},{"attributes":{"data_source":{"id":"d221bd74-6ef5-45b4-83fa-36cef4951053","type":"ColumnDataSource"},"glyph":{"id":"580a12fe-62e1-4132-8ea8-1971a481d6d8","type":"Patch"},"hover_glyph":null,"nonselection_glyph":{"id":"8ceafa94-da06-4d91-829d-e9b7dd75b049","type":"Patch"},"selection_glyph":null},"id":"195c37ff-e216-43c8-b894-abaebac03acc","type":"GlyphRenderer"},{"attributes":{},"id":"9eed333c-4546-43ed-9206-a12b739e30aa","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"d221bd74-6ef5-45b4-83fa-36cef4951053","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"9eed333c-4546-43ed-9206-a12b739e30aa","type":"BasicTickFormatter"},"plot":{"id":"2d8d920a-9cac-4961-901e-379df47a56ab","subtype":"Figure","type":"Plot"},"ticker":{"id":"25c6944e-8135-4813-bb34-2bec07c1b150","type":"BasicTicker"}},"id":"f24e5387-ba8f-455c-8f2d-8ed964e24787","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"580a12fe-62e1-4132-8ea8-1971a481d6d8","type":"Patch"},{"attributes":{},"id":"ac8f3395-8bed-41ac-a1e9-e7c218f6c7c7","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"8ceafa94-da06-4d91-829d-e9b7dd75b049","type":"Patch"},{"attributes":{},"id":"5cd6e89f-8cc9-4233-ba92-17f96e174d9f","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"63cffa1a-950b-4d20-a177-6769b42e0388","type":"DataRange1d"},{"attributes":{},"id":"79f8d66f-c51d-4df5-91dd-ba99ea4ad13a","type":"ToolEvents"},{"attributes":{"plot":{"id":"2d8d920a-9cac-4961-901e-379df47a56ab","subtype":"Figure","type":"Plot"},"ticker":{"id":"25c6944e-8135-4813-bb34-2bec07c1b150","type":"BasicTicker"}},"id":"5daabea4-8f1f-4b7e-90e8-6f87d6ce60ab","type":"Grid"},{"attributes":{"overlay":{"id":"e6003b01-4828-43b4-a6b4-7b82b2d05be1","type":"BoxAnnotation"},"plot":{"id":"2d8d920a-9cac-4961-901e-379df47a56ab","subtype":"Figure","type":"Plot"}},"id":"e1a53f4e-c293-41bf-87d6-f76c06ba8d16","type":"BoxZoomTool"},{"attributes":{},"id":"25c6944e-8135-4813-bb34-2bec07c1b150","type":"BasicTicker"},{"attributes":{"below":[{"id":"f24e5387-ba8f-455c-8f2d-8ed964e24787","type":"LinearAxis"}],"left":[{"id":"8587f092-86d1-463a-b63c-d8a92b2a7b8f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"f24e5387-ba8f-455c-8f2d-8ed964e24787","type":"LinearAxis"},{"id":"5daabea4-8f1f-4b7e-90e8-6f87d6ce60ab","type":"Grid"},{"id":"8587f092-86d1-463a-b63c-d8a92b2a7b8f","type":"LinearAxis"},{"id":"9da56f75-8ad0-440b-b92f-e11e1d6e553f","type":"Grid"},{"id":"e6003b01-4828-43b4-a6b4-7b82b2d05be1","type":"BoxAnnotation"},{"id":"195c37ff-e216-43c8-b894-abaebac03acc","type":"GlyphRenderer"}],"tool_events":{"id":"79f8d66f-c51d-4df5-91dd-ba99ea4ad13a","type":"ToolEvents"},"tools":[{"id":"1f83817d-e6e5-4130-95d1-bf7e2b7192b2","type":"PanTool"},{"id":"3136d0bd-4f16-44e6-b978-fbb53cb0cf82","type":"WheelZoomTool"},{"id":"e1a53f4e-c293-41bf-87d6-f76c06ba8d16","type":"BoxZoomTool"},{"id":"c6ee0ae9-16ca-432a-a77c-41917e95e52c","type":"PreviewSaveTool"},{"id":"d5640ff4-1ab2-422b-afd3-4a94a9228084","type":"ResizeTool"},{"id":"7530cf6d-697a-46ee-9fab-e632d36f9516","type":"ResetTool"},{"id":"9c208c2a-2e5c-4551-8850-b7a2f2a0f70e","type":"HelpTool"}],"x_range":{"id":"63cffa1a-950b-4d20-a177-6769b42e0388","type":"DataRange1d"},"y_range":{"id":"bc2078e4-001e-4200-96c9-d490a1dc7029","type":"DataRange1d"}},"id":"2d8d920a-9cac-4961-901e-379df47a56ab","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"2d8d920a-9cac-4961-901e-379df47a56ab","subtype":"Figure","type":"Plot"}},"id":"3136d0bd-4f16-44e6-b978-fbb53cb0cf82","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"2d8d920a-9cac-4961-901e-379df47a56ab","subtype":"Figure","type":"Plot"}},"id":"d5640ff4-1ab2-422b-afd3-4a94a9228084","type":"ResizeTool"},{"attributes":{"plot":{"id":"2d8d920a-9cac-4961-901e-379df47a56ab","subtype":"Figure","type":"Plot"}},"id":"c6ee0ae9-16ca-432a-a77c-41917e95e52c","type":"PreviewSaveTool"},{"attributes":{"plot":{"id":"2d8d920a-9cac-4961-901e-379df47a56ab","subtype":"Figure","type":"Plot"}},"id":"9c208c2a-2e5c-4551-8850-b7a2f2a0f70e","type":"HelpTool"}],"root_ids":["2d8d920a-9cac-4961-901e-379df47a56ab"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"01037824-40fb-4a01-9247-5419eb534ee9","elementid":"deed1e25-86fc-4fc8-9a58-fa16b267e38e","modelid":"2d8d920a-9cac-4961-901e-379df47a56ab"}];
          
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