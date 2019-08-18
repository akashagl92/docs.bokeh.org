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
      };var element = document.getElementById("962e93ef-b571-479f-b4d6-c78de75b5262");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '962e93ef-b571-479f-b4d6-c78de75b5262' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1fcde27b-089d-4a81-86e3-c5bf3be8a9de":{"roots":{"references":[{"attributes":{"formatter":{"id":"8f1636d8-d154-4e80-a8dc-6c3641ec324b","type":"CategoricalTickFormatter"},"plot":{"id":"1791bc64-0ab2-489b-9d99-62b21abb8228","subtype":"Figure","type":"Plot"},"ticker":{"id":"7c3a2c64-b496-4a6b-b82b-74d8a43ae4fb","type":"CategoricalTicker"}},"id":"668962ba-5265-43b7-a600-5603bd53128f","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"1d064595-0693-41e2-94fe-ddf0b9829127","type":"ColumnDataSource"},"glyph":{"id":"79f19221-b96a-4cef-99c0-e5d10f50f5c6","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28648837-0488-4566-9ae8-57e01d6c7bdf","type":"VBar"},"selection_glyph":null,"view":{"id":"f7d9af18-19cf-43e4-a6f6-ceaed8a6d0c1","type":"CDSView"}},"id":"3ec121a4-04b1-4a1c-b01b-485b90828249","type":"GlyphRenderer"},{"attributes":{},"id":"8f1636d8-d154-4e80-a8dc-6c3641ec324b","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["fruits","counts","color"],"data":{"color":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"],"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"1d064595-0693-41e2-94fe-ddf0b9829127","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":9},"id":"34f53a0d-4855-4c59-8096-1bfecec4e6b4","type":"Range1d"},{"attributes":{"source":{"id":"1d064595-0693-41e2-94fe-ddf0b9829127","type":"ColumnDataSource"}},"id":"f7d9af18-19cf-43e4-a6f6-ceaed8a6d0c1","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"1791bc64-0ab2-489b-9d99-62b21abb8228","subtype":"Figure","type":"Plot"},"ticker":{"id":"5328005e-03cc-46cd-9618-6aa886334600","type":"BasicTicker"}},"id":"ea42b729-a9dc-40b1-aee0-46bbe9351c59","type":"Grid"},{"attributes":{},"id":"1b9b0f70-d2cc-400b-8881-2c9bc0a8e30f","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"79f19221-b96a-4cef-99c0-e5d10f50f5c6","type":"VBar"},{"attributes":{"below":[{"id":"668962ba-5265-43b7-a600-5603bd53128f","type":"CategoricalAxis"}],"left":[{"id":"148e3988-1e6c-4ef6-9181-dbe328aa9f11","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"668962ba-5265-43b7-a600-5603bd53128f","type":"CategoricalAxis"},{"id":"d570ec30-bdb8-4c5e-b516-9052d228c497","type":"Grid"},{"id":"148e3988-1e6c-4ef6-9181-dbe328aa9f11","type":"LinearAxis"},{"id":"ea42b729-a9dc-40b1-aee0-46bbe9351c59","type":"Grid"},{"id":"3750a952-421f-4c01-89df-0fc042249ea2","type":"Legend"},{"id":"3ec121a4-04b1-4a1c-b01b-485b90828249","type":"GlyphRenderer"}],"title":{"id":"0b7732af-73e0-4548-ab53-4052630ad916","type":"Title"},"toolbar":{"id":"bf7a1e65-d6c7-4537-a700-ac94531d284a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"23bece35-f1af-4baa-9057-c9880361c63c","type":"FactorRange"},"x_scale":{"id":"4884c8c4-bf2e-4881-9204-cefae535430d","type":"CategoricalScale"},"y_range":{"id":"34f53a0d-4855-4c59-8096-1bfecec4e6b4","type":"Range1d"},"y_scale":{"id":"54e2fe16-721d-4d1d-91de-5f908894fd3f","type":"LinearScale"}},"id":"1791bc64-0ab2-489b-9d99-62b21abb8228","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"3ec121a4-04b1-4a1c-b01b-485b90828249","type":"GlyphRenderer"}]},"id":"eccd8114-4bdc-4ae0-aff7-419ba2859dfd","type":"LegendItem"},{"attributes":{},"id":"4884c8c4-bf2e-4881-9204-cefae535430d","type":"CategoricalScale"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"0b7732af-73e0-4548-ab53-4052630ad916","type":"Title"},{"attributes":{},"id":"5328005e-03cc-46cd-9618-6aa886334600","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"bf7a1e65-d6c7-4537-a700-ac94531d284a","type":"Toolbar"},{"attributes":{},"id":"54e2fe16-721d-4d1d-91de-5f908894fd3f","type":"LinearScale"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"23bece35-f1af-4baa-9057-c9880361c63c","type":"FactorRange"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1791bc64-0ab2-489b-9d99-62b21abb8228","subtype":"Figure","type":"Plot"},"ticker":{"id":"7c3a2c64-b496-4a6b-b82b-74d8a43ae4fb","type":"CategoricalTicker"}},"id":"d570ec30-bdb8-4c5e-b516-9052d228c497","type":"Grid"},{"attributes":{},"id":"7c3a2c64-b496-4a6b-b82b-74d8a43ae4fb","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"28648837-0488-4566-9ae8-57e01d6c7bdf","type":"VBar"},{"attributes":{"formatter":{"id":"1b9b0f70-d2cc-400b-8881-2c9bc0a8e30f","type":"BasicTickFormatter"},"plot":{"id":"1791bc64-0ab2-489b-9d99-62b21abb8228","subtype":"Figure","type":"Plot"},"ticker":{"id":"5328005e-03cc-46cd-9618-6aa886334600","type":"BasicTicker"}},"id":"148e3988-1e6c-4ef6-9181-dbe328aa9f11","type":"LinearAxis"},{"attributes":{"items":[{"id":"eccd8114-4bdc-4ae0-aff7-419ba2859dfd","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"1791bc64-0ab2-489b-9d99-62b21abb8228","subtype":"Figure","type":"Plot"}},"id":"3750a952-421f-4c01-89df-0fc042249ea2","type":"Legend"}],"root_ids":["1791bc64-0ab2-489b-9d99-62b21abb8228"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"1fcde27b-089d-4a81-86e3-c5bf3be8a9de","elementid":"962e93ef-b571-479f-b4d6-c78de75b5262","modelid":"1791bc64-0ab2-489b-9d99-62b21abb8228"}];
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