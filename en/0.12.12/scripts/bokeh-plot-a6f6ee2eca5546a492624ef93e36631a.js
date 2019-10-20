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
      };var element = document.getElementById("6090f346-ac35-4394-be9e-40aced391504");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6090f346-ac35-4394-be9e-40aced391504' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.12.min.js"];
    
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
                    
                  var docs_json = '{"a318ca38-2967-497e-8937-44a192e26fdd":{"roots":{"references":[{"attributes":{"source":{"id":"9cf43a4e-fba6-42ba-bee6-63a126dd534a","type":"ColumnDataSource"}},"id":"e7d8d0a6-2960-4f0c-a1b5-8104783cdbdf","type":"CDSView"},{"attributes":{},"id":"20bb5d06-ab12-4b16-820d-f484ca09a404","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"8a79b81a-4b55-4d16-993a-cd18b93e7a99","subtype":"Figure","type":"Plot"},"ticker":{"id":"e7dd0654-f777-4496-b8ba-684b57c58c9e","type":"BasicTicker"}},"id":"2f2efb6d-8fcb-46a9-850d-c82bc9f7e95e","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"11e85ca0-72b0-4264-aa57-a8fb6861c137","type":"Circle"},{"attributes":{},"id":"9fd91abd-17f7-4706-9c4a-ff876da6dc32","type":"ResetTool"},{"attributes":{},"id":"ac46c59c-22fb-41f2-9826-b832381a6109","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"65802b4b-9ed1-4fd8-8d16-d14aaa4b155a","type":"Circle"},{"attributes":{},"id":"3a59e77e-7158-4e02-8564-8c4581ce9069","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"1a4adbba-633a-4cd3-a492-6e9b67976b97","type":"LinearAxis"}],"left":[{"id":"938751ac-1dd5-4c97-b861-4ad572c9f3e6","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1a4adbba-633a-4cd3-a492-6e9b67976b97","type":"LinearAxis"},{"id":"d66dff9c-ff28-4535-b9de-ae992687fde5","type":"Grid"},{"id":"938751ac-1dd5-4c97-b861-4ad572c9f3e6","type":"LinearAxis"},{"id":"2f2efb6d-8fcb-46a9-850d-c82bc9f7e95e","type":"Grid"},{"id":"a2a80251-a768-4c0d-8045-340e30d779a6","type":"GlyphRenderer"}],"title":{"id":"13382782-5b38-4dca-bf10-2a554f13a1f1","type":"Title"},"toolbar":{"id":"86dc2c59-97d8-4ebd-a64a-b8cf4d33f4b3","type":"Toolbar"},"x_range":{"id":"e4040c0c-d89c-45e2-bd07-048d607df349","type":"DataRange1d"},"x_scale":{"id":"806b0cb6-27c2-44ee-8105-0872a9cc32ea","type":"LinearScale"},"y_range":{"id":"a8878f6a-f39d-439b-8e54-f29449535f7a","type":"DataRange1d"},"y_scale":{"id":"714cd166-6cbe-4eec-a2d1-e04701a3380d","type":"LinearScale"}},"id":"8a79b81a-4b55-4d16-993a-cd18b93e7a99","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"13382782-5b38-4dca-bf10-2a554f13a1f1","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2b4058f3-213a-43c3-8842-2c088d566693","type":"PanTool"},{"id":"9fd91abd-17f7-4706-9c4a-ff876da6dc32","type":"ResetTool"},{"id":"ac46c59c-22fb-41f2-9826-b832381a6109","type":"SaveTool"}]},"id":"86dc2c59-97d8-4ebd-a64a-b8cf4d33f4b3","type":"Toolbar"},{"attributes":{"callback":null},"id":"e4040c0c-d89c-45e2-bd07-048d607df349","type":"DataRange1d"},{"attributes":{},"id":"e7dd0654-f777-4496-b8ba-684b57c58c9e","type":"BasicTicker"},{"attributes":{},"id":"55d53b03-afdd-438f-a12c-03034617ee05","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"55d53b03-afdd-438f-a12c-03034617ee05","type":"BasicTickFormatter"},"plot":{"id":"8a79b81a-4b55-4d16-993a-cd18b93e7a99","subtype":"Figure","type":"Plot"},"ticker":{"id":"e7dd0654-f777-4496-b8ba-684b57c58c9e","type":"BasicTicker"}},"id":"938751ac-1dd5-4c97-b861-4ad572c9f3e6","type":"LinearAxis"},{"attributes":{"callback":null},"id":"a8878f6a-f39d-439b-8e54-f29449535f7a","type":"DataRange1d"},{"attributes":{},"id":"806b0cb6-27c2-44ee-8105-0872a9cc32ea","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2.5,3,2],"y":[2,3,1,1.5]}},"id":"9cf43a4e-fba6-42ba-bee6-63a126dd534a","type":"ColumnDataSource"},{"attributes":{},"id":"714cd166-6cbe-4eec-a2d1-e04701a3380d","type":"LinearScale"},{"attributes":{"data_source":{"id":"9cf43a4e-fba6-42ba-bee6-63a126dd534a","type":"ColumnDataSource"},"glyph":{"id":"11e85ca0-72b0-4264-aa57-a8fb6861c137","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65802b4b-9ed1-4fd8-8d16-d14aaa4b155a","type":"Circle"},"selection_glyph":null,"view":{"id":"e7d8d0a6-2960-4f0c-a1b5-8104783cdbdf","type":"CDSView"}},"id":"a2a80251-a768-4c0d-8045-340e30d779a6","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"8a79b81a-4b55-4d16-993a-cd18b93e7a99","subtype":"Figure","type":"Plot"},"ticker":{"id":"20bb5d06-ab12-4b16-820d-f484ca09a404","type":"BasicTicker"}},"id":"d66dff9c-ff28-4535-b9de-ae992687fde5","type":"Grid"},{"attributes":{},"id":"2b4058f3-213a-43c3-8842-2c088d566693","type":"PanTool"},{"attributes":{"formatter":{"id":"3a59e77e-7158-4e02-8564-8c4581ce9069","type":"BasicTickFormatter"},"plot":{"id":"8a79b81a-4b55-4d16-993a-cd18b93e7a99","subtype":"Figure","type":"Plot"},"ticker":{"id":"20bb5d06-ab12-4b16-820d-f484ca09a404","type":"BasicTicker"}},"id":"1a4adbba-633a-4cd3-a492-6e9b67976b97","type":"LinearAxis"}],"root_ids":["8a79b81a-4b55-4d16-993a-cd18b93e7a99"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"a318ca38-2967-497e-8937-44a192e26fdd","elementid":"6090f346-ac35-4394-be9e-40aced391504","modelid":"8a79b81a-4b55-4d16-993a-cd18b93e7a99"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
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