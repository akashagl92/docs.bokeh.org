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
      };var element = document.getElementById("8f4eecce-8d62-4d33-8216-633a11ab85ac");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8f4eecce-8d62-4d33-8216-633a11ab85ac' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"51dca462-f397-499a-a061-1e453f8c33a8":{"roots":{"references":[{"attributes":{"plot":{"id":"7039","subtype":"Figure","type":"Plot"},"ticker":{"id":"7048","type":"BasicTicker"}},"id":"7051","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7096","type":"PanTool"},{"id":"7097","type":"WheelZoomTool"},{"id":"7098","type":"BoxZoomTool"},{"id":"7099","type":"SaveTool"},{"id":"7100","type":"ResetTool"},{"id":"7101","type":"HelpTool"}]},"id":"7102","type":"Toolbar"},{"attributes":{"formatter":{"id":"7129","type":"BasicTickFormatter"},"plot":{"id":"7039","subtype":"Figure","type":"Plot"},"ticker":{"id":"7053","type":"BasicTicker"}},"id":"7052","type":"LinearAxis"},{"attributes":{"data_source":{"id":"7111","type":"ColumnDataSource"},"glyph":{"id":"7112","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7113","type":"Square"},"selection_glyph":null,"view":{"id":"7115","type":"CDSView"}},"id":"7114","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"7034","type":"ColumnDataSource"},"glyph":{"id":"7035","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7036","type":"Circle"},"selection_glyph":null,"view":{"id":"7038","type":"CDSView"}},"id":"7037","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7104","type":"BoxAnnotation"},{"attributes":{},"id":"7023","type":"ResetTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"7122","type":"Selection"},"selection_policy":{"id":"7123","type":"UnionRenderers"}},"id":"7034","type":"ColumnDataSource"},{"attributes":{},"id":"7053","type":"BasicTicker"},{"attributes":{"source":{"id":"7111","type":"ColumnDataSource"}},"id":"7115","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"7039","subtype":"Figure","type":"Plot"},"ticker":{"id":"7053","type":"BasicTicker"}},"id":"7056","type":"Grid"},{"attributes":{"children":[{"id":"7143","type":"Row"}]},"id":"7144","type":"Column"},{"attributes":{"dimension":1,"plot":{"id":"6999","subtype":"Figure","type":"Plot"},"ticker":{"id":"7015","type":"BasicTicker"}},"id":"7018","type":"Grid"},{"attributes":{"children":[{"id":"6999","subtype":"Figure","type":"Plot"},{"id":"7039","subtype":"Figure","type":"Plot"},{"id":"7077","subtype":"Figure","type":"Plot"}]},"id":"7143","type":"Row"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7074","type":"Triangle"},{"attributes":{},"id":"7118","type":"BasicTickFormatter"},{"attributes":{},"id":"7015","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7073","type":"Triangle"},{"attributes":{},"id":"7120","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7035","type":"Circle"},{"attributes":{"data_source":{"id":"7072","type":"ColumnDataSource"},"glyph":{"id":"7073","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7074","type":"Triangle"},"selection_glyph":null,"view":{"id":"7076","type":"CDSView"}},"id":"7075","type":"GlyphRenderer"},{"attributes":{},"id":"7057","type":"PanTool"},{"attributes":{},"id":"7122","type":"Selection"},{"attributes":{},"id":"7058","type":"WheelZoomTool"},{"attributes":{},"id":"7123","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"7120","type":"BasicTickFormatter"},"plot":{"id":"6999","subtype":"Figure","type":"Plot"},"ticker":{"id":"7015","type":"BasicTicker"}},"id":"7014","type":"LinearAxis"},{"attributes":{"plot":{"id":"6999","subtype":"Figure","type":"Plot"},"ticker":{"id":"7010","type":"BasicTicker"}},"id":"7013","type":"Grid"},{"attributes":{},"id":"7127","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"7065","type":"BoxAnnotation"}},"id":"7059","type":"BoxZoomTool"},{"attributes":{},"id":"7129","type":"BasicTickFormatter"},{"attributes":{},"id":"7060","type":"SaveTool"},{"attributes":{"formatter":{"id":"7118","type":"BasicTickFormatter"},"plot":{"id":"6999","subtype":"Figure","type":"Plot"},"ticker":{"id":"7010","type":"BasicTicker"}},"id":"7009","type":"LinearAxis"},{"attributes":{},"id":"7061","type":"ResetTool"},{"attributes":{},"id":"7131","type":"Selection"},{"attributes":{},"id":"7062","type":"HelpTool"},{"attributes":{},"id":"7132","type":"UnionRenderers"},{"attributes":{},"id":"7007","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7057","type":"PanTool"},{"id":"7058","type":"WheelZoomTool"},{"id":"7059","type":"BoxZoomTool"},{"id":"7060","type":"SaveTool"},{"id":"7061","type":"ResetTool"},{"id":"7062","type":"HelpTool"}]},"id":"7063","type":"Toolbar"},{"attributes":{},"id":"7136","type":"BasicTickFormatter"},{"attributes":{},"id":"7138","type":"BasicTickFormatter"},{"attributes":{},"id":"7010","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7065","type":"BoxAnnotation"},{"attributes":{},"id":"7005","type":"LinearScale"},{"attributes":{},"id":"7140","type":"Selection"},{"attributes":{"callback":null},"id":"7003","type":"DataRange1d"},{"attributes":{"source":{"id":"7072","type":"ColumnDataSource"}},"id":"7076","type":"CDSView"},{"attributes":{},"id":"7141","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"7001","type":"DataRange1d"},{"attributes":{"below":[{"id":"7086","type":"LinearAxis"}],"left":[{"id":"7091","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7086","type":"LinearAxis"},{"id":"7090","type":"Grid"},{"id":"7091","type":"LinearAxis"},{"id":"7095","type":"Grid"},{"id":"7104","type":"BoxAnnotation"},{"id":"7114","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"7102","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7001","type":"DataRange1d"},"x_scale":{"id":"7082","type":"LinearScale"},"y_range":{"id":"7080","type":"DataRange1d"},"y_scale":{"id":"7084","type":"LinearScale"}},"id":"7077","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"7127","type":"BasicTickFormatter"},"plot":{"id":"7039","subtype":"Figure","type":"Plot"},"ticker":{"id":"7048","type":"BasicTicker"}},"id":"7047","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7113","type":"Square"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7036","type":"Circle"},{"attributes":{"below":[{"id":"7009","type":"LinearAxis"}],"left":[{"id":"7014","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7009","type":"LinearAxis"},{"id":"7013","type":"Grid"},{"id":"7014","type":"LinearAxis"},{"id":"7018","type":"Grid"},{"id":"7027","type":"BoxAnnotation"},{"id":"7037","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"7025","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7001","type":"DataRange1d"},"x_scale":{"id":"7005","type":"LinearScale"},"y_range":{"id":"7003","type":"DataRange1d"},"y_scale":{"id":"7007","type":"LinearScale"}},"id":"6999","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"7080","type":"DataRange1d"},{"attributes":{},"id":"7082","type":"LinearScale"},{"attributes":{},"id":"7045","type":"LinearScale"},{"attributes":{},"id":"7084","type":"LinearScale"},{"attributes":{"formatter":{"id":"7136","type":"BasicTickFormatter"},"plot":{"id":"7077","subtype":"Figure","type":"Plot"},"ticker":{"id":"7087","type":"BasicTicker"}},"id":"7086","type":"LinearAxis"},{"attributes":{},"id":"7048","type":"BasicTicker"},{"attributes":{},"id":"7087","type":"BasicTicker"},{"attributes":{"plot":{"id":"7077","subtype":"Figure","type":"Plot"},"ticker":{"id":"7087","type":"BasicTicker"}},"id":"7090","type":"Grid"},{"attributes":{"overlay":{"id":"7027","type":"BoxAnnotation"}},"id":"7021","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"7138","type":"BasicTickFormatter"},"plot":{"id":"7077","subtype":"Figure","type":"Plot"},"ticker":{"id":"7092","type":"BasicTicker"}},"id":"7091","type":"LinearAxis"},{"attributes":{},"id":"7022","type":"SaveTool"},{"attributes":{},"id":"7092","type":"BasicTicker"},{"attributes":{},"id":"7019","type":"PanTool"},{"attributes":{},"id":"7020","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"7077","subtype":"Figure","type":"Plot"},"ticker":{"id":"7092","type":"BasicTicker"}},"id":"7095","type":"Grid"},{"attributes":{"source":{"id":"7034","type":"ColumnDataSource"}},"id":"7038","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7112","type":"Square"},{"attributes":{},"id":"7024","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"7140","type":"Selection"},"selection_policy":{"id":"7141","type":"UnionRenderers"}},"id":"7111","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7019","type":"PanTool"},{"id":"7020","type":"WheelZoomTool"},{"id":"7021","type":"BoxZoomTool"},{"id":"7022","type":"SaveTool"},{"id":"7023","type":"ResetTool"},{"id":"7024","type":"HelpTool"}]},"id":"7025","type":"Toolbar"},{"attributes":{},"id":"7096","type":"PanTool"},{"attributes":{},"id":"7097","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7027","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"7104","type":"BoxAnnotation"}},"id":"7098","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"7047","type":"LinearAxis"}],"left":[{"id":"7052","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"7047","type":"LinearAxis"},{"id":"7051","type":"Grid"},{"id":"7052","type":"LinearAxis"},{"id":"7056","type":"Grid"},{"id":"7065","type":"BoxAnnotation"},{"id":"7075","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"7063","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7001","type":"DataRange1d"},"x_scale":{"id":"7043","type":"LinearScale"},"y_range":{"id":"7003","type":"DataRange1d"},"y_scale":{"id":"7045","type":"LinearScale"}},"id":"7039","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7099","type":"SaveTool"},{"attributes":{},"id":"7043","type":"LinearScale"},{"attributes":{},"id":"7100","type":"ResetTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"7131","type":"Selection"},"selection_policy":{"id":"7132","type":"UnionRenderers"}},"id":"7072","type":"ColumnDataSource"},{"attributes":{},"id":"7101","type":"HelpTool"}],"root_ids":["7144"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"51dca462-f397-499a-a061-1e453f8c33a8","roots":{"7144":"8f4eecce-8d62-4d33-8216-633a11ab85ac"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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