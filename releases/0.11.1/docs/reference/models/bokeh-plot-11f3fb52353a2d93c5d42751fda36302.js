
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
  };var element = document.getElementById("d276a98f-83ac-4c84-a03f-497189e07ccc");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'd276a98f-83ac-4c84-a03f-497189e07ccc' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"aeba2590-9386-4422-8e9f-fdad2b9fd8ed":{"roots":{"references":[{"attributes":{"data_source":{"id":"6bb72cc6-ee08-4d2d-9e63-b8a633c0f268","type":"ColumnDataSource"},"glyph":{"id":"995137f5-8df7-4118-86ee-0c63250458c6","type":"X"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d9e7dda3-9b88-4bfd-8941-705f9da5dae0","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"c40b5677-4567-4c9a-aad4-d45070f37d62","type":"DataRange1d"},{"attributes":{"below":[{"id":"58738100-c6a5-489a-a376-6b5abd602855","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"a07428bd-7102-4ed6-a8e7-399ac8466677","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"d9e7dda3-9b88-4bfd-8941-705f9da5dae0","type":"GlyphRenderer"},{"id":"58738100-c6a5-489a-a376-6b5abd602855","type":"LinearAxis"},{"id":"a07428bd-7102-4ed6-a8e7-399ac8466677","type":"LinearAxis"},{"id":"ebc881da-0af4-4e9d-bd05-1ff1defe0c00","type":"Grid"},{"id":"64071392-5eb2-4111-83d2-2df799724d15","type":"Grid"}],"title":null,"tool_events":{"id":"01eb04f8-b4a3-4139-a3e9-9aa1fa190272","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"c40b5677-4567-4c9a-aad4-d45070f37d62","type":"DataRange1d"},"y_range":{"id":"bebb3e14-a50c-40c7-be3f-11147bf04891","type":"DataRange1d"}},"id":"73a764a5-7be3-449c-b729-c94fc4e91bc5","type":"Plot"},{"attributes":{},"id":"628f4189-00ff-4ac7-ac03-b9ba28a59269","type":"BasicTicker"},{"attributes":{"formatter":{"id":"16143a42-d4a8-457d-82e6-27aef998d448","type":"BasicTickFormatter"},"plot":{"id":"73a764a5-7be3-449c-b729-c94fc4e91bc5","type":"Plot"},"ticker":{"id":"b3a862ea-a869-4cd5-84d3-3f299f2fcdf0","type":"BasicTicker"}},"id":"58738100-c6a5-489a-a376-6b5abd602855","type":"LinearAxis"},{"attributes":{},"id":"01eb04f8-b4a3-4139-a3e9-9aa1fa190272","type":"ToolEvents"},{"attributes":{"plot":{"id":"73a764a5-7be3-449c-b729-c94fc4e91bc5","type":"Plot"},"ticker":{"id":"b3a862ea-a869-4cd5-84d3-3f299f2fcdf0","type":"BasicTicker"}},"id":"ebc881da-0af4-4e9d-bd05-1ff1defe0c00","type":"Grid"},{"attributes":{"formatter":{"id":"58e4eb42-b837-4aae-a2bb-e19024651f17","type":"BasicTickFormatter"},"plot":{"id":"73a764a5-7be3-449c-b729-c94fc4e91bc5","type":"Plot"},"ticker":{"id":"628f4189-00ff-4ac7-ac03-b9ba28a59269","type":"BasicTicker"}},"id":"a07428bd-7102-4ed6-a8e7-399ac8466677","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"6bb72cc6-ee08-4d2d-9e63-b8a633c0f268","type":"ColumnDataSource"},{"attributes":{},"id":"b3a862ea-a869-4cd5-84d3-3f299f2fcdf0","type":"BasicTicker"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"995137f5-8df7-4118-86ee-0c63250458c6","type":"X"},{"attributes":{"dimension":1,"plot":{"id":"73a764a5-7be3-449c-b729-c94fc4e91bc5","type":"Plot"},"ticker":{"id":"628f4189-00ff-4ac7-ac03-b9ba28a59269","type":"BasicTicker"}},"id":"64071392-5eb2-4111-83d2-2df799724d15","type":"Grid"},{"attributes":{},"id":"58e4eb42-b837-4aae-a2bb-e19024651f17","type":"BasicTickFormatter"},{"attributes":{},"id":"16143a42-d4a8-457d-82e6-27aef998d448","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"bebb3e14-a50c-40c7-be3f-11147bf04891","type":"DataRange1d"}],"root_ids":["73a764a5-7be3-449c-b729-c94fc4e91bc5"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"aeba2590-9386-4422-8e9f-fdad2b9fd8ed","elementid":"d276a98f-83ac-4c84-a03f-497189e07ccc","modelid":"73a764a5-7be3-449c-b729-c94fc4e91bc5"}];
          
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