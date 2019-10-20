
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
  };var element = document.getElementById("e19a1a53-325a-4400-bf7b-7a43e760d477");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'e19a1a53-325a-4400-bf7b-7a43e760d477' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"461bb2ec-9205-4b2e-b78b-a507213945ad":{"roots":{"references":[{"attributes":{"below":[{"id":"9190ecd1-0aca-4097-b18b-b92b2c551622","type":"LinearAxis"}],"border_fill_color":{"value":"whitesmoke"},"left":[{"id":"c0688b83-6506-424f-825c-32c3431cde0b","type":"LinearAxis"}],"min_border_left":80,"plot_height":400,"plot_width":400,"renderers":[{"id":"9190ecd1-0aca-4097-b18b-b92b2c551622","type":"LinearAxis"},{"id":"d17ed544-af53-406a-b073-2d5684a591ce","type":"Grid"},{"id":"c0688b83-6506-424f-825c-32c3431cde0b","type":"LinearAxis"},{"id":"9660709b-0113-4929-a243-52e354385db7","type":"Grid"},{"id":"87bcd702-5020-45f6-9347-6e54fb8ec014","type":"BoxAnnotation"},{"id":"e75c6962-ad70-46fb-9fea-665585ffadb8","type":"GlyphRenderer"}],"tool_events":{"id":"828026ed-274a-463b-8a42-0261dee22a5b","type":"ToolEvents"},"tools":[{"id":"41f4a7a7-a7ee-4028-a8fa-ed1c288be705","type":"PanTool"},{"id":"b0d446fd-d5e4-473b-a6f7-9106baabff94","type":"WheelZoomTool"},{"id":"78d088ca-3938-4c4f-8b64-68dab1ec3bbc","type":"BoxZoomTool"},{"id":"9a0aef22-42d4-41cd-b278-db190cd9c1c9","type":"PreviewSaveTool"},{"id":"559488e1-34b8-4351-9504-65ad11b28ca4","type":"ResizeTool"},{"id":"2388c8d1-b86b-4818-bc7d-7a36dcaa663a","type":"ResetTool"},{"id":"3edbccd2-ab36-47b7-a2c8-b8fdb9749e80","type":"HelpTool"}],"x_range":{"id":"c9d2f503-09b7-4551-97f8-310529d6819b","type":"DataRange1d"},"y_range":{"id":"e622d267-d410-468f-945d-6566fe65ff75","type":"DataRange1d"}},"id":"ffccd717-94fd-44b5-bafb-12ddf204f58a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"be7d9ea7-0bb5-4182-8eff-95eb42608d8d","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"c3c355ea-34ac-4396-99a9-01ae911fe636","type":"ColumnDataSource"},"glyph":{"id":"2682a9d0-ae3c-44d6-a9e7-4a2a9d4bd6cd","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"57e7e823-c686-4fcb-91d1-8363a40e5314","type":"Circle"},"selection_glyph":null},"id":"e75c6962-ad70-46fb-9fea-665585ffadb8","type":"GlyphRenderer"},{"attributes":{},"id":"f2556e71-34b6-4f4e-a100-96c5339bbed2","type":"BasicTicker"},{"attributes":{"plot":{"id":"ffccd717-94fd-44b5-bafb-12ddf204f58a","subtype":"Figure","type":"Plot"}},"id":"559488e1-34b8-4351-9504-65ad11b28ca4","type":"ResizeTool"},{"attributes":{"callback":null},"id":"e622d267-d410-468f-945d-6566fe65ff75","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"ffccd717-94fd-44b5-bafb-12ddf204f58a","subtype":"Figure","type":"Plot"},"ticker":{"id":"59dbeecc-e408-457e-a753-963d725a644c","type":"BasicTicker"}},"id":"9660709b-0113-4929-a243-52e354385db7","type":"Grid"},{"attributes":{"formatter":{"id":"7a8a427a-6ff0-49c5-8a00-34c021d69857","type":"BasicTickFormatter"},"plot":{"id":"ffccd717-94fd-44b5-bafb-12ddf204f58a","subtype":"Figure","type":"Plot"},"ticker":{"id":"59dbeecc-e408-457e-a753-963d725a644c","type":"BasicTicker"}},"id":"c0688b83-6506-424f-825c-32c3431cde0b","type":"LinearAxis"},{"attributes":{"plot":{"id":"ffccd717-94fd-44b5-bafb-12ddf204f58a","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2556e71-34b6-4f4e-a100-96c5339bbed2","type":"BasicTicker"}},"id":"d17ed544-af53-406a-b073-2d5684a591ce","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"57e7e823-c686-4fcb-91d1-8363a40e5314","type":"Circle"},{"attributes":{},"id":"828026ed-274a-463b-8a42-0261dee22a5b","type":"ToolEvents"},{"attributes":{"plot":{"id":"ffccd717-94fd-44b5-bafb-12ddf204f58a","subtype":"Figure","type":"Plot"}},"id":"3edbccd2-ab36-47b7-a2c8-b8fdb9749e80","type":"HelpTool"},{"attributes":{},"id":"7a8a427a-6ff0-49c5-8a00-34c021d69857","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"c9d2f503-09b7-4551-97f8-310529d6819b","type":"DataRange1d"},{"attributes":{},"id":"59dbeecc-e408-457e-a753-963d725a644c","type":"BasicTicker"},{"attributes":{"overlay":{"id":"87bcd702-5020-45f6-9347-6e54fb8ec014","type":"BoxAnnotation"},"plot":{"id":"ffccd717-94fd-44b5-bafb-12ddf204f58a","subtype":"Figure","type":"Plot"}},"id":"78d088ca-3938-4c4f-8b64-68dab1ec3bbc","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"be7d9ea7-0bb5-4182-8eff-95eb42608d8d","type":"BasicTickFormatter"},"plot":{"id":"ffccd717-94fd-44b5-bafb-12ddf204f58a","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2556e71-34b6-4f4e-a100-96c5339bbed2","type":"BasicTicker"}},"id":"9190ecd1-0aca-4097-b18b-b92b2c551622","type":"LinearAxis"},{"attributes":{"plot":{"id":"ffccd717-94fd-44b5-bafb-12ddf204f58a","subtype":"Figure","type":"Plot"}},"id":"41f4a7a7-a7ee-4028-a8fa-ed1c288be705","type":"PanTool"},{"attributes":{"plot":{"id":"ffccd717-94fd-44b5-bafb-12ddf204f58a","subtype":"Figure","type":"Plot"}},"id":"9a0aef22-42d4-41cd-b278-db190cd9c1c9","type":"PreviewSaveTool"},{"attributes":{"plot":{"id":"ffccd717-94fd-44b5-bafb-12ddf204f58a","subtype":"Figure","type":"Plot"}},"id":"b0d446fd-d5e4-473b-a6f7-9106baabff94","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"c3c355ea-34ac-4396-99a9-01ae911fe636","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2682a9d0-ae3c-44d6-a9e7-4a2a9d4bd6cd","type":"Circle"},{"attributes":{"plot":{"id":"ffccd717-94fd-44b5-bafb-12ddf204f58a","subtype":"Figure","type":"Plot"}},"id":"2388c8d1-b86b-4818-bc7d-7a36dcaa663a","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"87bcd702-5020-45f6-9347-6e54fb8ec014","type":"BoxAnnotation"}],"root_ids":["ffccd717-94fd-44b5-bafb-12ddf204f58a"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"461bb2ec-9205-4b2e-b78b-a507213945ad","elementid":"e19a1a53-325a-4400-bf7b-7a43e760d477","modelid":"ffccd717-94fd-44b5-bafb-12ddf204f58a"}];
          
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