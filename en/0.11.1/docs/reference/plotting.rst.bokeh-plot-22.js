
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
  };var element = document.getElementById("5c26fbd8-a44c-49e3-bea8-1b17bed5bdfc");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '5c26fbd8-a44c-49e3-bea8-1b17bed5bdfc' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"6c50959b-151d-4b1b-bb0b-a74eb373b8cc":{"roots":{"references":[{"attributes":{"data_source":{"id":"3d1ce25b-a5ca-4596-bfca-312d214e9e96","type":"ColumnDataSource"},"glyph":{"id":"f5ca3da6-a018-42e3-9ab9-979f4c9c1e5f","type":"Wedge"},"hover_glyph":null,"nonselection_glyph":{"id":"4ec0a25c-ea66-493b-82c0-1ae9fb869eba","type":"Wedge"},"selection_glyph":null},"id":"e5f8346e-ce91-4945-a7df-182da7239b9a","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"7727d43a-b3c5-4030-803e-6e6736415fd8","subtype":"Figure","type":"Plot"}},"id":"53fb50e6-c0ba-419e-9f8b-8806ea555144","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"3d1ce25b-a5ca-4596-bfca-312d214e9e96","type":"ColumnDataSource"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"4ec0a25c-ea66-493b-82c0-1ae9fb869eba","type":"Wedge"},{"attributes":{},"id":"12e36a0d-497e-4158-b558-585669c7b7a5","type":"BasicTicker"},{"attributes":{"plot":{"id":"7727d43a-b3c5-4030-803e-6e6736415fd8","subtype":"Figure","type":"Plot"}},"id":"27bd48f5-9c47-4954-b3ed-837b134f603b","type":"HelpTool"},{"attributes":{"formatter":{"id":"2076d9cd-409c-48ab-9333-a378eb0dce2a","type":"BasicTickFormatter"},"plot":{"id":"7727d43a-b3c5-4030-803e-6e6736415fd8","subtype":"Figure","type":"Plot"},"ticker":{"id":"12e36a0d-497e-4158-b558-585669c7b7a5","type":"BasicTicker"}},"id":"0942a414-ca04-494f-8d5e-da6665d66def","type":"LinearAxis"},{"attributes":{},"id":"0ac9b1c6-af99-4132-91be-6fe0bc37853d","type":"ToolEvents"},{"attributes":{},"id":"3d3d1e33-3e66-4bc9-b5b8-1679b59191d8","type":"BasicTicker"},{"attributes":{"callback":null},"id":"28b93997-f687-438b-a318-ec590ea0b849","type":"DataRange1d"},{"attributes":{"plot":{"id":"7727d43a-b3c5-4030-803e-6e6736415fd8","subtype":"Figure","type":"Plot"}},"id":"7fc16d36-45ba-43d3-b259-dd25db2ae113","type":"PanTool"},{"attributes":{"plot":{"id":"7727d43a-b3c5-4030-803e-6e6736415fd8","subtype":"Figure","type":"Plot"}},"id":"a5ed7536-80e1-4bd5-b776-d1c3a9f555f8","type":"PreviewSaveTool"},{"attributes":{"plot":{"id":"7727d43a-b3c5-4030-803e-6e6736415fd8","subtype":"Figure","type":"Plot"},"ticker":{"id":"12e36a0d-497e-4158-b558-585669c7b7a5","type":"BasicTicker"}},"id":"140605a1-6564-4471-b749-4bf207a337b4","type":"Grid"},{"attributes":{},"id":"2076d9cd-409c-48ab-9333-a378eb0dce2a","type":"BasicTickFormatter"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#2b8cbe"},"line_color":{"value":"#2b8cbe"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"f5ca3da6-a018-42e3-9ab9-979f4c9c1e5f","type":"Wedge"},{"attributes":{"formatter":{"id":"eba02c44-2337-4df6-9a7f-744860b76ab8","type":"BasicTickFormatter"},"plot":{"id":"7727d43a-b3c5-4030-803e-6e6736415fd8","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d3d1e33-3e66-4bc9-b5b8-1679b59191d8","type":"BasicTicker"}},"id":"f6b24664-b1a5-49fc-8bd5-12dd98290e09","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d0b27782-d35f-487d-8b56-dbc11d85fcdd","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"d0b27782-d35f-487d-8b56-dbc11d85fcdd","type":"BoxAnnotation"},"plot":{"id":"7727d43a-b3c5-4030-803e-6e6736415fd8","subtype":"Figure","type":"Plot"}},"id":"a1c8afdd-dcbe-4a3c-b701-09cb11bd76cb","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"0942a414-ca04-494f-8d5e-da6665d66def","type":"LinearAxis"}],"left":[{"id":"f6b24664-b1a5-49fc-8bd5-12dd98290e09","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"0942a414-ca04-494f-8d5e-da6665d66def","type":"LinearAxis"},{"id":"140605a1-6564-4471-b749-4bf207a337b4","type":"Grid"},{"id":"f6b24664-b1a5-49fc-8bd5-12dd98290e09","type":"LinearAxis"},{"id":"cb711812-113b-4dfc-8ebe-951f2252fd1f","type":"Grid"},{"id":"d0b27782-d35f-487d-8b56-dbc11d85fcdd","type":"BoxAnnotation"},{"id":"e5f8346e-ce91-4945-a7df-182da7239b9a","type":"GlyphRenderer"}],"tool_events":{"id":"0ac9b1c6-af99-4132-91be-6fe0bc37853d","type":"ToolEvents"},"tools":[{"id":"7fc16d36-45ba-43d3-b259-dd25db2ae113","type":"PanTool"},{"id":"eb5aa7cb-6f2b-4084-8e83-3d8d0a10d216","type":"WheelZoomTool"},{"id":"a1c8afdd-dcbe-4a3c-b701-09cb11bd76cb","type":"BoxZoomTool"},{"id":"a5ed7536-80e1-4bd5-b776-d1c3a9f555f8","type":"PreviewSaveTool"},{"id":"3a2d2ec0-ad76-4aac-82fa-6f631ee89a9d","type":"ResizeTool"},{"id":"53fb50e6-c0ba-419e-9f8b-8806ea555144","type":"ResetTool"},{"id":"27bd48f5-9c47-4954-b3ed-837b134f603b","type":"HelpTool"}],"x_range":{"id":"28b93997-f687-438b-a318-ec590ea0b849","type":"DataRange1d"},"y_range":{"id":"2f2c4113-84fb-4e9a-852f-0c0268debfa7","type":"DataRange1d"}},"id":"7727d43a-b3c5-4030-803e-6e6736415fd8","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"7727d43a-b3c5-4030-803e-6e6736415fd8","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d3d1e33-3e66-4bc9-b5b8-1679b59191d8","type":"BasicTicker"}},"id":"cb711812-113b-4dfc-8ebe-951f2252fd1f","type":"Grid"},{"attributes":{"callback":null},"id":"2f2c4113-84fb-4e9a-852f-0c0268debfa7","type":"DataRange1d"},{"attributes":{"plot":{"id":"7727d43a-b3c5-4030-803e-6e6736415fd8","subtype":"Figure","type":"Plot"}},"id":"eb5aa7cb-6f2b-4084-8e83-3d8d0a10d216","type":"WheelZoomTool"},{"attributes":{},"id":"eba02c44-2337-4df6-9a7f-744860b76ab8","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"7727d43a-b3c5-4030-803e-6e6736415fd8","subtype":"Figure","type":"Plot"}},"id":"3a2d2ec0-ad76-4aac-82fa-6f631ee89a9d","type":"ResizeTool"}],"root_ids":["7727d43a-b3c5-4030-803e-6e6736415fd8"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"6c50959b-151d-4b1b-bb0b-a74eb373b8cc","elementid":"5c26fbd8-a44c-49e3-bea8-1b17bed5bdfc","modelid":"7727d43a-b3c5-4030-803e-6e6736415fd8"}];
          
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