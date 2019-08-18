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
      };var element = document.getElementById("79d99366-990c-4c28-b004-a66f3be44171");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '79d99366-990c-4c28-b004-a66f3be44171' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"4edb727e-3936-4432-8ceb-25f4f68e12a1":{"roots":{"references":[{"attributes":{"plot":{"id":"8281","subtype":"Figure","type":"Plot"},"ticker":{"id":"8292","type":"BasicTicker"}},"id":"8295","type":"Grid"},{"attributes":{},"id":"8306","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8301","type":"PanTool"},{"id":"8302","type":"WheelZoomTool"},{"id":"8303","type":"BoxZoomTool"},{"id":"8304","type":"SaveTool"},{"id":"8305","type":"ResetTool"},{"id":"8306","type":"HelpTool"}]},"id":"8307","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8238","type":"Circle"},{"attributes":{"callback":null},"id":"8205","type":"DataRange1d"},{"attributes":{"data_source":{"id":"8316","type":"ColumnDataSource"},"glyph":{"id":"8317","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8318","type":"Square"},"selection_glyph":null,"view":{"id":"8320","type":"CDSView"}},"id":"8319","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"8285","type":"DataRange1d"},{"attributes":{"below":[{"id":"8291","type":"LinearAxis"}],"left":[{"id":"8296","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8291","type":"LinearAxis"},{"id":"8295","type":"Grid"},{"id":"8296","type":"LinearAxis"},{"id":"8300","type":"Grid"},{"id":"8309","type":"BoxAnnotation"},{"id":"8319","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8307","type":"Toolbar"},"x_range":{"id":"8283","type":"DataRange1d"},"x_scale":{"id":"8287","type":"LinearScale"},"y_range":{"id":"8285","type":"DataRange1d"},"y_scale":{"id":"8289","type":"LinearScale"}},"id":"8281","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"8338","type":"Selection"},"selection_policy":{"id":"8339","type":"UnionRenderers"}},"id":"8236","type":"ColumnDataSource"},{"attributes":{},"id":"8249","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8309","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"8203","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8237","type":"Circle"},{"attributes":{},"id":"8339","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8229","type":"BoxAnnotation"},{"attributes":{"source":{"id":"8316","type":"ColumnDataSource"}},"id":"8320","type":"CDSView"},{"attributes":{"overlay":{"id":"8229","type":"BoxAnnotation"}},"id":"8223","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"8344","type":"Selection"},"selection_policy":{"id":"8345","type":"UnionRenderers"}},"id":"8316","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"8201","subtype":"Figure","type":"Plot"},{"id":"8241","subtype":"Figure","type":"Plot"},{"id":"8281","subtype":"Figure","type":"Plot"}]},"id":"8321","type":"Row"},{"attributes":{},"id":"8226","type":"HelpTool"},{"attributes":{},"id":"8292","type":"BasicTicker"},{"attributes":{},"id":"8266","type":"HelpTool"},{"attributes":{},"id":"8224","type":"SaveTool"},{"attributes":{},"id":"8326","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"8276","type":"ColumnDataSource"},"glyph":{"id":"8277","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8278","type":"Triangle"},"selection_glyph":null,"view":{"id":"8280","type":"CDSView"}},"id":"8279","type":"GlyphRenderer"},{"attributes":{},"id":"8287","type":"LinearScale"},{"attributes":{},"id":"8212","type":"BasicTicker"},{"attributes":{},"id":"8328","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"8201","subtype":"Figure","type":"Plot"},"ticker":{"id":"8212","type":"BasicTicker"}},"id":"8215","type":"Grid"},{"attributes":{"source":{"id":"8276","type":"ColumnDataSource"}},"id":"8280","type":"CDSView"},{"attributes":{},"id":"8305","type":"ResetTool"},{"attributes":{},"id":"8330","type":"BasicTickFormatter"},{"attributes":{},"id":"8289","type":"LinearScale"},{"attributes":{"callback":null},"id":"8283","type":"DataRange1d"},{"attributes":{"overlay":{"id":"8269","type":"BoxAnnotation"}},"id":"8263","type":"BoxZoomTool"},{"attributes":{},"id":"8217","type":"BasicTicker"},{"attributes":{},"id":"8332","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"8341","type":"Selection"},"selection_policy":{"id":"8342","type":"UnionRenderers"}},"id":"8276","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"8334","type":"BasicTickFormatter"},"plot":{"id":"8281","subtype":"Figure","type":"Plot"},"ticker":{"id":"8292","type":"BasicTicker"}},"id":"8291","type":"LinearAxis"},{"attributes":{},"id":"8334","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"8251","type":"LinearAxis"}],"left":[{"id":"8256","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8251","type":"LinearAxis"},{"id":"8255","type":"Grid"},{"id":"8256","type":"LinearAxis"},{"id":"8260","type":"Grid"},{"id":"8269","type":"BoxAnnotation"},{"id":"8279","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8267","type":"Toolbar"},"x_range":{"id":"8243","type":"DataRange1d"},"x_scale":{"id":"8247","type":"LinearScale"},"y_range":{"id":"8245","type":"DataRange1d"},"y_scale":{"id":"8249","type":"LinearScale"}},"id":"8241","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8207","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"8281","subtype":"Figure","type":"Plot"},"ticker":{"id":"8297","type":"BasicTicker"}},"id":"8300","type":"Grid"},{"attributes":{},"id":"8336","type":"BasicTickFormatter"},{"attributes":{},"id":"8297","type":"BasicTicker"},{"attributes":{},"id":"8338","type":"Selection"},{"attributes":{"formatter":{"id":"8336","type":"BasicTickFormatter"},"plot":{"id":"8281","subtype":"Figure","type":"Plot"},"ticker":{"id":"8297","type":"BasicTicker"}},"id":"8296","type":"LinearAxis"},{"attributes":{},"id":"8341","type":"Selection"},{"attributes":{},"id":"8342","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8269","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8261","type":"PanTool"},{"id":"8262","type":"WheelZoomTool"},{"id":"8263","type":"BoxZoomTool"},{"id":"8264","type":"SaveTool"},{"id":"8265","type":"ResetTool"},{"id":"8266","type":"HelpTool"}]},"id":"8267","type":"Toolbar"},{"attributes":{},"id":"8344","type":"Selection"},{"attributes":{},"id":"8264","type":"SaveTool"},{"attributes":{},"id":"8345","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"8328","type":"BasicTickFormatter"},"plot":{"id":"8201","subtype":"Figure","type":"Plot"},"ticker":{"id":"8217","type":"BasicTicker"}},"id":"8216","type":"LinearAxis"},{"attributes":{"source":{"id":"8236","type":"ColumnDataSource"}},"id":"8240","type":"CDSView"},{"attributes":{},"id":"8265","type":"ResetTool"},{"attributes":{},"id":"8301","type":"PanTool"},{"attributes":{},"id":"8209","type":"LinearScale"},{"attributes":{"callback":null},"id":"8243","type":"DataRange1d"},{"attributes":{},"id":"8262","type":"WheelZoomTool"},{"attributes":{},"id":"8225","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8277","type":"Triangle"},{"attributes":{"data_source":{"id":"8236","type":"ColumnDataSource"},"glyph":{"id":"8237","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8238","type":"Circle"},"selection_glyph":null,"view":{"id":"8240","type":"CDSView"}},"id":"8239","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"8201","subtype":"Figure","type":"Plot"},"ticker":{"id":"8217","type":"BasicTicker"}},"id":"8220","type":"Grid"},{"attributes":{},"id":"8222","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"8326","type":"BasicTickFormatter"},"plot":{"id":"8201","subtype":"Figure","type":"Plot"},"ticker":{"id":"8212","type":"BasicTicker"}},"id":"8211","type":"LinearAxis"},{"attributes":{},"id":"8261","type":"PanTool"},{"attributes":{"formatter":{"id":"8330","type":"BasicTickFormatter"},"plot":{"id":"8241","subtype":"Figure","type":"Plot"},"ticker":{"id":"8252","type":"BasicTicker"}},"id":"8251","type":"LinearAxis"},{"attributes":{},"id":"8221","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8317","type":"Square"},{"attributes":{},"id":"8252","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8318","type":"Square"},{"attributes":{"plot":{"id":"8241","subtype":"Figure","type":"Plot"},"ticker":{"id":"8252","type":"BasicTicker"}},"id":"8255","type":"Grid"},{"attributes":{"formatter":{"id":"8332","type":"BasicTickFormatter"},"plot":{"id":"8241","subtype":"Figure","type":"Plot"},"ticker":{"id":"8257","type":"BasicTicker"}},"id":"8256","type":"LinearAxis"},{"attributes":{},"id":"8257","type":"BasicTicker"},{"attributes":{},"id":"8304","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8221","type":"PanTool"},{"id":"8222","type":"WheelZoomTool"},{"id":"8223","type":"BoxZoomTool"},{"id":"8224","type":"SaveTool"},{"id":"8225","type":"ResetTool"},{"id":"8226","type":"HelpTool"}]},"id":"8227","type":"Toolbar"},{"attributes":{},"id":"8247","type":"LinearScale"},{"attributes":{"overlay":{"id":"8309","type":"BoxAnnotation"}},"id":"8303","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"8241","subtype":"Figure","type":"Plot"},"ticker":{"id":"8257","type":"BasicTicker"}},"id":"8260","type":"Grid"},{"attributes":{},"id":"8302","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8278","type":"Triangle"},{"attributes":{"callback":null},"id":"8245","type":"DataRange1d"},{"attributes":{"below":[{"id":"8211","type":"LinearAxis"}],"left":[{"id":"8216","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8211","type":"LinearAxis"},{"id":"8215","type":"Grid"},{"id":"8216","type":"LinearAxis"},{"id":"8220","type":"Grid"},{"id":"8229","type":"BoxAnnotation"},{"id":"8239","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8227","type":"Toolbar"},"x_range":{"id":"8203","type":"DataRange1d"},"x_scale":{"id":"8207","type":"LinearScale"},"y_range":{"id":"8205","type":"DataRange1d"},"y_scale":{"id":"8209","type":"LinearScale"}},"id":"8201","subtype":"Figure","type":"Plot"}],"root_ids":["8321"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"4edb727e-3936-4432-8ceb-25f4f68e12a1","roots":{"8321":"79d99366-990c-4c28-b004-a66f3be44171"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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