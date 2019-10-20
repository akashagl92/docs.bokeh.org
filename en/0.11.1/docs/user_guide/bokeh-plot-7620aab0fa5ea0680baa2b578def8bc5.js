
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
  };var element = document.getElementById("fa6b4ad5-6685-4e84-bf2f-3138dc82ea71");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'fa6b4ad5-6685-4e84-bf2f-3138dc82ea71' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"7b6837a1-88ab-41dd-8311-d4d88cc55bce":{"roots":{"references":[{"attributes":{"plot":{"id":"9e1b385f-f76c-40c6-a6fb-381736ac9562","subtype":"Figure","type":"Plot"},"ticker":{"id":"4b58f5e2-7173-419d-aee1-9d46903e056d","type":"BasicTicker"}},"id":"8c0dbbb4-adff-4e44-9d38-7c979c6be050","type":"Grid"},{"attributes":{"callback":null},"id":"9f1ceab6-bb4d-4b0e-8641-2e36f11f6930","type":"DataRange1d"},{"attributes":{},"id":"05a1f6ee-c120-4f90-80aa-1a886e8b6a99","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"9e1b385f-f76c-40c6-a6fb-381736ac9562","subtype":"Figure","type":"Plot"}},"id":"d379193a-be54-49d3-8397-3a7d9c837775","type":"HelpTool"},{"attributes":{"plot":{"id":"9e1b385f-f76c-40c6-a6fb-381736ac9562","subtype":"Figure","type":"Plot"}},"id":"506ebab5-cf55-4824-98c0-a0bfcc4d4a9c","type":"PanTool"},{"attributes":{},"id":"4b58f5e2-7173-419d-aee1-9d46903e056d","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"9e1b385f-f76c-40c6-a6fb-381736ac9562","subtype":"Figure","type":"Plot"},"ticker":{"id":"2bfe718e-3b74-4a25-9114-884bd03d0594","type":"BasicTicker"}},"id":"9509e30c-cf88-4f0a-a10b-c8e37c1d07da","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4ed4fa27-3878-43d6-8977-81ab2893e882","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"9e1b385f-f76c-40c6-a6fb-381736ac9562","subtype":"Figure","type":"Plot"}},"id":"dca253c0-6c65-4d32-acf8-9136ad613dfa","type":"ResizeTool"},{"attributes":{"plot":{"id":"9e1b385f-f76c-40c6-a6fb-381736ac9562","subtype":"Figure","type":"Plot"}},"id":"91c17ef7-6fe1-4d3c-ab3a-b98adb0af024","type":"WheelZoomTool"},{"attributes":{},"id":"54e7542e-79f0-4e53-9338-9a2cea65a344","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"54e7542e-79f0-4e53-9338-9a2cea65a344","type":"BasicTickFormatter"},"plot":{"id":"9e1b385f-f76c-40c6-a6fb-381736ac9562","subtype":"Figure","type":"Plot"},"ticker":{"id":"4b58f5e2-7173-419d-aee1-9d46903e056d","type":"BasicTicker"}},"id":"f7f92658-0383-4b70-b9e8-e861ee7874a6","type":"LinearAxis"},{"attributes":{"plot":{"id":"9e1b385f-f76c-40c6-a6fb-381736ac9562","subtype":"Figure","type":"Plot"}},"id":"a2b17d33-3658-4ab7-910b-07a8765f9bb3","type":"ResetTool"},{"attributes":{"below":[{"id":"f7f92658-0383-4b70-b9e8-e861ee7874a6","type":"LinearAxis"}],"left":[{"id":"d5e8df8c-2bb8-4789-bb67-c327f89b7847","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"f7f92658-0383-4b70-b9e8-e861ee7874a6","type":"LinearAxis"},{"id":"8c0dbbb4-adff-4e44-9d38-7c979c6be050","type":"Grid"},{"id":"d5e8df8c-2bb8-4789-bb67-c327f89b7847","type":"LinearAxis"},{"id":"9509e30c-cf88-4f0a-a10b-c8e37c1d07da","type":"Grid"},{"id":"4ed4fa27-3878-43d6-8977-81ab2893e882","type":"BoxAnnotation"},{"id":"b77071d1-ed53-4a38-a894-abf88e9e751c","type":"GlyphRenderer"}],"tool_events":{"id":"6487dde0-5938-4a02-9ea3-a6297274eb6d","type":"ToolEvents"},"tools":[{"id":"506ebab5-cf55-4824-98c0-a0bfcc4d4a9c","type":"PanTool"},{"id":"91c17ef7-6fe1-4d3c-ab3a-b98adb0af024","type":"WheelZoomTool"},{"id":"5d7e8c9b-36fe-4327-a58b-70128dc72d93","type":"BoxZoomTool"},{"id":"22bd3e8a-112e-4e18-86e2-6a7644990a98","type":"PreviewSaveTool"},{"id":"dca253c0-6c65-4d32-acf8-9136ad613dfa","type":"ResizeTool"},{"id":"a2b17d33-3658-4ab7-910b-07a8765f9bb3","type":"ResetTool"},{"id":"d379193a-be54-49d3-8397-3a7d9c837775","type":"HelpTool"}],"x_range":{"id":"51232426-17c4-499c-932f-fc7313afa17e","type":"DataRange1d"},"y_range":{"id":"9f1ceab6-bb4d-4b0e-8641-2e36f11f6930","type":"DataRange1d"}},"id":"9e1b385f-f76c-40c6-a6fb-381736ac9562","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6487dde0-5938-4a02-9ea3-a6297274eb6d","type":"ToolEvents"},{"attributes":{"overlay":{"id":"4ed4fa27-3878-43d6-8977-81ab2893e882","type":"BoxAnnotation"},"plot":{"id":"9e1b385f-f76c-40c6-a6fb-381736ac9562","subtype":"Figure","type":"Plot"}},"id":"5d7e8c9b-36fe-4327-a58b-70128dc72d93","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"51232426-17c4-499c-932f-fc7313afa17e","type":"DataRange1d"},{"attributes":{"data_source":{"id":"fc2cc01f-1eb6-400e-b1a5-3f2965bc3f40","type":"ColumnDataSource"},"glyph":{"id":"70d46e57-e2c5-49e2-b244-3c7abcd97ecf","type":"Patches"},"hover_glyph":null,"nonselection_glyph":{"id":"a07a1ad0-0d3c-4127-a6c8-7d5867a075d7","type":"Patches"},"selection_glyph":null},"id":"b77071d1-ed53-4a38-a894-abf88e9e751c","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"05a1f6ee-c120-4f90-80aa-1a886e8b6a99","type":"BasicTickFormatter"},"plot":{"id":"9e1b385f-f76c-40c6-a6fb-381736ac9562","subtype":"Figure","type":"Plot"},"ticker":{"id":"2bfe718e-3b74-4a25-9114-884bd03d0594","type":"BasicTicker"}},"id":"d5e8df8c-2bb8-4789-bb67-c327f89b7847","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["xs","ys","line_color","line_alpha","fill_color","fill_alpha"],"data":{"fill_alpha":[0.8,0.3],"fill_color":["firebrick","navy"],"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]}},"id":"fc2cc01f-1eb6-400e-b1a5-3f2965bc3f40","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"a07a1ad0-0d3c-4127-a6c8-7d5867a075d7","type":"Patches"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"fill_color"},"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"70d46e57-e2c5-49e2-b244-3c7abcd97ecf","type":"Patches"},{"attributes":{"plot":{"id":"9e1b385f-f76c-40c6-a6fb-381736ac9562","subtype":"Figure","type":"Plot"}},"id":"22bd3e8a-112e-4e18-86e2-6a7644990a98","type":"PreviewSaveTool"},{"attributes":{},"id":"2bfe718e-3b74-4a25-9114-884bd03d0594","type":"BasicTicker"}],"root_ids":["9e1b385f-f76c-40c6-a6fb-381736ac9562"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"7b6837a1-88ab-41dd-8311-d4d88cc55bce","elementid":"fa6b4ad5-6685-4e84-bf2f-3138dc82ea71","modelid":"9e1b385f-f76c-40c6-a6fb-381736ac9562"}];
          
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