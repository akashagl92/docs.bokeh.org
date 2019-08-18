
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
  };var element = document.getElementById("0d0a34ba-0c2c-4989-99ea-bbcdd7dbfabe");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '0d0a34ba-0c2c-4989-99ea-bbcdd7dbfabe' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"4aaa5509-2618-42a5-a09f-eabb49d6e267":{"roots":{"references":[{"attributes":{"plot":{"id":"cc707d25-ed03-4187-9bc9-9bd11895fef2","type":"Plot"},"ticker":{"id":"c38d9c01-0ea2-4d13-8544-89d8c035f81f","type":"BasicTicker"}},"id":"069fd8ae-aed5-4af9-97c8-009241fed3ed","type":"Grid"},{"attributes":{},"id":"9dc7940a-38be-4d34-af5c-f1028dfc8bc0","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"4f16017a-aad4-40f5-bea1-b56e601dca18","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"cc707d25-ed03-4187-9bc9-9bd11895fef2","type":"Plot"},"ticker":{"id":"7ed8aaf5-626c-4ceb-ad4e-7e698c46156d","type":"BasicTicker"}},"id":"62733702-19a8-4a71-bf59-a0127440e8ac","type":"Grid"},{"attributes":{},"id":"9748e6d2-a867-4b71-8770-ca77126d453d","type":"BasicTickFormatter"},{"attributes":{},"id":"5c409e74-bf1a-4dd2-b3fc-94225ff58e3c","type":"ToolEvents"},{"attributes":{},"id":"7ed8aaf5-626c-4ceb-ad4e-7e698c46156d","type":"BasicTicker"},{"attributes":{"formatter":{"id":"9748e6d2-a867-4b71-8770-ca77126d453d","type":"BasicTickFormatter"},"plot":{"id":"cc707d25-ed03-4187-9bc9-9bd11895fef2","type":"Plot"},"ticker":{"id":"7ed8aaf5-626c-4ceb-ad4e-7e698c46156d","type":"BasicTicker"}},"id":"2a5d3274-5e0d-4e3e-9d30-5b1f225a052b","type":"LinearAxis"},{"attributes":{"callback":null},"id":"7f10cda4-ee74-471b-8692-a4b1fb80e84d","type":"DataRange1d"},{"attributes":{"formatter":{"id":"9dc7940a-38be-4d34-af5c-f1028dfc8bc0","type":"BasicTickFormatter"},"plot":{"id":"cc707d25-ed03-4187-9bc9-9bd11895fef2","type":"Plot"},"ticker":{"id":"c38d9c01-0ea2-4d13-8544-89d8c035f81f","type":"BasicTicker"}},"id":"1807165e-e266-436d-8894-656fd9fd1424","type":"LinearAxis"},{"attributes":{},"id":"c38d9c01-0ea2-4d13-8544-89d8c035f81f","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"396e726b-7ab0-428b-bc5c-f59f335e38e2","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"1807165e-e266-436d-8894-656fd9fd1424","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"2a5d3274-5e0d-4e3e-9d30-5b1f225a052b","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"c572a555-3057-466e-8762-a3dad0cb3021","type":"GlyphRenderer"},{"id":"1807165e-e266-436d-8894-656fd9fd1424","type":"LinearAxis"},{"id":"2a5d3274-5e0d-4e3e-9d30-5b1f225a052b","type":"LinearAxis"},{"id":"069fd8ae-aed5-4af9-97c8-009241fed3ed","type":"Grid"},{"id":"62733702-19a8-4a71-bf59-a0127440e8ac","type":"Grid"}],"title":null,"tool_events":{"id":"5c409e74-bf1a-4dd2-b3fc-94225ff58e3c","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"4f16017a-aad4-40f5-bea1-b56e601dca18","type":"DataRange1d"},"y_range":{"id":"7f10cda4-ee74-471b-8692-a4b1fb80e84d","type":"DataRange1d"}},"id":"cc707d25-ed03-4187-9bc9-9bd11895fef2","type":"Plot"},{"attributes":{"data_source":{"id":"396e726b-7ab0-428b-bc5c-f59f335e38e2","type":"ColumnDataSource"},"glyph":{"id":"ea29f551-a17e-4c24-8ba7-2f381f151d29","type":"Asterisk"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c572a555-3057-466e-8762-a3dad0cb3021","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#f0027f"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ea29f551-a17e-4c24-8ba7-2f381f151d29","type":"Asterisk"}],"root_ids":["cc707d25-ed03-4187-9bc9-9bd11895fef2"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"4aaa5509-2618-42a5-a09f-eabb49d6e267","elementid":"0d0a34ba-0c2c-4989-99ea-bbcdd7dbfabe","modelid":"cc707d25-ed03-4187-9bc9-9bd11895fef2"}];
          
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