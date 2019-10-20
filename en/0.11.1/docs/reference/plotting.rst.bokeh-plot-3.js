
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
  };var element = document.getElementById("7932d1e1-1b84-46a5-a1a9-74ca1e1c5e84");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '7932d1e1-1b84-46a5-a1a9-74ca1e1c5e84' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"97489136-8a52-4df7-8471-2cfb131c3273":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[4,5,6]}},"id":"eff5a947-b84c-497a-ab93-fb243351bada","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"e030a23b-c973-44be-8e1c-ed358c84315a","type":"LinearAxis"}],"left":[{"id":"6b878600-27c0-4e71-930d-47931e1b3c8a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e030a23b-c973-44be-8e1c-ed358c84315a","type":"LinearAxis"},{"id":"39b3f774-8c00-4db4-b474-e6daf3c224ee","type":"Grid"},{"id":"6b878600-27c0-4e71-930d-47931e1b3c8a","type":"LinearAxis"},{"id":"a49b27a7-8d14-43bf-9b5a-73dfed1f8c5d","type":"Grid"},{"id":"403d5146-c7c0-4b45-8ee0-6b03813010df","type":"BoxAnnotation"},{"id":"a5b46573-24a1-4a6b-bb2a-d95fac9a6ae8","type":"GlyphRenderer"}],"tool_events":{"id":"09c506ca-8e8e-43dc-99bb-6a8ea3e97de5","type":"ToolEvents"},"tools":[{"id":"047ad014-4462-40f7-9842-280a2ffa7488","type":"PanTool"},{"id":"1517bf54-0c1f-4e5f-b882-6fcd86ef4dac","type":"WheelZoomTool"},{"id":"02cf10bf-931c-4070-ae5e-95ea5ead34df","type":"BoxZoomTool"},{"id":"ec58ae43-db4f-4cbc-a6f9-fd0ba50e2c7f","type":"PreviewSaveTool"},{"id":"b4997991-4857-4bc4-a337-5b0d78f10d32","type":"ResizeTool"},{"id":"e711fa49-a278-4cc7-a1ed-05adbf969a1f","type":"ResetTool"},{"id":"d402e62b-bc15-43fd-a84a-1f78440ca805","type":"HelpTool"}],"x_range":{"id":"44eee828-17bb-499f-8905-fc6433db0b9c","type":"DataRange1d"},"y_range":{"id":"5ac614d4-c04a-46a0-a390-046aef853d9c","type":"DataRange1d"}},"id":"33929e16-997d-47c6-b21d-b1827d010e10","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"33929e16-997d-47c6-b21d-b1827d010e10","subtype":"Figure","type":"Plot"}},"id":"1517bf54-0c1f-4e5f-b882-6fcd86ef4dac","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"33929e16-997d-47c6-b21d-b1827d010e10","subtype":"Figure","type":"Plot"}},"id":"b4997991-4857-4bc4-a337-5b0d78f10d32","type":"ResizeTool"},{"attributes":{},"id":"640bf8f1-f2bb-4e29-8fd9-ab886c502005","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"eff5a947-b84c-497a-ab93-fb243351bada","type":"ColumnDataSource"},"glyph":{"id":"35a96a6e-368d-4bdb-99d7-ad452eb55071","type":"CircleCross"},"hover_glyph":null,"nonselection_glyph":{"id":"eae99c40-ac05-401d-ab79-c18d40c12ec0","type":"CircleCross"},"selection_glyph":null},"id":"a5b46573-24a1-4a6b-bb2a-d95fac9a6ae8","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"33929e16-997d-47c6-b21d-b1827d010e10","subtype":"Figure","type":"Plot"},"ticker":{"id":"8b0d01f8-952b-477d-9c55-28503eefcaeb","type":"BasicTicker"}},"id":"a49b27a7-8d14-43bf-9b5a-73dfed1f8c5d","type":"Grid"},{"attributes":{"callback":null},"id":"5ac614d4-c04a-46a0-a390-046aef853d9c","type":"DataRange1d"},{"attributes":{},"id":"8b0d01f8-952b-477d-9c55-28503eefcaeb","type":"BasicTicker"},{"attributes":{"callback":null},"id":"44eee828-17bb-499f-8905-fc6433db0b9c","type":"DataRange1d"},{"attributes":{"plot":{"id":"33929e16-997d-47c6-b21d-b1827d010e10","subtype":"Figure","type":"Plot"}},"id":"ec58ae43-db4f-4cbc-a6f9-fd0ba50e2c7f","type":"PreviewSaveTool"},{"attributes":{"formatter":{"id":"9a625a89-5cdb-498d-93be-7d7b6801166f","type":"BasicTickFormatter"},"plot":{"id":"33929e16-997d-47c6-b21d-b1827d010e10","subtype":"Figure","type":"Plot"},"ticker":{"id":"ec3255ab-f58b-4727-af92-2012a0995ffc","type":"BasicTicker"}},"id":"e030a23b-c973-44be-8e1c-ed358c84315a","type":"LinearAxis"},{"attributes":{},"id":"09c506ca-8e8e-43dc-99bb-6a8ea3e97de5","type":"ToolEvents"},{"attributes":{"plot":{"id":"33929e16-997d-47c6-b21d-b1827d010e10","subtype":"Figure","type":"Plot"}},"id":"d402e62b-bc15-43fd-a84a-1f78440ca805","type":"HelpTool"},{"attributes":{},"id":"ec3255ab-f58b-4727-af92-2012a0995ffc","type":"BasicTicker"},{"attributes":{"plot":{"id":"33929e16-997d-47c6-b21d-b1827d010e10","subtype":"Figure","type":"Plot"}},"id":"047ad014-4462-40f7-9842-280a2ffa7488","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"eae99c40-ac05-401d-ab79-c18d40c12ec0","type":"CircleCross"},{"attributes":{"plot":{"id":"33929e16-997d-47c6-b21d-b1827d010e10","subtype":"Figure","type":"Plot"}},"id":"e711fa49-a278-4cc7-a1ed-05adbf969a1f","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"403d5146-c7c0-4b45-8ee0-6b03813010df","type":"BoxAnnotation"},{"attributes":{},"id":"9a625a89-5cdb-498d-93be-7d7b6801166f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"640bf8f1-f2bb-4e29-8fd9-ab886c502005","type":"BasicTickFormatter"},"plot":{"id":"33929e16-997d-47c6-b21d-b1827d010e10","subtype":"Figure","type":"Plot"},"ticker":{"id":"8b0d01f8-952b-477d-9c55-28503eefcaeb","type":"BasicTicker"}},"id":"6b878600-27c0-4e71-930d-47931e1b3c8a","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#FB8072"},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"35a96a6e-368d-4bdb-99d7-ad452eb55071","type":"CircleCross"},{"attributes":{"overlay":{"id":"403d5146-c7c0-4b45-8ee0-6b03813010df","type":"BoxAnnotation"},"plot":{"id":"33929e16-997d-47c6-b21d-b1827d010e10","subtype":"Figure","type":"Plot"}},"id":"02cf10bf-931c-4070-ae5e-95ea5ead34df","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"33929e16-997d-47c6-b21d-b1827d010e10","subtype":"Figure","type":"Plot"},"ticker":{"id":"ec3255ab-f58b-4727-af92-2012a0995ffc","type":"BasicTicker"}},"id":"39b3f774-8c00-4db4-b474-e6daf3c224ee","type":"Grid"}],"root_ids":["33929e16-997d-47c6-b21d-b1827d010e10"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"97489136-8a52-4df7-8471-2cfb131c3273","elementid":"7932d1e1-1b84-46a5-a1a9-74ca1e1c5e84","modelid":"33929e16-997d-47c6-b21d-b1827d010e10"}];
          
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