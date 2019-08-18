
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
  };var element = document.getElementById("8a167fc3-1ffe-4514-ae41-6215c8405658");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '8a167fc3-1ffe-4514-ae41-6215c8405658' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"3450e459-7085-4f19-b05e-0cf6f1ba47cb":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"bbbc26fb-f841-4761-9e87-3c1d219ceabc","type":"Plot"},"ticker":{"id":"dc01209a-1a1f-47f9-ab08-732108882886","type":"BasicTicker"}},"id":"bfb32c88-4fc5-47e6-a451-76672a4b79f6","type":"Grid"},{"attributes":{"data_source":{"id":"9eea9c21-2250-444a-819f-cd78da32b785","type":"ColumnDataSource"},"glyph":{"id":"35f31361-8a00-40fc-be5e-876d92d44b33","type":"Patch"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"848885b9-e893-4432-bbdf-09ad6290eb1f","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"7bd15029-a651-4987-b727-993657e99ed7","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"b43943b3-e3ae-47c3-826a-7d86c418ecad","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"848885b9-e893-4432-bbdf-09ad6290eb1f","type":"GlyphRenderer"},{"id":"7bd15029-a651-4987-b727-993657e99ed7","type":"LinearAxis"},{"id":"b43943b3-e3ae-47c3-826a-7d86c418ecad","type":"LinearAxis"},{"id":"b4ff1697-b3b7-428e-bf6b-a2382cb5136f","type":"Grid"},{"id":"bfb32c88-4fc5-47e6-a451-76672a4b79f6","type":"Grid"}],"title":null,"tool_events":{"id":"0423dfa4-c40b-4c94-a9cf-a57abdcd6a0a","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"6da95adb-7efb-48e6-a315-28b4798ea345","type":"DataRange1d"},"y_range":{"id":"7881b6e5-5755-47b5-bdb0-d823dd494a7e","type":"DataRange1d"}},"id":"bbbc26fb-f841-4761-9e87-3c1d219ceabc","type":"Plot"},{"attributes":{},"id":"1f793812-fe42-4d15-9476-c27e317cb760","type":"BasicTickFormatter"},{"attributes":{},"id":"dc01209a-1a1f-47f9-ab08-732108882886","type":"BasicTicker"},{"attributes":{"callback":null},"id":"6da95adb-7efb-48e6-a315-28b4798ea345","type":"DataRange1d"},{"attributes":{"callback":null},"id":"7881b6e5-5755-47b5-bdb0-d823dd494a7e","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-2.0,-1.8620689655172413,-1.7241379310344827,-1.5862068965517242,-1.4482758620689655,-1.3103448275862069,-1.1724137931034484,-1.0344827586206897,-0.896551724137931,-0.7586206896551724,-0.6206896551724137,-0.48275862068965525,-0.3448275862068966,-0.2068965517241379,-0.06896551724137945,0.06896551724137945,0.2068965517241379,0.34482758620689635,0.48275862068965525,0.6206896551724137,0.7586206896551726,0.896551724137931,1.0344827586206895,1.1724137931034484,1.3103448275862069,1.4482758620689653,1.5862068965517242,1.7241379310344827,1.862068965517241,2.0,2.0,1.862068965517241,1.7241379310344827,1.5862068965517242,1.4482758620689653,1.3103448275862069,1.1724137931034484,1.0344827586206895,0.896551724137931,0.7586206896551726,0.6206896551724137,0.48275862068965525,0.34482758620689635,0.2068965517241379,0.06896551724137945,-0.06896551724137945,-0.2068965517241379,-0.3448275862068966,-0.48275862068965525,-0.6206896551724137,-0.7586206896551724,-0.896551724137931,-1.0344827586206897,-1.1724137931034484,-1.3103448275862069,-1.4482758620689655,-1.5862068965517242,-1.7241379310344827,-1.8620689655172413,-2.0],"y":[4.0,3.4673008323424495,2.9726516052318663,2.5160523186682524,2.0975029726516055,1.7170035671819261,1.3745541022592156,1.0701545778834722,0.8038049940546969,0.5755053507728893,0.38525564803804985,0.23305588585017845,0.11890606420927469,0.04280618311533887,0.004756242568371006,0.004756242568371006,0.04280618311533887,0.11890606420927453,0.23305588585017845,0.38525564803804985,0.5755053507728897,0.8038049940546969,1.0701545778834718,1.3745541022592156,1.7170035671819261,2.0975029726516046,2.5160523186682524,2.9726516052318663,3.4673008323424486,4.0,8.2,7.52936979785969,6.896789536266349,6.302259215219976,5.74577883472057,5.227348394768133,4.746967895362664,4.304637336504161,3.900356718192628,3.5341260404280623,3.2059453032104637,2.9158145065398338,2.6637336504161713,2.449702734839477,2.2737217598097508,2.135790725326992,2.0359096313912013,1.9740784780023783,1.9502972651605233,1.9645659928656363,2.016884661117717,2.107253269916766,2.235671819262783,2.4021403091557674,2.6066587395957193,2.84922711058264,3.1298454221165284,3.448513674197384,3.805231866825208,4.2]}},"id":"9eea9c21-2250-444a-819f-cd78da32b785","type":"ColumnDataSource"},{"attributes":{},"id":"fa758a1e-a626-40f0-9175-c7e20b315a0b","type":"BasicTicker"},{"attributes":{"formatter":{"id":"1f793812-fe42-4d15-9476-c27e317cb760","type":"BasicTickFormatter"},"plot":{"id":"bbbc26fb-f841-4761-9e87-3c1d219ceabc","type":"Plot"},"ticker":{"id":"fa758a1e-a626-40f0-9175-c7e20b315a0b","type":"BasicTicker"}},"id":"7bd15029-a651-4987-b727-993657e99ed7","type":"LinearAxis"},{"attributes":{},"id":"75a8bd65-a9a7-4190-9c33-6413298e3efc","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"bbbc26fb-f841-4761-9e87-3c1d219ceabc","type":"Plot"},"ticker":{"id":"fa758a1e-a626-40f0-9175-c7e20b315a0b","type":"BasicTicker"}},"id":"b4ff1697-b3b7-428e-bf6b-a2382cb5136f","type":"Grid"},{"attributes":{},"id":"0423dfa4-c40b-4c94-a9cf-a57abdcd6a0a","type":"ToolEvents"},{"attributes":{"formatter":{"id":"75a8bd65-a9a7-4190-9c33-6413298e3efc","type":"BasicTickFormatter"},"plot":{"id":"bbbc26fb-f841-4761-9e87-3c1d219ceabc","type":"Plot"},"ticker":{"id":"dc01209a-1a1f-47f9-ab08-732108882886","type":"BasicTicker"}},"id":"b43943b3-e3ae-47c3-826a-7d86c418ecad","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#a6cee3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35f31361-8a00-40fc-be5e-876d92d44b33","type":"Patch"}],"root_ids":["bbbc26fb-f841-4761-9e87-3c1d219ceabc"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"3450e459-7085-4f19-b05e-0cf6f1ba47cb","elementid":"8a167fc3-1ffe-4514-ae41-6215c8405658","modelid":"bbbc26fb-f841-4761-9e87-3c1d219ceabc"}];
          
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