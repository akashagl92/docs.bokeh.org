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
      };var element = document.getElementById("fe897721-c6e1-4b83-b91e-32d63c616bb8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fe897721-c6e1-4b83-b91e-32d63c616bb8' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"72dbb390-0d12-4cb2-83cf-b6123c3adcc7":{"roots":{"references":[{"attributes":{},"id":"8491","type":"LinearScale"},{"attributes":{},"id":"8574","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"8487","type":"DataRange1d"},{"attributes":{},"id":"8576","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8471","type":"BoxAnnotation"},{"attributes":{},"id":"8578","type":"BasicTickFormatter"},{"attributes":{},"id":"8580","type":"Selection"},{"attributes":{"plot":{"id":"8523","subtype":"Figure","type":"Plot"},"ticker":{"id":"8534","type":"BasicTicker"}},"id":"8537","type":"Grid"},{"attributes":{"overlay":{"id":"8471","type":"BoxAnnotation"}},"id":"8465","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"8574","type":"BasicTickFormatter"},"plot":{"id":"8483","subtype":"Figure","type":"Plot"},"ticker":{"id":"8499","type":"BasicTicker"}},"id":"8498","type":"LinearAxis"},{"attributes":{},"id":"8581","type":"UnionRenderers"},{"attributes":{},"id":"8468","type":"HelpTool"},{"attributes":{},"id":"8451","type":"LinearScale"},{"attributes":{},"id":"8583","type":"Selection"},{"attributes":{},"id":"8584","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8463","type":"PanTool"},{"id":"8464","type":"WheelZoomTool"},{"id":"8465","type":"BoxZoomTool"},{"id":"8466","type":"SaveTool"},{"id":"8467","type":"ResetTool"},{"id":"8468","type":"HelpTool"}]},"id":"8469","type":"Toolbar"},{"attributes":{},"id":"8586","type":"Selection"},{"attributes":{},"id":"8467","type":"ResetTool"},{"attributes":{},"id":"8587","type":"UnionRenderers"},{"attributes":{},"id":"8466","type":"SaveTool"},{"attributes":{"formatter":{"id":"8570","type":"BasicTickFormatter"},"plot":{"id":"8443","subtype":"Figure","type":"Plot"},"ticker":{"id":"8459","type":"BasicTicker"}},"id":"8458","type":"LinearAxis"},{"attributes":{},"id":"8454","type":"BasicTicker"},{"attributes":{"plot":{"id":"8443","subtype":"Figure","type":"Plot"},"ticker":{"id":"8454","type":"BasicTicker"}},"id":"8457","type":"Grid"},{"attributes":{},"id":"8499","type":"BasicTicker"},{"attributes":{},"id":"8506","type":"SaveTool"},{"attributes":{},"id":"8459","type":"BasicTicker"},{"attributes":{},"id":"8463","type":"PanTool"},{"attributes":{"below":[{"id":"8453","type":"LinearAxis"}],"left":[{"id":"8458","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8453","type":"LinearAxis"},{"id":"8457","type":"Grid"},{"id":"8458","type":"LinearAxis"},{"id":"8462","type":"Grid"},{"id":"8471","type":"BoxAnnotation"},{"id":"8481","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8469","type":"Toolbar"},"x_range":{"id":"8445","type":"DataRange1d"},"x_scale":{"id":"8449","type":"LinearScale"},"y_range":{"id":"8447","type":"DataRange1d"},"y_scale":{"id":"8451","type":"LinearScale"}},"id":"8443","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"8478","type":"ColumnDataSource"},"glyph":{"id":"8479","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8480","type":"Circle"},"selection_glyph":null,"view":{"id":"8482","type":"CDSView"}},"id":"8481","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"8443","subtype":"Figure","type":"Plot"},"ticker":{"id":"8459","type":"BasicTicker"}},"id":"8462","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"8580","type":"Selection"},"selection_policy":{"id":"8581","type":"UnionRenderers"}},"id":"8478","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"8583","type":"Selection"},"selection_policy":{"id":"8584","type":"UnionRenderers"}},"id":"8518","type":"ColumnDataSource"},{"attributes":{"source":{"id":"8478","type":"ColumnDataSource"}},"id":"8482","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8480","type":"Circle"},{"attributes":{},"id":"8572","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"8493","type":"LinearAxis"}],"left":[{"id":"8498","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8493","type":"LinearAxis"},{"id":"8497","type":"Grid"},{"id":"8498","type":"LinearAxis"},{"id":"8502","type":"Grid"},{"id":"8511","type":"BoxAnnotation"},{"id":"8521","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8509","type":"Toolbar"},"x_range":{"id":"8485","type":"DataRange1d"},"x_scale":{"id":"8489","type":"LinearScale"},"y_range":{"id":"8487","type":"DataRange1d"},"y_scale":{"id":"8491","type":"LinearScale"}},"id":"8483","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"8578","type":"BasicTickFormatter"},"plot":{"id":"8523","subtype":"Figure","type":"Plot"},"ticker":{"id":"8539","type":"BasicTicker"}},"id":"8538","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8479","type":"Circle"},{"attributes":{},"id":"8464","type":"WheelZoomTool"},{"attributes":{},"id":"8539","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8511","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"8523","subtype":"Figure","type":"Plot"},"ticker":{"id":"8539","type":"BasicTicker"}},"id":"8542","type":"Grid"},{"attributes":{"data_source":{"id":"8518","type":"ColumnDataSource"},"glyph":{"id":"8519","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8520","type":"Triangle"},"selection_glyph":null,"view":{"id":"8522","type":"CDSView"}},"id":"8521","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8560","type":"Square"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8503","type":"PanTool"},{"id":"8504","type":"WheelZoomTool"},{"id":"8505","type":"BoxZoomTool"},{"id":"8506","type":"SaveTool"},{"id":"8507","type":"ResetTool"},{"id":"8508","type":"HelpTool"}]},"id":"8509","type":"Toolbar"},{"attributes":{"formatter":{"id":"8568","type":"BasicTickFormatter"},"plot":{"id":"8443","subtype":"Figure","type":"Plot"},"ticker":{"id":"8454","type":"BasicTicker"}},"id":"8453","type":"LinearAxis"},{"attributes":{},"id":"8489","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8559","type":"Square"},{"attributes":{},"id":"8508","type":"HelpTool"},{"attributes":{"callback":null},"id":"8527","type":"DataRange1d"},{"attributes":{},"id":"8543","type":"PanTool"},{"attributes":{"callback":null},"id":"8447","type":"DataRange1d"},{"attributes":{"data_source":{"id":"8558","type":"ColumnDataSource"},"glyph":{"id":"8559","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8560","type":"Square"},"selection_glyph":null,"view":{"id":"8562","type":"CDSView"}},"id":"8561","type":"GlyphRenderer"},{"attributes":{},"id":"8449","type":"LinearScale"},{"attributes":{"below":[{"id":"8533","type":"LinearAxis"}],"left":[{"id":"8538","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8533","type":"LinearAxis"},{"id":"8537","type":"Grid"},{"id":"8538","type":"LinearAxis"},{"id":"8542","type":"Grid"},{"id":"8551","type":"BoxAnnotation"},{"id":"8561","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8549","type":"Toolbar"},"x_range":{"id":"8525","type":"DataRange1d"},"x_scale":{"id":"8529","type":"LinearScale"},"y_range":{"id":"8527","type":"DataRange1d"},"y_scale":{"id":"8531","type":"LinearScale"}},"id":"8523","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8544","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"8525","type":"DataRange1d"},{"attributes":{},"id":"8546","type":"SaveTool"},{"attributes":{"callback":null},"id":"8445","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8519","type":"Triangle"},{"attributes":{"overlay":{"id":"8551","type":"BoxAnnotation"}},"id":"8545","type":"BoxZoomTool"},{"attributes":{},"id":"8547","type":"ResetTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"8586","type":"Selection"},"selection_policy":{"id":"8587","type":"UnionRenderers"}},"id":"8558","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"8572","type":"BasicTickFormatter"},"plot":{"id":"8483","subtype":"Figure","type":"Plot"},"ticker":{"id":"8494","type":"BasicTicker"}},"id":"8493","type":"LinearAxis"},{"attributes":{},"id":"8548","type":"HelpTool"},{"attributes":{"overlay":{"id":"8511","type":"BoxAnnotation"}},"id":"8505","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"8483","subtype":"Figure","type":"Plot"},"ticker":{"id":"8494","type":"BasicTicker"}},"id":"8497","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8543","type":"PanTool"},{"id":"8544","type":"WheelZoomTool"},{"id":"8545","type":"BoxZoomTool"},{"id":"8546","type":"SaveTool"},{"id":"8547","type":"ResetTool"},{"id":"8548","type":"HelpTool"}]},"id":"8549","type":"Toolbar"},{"attributes":{"source":{"id":"8518","type":"ColumnDataSource"}},"id":"8522","type":"CDSView"},{"attributes":{},"id":"8534","type":"BasicTicker"},{"attributes":{"callback":null},"id":"8485","type":"DataRange1d"},{"attributes":{"source":{"id":"8558","type":"ColumnDataSource"}},"id":"8562","type":"CDSView"},{"attributes":{"formatter":{"id":"8576","type":"BasicTickFormatter"},"plot":{"id":"8523","subtype":"Figure","type":"Plot"},"ticker":{"id":"8534","type":"BasicTicker"}},"id":"8533","type":"LinearAxis"},{"attributes":{},"id":"8531","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8551","type":"BoxAnnotation"},{"attributes":{},"id":"8529","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8520","type":"Triangle"},{"attributes":{"children":[{"id":"8443","subtype":"Figure","type":"Plot"},{"id":"8483","subtype":"Figure","type":"Plot"},{"id":"8523","subtype":"Figure","type":"Plot"}]},"id":"8563","type":"Column"},{"attributes":{},"id":"8570","type":"BasicTickFormatter"},{"attributes":{},"id":"8504","type":"WheelZoomTool"},{"attributes":{},"id":"8494","type":"BasicTicker"},{"attributes":{},"id":"8507","type":"ResetTool"},{"attributes":{},"id":"8503","type":"PanTool"},{"attributes":{},"id":"8568","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"8483","subtype":"Figure","type":"Plot"},"ticker":{"id":"8499","type":"BasicTicker"}},"id":"8502","type":"Grid"}],"root_ids":["8563"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"72dbb390-0d12-4cb2-83cf-b6123c3adcc7","roots":{"8563":"fe897721-c6e1-4b83-b91e-32d63c616bb8"}}];
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