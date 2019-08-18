
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
  };var element = document.getElementById("1987cbee-e2fc-4bbc-b65f-8da0cc117388");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '1987cbee-e2fc-4bbc-b65f-8da0cc117388' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"b854a268-30b3-46d0-9257-caac498b2b85":{"roots":{"references":[{"attributes":{"callback":null},"id":"ea4310fa-8c9a-43ed-9d60-1a8b794463f0","type":"DataRange1d"},{"attributes":{"plot":{"id":"530acd51-1e8a-43bc-954d-db8e24414c97","type":"Plot"},"ticker":{"id":"db53afe8-c325-4548-a3bb-48070a0bfdcb","type":"BasicTicker"}},"id":"6e3d835c-419e-4068-9445-2536fc626c37","type":"Grid"},{"attributes":{},"id":"db53afe8-c325-4548-a3bb-48070a0bfdcb","type":"BasicTicker"},{"attributes":{},"id":"6c95ada3-a69a-4a72-af8a-af8876926c69","type":"ToolEvents"},{"attributes":{"formatter":{"id":"575da1f8-c4d4-457e-85c4-ddfe35badb2a","type":"BasicTickFormatter"},"plot":{"id":"530acd51-1e8a-43bc-954d-db8e24414c97","type":"Plot"},"ticker":{"id":"db53afe8-c325-4548-a3bb-48070a0bfdcb","type":"BasicTicker"}},"id":"3b9019a7-381d-4a2c-ac7e-8911254a50bf","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["ym01","xp01","y","x","xp02","xm01","yp01"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"xm01":[-2.1,-1.6,-1.1,-0.6,-0.1,0.4,0.9,1.4,1.9],"xp01":[-1.9,-1.4,-0.9,-0.4,0.1,0.6,1.1,1.6,2.1],"xp02":[-1.6,-1.1,-0.6,-0.09999999999999998,0.4,0.9,1.4,1.9,2.4],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0],"ym01":[3.8,2.05,0.8,0.04999999999999999,-0.2,0.04999999999999999,0.8,2.05,3.8],"yp01":[4.2,2.45,1.2,0.45,0.2,0.45,1.2,2.45,4.2]}},"id":"dff6d89a-d46f-4bb1-9708-09f95a8055e4","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"032e50b6-d4b6-4cb8-a5f3-af35e0698236","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"530acd51-1e8a-43bc-954d-db8e24414c97","type":"Plot"},"ticker":{"id":"475073ad-3fd2-4e12-9c25-e9df12a6a549","type":"BasicTicker"}},"id":"56ef012a-a7d7-4902-bd80-2757a46e2a61","type":"Grid"},{"attributes":{"below":[{"id":"3b9019a7-381d-4a2c-ac7e-8911254a50bf","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"e2955430-2933-42b0-ba26-53512635523e","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"61824506-5c74-4038-8f68-b775636dcebe","type":"GlyphRenderer"},{"id":"3b9019a7-381d-4a2c-ac7e-8911254a50bf","type":"LinearAxis"},{"id":"e2955430-2933-42b0-ba26-53512635523e","type":"LinearAxis"},{"id":"6e3d835c-419e-4068-9445-2536fc626c37","type":"Grid"},{"id":"56ef012a-a7d7-4902-bd80-2757a46e2a61","type":"Grid"}],"title":null,"tool_events":{"id":"6c95ada3-a69a-4a72-af8a-af8876926c69","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"032e50b6-d4b6-4cb8-a5f3-af35e0698236","type":"DataRange1d"},"y_range":{"id":"ea4310fa-8c9a-43ed-9d60-1a8b794463f0","type":"DataRange1d"}},"id":"530acd51-1e8a-43bc-954d-db8e24414c97","type":"Plot"},{"attributes":{"formatter":{"id":"bbf197b3-b551-42ea-b6c1-63d3a9425272","type":"BasicTickFormatter"},"plot":{"id":"530acd51-1e8a-43bc-954d-db8e24414c97","type":"Plot"},"ticker":{"id":"475073ad-3fd2-4e12-9c25-e9df12a6a549","type":"BasicTicker"}},"id":"e2955430-2933-42b0-ba26-53512635523e","type":"LinearAxis"},{"attributes":{},"id":"575da1f8-c4d4-457e-85c4-ddfe35badb2a","type":"BasicTickFormatter"},{"attributes":{},"id":"475073ad-3fd2-4e12-9c25-e9df12a6a549","type":"BasicTicker"},{"attributes":{},"id":"bbf197b3-b551-42ea-b6c1-63d3a9425272","type":"BasicTickFormatter"},{"attributes":{"cx0":{"field":"xp01"},"cx1":{"field":"xm01"},"cy0":{"field":"yp01"},"cy1":{"field":"ym01"},"line_color":{"value":"#D95F02"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"a0612877-33b8-4629-9cf5-301cdced6541","type":"Bezier"},{"attributes":{"data_source":{"id":"dff6d89a-d46f-4bb1-9708-09f95a8055e4","type":"ColumnDataSource"},"glyph":{"id":"a0612877-33b8-4629-9cf5-301cdced6541","type":"Bezier"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"61824506-5c74-4038-8f68-b775636dcebe","type":"GlyphRenderer"}],"root_ids":["530acd51-1e8a-43bc-954d-db8e24414c97"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"b854a268-30b3-46d0-9257-caac498b2b85","elementid":"1987cbee-e2fc-4bbc-b65f-8da0cc117388","modelid":"530acd51-1e8a-43bc-954d-db8e24414c97"}];
          
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