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
      };var element = document.getElementById("77f4ec36-82ee-4042-8296-149a13cf875c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '77f4ec36-82ee-4042-8296-149a13cf875c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b9e5ee02-840a-4998-b0b4-7fc5e9f3cee8":{"roots":{"references":[{"attributes":{},"id":"6872","type":"BasicTicker"},{"attributes":{"source":{"id":"6819","type":"ColumnDataSource"}},"id":"6855","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"6856","subtype":"Figure","type":"Plot"},"ticker":{"id":"6872","type":"BasicTicker"}},"id":"6875","type":"Grid"},{"attributes":{"tools":[{"id":"6840","type":"BoxSelectTool"},{"id":"6841","type":"LassoSelectTool"},{"id":"6842","type":"HelpTool"},{"id":"6876","type":"BoxSelectTool"},{"id":"6877","type":"LassoSelectTool"},{"id":"6878","type":"HelpTool"}]},"id":"6914","type":"ProxyToolbar"},{"attributes":{"callback":null,"overlay":{"id":"6843","type":"BoxAnnotation"}},"id":"6840","type":"BoxSelectTool"},{"attributes":{"plot":{"id":"6856","subtype":"Figure","type":"Plot"},"ticker":{"id":"6867","type":"BasicTicker"}},"id":"6870","type":"Grid"},{"attributes":{"callback":null},"id":"6860","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"6914","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"6915","type":"ToolbarBox"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6879","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"6819","type":"ColumnDataSource"},"glyph":{"id":"6852","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6853","type":"Circle"},"selection_glyph":null,"view":{"id":"6855","type":"CDSView"}},"id":"6854","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"6915","type":"ToolbarBox"},{"id":"6913","type":"Column"}]},"id":"6916","type":"Column"},{"attributes":{},"id":"6831","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"6879","type":"BoxAnnotation"}},"id":"6876","type":"BoxSelectTool"},{"attributes":{"formatter":{"id":"6894","type":"BasicTickFormatter"},"plot":{"id":"6820","subtype":"Figure","type":"Plot"},"ticker":{"id":"6831","type":"BasicTicker"}},"id":"6830","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"6888","type":"Circle"},{"attributes":{},"id":"6828","type":"LinearScale"},{"attributes":{},"id":"6878","type":"HelpTool"},{"attributes":{"plot":{"id":"6820","subtype":"Figure","type":"Plot"},"ticker":{"id":"6831","type":"BasicTicker"}},"id":"6834","type":"Grid"},{"attributes":{},"id":"6836","type":"BasicTicker"},{"attributes":{},"id":"6867","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"6820","subtype":"Figure","type":"Plot"},"ticker":{"id":"6836","type":"BasicTicker"}},"id":"6839","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"6882","type":"PolyAnnotation"}},"id":"6877","type":"LassoSelectTool"},{"attributes":{"callback":null,"overlay":{"id":"6846","type":"PolyAnnotation"}},"id":"6841","type":"LassoSelectTool"},{"attributes":{},"id":"6904","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"6866","type":"LinearAxis"}],"left":[{"id":"6871","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"6866","type":"LinearAxis"},{"id":"6870","type":"Grid"},{"id":"6871","type":"LinearAxis"},{"id":"6875","type":"Grid"},{"id":"6879","type":"BoxAnnotation"},{"id":"6882","type":"PolyAnnotation"},{"id":"6890","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"6881","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6858","type":"DataRange1d"},"x_scale":{"id":"6862","type":"LinearScale"},"y_range":{"id":"6860","type":"DataRange1d"},"y_scale":{"id":"6864","type":"LinearScale"}},"id":"6856","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6826","type":"LinearScale"},{"attributes":{},"id":"6862","type":"LinearScale"},{"attributes":{"source":{"id":"6819","type":"ColumnDataSource"}},"id":"6891","type":"CDSView"},{"attributes":{},"id":"6906","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6876","type":"BoxSelectTool"},{"id":"6877","type":"LassoSelectTool"},{"id":"6878","type":"HelpTool"}]},"id":"6881","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"6846","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"6882","type":"PolyAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6840","type":"BoxSelectTool"},{"id":"6841","type":"LassoSelectTool"},{"id":"6842","type":"HelpTool"}]},"id":"6845","type":"Toolbar"},{"attributes":{"formatter":{"id":"6896","type":"BasicTickFormatter"},"plot":{"id":"6820","subtype":"Figure","type":"Plot"},"ticker":{"id":"6836","type":"BasicTicker"}},"id":"6835","type":"LinearAxis"},{"attributes":{"callback":null},"id":"6824","type":"DataRange1d"},{"attributes":{"below":[{"id":"6830","type":"LinearAxis"}],"left":[{"id":"6835","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"6830","type":"LinearAxis"},{"id":"6834","type":"Grid"},{"id":"6835","type":"LinearAxis"},{"id":"6839","type":"Grid"},{"id":"6843","type":"BoxAnnotation"},{"id":"6846","type":"PolyAnnotation"},{"id":"6854","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"6845","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6822","type":"DataRange1d"},"x_scale":{"id":"6826","type":"LinearScale"},"y_range":{"id":"6824","type":"DataRange1d"},"y_scale":{"id":"6828","type":"LinearScale"}},"id":"6820","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"6889","type":"Circle"},{"attributes":{},"id":"6842","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]},"selected":{"id":"6900","type":"Selection"},"selection_policy":{"id":"6899","type":"UnionRenderers"}},"id":"6819","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"6852","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6843","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"6819","type":"ColumnDataSource"},"glyph":{"id":"6888","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6889","type":"Circle"},"selection_glyph":null,"view":{"id":"6891","type":"CDSView"}},"id":"6890","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"6822","type":"DataRange1d"},{"attributes":{"formatter":{"id":"6904","type":"BasicTickFormatter"},"plot":{"id":"6856","subtype":"Figure","type":"Plot"},"ticker":{"id":"6867","type":"BasicTicker"}},"id":"6866","type":"LinearAxis"},{"attributes":{"children":[{"id":"6912","type":"Row"}]},"id":"6913","type":"Column"},{"attributes":{"callback":null},"id":"6858","type":"DataRange1d"},{"attributes":{},"id":"6864","type":"LinearScale"},{"attributes":{"children":[{"id":"6820","subtype":"Figure","type":"Plot"},{"id":"6856","subtype":"Figure","type":"Plot"}]},"id":"6912","type":"Row"},{"attributes":{"formatter":{"id":"6906","type":"BasicTickFormatter"},"plot":{"id":"6856","subtype":"Figure","type":"Plot"},"ticker":{"id":"6872","type":"BasicTicker"}},"id":"6871","type":"LinearAxis"},{"attributes":{},"id":"6899","type":"UnionRenderers"},{"attributes":{},"id":"6896","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"6853","type":"Circle"},{"attributes":{},"id":"6894","type":"BasicTickFormatter"},{"attributes":{},"id":"6900","type":"Selection"}],"root_ids":["6916"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"b9e5ee02-840a-4998-b0b4-7fc5e9f3cee8","roots":{"6916":"77f4ec36-82ee-4042-8296-149a13cf875c"}}];
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