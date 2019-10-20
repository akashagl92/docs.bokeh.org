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
      };var element = document.getElementById("3a301307-752b-455f-8922-df1f81111a0d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3a301307-752b-455f-8922-df1f81111a0d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"8bc9a7a2-a07e-4276-aae6-b200fce0fe70":{"roots":{"references":[{"attributes":{},"id":"10468","type":"UnionRenderers"},{"attributes":{"plot":{"id":"10427","subtype":"Figure","type":"Plot"},"ticker":{"id":"10437","type":"BasicTicker"}},"id":"10440","type":"Grid"},{"attributes":{"source":{"id":"10426","type":"ColumnDataSource"}},"id":"10453","type":"CDSView"},{"attributes":{},"id":"10469","type":"Selection"},{"attributes":{"data_source":{"id":"10426","type":"ColumnDataSource"},"glyph":{"id":"10450","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10451","type":"Circle"},"selection_glyph":null,"view":{"id":"10453","type":"CDSView"}},"id":"10452","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"10427","subtype":"Figure","type":"Plot"},"ticker":{"id":"10442","type":"BasicTicker"}},"id":"10445","type":"Grid"},{"attributes":{},"id":"10437","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"10451","type":"Circle"},{"attributes":{"label":{"field":"label"},"renderers":[{"id":"10452","type":"GlyphRenderer"}]},"id":"10461","type":"LegendItem"},{"attributes":{},"id":"10442","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"10446","type":"SaveTool"}]},"id":"10447","type":"Toolbar"},{"attributes":{},"id":"10456","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"10456","type":"BasicTickFormatter"},"plot":{"id":"10427","subtype":"Figure","type":"Plot"},"ticker":{"id":"10442","type":"BasicTicker"}},"id":"10441","type":"LinearAxis"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"10450","type":"Circle"},{"attributes":{"formatter":{"id":"10458","type":"BasicTickFormatter"},"plot":{"id":"10427","subtype":"Figure","type":"Plot"},"ticker":{"id":"10437","type":"BasicTicker"}},"id":"10436","type":"LinearAxis"},{"attributes":{"callback":null,"end":3},"id":"10430","type":"Range1d"},{"attributes":{"below":[{"id":"10436","type":"LinearAxis"}],"left":[{"id":"10441","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"10436","type":"LinearAxis"},{"id":"10440","type":"Grid"},{"id":"10441","type":"LinearAxis"},{"id":"10445","type":"Grid"},{"id":"10460","type":"Legend"},{"id":"10452","type":"GlyphRenderer"}],"title":{"id":"10454","type":"Title"},"toolbar":{"id":"10447","type":"Toolbar"},"x_range":{"id":"10428","type":"Range1d"},"x_scale":{"id":"10432","type":"LinearScale"},"y_range":{"id":"10430","type":"Range1d"},"y_scale":{"id":"10434","type":"LinearScale"}},"id":"10427","subtype":"Figure","type":"Plot"},{"attributes":{"items":[{"id":"10461","type":"LegendItem"}],"plot":{"id":"10427","subtype":"Figure","type":"Plot"}},"id":"10460","type":"Legend"},{"attributes":{},"id":"10458","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":7},"id":"10428","type":"Range1d"},{"attributes":{"callback":null,"data":{"color":["#ef8a62","#67a9cf","#ef8a62","#67a9cf","#ef8a62","#67a9cf"],"label":["hi","lo","hi","lo","hi","lo"],"x":[1,2,3,4,5,6],"y":[2,1,2,1,2,1]},"selected":{"id":"10469","type":"Selection"},"selection_policy":{"id":"10468","type":"UnionRenderers"}},"id":"10426","type":"ColumnDataSource"},{"attributes":{},"id":"10446","type":"SaveTool"},{"attributes":{},"id":"10432","type":"LinearScale"},{"attributes":{},"id":"10434","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"10454","type":"Title"}],"root_ids":["10427"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"8bc9a7a2-a07e-4276-aae6-b200fce0fe70","roots":{"10427":"3a301307-752b-455f-8922-df1f81111a0d"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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