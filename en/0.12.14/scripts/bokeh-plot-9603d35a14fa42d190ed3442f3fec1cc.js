(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("259a07df-5ddc-4150-9f32-c62d3559e72f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '259a07df-5ddc-4150-9f32-c62d3559e72f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.14.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"748390a2-7f19-4d62-9050-77c9c1de5885":{"roots":{"references":[{"attributes":{"fill_color":{"field":"fruits","transform":{"id":"3483adf0-880c-481a-97ad-052d9982906a","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"0d58d50d-084e-4b91-bbf7-abfb1543ed5d","type":"VBar"},{"attributes":{"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"3483adf0-880c-481a-97ad-052d9982906a","type":"CategoricalColorMapper"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"17e88794-f5c8-4bb3-a354-31db53a9461a","type":"VBar"},{"attributes":{},"id":"5e4674f8-ec12-44e3-aecf-70d2333f4be2","type":"PanTool"},{"attributes":{"callback":null,"column_names":["fruits","counts"],"data":{"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"82585091-b13c-4ef3-8615-0a247495a299","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"82585091-b13c-4ef3-8615-0a247495a299","type":"ColumnDataSource"},"glyph":{"id":"0d58d50d-084e-4b91-bbf7-abfb1543ed5d","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17e88794-f5c8-4bb3-a354-31db53a9461a","type":"VBar"},"selection_glyph":null,"view":{"id":"16722166-0a31-49e7-b339-1dffada5902e","type":"CDSView"}},"id":"53dc365f-2b71-47e5-841f-224c8abe8685","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"3be0fb06-daf7-4a0f-a08a-28636fb84862","type":"CategoricalAxis"}],"left":[{"id":"61ca091d-2004-4355-ae5d-ce8ae4a3d09f","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"3be0fb06-daf7-4a0f-a08a-28636fb84862","type":"CategoricalAxis"},{"id":"5f0923c4-7ce0-49f1-aeb5-2ac085e94b4c","type":"Grid"},{"id":"61ca091d-2004-4355-ae5d-ce8ae4a3d09f","type":"LinearAxis"},{"id":"9af3224b-26e6-4082-a4ed-660c719e5a62","type":"Grid"},{"id":"90de41cb-efab-49db-a2de-98e4bf546bd8","type":"BoxAnnotation"},{"id":"7b7171f0-d6cc-4a6d-bba1-3ede39e8342c","type":"Legend"},{"id":"53dc365f-2b71-47e5-841f-224c8abe8685","type":"GlyphRenderer"}],"title":{"id":"60acd7f5-f6cf-43f5-ad01-9f163d1946d0","type":"Title"},"toolbar":{"id":"fdfa0155-53dc-489a-9702-fb66c49d0539","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"95cec992-077e-421c-ad18-7fb3e6aec07a","type":"FactorRange"},"x_scale":{"id":"73907659-32d2-482a-98a9-58534d04905f","type":"CategoricalScale"},"y_range":{"id":"b1ad7a82-892c-4f2a-acfb-2efe13a393fe","type":"DataRange1d"},"y_scale":{"id":"61c85302-3224-44a9-928e-7c142046e4ce","type":"LinearScale"}},"id":"cc44b70a-f130-434b-a5bb-b7af788c2595","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"53dc365f-2b71-47e5-841f-224c8abe8685","type":"GlyphRenderer"}]},"id":"3133c1a6-37ca-4deb-af30-3e2c494cad59","type":"LegendItem"},{"attributes":{"overlay":{"id":"90de41cb-efab-49db-a2de-98e4bf546bd8","type":"BoxAnnotation"}},"id":"689e7ab7-05f8-4fa1-8144-a4461cd6ab5b","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"60acd7f5-f6cf-43f5-ad01-9f163d1946d0","type":"Title"},{"attributes":{},"id":"ce4eaf37-7835-4ad2-99d8-b53f41c30860","type":"ResetTool"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"95cec992-077e-421c-ad18-7fb3e6aec07a","type":"FactorRange"},{"attributes":{},"id":"c5cab484-0bf8-4115-851a-aa889200ffee","type":"CategoricalTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5e4674f8-ec12-44e3-aecf-70d2333f4be2","type":"PanTool"},{"id":"0562385b-7076-46f6-b295-f1855d162d62","type":"WheelZoomTool"},{"id":"689e7ab7-05f8-4fa1-8144-a4461cd6ab5b","type":"BoxZoomTool"},{"id":"d89cf6a5-15e7-404c-ac03-fd36579d4ef2","type":"SaveTool"},{"id":"ce4eaf37-7835-4ad2-99d8-b53f41c30860","type":"ResetTool"},{"id":"2f239961-e237-44a2-b0cd-74168b4e47af","type":"HelpTool"}]},"id":"fdfa0155-53dc-489a-9702-fb66c49d0539","type":"Toolbar"},{"attributes":{"formatter":{"id":"36f8bb0f-d061-453a-90e0-a152d7745bb2","type":"BasicTickFormatter"},"plot":{"id":"cc44b70a-f130-434b-a5bb-b7af788c2595","subtype":"Figure","type":"Plot"},"ticker":{"id":"15e4e638-c436-4107-abe3-4e9cd8117ed8","type":"BasicTicker"}},"id":"61ca091d-2004-4355-ae5d-ce8ae4a3d09f","type":"LinearAxis"},{"attributes":{"source":{"id":"82585091-b13c-4ef3-8615-0a247495a299","type":"ColumnDataSource"}},"id":"16722166-0a31-49e7-b339-1dffada5902e","type":"CDSView"},{"attributes":{},"id":"73907659-32d2-482a-98a9-58534d04905f","type":"CategoricalScale"},{"attributes":{"callback":null,"end":9,"start":0},"id":"b1ad7a82-892c-4f2a-acfb-2efe13a393fe","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"90de41cb-efab-49db-a2de-98e4bf546bd8","type":"BoxAnnotation"},{"attributes":{},"id":"61c85302-3224-44a9-928e-7c142046e4ce","type":"LinearScale"},{"attributes":{},"id":"0562385b-7076-46f6-b295-f1855d162d62","type":"WheelZoomTool"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"cc44b70a-f130-434b-a5bb-b7af788c2595","subtype":"Figure","type":"Plot"},"ticker":{"id":"e24316fd-4df1-4cef-9f24-be5a55073c95","type":"CategoricalTicker"}},"id":"5f0923c4-7ce0-49f1-aeb5-2ac085e94b4c","type":"Grid"},{"attributes":{},"id":"d89cf6a5-15e7-404c-ac03-fd36579d4ef2","type":"SaveTool"},{"attributes":{"formatter":{"id":"c5cab484-0bf8-4115-851a-aa889200ffee","type":"CategoricalTickFormatter"},"plot":{"id":"cc44b70a-f130-434b-a5bb-b7af788c2595","subtype":"Figure","type":"Plot"},"ticker":{"id":"e24316fd-4df1-4cef-9f24-be5a55073c95","type":"CategoricalTicker"}},"id":"3be0fb06-daf7-4a0f-a08a-28636fb84862","type":"CategoricalAxis"},{"attributes":{},"id":"36f8bb0f-d061-453a-90e0-a152d7745bb2","type":"BasicTickFormatter"},{"attributes":{},"id":"e24316fd-4df1-4cef-9f24-be5a55073c95","type":"CategoricalTicker"},{"attributes":{"items":[{"id":"3133c1a6-37ca-4deb-af30-3e2c494cad59","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"cc44b70a-f130-434b-a5bb-b7af788c2595","subtype":"Figure","type":"Plot"}},"id":"7b7171f0-d6cc-4a6d-bba1-3ede39e8342c","type":"Legend"},{"attributes":{},"id":"15e4e638-c436-4107-abe3-4e9cd8117ed8","type":"BasicTicker"},{"attributes":{},"id":"2f239961-e237-44a2-b0cd-74168b4e47af","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"cc44b70a-f130-434b-a5bb-b7af788c2595","subtype":"Figure","type":"Plot"},"ticker":{"id":"15e4e638-c436-4107-abe3-4e9cd8117ed8","type":"BasicTicker"}},"id":"9af3224b-26e6-4082-a4ed-660c719e5a62","type":"Grid"}],"root_ids":["cc44b70a-f130-434b-a5bb-b7af788c2595"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"748390a2-7f19-4d62-9050-77c9c1de5885","elementid":"259a07df-5ddc-4150-9f32-c62d3559e72f","modelid":"cc44b70a-f130-434b-a5bb-b7af788c2595"}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();