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
      };var element = document.getElementById("0f1f1c1a-3a8d-42c6-814a-7eba47cd4843");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0f1f1c1a-3a8d-42c6-814a-7eba47cd4843' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.11.min.js"];
    
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
                    var docs_json = '{"678c3bb8-46d9-4a21-a6d8-05ef49d0900a":{"roots":{"references":[{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"43fa4dfd-9fca-4105-91aa-2b1f4419d629","subtype":"Figure","type":"Plot"},"ticker":{"id":"aa0f6ef9-e05a-44ee-a511-33f9f002d3a2","type":"CategoricalTicker"}},"id":"36ae094d-90b3-4aac-8db2-5dd44f5b150f","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"d52fe235-102a-4aaa-9e0b-234c4bec89e2","type":"Toolbar"},{"attributes":{"formatter":{"id":"dffe7269-bd39-4a05-90d4-07e169462a2c","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"43fa4dfd-9fca-4105-91aa-2b1f4419d629","subtype":"Figure","type":"Plot"},"ticker":{"id":"aa0f6ef9-e05a-44ee-a511-33f9f002d3a2","type":"CategoricalTicker"}},"id":"60cce85d-9e81-4f8c-b317-c5778b032918","type":"CategoricalAxis"},{"attributes":{},"id":"34f879b0-4471-4b84-b79b-e764548a0165","type":"CategoricalScale"},{"attributes":{"source":{"id":"9ae4a0ec-8a36-4e0c-8632-8416dd23d75f","type":"ColumnDataSource"}},"id":"6b7d6c91-649d-49f1-b783-2db3289f7a30","type":"CDSView"},{"attributes":{},"id":"99408f5f-04b7-43b3-9edc-a043fb188d24","type":"LinearScale"},{"attributes":{"callback":null,"factors":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]],"range_padding":0.1},"id":"9a338f43-fba1-4f40-ac1a-6a53a7b92b8c","type":"FactorRange"},{"attributes":{"below":[{"id":"60cce85d-9e81-4f8c-b317-c5778b032918","type":"CategoricalAxis"}],"left":[{"id":"71db399c-a3ff-45b8-bd87-dac25ff41e50","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"60cce85d-9e81-4f8c-b317-c5778b032918","type":"CategoricalAxis"},{"id":"36ae094d-90b3-4aac-8db2-5dd44f5b150f","type":"Grid"},{"id":"71db399c-a3ff-45b8-bd87-dac25ff41e50","type":"LinearAxis"},{"id":"14573750-9d78-4901-8c77-8c5f2a4df1b8","type":"Grid"},{"id":"624bd09e-ea63-46ef-9d22-6a4115428a28","type":"GlyphRenderer"},{"id":"5382610d-6b8c-4d10-9a42-09998b7cdad6","type":"GlyphRenderer"}],"title":{"id":"ec576477-e75a-400a-bf75-f8bfc87a7d36","type":"Title"},"toolbar":{"id":"d52fe235-102a-4aaa-9e0b-234c4bec89e2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9a338f43-fba1-4f40-ac1a-6a53a7b92b8c","type":"FactorRange"},"x_scale":{"id":"34f879b0-4471-4b84-b79b-e764548a0165","type":"CategoricalScale"},"y_range":{"id":"cac1ea00-9795-483b-a13d-b85d2dd1d04b","type":"DataRange1d"},"y_scale":{"id":"99408f5f-04b7-43b3-9edc-a043fb188d24","type":"LinearScale"}},"id":"43fa4dfd-9fca-4105-91aa-2b1f4419d629","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"da1a8180-9e85-4654-bfa9-b4f576b9b3f6","type":"ColumnDataSource"},"glyph":{"id":"16494452-fe20-44a9-836c-d3f8f82798e8","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"38cd06ae-91b7-4e0d-b1be-f5a41e2507f9","type":"VBar"},"selection_glyph":null,"view":{"id":"6f5c498b-6f6b-491f-86ca-b3c846f72e53","type":"CDSView"}},"id":"624bd09e-ea63-46ef-9d22-6a4115428a28","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"9ae4a0ec-8a36-4e0c-8632-8416dd23d75f","type":"ColumnDataSource"},"glyph":{"id":"3f203c3a-a7bb-4a13-a920-7bc2324e2949","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6b3ad2cf-ad17-4817-a8a8-0ea573afbf60","type":"Line"},"selection_glyph":null,"view":{"id":"6b7d6c91-649d-49f1-b783-2db3289f7a30","type":"CDSView"}},"id":"5382610d-6b8c-4d10-9a42-09998b7cdad6","type":"GlyphRenderer"},{"attributes":{},"id":"6a3a842a-89a3-4b10-951d-62fec4de75b0","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6b3ad2cf-ad17-4817-a8a8-0ea573afbf60","type":"Line"},{"attributes":{"line_color":"red","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3f203c3a-a7bb-4a13-a920-7bc2324e2949","type":"Line"},{"attributes":{"callback":null,"start":0},"id":"cac1ea00-9795-483b-a13d-b85d2dd1d04b","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[10,12,16,9,10,8,12,13,14,14,12,16],"x":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]]}},"id":"da1a8180-9e85-4654-bfa9-b4f576b9b3f6","type":"ColumnDataSource"},{"attributes":{},"id":"0a0687c3-f696-4a21-9fba-9b4fd9fae6cf","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"16494452-fe20-44a9-836c-d3f8f82798e8","type":"VBar"},{"attributes":{"plot":null,"text":""},"id":"ec576477-e75a-400a-bf75-f8bfc87a7d36","type":"Title"},{"attributes":{"formatter":{"id":"6a3a842a-89a3-4b10-951d-62fec4de75b0","type":"BasicTickFormatter"},"plot":{"id":"43fa4dfd-9fca-4105-91aa-2b1f4419d629","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a0687c3-f696-4a21-9fba-9b4fd9fae6cf","type":"BasicTicker"}},"id":"71db399c-a3ff-45b8-bd87-dac25ff41e50","type":"LinearAxis"},{"attributes":{"source":{"id":"da1a8180-9e85-4654-bfa9-b4f576b9b3f6","type":"ColumnDataSource"}},"id":"6f5c498b-6f6b-491f-86ca-b3c846f72e53","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Q1","Q2","Q3","Q4"],"y":[12,9,13,14]}},"id":"9ae4a0ec-8a36-4e0c-8632-8416dd23d75f","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"43fa4dfd-9fca-4105-91aa-2b1f4419d629","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a0687c3-f696-4a21-9fba-9b4fd9fae6cf","type":"BasicTicker"}},"id":"14573750-9d78-4901-8c77-8c5f2a4df1b8","type":"Grid"},{"attributes":{},"id":"aa0f6ef9-e05a-44ee-a511-33f9f002d3a2","type":"CategoricalTicker"},{"attributes":{},"id":"dffe7269-bd39-4a05-90d4-07e169462a2c","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"38cd06ae-91b7-4e0d-b1be-f5a41e2507f9","type":"VBar"}],"root_ids":["43fa4dfd-9fca-4105-91aa-2b1f4419d629"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"678c3bb8-46d9-4a21-a6d8-05ef49d0900a","elementid":"0f1f1c1a-3a8d-42c6-814a-7eba47cd4843","modelid":"43fa4dfd-9fca-4105-91aa-2b1f4419d629"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
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