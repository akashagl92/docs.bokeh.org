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
      };var element = document.getElementById("338e90f6-6588-46df-9e9d-3956efa5a72a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '338e90f6-6588-46df-9e9d-3956efa5a72a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.13.min.js"];
    
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
                    
                  var docs_json = '{"2eda3056-15d0-4d65-9452-093615d93c5e":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[10,12,16,9,10,8,12,13,14,14,12,16],"x":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]]}},"id":"d4c87ef7-fe6c-455e-b02f-e843bc24a1a4","type":"ColumnDataSource"},{"attributes":{},"id":"437ba773-2277-4c23-a362-5c21846c83f9","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"97ba828f-1694-4cf7-ab49-3b359c87701b","subtype":"Figure","type":"Plot"},"ticker":{"id":"70661c74-65aa-4252-8d0a-d279c7c4bbce","type":"BasicTicker"}},"id":"1031584b-1857-441e-a057-716a204878b5","type":"Grid"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"97ba828f-1694-4cf7-ab49-3b359c87701b","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8227d1d-7745-4b09-969b-4d9e369604d1","type":"CategoricalTicker"}},"id":"aae44a1d-7ab0-47bb-9e0f-3c6d57349d0d","type":"Grid"},{"attributes":{"callback":null,"factors":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]],"range_padding":0.1},"id":"ffe9d1ff-cbed-4dee-ae3d-6e52fe2f5177","type":"FactorRange"},{"attributes":{"formatter":{"id":"21d6b6f6-4345-4f64-8067-60996edb0925","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"97ba828f-1694-4cf7-ab49-3b359c87701b","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8227d1d-7745-4b09-969b-4d9e369604d1","type":"CategoricalTicker"}},"id":"32636338-08ad-4773-8f55-57e26cb4d1a0","type":"CategoricalAxis"},{"attributes":{"below":[{"id":"32636338-08ad-4773-8f55-57e26cb4d1a0","type":"CategoricalAxis"}],"left":[{"id":"326710d9-d25e-4a49-9e05-1074d3f11ac3","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"32636338-08ad-4773-8f55-57e26cb4d1a0","type":"CategoricalAxis"},{"id":"aae44a1d-7ab0-47bb-9e0f-3c6d57349d0d","type":"Grid"},{"id":"326710d9-d25e-4a49-9e05-1074d3f11ac3","type":"LinearAxis"},{"id":"1031584b-1857-441e-a057-716a204878b5","type":"Grid"},{"id":"6bdfb913-c357-41ce-8c1d-ba7fe9fad1b1","type":"GlyphRenderer"},{"id":"7ba9f768-a51a-47ac-aaed-03bbe6c0216f","type":"GlyphRenderer"}],"title":{"id":"0f91855f-4072-41ca-a169-157e7dec20e1","type":"Title"},"toolbar":{"id":"3bcb4952-ea41-41af-90f8-76aad3e7c7f5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ffe9d1ff-cbed-4dee-ae3d-6e52fe2f5177","type":"FactorRange"},"x_scale":{"id":"fc025e1d-9bf0-4275-a80d-fade8f45e785","type":"CategoricalScale"},"y_range":{"id":"0e34cffd-2005-41d1-8782-36b32fa867df","type":"DataRange1d"},"y_scale":{"id":"437ba773-2277-4c23-a362-5c21846c83f9","type":"LinearScale"}},"id":"97ba828f-1694-4cf7-ab49-3b359c87701b","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"d4c87ef7-fe6c-455e-b02f-e843bc24a1a4","type":"ColumnDataSource"},"glyph":{"id":"24bae238-ca67-486c-a928-f64d1ebab679","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c5bc19d9-ed2a-4b4d-9d0b-38b9fc7d1d83","type":"VBar"},"selection_glyph":null,"view":{"id":"430087ec-6fda-4df0-8e9e-bba8d62e35dc","type":"CDSView"}},"id":"6bdfb913-c357-41ce-8c1d-ba7fe9fad1b1","type":"GlyphRenderer"},{"attributes":{},"id":"d8227d1d-7745-4b09-969b-4d9e369604d1","type":"CategoricalTicker"},{"attributes":{"source":{"id":"55708e3d-5d82-4248-8c6e-db330defb85c","type":"ColumnDataSource"}},"id":"4daaa990-caab-4355-af00-2f974a98ce8a","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"24bae238-ca67-486c-a928-f64d1ebab679","type":"VBar"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"52e062f7-4674-4a7c-8b04-26e71de1edad","type":"Line"},{"attributes":{},"id":"70661c74-65aa-4252-8d0a-d279c7c4bbce","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"3bcb4952-ea41-41af-90f8-76aad3e7c7f5","type":"Toolbar"},{"attributes":{"formatter":{"id":"73d49a03-ee47-4722-8725-a4a296703942","type":"BasicTickFormatter"},"plot":{"id":"97ba828f-1694-4cf7-ab49-3b359c87701b","subtype":"Figure","type":"Plot"},"ticker":{"id":"70661c74-65aa-4252-8d0a-d279c7c4bbce","type":"BasicTicker"}},"id":"326710d9-d25e-4a49-9e05-1074d3f11ac3","type":"LinearAxis"},{"attributes":{},"id":"73d49a03-ee47-4722-8725-a4a296703942","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"d4c87ef7-fe6c-455e-b02f-e843bc24a1a4","type":"ColumnDataSource"}},"id":"430087ec-6fda-4df0-8e9e-bba8d62e35dc","type":"CDSView"},{"attributes":{"callback":null,"start":0},"id":"0e34cffd-2005-41d1-8782-36b32fa867df","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"0f91855f-4072-41ca-a169-157e7dec20e1","type":"Title"},{"attributes":{},"id":"fc025e1d-9bf0-4275-a80d-fade8f45e785","type":"CategoricalScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"c5bc19d9-ed2a-4b4d-9d0b-38b9fc7d1d83","type":"VBar"},{"attributes":{"data_source":{"id":"55708e3d-5d82-4248-8c6e-db330defb85c","type":"ColumnDataSource"},"glyph":{"id":"a06a7f4d-20bf-4bf4-a517-7d339a07edf7","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"52e062f7-4674-4a7c-8b04-26e71de1edad","type":"Line"},"selection_glyph":null,"view":{"id":"4daaa990-caab-4355-af00-2f974a98ce8a","type":"CDSView"}},"id":"7ba9f768-a51a-47ac-aaed-03bbe6c0216f","type":"GlyphRenderer"},{"attributes":{"line_color":"red","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"a06a7f4d-20bf-4bf4-a517-7d339a07edf7","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Q1","Q2","Q3","Q4"],"y":[12,9,13,14]}},"id":"55708e3d-5d82-4248-8c6e-db330defb85c","type":"ColumnDataSource"},{"attributes":{},"id":"21d6b6f6-4345-4f64-8067-60996edb0925","type":"CategoricalTickFormatter"}],"root_ids":["97ba828f-1694-4cf7-ab49-3b359c87701b"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"2eda3056-15d0-4d65-9452-093615d93c5e","elementid":"338e90f6-6588-46df-9e9d-3956efa5a72a","modelid":"97ba828f-1694-4cf7-ab49-3b359c87701b"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
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