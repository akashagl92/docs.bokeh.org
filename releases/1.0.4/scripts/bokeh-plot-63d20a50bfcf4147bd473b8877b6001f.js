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
      };var element = document.getElementById("20a92836-bf38-407b-87cc-5801f76fc7e1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '20a92836-bf38-407b-87cc-5801f76fc7e1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"42c8f2b4-eabb-4e26-a274-55bb2fa3bf0d":{"roots":{"references":[{"attributes":{"callback":null,"data":{"x":["a","a","b","b","b","c","d","d","d","d","d","d","d","e","e","e","f"],"y":[-3.2825989163886597,-3.106376991710734,3.224474896691776,2.933312861552007,3.0059265738392735,3.8405035756190116,3.9933406706763708,4.1350726237436275,3.5004228588556323,-1.602596378960425,-1.8310824035390327,-1.7585058821342625,-1.5186480810886,-0.9172594248748775,5.02571466269792,4.831790975467653,-1.0640109489613039]},"selected":{"id":"26742","type":"Selection"},"selection_policy":{"id":"26741","type":"UnionRenderers"}},"id":"26718","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"26687","type":"Toolbar"},{"attributes":{},"id":"26738","type":"Selection"},{"attributes":{"callback":null},"id":"26672","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"wDtqGUnlA0CgO25qCBgHQN79oaV6Rw1AC4jsbeDwC0AR5RUqqAMTQGnxn+So0hJA","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"WnCJeOuw4j9sIwF6aNvoP6/TZmlgyvo/XIIIFn4w+j8pEcp5gmkFQDbR/32FRwVA","dtype":"float64","shape":[6]}},"selected":{"id":"26730","type":"Selection"},"selection_policy":{"id":"26729","type":"UnionRenderers"}},"id":"26688","type":"ColumnDataSource"},{"attributes":{},"id":"26739","type":"UnionRenderers"},{"attributes":{},"id":"26679","type":"CategoricalTicker"},{"attributes":{"plot":null,"text":""},"id":"26723","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"26720","type":"Circle"},{"attributes":{"data_source":{"id":"26718","type":"ColumnDataSource"},"glyph":{"id":"26719","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26720","type":"Circle"},"selection_glyph":null,"view":{"id":"26722","type":"CDSView"}},"id":"26721","type":"GlyphRenderer"},{"attributes":{},"id":"26683","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"26709","type":"Rect"},{"attributes":{},"id":"26733","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"26727","type":"CategoricalTickFormatter"},"major_label_text_font_size":{"value":"12pt"},"plot":{"id":"26669","subtype":"Figure","type":"Plot"},"ticker":{"id":"26679","type":"CategoricalTicker"}},"id":"26678","type":"CategoricalAxis"},{"attributes":{},"id":"26674","type":"CategoricalScale"},{"attributes":{"data_source":{"id":"26708","type":"ColumnDataSource"},"glyph":{"id":"26709","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26710","type":"Rect"},"selection_glyph":null,"view":{"id":"26712","type":"CDSView"}},"id":"26711","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"26714","type":"Rect"},{"attributes":{"grid_line_color":{"value":null},"grid_line_width":{"value":2},"plot":{"id":"26669","subtype":"Figure","type":"Plot"},"ticker":{"id":"26679","type":"CategoricalTicker"}},"id":"26681","type":"Grid"},{"attributes":{},"id":"26740","type":"Selection"},{"attributes":{"callback":null,"data":{"bottom":{"__ndarray__":"qZc15nDKs7/sCJDq9ZyRP7TmVc1SqvA/cl10kgX98T9rinE9HP//P+j7BIjO5P0/","dtype":"float64","shape":[6]},"top":{"__ndarray__":"bYXLEPX+579Luc6lvSfkv52OTUufctY/KzpL8/CT2T+xK2fQR6v0PxpMb47yr/M/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]},"selected":{"id":"26736","type":"Selection"},"selection_policy":{"id":"26735","type":"UnionRenderers"}},"id":"26703","type":"ColumnDataSource"},{"attributes":{},"id":"26736","type":"Selection"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"26700","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#F38630"},"line_color":{"value":"#F38630"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"26719","type":"Circle"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f"]},"id":"26670","type":"FactorRange"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":2},"plot":{"id":"26669","subtype":"Figure","type":"Plot"},"ticker":{"id":"26683","type":"BasicTicker"}},"id":"26686","type":"Grid"},{"attributes":{"data_source":{"id":"26703","type":"ColumnDataSource"},"glyph":{"id":"26704","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26705","type":"VBar"},"selection_glyph":null,"view":{"id":"26707","type":"CDSView"}},"id":"26706","type":"GlyphRenderer"},{"attributes":{},"id":"26729","type":"UnionRenderers"},{"attributes":{},"id":"26734","type":"Selection"},{"attributes":{"source":{"id":"26693","type":"ColumnDataSource"}},"id":"26697","type":"CDSView"},{"attributes":{},"id":"26737","type":"UnionRenderers"},{"attributes":{},"id":"26725","type":"BasicTickFormatter"},{"attributes":{},"id":"26676","type":"LinearScale"},{"attributes":{},"id":"26727","type":"CategoricalTickFormatter"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#3B8686"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"26704","type":"VBar"},{"attributes":{"data_source":{"id":"26713","type":"ColumnDataSource"},"glyph":{"id":"26714","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26715","type":"Rect"},"selection_glyph":null,"view":{"id":"26717","type":"CDSView"}},"id":"26716","type":"GlyphRenderer"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"26694","type":"Segment"},{"attributes":{},"id":"26731","type":"UnionRenderers"},{"attributes":{},"id":"26730","type":"Selection"},{"attributes":{"formatter":{"id":"26725","type":"BasicTickFormatter"},"plot":{"id":"26669","subtype":"Figure","type":"Plot"},"ticker":{"id":"26683","type":"BasicTicker"}},"id":"26682","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"26715","type":"Rect"},{"attributes":{"source":{"id":"26713","type":"ColumnDataSource"}},"id":"26717","type":"CDSView"},{"attributes":{"source":{"id":"26698","type":"ColumnDataSource"}},"id":"26702","type":"CDSView"},{"attributes":{"callback":null,"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"hr2yd7EBBsDdBOFCOVUFwGh01LunkPW/L7/9iEZM97+CjLjIpyDpv8Rq0itkPe2/","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"bYXLEPX+579Luc6lvSfkv52OTUufctY/KzpL8/CT2T+xK2fQR6v0PxpMb47yr/M/","dtype":"float64","shape":[6]}},"selected":{"id":"26732","type":"Selection"},"selection_policy":{"id":"26731","type":"UnionRenderers"}},"id":"26693","type":"ColumnDataSource"},{"attributes":{"source":{"id":"26688","type":"ColumnDataSource"}},"id":"26692","type":"CDSView"},{"attributes":{"data_source":{"id":"26693","type":"ColumnDataSource"},"glyph":{"id":"26694","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26695","type":"Segment"},"selection_glyph":null,"view":{"id":"26697","type":"CDSView"}},"id":"26696","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"hr2yd7EBBsDdBOFCOVUFwGh01LunkPW/L7/9iEZM97+CjLjIpyDpv8Rq0itkPe2/","dtype":"float64","shape":[6]}},"selected":{"id":"26738","type":"Selection"},"selection_policy":{"id":"26737","type":"UnionRenderers"}},"id":"26708","type":"ColumnDataSource"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"26705","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"26710","type":"Rect"},{"attributes":{"callback":null,"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"wDtqGUnlA0CgO25qCBgHQN79oaV6Rw1AC4jsbeDwC0AR5RUqqAMTQGnxn+So0hJA","dtype":"float64","shape":[6]}},"selected":{"id":"26740","type":"Selection"},"selection_policy":{"id":"26739","type":"UnionRenderers"}},"id":"26713","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"26695","type":"Segment"},{"attributes":{"callback":null,"data":{"bottom":{"__ndarray__":"WnCJeOuw4j9sIwF6aNvoP6/TZmlgyvo/XIIIFn4w+j8pEcp5gmkFQDbR/32FRwVA","dtype":"float64","shape":[6]},"top":{"__ndarray__":"qZc15nDKs7/sCJDq9ZyRP7TmVc1SqvA/cl10kgX98T9rinE9HP//P+j7BIjO5P0/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]},"selected":{"id":"26734","type":"Selection"},"selection_policy":{"id":"26733","type":"UnionRenderers"}},"id":"26698","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"26698","type":"ColumnDataSource"},"glyph":{"id":"26699","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26700","type":"VBar"},"selection_glyph":null,"view":{"id":"26702","type":"CDSView"}},"id":"26701","type":"GlyphRenderer"},{"attributes":{"source":{"id":"26703","type":"ColumnDataSource"}},"id":"26707","type":"CDSView"},{"attributes":{},"id":"26741","type":"UnionRenderers"},{"attributes":{},"id":"26735","type":"UnionRenderers"},{"attributes":{},"id":"26742","type":"Selection"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"26689","type":"Segment"},{"attributes":{},"id":"26732","type":"Selection"},{"attributes":{"source":{"id":"26718","type":"ColumnDataSource"}},"id":"26722","type":"CDSView"},{"attributes":{"data_source":{"id":"26688","type":"ColumnDataSource"},"glyph":{"id":"26689","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26690","type":"Segment"},"selection_glyph":null,"view":{"id":"26692","type":"CDSView"}},"id":"26691","type":"GlyphRenderer"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#E08E79"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"26699","type":"VBar"},{"attributes":{"background_fill_color":{"value":"#efefef"},"below":[{"id":"26678","type":"CategoricalAxis"}],"left":[{"id":"26682","type":"LinearAxis"}],"renderers":[{"id":"26678","type":"CategoricalAxis"},{"id":"26681","type":"Grid"},{"id":"26682","type":"LinearAxis"},{"id":"26686","type":"Grid"},{"id":"26691","type":"GlyphRenderer"},{"id":"26696","type":"GlyphRenderer"},{"id":"26701","type":"GlyphRenderer"},{"id":"26706","type":"GlyphRenderer"},{"id":"26711","type":"GlyphRenderer"},{"id":"26716","type":"GlyphRenderer"},{"id":"26721","type":"GlyphRenderer"}],"title":{"id":"26723","type":"Title"},"toolbar":{"id":"26687","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"26670","type":"FactorRange"},"x_scale":{"id":"26674","type":"CategoricalScale"},"y_range":{"id":"26672","type":"DataRange1d"},"y_scale":{"id":"26676","type":"LinearScale"}},"id":"26669","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"26708","type":"ColumnDataSource"}},"id":"26712","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"26690","type":"Segment"}],"root_ids":["26669"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"42c8f2b4-eabb-4e26-a274-55bb2fa3bf0d","roots":{"26669":"20a92836-bf38-407b-87cc-5801f76fc7e1"}}];
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