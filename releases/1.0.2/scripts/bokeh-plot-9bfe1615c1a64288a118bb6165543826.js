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
      };var element = document.getElementById("a1deca78-602a-4390-ad70-44b90d97cdcc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a1deca78-602a-4390-ad70-44b90d97cdcc' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"be6fc711-a470-45c5-8286-77c2dc2517d1":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"7000","subtype":"Figure","type":"Plot"},"ticker":{"id":"7016","type":"BasicTicker"}},"id":"7019","type":"Grid"},{"attributes":{},"id":"7128","type":"BasicTickFormatter"},{"attributes":{},"id":"7061","type":"SaveTool"},{"attributes":{"formatter":{"id":"7121","type":"BasicTickFormatter"},"plot":{"id":"7000","subtype":"Figure","type":"Plot"},"ticker":{"id":"7016","type":"BasicTicker"}},"id":"7015","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"7124","type":"Selection"},"selection_policy":{"id":"7123","type":"UnionRenderers"}},"id":"7035","type":"ColumnDataSource"},{"attributes":{},"id":"7130","type":"BasicTickFormatter"},{"attributes":{},"id":"7062","type":"ResetTool"},{"attributes":{"overlay":{"id":"7066","type":"BoxAnnotation"}},"id":"7060","type":"BoxZoomTool"},{"attributes":{},"id":"7132","type":"UnionRenderers"},{"attributes":{},"id":"7063","type":"HelpTool"},{"attributes":{"formatter":{"id":"7119","type":"BasicTickFormatter"},"plot":{"id":"7000","subtype":"Figure","type":"Plot"},"ticker":{"id":"7011","type":"BasicTicker"}},"id":"7010","type":"LinearAxis"},{"attributes":{},"id":"7008","type":"LinearScale"},{"attributes":{"formatter":{"id":"7130","type":"BasicTickFormatter"},"plot":{"id":"7040","subtype":"Figure","type":"Plot"},"ticker":{"id":"7054","type":"BasicTicker"}},"id":"7053","type":"LinearAxis"},{"attributes":{},"id":"7133","type":"Selection"},{"attributes":{"below":[{"id":"7087","type":"LinearAxis"}],"left":[{"id":"7092","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7087","type":"LinearAxis"},{"id":"7091","type":"Grid"},{"id":"7092","type":"LinearAxis"},{"id":"7096","type":"Grid"},{"id":"7105","type":"BoxAnnotation"},{"id":"7115","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"7103","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7002","type":"DataRange1d"},"x_scale":{"id":"7083","type":"LinearScale"},"y_range":{"id":"7081","type":"DataRange1d"},"y_scale":{"id":"7085","type":"LinearScale"}},"id":"7078","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7059","type":"WheelZoomTool"},{"attributes":{},"id":"7137","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"7073","type":"ColumnDataSource"}},"id":"7077","type":"CDSView"},{"attributes":{},"id":"7011","type":"BasicTicker"},{"attributes":{},"id":"7139","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7058","type":"PanTool"},{"id":"7059","type":"WheelZoomTool"},{"id":"7060","type":"BoxZoomTool"},{"id":"7061","type":"SaveTool"},{"id":"7062","type":"ResetTool"},{"id":"7063","type":"HelpTool"}]},"id":"7064","type":"Toolbar"},{"attributes":{"data_source":{"id":"7073","type":"ColumnDataSource"},"glyph":{"id":"7074","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7075","type":"Triangle"},"selection_glyph":null,"view":{"id":"7077","type":"CDSView"}},"id":"7076","type":"GlyphRenderer"},{"attributes":{},"id":"7141","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7066","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"7000","subtype":"Figure","type":"Plot"},"ticker":{"id":"7011","type":"BasicTicker"}},"id":"7014","type":"Grid"},{"attributes":{},"id":"7142","type":"Selection"},{"attributes":{},"id":"7006","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7114","type":"Square"},{"attributes":{"callback":null},"id":"7004","type":"DataRange1d"},{"attributes":{"plot":{"id":"7078","subtype":"Figure","type":"Plot"},"ticker":{"id":"7088","type":"BasicTicker"}},"id":"7091","type":"Grid"},{"attributes":{"below":[{"id":"7010","type":"LinearAxis"}],"left":[{"id":"7015","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7010","type":"LinearAxis"},{"id":"7014","type":"Grid"},{"id":"7015","type":"LinearAxis"},{"id":"7019","type":"Grid"},{"id":"7028","type":"BoxAnnotation"},{"id":"7038","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"7026","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7002","type":"DataRange1d"},"x_scale":{"id":"7006","type":"LinearScale"},"y_range":{"id":"7004","type":"DataRange1d"},"y_scale":{"id":"7008","type":"LinearScale"}},"id":"7000","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"7081","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7037","type":"Circle"},{"attributes":{},"id":"7083","type":"LinearScale"},{"attributes":{"callback":null},"id":"7002","type":"DataRange1d"},{"attributes":{},"id":"7085","type":"LinearScale"},{"attributes":{"formatter":{"id":"7137","type":"BasicTickFormatter"},"plot":{"id":"7078","subtype":"Figure","type":"Plot"},"ticker":{"id":"7088","type":"BasicTicker"}},"id":"7087","type":"LinearAxis"},{"attributes":{},"id":"7088","type":"BasicTicker"},{"attributes":{"formatter":{"id":"7139","type":"BasicTickFormatter"},"plot":{"id":"7078","subtype":"Figure","type":"Plot"},"ticker":{"id":"7093","type":"BasicTicker"}},"id":"7092","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"7142","type":"Selection"},"selection_policy":{"id":"7141","type":"UnionRenderers"}},"id":"7112","type":"ColumnDataSource"},{"attributes":{},"id":"7058","type":"PanTool"},{"attributes":{"data_source":{"id":"7112","type":"ColumnDataSource"},"glyph":{"id":"7113","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7114","type":"Square"},"selection_glyph":null,"view":{"id":"7116","type":"CDSView"}},"id":"7115","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7113","type":"Square"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7074","type":"Triangle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7036","type":"Circle"},{"attributes":{},"id":"7049","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7075","type":"Triangle"},{"attributes":{},"id":"7093","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"7040","subtype":"Figure","type":"Plot"},"ticker":{"id":"7054","type":"BasicTicker"}},"id":"7057","type":"Grid"},{"attributes":{},"id":"7016","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"7078","subtype":"Figure","type":"Plot"},"ticker":{"id":"7093","type":"BasicTicker"}},"id":"7096","type":"Grid"},{"attributes":{"data_source":{"id":"7035","type":"ColumnDataSource"},"glyph":{"id":"7036","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7037","type":"Circle"},"selection_glyph":null,"view":{"id":"7039","type":"CDSView"}},"id":"7038","type":"GlyphRenderer"},{"attributes":{},"id":"7024","type":"ResetTool"},{"attributes":{},"id":"7054","type":"BasicTicker"},{"attributes":{},"id":"7020","type":"PanTool"},{"attributes":{},"id":"7097","type":"PanTool"},{"attributes":{},"id":"7102","type":"HelpTool"},{"attributes":{},"id":"7021","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"7105","type":"BoxAnnotation"}},"id":"7099","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"7028","type":"BoxAnnotation"}},"id":"7022","type":"BoxZoomTool"},{"attributes":{},"id":"7100","type":"SaveTool"},{"attributes":{},"id":"7023","type":"SaveTool"},{"attributes":{},"id":"7101","type":"ResetTool"},{"attributes":{},"id":"7025","type":"HelpTool"},{"attributes":{},"id":"7098","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"7048","type":"LinearAxis"}],"left":[{"id":"7053","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7048","type":"LinearAxis"},{"id":"7052","type":"Grid"},{"id":"7053","type":"LinearAxis"},{"id":"7057","type":"Grid"},{"id":"7066","type":"BoxAnnotation"},{"id":"7076","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"7064","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7002","type":"DataRange1d"},"x_scale":{"id":"7044","type":"LinearScale"},"y_range":{"id":"7004","type":"DataRange1d"},"y_scale":{"id":"7046","type":"LinearScale"}},"id":"7040","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7097","type":"PanTool"},{"id":"7098","type":"WheelZoomTool"},{"id":"7099","type":"BoxZoomTool"},{"id":"7100","type":"SaveTool"},{"id":"7101","type":"ResetTool"},{"id":"7102","type":"HelpTool"}]},"id":"7103","type":"Toolbar"},{"attributes":{"source":{"id":"7035","type":"ColumnDataSource"}},"id":"7039","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7020","type":"PanTool"},{"id":"7021","type":"WheelZoomTool"},{"id":"7022","type":"BoxZoomTool"},{"id":"7023","type":"SaveTool"},{"id":"7024","type":"ResetTool"},{"id":"7025","type":"HelpTool"}]},"id":"7026","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7105","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7028","type":"BoxAnnotation"},{"attributes":{"source":{"id":"7112","type":"ColumnDataSource"}},"id":"7116","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"7133","type":"Selection"},"selection_policy":{"id":"7132","type":"UnionRenderers"}},"id":"7073","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"7144","type":"Row"}]},"id":"7145","type":"Column"},{"attributes":{"children":[{"id":"7000","subtype":"Figure","type":"Plot"},{"id":"7040","subtype":"Figure","type":"Plot"},{"id":"7078","subtype":"Figure","type":"Plot"}]},"id":"7144","type":"Row"},{"attributes":{"plot":{"id":"7040","subtype":"Figure","type":"Plot"},"ticker":{"id":"7049","type":"BasicTicker"}},"id":"7052","type":"Grid"},{"attributes":{},"id":"7119","type":"BasicTickFormatter"},{"attributes":{},"id":"7044","type":"LinearScale"},{"attributes":{},"id":"7121","type":"BasicTickFormatter"},{"attributes":{},"id":"7046","type":"LinearScale"},{"attributes":{},"id":"7123","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"7128","type":"BasicTickFormatter"},"plot":{"id":"7040","subtype":"Figure","type":"Plot"},"ticker":{"id":"7049","type":"BasicTicker"}},"id":"7048","type":"LinearAxis"},{"attributes":{},"id":"7124","type":"Selection"}],"root_ids":["7145"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"be6fc711-a470-45c5-8286-77c2dc2517d1","roots":{"7145":"a1deca78-602a-4390-ad70-44b90d97cdcc"}}];
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