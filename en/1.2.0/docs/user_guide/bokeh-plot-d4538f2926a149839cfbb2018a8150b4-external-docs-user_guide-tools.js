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
      };var element = document.getElementById("71e45dc6-77ba-4114-92ad-c843b21cb671");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '71e45dc6-77ba-4114-92ad-c843b21cb671' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
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
                    
                  var docs_json = '{"31a1b62d-508a-4c1c-8e1d-f214a0742b78":{"roots":{"references":[{"attributes":{"callback":null,"data":{"desc":["A","b","C","d","E"],"fonts":["&lt;i&gt;italics&lt;/i&gt;","&lt;pre&gt;pre&lt;/pre&gt;","&lt;b&gt;bold&lt;/b&gt;","&lt;small&gt;small&lt;/small&gt;","&lt;del&gt;del&lt;/del&gt;"],"imgs":["https://bokeh.pydata.org/static/snake.jpg","https://bokeh.pydata.org/static/snake2.png","https://bokeh.pydata.org/static/snake3D.png","https://bokeh.pydata.org/static/snake4_TheRevenge.png","https://bokeh.pydata.org/static/snakebite.jpg"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"37131","type":"Selection"},"selection_policy":{"id":"37132","type":"UnionRenderers"}},"id":"37084","type":"ColumnDataSource"},{"attributes":{},"id":"37132","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"37127","type":"BasicTickFormatter"},"ticker":{"id":"37102","type":"BasicTicker"}},"id":"37101","type":"LinearAxis"},{"attributes":{"callback":null},"id":"37090","type":"DataRange1d"},{"attributes":{"source":{"id":"37084","type":"ColumnDataSource"}},"id":"37125","type":"CDSView"},{"attributes":{},"id":"37109","type":"SaveTool"},{"attributes":{"below":[{"id":"37096","type":"LinearAxis"}],"center":[{"id":"37100","type":"Grid"},{"id":"37105","type":"Grid"}],"left":[{"id":"37101","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"37124","type":"GlyphRenderer"}],"title":{"id":"37086","type":"Title"},"toolbar":{"id":"37113","type":"Toolbar"},"x_range":{"id":"37088","type":"DataRange1d"},"x_scale":{"id":"37092","type":"LinearScale"},"y_range":{"id":"37090","type":"DataRange1d"},"y_scale":{"id":"37094","type":"LinearScale"}},"id":"37085","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"37102","type":"BasicTicker"},{"attributes":{},"id":"37094","type":"LinearScale"},{"attributes":{},"id":"37107","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"37106","type":"PanTool"},{"id":"37107","type":"WheelZoomTool"},{"id":"37108","type":"BoxZoomTool"},{"id":"37109","type":"SaveTool"},{"id":"37110","type":"ResetTool"},{"id":"37111","type":"HelpTool"},{"id":"37112","type":"HoverTool"}]},"id":"37113","type":"Toolbar"},{"attributes":{},"id":"37092","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"37123","type":"Circle"},{"attributes":{"data_source":{"id":"37084","type":"ColumnDataSource"},"glyph":{"id":"37122","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37123","type":"Circle"},"selection_glyph":null,"view":{"id":"37125","type":"CDSView"}},"id":"37124","type":"GlyphRenderer"},{"attributes":{"callback":null,"tooltips":"\\n    &lt;div&gt;\\n        &lt;div&gt;\\n            &lt;img\\n                src=\\"@imgs\\" height=\\"42\\" alt=\\"@imgs\\" width=\\"42\\"\\n                style=\\"float: left; margin: 0px 15px 15px 0px;\\"\\n                border=\\"2\\"\\n            &gt;&lt;/img&gt;\\n        &lt;/div&gt;\\n        &lt;div&gt;\\n            &lt;span style=\\"font-size: 17px; font-weight: bold;\\"&gt;@desc&lt;/span&gt;\\n            &lt;span style=\\"font-size: 15px; color: #966;\\"&gt;[$index]&lt;/span&gt;\\n        &lt;/div&gt;\\n        &lt;div&gt;\\n            &lt;span&gt;@fonts{safe}&lt;/span&gt;\\n        &lt;/div&gt;\\n        &lt;div&gt;\\n            &lt;span style=\\"font-size: 15px;\\"&gt;Location&lt;/span&gt;\\n            &lt;span style=\\"font-size: 10px; color: #696;\\"&gt;($x, $y)&lt;/span&gt;\\n        &lt;/div&gt;\\n    &lt;/div&gt;\\n"},"id":"37112","type":"HoverTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"37122","type":"Circle"},{"attributes":{},"id":"37129","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"37133","type":"BoxAnnotation"},{"attributes":{},"id":"37106","type":"PanTool"},{"attributes":{"text":"Mouse over the dots"},"id":"37086","type":"Title"},{"attributes":{"dimension":1,"ticker":{"id":"37102","type":"BasicTicker"}},"id":"37105","type":"Grid"},{"attributes":{"ticker":{"id":"37097","type":"BasicTicker"}},"id":"37100","type":"Grid"},{"attributes":{},"id":"37111","type":"HelpTool"},{"attributes":{"formatter":{"id":"37129","type":"BasicTickFormatter"},"ticker":{"id":"37097","type":"BasicTicker"}},"id":"37096","type":"LinearAxis"},{"attributes":{"callback":null},"id":"37088","type":"DataRange1d"},{"attributes":{},"id":"37110","type":"ResetTool"},{"attributes":{},"id":"37127","type":"BasicTickFormatter"},{"attributes":{},"id":"37131","type":"Selection"},{"attributes":{},"id":"37097","type":"BasicTicker"},{"attributes":{"overlay":{"id":"37133","type":"BoxAnnotation"}},"id":"37108","type":"BoxZoomTool"}],"root_ids":["37085"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"31a1b62d-508a-4c1c-8e1d-f214a0742b78","roots":{"37085":"71e45dc6-77ba-4114-92ad-c843b21cb671"}}];
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