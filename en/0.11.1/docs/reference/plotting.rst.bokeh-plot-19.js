
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
  };var element = document.getElementById("50c78aa0-6376-475d-a6a4-26549b6016f1");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '50c78aa0-6376-475d-a6a4-26549b6016f1' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"4372dd2f-65c6-45dc-b2e8-331e12aa6664":{"roots":{"references":[{"attributes":{"formatter":{"id":"e5b6600b-6969-4736-9bfa-366c2d27d5ff","type":"BasicTickFormatter"},"plot":{"id":"3ad6d031-50ad-4a45-aa4e-dcf8ea4453c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"f6cbffdb-98e7-459d-b4d8-c4a94a57b1c0","type":"BasicTicker"}},"id":"13d22ee2-f4f3-4b58-b48e-751f9545a04f","type":"LinearAxis"},{"attributes":{"plot":{"id":"3ad6d031-50ad-4a45-aa4e-dcf8ea4453c1","subtype":"Figure","type":"Plot"}},"id":"c67b78be-550a-4486-9294-fb582a65f1cb","type":"PanTool"},{"attributes":{},"id":"64df417a-a542-4e0a-b4a0-3c3aea8b32ce","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"3ad6d031-50ad-4a45-aa4e-dcf8ea4453c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"64df417a-a542-4e0a-b4a0-3c3aea8b32ce","type":"BasicTicker"}},"id":"6b08e1b4-9fe0-46c2-b94e-1eb67f6fe986","type":"Grid"},{"attributes":{"callback":null},"id":"43a07d75-2b39-4b35-aa12-c059acaf7352","type":"DataRange1d"},{"attributes":{"below":[{"id":"13d22ee2-f4f3-4b58-b48e-751f9545a04f","type":"LinearAxis"}],"left":[{"id":"24b6b1f7-5d43-495f-84fd-00c929f07e68","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"13d22ee2-f4f3-4b58-b48e-751f9545a04f","type":"LinearAxis"},{"id":"145e6423-b061-4b72-a7f9-5b421c996ee5","type":"Grid"},{"id":"24b6b1f7-5d43-495f-84fd-00c929f07e68","type":"LinearAxis"},{"id":"6b08e1b4-9fe0-46c2-b94e-1eb67f6fe986","type":"Grid"},{"id":"713c46bf-a8e8-4b65-b018-d063ebf0e01c","type":"BoxAnnotation"},{"id":"e808df94-ce81-41cb-a574-6fdd9667b392","type":"GlyphRenderer"}],"tool_events":{"id":"c47e63a5-cf76-48cf-9374-812db0fc40cd","type":"ToolEvents"},"tools":[{"id":"c67b78be-550a-4486-9294-fb582a65f1cb","type":"PanTool"},{"id":"9418c9bd-e0b3-47c9-a942-6886d2cede89","type":"WheelZoomTool"},{"id":"1e9f9062-58e3-4b57-a05a-deccdce2cc1a","type":"BoxZoomTool"},{"id":"a5e1921f-7a5a-4dcb-aaa6-a5ebba661b91","type":"PreviewSaveTool"},{"id":"76477bd1-691b-4dc2-a2ec-1339c38aa4ce","type":"ResizeTool"},{"id":"3c7c0e7f-445b-4bc2-97d0-2dbcfdba9766","type":"ResetTool"},{"id":"5d9194ec-2f13-486b-84ce-034219664877","type":"HelpTool"}],"x_range":{"id":"43a07d75-2b39-4b35-aa12-c059acaf7352","type":"DataRange1d"},"y_range":{"id":"2f782a5d-e185-428e-ad08-f52df89d9277","type":"DataRange1d"}},"id":"3ad6d031-50ad-4a45-aa4e-dcf8ea4453c1","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7693f813-3840-44d0-9059-824a49ca04c0","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"713c46bf-a8e8-4b65-b018-d063ebf0e01c","type":"BoxAnnotation"},"plot":{"id":"3ad6d031-50ad-4a45-aa4e-dcf8ea4453c1","subtype":"Figure","type":"Plot"}},"id":"1e9f9062-58e3-4b57-a05a-deccdce2cc1a","type":"BoxZoomTool"},{"attributes":{},"id":"f6cbffdb-98e7-459d-b4d8-c4a94a57b1c0","type":"BasicTicker"},{"attributes":{"plot":{"id":"3ad6d031-50ad-4a45-aa4e-dcf8ea4453c1","subtype":"Figure","type":"Plot"}},"id":"76477bd1-691b-4dc2-a2ec-1339c38aa4ce","type":"ResizeTool"},{"attributes":{"formatter":{"id":"7693f813-3840-44d0-9059-824a49ca04c0","type":"BasicTickFormatter"},"plot":{"id":"3ad6d031-50ad-4a45-aa4e-dcf8ea4453c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"64df417a-a542-4e0a-b4a0-3c3aea8b32ce","type":"BasicTicker"}},"id":"24b6b1f7-5d43-495f-84fd-00c929f07e68","type":"LinearAxis"},{"attributes":{},"id":"e5b6600b-6969-4736-9bfa-366c2d27d5ff","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"147b519c-58c3-4b11-8f99-131d358b8363","type":"SquareCross"},{"attributes":{},"id":"c47e63a5-cf76-48cf-9374-812db0fc40cd","type":"ToolEvents"},{"attributes":{"data_source":{"id":"04e4ff8b-e649-4b6f-bde1-9b3ad5ff3c42","type":"ColumnDataSource"},"glyph":{"id":"2c2ed316-8567-4f46-baca-b569451d53cd","type":"SquareCross"},"hover_glyph":null,"nonselection_glyph":{"id":"147b519c-58c3-4b11-8f99-131d358b8363","type":"SquareCross"},"selection_glyph":null},"id":"e808df94-ce81-41cb-a574-6fdd9667b392","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"3ad6d031-50ad-4a45-aa4e-dcf8ea4453c1","subtype":"Figure","type":"Plot"}},"id":"3c7c0e7f-445b-4bc2-97d0-2dbcfdba9766","type":"ResetTool"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7FC97F"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2c2ed316-8567-4f46-baca-b569451d53cd","type":"SquareCross"},{"attributes":{"plot":{"id":"3ad6d031-50ad-4a45-aa4e-dcf8ea4453c1","subtype":"Figure","type":"Plot"}},"id":"a5e1921f-7a5a-4dcb-aaa6-a5ebba661b91","type":"PreviewSaveTool"},{"attributes":{"plot":{"id":"3ad6d031-50ad-4a45-aa4e-dcf8ea4453c1","subtype":"Figure","type":"Plot"}},"id":"5d9194ec-2f13-486b-84ce-034219664877","type":"HelpTool"},{"attributes":{"plot":{"id":"3ad6d031-50ad-4a45-aa4e-dcf8ea4453c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"f6cbffdb-98e7-459d-b4d8-c4a94a57b1c0","type":"BasicTicker"}},"id":"145e6423-b061-4b72-a7f9-5b421c996ee5","type":"Grid"},{"attributes":{"callback":null},"id":"2f782a5d-e185-428e-ad08-f52df89d9277","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"713c46bf-a8e8-4b65-b018-d063ebf0e01c","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"3ad6d031-50ad-4a45-aa4e-dcf8ea4453c1","subtype":"Figure","type":"Plot"}},"id":"9418c9bd-e0b3-47c9-a942-6886d2cede89","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"04e4ff8b-e649-4b6f-bde1-9b3ad5ff3c42","type":"ColumnDataSource"}],"root_ids":["3ad6d031-50ad-4a45-aa4e-dcf8ea4453c1"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"4372dd2f-65c6-45dc-b2e8-331e12aa6664","elementid":"50c78aa0-6376-475d-a6a4-26549b6016f1","modelid":"3ad6d031-50ad-4a45-aa4e-dcf8ea4453c1"}];
          
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