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
      };var element = document.getElementById("99a45b24-a74f-46c8-8ca0-6083c3ae378d");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '99a45b24-a74f-46c8-8ca0-6083c3ae378d' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.1.min.js"];
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
                    
                  var docs_json = '{"2bacd2b6-6c71-49a4-ac82-dfc257c250c8":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28680","type":"PanTool"},{"id":"28681","type":"WheelZoomTool"},{"id":"28682","type":"BoxZoomTool"},{"id":"28683","type":"SaveTool"},{"id":"28684","type":"ResetTool"},{"id":"28685","type":"HelpTool"}]},"id":"28686","type":"Toolbar"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"28700","type":"Text"},{"attributes":{"callback":null},"id":"28662","type":"DataRange1d"},{"attributes":{"formatter":{"id":"28707","type":"BasicTickFormatter"},"ticker":{"id":"28671","type":"BasicTicker"}},"id":"28670","type":"LinearAxis"},{"attributes":{},"id":"28671","type":"BasicTicker"},{"attributes":{},"id":"28680","type":"PanTool"},{"attributes":{"text_align":"center","text_baseline":"middle","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"28699","type":"Text"},{"attributes":{"dimension":1,"ticker":{"id":"28676","type":"BasicTicker"},"visible":false},"id":"28679","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.5},"line_color":{"value":"white"},"q":{"field":"q"},"r":{"field":"r"}},"id":"28694","type":"HexTile"},{"attributes":{"data_source":{"id":"28698","type":"ColumnDataSource"},"glyph":{"id":"28699","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28700","type":"Text"},"selection_glyph":null,"view":{"id":"28702","type":"CDSView"}},"id":"28701","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"28671","type":"BasicTicker"},"visible":false},"id":"28674","type":"Grid"},{"attributes":{"source":{"id":"28698","type":"ColumnDataSource"}},"id":"28702","type":"CDSView"},{"attributes":{},"id":"28676","type":"BasicTicker"},{"attributes":{"text":""},"id":"28704","type":"Title"},{"attributes":{"formatter":{"id":"28705","type":"BasicTickFormatter"},"ticker":{"id":"28676","type":"BasicTicker"}},"id":"28675","type":"LinearAxis"},{"attributes":{},"id":"28705","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"fill_color":["firebrick","firebrick","firebrick","navy","navy","navy","navy"],"q":[0,0,0,-1,-1,1,1],"r":[0,-1,1,0,1,-1,0]},"selected":{"id":"28710","type":"Selection"},"selection_policy":{"id":"28711","type":"UnionRenderers"}},"id":"28693","type":"ColumnDataSource"},{"attributes":{},"id":"28707","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"}},"id":"28695","type":"HexTile"},{"attributes":{"source":{"id":"28693","type":"ColumnDataSource"}},"id":"28697","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28709","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"28664","type":"DataRange1d"},{"attributes":{},"id":"28710","type":"Selection"},{"attributes":{},"id":"28681","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"28693","type":"ColumnDataSource"},"glyph":{"id":"28694","type":"HexTile"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28695","type":"HexTile"},"selection_glyph":null,"view":{"id":"28697","type":"CDSView"}},"id":"28696","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"text":["(0, 0)","(0, -1)","(0, 1)","(-1, 0)","(-1, 1)","(1, -1)","(1, 0)"],"x":{"__ndarray__":"AAAAAAAAAACqTFjoerbrv6pMWOh6tus/qkxY6Hq2+7+qTFjoerbrv6pMWOh6tus/qkxY6Hq2+z8=","dtype":"float64","shape":[7]},"y":{"__ndarray__":"AAAAAAAAAIAAAAAAAAD4PwAAAAAAAPi/AAAAAAAAAIAAAAAAAAD4vwAAAAAAAPg/AAAAAAAAAIA=","dtype":"float64","shape":[7]}},"selected":{"id":"28712","type":"Selection"},"selection_policy":{"id":"28713","type":"UnionRenderers"}},"id":"28698","type":"ColumnDataSource"},{"attributes":{},"id":"28711","type":"UnionRenderers"},{"attributes":{"below":[{"id":"28670","type":"LinearAxis"}],"center":[{"id":"28674","type":"Grid"},{"id":"28679","type":"Grid"}],"left":[{"id":"28675","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28696","type":"GlyphRenderer"},{"id":"28701","type":"GlyphRenderer"}],"title":{"id":"28704","type":"Title"},"toolbar":{"id":"28686","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"28662","type":"DataRange1d"},"x_scale":{"id":"28666","type":"LinearScale"},"y_range":{"id":"28664","type":"DataRange1d"},"y_scale":{"id":"28668","type":"LinearScale"}},"id":"28661","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"28709","type":"BoxAnnotation"}},"id":"28682","type":"BoxZoomTool"},{"attributes":{},"id":"28712","type":"Selection"},{"attributes":{},"id":"28684","type":"ResetTool"},{"attributes":{},"id":"28713","type":"UnionRenderers"},{"attributes":{},"id":"28685","type":"HelpTool"},{"attributes":{},"id":"28683","type":"SaveTool"},{"attributes":{},"id":"28668","type":"LinearScale"},{"attributes":{},"id":"28666","type":"LinearScale"}],"root_ids":["28661"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"2bacd2b6-6c71-49a4-ac82-dfc257c250c8","roots":{"28661":"99a45b24-a74f-46c8-8ca0-6083c3ae378d"}}];
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