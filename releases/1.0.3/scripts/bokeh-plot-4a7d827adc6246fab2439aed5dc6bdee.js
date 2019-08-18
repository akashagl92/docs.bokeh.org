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
      };var element = document.getElementById("caa9cd44-a532-4dae-85ef-0aeeecda3f18");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'caa9cd44-a532-4dae-85ef-0aeeecda3f18' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a5e111b1-bfb2-4880-97ed-047c30f07784":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8281","type":"Triangle"},{"attributes":{},"id":"8268","type":"SaveTool"},{"attributes":{},"id":"8253","type":"LinearScale"},{"attributes":{"formatter":{"id":"8331","type":"BasicTickFormatter"},"plot":{"id":"8205","subtype":"Figure","type":"Plot"},"ticker":{"id":"8216","type":"BasicTicker"}},"id":"8215","type":"LinearAxis"},{"attributes":{},"id":"8256","type":"BasicTicker"},{"attributes":{},"id":"8346","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8241","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"8342","type":"Selection"},"selection_policy":{"id":"8343","type":"UnionRenderers"}},"id":"8240","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"8295","type":"LinearAxis"}],"left":[{"id":"8300","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8295","type":"LinearAxis"},{"id":"8299","type":"Grid"},{"id":"8300","type":"LinearAxis"},{"id":"8304","type":"Grid"},{"id":"8313","type":"BoxAnnotation"},{"id":"8323","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8311","type":"Toolbar"},"x_range":{"id":"8287","type":"DataRange1d"},"x_scale":{"id":"8291","type":"LinearScale"},"y_range":{"id":"8289","type":"DataRange1d"},"y_scale":{"id":"8293","type":"LinearScale"}},"id":"8285","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"8348","type":"Selection"},"selection_policy":{"id":"8349","type":"UnionRenderers"}},"id":"8320","type":"ColumnDataSource"},{"attributes":{},"id":"8337","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"8233","type":"BoxAnnotation"}},"id":"8227","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8282","type":"Triangle"},{"attributes":{"dimension":1,"plot":{"id":"8205","subtype":"Figure","type":"Plot"},"ticker":{"id":"8221","type":"BasicTicker"}},"id":"8224","type":"Grid"},{"attributes":{"plot":{"id":"8245","subtype":"Figure","type":"Plot"},"ticker":{"id":"8256","type":"BasicTicker"}},"id":"8259","type":"Grid"},{"attributes":{"plot":{"id":"8285","subtype":"Figure","type":"Plot"},"ticker":{"id":"8296","type":"BasicTicker"}},"id":"8299","type":"Grid"},{"attributes":{},"id":"8343","type":"UnionRenderers"},{"attributes":{},"id":"8228","type":"SaveTool"},{"attributes":{},"id":"8296","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8242","type":"Circle"},{"attributes":{},"id":"8229","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8265","type":"PanTool"},{"id":"8266","type":"WheelZoomTool"},{"id":"8267","type":"BoxZoomTool"},{"id":"8268","type":"SaveTool"},{"id":"8269","type":"ResetTool"},{"id":"8270","type":"HelpTool"}]},"id":"8271","type":"Toolbar"},{"attributes":{"formatter":{"id":"8339","type":"BasicTickFormatter"},"plot":{"id":"8285","subtype":"Figure","type":"Plot"},"ticker":{"id":"8296","type":"BasicTicker"}},"id":"8295","type":"LinearAxis"},{"attributes":{},"id":"8345","type":"Selection"},{"attributes":{},"id":"8225","type":"PanTool"},{"attributes":{},"id":"8261","type":"BasicTicker"},{"attributes":{},"id":"8329","type":"BasicTickFormatter"},{"attributes":{},"id":"8221","type":"BasicTicker"},{"attributes":{"below":[{"id":"8215","type":"LinearAxis"}],"left":[{"id":"8220","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8215","type":"LinearAxis"},{"id":"8219","type":"Grid"},{"id":"8220","type":"LinearAxis"},{"id":"8224","type":"Grid"},{"id":"8233","type":"BoxAnnotation"},{"id":"8243","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8231","type":"Toolbar"},"x_range":{"id":"8207","type":"DataRange1d"},"x_scale":{"id":"8211","type":"LinearScale"},"y_range":{"id":"8209","type":"DataRange1d"},"y_scale":{"id":"8213","type":"LinearScale"}},"id":"8205","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"8287","type":"DataRange1d"},{"attributes":{},"id":"8301","type":"BasicTicker"},{"attributes":{"callback":null},"id":"8207","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"8345","type":"Selection"},"selection_policy":{"id":"8346","type":"UnionRenderers"}},"id":"8280","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"8205","subtype":"Figure","type":"Plot"},{"id":"8245","subtype":"Figure","type":"Plot"},{"id":"8285","subtype":"Figure","type":"Plot"}]},"id":"8325","type":"Row"},{"attributes":{},"id":"8230","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8305","type":"PanTool"},{"id":"8306","type":"WheelZoomTool"},{"id":"8307","type":"BoxZoomTool"},{"id":"8308","type":"SaveTool"},{"id":"8309","type":"ResetTool"},{"id":"8310","type":"HelpTool"}]},"id":"8311","type":"Toolbar"},{"attributes":{"below":[{"id":"8255","type":"LinearAxis"}],"left":[{"id":"8260","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8255","type":"LinearAxis"},{"id":"8259","type":"Grid"},{"id":"8260","type":"LinearAxis"},{"id":"8264","type":"Grid"},{"id":"8273","type":"BoxAnnotation"},{"id":"8283","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8271","type":"Toolbar"},"x_range":{"id":"8247","type":"DataRange1d"},"x_scale":{"id":"8251","type":"LinearScale"},"y_range":{"id":"8249","type":"DataRange1d"},"y_scale":{"id":"8253","type":"LinearScale"}},"id":"8245","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"8329","type":"BasicTickFormatter"},"plot":{"id":"8205","subtype":"Figure","type":"Plot"},"ticker":{"id":"8221","type":"BasicTicker"}},"id":"8220","type":"LinearAxis"},{"attributes":{},"id":"8331","type":"BasicTickFormatter"},{"attributes":{},"id":"8266","type":"WheelZoomTool"},{"attributes":{},"id":"8305","type":"PanTool"},{"attributes":{"overlay":{"id":"8313","type":"BoxAnnotation"}},"id":"8307","type":"BoxZoomTool"},{"attributes":{},"id":"8348","type":"Selection"},{"attributes":{"overlay":{"id":"8273","type":"BoxAnnotation"}},"id":"8267","type":"BoxZoomTool"},{"attributes":{},"id":"8308","type":"SaveTool"},{"attributes":{},"id":"8349","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"8245","subtype":"Figure","type":"Plot"},"ticker":{"id":"8261","type":"BasicTicker"}},"id":"8264","type":"Grid"},{"attributes":{"formatter":{"id":"8333","type":"BasicTickFormatter"},"plot":{"id":"8245","subtype":"Figure","type":"Plot"},"ticker":{"id":"8261","type":"BasicTicker"}},"id":"8260","type":"LinearAxis"},{"attributes":{},"id":"8309","type":"ResetTool"},{"attributes":{"formatter":{"id":"8335","type":"BasicTickFormatter"},"plot":{"id":"8245","subtype":"Figure","type":"Plot"},"ticker":{"id":"8256","type":"BasicTicker"}},"id":"8255","type":"LinearAxis"},{"attributes":{"source":{"id":"8280","type":"ColumnDataSource"}},"id":"8284","type":"CDSView"},{"attributes":{},"id":"8226","type":"WheelZoomTool"},{"attributes":{},"id":"8310","type":"HelpTool"},{"attributes":{},"id":"8291","type":"LinearScale"},{"attributes":{},"id":"8293","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8321","type":"Square"},{"attributes":{},"id":"8306","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"8240","type":"ColumnDataSource"},"glyph":{"id":"8241","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8242","type":"Circle"},"selection_glyph":null,"view":{"id":"8244","type":"CDSView"}},"id":"8243","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"8289","type":"DataRange1d"},{"attributes":{"data_source":{"id":"8320","type":"ColumnDataSource"},"glyph":{"id":"8321","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8322","type":"Square"},"selection_glyph":null,"view":{"id":"8324","type":"CDSView"}},"id":"8323","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"8280","type":"ColumnDataSource"},"glyph":{"id":"8281","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8282","type":"Triangle"},"selection_glyph":null,"view":{"id":"8284","type":"CDSView"}},"id":"8283","type":"GlyphRenderer"},{"attributes":{},"id":"8211","type":"LinearScale"},{"attributes":{},"id":"8270","type":"HelpTool"},{"attributes":{},"id":"8335","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8322","type":"Square"},{"attributes":{"callback":null},"id":"8249","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8273","type":"BoxAnnotation"},{"attributes":{},"id":"8251","type":"LinearScale"},{"attributes":{"source":{"id":"8320","type":"ColumnDataSource"}},"id":"8324","type":"CDSView"},{"attributes":{"callback":null},"id":"8209","type":"DataRange1d"},{"attributes":{},"id":"8269","type":"ResetTool"},{"attributes":{},"id":"8339","type":"BasicTickFormatter"},{"attributes":{},"id":"8213","type":"LinearScale"},{"attributes":{},"id":"8342","type":"Selection"},{"attributes":{},"id":"8216","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8225","type":"PanTool"},{"id":"8226","type":"WheelZoomTool"},{"id":"8227","type":"BoxZoomTool"},{"id":"8228","type":"SaveTool"},{"id":"8229","type":"ResetTool"},{"id":"8230","type":"HelpTool"}]},"id":"8231","type":"Toolbar"},{"attributes":{"formatter":{"id":"8337","type":"BasicTickFormatter"},"plot":{"id":"8285","subtype":"Figure","type":"Plot"},"ticker":{"id":"8301","type":"BasicTicker"}},"id":"8300","type":"LinearAxis"},{"attributes":{"source":{"id":"8240","type":"ColumnDataSource"}},"id":"8244","type":"CDSView"},{"attributes":{},"id":"8333","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"8247","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8313","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"8205","subtype":"Figure","type":"Plot"},"ticker":{"id":"8216","type":"BasicTicker"}},"id":"8219","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8233","type":"BoxAnnotation"},{"attributes":{},"id":"8265","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"8285","subtype":"Figure","type":"Plot"},"ticker":{"id":"8301","type":"BasicTicker"}},"id":"8304","type":"Grid"}],"root_ids":["8325"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"a5e111b1-bfb2-4880-97ed-047c30f07784","roots":{"8325":"caa9cd44-a532-4dae-85ef-0aeeecda3f18"}}];
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