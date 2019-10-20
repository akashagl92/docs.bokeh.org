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
      };var element = document.getElementById("e1c62451-7ecd-4170-a136-cc834e7ee601");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e1c62451-7ecd-4170-a136-cc834e7ee601' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"80d50e11-9ff2-4e1e-9083-ebe24bea21aa":{"roots":{"references":[{"attributes":{},"id":"8490","type":"LinearScale"},{"attributes":{"overlay":{"id":"8472","type":"BoxAnnotation"}},"id":"8466","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8464","type":"PanTool"},{"id":"8465","type":"WheelZoomTool"},{"id":"8466","type":"BoxZoomTool"},{"id":"8467","type":"SaveTool"},{"id":"8468","type":"ResetTool"},{"id":"8469","type":"HelpTool"}]},"id":"8470","type":"Toolbar"},{"attributes":{},"id":"8508","type":"ResetTool"},{"attributes":{},"id":"8509","type":"HelpTool"},{"attributes":{"formatter":{"id":"8573","type":"BasicTickFormatter"},"plot":{"id":"8484","subtype":"Figure","type":"Plot"},"ticker":{"id":"8495","type":"BasicTicker"}},"id":"8494","type":"LinearAxis"},{"attributes":{},"id":"8573","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8504","type":"PanTool"},{"id":"8505","type":"WheelZoomTool"},{"id":"8506","type":"BoxZoomTool"},{"id":"8507","type":"SaveTool"},{"id":"8508","type":"ResetTool"},{"id":"8509","type":"HelpTool"}]},"id":"8510","type":"Toolbar"},{"attributes":{},"id":"8507","type":"SaveTool"},{"attributes":{"data_source":{"id":"8519","type":"ColumnDataSource"},"glyph":{"id":"8520","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8521","type":"Triangle"},"selection_glyph":null,"view":{"id":"8523","type":"CDSView"}},"id":"8522","type":"GlyphRenderer"},{"attributes":{},"id":"8465","type":"WheelZoomTool"},{"attributes":{},"id":"8540","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8512","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"8524","subtype":"Figure","type":"Plot"},"ticker":{"id":"8540","type":"BasicTicker"}},"id":"8543","type":"Grid"},{"attributes":{},"id":"8467","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8472","type":"BoxAnnotation"},{"attributes":{"source":{"id":"8519","type":"ColumnDataSource"}},"id":"8523","type":"CDSView"},{"attributes":{},"id":"8495","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8561","type":"Square"},{"attributes":{"source":{"id":"8479","type":"ColumnDataSource"}},"id":"8483","type":"CDSView"},{"attributes":{"below":[{"id":"8534","type":"LinearAxis"}],"left":[{"id":"8539","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8534","type":"LinearAxis"},{"id":"8538","type":"Grid"},{"id":"8539","type":"LinearAxis"},{"id":"8543","type":"Grid"},{"id":"8552","type":"BoxAnnotation"},{"id":"8562","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8550","type":"Toolbar"},"x_range":{"id":"8526","type":"DataRange1d"},"x_scale":{"id":"8530","type":"LinearScale"},"y_range":{"id":"8528","type":"DataRange1d"},"y_scale":{"id":"8532","type":"LinearScale"}},"id":"8524","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8560","type":"Square"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"8588","type":"Selection"},"selection_policy":{"id":"8587","type":"UnionRenderers"}},"id":"8559","type":"ColumnDataSource"},{"attributes":{},"id":"8469","type":"HelpTool"},{"attributes":{"data_source":{"id":"8559","type":"ColumnDataSource"},"glyph":{"id":"8560","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8561","type":"Square"},"selection_glyph":null,"view":{"id":"8563","type":"CDSView"}},"id":"8562","type":"GlyphRenderer"},{"attributes":{},"id":"8455","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"8585","type":"Selection"},"selection_policy":{"id":"8584","type":"UnionRenderers"}},"id":"8519","type":"ColumnDataSource"},{"attributes":{},"id":"8544","type":"PanTool"},{"attributes":{},"id":"8545","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"8444","subtype":"Figure","type":"Plot"},"ticker":{"id":"8460","type":"BasicTicker"}},"id":"8463","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8520","type":"Triangle"},{"attributes":{},"id":"8548","type":"ResetTool"},{"attributes":{},"id":"8460","type":"BasicTicker"},{"attributes":{},"id":"8492","type":"LinearScale"},{"attributes":{"overlay":{"id":"8552","type":"BoxAnnotation"}},"id":"8546","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"8571","type":"BasicTickFormatter"},"plot":{"id":"8444","subtype":"Figure","type":"Plot"},"ticker":{"id":"8460","type":"BasicTicker"}},"id":"8459","type":"LinearAxis"},{"attributes":{},"id":"8547","type":"SaveTool"},{"attributes":{"callback":null},"id":"8488","type":"DataRange1d"},{"attributes":{"callback":null},"id":"8528","type":"DataRange1d"},{"attributes":{"data_source":{"id":"8479","type":"ColumnDataSource"},"glyph":{"id":"8480","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8481","type":"Circle"},"selection_glyph":null,"view":{"id":"8483","type":"CDSView"}},"id":"8482","type":"GlyphRenderer"},{"attributes":{},"id":"8530","type":"LinearScale"},{"attributes":{"below":[{"id":"8494","type":"LinearAxis"}],"left":[{"id":"8499","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8494","type":"LinearAxis"},{"id":"8498","type":"Grid"},{"id":"8499","type":"LinearAxis"},{"id":"8503","type":"Grid"},{"id":"8512","type":"BoxAnnotation"},{"id":"8522","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8510","type":"Toolbar"},"x_range":{"id":"8486","type":"DataRange1d"},"x_scale":{"id":"8490","type":"LinearScale"},"y_range":{"id":"8488","type":"DataRange1d"},"y_scale":{"id":"8492","type":"LinearScale"}},"id":"8484","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8500","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8480","type":"Circle"},{"attributes":{},"id":"8549","type":"HelpTool"},{"attributes":{},"id":"8532","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8544","type":"PanTool"},{"id":"8545","type":"WheelZoomTool"},{"id":"8546","type":"BoxZoomTool"},{"id":"8547","type":"SaveTool"},{"id":"8548","type":"ResetTool"},{"id":"8549","type":"HelpTool"}]},"id":"8550","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8481","type":"Circle"},{"attributes":{"children":[{"id":"8444","subtype":"Figure","type":"Plot"},{"id":"8484","subtype":"Figure","type":"Plot"},{"id":"8524","subtype":"Figure","type":"Plot"}]},"id":"8564","type":"Column"},{"attributes":{},"id":"8505","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"8577","type":"BasicTickFormatter"},"plot":{"id":"8524","subtype":"Figure","type":"Plot"},"ticker":{"id":"8535","type":"BasicTicker"}},"id":"8534","type":"LinearAxis"},{"attributes":{},"id":"8464","type":"PanTool"},{"attributes":{"formatter":{"id":"8569","type":"BasicTickFormatter"},"plot":{"id":"8444","subtype":"Figure","type":"Plot"},"ticker":{"id":"8455","type":"BasicTicker"}},"id":"8454","type":"LinearAxis"},{"attributes":{},"id":"8535","type":"BasicTicker"},{"attributes":{"source":{"id":"8559","type":"ColumnDataSource"}},"id":"8563","type":"CDSView"},{"attributes":{"plot":{"id":"8524","subtype":"Figure","type":"Plot"},"ticker":{"id":"8535","type":"BasicTicker"}},"id":"8538","type":"Grid"},{"attributes":{},"id":"8468","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8552","type":"BoxAnnotation"},{"attributes":{},"id":"8452","type":"LinearScale"},{"attributes":{"formatter":{"id":"8579","type":"BasicTickFormatter"},"plot":{"id":"8524","subtype":"Figure","type":"Plot"},"ticker":{"id":"8540","type":"BasicTicker"}},"id":"8539","type":"LinearAxis"},{"attributes":{"callback":null},"id":"8526","type":"DataRange1d"},{"attributes":{},"id":"8569","type":"BasicTickFormatter"},{"attributes":{},"id":"8571","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"8484","subtype":"Figure","type":"Plot"},"ticker":{"id":"8500","type":"BasicTicker"}},"id":"8503","type":"Grid"},{"attributes":{},"id":"8575","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"8446","type":"DataRange1d"},{"attributes":{},"id":"8577","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"8484","subtype":"Figure","type":"Plot"},"ticker":{"id":"8495","type":"BasicTicker"}},"id":"8498","type":"Grid"},{"attributes":{"callback":null},"id":"8448","type":"DataRange1d"},{"attributes":{},"id":"8450","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"8582","type":"Selection"},"selection_policy":{"id":"8581","type":"UnionRenderers"}},"id":"8479","type":"ColumnDataSource"},{"attributes":{},"id":"8579","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"8444","subtype":"Figure","type":"Plot"},"ticker":{"id":"8455","type":"BasicTicker"}},"id":"8458","type":"Grid"},{"attributes":{"below":[{"id":"8454","type":"LinearAxis"}],"left":[{"id":"8459","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8454","type":"LinearAxis"},{"id":"8458","type":"Grid"},{"id":"8459","type":"LinearAxis"},{"id":"8463","type":"Grid"},{"id":"8472","type":"BoxAnnotation"},{"id":"8482","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8470","type":"Toolbar"},"x_range":{"id":"8446","type":"DataRange1d"},"x_scale":{"id":"8450","type":"LinearScale"},"y_range":{"id":"8448","type":"DataRange1d"},"y_scale":{"id":"8452","type":"LinearScale"}},"id":"8444","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8581","type":"UnionRenderers"},{"attributes":{},"id":"8582","type":"Selection"},{"attributes":{"overlay":{"id":"8512","type":"BoxAnnotation"}},"id":"8506","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"8575","type":"BasicTickFormatter"},"plot":{"id":"8484","subtype":"Figure","type":"Plot"},"ticker":{"id":"8500","type":"BasicTicker"}},"id":"8499","type":"LinearAxis"},{"attributes":{},"id":"8584","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8521","type":"Triangle"},{"attributes":{},"id":"8585","type":"Selection"},{"attributes":{},"id":"8504","type":"PanTool"},{"attributes":{},"id":"8587","type":"UnionRenderers"},{"attributes":{},"id":"8588","type":"Selection"},{"attributes":{"callback":null},"id":"8486","type":"DataRange1d"}],"root_ids":["8564"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"80d50e11-9ff2-4e1e-9083-ebe24bea21aa","roots":{"8564":"e1c62451-7ecd-4170-a136-cc834e7ee601"}}];
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