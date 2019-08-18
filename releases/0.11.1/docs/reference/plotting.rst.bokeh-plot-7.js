
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
  };var element = document.getElementById("205867fa-a78c-415a-b875-394bad255f3b");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '205867fa-a78c-415a-b875-394bad255f3b' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"7976ec71-d598-4f6e-9cb3-fa66ef05d906":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"11d2b05b-5935-4431-a7e0-5e9ff1430acc","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"854237fd-4858-4467-a1ba-f2fc402605fe","subtype":"Figure","type":"Plot"}},"id":"306414ee-dd0e-4374-b770-e62c9399b2b0","type":"ResetTool"},{"attributes":{},"id":"a662acb9-a428-4ed0-aa30-ab1feb1465eb","type":"BasicTickFormatter"},{"attributes":{},"id":"d7f2a162-2399-4d9c-92ab-ebcfe4591eda","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"97c4a16f-56ab-4112-a80d-cd909f1f2455","type":"DiamondCross"},{"attributes":{"formatter":{"id":"a662acb9-a428-4ed0-aa30-ab1feb1465eb","type":"BasicTickFormatter"},"plot":{"id":"854237fd-4858-4467-a1ba-f2fc402605fe","subtype":"Figure","type":"Plot"},"ticker":{"id":"fad3e10e-db42-46fc-9d10-f2cc59664c8a","type":"BasicTicker"}},"id":"3d660300-b5ec-4471-af72-d27789b1c5e4","type":"LinearAxis"},{"attributes":{},"id":"14663406-bfa4-40db-af25-59c29c6475bd","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"854237fd-4858-4467-a1ba-f2fc402605fe","subtype":"Figure","type":"Plot"}},"id":"11493912-a2fd-47de-a35f-399de84f113c","type":"PanTool"},{"attributes":{"plot":{"id":"854237fd-4858-4467-a1ba-f2fc402605fe","subtype":"Figure","type":"Plot"}},"id":"5238b73e-48c7-4b46-9131-f88dd8cfe1e0","type":"PreviewSaveTool"},{"attributes":{"callback":null},"id":"72326936-44e0-4633-b818-ea5069bce8ed","type":"DataRange1d"},{"attributes":{},"id":"fad3e10e-db42-46fc-9d10-f2cc59664c8a","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bbf07860-47cc-4f89-8155-3bf0d1d4f5de","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"854237fd-4858-4467-a1ba-f2fc402605fe","subtype":"Figure","type":"Plot"}},"id":"a21ef6bd-2951-41a7-ba28-86d9cc0b8d16","type":"HelpTool"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"98c055f8-5917-4232-af5e-b70e60304767","type":"DiamondCross"},{"attributes":{"plot":{"id":"854237fd-4858-4467-a1ba-f2fc402605fe","subtype":"Figure","type":"Plot"}},"id":"fd3cdd26-d6e0-4161-9bfc-dea08b1c3975","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"854237fd-4858-4467-a1ba-f2fc402605fe","subtype":"Figure","type":"Plot"},"ticker":{"id":"a2027cef-1dfb-49de-bb04-be22c8c23f56","type":"BasicTicker"}},"id":"e4e481c9-815f-4df1-ae47-a4a37214d72b","type":"Grid"},{"attributes":{"overlay":{"id":"bbf07860-47cc-4f89-8155-3bf0d1d4f5de","type":"BoxAnnotation"},"plot":{"id":"854237fd-4858-4467-a1ba-f2fc402605fe","subtype":"Figure","type":"Plot"}},"id":"74fea925-82b0-40d9-869c-7aa9a3578160","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"3d660300-b5ec-4471-af72-d27789b1c5e4","type":"LinearAxis"}],"left":[{"id":"357f6c86-ae73-4e33-9630-da896ace1056","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"3d660300-b5ec-4471-af72-d27789b1c5e4","type":"LinearAxis"},{"id":"ff58556c-92b1-480a-b820-9b8483f0761d","type":"Grid"},{"id":"357f6c86-ae73-4e33-9630-da896ace1056","type":"LinearAxis"},{"id":"e4e481c9-815f-4df1-ae47-a4a37214d72b","type":"Grid"},{"id":"bbf07860-47cc-4f89-8155-3bf0d1d4f5de","type":"BoxAnnotation"},{"id":"1ffbf3c9-9262-41b4-8cd2-f56ccd671b8c","type":"GlyphRenderer"}],"tool_events":{"id":"d7f2a162-2399-4d9c-92ab-ebcfe4591eda","type":"ToolEvents"},"tools":[{"id":"11493912-a2fd-47de-a35f-399de84f113c","type":"PanTool"},{"id":"fd3cdd26-d6e0-4161-9bfc-dea08b1c3975","type":"WheelZoomTool"},{"id":"74fea925-82b0-40d9-869c-7aa9a3578160","type":"BoxZoomTool"},{"id":"5238b73e-48c7-4b46-9131-f88dd8cfe1e0","type":"PreviewSaveTool"},{"id":"ec7c952d-aff2-4379-a96c-756e6914505f","type":"ResizeTool"},{"id":"306414ee-dd0e-4374-b770-e62c9399b2b0","type":"ResetTool"},{"id":"a21ef6bd-2951-41a7-ba28-86d9cc0b8d16","type":"HelpTool"}],"x_range":{"id":"72326936-44e0-4633-b818-ea5069bce8ed","type":"DataRange1d"},"y_range":{"id":"f80cdfa2-6832-411f-a99a-547fc23044dd","type":"DataRange1d"}},"id":"854237fd-4858-4467-a1ba-f2fc402605fe","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"f80cdfa2-6832-411f-a99a-547fc23044dd","type":"DataRange1d"},{"attributes":{"plot":{"id":"854237fd-4858-4467-a1ba-f2fc402605fe","subtype":"Figure","type":"Plot"},"ticker":{"id":"fad3e10e-db42-46fc-9d10-f2cc59664c8a","type":"BasicTicker"}},"id":"ff58556c-92b1-480a-b820-9b8483f0761d","type":"Grid"},{"attributes":{},"id":"a2027cef-1dfb-49de-bb04-be22c8c23f56","type":"BasicTicker"},{"attributes":{"formatter":{"id":"14663406-bfa4-40db-af25-59c29c6475bd","type":"BasicTickFormatter"},"plot":{"id":"854237fd-4858-4467-a1ba-f2fc402605fe","subtype":"Figure","type":"Plot"},"ticker":{"id":"a2027cef-1dfb-49de-bb04-be22c8c23f56","type":"BasicTicker"}},"id":"357f6c86-ae73-4e33-9630-da896ace1056","type":"LinearAxis"},{"attributes":{"plot":{"id":"854237fd-4858-4467-a1ba-f2fc402605fe","subtype":"Figure","type":"Plot"}},"id":"ec7c952d-aff2-4379-a96c-756e6914505f","type":"ResizeTool"},{"attributes":{"data_source":{"id":"11d2b05b-5935-4431-a7e0-5e9ff1430acc","type":"ColumnDataSource"},"glyph":{"id":"98c055f8-5917-4232-af5e-b70e60304767","type":"DiamondCross"},"hover_glyph":null,"nonselection_glyph":{"id":"97c4a16f-56ab-4112-a80d-cd909f1f2455","type":"DiamondCross"},"selection_glyph":null},"id":"1ffbf3c9-9262-41b4-8cd2-f56ccd671b8c","type":"GlyphRenderer"}],"root_ids":["854237fd-4858-4467-a1ba-f2fc402605fe"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"7976ec71-d598-4f6e-9cb3-fa66ef05d906","elementid":"205867fa-a78c-415a-b875-394bad255f3b","modelid":"854237fd-4858-4467-a1ba-f2fc402605fe"}];
          
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