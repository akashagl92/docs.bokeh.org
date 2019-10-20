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
      };var element = document.getElementById("a4c0e614-1573-49a6-a0f4-dd589f6bf300");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a4c0e614-1573-49a6-a0f4-dd589f6bf300' but no matching script tag was found. ")
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
                    var docs_json = {"515e61d6-43e5-48db-81f2-0b8f24f2e8e8":{"roots":{"references":[{"attributes":{},"id":"e30bb6c8-424a-4064-a84e-83a5464cebfd","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e9d7df98-6a4b-4322-a3f8-e120922b0ea2","type":"Plot"},"ticker":{"id":"3b12b89d-ef26-4579-800f-544ce397dc95","type":"BasicTicker"}},"id":"6ccb1350-baab-45e9-b590-9fce3ab99a25","type":"Grid"},{"attributes":{"formatter":{"id":"e30bb6c8-424a-4064-a84e-83a5464cebfd","type":"BasicTickFormatter"},"plot":{"id":"e9d7df98-6a4b-4322-a3f8-e120922b0ea2","type":"Plot"},"ticker":{"id":"33968e9e-de50-4d7c-840f-9c1db6e78c58","type":"BasicTicker"}},"id":"cea034e2-c521-4fb6-a59b-abc659a07cfb","type":"LinearAxis"},{"attributes":{"data_source":{"id":"16bae96e-6990-4f66-8f8e-b8ce2dc70f7a","type":"ColumnDataSource"},"glyph":{"id":"e8d9f3f3-68cd-4bba-a2e2-7988658f6870","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"e5a1f204-b189-46de-88c7-64b0a869d89a","type":"CDSView"}},"id":"910e6671-b8f9-40ed-a127-6a32cdfac4b3","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"914cdf08-e22b-4f3d-b55a-e2a91f508190","type":"Toolbar"},{"attributes":{},"id":"08a18f70-5a64-4e1f-bccb-122604b31193","type":"LinearScale"},{"attributes":{},"id":"dccb998f-7ae4-43a8-9ab4-4490288d9c82","type":"LinearScale"},{"attributes":{"callback":null},"id":"df0de5f4-ed30-4287-a44d-7f73fe1bb97d","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"e9d7df98-6a4b-4322-a3f8-e120922b0ea2","type":"Plot"},"ticker":{"id":"33968e9e-de50-4d7c-840f-9c1db6e78c58","type":"BasicTicker"}},"id":"70b0af27-b94a-4357-96b7-6707d597d0c5","type":"Grid"},{"attributes":{"formatter":{"id":"889f5fd3-3a3b-4c5e-b545-42260a3b4c03","type":"BasicTickFormatter"},"plot":{"id":"e9d7df98-6a4b-4322-a3f8-e120922b0ea2","type":"Plot"},"ticker":{"id":"3b12b89d-ef26-4579-800f-544ce397dc95","type":"BasicTicker"}},"id":"657a8199-3c06-4243-8b32-0559594ac533","type":"LinearAxis"},{"attributes":{},"id":"3b12b89d-ef26-4579-800f-544ce397dc95","type":"BasicTicker"},{"attributes":{"below":[{"id":"657a8199-3c06-4243-8b32-0559594ac533","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"cea034e2-c521-4fb6-a59b-abc659a07cfb","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"910e6671-b8f9-40ed-a127-6a32cdfac4b3","type":"GlyphRenderer"},{"id":"657a8199-3c06-4243-8b32-0559594ac533","type":"LinearAxis"},{"id":"cea034e2-c521-4fb6-a59b-abc659a07cfb","type":"LinearAxis"},{"id":"6ccb1350-baab-45e9-b590-9fce3ab99a25","type":"Grid"},{"id":"70b0af27-b94a-4357-96b7-6707d597d0c5","type":"Grid"}],"title":null,"toolbar":{"id":"914cdf08-e22b-4f3d-b55a-e2a91f508190","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2004882b-bb56-4f4d-98e6-f4a0a2cdbb36","type":"DataRange1d"},"x_scale":{"id":"08a18f70-5a64-4e1f-bccb-122604b31193","type":"LinearScale"},"y_range":{"id":"df0de5f4-ed30-4287-a44d-7f73fe1bb97d","type":"DataRange1d"},"y_scale":{"id":"dccb998f-7ae4-43a8-9ab4-4490288d9c82","type":"LinearScale"}},"id":"e9d7df98-6a4b-4322-a3f8-e120922b0ea2","type":"Plot"},{"attributes":{},"id":"33968e9e-de50-4d7c-840f-9c1db6e78c58","type":"BasicTicker"},{"attributes":{"callback":null},"id":"2004882b-bb56-4f4d-98e6-f4a0a2cdbb36","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y","r"],"data":{"r":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"16bae96e-6990-4f66-8f8e-b8ce2dc70f7a","type":"ColumnDataSource"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#B3DE69"},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"e8d9f3f3-68cd-4bba-a2e2-7988658f6870","type":"Wedge"},{"attributes":{},"id":"889f5fd3-3a3b-4c5e-b545-42260a3b4c03","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"16bae96e-6990-4f66-8f8e-b8ce2dc70f7a","type":"ColumnDataSource"}},"id":"e5a1f204-b189-46de-88c7-64b0a869d89a","type":"CDSView"}],"root_ids":["e9d7df98-6a4b-4322-a3f8-e120922b0ea2"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"515e61d6-43e5-48db-81f2-0b8f24f2e8e8","elementid":"a4c0e614-1573-49a6-a0f4-dd589f6bf300","modelid":"e9d7df98-6a4b-4322-a3f8-e120922b0ea2"}];
                
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
