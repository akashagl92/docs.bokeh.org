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
      };var element = document.getElementById("afb87968-a964-4987-9b89-7f129b32e3a0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'afb87968-a964-4987-9b89-7f129b32e3a0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"fdce620d-b928-4ca6-b213-be1bec4f29b9":{"roots":{"references":[{"attributes":{},"id":"18227","type":"LinearScale"},{"attributes":{},"id":"18242","type":"SaveTool"},{"attributes":{},"id":"18263","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"18229","type":"LinearAxis"}],"left":[{"id":"18234","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"18229","type":"LinearAxis"},{"id":"18233","type":"Grid"},{"id":"18234","type":"LinearAxis"},{"id":"18238","type":"Grid"},{"id":"18248","type":"BoxAnnotation"},{"id":"18259","type":"GlyphRenderer"}],"title":{"id":"18218","type":"Title"},"toolbar":{"id":"18246","type":"Toolbar"},"x_range":{"id":"18221","type":"DataRange1d"},"x_scale":{"id":"18225","type":"LinearScale"},"y_range":{"id":"18223","type":"DataRange1d"},"y_scale":{"id":"18227","type":"LinearScale"}},"id":"18219","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"renderers":"auto","tooltips":"\\n    &lt;div&gt;\\n        &lt;div&gt;\\n            &lt;img\\n                src=\\"@imgs\\" height=\\"42\\" alt=\\"@imgs\\" width=\\"42\\"\\n                style=\\"float: left; margin: 0px 15px 15px 0px;\\"\\n                border=\\"2\\"\\n            &gt;&lt;/img&gt;\\n        &lt;/div&gt;\\n        &lt;div&gt;\\n            &lt;span style=\\"font-size: 17px; font-weight: bold;\\"&gt;@desc&lt;/span&gt;\\n            &lt;span style=\\"font-size: 15px; color: #966;\\"&gt;[$index]&lt;/span&gt;\\n        &lt;/div&gt;\\n        &lt;div&gt;\\n            &lt;span&gt;@fonts{safe}&lt;/span&gt;\\n        &lt;/div&gt;\\n        &lt;div&gt;\\n            &lt;span style=\\"font-size: 15px;\\"&gt;Location&lt;/span&gt;\\n            &lt;span style=\\"font-size: 10px; color: #696;\\"&gt;($x, $y)&lt;/span&gt;\\n        &lt;/div&gt;\\n    &lt;/div&gt;\\n"},"id":"18245","type":"HoverTool"},{"attributes":{"callback":null},"id":"18221","type":"DataRange1d"},{"attributes":{"source":{"id":"18217","type":"ColumnDataSource"}},"id":"18260","type":"CDSView"},{"attributes":{"formatter":{"id":"18265","type":"BasicTickFormatter"},"plot":{"id":"18219","subtype":"Figure","type":"Plot"},"ticker":{"id":"18235","type":"BasicTicker"}},"id":"18234","type":"LinearAxis"},{"attributes":{},"id":"18239","type":"PanTool"},{"attributes":{},"id":"18225","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18239","type":"PanTool"},{"id":"18240","type":"WheelZoomTool"},{"id":"18241","type":"BoxZoomTool"},{"id":"18242","type":"SaveTool"},{"id":"18243","type":"ResetTool"},{"id":"18244","type":"HelpTool"},{"id":"18245","type":"HoverTool"}]},"id":"18246","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18248","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"18219","subtype":"Figure","type":"Plot"},"ticker":{"id":"18230","type":"BasicTicker"}},"id":"18233","type":"Grid"},{"attributes":{},"id":"18268","type":"UnionRenderers"},{"attributes":{},"id":"18265","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"18217","type":"ColumnDataSource"},"glyph":{"id":"18257","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18258","type":"Circle"},"selection_glyph":null,"view":{"id":"18260","type":"CDSView"}},"id":"18259","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"18219","subtype":"Figure","type":"Plot"},"ticker":{"id":"18235","type":"BasicTicker"}},"id":"18238","type":"Grid"},{"attributes":{},"id":"18243","type":"ResetTool"},{"attributes":{},"id":"18235","type":"BasicTicker"},{"attributes":{"formatter":{"id":"18263","type":"BasicTickFormatter"},"plot":{"id":"18219","subtype":"Figure","type":"Plot"},"ticker":{"id":"18230","type":"BasicTicker"}},"id":"18229","type":"LinearAxis"},{"attributes":{},"id":"18230","type":"BasicTicker"},{"attributes":{},"id":"18244","type":"HelpTool"},{"attributes":{},"id":"18240","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":"Mouse over the dots"},"id":"18218","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"18257","type":"Circle"},{"attributes":{"overlay":{"id":"18248","type":"BoxAnnotation"}},"id":"18241","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"18223","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"18258","type":"Circle"},{"attributes":{},"id":"18267","type":"Selection"},{"attributes":{"callback":null,"data":{"desc":["A","b","C","d","E"],"fonts":["&lt;i&gt;italics&lt;/i&gt;","&lt;pre&gt;pre&lt;/pre&gt;","&lt;b&gt;bold&lt;/b&gt;","&lt;small&gt;small&lt;/small&gt;","&lt;del&gt;del&lt;/del&gt;"],"imgs":["https://bokeh.pydata.org/static/snake.jpg","https://bokeh.pydata.org/static/snake2.png","https://bokeh.pydata.org/static/snake3D.png","https://bokeh.pydata.org/static/snake4_TheRevenge.png","https://bokeh.pydata.org/static/snakebite.jpg"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"18267","type":"Selection"},"selection_policy":{"id":"18268","type":"UnionRenderers"}},"id":"18217","type":"ColumnDataSource"}],"root_ids":["18219"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"fdce620d-b928-4ca6-b213-be1bec4f29b9","roots":{"18219":"afb87968-a964-4987-9b89-7f129b32e3a0"}}];
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