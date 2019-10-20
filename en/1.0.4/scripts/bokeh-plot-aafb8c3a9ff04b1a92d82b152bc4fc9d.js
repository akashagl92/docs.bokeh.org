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
      };var element = document.getElementById("abff3c05-79c5-4786-a5f0-2e58bb5cd04f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'abff3c05-79c5-4786-a5f0-2e58bb5cd04f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"680784a3-ac11-4547-9c9f-d4d2d5be4010":{"roots":{"references":[{"attributes":{"data_source":{"id":"8522","type":"ColumnDataSource"},"glyph":{"id":"8523","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8524","type":"Triangle"},"selection_glyph":null,"view":{"id":"8526","type":"CDSView"}},"id":"8525","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"8590","type":"Selection"},"selection_policy":{"id":"8589","type":"UnionRenderers"}},"id":"8562","type":"ColumnDataSource"},{"attributes":{},"id":"8498","type":"BasicTicker"},{"attributes":{},"id":"8543","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8515","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"8527","subtype":"Figure","type":"Plot"},"ticker":{"id":"8543","type":"BasicTicker"}},"id":"8546","type":"Grid"},{"attributes":{},"id":"8507","type":"PanTool"},{"attributes":{},"id":"8455","type":"LinearScale"},{"attributes":{"plot":{"id":"8447","subtype":"Figure","type":"Plot"},"ticker":{"id":"8458","type":"BasicTicker"}},"id":"8461","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8507","type":"PanTool"},{"id":"8508","type":"WheelZoomTool"},{"id":"8509","type":"BoxZoomTool"},{"id":"8510","type":"SaveTool"},{"id":"8511","type":"ResetTool"},{"id":"8512","type":"HelpTool"}]},"id":"8513","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8523","type":"Triangle"},{"attributes":{"callback":null},"id":"8449","type":"DataRange1d"},{"attributes":{"below":[{"id":"8457","type":"LinearAxis"}],"left":[{"id":"8462","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8457","type":"LinearAxis"},{"id":"8461","type":"Grid"},{"id":"8462","type":"LinearAxis"},{"id":"8466","type":"Grid"},{"id":"8475","type":"BoxAnnotation"},{"id":"8485","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8473","type":"Toolbar"},"x_range":{"id":"8449","type":"DataRange1d"},"x_scale":{"id":"8453","type":"LinearScale"},"y_range":{"id":"8451","type":"DataRange1d"},"y_scale":{"id":"8455","type":"LinearScale"}},"id":"8447","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"8577","type":"BasicTickFormatter"},"plot":{"id":"8487","subtype":"Figure","type":"Plot"},"ticker":{"id":"8498","type":"BasicTicker"}},"id":"8497","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8524","type":"Triangle"},{"attributes":{},"id":"8467","type":"PanTool"},{"attributes":{"formatter":{"id":"8571","type":"BasicTickFormatter"},"plot":{"id":"8447","subtype":"Figure","type":"Plot"},"ticker":{"id":"8463","type":"BasicTicker"}},"id":"8462","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8563","type":"Square"},{"attributes":{},"id":"8463","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8564","type":"Square"},{"attributes":{},"id":"8495","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8484","type":"Circle"},{"attributes":{},"id":"8552","type":"HelpTool"},{"attributes":{},"id":"8453","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"8587","type":"Selection"},"selection_policy":{"id":"8586","type":"UnionRenderers"}},"id":"8522","type":"ColumnDataSource"},{"attributes":{},"id":"8547","type":"PanTool"},{"attributes":{"source":{"id":"8522","type":"ColumnDataSource"}},"id":"8526","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8475","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"8487","subtype":"Figure","type":"Plot"},"ticker":{"id":"8498","type":"BasicTicker"}},"id":"8501","type":"Grid"},{"attributes":{},"id":"8550","type":"SaveTool"},{"attributes":{},"id":"8533","type":"LinearScale"},{"attributes":{},"id":"8577","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"8451","type":"DataRange1d"},{"attributes":{"data_source":{"id":"8482","type":"ColumnDataSource"},"glyph":{"id":"8483","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8484","type":"Circle"},"selection_glyph":null,"view":{"id":"8486","type":"CDSView"}},"id":"8485","type":"GlyphRenderer"},{"attributes":{},"id":"8583","type":"UnionRenderers"},{"attributes":{"below":[{"id":"8537","type":"LinearAxis"}],"left":[{"id":"8542","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8537","type":"LinearAxis"},{"id":"8541","type":"Grid"},{"id":"8542","type":"LinearAxis"},{"id":"8546","type":"Grid"},{"id":"8555","type":"BoxAnnotation"},{"id":"8565","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8553","type":"Toolbar"},"x_range":{"id":"8529","type":"DataRange1d"},"x_scale":{"id":"8533","type":"LinearScale"},"y_range":{"id":"8531","type":"DataRange1d"},"y_scale":{"id":"8535","type":"LinearScale"}},"id":"8527","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8470","type":"SaveTool"},{"attributes":{},"id":"8510","type":"SaveTool"},{"attributes":{},"id":"8579","type":"BasicTickFormatter"},{"attributes":{},"id":"8586","type":"UnionRenderers"},{"attributes":{},"id":"8575","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"8487","subtype":"Figure","type":"Plot"},"ticker":{"id":"8503","type":"BasicTicker"}},"id":"8506","type":"Grid"},{"attributes":{"source":{"id":"8562","type":"ColumnDataSource"}},"id":"8566","type":"CDSView"},{"attributes":{"overlay":{"id":"8555","type":"BoxAnnotation"}},"id":"8549","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"8447","subtype":"Figure","type":"Plot"},"ticker":{"id":"8463","type":"BasicTicker"}},"id":"8466","type":"Grid"},{"attributes":{"data_source":{"id":"8562","type":"ColumnDataSource"},"glyph":{"id":"8563","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8564","type":"Square"},"selection_glyph":null,"view":{"id":"8566","type":"CDSView"}},"id":"8565","type":"GlyphRenderer"},{"attributes":{},"id":"8538","type":"BasicTicker"},{"attributes":{},"id":"8535","type":"LinearScale"},{"attributes":{},"id":"8468","type":"WheelZoomTool"},{"attributes":{},"id":"8503","type":"BasicTicker"},{"attributes":{"below":[{"id":"8497","type":"LinearAxis"}],"left":[{"id":"8502","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8497","type":"LinearAxis"},{"id":"8501","type":"Grid"},{"id":"8502","type":"LinearAxis"},{"id":"8506","type":"Grid"},{"id":"8515","type":"BoxAnnotation"},{"id":"8525","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8513","type":"Toolbar"},"x_range":{"id":"8489","type":"DataRange1d"},"x_scale":{"id":"8493","type":"LinearScale"},"y_range":{"id":"8491","type":"DataRange1d"},"y_scale":{"id":"8495","type":"LinearScale"}},"id":"8487","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"8584","type":"Selection"},"selection_policy":{"id":"8583","type":"UnionRenderers"}},"id":"8482","type":"ColumnDataSource"},{"attributes":{},"id":"8587","type":"Selection"},{"attributes":{"overlay":{"id":"8475","type":"BoxAnnotation"}},"id":"8469","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"8579","type":"BasicTickFormatter"},"plot":{"id":"8527","subtype":"Figure","type":"Plot"},"ticker":{"id":"8543","type":"BasicTicker"}},"id":"8542","type":"LinearAxis"},{"attributes":{"callback":null},"id":"8529","type":"DataRange1d"},{"attributes":{"source":{"id":"8482","type":"ColumnDataSource"}},"id":"8486","type":"CDSView"},{"attributes":{},"id":"8581","type":"BasicTickFormatter"},{"attributes":{},"id":"8589","type":"UnionRenderers"},{"attributes":{},"id":"8508","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"8581","type":"BasicTickFormatter"},"plot":{"id":"8527","subtype":"Figure","type":"Plot"},"ticker":{"id":"8538","type":"BasicTicker"}},"id":"8537","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8547","type":"PanTool"},{"id":"8548","type":"WheelZoomTool"},{"id":"8549","type":"BoxZoomTool"},{"id":"8550","type":"SaveTool"},{"id":"8551","type":"ResetTool"},{"id":"8552","type":"HelpTool"}]},"id":"8553","type":"Toolbar"},{"attributes":{"formatter":{"id":"8575","type":"BasicTickFormatter"},"plot":{"id":"8487","subtype":"Figure","type":"Plot"},"ticker":{"id":"8503","type":"BasicTicker"}},"id":"8502","type":"LinearAxis"},{"attributes":{"children":[{"id":"8447","subtype":"Figure","type":"Plot"},{"id":"8487","subtype":"Figure","type":"Plot"},{"id":"8527","subtype":"Figure","type":"Plot"}]},"id":"8567","type":"Column"},{"attributes":{},"id":"8551","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8483","type":"Circle"},{"attributes":{},"id":"8511","type":"ResetTool"},{"attributes":{"overlay":{"id":"8515","type":"BoxAnnotation"}},"id":"8509","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"8531","type":"DataRange1d"},{"attributes":{},"id":"8512","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8467","type":"PanTool"},{"id":"8468","type":"WheelZoomTool"},{"id":"8469","type":"BoxZoomTool"},{"id":"8470","type":"SaveTool"},{"id":"8471","type":"ResetTool"},{"id":"8472","type":"HelpTool"}]},"id":"8473","type":"Toolbar"},{"attributes":{"callback":null},"id":"8489","type":"DataRange1d"},{"attributes":{},"id":"8471","type":"ResetTool"},{"attributes":{},"id":"8571","type":"BasicTickFormatter"},{"attributes":{},"id":"8573","type":"BasicTickFormatter"},{"attributes":{},"id":"8584","type":"Selection"},{"attributes":{},"id":"8458","type":"BasicTicker"},{"attributes":{},"id":"8548","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"8491","type":"DataRange1d"},{"attributes":{},"id":"8472","type":"HelpTool"},{"attributes":{"formatter":{"id":"8573","type":"BasicTickFormatter"},"plot":{"id":"8447","subtype":"Figure","type":"Plot"},"ticker":{"id":"8458","type":"BasicTicker"}},"id":"8457","type":"LinearAxis"},{"attributes":{"plot":{"id":"8527","subtype":"Figure","type":"Plot"},"ticker":{"id":"8538","type":"BasicTicker"}},"id":"8541","type":"Grid"},{"attributes":{},"id":"8493","type":"LinearScale"},{"attributes":{},"id":"8590","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8555","type":"BoxAnnotation"}],"root_ids":["8567"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"680784a3-ac11-4547-9c9f-d4d2d5be4010","roots":{"8567":"abff3c05-79c5-4786-a5f0-2e58bb5cd04f"}}];
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