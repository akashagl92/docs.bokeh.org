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
      };var element = document.getElementById("21847eab-fd9e-4458-9d73-d38a6a5b11e2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '21847eab-fd9e-4458-9d73-d38a6a5b11e2' but no matching script tag was found. ")
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
                    var docs_json = {"3bf0460b-88ad-4688-9f10-80b612ea8393":{"roots":{"references":[{"attributes":{},"id":"42c8e4ec-f3e6-4175-ae12-bac1798bcd2b","type":"LinearScale"},{"attributes":{"plot":{"id":"8d3c0abc-bf2a-4cfb-b0f6-11341ba72dde","type":"Plot"},"ticker":{"id":"31b57d8b-49d4-4638-a843-38c23442e25e","type":"BasicTicker"}},"id":"a3c564b7-6b70-4268-8c60-0f5c0387ed38","type":"Grid"},{"attributes":{"callback":null},"id":"e7f5f5ca-3ead-43e9-b40b-85daef3baab6","type":"DataRange1d"},{"attributes":{},"id":"dccd2c39-008a-4094-bc49-4e832ca75977","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"e713c255-f40d-4056-a5dd-fe8f4323e1c7","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"ab296f70-b3a1-4bec-b00c-dea0192ed912","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"6ddb8397-ec59-4c89-980c-e8a95e9d0ba4","type":"GlyphRenderer"},{"id":"e713c255-f40d-4056-a5dd-fe8f4323e1c7","type":"LinearAxis"},{"id":"ab296f70-b3a1-4bec-b00c-dea0192ed912","type":"LinearAxis"},{"id":"a3c564b7-6b70-4268-8c60-0f5c0387ed38","type":"Grid"},{"id":"d52e4423-c820-4c26-a7c8-48c810927117","type":"Grid"}],"title":null,"toolbar":{"id":"e14662e6-037f-4474-a56f-0dd5df939672","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"56ca3a55-c214-4f62-a6d9-86b281ba4bbb","type":"DataRange1d"},"x_scale":{"id":"289f2ba6-c0f3-40f8-b254-d2b0dcbf99c8","type":"LinearScale"},"y_range":{"id":"e7f5f5ca-3ead-43e9-b40b-85daef3baab6","type":"DataRange1d"},"y_scale":{"id":"42c8e4ec-f3e6-4175-ae12-bac1798bcd2b","type":"LinearScale"}},"id":"8d3c0abc-bf2a-4cfb-b0f6-11341ba72dde","type":"Plot"},{"attributes":{},"id":"03caa145-88ee-4566-9464-ad8818993203","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"9f95a5bd-4a17-4f8e-a492-3d30d6333317","type":"ColumnDataSource"}},"id":"4f260ecf-b877-4c85-956e-7978fa74abed","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"9f95a5bd-4a17-4f8e-a492-3d30d6333317","type":"ColumnDataSource"},{"attributes":{},"id":"289f2ba6-c0f3-40f8-b254-d2b0dcbf99c8","type":"LinearScale"},{"attributes":{"formatter":{"id":"dccd2c39-008a-4094-bc49-4e832ca75977","type":"BasicTickFormatter"},"plot":{"id":"8d3c0abc-bf2a-4cfb-b0f6-11341ba72dde","type":"Plot"},"ticker":{"id":"94934a2a-5d4c-488e-ab35-841d31a80767","type":"BasicTicker"}},"id":"ab296f70-b3a1-4bec-b00c-dea0192ed912","type":"LinearAxis"},{"attributes":{"formatter":{"id":"03caa145-88ee-4566-9464-ad8818993203","type":"BasicTickFormatter"},"plot":{"id":"8d3c0abc-bf2a-4cfb-b0f6-11341ba72dde","type":"Plot"},"ticker":{"id":"31b57d8b-49d4-4638-a843-38c23442e25e","type":"BasicTicker"}},"id":"e713c255-f40d-4056-a5dd-fe8f4323e1c7","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"8d3c0abc-bf2a-4cfb-b0f6-11341ba72dde","type":"Plot"},"ticker":{"id":"94934a2a-5d4c-488e-ab35-841d31a80767","type":"BasicTicker"}},"id":"d52e4423-c820-4c26-a7c8-48c810927117","type":"Grid"},{"attributes":{},"id":"94934a2a-5d4c-488e-ab35-841d31a80767","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#7fc97f"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"fa28f4d0-30ae-4b43-9646-9e8a767e4619","type":"Annulus"},{"attributes":{},"id":"31b57d8b-49d4-4638-a843-38c23442e25e","type":"BasicTicker"},{"attributes":{"callback":null},"id":"56ca3a55-c214-4f62-a6d9-86b281ba4bbb","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"e14662e6-037f-4474-a56f-0dd5df939672","type":"Toolbar"},{"attributes":{"data_source":{"id":"9f95a5bd-4a17-4f8e-a492-3d30d6333317","type":"ColumnDataSource"},"glyph":{"id":"fa28f4d0-30ae-4b43-9646-9e8a767e4619","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4f260ecf-b877-4c85-956e-7978fa74abed","type":"CDSView"}},"id":"6ddb8397-ec59-4c89-980c-e8a95e9d0ba4","type":"GlyphRenderer"}],"root_ids":["8d3c0abc-bf2a-4cfb-b0f6-11341ba72dde"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"3bf0460b-88ad-4688-9f10-80b612ea8393","elementid":"21847eab-fd9e-4458-9d73-d38a6a5b11e2","modelid":"8d3c0abc-bf2a-4cfb-b0f6-11341ba72dde"}];
                
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
