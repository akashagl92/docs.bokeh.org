
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
  };var element = document.getElementById("6cc290d7-0c95-4871-9500-83cdb6bd67ca");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '6cc290d7-0c95-4871-9500-83cdb6bd67ca' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"44e86e6f-2100-4ee2-af60-87cfef35ddc5":{"roots":{"references":[{"attributes":{},"id":"f4392ae3-0a1b-4c39-88d5-177ea0e5df44","type":"StringEditor"},{"attributes":{},"id":"77b31700-e1fd-4cb8-866d-18cfa030bf5c","type":"StringEditor"},{"attributes":{},"id":"3c21a74a-731a-490b-8b8c-1cfdf3905d60","type":"DateFormatter"},{"attributes":{},"id":"2de31cda-4d8c-4ae0-8b61-16385ec7848b","type":"StringFormatter"},{"attributes":{"editor":{"id":"77b31700-e1fd-4cb8-866d-18cfa030bf5c","type":"StringEditor"},"field":"downloads","formatter":{"id":"2de31cda-4d8c-4ae0-8b61-16385ec7848b","type":"StringFormatter"},"title":"Downloads"},"id":"ea678b50-0270-4fe8-9210-d873d919e367","type":"TableColumn"},{"attributes":{"children":[{"id":"87718914-a57a-4f45-871f-6956aa0ca6c6","type":"DataTable"}]},"id":"13ac3c8c-81d3-473b-a1e4-81b35111d25d","type":"VBoxForm"},{"attributes":{"columns":[{"id":"60820989-000d-432f-aa21-95ca0b727174","type":"TableColumn"},{"id":"ea678b50-0270-4fe8-9210-d873d919e367","type":"TableColumn"}],"height":280,"source":{"id":"1ebfe607-7aaf-4558-8f3d-8be5611d25ca","type":"ColumnDataSource"},"width":400},"id":"87718914-a57a-4f45-871f-6956aa0ca6c6","type":"DataTable"},{"attributes":{"editor":{"id":"f4392ae3-0a1b-4c39-88d5-177ea0e5df44","type":"StringEditor"},"field":"dates","formatter":{"id":"3c21a74a-731a-490b-8b8c-1cfdf3905d60","type":"DateFormatter"},"title":"Date"},"id":"60820989-000d-432f-aa21-95ca0b727174","type":"TableColumn"},{"attributes":{"callback":null,"column_names":["downloads","dates"],"data":{"dates":[1393632000000.0,1393718400000.0,1393804800000.0,1393891200000.0,1393977600000.0,1394064000000.0,1394150400000.0,1394236800000.0,1394323200000.0,1394409600000.0],"downloads":[91,29,63,3,40,42,4,29,74,36]}},"id":"1ebfe607-7aaf-4558-8f3d-8be5611d25ca","type":"ColumnDataSource"}],"root_ids":["13ac3c8c-81d3-473b-a1e4-81b35111d25d"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"44e86e6f-2100-4ee2-af60-87cfef35ddc5","elementid":"6cc290d7-0c95-4871-9500-83cdb6bd67ca","modelid":"13ac3c8c-81d3-473b-a1e4-81b35111d25d"}];
          
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