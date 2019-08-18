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
      };var element = document.getElementById("74394657-5890-46e4-ae60-78b77dc5f804");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '74394657-5890-46e4-ae60-78b77dc5f804' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4d6e2911-a2b1-4e92-8af3-6532ccaf64d3":{"roots":{"references":[{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"62ba9ad2-d649-4533-a1e6-47278c466bdb","type":"Title"},{"attributes":{"below":[{"id":"cc8c0859-c1c2-4a8c-88c3-862146442d01","type":"CategoricalAxis"}],"left":[{"id":"f165f788-64ef-4e2d-bb01-818fe49995b5","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"cc8c0859-c1c2-4a8c-88c3-862146442d01","type":"CategoricalAxis"},{"id":"945e0238-7943-4255-b4d8-9ace94841b45","type":"Grid"},{"id":"f165f788-64ef-4e2d-bb01-818fe49995b5","type":"LinearAxis"},{"id":"5696cbb8-d1a4-4b1d-bb57-189a52cec865","type":"Grid"},{"id":"d87556e2-9da5-4f27-81e5-fbed6854a803","type":"GlyphRenderer"}],"title":{"id":"62ba9ad2-d649-4533-a1e6-47278c466bdb","type":"Title"},"toolbar":{"id":"b669b019-7575-491f-8be7-55e5c207ec4d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"dc332d37-ffa2-4a5c-b427-b35b97113cae","type":"FactorRange"},"x_scale":{"id":"9cf134cb-5f07-4918-bebe-690015ba148d","type":"CategoricalScale"},"y_range":{"id":"cfd8676e-1473-4a18-b6c0-35b50764ac96","type":"DataRange1d"},"y_scale":{"id":"e3f3fe24-52ca-4493-a75f-0a183457b917","type":"LinearScale"}},"id":"e782dae0-ee1d-43a2-8c62-61ea1335eeb7","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e3f3fe24-52ca-4493-a75f-0a183457b917","type":"LinearScale"},{"attributes":{},"id":"9cf134cb-5f07-4918-bebe-690015ba148d","type":"CategoricalScale"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"dc332d37-ffa2-4a5c-b427-b35b97113cae","type":"FactorRange"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"b669b019-7575-491f-8be7-55e5c207ec4d","type":"Toolbar"},{"attributes":{},"id":"ea0437e2-e7f1-4941-967e-40b3df21eaad","type":"CategoricalTicker"},{"attributes":{"source":{"id":"2eed1cc0-bdb4-45fd-9e64-ee951a071109","type":"ColumnDataSource"}},"id":"dddca0ea-b1a7-4dfa-9d3f-3b2e478fca6e","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[5,3,4,2,4,6],"x":[["Apples",-0.5],["Pears",-0.2],["Nectarines",0.0],["Plums",0.3],["Grapes",0.1],["Strawberries",0.3]]}},"id":"2eed1cc0-bdb4-45fd-9e64-ee951a071109","type":"ColumnDataSource"},{"attributes":{},"id":"f2c1ddb9-fdab-4177-b3ba-7838289d365a","type":"BasicTicker"},{"attributes":{},"id":"2335e014-238c-4df5-ac60-e344ea8ed104","type":"BasicTickFormatter"},{"attributes":{},"id":"29778ac4-4eb0-4c87-afdc-45404160071d","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"start":0},"id":"cfd8676e-1473-4a18-b6c0-35b50764ac96","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"77c85243-df05-41c1-bdc3-62fb6cf5bc38","type":"VBar"},{"attributes":{"formatter":{"id":"2335e014-238c-4df5-ac60-e344ea8ed104","type":"BasicTickFormatter"},"plot":{"id":"e782dae0-ee1d-43a2-8c62-61ea1335eeb7","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2c1ddb9-fdab-4177-b3ba-7838289d365a","type":"BasicTicker"}},"id":"f165f788-64ef-4e2d-bb01-818fe49995b5","type":"LinearAxis"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"e782dae0-ee1d-43a2-8c62-61ea1335eeb7","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea0437e2-e7f1-4941-967e-40b3df21eaad","type":"CategoricalTicker"}},"id":"945e0238-7943-4255-b4d8-9ace94841b45","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"55e80c81-fc22-4325-a61d-f2559b19a986","type":"VBar"},{"attributes":{"dimension":1,"plot":{"id":"e782dae0-ee1d-43a2-8c62-61ea1335eeb7","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2c1ddb9-fdab-4177-b3ba-7838289d365a","type":"BasicTicker"}},"id":"5696cbb8-d1a4-4b1d-bb57-189a52cec865","type":"Grid"},{"attributes":{"data_source":{"id":"2eed1cc0-bdb4-45fd-9e64-ee951a071109","type":"ColumnDataSource"},"glyph":{"id":"77c85243-df05-41c1-bdc3-62fb6cf5bc38","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"55e80c81-fc22-4325-a61d-f2559b19a986","type":"VBar"},"selection_glyph":null,"view":{"id":"dddca0ea-b1a7-4dfa-9d3f-3b2e478fca6e","type":"CDSView"}},"id":"d87556e2-9da5-4f27-81e5-fbed6854a803","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"29778ac4-4eb0-4c87-afdc-45404160071d","type":"CategoricalTickFormatter"},"plot":{"id":"e782dae0-ee1d-43a2-8c62-61ea1335eeb7","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea0437e2-e7f1-4941-967e-40b3df21eaad","type":"CategoricalTicker"}},"id":"cc8c0859-c1c2-4a8c-88c3-862146442d01","type":"CategoricalAxis"}],"root_ids":["e782dae0-ee1d-43a2-8c62-61ea1335eeb7"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"4d6e2911-a2b1-4e92-8af3-6532ccaf64d3","elementid":"74394657-5890-46e4-ae60-78b77dc5f804","modelid":"e782dae0-ee1d-43a2-8c62-61ea1335eeb7"}];
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