
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
  };var element = document.getElementById("6348226f-9a77-4f3f-be74-0cb40d6982f2");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '6348226f-9a77-4f3f-be74-0cb40d6982f2' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"5c16685c-3a09-4df3-a3cb-6cb75120ea42":{"roots":{"references":[{"attributes":{"plot":{"id":"1e4571a6-6367-4a9b-8451-cdbb7a06e611","subtype":"Figure","type":"Plot"}},"id":"beb2a13c-a332-407d-bfb8-1f708e83213a","type":"HelpTool"},{"attributes":{"callback":null},"id":"bbf94b8f-d742-4dcc-9201-55ca5624f818","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"2786a966-e67b-4f19-8211-0b8a289de05a","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"1e4571a6-6367-4a9b-8451-cdbb7a06e611","subtype":"Figure","type":"Plot"}},"id":"39138518-476d-486e-88c6-92f2212ad331","type":"PreviewSaveTool"},{"attributes":{"data_source":{"id":"2786a966-e67b-4f19-8211-0b8a289de05a","type":"ColumnDataSource"},"glyph":{"id":"9e7e65fd-a367-4410-b88f-1c00600e8773","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"55f948b3-e7bb-4927-a995-5702e870a358","type":"Circle"},"selection_glyph":null},"id":"156b8b94-71b4-48bf-839b-6ba07c78340c","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"1e4571a6-6367-4a9b-8451-cdbb7a06e611","subtype":"Figure","type":"Plot"},"ticker":{"id":"3e06b2a0-80f5-47e9-b5a5-a2596b8164e2","type":"BasicTicker"}},"id":"a83e43ee-8a8d-43bb-bf5f-5392b2d7c5e0","type":"Grid"},{"attributes":{"formatter":{"id":"e8c4d090-ff93-4908-89aa-6d23ceb53c4f","type":"BasicTickFormatter"},"plot":{"id":"1e4571a6-6367-4a9b-8451-cdbb7a06e611","subtype":"Figure","type":"Plot"},"ticker":{"id":"3e06b2a0-80f5-47e9-b5a5-a2596b8164e2","type":"BasicTicker"}},"id":"11b48770-9d91-4905-be4d-67d631edd7c9","type":"LinearAxis"},{"attributes":{},"id":"746e6b71-be6e-42ce-9c2a-4204d1da2f2d","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"55f948b3-e7bb-4927-a995-5702e870a358","type":"Circle"},{"attributes":{"plot":{"id":"1e4571a6-6367-4a9b-8451-cdbb7a06e611","subtype":"Figure","type":"Plot"}},"id":"25c2ef23-6fb3-4f09-932c-5b7c81151744","type":"PanTool"},{"attributes":{},"id":"3e06b2a0-80f5-47e9-b5a5-a2596b8164e2","type":"BasicTicker"},{"attributes":{"callback":null},"id":"633ca0ee-1d59-4cbb-93ac-06adf3544619","type":"DataRange1d"},{"attributes":{},"id":"71458d8c-5cd2-47e4-bfcc-9d09eaae727c","type":"BasicTickFormatter"},{"attributes":{"ticks":[2,3.5,4]},"id":"db9691bd-67a1-44db-ac0e-cf7ce71585a2","type":"FixedTicker"},{"attributes":{},"id":"e8c4d090-ff93-4908-89aa-6d23ceb53c4f","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"b8024b98-2e8e-422d-a5b0-31171a91ad25","type":"BoxAnnotation"},"plot":{"id":"1e4571a6-6367-4a9b-8451-cdbb7a06e611","subtype":"Figure","type":"Plot"}},"id":"b162a518-2863-40ee-acb9-25fae73cced9","type":"BoxZoomTool"},{"attributes":{},"id":"b6e5f492-e92e-45b0-b43a-c7dc870a8263","type":"ToolEvents"},{"attributes":{"plot":{"id":"1e4571a6-6367-4a9b-8451-cdbb7a06e611","subtype":"Figure","type":"Plot"}},"id":"6d946cbe-1755-44ab-b20d-66c8dca19745","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"1e4571a6-6367-4a9b-8451-cdbb7a06e611","subtype":"Figure","type":"Plot"}},"id":"22f7e742-820b-4f55-9202-c3349d194c71","type":"ResizeTool"},{"attributes":{"plot":{"id":"1e4571a6-6367-4a9b-8451-cdbb7a06e611","subtype":"Figure","type":"Plot"}},"id":"007cad10-72f6-4ce3-8ae0-9d6f4e9f8950","type":"ResetTool"},{"attributes":{"plot":{"id":"1e4571a6-6367-4a9b-8451-cdbb7a06e611","subtype":"Figure","type":"Plot"},"ticker":{"id":"746e6b71-be6e-42ce-9c2a-4204d1da2f2d","type":"BasicTicker"}},"id":"cbe76515-0034-4225-8ef7-7db3ccfb57c0","type":"Grid"},{"attributes":{"formatter":{"id":"71458d8c-5cd2-47e4-bfcc-9d09eaae727c","type":"BasicTickFormatter"},"plot":{"id":"1e4571a6-6367-4a9b-8451-cdbb7a06e611","subtype":"Figure","type":"Plot"},"ticker":{"id":"db9691bd-67a1-44db-ac0e-cf7ce71585a2","type":"FixedTicker"}},"id":"698d0d33-f1e0-44d2-bc92-516259e368af","type":"LinearAxis"},{"attributes":{"below":[{"id":"698d0d33-f1e0-44d2-bc92-516259e368af","type":"LinearAxis"}],"left":[{"id":"11b48770-9d91-4905-be4d-67d631edd7c9","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"698d0d33-f1e0-44d2-bc92-516259e368af","type":"LinearAxis"},{"id":"cbe76515-0034-4225-8ef7-7db3ccfb57c0","type":"Grid"},{"id":"11b48770-9d91-4905-be4d-67d631edd7c9","type":"LinearAxis"},{"id":"a83e43ee-8a8d-43bb-bf5f-5392b2d7c5e0","type":"Grid"},{"id":"b8024b98-2e8e-422d-a5b0-31171a91ad25","type":"BoxAnnotation"},{"id":"156b8b94-71b4-48bf-839b-6ba07c78340c","type":"GlyphRenderer"}],"tool_events":{"id":"b6e5f492-e92e-45b0-b43a-c7dc870a8263","type":"ToolEvents"},"tools":[{"id":"25c2ef23-6fb3-4f09-932c-5b7c81151744","type":"PanTool"},{"id":"6d946cbe-1755-44ab-b20d-66c8dca19745","type":"WheelZoomTool"},{"id":"b162a518-2863-40ee-acb9-25fae73cced9","type":"BoxZoomTool"},{"id":"39138518-476d-486e-88c6-92f2212ad331","type":"PreviewSaveTool"},{"id":"22f7e742-820b-4f55-9202-c3349d194c71","type":"ResizeTool"},{"id":"007cad10-72f6-4ce3-8ae0-9d6f4e9f8950","type":"ResetTool"},{"id":"beb2a13c-a332-407d-bfb8-1f708e83213a","type":"HelpTool"}],"x_range":{"id":"633ca0ee-1d59-4cbb-93ac-06adf3544619","type":"DataRange1d"},"y_range":{"id":"bbf94b8f-d742-4dcc-9201-55ca5624f818","type":"DataRange1d"}},"id":"1e4571a6-6367-4a9b-8451-cdbb7a06e611","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b8024b98-2e8e-422d-a5b0-31171a91ad25","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9e7e65fd-a367-4410-b88f-1c00600e8773","type":"Circle"}],"root_ids":["1e4571a6-6367-4a9b-8451-cdbb7a06e611"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"5c16685c-3a09-4df3-a3cb-6cb75120ea42","elementid":"6348226f-9a77-4f3f-be74-0cb40d6982f2","modelid":"1e4571a6-6367-4a9b-8451-cdbb7a06e611"}];
          
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