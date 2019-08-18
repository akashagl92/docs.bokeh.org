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
      };var element = document.getElementById("bf5ce7dd-a4e2-4cce-868a-8dba09671667");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bf5ce7dd-a4e2-4cce-868a-8dba09671667' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"9929f66d-cc82-4d3b-96ec-67603378b8e1":{"roots":{"references":[{"attributes":{"overlay":{"id":"14093","type":"BoxAnnotation"}},"id":"14087","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"14108","type":"Title"},{"attributes":{},"id":"14114","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"14114","type":"Selection"},"selection_policy":{"id":"14113","type":"UnionRenderers"}},"id":"14100","type":"ColumnDataSource"},{"attributes":{},"id":"14088","type":"SaveTool"},{"attributes":{},"id":"14109","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"14111","type":"BasicTickFormatter"},"plot":{"id":"14066","subtype":"Figure","type":"Plot"},"ticker":{"id":"14081","type":"BasicTicker"}},"id":"14080","type":"LinearAxis"},{"attributes":{},"id":"14073","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14093","type":"BoxAnnotation"},{"attributes":{"ticks":[2,3.5,4]},"id":"14105","type":"FixedTicker"},{"attributes":{"plot":{"id":"14066","subtype":"Figure","type":"Plot"},"ticker":{"id":"14076","type":"BasicTicker"}},"id":"14079","type":"Grid"},{"attributes":{"callback":null},"id":"14067","type":"DataRange1d"},{"attributes":{},"id":"14071","type":"LinearScale"},{"attributes":{"data_source":{"id":"14100","type":"ColumnDataSource"},"glyph":{"id":"14101","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14102","type":"Circle"},"selection_glyph":null,"view":{"id":"14104","type":"CDSView"}},"id":"14103","type":"GlyphRenderer"},{"attributes":{},"id":"14081","type":"BasicTicker"},{"attributes":{},"id":"14090","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14101","type":"Circle"},{"attributes":{"formatter":{"id":"14109","type":"BasicTickFormatter"},"plot":{"id":"14066","subtype":"Figure","type":"Plot"},"ticker":{"id":"14105","type":"FixedTicker"}},"id":"14075","type":"LinearAxis"},{"attributes":{},"id":"14089","type":"ResetTool"},{"attributes":{},"id":"14113","type":"UnionRenderers"},{"attributes":{},"id":"14086","type":"WheelZoomTool"},{"attributes":{"source":{"id":"14100","type":"ColumnDataSource"}},"id":"14104","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"14066","subtype":"Figure","type":"Plot"},"ticker":{"id":"14081","type":"BasicTicker"}},"id":"14084","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14085","type":"PanTool"},{"id":"14086","type":"WheelZoomTool"},{"id":"14087","type":"BoxZoomTool"},{"id":"14088","type":"SaveTool"},{"id":"14089","type":"ResetTool"},{"id":"14090","type":"HelpTool"}]},"id":"14091","type":"Toolbar"},{"attributes":{},"id":"14076","type":"BasicTicker"},{"attributes":{"callback":null},"id":"14069","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14102","type":"Circle"},{"attributes":{},"id":"14111","type":"BasicTickFormatter"},{"attributes":{},"id":"14085","type":"PanTool"},{"attributes":{"below":[{"id":"14075","type":"LinearAxis"}],"left":[{"id":"14080","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"14075","type":"LinearAxis"},{"id":"14079","type":"Grid"},{"id":"14080","type":"LinearAxis"},{"id":"14084","type":"Grid"},{"id":"14093","type":"BoxAnnotation"},{"id":"14103","type":"GlyphRenderer"}],"title":{"id":"14108","type":"Title"},"toolbar":{"id":"14091","type":"Toolbar"},"x_range":{"id":"14067","type":"DataRange1d"},"x_scale":{"id":"14071","type":"LinearScale"},"y_range":{"id":"14069","type":"DataRange1d"},"y_scale":{"id":"14073","type":"LinearScale"}},"id":"14066","subtype":"Figure","type":"Plot"}],"root_ids":["14066"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"9929f66d-cc82-4d3b-96ec-67603378b8e1","roots":{"14066":"bf5ce7dd-a4e2-4cce-868a-8dba09671667"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
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