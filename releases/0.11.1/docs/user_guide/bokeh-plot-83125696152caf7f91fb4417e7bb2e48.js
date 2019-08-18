
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
  };var element = document.getElementById("66ce2dc1-7e17-45f9-be23-a992bf1d698f");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '66ce2dc1-7e17-45f9-be23-a992bf1d698f' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"7eac8a97-b674-4de6-bbcb-c5ef636a2dbd":{"roots":{"references":[{"attributes":{"plot":{"id":"7993ff3e-915d-4732-8cd7-15fd1ef81c96","subtype":"Figure","type":"Plot"}},"id":"38194ec1-e991-4ee6-be5d-1b2ae8914467","type":"PanTool"},{"attributes":{},"id":"d7546525-7224-40a1-9117-bc7f3d048550","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"7b1cdcf7-e552-468e-809f-92fc476c5b54","type":"ColumnDataSource"},"glyph":{"id":"6f61b606-7525-4f52-a74d-67b4899427c7","type":"AnnularWedge"},"hover_glyph":null,"nonselection_glyph":{"id":"79f9cbb3-4a5e-47d7-b1d5-aab1fb02a208","type":"AnnularWedge"},"selection_glyph":null},"id":"099c9010-5a7a-4b35-b24c-250acce08773","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"7993ff3e-915d-4732-8cd7-15fd1ef81c96","subtype":"Figure","type":"Plot"},"ticker":{"id":"df0c53c0-6296-49af-904d-0e9624286232","type":"BasicTicker"}},"id":"dccc8e3e-7f61-484f-8051-4cabafdb9a8b","type":"Grid"},{"attributes":{"callback":null},"id":"8ce160ba-2ca2-4d59-aa17-641f4a0b73c4","type":"DataRange1d"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"green"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"green"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"6f61b606-7525-4f52-a74d-67b4899427c7","type":"AnnularWedge"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c5d54144-a164-4c05-8e2b-9376a3f27948","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"7993ff3e-915d-4732-8cd7-15fd1ef81c96","subtype":"Figure","type":"Plot"}},"id":"4bc4c518-7682-4799-8cfc-7955a9efdc4a","type":"ResetTool"},{"attributes":{},"id":"3ba2a42b-9266-4a00-88da-0bb08cdbc632","type":"BasicTickFormatter"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"79f9cbb3-4a5e-47d7-b1d5-aab1fb02a208","type":"AnnularWedge"},{"attributes":{"plot":{"id":"7993ff3e-915d-4732-8cd7-15fd1ef81c96","subtype":"Figure","type":"Plot"}},"id":"e167a606-6de0-4eb5-84d2-317693658392","type":"ResizeTool"},{"attributes":{"overlay":{"id":"c5d54144-a164-4c05-8e2b-9376a3f27948","type":"BoxAnnotation"},"plot":{"id":"7993ff3e-915d-4732-8cd7-15fd1ef81c96","subtype":"Figure","type":"Plot"}},"id":"4a983a10-c577-491a-9600-7c967deeb4b9","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"7993ff3e-915d-4732-8cd7-15fd1ef81c96","subtype":"Figure","type":"Plot"}},"id":"e5d0f376-c061-42a4-bbff-b08bbf768ab9","type":"HelpTool"},{"attributes":{"below":[{"id":"2a16a75d-dab4-4ee9-afcb-fdec00a6d39e","type":"LinearAxis"}],"left":[{"id":"b2dcc106-1e12-4a73-8534-ac3ffe53221c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"2a16a75d-dab4-4ee9-afcb-fdec00a6d39e","type":"LinearAxis"},{"id":"3de870c5-fe3b-4354-acf6-f6be2a696826","type":"Grid"},{"id":"b2dcc106-1e12-4a73-8534-ac3ffe53221c","type":"LinearAxis"},{"id":"dccc8e3e-7f61-484f-8051-4cabafdb9a8b","type":"Grid"},{"id":"c5d54144-a164-4c05-8e2b-9376a3f27948","type":"BoxAnnotation"},{"id":"099c9010-5a7a-4b35-b24c-250acce08773","type":"GlyphRenderer"}],"tool_events":{"id":"72e0d617-6efd-4aad-9f86-b3dd1eddf6a6","type":"ToolEvents"},"tools":[{"id":"38194ec1-e991-4ee6-be5d-1b2ae8914467","type":"PanTool"},{"id":"1bc86bde-f999-442f-a920-7df5cc58a5a9","type":"WheelZoomTool"},{"id":"4a983a10-c577-491a-9600-7c967deeb4b9","type":"BoxZoomTool"},{"id":"9dd6755e-7bf3-4db6-baf3-4ed5d2f344e0","type":"PreviewSaveTool"},{"id":"e167a606-6de0-4eb5-84d2-317693658392","type":"ResizeTool"},{"id":"4bc4c518-7682-4799-8cfc-7955a9efdc4a","type":"ResetTool"},{"id":"e5d0f376-c061-42a4-bbff-b08bbf768ab9","type":"HelpTool"}],"x_range":{"id":"24b6f3f1-3d45-44aa-bda2-0daceccfeb4f","type":"DataRange1d"},"y_range":{"id":"8ce160ba-2ca2-4d59-aa17-641f4a0b73c4","type":"DataRange1d"}},"id":"7993ff3e-915d-4732-8cd7-15fd1ef81c96","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"7b1cdcf7-e552-468e-809f-92fc476c5b54","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"7993ff3e-915d-4732-8cd7-15fd1ef81c96","subtype":"Figure","type":"Plot"},"ticker":{"id":"a14720bf-e248-4375-af2b-f77a38832f8d","type":"BasicTicker"}},"id":"3de870c5-fe3b-4354-acf6-f6be2a696826","type":"Grid"},{"attributes":{"formatter":{"id":"3ba2a42b-9266-4a00-88da-0bb08cdbc632","type":"BasicTickFormatter"},"plot":{"id":"7993ff3e-915d-4732-8cd7-15fd1ef81c96","subtype":"Figure","type":"Plot"},"ticker":{"id":"df0c53c0-6296-49af-904d-0e9624286232","type":"BasicTicker"}},"id":"b2dcc106-1e12-4a73-8534-ac3ffe53221c","type":"LinearAxis"},{"attributes":{"plot":{"id":"7993ff3e-915d-4732-8cd7-15fd1ef81c96","subtype":"Figure","type":"Plot"}},"id":"9dd6755e-7bf3-4db6-baf3-4ed5d2f344e0","type":"PreviewSaveTool"},{"attributes":{"plot":{"id":"7993ff3e-915d-4732-8cd7-15fd1ef81c96","subtype":"Figure","type":"Plot"}},"id":"1bc86bde-f999-442f-a920-7df5cc58a5a9","type":"WheelZoomTool"},{"attributes":{},"id":"a14720bf-e248-4375-af2b-f77a38832f8d","type":"BasicTicker"},{"attributes":{},"id":"72e0d617-6efd-4aad-9f86-b3dd1eddf6a6","type":"ToolEvents"},{"attributes":{"formatter":{"id":"d7546525-7224-40a1-9117-bc7f3d048550","type":"BasicTickFormatter"},"plot":{"id":"7993ff3e-915d-4732-8cd7-15fd1ef81c96","subtype":"Figure","type":"Plot"},"ticker":{"id":"a14720bf-e248-4375-af2b-f77a38832f8d","type":"BasicTicker"}},"id":"2a16a75d-dab4-4ee9-afcb-fdec00a6d39e","type":"LinearAxis"},{"attributes":{},"id":"df0c53c0-6296-49af-904d-0e9624286232","type":"BasicTicker"},{"attributes":{"callback":null},"id":"24b6f3f1-3d45-44aa-bda2-0daceccfeb4f","type":"DataRange1d"}],"root_ids":["7993ff3e-915d-4732-8cd7-15fd1ef81c96"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"7eac8a97-b674-4de6-bbcb-c5ef636a2dbd","elementid":"66ce2dc1-7e17-45f9-be23-a992bf1d698f","modelid":"7993ff3e-915d-4732-8cd7-15fd1ef81c96"}];
          
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