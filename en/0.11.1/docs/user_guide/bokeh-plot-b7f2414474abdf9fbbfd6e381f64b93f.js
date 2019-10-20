
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
  };var element = document.getElementById("aec5b455-53c3-46e3-86d8-04c6aac33ea8");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'aec5b455-53c3-46e3-86d8-04c6aac33ea8' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"5f02452c-cece-45f1-885d-b18bef8c58f5":{"roots":{"references":[{"attributes":{"data_source":{"id":"bef6609e-b781-44e9-8b05-afabe021546d","type":"ColumnDataSource"},"glyph":{"id":"a4b63251-b6e5-4937-872e-9ee801823a02","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"a4b63251-b6e5-4937-872e-9ee801823a02","type":"Rect"},"selection_glyph":{"id":"a4b63251-b6e5-4937-872e-9ee801823a02","type":"Rect"}},"id":"9b3ee45c-0e15-4a25-8026-ff2ce9720c6b","type":"GlyphRenderer"},{"attributes":{"callback":{"id":"b989dbc8-c720-4c8c-ba49-80e7f7a70a79","type":"CustomJS"},"overlay":{"id":"ae0a1481-a219-4e51-bfb2-87a49a230dff","type":"BoxAnnotation"},"plot":{"id":"6b68ec61-eaba-4c8b-8994-e46c2e29cc8c","subtype":"Figure","type":"Plot"}},"id":"92af3164-0b62-403c-80d9-72de792ebdc8","type":"BoxSelectTool"},{"attributes":{},"id":"5d83d5b4-e091-41ec-929d-91d79427e54f","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.3},"fill_color":{"value":"#009933"},"height":{"field":"height","units":"data"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a4b63251-b6e5-4937-872e-9ee801823a02","type":"Rect"},{"attributes":{"callback":null},"id":"2a246f28-380d-4272-90d4-e3aa2ee4c2a1","type":"Range1d"},{"attributes":{"formatter":{"id":"8e84ba16-de8c-484f-9ff8-fbf3092d22d0","type":"BasicTickFormatter"},"plot":{"id":"6b68ec61-eaba-4c8b-8994-e46c2e29cc8c","subtype":"Figure","type":"Plot"},"ticker":{"id":"5d83d5b4-e091-41ec-929d-91d79427e54f","type":"BasicTicker"}},"id":"0630c1e4-3b13-402f-82b7-ef05f2f9366c","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"6b68ec61-eaba-4c8b-8994-e46c2e29cc8c","subtype":"Figure","type":"Plot"},"ticker":{"id":"1cbbe4e6-bc8e-43d5-b3f1-6bb0b7651539","type":"BasicTicker"}},"id":"20a9591c-b3f1-43b2-b7ee-84014f88bd54","type":"Grid"},{"attributes":{},"id":"f94cd212-d74a-44c1-83b7-9e8101a295e7","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ae0a1481-a219-4e51-bfb2-87a49a230dff","type":"BoxAnnotation"},{"attributes":{},"id":"245d5023-3ca8-4949-b08f-0acf5caa12f5","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","height","x","width"],"data":{"height":[],"width":[],"x":[],"y":[]}},"id":"bef6609e-b781-44e9-8b05-afabe021546d","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"b497c376-fdad-4022-834b-749205803797","type":"Range1d"},{"attributes":{},"id":"8e84ba16-de8c-484f-9ff8-fbf3092d22d0","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"0630c1e4-3b13-402f-82b7-ef05f2f9366c","type":"LinearAxis"}],"left":[{"id":"adacb224-038f-4ba6-a5c5-1e5fd089a72f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"0630c1e4-3b13-402f-82b7-ef05f2f9366c","type":"LinearAxis"},{"id":"cee71355-8d89-4e8e-91f4-6d0ae9ca54d1","type":"Grid"},{"id":"adacb224-038f-4ba6-a5c5-1e5fd089a72f","type":"LinearAxis"},{"id":"20a9591c-b3f1-43b2-b7ee-84014f88bd54","type":"Grid"},{"id":"ae0a1481-a219-4e51-bfb2-87a49a230dff","type":"BoxAnnotation"},{"id":"9b3ee45c-0e15-4a25-8026-ff2ce9720c6b","type":"GlyphRenderer"}],"title":"Select Below","tool_events":{"id":"245d5023-3ca8-4949-b08f-0acf5caa12f5","type":"ToolEvents"},"tools":[{"id":"92af3164-0b62-403c-80d9-72de792ebdc8","type":"BoxSelectTool"}],"x_range":{"id":"b497c376-fdad-4022-834b-749205803797","type":"Range1d"},"y_range":{"id":"2a246f28-380d-4272-90d4-e3aa2ee4c2a1","type":"Range1d"}},"id":"6b68ec61-eaba-4c8b-8994-e46c2e29cc8c","subtype":"Figure","type":"Plot"},{"attributes":{"args":{"source":{"id":"bef6609e-b781-44e9-8b05-afabe021546d","type":"ColumnDataSource"}},"code":"\n        // get data source from Callback args\n        var data = source.get('data');\n\n        /// get BoxSelectTool dimensions from cb_data parameter of Callback\n        var geometry = cb_data['geometry'];\n\n        /// calculate Rect attributes\n        var width = geometry['x1'] - geometry['x0'];\n        var height = geometry['y1'] - geometry['y0'];\n        var x = geometry['x0'] + width/2;\n        var y = geometry['y0'] + height/2;\n\n        /// update data source with new Rect attributes\n        data['x'].push(x);\n        data['y'].push(y);\n        data['width'].push(width);\n        data['height'].push(height);\n\n        // trigger update of data source\n        source.trigger('change');\n    "},"id":"b989dbc8-c720-4c8c-ba49-80e7f7a70a79","type":"CustomJS"},{"attributes":{"formatter":{"id":"f94cd212-d74a-44c1-83b7-9e8101a295e7","type":"BasicTickFormatter"},"plot":{"id":"6b68ec61-eaba-4c8b-8994-e46c2e29cc8c","subtype":"Figure","type":"Plot"},"ticker":{"id":"1cbbe4e6-bc8e-43d5-b3f1-6bb0b7651539","type":"BasicTicker"}},"id":"adacb224-038f-4ba6-a5c5-1e5fd089a72f","type":"LinearAxis"},{"attributes":{},"id":"1cbbe4e6-bc8e-43d5-b3f1-6bb0b7651539","type":"BasicTicker"},{"attributes":{"plot":{"id":"6b68ec61-eaba-4c8b-8994-e46c2e29cc8c","subtype":"Figure","type":"Plot"},"ticker":{"id":"5d83d5b4-e091-41ec-929d-91d79427e54f","type":"BasicTicker"}},"id":"cee71355-8d89-4e8e-91f4-6d0ae9ca54d1","type":"Grid"}],"root_ids":["6b68ec61-eaba-4c8b-8994-e46c2e29cc8c"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"5f02452c-cece-45f1-885d-b18bef8c58f5","elementid":"aec5b455-53c3-46e3-86d8-04c6aac33ea8","modelid":"6b68ec61-eaba-4c8b-8994-e46c2e29cc8c"}];
          
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