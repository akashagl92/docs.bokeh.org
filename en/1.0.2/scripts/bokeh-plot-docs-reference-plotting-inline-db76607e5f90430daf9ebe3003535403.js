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
      };var element = document.getElementById("f4e66c51-98fd-4620-89b7-3788c562d079");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f4e66c51-98fd-4620-89b7-3788c562d079' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"13923c5b-e2f1-47b8-aa08-3d76e965bbf4":{"roots":{"references":[{"attributes":{"source":{"id":"34118","type":"ColumnDataSource"}},"id":"34122","type":"CDSView"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"34119","type":"Quad"},{"attributes":{"dimension":1,"plot":{"id":"34084","subtype":"Figure","type":"Plot"},"ticker":{"id":"34099","type":"BasicTicker"}},"id":"34102","type":"Grid"},{"attributes":{"formatter":{"id":"34126","type":"BasicTickFormatter"},"plot":{"id":"34084","subtype":"Figure","type":"Plot"},"ticker":{"id":"34094","type":"BasicTicker"}},"id":"34093","type":"LinearAxis"},{"attributes":{},"id":"34106","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34111","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"34087","type":"DataRange1d"},{"attributes":{},"id":"34128","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"34111","type":"BoxAnnotation"}},"id":"34105","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34103","type":"PanTool"},{"id":"34104","type":"WheelZoomTool"},{"id":"34105","type":"BoxZoomTool"},{"id":"34106","type":"SaveTool"},{"id":"34107","type":"ResetTool"},{"id":"34108","type":"HelpTool"}]},"id":"34109","type":"Toolbar"},{"attributes":{},"id":"34130","type":"UnionRenderers"},{"attributes":{},"id":"34089","type":"LinearScale"},{"attributes":{},"id":"34108","type":"HelpTool"},{"attributes":{},"id":"34104","type":"WheelZoomTool"},{"attributes":{},"id":"34131","type":"Selection"},{"attributes":{},"id":"34091","type":"LinearScale"},{"attributes":{},"id":"34107","type":"ResetTool"},{"attributes":{"callback":null,"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]},"selected":{"id":"34131","type":"Selection"},"selection_policy":{"id":"34130","type":"UnionRenderers"}},"id":"34118","type":"ColumnDataSource"},{"attributes":{},"id":"34094","type":"BasicTicker"},{"attributes":{},"id":"34126","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"34084","subtype":"Figure","type":"Plot"},"ticker":{"id":"34094","type":"BasicTicker"}},"id":"34097","type":"Grid"},{"attributes":{"below":[{"id":"34093","type":"LinearAxis"}],"left":[{"id":"34098","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34093","type":"LinearAxis"},{"id":"34097","type":"Grid"},{"id":"34098","type":"LinearAxis"},{"id":"34102","type":"Grid"},{"id":"34111","type":"BoxAnnotation"},{"id":"34121","type":"GlyphRenderer"}],"title":{"id":"34124","type":"Title"},"toolbar":{"id":"34109","type":"Toolbar"},"x_range":{"id":"34085","type":"DataRange1d"},"x_scale":{"id":"34089","type":"LinearScale"},"y_range":{"id":"34087","type":"DataRange1d"},"y_scale":{"id":"34091","type":"LinearScale"}},"id":"34084","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"34124","type":"Title"},{"attributes":{"formatter":{"id":"34128","type":"BasicTickFormatter"},"plot":{"id":"34084","subtype":"Figure","type":"Plot"},"ticker":{"id":"34099","type":"BasicTicker"}},"id":"34098","type":"LinearAxis"},{"attributes":{"data_source":{"id":"34118","type":"ColumnDataSource"},"glyph":{"id":"34119","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34120","type":"Quad"},"selection_glyph":null,"view":{"id":"34122","type":"CDSView"}},"id":"34121","type":"GlyphRenderer"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"34120","type":"Quad"},{"attributes":{},"id":"34103","type":"PanTool"},{"attributes":{},"id":"34099","type":"BasicTicker"},{"attributes":{"callback":null},"id":"34085","type":"DataRange1d"}],"root_ids":["34084"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"13923c5b-e2f1-47b8-aa08-3d76e965bbf4","roots":{"34084":"f4e66c51-98fd-4620-89b7-3788c562d079"}}];
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