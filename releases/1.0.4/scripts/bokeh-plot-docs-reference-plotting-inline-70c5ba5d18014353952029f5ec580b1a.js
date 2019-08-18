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
      };var element = document.getElementById("b9ba3bee-84a8-4c7b-b841-419e3e8ccfc7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b9ba3bee-84a8-4c7b-b841-419e3e8ccfc7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4d74f088-b05a-4f9a-b352-477b96d42c22":{"roots":{"references":[{"attributes":{"callback":null},"id":"33346","type":"DataRange1d"},{"attributes":{"overlay":{"id":"33372","type":"BoxAnnotation"}},"id":"33366","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"33386","type":"BasicTickFormatter"},"plot":{"id":"33345","subtype":"Figure","type":"Plot"},"ticker":{"id":"33360","type":"BasicTicker"}},"id":"33359","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33364","type":"PanTool"},{"id":"33365","type":"WheelZoomTool"},{"id":"33366","type":"BoxZoomTool"},{"id":"33367","type":"SaveTool"},{"id":"33368","type":"ResetTool"},{"id":"33369","type":"HelpTool"}]},"id":"33370","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"33384","type":"Title"},{"attributes":{},"id":"33360","type":"BasicTicker"},{"attributes":{},"id":"33368","type":"ResetTool"},{"attributes":{},"id":"33391","type":"Selection"},{"attributes":{"callback":null,"data":{"q":[1,2,2],"r":[0,0,1]},"selected":{"id":"33391","type":"Selection"},"selection_policy":{"id":"33390","type":"UnionRenderers"}},"id":"33379","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"33345","subtype":"Figure","type":"Plot"},"ticker":{"id":"33355","type":"BasicTicker"}},"id":"33358","type":"Grid"},{"attributes":{},"id":"33390","type":"UnionRenderers"},{"attributes":{},"id":"33386","type":"BasicTickFormatter"},{"attributes":{},"id":"33364","type":"PanTool"},{"attributes":{},"id":"33388","type":"BasicTickFormatter"},{"attributes":{},"id":"33365","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"33354","type":"LinearAxis"}],"left":[{"id":"33359","type":"LinearAxis"}],"match_aspect":true,"plot_height":300,"plot_width":300,"renderers":[{"id":"33354","type":"LinearAxis"},{"id":"33358","type":"Grid"},{"id":"33359","type":"LinearAxis"},{"id":"33363","type":"Grid"},{"id":"33372","type":"BoxAnnotation"},{"id":"33382","type":"GlyphRenderer"}],"title":{"id":"33384","type":"Title"},"toolbar":{"id":"33370","type":"Toolbar"},"x_range":{"id":"33346","type":"DataRange1d"},"x_scale":{"id":"33350","type":"LinearScale"},"y_range":{"id":"33348","type":"DataRange1d"},"y_scale":{"id":"33352","type":"LinearScale"}},"id":"33345","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33372","type":"BoxAnnotation"},{"attributes":{},"id":"33352","type":"LinearScale"},{"attributes":{"callback":null},"id":"33348","type":"DataRange1d"},{"attributes":{"data_source":{"id":"33379","type":"ColumnDataSource"},"glyph":{"id":"33380","type":"HexTile"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33381","type":"HexTile"},"selection_glyph":null,"view":{"id":"33383","type":"CDSView"}},"id":"33382","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"33388","type":"BasicTickFormatter"},"plot":{"id":"33345","subtype":"Figure","type":"Plot"},"ticker":{"id":"33355","type":"BasicTicker"}},"id":"33354","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"}},"id":"33381","type":"HexTile"},{"attributes":{},"id":"33350","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"}},"id":"33380","type":"HexTile"},{"attributes":{},"id":"33355","type":"BasicTicker"},{"attributes":{},"id":"33369","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"33345","subtype":"Figure","type":"Plot"},"ticker":{"id":"33360","type":"BasicTicker"}},"id":"33363","type":"Grid"},{"attributes":{"source":{"id":"33379","type":"ColumnDataSource"}},"id":"33383","type":"CDSView"},{"attributes":{},"id":"33367","type":"SaveTool"}],"root_ids":["33345"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"4d74f088-b05a-4f9a-b352-477b96d42c22","roots":{"33345":"b9ba3bee-84a8-4c7b-b841-419e3e8ccfc7"}}];
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