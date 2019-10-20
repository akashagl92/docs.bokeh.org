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
      };var element = document.getElementById("845a1b89-6903-4d71-911c-c3614e2fea00");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '845a1b89-6903-4d71-911c-c3614e2fea00' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"e6aac4cf-d615-41ad-a691-d672483b6296":{"roots":{"references":[{"attributes":{"formatter":{"id":"6aa89024-cb31-4149-8e15-fa311896b00c","type":"BasicTickFormatter"},"plot":{"id":"039114f8-247d-4f8c-ae60-f7d6b01d907e","subtype":"Figure","type":"Plot"},"ticker":{"id":"77db69ec-cc29-4b8c-8467-ebe1669ae599","type":"BasicTicker"}},"id":"723e6516-8d6f-4812-a9d9-88fbaa4088bd","type":"LinearAxis"},{"attributes":{},"id":"097b005c-3792-47bc-909d-e896fb30e7b6","type":"BasicTicker"},{"attributes":{},"id":"9a5f97db-2d6c-427c-ba64-4d6bb830bdc0","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fcc288b9-08d8-4262-8f8e-468096bd2b88","type":"PanTool"},{"id":"6b0ed03a-553d-4437-a19a-2f427013e163","type":"WheelZoomTool"},{"id":"c10c0c16-65f5-4dfb-93f2-b55f4a896bac","type":"BoxZoomTool"},{"id":"44c7873d-eb87-453b-994d-3a2c5ed5c720","type":"SaveTool"},{"id":"22d7436a-e2b7-4382-8173-d62e2087e509","type":"ResetTool"},{"id":"d3c9524e-eaca-4305-974f-d706dae7f041","type":"HelpTool"}]},"id":"ba6bacf6-793c-418d-8127-26d735bd9900","type":"Toolbar"},{"attributes":{"overlay":{"id":"95d219dc-fde1-4143-9016-42d4cd3aa782","type":"BoxAnnotation"}},"id":"c10c0c16-65f5-4dfb-93f2-b55f4a896bac","type":"BoxZoomTool"},{"attributes":{},"id":"6aa89024-cb31-4149-8e15-fa311896b00c","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"8260760e-57ca-49df-a3f1-2bbd4b834d48","type":"ColumnDataSource"}},"id":"b7b2151c-11c7-4258-b364-8997ae2e2d6e","type":"CDSView"},{"attributes":{"callback":null},"id":"c45554d2-45a9-40d7-a73e-46550202597c","type":"DataRange1d"},{"attributes":{},"id":"22d7436a-e2b7-4382-8173-d62e2087e509","type":"ResetTool"},{"attributes":{"formatter":{"id":"9a5f97db-2d6c-427c-ba64-4d6bb830bdc0","type":"BasicTickFormatter"},"plot":{"id":"039114f8-247d-4f8c-ae60-f7d6b01d907e","subtype":"Figure","type":"Plot"},"ticker":{"id":"097b005c-3792-47bc-909d-e896fb30e7b6","type":"BasicTicker"}},"id":"95c65e84-dbb6-4a27-85dd-e2713f15875b","type":"LinearAxis"},{"attributes":{},"id":"301ef550-c03f-490b-aaea-b02f25c1ad14","type":"LinearScale"},{"attributes":{"data_source":{"id":"8260760e-57ca-49df-a3f1-2bbd4b834d48","type":"ColumnDataSource"},"glyph":{"id":"e29930c8-8c78-468f-86a3-78b1cdc2ac92","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"84f74dac-1fc7-414e-97ea-b59c644b219a","type":"MultiLine"},"selection_glyph":null,"view":{"id":"b7b2151c-11c7-4258-b364-8997ae2e2d6e","type":"CDSView"}},"id":"4c4d39e0-169c-4cc3-8dcb-64012c4194b8","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"84f74dac-1fc7-414e-97ea-b59c644b219a","type":"MultiLine"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"95d219dc-fde1-4143-9016-42d4cd3aa782","type":"BoxAnnotation"},{"attributes":{},"id":"fcc288b9-08d8-4262-8f8e-468096bd2b88","type":"PanTool"},{"attributes":{"callback":null},"id":"2cea2e6e-8408-4191-919d-000fafb7dafd","type":"DataRange1d"},{"attributes":{},"id":"77db69ec-cc29-4b8c-8467-ebe1669ae599","type":"BasicTicker"},{"attributes":{"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"e29930c8-8c78-468f-86a3-78b1cdc2ac92","type":"MultiLine"},{"attributes":{"plot":null,"text":""},"id":"f8d7dc1e-083b-4aca-a65e-6144c8e20827","type":"Title"},{"attributes":{},"id":"274f5a1a-1f35-4bc1-bac7-5bf416527ca4","type":"LinearScale"},{"attributes":{},"id":"d3c9524e-eaca-4305-974f-d706dae7f041","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["xs","ys","line_color","line_alpha"],"data":{"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]}},"id":"8260760e-57ca-49df-a3f1-2bbd4b834d48","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"039114f8-247d-4f8c-ae60-f7d6b01d907e","subtype":"Figure","type":"Plot"},"ticker":{"id":"77db69ec-cc29-4b8c-8467-ebe1669ae599","type":"BasicTicker"}},"id":"52384dc6-1763-45b2-90e6-a81ea9c2d811","type":"Grid"},{"attributes":{},"id":"44c7873d-eb87-453b-994d-3a2c5ed5c720","type":"SaveTool"},{"attributes":{},"id":"6b0ed03a-553d-4437-a19a-2f427013e163","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"039114f8-247d-4f8c-ae60-f7d6b01d907e","subtype":"Figure","type":"Plot"},"ticker":{"id":"097b005c-3792-47bc-909d-e896fb30e7b6","type":"BasicTicker"}},"id":"a91c785c-999a-4180-81ca-ba45357ae745","type":"Grid"},{"attributes":{"below":[{"id":"723e6516-8d6f-4812-a9d9-88fbaa4088bd","type":"LinearAxis"}],"left":[{"id":"95c65e84-dbb6-4a27-85dd-e2713f15875b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"723e6516-8d6f-4812-a9d9-88fbaa4088bd","type":"LinearAxis"},{"id":"52384dc6-1763-45b2-90e6-a81ea9c2d811","type":"Grid"},{"id":"95c65e84-dbb6-4a27-85dd-e2713f15875b","type":"LinearAxis"},{"id":"a91c785c-999a-4180-81ca-ba45357ae745","type":"Grid"},{"id":"95d219dc-fde1-4143-9016-42d4cd3aa782","type":"BoxAnnotation"},{"id":"4c4d39e0-169c-4cc3-8dcb-64012c4194b8","type":"GlyphRenderer"}],"title":{"id":"f8d7dc1e-083b-4aca-a65e-6144c8e20827","type":"Title"},"toolbar":{"id":"ba6bacf6-793c-418d-8127-26d735bd9900","type":"Toolbar"},"x_range":{"id":"c45554d2-45a9-40d7-a73e-46550202597c","type":"DataRange1d"},"x_scale":{"id":"301ef550-c03f-490b-aaea-b02f25c1ad14","type":"LinearScale"},"y_range":{"id":"2cea2e6e-8408-4191-919d-000fafb7dafd","type":"DataRange1d"},"y_scale":{"id":"274f5a1a-1f35-4bc1-bac7-5bf416527ca4","type":"LinearScale"}},"id":"039114f8-247d-4f8c-ae60-f7d6b01d907e","subtype":"Figure","type":"Plot"}],"root_ids":["039114f8-247d-4f8c-ae60-f7d6b01d907e"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"e6aac4cf-d615-41ad-a691-d672483b6296","elementid":"845a1b89-6903-4d71-911c-c3614e2fea00","modelid":"039114f8-247d-4f8c-ae60-f7d6b01d907e"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
