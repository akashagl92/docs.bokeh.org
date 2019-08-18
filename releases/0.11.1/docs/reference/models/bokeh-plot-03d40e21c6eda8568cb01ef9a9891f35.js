
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
  };var element = document.getElementById("5baed680-62ff-4581-9f2d-388f90e2fcd3");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '5baed680-62ff-4581-9f2d-388f90e2fcd3' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"d34a1772-c355-4b24-b427-8ae2254b2e84":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","h","x","w"],"data":{"h":[0.5,0.4125,0.35,0.3125,0.3,0.3125,0.35,0.4125,0.5],"w":[0.16666666666666666,0.19999999999999998,0.23333333333333334,0.26666666666666666,0.3,0.3333333333333333,0.36666666666666664,0.4,0.43333333333333335],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"cad22aa8-2e4b-4393-a269-19d172d5268b","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"5c285c8f-00d1-4eb7-8834-b8312384f7b2","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"eac60eac-59fb-428e-ab0f-1043dc9f7914","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"2c54fed7-39a3-4cdf-b1c9-3378a9844cfa","type":"GlyphRenderer"},{"id":"5c285c8f-00d1-4eb7-8834-b8312384f7b2","type":"LinearAxis"},{"id":"eac60eac-59fb-428e-ab0f-1043dc9f7914","type":"LinearAxis"},{"id":"ef56a5d2-074f-424b-94dd-e71173c6e76f","type":"Grid"},{"id":"ffb42ce5-87af-427d-886c-3ffaee02cd6c","type":"Grid"}],"title":null,"tool_events":{"id":"f858e498-72b1-4344-bf75-2f63020a4a6e","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"e15e0d0a-9cf1-47a9-8f5f-e67aa53b123d","type":"DataRange1d"},"y_range":{"id":"5026ef23-104c-42d4-b1fc-628cfdac3e2e","type":"DataRange1d"}},"id":"65e81e08-7750-41e0-8b8b-eecece41ab3c","type":"Plot"},{"attributes":{},"id":"bf272dd7-45fb-41f0-ab30-88b316602e63","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"bf272dd7-45fb-41f0-ab30-88b316602e63","type":"BasicTickFormatter"},"plot":{"id":"65e81e08-7750-41e0-8b8b-eecece41ab3c","type":"Plot"},"ticker":{"id":"6c4c14b0-f797-4468-8ed7-81584c702a4b","type":"BasicTicker"}},"id":"5c285c8f-00d1-4eb7-8834-b8312384f7b2","type":"LinearAxis"},{"attributes":{"callback":null},"id":"5026ef23-104c-42d4-b1fc-628cfdac3e2e","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"65e81e08-7750-41e0-8b8b-eecece41ab3c","type":"Plot"},"ticker":{"id":"868d4444-5a1b-44f3-af70-b5a05682342f","type":"BasicTicker"}},"id":"ffb42ce5-87af-427d-886c-3ffaee02cd6c","type":"Grid"},{"attributes":{},"id":"6c4c14b0-f797-4468-8ed7-81584c702a4b","type":"BasicTicker"},{"attributes":{"data_source":{"id":"cad22aa8-2e4b-4393-a269-19d172d5268b","type":"ColumnDataSource"},"glyph":{"id":"6b14deee-1538-46c2-8cd3-69e58b264782","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2c54fed7-39a3-4cdf-b1c9-3378a9844cfa","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"65e81e08-7750-41e0-8b8b-eecece41ab3c","type":"Plot"},"ticker":{"id":"6c4c14b0-f797-4468-8ed7-81584c702a4b","type":"BasicTicker"}},"id":"ef56a5d2-074f-424b-94dd-e71173c6e76f","type":"Grid"},{"attributes":{"formatter":{"id":"419884af-947b-49df-b5d4-4ce9b39b0b4a","type":"BasicTickFormatter"},"plot":{"id":"65e81e08-7750-41e0-8b8b-eecece41ab3c","type":"Plot"},"ticker":{"id":"868d4444-5a1b-44f3-af70-b5a05682342f","type":"BasicTicker"}},"id":"eac60eac-59fb-428e-ab0f-1043dc9f7914","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#CAB2D6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6b14deee-1538-46c2-8cd3-69e58b264782","type":"Rect"},{"attributes":{},"id":"419884af-947b-49df-b5d4-4ce9b39b0b4a","type":"BasicTickFormatter"},{"attributes":{},"id":"f858e498-72b1-4344-bf75-2f63020a4a6e","type":"ToolEvents"},{"attributes":{},"id":"868d4444-5a1b-44f3-af70-b5a05682342f","type":"BasicTicker"},{"attributes":{"callback":null},"id":"e15e0d0a-9cf1-47a9-8f5f-e67aa53b123d","type":"DataRange1d"}],"root_ids":["65e81e08-7750-41e0-8b8b-eecece41ab3c"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"d34a1772-c355-4b24-b427-8ae2254b2e84","elementid":"5baed680-62ff-4581-9f2d-388f90e2fcd3","modelid":"65e81e08-7750-41e0-8b8b-eecece41ab3c"}];
          
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