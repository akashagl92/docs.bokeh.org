(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("ed07b346-ae1c-498d-bf56-e29d5459661d");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'ed07b346-ae1c-498d-bf56-e29d5459661d' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.1.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
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
                    
                  var docs_json = '{"d2c87f94-db0c-4453-a65c-727268c2361e":{"roots":{"references":[{"attributes":{"below":[{"id":"22054","type":"LinearAxis"}],"center":[{"id":"22058","type":"Grid"},{"id":"22063","type":"Grid"}],"left":[{"id":"22059","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"22077","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"22068","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22046","type":"DataRange1d"},"x_scale":{"id":"22050","type":"LinearScale"},"y_range":{"id":"22048","type":"DataRange1d"},"y_scale":{"id":"22052","type":"LinearScale"}},"id":"22044","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22064","type":"BoxSelectTool"},{"id":"22065","type":"LassoSelectTool"},{"id":"22066","type":"HoverTool"},{"id":"22067","type":"HelpTool"}]},"id":"22068","type":"Toolbar"},{"attributes":{"toolbar":{"id":"22134","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"22135","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"22048","type":"DataRange1d"},{"attributes":{},"id":"22052","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"22060","type":"BasicTicker"}},"id":"22063","type":"Grid"},{"attributes":{},"id":"22117","type":"BasicTickFormatter"},{"attributes":{},"id":"22085","type":"LinearScale"},{"attributes":{},"id":"22125","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"22074","type":"Circle"},{"attributes":{},"id":"22095","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"22121","type":"PolyAnnotation"},{"attributes":{},"id":"22060","type":"BasicTicker"},{"attributes":{},"id":"22087","type":"LinearScale"},{"attributes":{"formatter":{"id":"22115","type":"BasicTickFormatter"},"ticker":{"id":"22060","type":"BasicTicker"}},"id":"22059","type":"LinearAxis"},{"attributes":{"formatter":{"id":"22127","type":"BasicTickFormatter"},"ticker":{"id":"22090","type":"BasicTicker"}},"id":"22089","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]},"selected":{"id":"22119","type":"Selection"},"selection_policy":{"id":"22118","type":"UnionRenderers"}},"id":"22041","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"22117","type":"BasicTickFormatter"},"ticker":{"id":"22055","type":"BasicTicker"}},"id":"22054","type":"LinearAxis"},{"attributes":{"children":[[{"id":"22044","subtype":"Figure","type":"Plot"},0,0],[{"id":"22079","subtype":"Figure","type":"Plot"},0,1]]},"id":"22133","type":"GridBox"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22130","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"22131","type":"PolyAnnotation"},{"attributes":{"source":{"id":"22041","type":"ColumnDataSource"}},"id":"22078","type":"CDSView"},{"attributes":{"children":[{"id":"22135","type":"ToolbarBox"},{"id":"22133","type":"GridBox"}]},"id":"22136","type":"Column"},{"attributes":{"callback":null,"overlay":{"id":"22121","type":"PolyAnnotation"}},"id":"22065","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"22041","type":"ColumnDataSource"},"glyph":{"id":"22074","type":"Circle"},"hover_glyph":{"id":"22076","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"22075","type":"Circle"},"selection_glyph":null,"view":{"id":"22078","type":"CDSView"}},"id":"22077","type":"GlyphRenderer"},{"attributes":{},"id":"22090","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"22109","type":"Circle"},{"attributes":{"data_source":{"id":"22041","type":"ColumnDataSource"},"glyph":{"id":"22109","type":"Circle"},"hover_glyph":{"id":"22111","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"22110","type":"Circle"},"selection_glyph":null,"view":{"id":"22043","type":"CDSView"}},"id":"22112","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"22090","type":"BasicTicker"}},"id":"22093","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"22120","type":"BoxAnnotation"}},"id":"22064","type":"BoxSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22120","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"22046","type":"DataRange1d"},{"attributes":{"tools":[{"id":"22064","type":"BoxSelectTool"},{"id":"22065","type":"LassoSelectTool"},{"id":"22066","type":"HoverTool"},{"id":"22067","type":"HelpTool"},{"id":"22099","type":"BoxSelectTool"},{"id":"22100","type":"LassoSelectTool"},{"id":"22101","type":"HoverTool"},{"id":"22102","type":"HelpTool"}]},"id":"22134","type":"ProxyToolbar"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"22111","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22099","type":"BoxSelectTool"},{"id":"22100","type":"LassoSelectTool"},{"id":"22101","type":"HoverTool"},{"id":"22102","type":"HelpTool"}]},"id":"22103","type":"Toolbar"},{"attributes":{"filters":[{"id":"22042","type":"BooleanFilter"}],"source":{"id":"22041","type":"ColumnDataSource"}},"id":"22043","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"22095","type":"BasicTicker"}},"id":"22098","type":"Grid"},{"attributes":{},"id":"22119","type":"Selection"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"22076","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"22110","type":"Circle"},{"attributes":{"callback":null},"id":"22101","type":"HoverTool"},{"attributes":{"ticker":{"id":"22055","type":"BasicTicker"}},"id":"22058","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"22130","type":"BoxAnnotation"}},"id":"22099","type":"BoxSelectTool"},{"attributes":{"below":[{"id":"22089","type":"LinearAxis"}],"center":[{"id":"22093","type":"Grid"},{"id":"22098","type":"Grid"}],"left":[{"id":"22094","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"22112","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"22103","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22081","type":"DataRange1d"},"x_scale":{"id":"22085","type":"LinearScale"},"y_range":{"id":"22083","type":"DataRange1d"},"y_scale":{"id":"22087","type":"LinearScale"}},"id":"22079","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"22127","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"22075","type":"Circle"},{"attributes":{},"id":"22055","type":"BasicTicker"},{"attributes":{},"id":"22050","type":"LinearScale"},{"attributes":{"formatter":{"id":"22125","type":"BasicTickFormatter"},"ticker":{"id":"22095","type":"BasicTicker"}},"id":"22094","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"22131","type":"PolyAnnotation"}},"id":"22100","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"22083","type":"DataRange1d"},{"attributes":{},"id":"22067","type":"HelpTool"},{"attributes":{},"id":"22102","type":"HelpTool"},{"attributes":{},"id":"22118","type":"UnionRenderers"},{"attributes":{"booleans":[true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true]},"id":"22042","type":"BooleanFilter"},{"attributes":{},"id":"22115","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"22081","type":"DataRange1d"},{"attributes":{"callback":null},"id":"22066","type":"HoverTool"}],"root_ids":["22136"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"d2c87f94-db0c-4453-a65c-727268c2361e","roots":{"22136":"ed07b346-ae1c-498d-bf56-e29d5459661d"}}];
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
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();