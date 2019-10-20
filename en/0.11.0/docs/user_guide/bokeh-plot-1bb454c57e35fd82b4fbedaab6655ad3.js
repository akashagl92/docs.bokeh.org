
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
  };var element = document.getElementById("2b2f1e7f-0116-45df-9a7b-7f26adf44293");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '2b2f1e7f-0116-45df-9a7b-7f26adf44293' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"737131a9-5aba-4dc2-b240-df429c8a6db4": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "VBoxForm", "id": "50d73dbd-4bf9-4ba0-a9ee-df563e365383", "attributes": {"children": [{"type": "DataTable", "id": "3ea9c6df-29bb-4aac-941b-3a1f08ac9c2e"}]}}, {"type": "StringEditor", "id": "3b18733a-2ee3-41b5-a36c-61ada6bb602a", "attributes": {}}, {"type": "DataTable", "id": "3ea9c6df-29bb-4aac-941b-3a1f08ac9c2e", "attributes": {"height": 280, "width": 400, "columns": [{"type": "TableColumn", "id": "d6ebd138-1d40-4037-9826-a30e18423204"}, {"type": "TableColumn", "id": "df53d1f4-85f0-4b26-8a2b-cc18b212ef05"}], "source": {"type": "ColumnDataSource", "id": "9ef89cf8-4b81-4bad-b58b-75a4c46e8c69"}}}, {"type": "StringFormatter", "id": "3cc6f753-2aa7-4349-8793-0def851bebdb", "attributes": {}}, {"type": "TableColumn", "id": "d6ebd138-1d40-4037-9826-a30e18423204", "attributes": {"editor": {"type": "StringEditor", "id": "3b18733a-2ee3-41b5-a36c-61ada6bb602a"}, "field": "dates", "formatter": {"type": "DateFormatter", "id": "da51169f-d3cd-45e8-90af-7236cc7035d9"}, "title": "Date"}}, {"type": "DateFormatter", "id": "da51169f-d3cd-45e8-90af-7236cc7035d9", "attributes": {}}, {"type": "ColumnDataSource", "id": "9ef89cf8-4b81-4bad-b58b-75a4c46e8c69", "attributes": {"data": {"downloads": [90, 41, 26, 34, 62, 64, 59, 55, 86, 57], "dates": [1393632000000.0, 1393718400000.0, 1393804800000.0, 1393891200000.0, 1393977600000.0, 1394064000000.0, 1394150400000.0, 1394236800000.0, 1394323200000.0, 1394409600000.0]}, "column_names": ["downloads", "dates"], "callback": null}}, {"type": "StringEditor", "id": "ad6db4bc-0c58-46c1-91c5-07d3b5e56299", "attributes": {}}, {"type": "TableColumn", "id": "df53d1f4-85f0-4b26-8a2b-cc18b212ef05", "attributes": {"editor": {"type": "StringEditor", "id": "ad6db4bc-0c58-46c1-91c5-07d3b5e56299"}, "field": "downloads", "formatter": {"type": "StringFormatter", "id": "3cc6f753-2aa7-4349-8793-0def851bebdb"}, "title": "Downloads"}}], "root_ids": ["50d73dbd-4bf9-4ba0-a9ee-df563e365383"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "737131a9-5aba-4dc2-b240-df429c8a6db4", "modelid": "50d73dbd-4bf9-4ba0-a9ee-df563e365383", "elementid": "2b2f1e7f-0116-45df-9a7b-7f26adf44293"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.css");
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