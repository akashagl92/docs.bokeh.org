
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
  };var element = document.getElementById("149b00db-b947-447b-a228-0cb504f5da32");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '149b00db-b947-447b-a228-0cb504f5da32' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"8d3041ef-d8ed-4c15-badc-5ba52448fb62":{"roots":{"references":[{"attributes":{"callback":null},"id":"24dc5168-23d2-4925-ad35-23e32131689c","type":"DataRange1d"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1d91d0"},"height":{"units":"data","value":0.6},"width":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"ae54f5af-2461-48d9-9431-8212271959c3","type":"Oval"},{"attributes":{},"id":"a80e1095-7ef2-41ae-9415-9aeafbf1a77a","type":"BasicTickFormatter"},{"attributes":{},"id":"0c8bf510-956e-478c-b222-28b0fa75eae3","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"0c8bf510-956e-478c-b222-28b0fa75eae3","type":"BasicTickFormatter"},"plot":{"id":"53a8e2e2-a841-44c7-9c25-9ef98c1f564f","type":"Plot"},"ticker":{"id":"6d3104d9-d079-462a-b1ee-b67c1cccd64e","type":"BasicTicker"}},"id":"c4790abb-075b-4f1b-b8f2-784a49992031","type":"LinearAxis"},{"attributes":{},"id":"80e99bf9-a192-4cca-a8c7-7b7539aed751","type":"ToolEvents"},{"attributes":{"formatter":{"id":"a80e1095-7ef2-41ae-9415-9aeafbf1a77a","type":"BasicTickFormatter"},"plot":{"id":"53a8e2e2-a841-44c7-9c25-9ef98c1f564f","type":"Plot"},"ticker":{"id":"fa957d0f-ab1f-467b-b821-8420f615df47","type":"BasicTicker"}},"id":"ac6e1b02-b273-46c9-b597-dee515c309cb","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"53a8e2e2-a841-44c7-9c25-9ef98c1f564f","type":"Plot"},"ticker":{"id":"fa957d0f-ab1f-467b-b821-8420f615df47","type":"BasicTicker"}},"id":"364f51ec-f58c-40e8-97b8-7f8e5d993a88","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"a4843080-8eed-48de-8a49-d91d7685d365","type":"ColumnDataSource"},{"attributes":{},"id":"fa957d0f-ab1f-467b-b821-8420f615df47","type":"BasicTicker"},{"attributes":{},"id":"6d3104d9-d079-462a-b1ee-b67c1cccd64e","type":"BasicTicker"},{"attributes":{"callback":null},"id":"be040c5f-ed9a-4779-bc3b-a21e0842dcce","type":"DataRange1d"},{"attributes":{"data_source":{"id":"a4843080-8eed-48de-8a49-d91d7685d365","type":"ColumnDataSource"},"glyph":{"id":"ae54f5af-2461-48d9-9431-8212271959c3","type":"Oval"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a80034e0-495f-4552-bf87-95bea06a43ec","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"53a8e2e2-a841-44c7-9c25-9ef98c1f564f","type":"Plot"},"ticker":{"id":"6d3104d9-d079-462a-b1ee-b67c1cccd64e","type":"BasicTicker"}},"id":"1b7eace6-2587-4d71-ba84-5eac69a09f7c","type":"Grid"},{"attributes":{"below":[{"id":"c4790abb-075b-4f1b-b8f2-784a49992031","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"ac6e1b02-b273-46c9-b597-dee515c309cb","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"a80034e0-495f-4552-bf87-95bea06a43ec","type":"GlyphRenderer"},{"id":"c4790abb-075b-4f1b-b8f2-784a49992031","type":"LinearAxis"},{"id":"ac6e1b02-b273-46c9-b597-dee515c309cb","type":"LinearAxis"},{"id":"1b7eace6-2587-4d71-ba84-5eac69a09f7c","type":"Grid"},{"id":"364f51ec-f58c-40e8-97b8-7f8e5d993a88","type":"Grid"}],"title":null,"tool_events":{"id":"80e99bf9-a192-4cca-a8c7-7b7539aed751","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"be040c5f-ed9a-4779-bc3b-a21e0842dcce","type":"DataRange1d"},"y_range":{"id":"24dc5168-23d2-4925-ad35-23e32131689c","type":"DataRange1d"}},"id":"53a8e2e2-a841-44c7-9c25-9ef98c1f564f","type":"Plot"}],"root_ids":["53a8e2e2-a841-44c7-9c25-9ef98c1f564f"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"8d3041ef-d8ed-4c15-badc-5ba52448fb62","elementid":"149b00db-b947-447b-a228-0cb504f5da32","modelid":"53a8e2e2-a841-44c7-9c25-9ef98c1f564f"}];
          
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