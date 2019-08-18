
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
  };var element = document.getElementById("9db17fe2-f6bf-4fe9-847a-9fead01c6182");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '9db17fe2-f6bf-4fe9-847a-9fead01c6182' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"62f8d1cb-a64f-4cf7-8b97-cc4a5fba3ef5":{"roots":{"references":[{"attributes":{"plot":{"id":"469df431-e354-48c1-9fe8-7e3d63ac0392","type":"Plot"},"ticker":{"id":"362ec1fb-6e20-4574-91ba-9201485f78a4","type":"BasicTicker"}},"id":"add8f356-3751-47fa-b9d5-695399a95897","type":"Grid"},{"attributes":{"data_source":{"id":"7597bd7f-2939-40ef-925a-cced70926e1d","type":"ColumnDataSource"},"glyph":{"id":"5e1d49e7-ae59-4913-afab-93dc8849c8ab","type":"CircleCross"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"54224a98-ab74-4338-a31d-6e5e3f02bf8b","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"4d8ab985-fa6e-4ea5-b107-d79417623de3","type":"DataRange1d"},{"attributes":{},"id":"82963c35-7f9c-42bc-8ff3-8a8d5317e94a","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"eb2b2bef-12a3-48c5-87c4-e9758bfa692d","type":"BasicTickFormatter"},"plot":{"id":"469df431-e354-48c1-9fe8-7e3d63ac0392","type":"Plot"},"ticker":{"id":"362ec1fb-6e20-4574-91ba-9201485f78a4","type":"BasicTicker"}},"id":"5f38615f-4bae-40b6-a7c5-3eed3a59d68a","type":"LinearAxis"},{"attributes":{},"id":"eb2b2bef-12a3-48c5-87c4-e9758bfa692d","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fb8072"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5e1d49e7-ae59-4913-afab-93dc8849c8ab","type":"CircleCross"},{"attributes":{},"id":"362ec1fb-6e20-4574-91ba-9201485f78a4","type":"BasicTicker"},{"attributes":{},"id":"5e93099f-d0e1-4627-9727-087e9900a168","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"7597bd7f-2939-40ef-925a-cced70926e1d","type":"ColumnDataSource"},{"attributes":{},"id":"0554c443-4cd4-4cab-ac2e-96d9332fdae5","type":"BasicTicker"},{"attributes":{"below":[{"id":"5f38615f-4bae-40b6-a7c5-3eed3a59d68a","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"630a9fc7-c219-425b-844c-9705307d1257","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"54224a98-ab74-4338-a31d-6e5e3f02bf8b","type":"GlyphRenderer"},{"id":"5f38615f-4bae-40b6-a7c5-3eed3a59d68a","type":"LinearAxis"},{"id":"630a9fc7-c219-425b-844c-9705307d1257","type":"LinearAxis"},{"id":"add8f356-3751-47fa-b9d5-695399a95897","type":"Grid"},{"id":"6d50309f-f770-4832-aaa4-877a511fa4bf","type":"Grid"}],"title":null,"tool_events":{"id":"5e93099f-d0e1-4627-9727-087e9900a168","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"4d8ab985-fa6e-4ea5-b107-d79417623de3","type":"DataRange1d"},"y_range":{"id":"fc926350-a8c7-440a-8685-49c6a22cfa87","type":"DataRange1d"}},"id":"469df431-e354-48c1-9fe8-7e3d63ac0392","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"469df431-e354-48c1-9fe8-7e3d63ac0392","type":"Plot"},"ticker":{"id":"0554c443-4cd4-4cab-ac2e-96d9332fdae5","type":"BasicTicker"}},"id":"6d50309f-f770-4832-aaa4-877a511fa4bf","type":"Grid"},{"attributes":{"formatter":{"id":"82963c35-7f9c-42bc-8ff3-8a8d5317e94a","type":"BasicTickFormatter"},"plot":{"id":"469df431-e354-48c1-9fe8-7e3d63ac0392","type":"Plot"},"ticker":{"id":"0554c443-4cd4-4cab-ac2e-96d9332fdae5","type":"BasicTicker"}},"id":"630a9fc7-c219-425b-844c-9705307d1257","type":"LinearAxis"},{"attributes":{"callback":null},"id":"fc926350-a8c7-440a-8685-49c6a22cfa87","type":"DataRange1d"}],"root_ids":["469df431-e354-48c1-9fe8-7e3d63ac0392"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"62f8d1cb-a64f-4cf7-8b97-cc4a5fba3ef5","elementid":"9db17fe2-f6bf-4fe9-847a-9fead01c6182","modelid":"469df431-e354-48c1-9fe8-7e3d63ac0392"}];
          
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