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
      };var element = document.getElementById("b816a056-daa9-4a5d-a320-b155eec0fc67");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b816a056-daa9-4a5d-a320-b155eec0fc67' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5589d0a7-1342-445b-a1e0-de1e9b62d820":{"roots":{"references":[{"attributes":{},"id":"14806","type":"Selection"},{"attributes":{},"id":"14769","type":"BasicTicker"},{"attributes":{},"id":"14782","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"14799","type":"Title"},{"attributes":{"formatter":{"id":"14801","type":"BasicTickFormatter"},"plot":{"id":"14759","subtype":"Figure","type":"Plot"},"ticker":{"id":"14769","type":"BasicTicker"}},"id":"14768","type":"LinearAxis"},{"attributes":{"formatter":{"id":"14803","type":"BasicTickFormatter"},"plot":{"id":"14759","subtype":"Figure","type":"Plot"},"ticker":{"id":"14774","type":"BasicTicker"}},"id":"14773","type":"LinearAxis"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"14759","subtype":"Figure","type":"Plot"},"ticker":{"id":"14769","type":"BasicTicker"}},"id":"14772","type":"Grid"},{"attributes":{},"id":"14805","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"14793","type":"ColumnDataSource"},"glyph":{"id":"14794","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14795","type":"Circle"},"selection_glyph":null,"view":{"id":"14797","type":"CDSView"}},"id":"14796","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14794","type":"Circle"},{"attributes":{},"id":"14781","type":"SaveTool"},{"attributes":{},"id":"14778","type":"PanTool"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.5},"grid_line_dash":[6,4],"plot":{"id":"14759","subtype":"Figure","type":"Plot"},"ticker":{"id":"14774","type":"BasicTicker"}},"id":"14777","type":"Grid"},{"attributes":{"source":{"id":"14793","type":"ColumnDataSource"}},"id":"14797","type":"CDSView"},{"attributes":{"callback":null},"id":"14760","type":"DataRange1d"},{"attributes":{},"id":"14779","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"14762","type":"DataRange1d"},{"attributes":{"below":[{"id":"14768","type":"LinearAxis"}],"left":[{"id":"14773","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"14768","type":"LinearAxis"},{"id":"14772","type":"Grid"},{"id":"14773","type":"LinearAxis"},{"id":"14777","type":"Grid"},{"id":"14786","type":"BoxAnnotation"},{"id":"14796","type":"GlyphRenderer"}],"title":{"id":"14799","type":"Title"},"toolbar":{"id":"14784","type":"Toolbar"},"x_range":{"id":"14760","type":"DataRange1d"},"x_scale":{"id":"14764","type":"LinearScale"},"y_range":{"id":"14762","type":"DataRange1d"},"y_scale":{"id":"14766","type":"LinearScale"}},"id":"14759","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14801","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14778","type":"PanTool"},{"id":"14779","type":"WheelZoomTool"},{"id":"14780","type":"BoxZoomTool"},{"id":"14781","type":"SaveTool"},{"id":"14782","type":"ResetTool"},{"id":"14783","type":"HelpTool"}]},"id":"14784","type":"Toolbar"},{"attributes":{},"id":"14783","type":"HelpTool"},{"attributes":{},"id":"14766","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"14806","type":"Selection"},"selection_policy":{"id":"14805","type":"UnionRenderers"}},"id":"14793","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14786","type":"BoxAnnotation"},{"attributes":{},"id":"14774","type":"BasicTicker"},{"attributes":{"overlay":{"id":"14786","type":"BoxAnnotation"}},"id":"14780","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14795","type":"Circle"},{"attributes":{},"id":"14764","type":"LinearScale"},{"attributes":{},"id":"14803","type":"BasicTickFormatter"}],"root_ids":["14759"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"5589d0a7-1342-445b-a1e0-de1e9b62d820","roots":{"14759":"b816a056-daa9-4a5d-a320-b155eec0fc67"}}];
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