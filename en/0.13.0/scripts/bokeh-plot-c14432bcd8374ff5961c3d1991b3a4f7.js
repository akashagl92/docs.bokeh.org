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
      };var element = document.getElementById("e7832160-6f60-4799-8458-25d234e488be");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e7832160-6f60-4799-8458-25d234e488be' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"791c4344-50e8-4f47-ad87-b8678a9af697":{"roots":{"references":[{"attributes":{},"id":"2d62b9ed-0941-42be-8251-50ff3452bced","type":"LinearScale"},{"attributes":{},"id":"f9356f08-7151-4d33-a763-07fac9216e86","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"45f94772-544f-4891-932b-eb1b139fdf9a","type":"ColumnDataSource"}},"id":"150f94c8-91e5-4dfe-b8b6-0e8a7e062c5a","type":"CDSView"},{"attributes":{"plot":{"id":"dc1403d0-a2a5-4814-96b7-da93358e87bd","subtype":"Figure","type":"Plot"},"ticker":{"id":"2be607d4-da7c-42dc-b1db-ca0e0db7f86f","type":"BasicTicker"}},"id":"41385d38-2ed7-4043-b16c-8c79c9fb39d9","type":"Grid"},{"attributes":{"formatter":{"id":"0007c5c5-9563-4ea1-bacf-54790b32af0c","type":"BasicTickFormatter"},"plot":{"id":"dc1403d0-a2a5-4814-96b7-da93358e87bd","subtype":"Figure","type":"Plot"},"ticker":{"id":"30ad7e00-375c-4d85-9603-b13595f69555","type":"BasicTicker"}},"id":"16c133af-02f7-44f8-bb99-c328c5467ff1","type":"LinearAxis"},{"attributes":{"data_source":{"id":"45f94772-544f-4891-932b-eb1b139fdf9a","type":"ColumnDataSource"},"glyph":{"id":"62f3d6ee-793e-4757-bf2e-41cbdb3d8414","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a7e33416-3581-4811-b995-5b5acda4a0b0","type":"Circle"},"selection_glyph":null,"view":{"id":"150f94c8-91e5-4dfe-b8b6-0e8a7e062c5a","type":"CDSView"}},"id":"7ee5de3e-9bbe-43c1-a250-d8dd9411ade4","type":"GlyphRenderer"},{"attributes":{},"id":"2be607d4-da7c-42dc-b1db-ca0e0db7f86f","type":"BasicTicker"},{"attributes":{"overlay":{"id":"90a20042-5b0c-441f-8850-81a543e6a2f0","type":"BoxAnnotation"}},"id":"70be2932-0417-4bbb-ae49-c221b8f979ea","type":"BoxZoomTool"},{"attributes":{},"id":"0007c5c5-9563-4ea1-bacf-54790b32af0c","type":"BasicTickFormatter"},{"attributes":{},"id":"946d8edb-3f7c-4f7b-a212-e1de21842f07","type":"PanTool"},{"attributes":{},"id":"d306d043-8e8d-4cd5-bfae-3feb4c3ac3c6","type":"LinearScale"},{"attributes":{},"id":"c008d1ef-e019-4f7b-bedd-8310f14af86b","type":"HelpTool"},{"attributes":{},"id":"eec9b3a2-dc52-411a-964e-eee5bd19c64c","type":"ResetTool"},{"attributes":{},"id":"b6f3eaa5-3cca-43db-bbb0-95947a37461d","type":"Selection"},{"attributes":{},"id":"12cb4dfe-31e1-4a9e-b1fa-b19bec74f656","type":"SaveTool"},{"attributes":{"below":[{"id":"9d4cf6aa-538f-4f81-be6f-1e86422d08be","type":"LinearAxis"}],"left":[{"id":"16c133af-02f7-44f8-bb99-c328c5467ff1","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9d4cf6aa-538f-4f81-be6f-1e86422d08be","type":"LinearAxis"},{"id":"41385d38-2ed7-4043-b16c-8c79c9fb39d9","type":"Grid"},{"id":"16c133af-02f7-44f8-bb99-c328c5467ff1","type":"LinearAxis"},{"id":"9de9312a-316e-4424-b604-2cf7ddd310a4","type":"Grid"},{"id":"90a20042-5b0c-441f-8850-81a543e6a2f0","type":"BoxAnnotation"},{"id":"7ee5de3e-9bbe-43c1-a250-d8dd9411ade4","type":"GlyphRenderer"}],"title":{"id":"c56d136d-6c35-451b-8d6c-16f199bf1e3d","type":"Title"},"toolbar":{"id":"85c7d025-ae3e-47ba-97ff-6586d5ad82a4","type":"Toolbar"},"x_range":{"id":"6f223f3e-76cd-47a1-9630-51598f5959a3","type":"DataRange1d"},"x_scale":{"id":"2d62b9ed-0941-42be-8251-50ff3452bced","type":"LinearScale"},"y_range":{"id":"c62bc71f-a278-4708-a1c3-d44ca5318fcf","type":"DataRange1d"},"y_scale":{"id":"d306d043-8e8d-4cd5-bfae-3feb4c3ac3c6","type":"LinearScale"}},"id":"dc1403d0-a2a5-4814-96b7-da93358e87bd","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1e06bc56-281c-4887-a773-9e8e19e5e75d","type":"UnionRenderers"},{"attributes":{"plot":null,"text":""},"id":"c56d136d-6c35-451b-8d6c-16f199bf1e3d","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"946d8edb-3f7c-4f7b-a212-e1de21842f07","type":"PanTool"},{"id":"6cec92e2-1e79-4056-945c-7b9813840a75","type":"WheelZoomTool"},{"id":"70be2932-0417-4bbb-ae49-c221b8f979ea","type":"BoxZoomTool"},{"id":"12cb4dfe-31e1-4a9e-b1fa-b19bec74f656","type":"SaveTool"},{"id":"eec9b3a2-dc52-411a-964e-eee5bd19c64c","type":"ResetTool"},{"id":"c008d1ef-e019-4f7b-bedd-8310f14af86b","type":"HelpTool"}]},"id":"85c7d025-ae3e-47ba-97ff-6586d5ad82a4","type":"Toolbar"},{"attributes":{"callback":null},"id":"6f223f3e-76cd-47a1-9630-51598f5959a3","type":"DataRange1d"},{"attributes":{},"id":"6cec92e2-1e79-4056-945c-7b9813840a75","type":"WheelZoomTool"},{"attributes":{},"id":"30ad7e00-375c-4d85-9603-b13595f69555","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"a7e33416-3581-4811-b995-5b5acda4a0b0","type":"Circle"},{"attributes":{"callback":null},"id":"c62bc71f-a278-4708-a1c3-d44ca5318fcf","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"62f3d6ee-793e-4757-bf2e-41cbdb3d8414","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"90a20042-5b0c-441f-8850-81a543e6a2f0","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"b6f3eaa5-3cca-43db-bbb0-95947a37461d","type":"Selection"},"selection_policy":{"id":"1e06bc56-281c-4887-a773-9e8e19e5e75d","type":"UnionRenderers"}},"id":"45f94772-544f-4891-932b-eb1b139fdf9a","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"f9356f08-7151-4d33-a763-07fac9216e86","type":"BasicTickFormatter"},"plot":{"id":"dc1403d0-a2a5-4814-96b7-da93358e87bd","subtype":"Figure","type":"Plot"},"ticker":{"id":"2be607d4-da7c-42dc-b1db-ca0e0db7f86f","type":"BasicTicker"}},"id":"9d4cf6aa-538f-4f81-be6f-1e86422d08be","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"dc1403d0-a2a5-4814-96b7-da93358e87bd","subtype":"Figure","type":"Plot"},"ticker":{"id":"30ad7e00-375c-4d85-9603-b13595f69555","type":"BasicTicker"}},"id":"9de9312a-316e-4424-b604-2cf7ddd310a4","type":"Grid"}],"root_ids":["dc1403d0-a2a5-4814-96b7-da93358e87bd"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"791c4344-50e8-4f47-ad87-b8678a9af697","roots":{"dc1403d0-a2a5-4814-96b7-da93358e87bd":"e7832160-6f60-4799-8458-25d234e488be"}}];
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