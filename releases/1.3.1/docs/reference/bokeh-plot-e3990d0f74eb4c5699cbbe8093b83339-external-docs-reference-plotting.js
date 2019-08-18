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
      };var element = document.getElementById("d9094102-6361-48bd-844a-0959b298fc32");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'd9094102-6361-48bd-844a-0959b298fc32' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"0666d969-8bc8-4818-aed6-32a8e3fccdb6":{"roots":{"references":[{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"16483","type":"Quad"},{"attributes":{},"id":"16456","type":"LinearScale"},{"attributes":{"callback":null},"id":"16452","type":"DataRange1d"},{"attributes":{"data_source":{"id":"16481","type":"ColumnDataSource"},"glyph":{"id":"16482","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16483","type":"Quad"},"selection_glyph":null,"view":{"id":"16485","type":"CDSView"}},"id":"16484","type":"GlyphRenderer"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"16482","type":"Quad"},{"attributes":{"source":{"id":"16481","type":"ColumnDataSource"}},"id":"16485","type":"CDSView"},{"attributes":{"below":[{"id":"16458","type":"LinearAxis"}],"center":[{"id":"16462","type":"Grid"},{"id":"16467","type":"Grid"}],"left":[{"id":"16463","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16484","type":"GlyphRenderer"}],"title":{"id":"16487","type":"Title"},"toolbar":{"id":"16474","type":"Toolbar"},"x_range":{"id":"16450","type":"DataRange1d"},"x_scale":{"id":"16454","type":"LinearScale"},"y_range":{"id":"16452","type":"DataRange1d"},"y_scale":{"id":"16456","type":"LinearScale"}},"id":"16449","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"16454","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16468","type":"PanTool"},{"id":"16469","type":"WheelZoomTool"},{"id":"16470","type":"BoxZoomTool"},{"id":"16471","type":"SaveTool"},{"id":"16472","type":"ResetTool"},{"id":"16473","type":"HelpTool"}]},"id":"16474","type":"Toolbar"},{"attributes":{},"id":"16468","type":"PanTool"},{"attributes":{"formatter":{"id":"16490","type":"BasicTickFormatter"},"ticker":{"id":"16459","type":"BasicTicker"}},"id":"16458","type":"LinearAxis"},{"attributes":{"text":""},"id":"16487","type":"Title"},{"attributes":{},"id":"16469","type":"WheelZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"16464","type":"BasicTicker"}},"id":"16467","type":"Grid"},{"attributes":{},"id":"16488","type":"BasicTickFormatter"},{"attributes":{},"id":"16464","type":"BasicTicker"},{"attributes":{"overlay":{"id":"16492","type":"BoxAnnotation"}},"id":"16470","type":"BoxZoomTool"},{"attributes":{},"id":"16459","type":"BasicTicker"},{"attributes":{},"id":"16490","type":"BasicTickFormatter"},{"attributes":{},"id":"16471","type":"SaveTool"},{"attributes":{"ticker":{"id":"16459","type":"BasicTicker"}},"id":"16462","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16492","type":"BoxAnnotation"},{"attributes":{},"id":"16472","type":"ResetTool"},{"attributes":{"formatter":{"id":"16488","type":"BasicTickFormatter"},"ticker":{"id":"16464","type":"BasicTicker"}},"id":"16463","type":"LinearAxis"},{"attributes":{},"id":"16493","type":"Selection"},{"attributes":{"callback":null,"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]},"selected":{"id":"16493","type":"Selection"},"selection_policy":{"id":"16494","type":"UnionRenderers"}},"id":"16481","type":"ColumnDataSource"},{"attributes":{},"id":"16473","type":"HelpTool"},{"attributes":{"callback":null},"id":"16450","type":"DataRange1d"},{"attributes":{},"id":"16494","type":"UnionRenderers"}],"root_ids":["16449"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"0666d969-8bc8-4818-aed6-32a8e3fccdb6","roots":{"16449":"d9094102-6361-48bd-844a-0959b298fc32"}}];
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