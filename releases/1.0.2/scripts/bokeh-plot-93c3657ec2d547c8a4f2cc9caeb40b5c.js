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
      };var element = document.getElementById("3483f36c-aaa8-44a3-8686-b5f14ed6f252");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3483f36c-aaa8-44a3-8686-b5f14ed6f252' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"87bf882d-34ed-4df9-9e08-45bf5bca3c49":{"roots":{"references":[{"attributes":{"data_source":{"id":"8277","type":"ColumnDataSource"},"glyph":{"id":"8278","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8279","type":"Triangle"},"selection_glyph":null,"view":{"id":"8281","type":"CDSView"}},"id":"8280","type":"GlyphRenderer"},{"attributes":{},"id":"8298","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8262","type":"PanTool"},{"id":"8263","type":"WheelZoomTool"},{"id":"8264","type":"BoxZoomTool"},{"id":"8265","type":"SaveTool"},{"id":"8266","type":"ResetTool"},{"id":"8267","type":"HelpTool"}]},"id":"8268","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"8282","subtype":"Figure","type":"Plot"},"ticker":{"id":"8298","type":"BasicTicker"}},"id":"8301","type":"Grid"},{"attributes":{},"id":"8263","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"8343","type":"Selection"},"selection_policy":{"id":"8342","type":"UnionRenderers"}},"id":"8277","type":"ColumnDataSource"},{"attributes":{},"id":"8267","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8319","type":"Square"},{"attributes":{"dimension":1,"plot":{"id":"8242","subtype":"Figure","type":"Plot"},"ticker":{"id":"8258","type":"BasicTicker"}},"id":"8261","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"8340","type":"Selection"},"selection_policy":{"id":"8339","type":"UnionRenderers"}},"id":"8237","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8318","type":"Square"},{"attributes":{},"id":"8226","type":"ResetTool"},{"attributes":{},"id":"8266","type":"ResetTool"},{"attributes":{"data_source":{"id":"8317","type":"ColumnDataSource"},"glyph":{"id":"8318","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8319","type":"Square"},"selection_glyph":null,"view":{"id":"8321","type":"CDSView"}},"id":"8320","type":"GlyphRenderer"},{"attributes":{},"id":"8265","type":"SaveTool"},{"attributes":{},"id":"8302","type":"PanTool"},{"attributes":{"callback":null},"id":"8244","type":"DataRange1d"},{"attributes":{},"id":"8250","type":"LinearScale"},{"attributes":{},"id":"8303","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"8237","type":"ColumnDataSource"},"glyph":{"id":"8238","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8239","type":"Circle"},"selection_glyph":null,"view":{"id":"8241","type":"CDSView"}},"id":"8240","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"8310","type":"BoxAnnotation"}},"id":"8304","type":"BoxZoomTool"},{"attributes":{},"id":"8305","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"8346","type":"Selection"},"selection_policy":{"id":"8345","type":"UnionRenderers"}},"id":"8317","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8222","type":"PanTool"},{"id":"8223","type":"WheelZoomTool"},{"id":"8224","type":"BoxZoomTool"},{"id":"8225","type":"SaveTool"},{"id":"8226","type":"ResetTool"},{"id":"8227","type":"HelpTool"}]},"id":"8228","type":"Toolbar"},{"attributes":{"callback":null},"id":"8284","type":"DataRange1d"},{"attributes":{},"id":"8306","type":"ResetTool"},{"attributes":{"below":[{"id":"8292","type":"LinearAxis"}],"left":[{"id":"8297","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8292","type":"LinearAxis"},{"id":"8296","type":"Grid"},{"id":"8297","type":"LinearAxis"},{"id":"8301","type":"Grid"},{"id":"8310","type":"BoxAnnotation"},{"id":"8320","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8308","type":"Toolbar"},"x_range":{"id":"8284","type":"DataRange1d"},"x_scale":{"id":"8288","type":"LinearScale"},"y_range":{"id":"8286","type":"DataRange1d"},"y_scale":{"id":"8290","type":"LinearScale"}},"id":"8282","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8278","type":"Triangle"},{"attributes":{},"id":"8307","type":"HelpTool"},{"attributes":{},"id":"8288","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8302","type":"PanTool"},{"id":"8303","type":"WheelZoomTool"},{"id":"8304","type":"BoxZoomTool"},{"id":"8305","type":"SaveTool"},{"id":"8306","type":"ResetTool"},{"id":"8307","type":"HelpTool"}]},"id":"8308","type":"Toolbar"},{"attributes":{},"id":"8225","type":"SaveTool"},{"attributes":{},"id":"8262","type":"PanTool"},{"attributes":{"callback":null},"id":"8246","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8310","type":"BoxAnnotation"},{"attributes":{"source":{"id":"8317","type":"ColumnDataSource"}},"id":"8321","type":"CDSView"},{"attributes":{},"id":"8208","type":"LinearScale"},{"attributes":{"children":[{"id":"8202","subtype":"Figure","type":"Plot"},{"id":"8242","subtype":"Figure","type":"Plot"},{"id":"8282","subtype":"Figure","type":"Plot"}]},"id":"8322","type":"Row"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8238","type":"Circle"},{"attributes":{"plot":{"id":"8242","subtype":"Figure","type":"Plot"},"ticker":{"id":"8253","type":"BasicTicker"}},"id":"8256","type":"Grid"},{"attributes":{"formatter":{"id":"8337","type":"BasicTickFormatter"},"plot":{"id":"8282","subtype":"Figure","type":"Plot"},"ticker":{"id":"8298","type":"BasicTicker"}},"id":"8297","type":"LinearAxis"},{"attributes":{},"id":"8213","type":"BasicTicker"},{"attributes":{},"id":"8248","type":"LinearScale"},{"attributes":{},"id":"8327","type":"BasicTickFormatter"},{"attributes":{},"id":"8329","type":"BasicTickFormatter"},{"attributes":{},"id":"8331","type":"BasicTickFormatter"},{"attributes":{},"id":"8258","type":"BasicTicker"},{"attributes":{"overlay":{"id":"8230","type":"BoxAnnotation"}},"id":"8224","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"8212","type":"LinearAxis"}],"left":[{"id":"8217","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8212","type":"LinearAxis"},{"id":"8216","type":"Grid"},{"id":"8217","type":"LinearAxis"},{"id":"8221","type":"Grid"},{"id":"8230","type":"BoxAnnotation"},{"id":"8240","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8228","type":"Toolbar"},"x_range":{"id":"8204","type":"DataRange1d"},"x_scale":{"id":"8208","type":"LinearScale"},"y_range":{"id":"8206","type":"DataRange1d"},"y_scale":{"id":"8210","type":"LinearScale"}},"id":"8202","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8333","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"8237","type":"ColumnDataSource"}},"id":"8241","type":"CDSView"},{"attributes":{"callback":null},"id":"8204","type":"DataRange1d"},{"attributes":{"plot":{"id":"8282","subtype":"Figure","type":"Plot"},"ticker":{"id":"8293","type":"BasicTicker"}},"id":"8296","type":"Grid"},{"attributes":{},"id":"8335","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"8206","type":"DataRange1d"},{"attributes":{},"id":"8337","type":"BasicTickFormatter"},{"attributes":{},"id":"8210","type":"LinearScale"},{"attributes":{"overlay":{"id":"8270","type":"BoxAnnotation"}},"id":"8264","type":"BoxZoomTool"},{"attributes":{},"id":"8339","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8239","type":"Circle"},{"attributes":{},"id":"8340","type":"Selection"},{"attributes":{"source":{"id":"8277","type":"ColumnDataSource"}},"id":"8281","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8270","type":"BoxAnnotation"},{"attributes":{},"id":"8342","type":"UnionRenderers"},{"attributes":{},"id":"8223","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"8202","subtype":"Figure","type":"Plot"},"ticker":{"id":"8213","type":"BasicTicker"}},"id":"8216","type":"Grid"},{"attributes":{},"id":"8343","type":"Selection"},{"attributes":{},"id":"8222","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8279","type":"Triangle"},{"attributes":{},"id":"8345","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8230","type":"BoxAnnotation"},{"attributes":{},"id":"8346","type":"Selection"},{"attributes":{"formatter":{"id":"8329","type":"BasicTickFormatter"},"plot":{"id":"8202","subtype":"Figure","type":"Plot"},"ticker":{"id":"8218","type":"BasicTicker"}},"id":"8217","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"8202","subtype":"Figure","type":"Plot"},"ticker":{"id":"8218","type":"BasicTicker"}},"id":"8221","type":"Grid"},{"attributes":{},"id":"8227","type":"HelpTool"},{"attributes":{"formatter":{"id":"8335","type":"BasicTickFormatter"},"plot":{"id":"8282","subtype":"Figure","type":"Plot"},"ticker":{"id":"8293","type":"BasicTicker"}},"id":"8292","type":"LinearAxis"},{"attributes":{"formatter":{"id":"8327","type":"BasicTickFormatter"},"plot":{"id":"8202","subtype":"Figure","type":"Plot"},"ticker":{"id":"8213","type":"BasicTicker"}},"id":"8212","type":"LinearAxis"},{"attributes":{},"id":"8290","type":"LinearScale"},{"attributes":{"formatter":{"id":"8333","type":"BasicTickFormatter"},"plot":{"id":"8242","subtype":"Figure","type":"Plot"},"ticker":{"id":"8258","type":"BasicTicker"}},"id":"8257","type":"LinearAxis"},{"attributes":{},"id":"8218","type":"BasicTicker"},{"attributes":{},"id":"8293","type":"BasicTicker"},{"attributes":{},"id":"8253","type":"BasicTicker"},{"attributes":{"callback":null},"id":"8286","type":"DataRange1d"},{"attributes":{"below":[{"id":"8252","type":"LinearAxis"}],"left":[{"id":"8257","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8252","type":"LinearAxis"},{"id":"8256","type":"Grid"},{"id":"8257","type":"LinearAxis"},{"id":"8261","type":"Grid"},{"id":"8270","type":"BoxAnnotation"},{"id":"8280","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8268","type":"Toolbar"},"x_range":{"id":"8244","type":"DataRange1d"},"x_scale":{"id":"8248","type":"LinearScale"},"y_range":{"id":"8246","type":"DataRange1d"},"y_scale":{"id":"8250","type":"LinearScale"}},"id":"8242","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"8331","type":"BasicTickFormatter"},"plot":{"id":"8242","subtype":"Figure","type":"Plot"},"ticker":{"id":"8253","type":"BasicTicker"}},"id":"8252","type":"LinearAxis"}],"root_ids":["8322"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"87bf882d-34ed-4df9-9e08-45bf5bca3c49","roots":{"8322":"3483f36c-aaa8-44a3-8686-b5f14ed6f252"}}];
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