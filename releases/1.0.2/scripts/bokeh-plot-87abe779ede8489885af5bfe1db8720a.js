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
      };var element = document.getElementById("a85cf06e-486b-4aee-b9ec-32d4581f5a97");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a85cf06e-486b-4aee-b9ec-32d4581f5a97' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"19c0b7ae-0bb4-43a4-88a6-4a6a92eb0917":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"14021","type":"Title"},{"attributes":{"below":[{"id":"13990","type":"LinearAxis"}],"left":[{"id":"13995","type":"LinearAxis"}],"plot_height":300,"plot_width":700,"renderers":[{"id":"13990","type":"LinearAxis"},{"id":"13994","type":"Grid"},{"id":"13995","type":"LinearAxis"},{"id":"13999","type":"Grid"},{"id":"14008","type":"BoxAnnotation"},{"id":"14018","type":"GlyphRenderer"}],"title":{"id":"14021","type":"Title"},"toolbar":{"id":"14006","type":"Toolbar"},"x_range":{"id":"13982","type":"DataRange1d"},"x_scale":{"id":"13986","type":"LinearScale"},"y_range":{"id":"13984","type":"DataRange1d"},"y_scale":{"id":"13988","type":"LinearScale"}},"id":"13981","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14000","type":"PanTool"},{"id":"14001","type":"WheelZoomTool"},{"id":"14002","type":"BoxZoomTool"},{"id":"14003","type":"SaveTool"},{"id":"14004","type":"ResetTool"},{"id":"14005","type":"HelpTool"}]},"id":"14006","type":"Toolbar"},{"attributes":{},"id":"14001","type":"WheelZoomTool"},{"attributes":{},"id":"13996","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"14028","type":"Selection"},"selection_policy":{"id":"14027","type":"UnionRenderers"}},"id":"14015","type":"ColumnDataSource"},{"attributes":{},"id":"13988","type":"LinearScale"},{"attributes":{},"id":"13986","type":"LinearScale"},{"attributes":{"callback":null},"id":"13982","type":"DataRange1d"},{"attributes":{"data_source":{"id":"14015","type":"ColumnDataSource"},"glyph":{"id":"14016","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14017","type":"Circle"},"selection_glyph":null,"view":{"id":"14019","type":"CDSView"}},"id":"14018","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"13984","type":"DataRange1d"},{"attributes":{},"id":"14005","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14008","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"14008","type":"BoxAnnotation"}},"id":"14002","type":"BoxZoomTool"},{"attributes":{},"id":"13991","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14016","type":"Circle"},{"attributes":{"formatter":{"id":"14023","type":"BasicTickFormatter"},"plot":{"id":"13981","subtype":"Figure","type":"Plot"},"ticker":{"id":"13991","type":"BasicTicker"}},"id":"13990","type":"LinearAxis"},{"attributes":{"plot":{"id":"13981","subtype":"Figure","type":"Plot"},"ticker":{"id":"13991","type":"BasicTicker"}},"id":"13994","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"13981","subtype":"Figure","type":"Plot"},"ticker":{"id":"13996","type":"BasicTicker"}},"id":"13999","type":"Grid"},{"attributes":{},"id":"14025","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"14025","type":"BasicTickFormatter"},"plot":{"id":"13981","subtype":"Figure","type":"Plot"},"ticker":{"id":"13996","type":"BasicTicker"}},"id":"13995","type":"LinearAxis"},{"attributes":{},"id":"14004","type":"ResetTool"},{"attributes":{},"id":"14023","type":"BasicTickFormatter"},{"attributes":{},"id":"14027","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14017","type":"Circle"},{"attributes":{},"id":"14003","type":"SaveTool"},{"attributes":{"source":{"id":"14015","type":"ColumnDataSource"}},"id":"14019","type":"CDSView"},{"attributes":{},"id":"14028","type":"Selection"},{"attributes":{},"id":"14000","type":"PanTool"}],"root_ids":["13981"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"19c0b7ae-0bb4-43a4-88a6-4a6a92eb0917","roots":{"13981":"a85cf06e-486b-4aee-b9ec-32d4581f5a97"}}];
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