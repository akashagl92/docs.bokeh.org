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
      };var element = document.getElementById("0d682326-93e1-441e-a088-9fefbac13be0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0d682326-93e1-441e-a088-9fefbac13be0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                    
                  var docs_json = '{"27fcb861-8051-46b0-b4cd-e356ac840007":{"roots":{"references":[{"attributes":{"source":{"id":"33288","type":"ColumnDataSource"}},"id":"33292","type":"CDSView"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#74ADD1"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"33289","type":"Hex"},{"attributes":{},"id":"33259","type":"LinearScale"},{"attributes":{"callback":null,"data":{"size":[10,20,30],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"33300","type":"Selection"},"selection_policy":{"id":"33301","type":"UnionRenderers"}},"id":"33288","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"33297","type":"BasicTickFormatter"},"plot":{"id":"33254","subtype":"Figure","type":"Plot"},"ticker":{"id":"33264","type":"BasicTicker"}},"id":"33263","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"33293","type":"Title"},{"attributes":{},"id":"33273","type":"PanTool"},{"attributes":{},"id":"33274","type":"WheelZoomTool"},{"attributes":{},"id":"33295","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"33281","type":"BoxAnnotation"}},"id":"33275","type":"BoxZoomTool"},{"attributes":{},"id":"33264","type":"BasicTicker"},{"attributes":{},"id":"33297","type":"BasicTickFormatter"},{"attributes":{},"id":"33276","type":"SaveTool"},{"attributes":{"plot":{"id":"33254","subtype":"Figure","type":"Plot"},"ticker":{"id":"33264","type":"BasicTicker"}},"id":"33267","type":"Grid"},{"attributes":{"below":[{"id":"33263","type":"LinearAxis"}],"left":[{"id":"33268","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33263","type":"LinearAxis"},{"id":"33267","type":"Grid"},{"id":"33268","type":"LinearAxis"},{"id":"33272","type":"Grid"},{"id":"33281","type":"BoxAnnotation"},{"id":"33291","type":"GlyphRenderer"}],"title":{"id":"33293","type":"Title"},"toolbar":{"id":"33279","type":"Toolbar"},"x_range":{"id":"33255","type":"DataRange1d"},"x_scale":{"id":"33259","type":"LinearScale"},"y_range":{"id":"33257","type":"DataRange1d"},"y_scale":{"id":"33261","type":"LinearScale"}},"id":"33254","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"33300","type":"Selection"},{"attributes":{},"id":"33277","type":"ResetTool"},{"attributes":{"formatter":{"id":"33295","type":"BasicTickFormatter"},"plot":{"id":"33254","subtype":"Figure","type":"Plot"},"ticker":{"id":"33269","type":"BasicTicker"}},"id":"33268","type":"LinearAxis"},{"attributes":{},"id":"33301","type":"UnionRenderers"},{"attributes":{},"id":"33278","type":"HelpTool"},{"attributes":{},"id":"33269","type":"BasicTicker"},{"attributes":{"callback":null},"id":"33255","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33273","type":"PanTool"},{"id":"33274","type":"WheelZoomTool"},{"id":"33275","type":"BoxZoomTool"},{"id":"33276","type":"SaveTool"},{"id":"33277","type":"ResetTool"},{"id":"33278","type":"HelpTool"}]},"id":"33279","type":"Toolbar"},{"attributes":{"data_source":{"id":"33288","type":"ColumnDataSource"},"glyph":{"id":"33289","type":"Hex"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33290","type":"Hex"},"selection_glyph":null,"view":{"id":"33292","type":"CDSView"}},"id":"33291","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"33254","subtype":"Figure","type":"Plot"},"ticker":{"id":"33269","type":"BasicTicker"}},"id":"33272","type":"Grid"},{"attributes":{},"id":"33261","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33281","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"33290","type":"Hex"},{"attributes":{"callback":null},"id":"33257","type":"DataRange1d"}],"root_ids":["33254"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"27fcb861-8051-46b0-b4cd-e356ac840007","roots":{"33254":"0d682326-93e1-441e-a088-9fefbac13be0"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
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