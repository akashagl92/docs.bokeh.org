
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
  };var element = document.getElementById("97f7e7ab-0599-4324-9c20-66cacfa3c830");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '97f7e7ab-0599-4324-9c20-66cacfa3c830' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"7e59f39d-a847-4f42-ac38-21fb9387e1c4":{"roots":{"references":[{"attributes":{},"id":"34ab6499-170d-4aab-9dbe-66051c6502ad","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":-2.0},"length":{"field":"l","units":"data"},"line_color":{"value":"#fb8072"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"6e987789-e005-4d4a-a998-dada04ae2d0b","type":"Ray"},{"attributes":{"plot":{"id":"2a6791bb-8ee5-4fd1-9bf2-d1cc17c4e2ec","type":"Plot"},"ticker":{"id":"b2d18a1a-ba9e-40d5-9a5a-573f053d0471","type":"BasicTicker"}},"id":"5536c5f3-e731-4cb2-b511-f35e84a59672","type":"Grid"},{"attributes":{"formatter":{"id":"70af1cc5-9b5a-4a81-b98e-43c1c01879a8","type":"BasicTickFormatter"},"plot":{"id":"2a6791bb-8ee5-4fd1-9bf2-d1cc17c4e2ec","type":"Plot"},"ticker":{"id":"b2d18a1a-ba9e-40d5-9a5a-573f053d0471","type":"BasicTicker"}},"id":"ee34fb94-4902-40b7-8763-08e542ea34ed","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","l"],"data":{"l":[15.0,17.5,20.0,22.5,25.0,27.5,30.0,32.5,35.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"a9cd65cd-55b5-4fe5-8106-deca8d68b218","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"2a6791bb-8ee5-4fd1-9bf2-d1cc17c4e2ec","type":"Plot"},"ticker":{"id":"08bc4e92-bf04-4bf8-91e6-179e3bf7cc6d","type":"BasicTicker"}},"id":"51568aba-b62e-47f4-a810-035556b079c5","type":"Grid"},{"attributes":{},"id":"70af1cc5-9b5a-4a81-b98e-43c1c01879a8","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"ee34fb94-4902-40b7-8763-08e542ea34ed","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"e5810ddf-6e59-42a3-ae1e-4059be89583c","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"0620c9a3-19a2-4d74-998a-9584f20b546e","type":"GlyphRenderer"},{"id":"ee34fb94-4902-40b7-8763-08e542ea34ed","type":"LinearAxis"},{"id":"e5810ddf-6e59-42a3-ae1e-4059be89583c","type":"LinearAxis"},{"id":"5536c5f3-e731-4cb2-b511-f35e84a59672","type":"Grid"},{"id":"51568aba-b62e-47f4-a810-035556b079c5","type":"Grid"}],"title":null,"tool_events":{"id":"276b7b41-aa06-4e8e-8467-8e8df63c1ab7","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"3488c730-6d47-47a8-92c8-a99b549607e8","type":"DataRange1d"},"y_range":{"id":"a58bc1f8-3082-430b-9af2-8eb7f6a5756e","type":"DataRange1d"}},"id":"2a6791bb-8ee5-4fd1-9bf2-d1cc17c4e2ec","type":"Plot"},{"attributes":{"formatter":{"id":"34ab6499-170d-4aab-9dbe-66051c6502ad","type":"BasicTickFormatter"},"plot":{"id":"2a6791bb-8ee5-4fd1-9bf2-d1cc17c4e2ec","type":"Plot"},"ticker":{"id":"08bc4e92-bf04-4bf8-91e6-179e3bf7cc6d","type":"BasicTicker"}},"id":"e5810ddf-6e59-42a3-ae1e-4059be89583c","type":"LinearAxis"},{"attributes":{},"id":"b2d18a1a-ba9e-40d5-9a5a-573f053d0471","type":"BasicTicker"},{"attributes":{},"id":"08bc4e92-bf04-4bf8-91e6-179e3bf7cc6d","type":"BasicTicker"},{"attributes":{},"id":"276b7b41-aa06-4e8e-8467-8e8df63c1ab7","type":"ToolEvents"},{"attributes":{"callback":null},"id":"a58bc1f8-3082-430b-9af2-8eb7f6a5756e","type":"DataRange1d"},{"attributes":{"callback":null},"id":"3488c730-6d47-47a8-92c8-a99b549607e8","type":"DataRange1d"},{"attributes":{"data_source":{"id":"a9cd65cd-55b5-4fe5-8106-deca8d68b218","type":"ColumnDataSource"},"glyph":{"id":"6e987789-e005-4d4a-a998-dada04ae2d0b","type":"Ray"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0620c9a3-19a2-4d74-998a-9584f20b546e","type":"GlyphRenderer"}],"root_ids":["2a6791bb-8ee5-4fd1-9bf2-d1cc17c4e2ec"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"7e59f39d-a847-4f42-ac38-21fb9387e1c4","elementid":"97f7e7ab-0599-4324-9c20-66cacfa3c830","modelid":"2a6791bb-8ee5-4fd1-9bf2-d1cc17c4e2ec"}];
          
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