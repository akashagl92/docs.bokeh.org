
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
  };var element = document.getElementById("dfd454bd-39cf-4144-925d-32b9436821a4");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'dfd454bd-39cf-4144-925d-32b9436821a4' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"24c898f3-dded-4853-8cee-42278fed8ab4":{"roots":{"references":[{"attributes":{},"id":"de3e6ad3-79af-471d-b747-860ecaae32bd","type":"BasicTicker"},{"attributes":{"data_source":{"id":"0fe7e36a-ffd3-43ea-bf7a-babad9006fda","type":"ColumnDataSource"},"glyph":{"id":"ea07390e-fc9f-4d11-a198-4a60f02a5ff0","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"e274ad61-c447-4286-b1a1-20dbdf790f12","type":"Circle"},"selection_glyph":null},"id":"e8b00064-7651-40fd-81af-6b1f5bde6478","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"e274ad61-c447-4286-b1a1-20dbdf790f12","type":"Circle"},{"attributes":{},"id":"1afffe77-7f12-4545-a0bd-3709966eb0cf","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"ea07390e-fc9f-4d11-a198-4a60f02a5ff0","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"cb0c8068-6c5e-4351-bef1-92565dbfe861","subtype":"Figure","type":"Plot"},"ticker":{"id":"78b9d472-cff2-44b2-95b9-e7fa64eb907e","type":"BasicTicker"}},"id":"66ae69c1-c1a5-4ff0-8be9-22b8206d8d9e","type":"Grid"},{"attributes":{"below":[{"id":"b261122e-671e-426d-95be-9d6b58a42744","type":"LinearAxis"}],"left":[{"id":"8771cda8-7e04-4d21-bcf6-4832724a99d2","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"b261122e-671e-426d-95be-9d6b58a42744","type":"LinearAxis"},{"id":"52d324ad-3a9b-4b73-9141-2ab247ac7566","type":"Grid"},{"id":"8771cda8-7e04-4d21-bcf6-4832724a99d2","type":"LinearAxis"},{"id":"66ae69c1-c1a5-4ff0-8be9-22b8206d8d9e","type":"Grid"},{"id":"e8b00064-7651-40fd-81af-6b1f5bde6478","type":"GlyphRenderer"}],"tool_events":{"id":"1f900e59-860c-4eb7-a79d-172bfb2e67ab","type":"ToolEvents"},"tools":[{"id":"4fd55e64-b9b3-4d5e-bde4-a26f51bdd2f0","type":"PanTool"},{"id":"d99b8b6f-40d0-4a83-93f4-d6ab67fe0879","type":"ResetTool"},{"id":"bab94ce8-de9b-4054-a69d-9366867fe647","type":"PreviewSaveTool"}],"x_range":{"id":"03bb5e1a-4f7c-41a8-852b-4bceabe473f7","type":"DataRange1d"},"y_range":{"id":"bb3e3993-0717-4e82-b480-c17a262fbf4c","type":"DataRange1d"}},"id":"cb0c8068-6c5e-4351-bef1-92565dbfe861","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"bb3e3993-0717-4e82-b480-c17a262fbf4c","type":"DataRange1d"},{"attributes":{"formatter":{"id":"1afffe77-7f12-4545-a0bd-3709966eb0cf","type":"BasicTickFormatter"},"plot":{"id":"cb0c8068-6c5e-4351-bef1-92565dbfe861","subtype":"Figure","type":"Plot"},"ticker":{"id":"78b9d472-cff2-44b2-95b9-e7fa64eb907e","type":"BasicTicker"}},"id":"8771cda8-7e04-4d21-bcf6-4832724a99d2","type":"LinearAxis"},{"attributes":{},"id":"68186f6c-e168-4b9f-9bc0-7c219add4827","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"03bb5e1a-4f7c-41a8-852b-4bceabe473f7","type":"DataRange1d"},{"attributes":{"formatter":{"id":"68186f6c-e168-4b9f-9bc0-7c219add4827","type":"BasicTickFormatter"},"plot":{"id":"cb0c8068-6c5e-4351-bef1-92565dbfe861","subtype":"Figure","type":"Plot"},"ticker":{"id":"de3e6ad3-79af-471d-b747-860ecaae32bd","type":"BasicTicker"}},"id":"b261122e-671e-426d-95be-9d6b58a42744","type":"LinearAxis"},{"attributes":{"plot":{"id":"cb0c8068-6c5e-4351-bef1-92565dbfe861","subtype":"Figure","type":"Plot"},"ticker":{"id":"de3e6ad3-79af-471d-b747-860ecaae32bd","type":"BasicTicker"}},"id":"52d324ad-3a9b-4b73-9141-2ab247ac7566","type":"Grid"},{"attributes":{"plot":{"id":"cb0c8068-6c5e-4351-bef1-92565dbfe861","subtype":"Figure","type":"Plot"}},"id":"bab94ce8-de9b-4054-a69d-9366867fe647","type":"PreviewSaveTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1.0,2.5,3.0,2.0],"y":[2.0,3.0,1.0,1.5]}},"id":"0fe7e36a-ffd3-43ea-bf7a-babad9006fda","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"cb0c8068-6c5e-4351-bef1-92565dbfe861","subtype":"Figure","type":"Plot"}},"id":"4fd55e64-b9b3-4d5e-bde4-a26f51bdd2f0","type":"PanTool"},{"attributes":{"plot":{"id":"cb0c8068-6c5e-4351-bef1-92565dbfe861","subtype":"Figure","type":"Plot"}},"id":"d99b8b6f-40d0-4a83-93f4-d6ab67fe0879","type":"ResetTool"},{"attributes":{},"id":"1f900e59-860c-4eb7-a79d-172bfb2e67ab","type":"ToolEvents"},{"attributes":{},"id":"78b9d472-cff2-44b2-95b9-e7fa64eb907e","type":"BasicTicker"}],"root_ids":["cb0c8068-6c5e-4351-bef1-92565dbfe861"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"24c898f3-dded-4853-8cee-42278fed8ab4","elementid":"dfd454bd-39cf-4144-925d-32b9436821a4","modelid":"cb0c8068-6c5e-4351-bef1-92565dbfe861"}];
          
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