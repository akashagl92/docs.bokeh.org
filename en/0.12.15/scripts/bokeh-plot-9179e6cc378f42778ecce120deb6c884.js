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
      };var element = document.getElementById("f03b55e7-e38d-4613-b56d-eeb139cd23f4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f03b55e7-e38d-4613-b56d-eeb139cd23f4' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.15.min.js"];
    
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
                    
                  var docs_json = '{"e7745f01-42b2-4398-aead-5196d493b72b":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"b7fd2392-1a9f-4a6b-9385-fb3c8bf19681","type":"VBar"},{"attributes":{"dimension":1,"plot":{"id":"dd93660f-85b0-4ad3-990f-7eba277781a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"dc04459c-7ed8-433d-aaf0-d190eb6130c1","type":"BasicTicker"}},"id":"97e6c233-c9b9-4536-b1b6-85d9671433c6","type":"Grid"},{"attributes":{},"id":"301b2898-a33e-47f0-be6d-a228097454d4","type":"CategoricalScale"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[5,3,4,2,4,6],"x":[["Apples",-0.5],["Pears",-0.2],["Nectarines",0.0],["Plums",0.3],["Grapes",0.1],["Strawberries",0.3]]},"selected":null,"selection_policy":null},"id":"9f333c52-bd9f-45ce-bf7f-54320dff50c4","type":"ColumnDataSource"},{"attributes":{},"id":"a0a2e47b-f12f-4bb2-9e8c-fea8020bcbe5","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"8663ed9c-f056-4bc2-8396-0b8f5f23aa4e","type":"CategoricalTickFormatter"},"plot":{"id":"dd93660f-85b0-4ad3-990f-7eba277781a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"a0a2e47b-f12f-4bb2-9e8c-fea8020bcbe5","type":"CategoricalTicker"}},"id":"9b51ab65-afbb-4059-b172-fef283970c1d","type":"CategoricalAxis"},{"attributes":{},"id":"8663ed9c-f056-4bc2-8396-0b8f5f23aa4e","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"97a41157-6909-41ae-b957-a21845440e7b","type":"VBar"},{"attributes":{"formatter":{"id":"56a1068a-ed53-4430-afea-172e6ac95b5c","type":"BasicTickFormatter"},"plot":{"id":"dd93660f-85b0-4ad3-990f-7eba277781a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"dc04459c-7ed8-433d-aaf0-d190eb6130c1","type":"BasicTicker"}},"id":"1b4da70a-4e27-4e23-bed9-bfef0335dbb5","type":"LinearAxis"},{"attributes":{"below":[{"id":"9b51ab65-afbb-4059-b172-fef283970c1d","type":"CategoricalAxis"}],"left":[{"id":"1b4da70a-4e27-4e23-bed9-bfef0335dbb5","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"9b51ab65-afbb-4059-b172-fef283970c1d","type":"CategoricalAxis"},{"id":"f2e2d8c5-9b1e-4c2f-8aa1-90738da9b94b","type":"Grid"},{"id":"1b4da70a-4e27-4e23-bed9-bfef0335dbb5","type":"LinearAxis"},{"id":"97e6c233-c9b9-4536-b1b6-85d9671433c6","type":"Grid"},{"id":"763d97c7-8bd5-4c33-8fea-43cfbc54e83a","type":"GlyphRenderer"}],"title":{"id":"1f11298b-0aaa-4f7c-9772-312274bcad35","type":"Title"},"toolbar":{"id":"943e2922-6c24-4013-8bca-c47a4a7e1b59","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9496cdac-7674-41db-ae80-ce67b28ec096","type":"FactorRange"},"x_scale":{"id":"301b2898-a33e-47f0-be6d-a228097454d4","type":"CategoricalScale"},"y_range":{"id":"f84098f6-c918-44d1-954d-1f49ad3dd6cb","type":"DataRange1d"},"y_scale":{"id":"26f36391-5d9a-42a3-a508-e0224e7b865b","type":"LinearScale"}},"id":"dd93660f-85b0-4ad3-990f-7eba277781a5","subtype":"Figure","type":"Plot"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"dd93660f-85b0-4ad3-990f-7eba277781a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"a0a2e47b-f12f-4bb2-9e8c-fea8020bcbe5","type":"CategoricalTicker"}},"id":"f2e2d8c5-9b1e-4c2f-8aa1-90738da9b94b","type":"Grid"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"1f11298b-0aaa-4f7c-9772-312274bcad35","type":"Title"},{"attributes":{},"id":"26f36391-5d9a-42a3-a508-e0224e7b865b","type":"LinearScale"},{"attributes":{},"id":"dc04459c-7ed8-433d-aaf0-d190eb6130c1","type":"BasicTicker"},{"attributes":{"data_source":{"id":"9f333c52-bd9f-45ce-bf7f-54320dff50c4","type":"ColumnDataSource"},"glyph":{"id":"b7fd2392-1a9f-4a6b-9385-fb3c8bf19681","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"97a41157-6909-41ae-b957-a21845440e7b","type":"VBar"},"selection_glyph":null,"view":{"id":"9a2a2134-2217-48d8-8c7f-94bf4b3db786","type":"CDSView"}},"id":"763d97c7-8bd5-4c33-8fea-43cfbc54e83a","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"943e2922-6c24-4013-8bca-c47a4a7e1b59","type":"Toolbar"},{"attributes":{"callback":null,"start":0},"id":"f84098f6-c918-44d1-954d-1f49ad3dd6cb","type":"DataRange1d"},{"attributes":{"source":{"id":"9f333c52-bd9f-45ce-bf7f-54320dff50c4","type":"ColumnDataSource"}},"id":"9a2a2134-2217-48d8-8c7f-94bf4b3db786","type":"CDSView"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"9496cdac-7674-41db-ae80-ce67b28ec096","type":"FactorRange"},{"attributes":{},"id":"56a1068a-ed53-4430-afea-172e6ac95b5c","type":"BasicTickFormatter"}],"root_ids":["dd93660f-85b0-4ad3-990f-7eba277781a5"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"e7745f01-42b2-4398-aead-5196d493b72b","elementid":"f03b55e7-e38d-4613-b56d-eeb139cd23f4","modelid":"dd93660f-85b0-4ad3-990f-7eba277781a5"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
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