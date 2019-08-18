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
      };var element = document.getElementById("cbfcebdf-68ef-4ddd-a6a5-4f3fd24ff47e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cbfcebdf-68ef-4ddd-a6a5-4f3fd24ff47e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"6d8abbf0-5cbb-48cc-9ba9-85e51f8405ea":{"roots":{"references":[{"attributes":{},"id":"e9bed509-a9af-429d-a7db-370f2046238f","type":"BasicTicker"},{"attributes":{"source":{"id":"3d23f251-3d7d-4b96-b5a2-435f63b1996b","type":"ColumnDataSource"}},"id":"108549ea-dd5f-4111-9fd6-c93e4dbc6ae6","type":"CDSView"},{"attributes":{},"id":"f19f0db0-edbf-41f8-ae17-b30feebbf813","type":"BasicTicker"},{"attributes":{"formatter":{"id":"879a9d06-e127-4414-b661-21b564e2017e","type":"BasicTickFormatter"},"plot":{"id":"45ecec87-b486-427f-9e81-27055dfe8a73","type":"Plot"},"ticker":{"id":"f19f0db0-edbf-41f8-ae17-b30feebbf813","type":"BasicTicker"}},"id":"c9dd7e72-2f96-483e-875f-aa3559c942ed","type":"LinearAxis"},{"attributes":{},"id":"5255689a-6476-4057-892a-c2d3e66b9786","type":"LinearScale"},{"attributes":{"callback":null},"id":"6f3d86d1-2cb1-44d3-85c7-1d006269c5c0","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"e56b0905-9546-4742-a5c2-62ccab3dc717","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y","r"],"data":{"r":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"3d23f251-3d7d-4b96-b5a2-435f63b1996b","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"45ecec87-b486-427f-9e81-27055dfe8a73","type":"Plot"},"ticker":{"id":"e9bed509-a9af-429d-a7db-370f2046238f","type":"BasicTicker"}},"id":"f1c2fb15-333d-43f9-a209-2f307f0216de","type":"Grid"},{"attributes":{"below":[{"id":"c9dd7e72-2f96-483e-875f-aa3559c942ed","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"4585a20c-2906-4d15-b075-601d20ac7bbf","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"bd32b422-be95-4d15-ab10-abdbac13b693","type":"GlyphRenderer"},{"id":"c9dd7e72-2f96-483e-875f-aa3559c942ed","type":"LinearAxis"},{"id":"4585a20c-2906-4d15-b075-601d20ac7bbf","type":"LinearAxis"},{"id":"f76db9bf-9f31-4a6b-9bb1-a9b28307df66","type":"Grid"},{"id":"f1c2fb15-333d-43f9-a209-2f307f0216de","type":"Grid"}],"title":null,"toolbar":{"id":"e56b0905-9546-4742-a5c2-62ccab3dc717","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6f3d86d1-2cb1-44d3-85c7-1d006269c5c0","type":"DataRange1d"},"x_scale":{"id":"5255689a-6476-4057-892a-c2d3e66b9786","type":"LinearScale"},"y_range":{"id":"c4f47a25-5be3-4308-a80f-dd5cdaae20fb","type":"DataRange1d"},"y_scale":{"id":"38abbbec-230a-4bb5-aaa3-1e8fb90e3b3e","type":"LinearScale"}},"id":"45ecec87-b486-427f-9e81-27055dfe8a73","type":"Plot"},{"attributes":{"callback":null},"id":"c4f47a25-5be3-4308-a80f-dd5cdaae20fb","type":"DataRange1d"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#B3DE69"},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"2b42402b-6672-4f89-9779-107d05d135e9","type":"Wedge"},{"attributes":{"data_source":{"id":"3d23f251-3d7d-4b96-b5a2-435f63b1996b","type":"ColumnDataSource"},"glyph":{"id":"2b42402b-6672-4f89-9779-107d05d135e9","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"108549ea-dd5f-4111-9fd6-c93e4dbc6ae6","type":"CDSView"}},"id":"bd32b422-be95-4d15-ab10-abdbac13b693","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"45ecec87-b486-427f-9e81-27055dfe8a73","type":"Plot"},"ticker":{"id":"f19f0db0-edbf-41f8-ae17-b30feebbf813","type":"BasicTicker"}},"id":"f76db9bf-9f31-4a6b-9bb1-a9b28307df66","type":"Grid"},{"attributes":{},"id":"800aaaad-4864-4573-8e67-91f2ab9e585a","type":"BasicTickFormatter"},{"attributes":{},"id":"879a9d06-e127-4414-b661-21b564e2017e","type":"BasicTickFormatter"},{"attributes":{},"id":"38abbbec-230a-4bb5-aaa3-1e8fb90e3b3e","type":"LinearScale"},{"attributes":{"formatter":{"id":"800aaaad-4864-4573-8e67-91f2ab9e585a","type":"BasicTickFormatter"},"plot":{"id":"45ecec87-b486-427f-9e81-27055dfe8a73","type":"Plot"},"ticker":{"id":"e9bed509-a9af-429d-a7db-370f2046238f","type":"BasicTicker"}},"id":"4585a20c-2906-4d15-b075-601d20ac7bbf","type":"LinearAxis"}],"root_ids":["45ecec87-b486-427f-9e81-27055dfe8a73"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"6d8abbf0-5cbb-48cc-9ba9-85e51f8405ea","elementid":"cbfcebdf-68ef-4ddd-a6a5-4f3fd24ff47e","modelid":"45ecec87-b486-427f-9e81-27055dfe8a73"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
