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
      };var element = document.getElementById("24487723-b084-4e54-a8d9-75ae78fdb43a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '24487723-b084-4e54-a8d9-75ae78fdb43a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"6c057c9f-71e1-4886-96dd-ec5d45dd11b0":{"roots":{"references":[{"attributes":{"callback":null,"start":0},"id":"81e621d0-9bdd-4e54-9fdd-d5f462f81872","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"420d83dc-d413-42e4-8137-9a4dee14ef2b","subtype":"Figure","type":"Plot"},"ticker":{"id":"25b9c3ea-f85f-4929-8243-cef2fc65c797","type":"BasicTicker"}},"id":"f7be7c7d-8fca-44ac-8d9c-acaf9a8a872c","type":"Grid"},{"attributes":{},"id":"e8545614-41a0-47c7-9fd8-d7e76bdf8f88","type":"CategoricalTicker"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"a2942ebd-9cf3-4f97-9658-0d3ecb2c6ce7","type":"FactorRange"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"f11ec654-4d47-4a4a-b101-52d578a85402","type":"VBar"},{"attributes":{},"id":"43a2db18-6647-4899-8ffa-39afd828cefa","type":"BasicTickFormatter"},{"attributes":{},"id":"25b9c3ea-f85f-4929-8243-cef2fc65c797","type":"BasicTicker"},{"attributes":{"formatter":{"id":"2105d2c7-ecf7-4d07-b3e5-e58e7dad168c","type":"CategoricalTickFormatter"},"plot":{"id":"420d83dc-d413-42e4-8137-9a4dee14ef2b","subtype":"Figure","type":"Plot"},"ticker":{"id":"e8545614-41a0-47c7-9fd8-d7e76bdf8f88","type":"CategoricalTicker"}},"id":"f43f9617-73d3-4ffd-acea-29b544c78d67","type":"CategoricalAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"81805a6e-b480-4631-9337-6450e027a495","type":"VBar"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"4bda8e22-f573-4634-9ecf-2564635f8af9","type":"Title"},{"attributes":{"callback":null,"data":{"top":[5,3,4,2,4,6],"x":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"ba1442e2-d973-4ee0-aaee-07810b4c1c02","type":"Selection"},"selection_policy":{"id":"1be8ea5f-f66b-4380-bd6e-e4e5f696b636","type":"UnionRenderers"}},"id":"e4a949ab-1a85-4357-b6d5-75889b3e8a7d","type":"ColumnDataSource"},{"attributes":{"source":{"id":"e4a949ab-1a85-4357-b6d5-75889b3e8a7d","type":"ColumnDataSource"}},"id":"be003f59-9050-4dde-861a-6f21c7e77ce2","type":"CDSView"},{"attributes":{"data_source":{"id":"e4a949ab-1a85-4357-b6d5-75889b3e8a7d","type":"ColumnDataSource"},"glyph":{"id":"81805a6e-b480-4631-9337-6450e027a495","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f11ec654-4d47-4a4a-b101-52d578a85402","type":"VBar"},"selection_glyph":null,"view":{"id":"be003f59-9050-4dde-861a-6f21c7e77ce2","type":"CDSView"}},"id":"17457431-79cf-488b-96c7-dfdd5a6bef4c","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"b0a37e31-4d73-4e0a-b76d-08f15ca8f0ec","type":"Toolbar"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"420d83dc-d413-42e4-8137-9a4dee14ef2b","subtype":"Figure","type":"Plot"},"ticker":{"id":"e8545614-41a0-47c7-9fd8-d7e76bdf8f88","type":"CategoricalTicker"}},"id":"8d3b3465-7154-45e5-b625-3902d4cdf9cf","type":"Grid"},{"attributes":{},"id":"e8624161-4a16-499a-b799-5603129827e7","type":"LinearScale"},{"attributes":{"below":[{"id":"f43f9617-73d3-4ffd-acea-29b544c78d67","type":"CategoricalAxis"}],"left":[{"id":"8f1b8e4b-59a2-43f5-91e9-dc62047e132c","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"f43f9617-73d3-4ffd-acea-29b544c78d67","type":"CategoricalAxis"},{"id":"8d3b3465-7154-45e5-b625-3902d4cdf9cf","type":"Grid"},{"id":"8f1b8e4b-59a2-43f5-91e9-dc62047e132c","type":"LinearAxis"},{"id":"f7be7c7d-8fca-44ac-8d9c-acaf9a8a872c","type":"Grid"},{"id":"17457431-79cf-488b-96c7-dfdd5a6bef4c","type":"GlyphRenderer"}],"title":{"id":"4bda8e22-f573-4634-9ecf-2564635f8af9","type":"Title"},"toolbar":{"id":"b0a37e31-4d73-4e0a-b76d-08f15ca8f0ec","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a2942ebd-9cf3-4f97-9658-0d3ecb2c6ce7","type":"FactorRange"},"x_scale":{"id":"0a1f5f21-7b76-4946-97f7-7d8c699881dc","type":"CategoricalScale"},"y_range":{"id":"81e621d0-9bdd-4e54-9fdd-d5f462f81872","type":"DataRange1d"},"y_scale":{"id":"e8624161-4a16-499a-b799-5603129827e7","type":"LinearScale"}},"id":"420d83dc-d413-42e4-8137-9a4dee14ef2b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"ba1442e2-d973-4ee0-aaee-07810b4c1c02","type":"Selection"},{"attributes":{},"id":"2105d2c7-ecf7-4d07-b3e5-e58e7dad168c","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"43a2db18-6647-4899-8ffa-39afd828cefa","type":"BasicTickFormatter"},"plot":{"id":"420d83dc-d413-42e4-8137-9a4dee14ef2b","subtype":"Figure","type":"Plot"},"ticker":{"id":"25b9c3ea-f85f-4929-8243-cef2fc65c797","type":"BasicTicker"}},"id":"8f1b8e4b-59a2-43f5-91e9-dc62047e132c","type":"LinearAxis"},{"attributes":{},"id":"1be8ea5f-f66b-4380-bd6e-e4e5f696b636","type":"UnionRenderers"},{"attributes":{},"id":"0a1f5f21-7b76-4946-97f7-7d8c699881dc","type":"CategoricalScale"}],"root_ids":["420d83dc-d413-42e4-8137-9a4dee14ef2b"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"6c057c9f-71e1-4886-96dd-ec5d45dd11b0","roots":{"420d83dc-d413-42e4-8137-9a4dee14ef2b":"24487723-b084-4e54-a8d9-75ae78fdb43a"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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