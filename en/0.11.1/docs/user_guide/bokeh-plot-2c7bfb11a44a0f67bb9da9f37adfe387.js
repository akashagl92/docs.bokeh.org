
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
  };var element = document.getElementById("76a9b749-1b0a-484b-9905-b58f1394dd5c");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '76a9b749-1b0a-484b-9905-b58f1394dd5c' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"12c9827d-e120-458b-8b16-113adfb3456e":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"a12cd141-d62c-406f-a810-d9e9f4609ad2","subtype":"Figure","type":"Plot"},"ticker":{"id":"1062ec3b-134e-4805-bcb8-cf244e98c649","type":"BasicTicker"}},"id":"5f48190a-58a2-45fa-be6e-dd7eda25272c","type":"Grid"},{"attributes":{"below":[{"id":"a34ee0ef-a7d0-4fb8-ad2e-33ce0ad667e4","type":"LinearAxis"}],"left":[{"id":"b82a1669-f81c-4357-8d4d-ee690714d91a","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"a34ee0ef-a7d0-4fb8-ad2e-33ce0ad667e4","type":"LinearAxis"},{"id":"d374c4e7-783f-444f-a98c-9d818d89c9f7","type":"Grid"},{"id":"b82a1669-f81c-4357-8d4d-ee690714d91a","type":"LinearAxis"},{"id":"5f48190a-58a2-45fa-be6e-dd7eda25272c","type":"Grid"},{"id":"d16a4c0d-dbf4-43cd-9c5e-797a4f3868e0","type":"BoxAnnotation"},{"id":"613b8f99-8351-4378-8043-7b28c9c7fe7a","type":"GlyphRenderer"}],"tool_events":{"id":"3d1f9cb8-8025-450b-a1ac-1886acc71c5a","type":"ToolEvents"},"tools":[{"id":"1334f2d9-c598-43e4-b3f8-a5e9dd6bb99c","type":"PanTool"},{"id":"b8bbb185-6013-4b0e-a9bf-a77bb8431ffb","type":"WheelZoomTool"},{"id":"63d11891-4964-45bb-9e85-7f555f60eb9a","type":"BoxZoomTool"},{"id":"e5da887c-62ad-41ba-a0ea-5640ec104388","type":"PreviewSaveTool"},{"id":"dd86a1c9-34fd-45a6-a639-3de7766bd9a6","type":"ResizeTool"},{"id":"90512126-7284-4744-8b55-9cb32de4e8db","type":"ResetTool"},{"id":"93e93f0a-8612-42d8-8e4b-6ccd24a6a7aa","type":"HelpTool"}],"x_range":{"id":"8aff46c9-1997-4366-92fb-5addf02a1d0c","type":"DataRange1d"},"y_range":{"id":"c72ae0f9-f8b0-44e5-bd22-41758c4b81ff","type":"DataRange1d"}},"id":"a12cd141-d62c-406f-a810-d9e9f4609ad2","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"43193db9-5dad-47f6-9d86-2a047649b1e9","type":"BasicTicker"},{"attributes":{"plot":{"id":"a12cd141-d62c-406f-a810-d9e9f4609ad2","subtype":"Figure","type":"Plot"}},"id":"90512126-7284-4744-8b55-9cb32de4e8db","type":"ResetTool"},{"attributes":{"format":"%4.1e"},"id":"7a436d67-41bf-42ba-b782-44a828e09b74","type":"PrintfTickFormatter"},{"attributes":{"plot":{"id":"a12cd141-d62c-406f-a810-d9e9f4609ad2","subtype":"Figure","type":"Plot"}},"id":"93e93f0a-8612-42d8-8e4b-6ccd24a6a7aa","type":"HelpTool"},{"attributes":{"plot":{"id":"a12cd141-d62c-406f-a810-d9e9f4609ad2","subtype":"Figure","type":"Plot"},"ticker":{"id":"43193db9-5dad-47f6-9d86-2a047649b1e9","type":"BasicTicker"}},"id":"d374c4e7-783f-444f-a98c-9d818d89c9f7","type":"Grid"},{"attributes":{"callback":null},"id":"8aff46c9-1997-4366-92fb-5addf02a1d0c","type":"DataRange1d"},{"attributes":{"data_source":{"id":"1c78e4bb-1eaf-43fd-b962-bf8049c9bf54","type":"ColumnDataSource"},"glyph":{"id":"f57b19bd-625a-4e3d-9c39-ddbc7e7ae147","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"7f46a58e-00a4-417e-9f44-9a150262dffc","type":"Circle"},"selection_glyph":null},"id":"613b8f99-8351-4378-8043-7b28c9c7fe7a","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7f46a58e-00a4-417e-9f44-9a150262dffc","type":"Circle"},{"attributes":{"formatter":{"id":"e99b379f-1394-4cda-bae4-4c7631f2e8cc","type":"PrintfTickFormatter"},"plot":{"id":"a12cd141-d62c-406f-a810-d9e9f4609ad2","subtype":"Figure","type":"Plot"},"ticker":{"id":"1062ec3b-134e-4805-bcb8-cf244e98c649","type":"BasicTicker"}},"id":"b82a1669-f81c-4357-8d4d-ee690714d91a","type":"LinearAxis"},{"attributes":{"plot":{"id":"a12cd141-d62c-406f-a810-d9e9f4609ad2","subtype":"Figure","type":"Plot"}},"id":"1334f2d9-c598-43e4-b3f8-a5e9dd6bb99c","type":"PanTool"},{"attributes":{"plot":{"id":"a12cd141-d62c-406f-a810-d9e9f4609ad2","subtype":"Figure","type":"Plot"}},"id":"b8bbb185-6013-4b0e-a9bf-a77bb8431ffb","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"1c78e4bb-1eaf-43fd-b962-bf8049c9bf54","type":"ColumnDataSource"},{"attributes":{"format":"%5.3f mu"},"id":"e99b379f-1394-4cda-bae4-4c7631f2e8cc","type":"PrintfTickFormatter"},{"attributes":{"overlay":{"id":"d16a4c0d-dbf4-43cd-9c5e-797a4f3868e0","type":"BoxAnnotation"},"plot":{"id":"a12cd141-d62c-406f-a810-d9e9f4609ad2","subtype":"Figure","type":"Plot"}},"id":"63d11891-4964-45bb-9e85-7f555f60eb9a","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"a12cd141-d62c-406f-a810-d9e9f4609ad2","subtype":"Figure","type":"Plot"}},"id":"e5da887c-62ad-41ba-a0ea-5640ec104388","type":"PreviewSaveTool"},{"attributes":{"callback":null},"id":"c72ae0f9-f8b0-44e5-bd22-41758c4b81ff","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d16a4c0d-dbf4-43cd-9c5e-797a4f3868e0","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f57b19bd-625a-4e3d-9c39-ddbc7e7ae147","type":"Circle"},{"attributes":{"plot":{"id":"a12cd141-d62c-406f-a810-d9e9f4609ad2","subtype":"Figure","type":"Plot"}},"id":"dd86a1c9-34fd-45a6-a639-3de7766bd9a6","type":"ResizeTool"},{"attributes":{"formatter":{"id":"7a436d67-41bf-42ba-b782-44a828e09b74","type":"PrintfTickFormatter"},"plot":{"id":"a12cd141-d62c-406f-a810-d9e9f4609ad2","subtype":"Figure","type":"Plot"},"ticker":{"id":"43193db9-5dad-47f6-9d86-2a047649b1e9","type":"BasicTicker"}},"id":"a34ee0ef-a7d0-4fb8-ad2e-33ce0ad667e4","type":"LinearAxis"},{"attributes":{},"id":"1062ec3b-134e-4805-bcb8-cf244e98c649","type":"BasicTicker"},{"attributes":{},"id":"3d1f9cb8-8025-450b-a1ac-1886acc71c5a","type":"ToolEvents"}],"root_ids":["a12cd141-d62c-406f-a810-d9e9f4609ad2"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"12c9827d-e120-458b-8b16-113adfb3456e","elementid":"76a9b749-1b0a-484b-9905-b58f1394dd5c","modelid":"a12cd141-d62c-406f-a810-d9e9f4609ad2"}];
          
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