
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
  };var element = document.getElementById("449e00ab-ecd4-4f65-8834-0066eeb21d29");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '449e00ab-ecd4-4f65-8834-0066eeb21d29' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"a66f30d9-e6f8-4f15-9fd6-a878496b2bc1":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#DE2D26"},"line_color":{"value":"#DE2D26"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"a0546e2a-8374-4afc-99c3-493532960fa3","type":"InvertedTriangle"},{"attributes":{"below":[{"id":"306e05e4-7e67-4c04-93a1-babb99d6a2a4","type":"LinearAxis"}],"left":[{"id":"83680e3b-dec6-4068-aa7b-1efe715f8b72","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"306e05e4-7e67-4c04-93a1-babb99d6a2a4","type":"LinearAxis"},{"id":"4d63e319-d5e7-487d-937f-96d602e92790","type":"Grid"},{"id":"83680e3b-dec6-4068-aa7b-1efe715f8b72","type":"LinearAxis"},{"id":"eb8affb6-c0c0-4542-8e58-0648a3ec009d","type":"Grid"},{"id":"bb2e0485-46f8-4ce6-b08c-9049c174e43f","type":"BoxAnnotation"},{"id":"00932b54-3146-4188-8466-2133c6300ccf","type":"GlyphRenderer"}],"tool_events":{"id":"f0d6cecc-b324-4ca8-bfe5-f663bf38c064","type":"ToolEvents"},"tools":[{"id":"97f3590e-933d-4ec7-b186-65c3e606bf8d","type":"PanTool"},{"id":"b1ce997c-fa0d-44c4-923d-d0ec1b27949e","type":"WheelZoomTool"},{"id":"ca053b2a-2ad0-441c-9d24-a9a546620146","type":"BoxZoomTool"},{"id":"81757650-e8d6-4867-8a37-d2cc9f329646","type":"PreviewSaveTool"},{"id":"4cdb6a79-d6e4-4756-b498-7c7ada91e3d1","type":"ResizeTool"},{"id":"71a46d94-0c00-41c5-b634-96c803a046af","type":"ResetTool"},{"id":"6f00a696-3096-46c0-a977-e18595c9638d","type":"HelpTool"}],"x_range":{"id":"5b8dc1e3-f71b-43ba-be67-cbafab6cc390","type":"DataRange1d"},"y_range":{"id":"dae77250-ff06-4a24-8ca8-d5311671e075","type":"DataRange1d"}},"id":"069c127a-a40d-4781-a791-9a5115e4a022","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"069c127a-a40d-4781-a791-9a5115e4a022","subtype":"Figure","type":"Plot"},"ticker":{"id":"82e92502-c037-4380-85e5-eb70b0d1d70d","type":"BasicTicker"}},"id":"eb8affb6-c0c0-4542-8e58-0648a3ec009d","type":"Grid"},{"attributes":{"plot":{"id":"069c127a-a40d-4781-a791-9a5115e4a022","subtype":"Figure","type":"Plot"}},"id":"81757650-e8d6-4867-8a37-d2cc9f329646","type":"PreviewSaveTool"},{"attributes":{"plot":{"id":"069c127a-a40d-4781-a791-9a5115e4a022","subtype":"Figure","type":"Plot"}},"id":"71a46d94-0c00-41c5-b634-96c803a046af","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"34db1beb-c577-47c5-bd62-a58c92c70ca2","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"069c127a-a40d-4781-a791-9a5115e4a022","subtype":"Figure","type":"Plot"}},"id":"6f00a696-3096-46c0-a977-e18595c9638d","type":"HelpTool"},{"attributes":{"overlay":{"id":"bb2e0485-46f8-4ce6-b08c-9049c174e43f","type":"BoxAnnotation"},"plot":{"id":"069c127a-a40d-4781-a791-9a5115e4a022","subtype":"Figure","type":"Plot"}},"id":"ca053b2a-2ad0-441c-9d24-a9a546620146","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"34db1beb-c577-47c5-bd62-a58c92c70ca2","type":"ColumnDataSource"},"glyph":{"id":"a0546e2a-8374-4afc-99c3-493532960fa3","type":"InvertedTriangle"},"hover_glyph":null,"nonselection_glyph":{"id":"48960371-406a-4274-9844-bdbccd116599","type":"InvertedTriangle"},"selection_glyph":null},"id":"00932b54-3146-4188-8466-2133c6300ccf","type":"GlyphRenderer"},{"attributes":{},"id":"f0d6cecc-b324-4ca8-bfe5-f663bf38c064","type":"ToolEvents"},{"attributes":{},"id":"82e92502-c037-4380-85e5-eb70b0d1d70d","type":"BasicTicker"},{"attributes":{"formatter":{"id":"a0d5857c-bc84-43b4-aa6e-4fb051f9f59f","type":"BasicTickFormatter"},"plot":{"id":"069c127a-a40d-4781-a791-9a5115e4a022","subtype":"Figure","type":"Plot"},"ticker":{"id":"19569eb2-14e8-4718-9fdb-57f75182cd27","type":"BasicTicker"}},"id":"306e05e4-7e67-4c04-93a1-babb99d6a2a4","type":"LinearAxis"},{"attributes":{"plot":{"id":"069c127a-a40d-4781-a791-9a5115e4a022","subtype":"Figure","type":"Plot"}},"id":"b1ce997c-fa0d-44c4-923d-d0ec1b27949e","type":"WheelZoomTool"},{"attributes":{},"id":"19569eb2-14e8-4718-9fdb-57f75182cd27","type":"BasicTicker"},{"attributes":{"callback":null},"id":"5b8dc1e3-f71b-43ba-be67-cbafab6cc390","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"48960371-406a-4274-9844-bdbccd116599","type":"InvertedTriangle"},{"attributes":{"formatter":{"id":"b6c74c61-1cdb-4ba0-acd4-fa1c72b5141e","type":"BasicTickFormatter"},"plot":{"id":"069c127a-a40d-4781-a791-9a5115e4a022","subtype":"Figure","type":"Plot"},"ticker":{"id":"82e92502-c037-4380-85e5-eb70b0d1d70d","type":"BasicTicker"}},"id":"83680e3b-dec6-4068-aa7b-1efe715f8b72","type":"LinearAxis"},{"attributes":{"plot":{"id":"069c127a-a40d-4781-a791-9a5115e4a022","subtype":"Figure","type":"Plot"}},"id":"4cdb6a79-d6e4-4756-b498-7c7ada91e3d1","type":"ResizeTool"},{"attributes":{"plot":{"id":"069c127a-a40d-4781-a791-9a5115e4a022","subtype":"Figure","type":"Plot"}},"id":"97f3590e-933d-4ec7-b186-65c3e606bf8d","type":"PanTool"},{"attributes":{"plot":{"id":"069c127a-a40d-4781-a791-9a5115e4a022","subtype":"Figure","type":"Plot"},"ticker":{"id":"19569eb2-14e8-4718-9fdb-57f75182cd27","type":"BasicTicker"}},"id":"4d63e319-d5e7-487d-937f-96d602e92790","type":"Grid"},{"attributes":{},"id":"b6c74c61-1cdb-4ba0-acd4-fa1c72b5141e","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bb2e0485-46f8-4ce6-b08c-9049c174e43f","type":"BoxAnnotation"},{"attributes":{},"id":"a0d5857c-bc84-43b4-aa6e-4fb051f9f59f","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"dae77250-ff06-4a24-8ca8-d5311671e075","type":"DataRange1d"}],"root_ids":["069c127a-a40d-4781-a791-9a5115e4a022"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"a66f30d9-e6f8-4f15-9fd6-a878496b2bc1","elementid":"449e00ab-ecd4-4f65-8834-0066eeb21d29","modelid":"069c127a-a40d-4781-a791-9a5115e4a022"}];
          
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