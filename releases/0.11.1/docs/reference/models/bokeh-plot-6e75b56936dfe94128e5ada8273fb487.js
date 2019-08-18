
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
  };var element = document.getElementById("da91897b-2ea1-4816-8f38-55a325bc9dae");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'da91897b-2ea1-4816-8f38-55a325bc9dae' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"fc0b9cfb-a099-4cd5-9ab3-d1916810a8db":{"roots":{"references":[{"attributes":{},"id":"7c1df348-346d-4ea5-8132-18109079a5e8","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-2.0,-1.8620689655172413,-1.7241379310344827,-1.5862068965517242,-1.4482758620689655,-1.3103448275862069,-1.1724137931034484,-1.0344827586206897,-0.896551724137931,-0.7586206896551724,-0.6206896551724137,-0.48275862068965525,-0.3448275862068966,-0.2068965517241379,-0.06896551724137945,0.06896551724137945,0.2068965517241379,0.34482758620689635,0.48275862068965525,0.6206896551724137,0.7586206896551726,0.896551724137931,1.0344827586206895,1.1724137931034484,1.3103448275862069,1.4482758620689653,1.5862068965517242,1.7241379310344827,1.862068965517241,2.0],"y":[4.0,3.4673008323424495,2.9726516052318663,2.5160523186682524,2.0975029726516055,1.7170035671819261,1.3745541022592156,1.0701545778834722,0.8038049940546969,0.5755053507728893,0.38525564803804985,0.23305588585017845,0.11890606420927469,0.04280618311533887,0.004756242568371006,0.004756242568371006,0.04280618311533887,0.11890606420927453,0.23305588585017845,0.38525564803804985,0.5755053507728897,0.8038049940546969,1.0701545778834718,1.3745541022592156,1.7170035671819261,2.0975029726516046,2.5160523186682524,2.9726516052318663,3.4673008323424486,4.0]}},"id":"1663ba70-7cb1-4dfd-b91b-fa431ab2bfba","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1663ba70-7cb1-4dfd-b91b-fa431ab2bfba","type":"ColumnDataSource"},"glyph":{"id":"782b3438-40ff-4bff-b65e-2e19aaa111a9","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b672283d-bbf2-4da2-a41e-abb914b3cd80","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"7c1df348-346d-4ea5-8132-18109079a5e8","type":"BasicTickFormatter"},"plot":{"id":"484d1276-ce7c-4975-86ba-86412ab43a3e","type":"Plot"},"ticker":{"id":"123a1e83-567b-4605-95b9-13b1b4fc3920","type":"BasicTicker"}},"id":"78b855a3-4be1-41eb-a00c-443fe7d918cf","type":"LinearAxis"},{"attributes":{},"id":"01210472-a75c-4687-a8b3-36f902f08c49","type":"ToolEvents"},{"attributes":{},"id":"123a1e83-567b-4605-95b9-13b1b4fc3920","type":"BasicTicker"},{"attributes":{"plot":{"id":"484d1276-ce7c-4975-86ba-86412ab43a3e","type":"Plot"},"ticker":{"id":"123a1e83-567b-4605-95b9-13b1b4fc3920","type":"BasicTicker"}},"id":"33ffcbd4-8a1b-4e71-b914-2bf82e2a0f56","type":"Grid"},{"attributes":{"below":[{"id":"78b855a3-4be1-41eb-a00c-443fe7d918cf","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"be754482-6d83-4058-a6a7-61c2718f47cc","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"b672283d-bbf2-4da2-a41e-abb914b3cd80","type":"GlyphRenderer"},{"id":"78b855a3-4be1-41eb-a00c-443fe7d918cf","type":"LinearAxis"},{"id":"be754482-6d83-4058-a6a7-61c2718f47cc","type":"LinearAxis"},{"id":"33ffcbd4-8a1b-4e71-b914-2bf82e2a0f56","type":"Grid"},{"id":"152674fb-b380-4517-8e47-d5400b96e1e2","type":"Grid"}],"title":null,"tool_events":{"id":"01210472-a75c-4687-a8b3-36f902f08c49","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"bf7a84bd-c318-48ae-99c7-7d5ef600298b","type":"DataRange1d"},"y_range":{"id":"b288fa41-afae-416c-abcc-39f7d881a697","type":"DataRange1d"}},"id":"484d1276-ce7c-4975-86ba-86412ab43a3e","type":"Plot"},{"attributes":{"callback":null},"id":"b288fa41-afae-416c-abcc-39f7d881a697","type":"DataRange1d"},{"attributes":{"formatter":{"id":"0d38ae63-39ff-468b-824a-019d16f1ac87","type":"BasicTickFormatter"},"plot":{"id":"484d1276-ce7c-4975-86ba-86412ab43a3e","type":"Plot"},"ticker":{"id":"f01d83d7-7fb7-4c5a-bdd2-847cb9818016","type":"BasicTicker"}},"id":"be754482-6d83-4058-a6a7-61c2718f47cc","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#F46D43"},"line_width":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"782b3438-40ff-4bff-b65e-2e19aaa111a9","type":"Line"},{"attributes":{"dimension":1,"plot":{"id":"484d1276-ce7c-4975-86ba-86412ab43a3e","type":"Plot"},"ticker":{"id":"f01d83d7-7fb7-4c5a-bdd2-847cb9818016","type":"BasicTicker"}},"id":"152674fb-b380-4517-8e47-d5400b96e1e2","type":"Grid"},{"attributes":{},"id":"f01d83d7-7fb7-4c5a-bdd2-847cb9818016","type":"BasicTicker"},{"attributes":{"callback":null},"id":"bf7a84bd-c318-48ae-99c7-7d5ef600298b","type":"DataRange1d"},{"attributes":{},"id":"0d38ae63-39ff-468b-824a-019d16f1ac87","type":"BasicTickFormatter"}],"root_ids":["484d1276-ce7c-4975-86ba-86412ab43a3e"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"fc0b9cfb-a099-4cd5-9ab3-d1916810a8db","elementid":"da91897b-2ea1-4816-8f38-55a325bc9dae","modelid":"484d1276-ce7c-4975-86ba-86412ab43a3e"}];
          
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