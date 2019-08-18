
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
  };var element = document.getElementById("b4b2c8a0-fe87-4263-a193-72769399861d");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'b4b2c8a0-fe87-4263-a193-72769399861d' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"cc2e1975-21a5-4758-ad00-fd67ae4e0c14":{"roots":{"references":[{"attributes":{"formatter":{"id":"164fe6d9-3aaa-4a8f-92a9-06d506074bb6","type":"BasicTickFormatter"},"plot":{"id":"36c06f23-c823-4448-bf6e-416cb7cd91df","type":"Plot"},"ticker":{"id":"51d161f9-8d59-41fe-a23f-5eaedb1e02e9","type":"BasicTicker"}},"id":"18808e61-0e0a-41f6-b647-d9c578c461fa","type":"LinearAxis"},{"attributes":{"plot":{"id":"36c06f23-c823-4448-bf6e-416cb7cd91df","type":"Plot"},"ticker":{"id":"1a410344-92f8-43e4-9824-c0783d72e966","type":"BasicTicker"}},"id":"8636bebc-78e6-436c-b8ad-1200e0884cf5","type":"Grid"},{"attributes":{},"id":"1a410344-92f8-43e4-9824-c0783d72e966","type":"BasicTicker"},{"attributes":{},"id":"89936563-901b-4adc-ab29-dbcc29c93a8e","type":"BasicTickFormatter"},{"attributes":{},"id":"164fe6d9-3aaa-4a8f-92a9-06d506074bb6","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"015dd3ba-c10e-4129-a32c-d0ea50241b65","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"36c06f23-c823-4448-bf6e-416cb7cd91df","type":"Plot"},"ticker":{"id":"51d161f9-8d59-41fe-a23f-5eaedb1e02e9","type":"BasicTicker"}},"id":"a405628e-3281-4121-bf8f-0fd1e4bdaa66","type":"Grid"},{"attributes":{"formatter":{"id":"89936563-901b-4adc-ab29-dbcc29c93a8e","type":"BasicTickFormatter"},"plot":{"id":"36c06f23-c823-4448-bf6e-416cb7cd91df","type":"Plot"},"ticker":{"id":"1a410344-92f8-43e4-9824-c0783d72e966","type":"BasicTicker"}},"id":"1e9042f1-7a56-4888-adc5-3e24f9827e72","type":"LinearAxis"},{"attributes":{},"id":"602a90bd-a37c-4c38-9bac-8e7078c2e292","type":"ToolEvents"},{"attributes":{"callback":null},"id":"ea452772-95e8-478d-ad33-a01de651385b","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"e8107af5-3e9d-4668-9c92-986b8c3722e5","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#dd1c77"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"beba91c2-1626-4298-ac06-c3122d3d69c6","type":"CircleX"},{"attributes":{"below":[{"id":"1e9042f1-7a56-4888-adc5-3e24f9827e72","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"18808e61-0e0a-41f6-b647-d9c578c461fa","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"9813338a-d395-4c8f-82ce-457296dd599c","type":"GlyphRenderer"},{"id":"1e9042f1-7a56-4888-adc5-3e24f9827e72","type":"LinearAxis"},{"id":"18808e61-0e0a-41f6-b647-d9c578c461fa","type":"LinearAxis"},{"id":"8636bebc-78e6-436c-b8ad-1200e0884cf5","type":"Grid"},{"id":"a405628e-3281-4121-bf8f-0fd1e4bdaa66","type":"Grid"}],"title":null,"tool_events":{"id":"602a90bd-a37c-4c38-9bac-8e7078c2e292","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"015dd3ba-c10e-4129-a32c-d0ea50241b65","type":"DataRange1d"},"y_range":{"id":"ea452772-95e8-478d-ad33-a01de651385b","type":"DataRange1d"}},"id":"36c06f23-c823-4448-bf6e-416cb7cd91df","type":"Plot"},{"attributes":{"data_source":{"id":"e8107af5-3e9d-4668-9c92-986b8c3722e5","type":"ColumnDataSource"},"glyph":{"id":"beba91c2-1626-4298-ac06-c3122d3d69c6","type":"CircleX"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9813338a-d395-4c8f-82ce-457296dd599c","type":"GlyphRenderer"},{"attributes":{},"id":"51d161f9-8d59-41fe-a23f-5eaedb1e02e9","type":"BasicTicker"}],"root_ids":["36c06f23-c823-4448-bf6e-416cb7cd91df"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"cc2e1975-21a5-4758-ad00-fd67ae4e0c14","elementid":"b4b2c8a0-fe87-4263-a193-72769399861d","modelid":"36c06f23-c823-4448-bf6e-416cb7cd91df"}];
          
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