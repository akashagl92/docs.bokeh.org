
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
  };var element = document.getElementById("bfb1c8f5-6622-4a1b-8409-2afea4884384");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'bfb1c8f5-6622-4a1b-8409-2afea4884384' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"55036b39-5629-4e8c-bd34-c535a48564e3":{"roots":{"references":[{"attributes":{"callback":null},"id":"2662c9e1-27eb-4923-b84f-2dc107b7b62c","type":"DataRange1d"},{"attributes":{},"id":"5eb11647-959d-45cf-9d6f-45052bda2f61","type":"BasicTicker"},{"attributes":{"formatter":{"id":"355c5fb6-93cb-4c90-a6e6-0c31809b3de5","type":"BasicTickFormatter"},"plot":{"id":"85b1e5a0-9f25-4ccc-83f4-65e4471efaca","type":"Plot"},"ticker":{"id":"5eb11647-959d-45cf-9d6f-45052bda2f61","type":"BasicTicker"}},"id":"7b2e1a2a-2253-4515-8a81-3713afb15e0a","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"85b1e5a0-9f25-4ccc-83f4-65e4471efaca","type":"Plot"},"ticker":{"id":"5eb11647-959d-45cf-9d6f-45052bda2f61","type":"BasicTicker"}},"id":"58dd4e3e-f470-4b66-b3e0-f602802092e3","type":"Grid"},{"attributes":{"fill_color":{"value":"#7fc97f"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"a9cb94fe-aa55-4124-9f67-8a97d97ed1f3","type":"Annulus"},{"attributes":{"formatter":{"id":"f3144b00-c887-43dc-8d1a-cd0161d0c82d","type":"BasicTickFormatter"},"plot":{"id":"85b1e5a0-9f25-4ccc-83f4-65e4471efaca","type":"Plot"},"ticker":{"id":"20a8d5c0-5db3-44a4-b3e5-4cb0759094e4","type":"BasicTicker"}},"id":"080e1b03-9bd6-4b02-a1f5-d9dc178aeca4","type":"LinearAxis"},{"attributes":{"data_source":{"id":"748a8e1a-559f-4bbc-aa31-14239be40a4a","type":"ColumnDataSource"},"glyph":{"id":"a9cb94fe-aa55-4124-9f67-8a97d97ed1f3","type":"Annulus"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2b56083b-9b82-4cd9-b202-23495f75b2b7","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"85b1e5a0-9f25-4ccc-83f4-65e4471efaca","type":"Plot"},"ticker":{"id":"20a8d5c0-5db3-44a4-b3e5-4cb0759094e4","type":"BasicTicker"}},"id":"add6109c-485f-43d8-ba9b-c8d49745c72a","type":"Grid"},{"attributes":{"below":[{"id":"080e1b03-9bd6-4b02-a1f5-d9dc178aeca4","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"7b2e1a2a-2253-4515-8a81-3713afb15e0a","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"2b56083b-9b82-4cd9-b202-23495f75b2b7","type":"GlyphRenderer"},{"id":"080e1b03-9bd6-4b02-a1f5-d9dc178aeca4","type":"LinearAxis"},{"id":"7b2e1a2a-2253-4515-8a81-3713afb15e0a","type":"LinearAxis"},{"id":"add6109c-485f-43d8-ba9b-c8d49745c72a","type":"Grid"},{"id":"58dd4e3e-f470-4b66-b3e0-f602802092e3","type":"Grid"}],"title":null,"tool_events":{"id":"6f353415-84c5-4b28-a5c9-1329fd0e3f91","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"2662c9e1-27eb-4923-b84f-2dc107b7b62c","type":"DataRange1d"},"y_range":{"id":"4b7fa03d-dbdd-48a4-82b9-4dea75748f1d","type":"DataRange1d"}},"id":"85b1e5a0-9f25-4ccc-83f4-65e4471efaca","type":"Plot"},{"attributes":{},"id":"f3144b00-c887-43dc-8d1a-cd0161d0c82d","type":"BasicTickFormatter"},{"attributes":{},"id":"20a8d5c0-5db3-44a4-b3e5-4cb0759094e4","type":"BasicTicker"},{"attributes":{"callback":null},"id":"4b7fa03d-dbdd-48a4-82b9-4dea75748f1d","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"748a8e1a-559f-4bbc-aa31-14239be40a4a","type":"ColumnDataSource"},{"attributes":{},"id":"355c5fb6-93cb-4c90-a6e6-0c31809b3de5","type":"BasicTickFormatter"},{"attributes":{},"id":"6f353415-84c5-4b28-a5c9-1329fd0e3f91","type":"ToolEvents"}],"root_ids":["85b1e5a0-9f25-4ccc-83f4-65e4471efaca"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"55036b39-5629-4e8c-bd34-c535a48564e3","elementid":"bfb1c8f5-6622-4a1b-8409-2afea4884384","modelid":"85b1e5a0-9f25-4ccc-83f4-65e4471efaca"}];
          
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