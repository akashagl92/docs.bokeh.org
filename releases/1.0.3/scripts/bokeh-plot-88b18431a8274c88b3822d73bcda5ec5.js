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
      };var element = document.getElementById("3511d813-5213-46d7-87e6-c2492be147b1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3511d813-5213-46d7-87e6-c2492be147b1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"01b30e10-3217-4b4a-979a-75ccd314af33":{"roots":{"references":[{"attributes":{"formatter":{"id":"3585","type":"BasicTickFormatter"},"plot":{"id":"3536","subtype":"Figure","type":"Plot"},"ticker":{"id":"3552","type":"BasicTicker"}},"id":"3551","type":"LinearAxis"},{"attributes":{},"id":"3508","type":"BasicTicker"},{"attributes":{},"id":"3582","type":"UnionRenderers"},{"attributes":{"below":[{"id":"3546","type":"LinearAxis"}],"left":[{"id":"3551","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"3546","type":"LinearAxis"},{"id":"3550","type":"Grid"},{"id":"3551","type":"LinearAxis"},{"id":"3555","type":"Grid"},{"id":"3560","type":"BoxAnnotation"},{"id":"3563","type":"PolyAnnotation"},{"id":"3573","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"3562","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3538","type":"DataRange1d"},"x_scale":{"id":"3542","type":"LinearScale"},"y_range":{"id":"3540","type":"DataRange1d"},"y_scale":{"id":"3544","type":"LinearScale"}},"id":"3536","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3585","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"3597","type":"ToolbarBox"},{"id":"3595","type":"Column"}]},"id":"3598","type":"Column"},{"attributes":{"callback":null},"id":"3501","type":"DataRange1d"},{"attributes":{},"id":"3542","type":"LinearScale"},{"attributes":{"below":[{"id":"3507","type":"LinearAxis"}],"left":[{"id":"3512","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"3507","type":"LinearAxis"},{"id":"3511","type":"Grid"},{"id":"3512","type":"LinearAxis"},{"id":"3516","type":"Grid"},{"id":"3521","type":"BoxAnnotation"},{"id":"3524","type":"PolyAnnotation"},{"id":"3534","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"3523","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3499","type":"DataRange1d"},"x_scale":{"id":"3503","type":"LinearScale"},"y_range":{"id":"3501","type":"DataRange1d"},"y_scale":{"id":"3505","type":"LinearScale"}},"id":"3497","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"3497","subtype":"Figure","type":"Plot"},"ticker":{"id":"3508","type":"BasicTicker"}},"id":"3511","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"3524","type":"PolyAnnotation"}},"id":"3518","type":"LassoSelectTool"},{"attributes":{"booleans":[true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true]},"id":"3495","type":"BooleanFilter"},{"attributes":{},"id":"3587","type":"BasicTickFormatter"},{"attributes":{},"id":"3505","type":"LinearScale"},{"attributes":{"toolbar":{"id":"3596","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"3597","type":"ToolbarBox"},{"attributes":{},"id":"3547","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"3563","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"3531","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"3532","type":"Circle"},{"attributes":{"filters":[{"id":"3495","type":"BooleanFilter"}],"source":{"id":"3494","type":"ColumnDataSource"}},"id":"3496","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3521","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"3497","subtype":"Figure","type":"Plot"},"ticker":{"id":"3513","type":"BasicTicker"}},"id":"3516","type":"Grid"},{"attributes":{"formatter":{"id":"3587","type":"BasicTickFormatter"},"plot":{"id":"3536","subtype":"Figure","type":"Plot"},"ticker":{"id":"3547","type":"BasicTicker"}},"id":"3546","type":"LinearAxis"},{"attributes":{"tools":[{"id":"3517","type":"BoxSelectTool"},{"id":"3518","type":"LassoSelectTool"},{"id":"3519","type":"HoverTool"},{"id":"3520","type":"HelpTool"},{"id":"3556","type":"BoxSelectTool"},{"id":"3557","type":"LassoSelectTool"},{"id":"3558","type":"HoverTool"},{"id":"3559","type":"HelpTool"}]},"id":"3596","type":"ProxyToolbar"},{"attributes":{"source":{"id":"3494","type":"ColumnDataSource"}},"id":"3535","type":"CDSView"},{"attributes":{},"id":"3503","type":"LinearScale"},{"attributes":{"formatter":{"id":"3575","type":"BasicTickFormatter"},"plot":{"id":"3497","subtype":"Figure","type":"Plot"},"ticker":{"id":"3513","type":"BasicTicker"}},"id":"3512","type":"LinearAxis"},{"attributes":{"plot":{"id":"3536","subtype":"Figure","type":"Plot"},"ticker":{"id":"3547","type":"BasicTicker"}},"id":"3550","type":"Grid"},{"attributes":{"callback":null},"id":"3499","type":"DataRange1d"},{"attributes":{},"id":"3552","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3556","type":"BoxSelectTool"},{"id":"3557","type":"LassoSelectTool"},{"id":"3558","type":"HoverTool"},{"id":"3559","type":"HelpTool"}]},"id":"3562","type":"Toolbar"},{"attributes":{},"id":"3513","type":"BasicTicker"},{"attributes":{},"id":"3559","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3517","type":"BoxSelectTool"},{"id":"3518","type":"LassoSelectTool"},{"id":"3519","type":"HoverTool"},{"id":"3520","type":"HelpTool"}]},"id":"3523","type":"Toolbar"},{"attributes":{"callback":null,"overlay":{"id":"3560","type":"BoxAnnotation"}},"id":"3556","type":"BoxSelectTool"},{"attributes":{"callback":null},"id":"3519","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3560","type":"BoxAnnotation"},{"attributes":{},"id":"3581","type":"Selection"},{"attributes":{"callback":null,"overlay":{"id":"3521","type":"BoxAnnotation"}},"id":"3517","type":"BoxSelectTool"},{"attributes":{"callback":null},"id":"3558","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"3571","type":"Circle"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"3572","type":"Circle"},{"attributes":{"data_source":{"id":"3494","type":"ColumnDataSource"},"glyph":{"id":"3531","type":"Circle"},"hover_glyph":{"id":"3533","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"3532","type":"Circle"},"selection_glyph":null,"view":{"id":"3535","type":"CDSView"}},"id":"3534","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"3563","type":"PolyAnnotation"}},"id":"3557","type":"LassoSelectTool"},{"attributes":{"callback":null,"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]},"selected":{"id":"3581","type":"Selection"},"selection_policy":{"id":"3582","type":"UnionRenderers"}},"id":"3494","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"3577","type":"BasicTickFormatter"},"plot":{"id":"3497","subtype":"Figure","type":"Plot"},"ticker":{"id":"3508","type":"BasicTicker"}},"id":"3507","type":"LinearAxis"},{"attributes":{"data_source":{"id":"3494","type":"ColumnDataSource"},"glyph":{"id":"3570","type":"Circle"},"hover_glyph":{"id":"3572","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"3571","type":"Circle"},"selection_glyph":null,"view":{"id":"3496","type":"CDSView"}},"id":"3573","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"3570","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"3524","type":"PolyAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"3536","subtype":"Figure","type":"Plot"},"ticker":{"id":"3552","type":"BasicTicker"}},"id":"3555","type":"Grid"},{"attributes":{"callback":null},"id":"3538","type":"DataRange1d"},{"attributes":{"children":[{"id":"3594","type":"Row"}]},"id":"3595","type":"Column"},{"attributes":{"callback":null},"id":"3540","type":"DataRange1d"},{"attributes":{"children":[{"id":"3497","subtype":"Figure","type":"Plot"},{"id":"3536","subtype":"Figure","type":"Plot"}]},"id":"3594","type":"Row"},{"attributes":{},"id":"3520","type":"HelpTool"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"3533","type":"Circle"},{"attributes":{},"id":"3575","type":"BasicTickFormatter"},{"attributes":{},"id":"3544","type":"LinearScale"},{"attributes":{},"id":"3577","type":"BasicTickFormatter"}],"root_ids":["3598"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"01b30e10-3217-4b4a-979a-75ccd314af33","roots":{"3598":"3511d813-5213-46d7-87e6-c2492be147b1"}}];
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