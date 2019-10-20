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
      };var element = document.getElementById("b3b539c8-084c-4fea-9899-6bed191300cd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b3b539c8-084c-4fea-9899-6bed191300cd' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4815c627-8061-448e-a25e-8239607150ca":{"roots":{"references":[{"attributes":{"source":{"id":"26690","type":"ColumnDataSource"}},"id":"26694","type":"CDSView"},{"attributes":{},"id":"26727","type":"Selection"},{"attributes":{},"id":"26676","type":"CategoricalTicker"},{"attributes":{"source":{"id":"26695","type":"ColumnDataSource"}},"id":"26699","type":"CDSView"},{"attributes":{"source":{"id":"26710","type":"ColumnDataSource"}},"id":"26714","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"26684","type":"Toolbar"},{"attributes":{"data_source":{"id":"26695","type":"ColumnDataSource"},"glyph":{"id":"26696","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26697","type":"VBar"},"selection_glyph":null,"view":{"id":"26699","type":"CDSView"}},"id":"26698","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f"]},"id":"26667","type":"FactorRange"},{"attributes":{},"id":"26723","type":"CategoricalTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"26711","type":"Rect"},{"attributes":{"source":{"id":"26715","type":"ColumnDataSource"}},"id":"26719","type":"CDSView"},{"attributes":{},"id":"26736","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"bottom":{"__ndarray__":"cCXdE1g7sj8WOh//aCzIvzqxx5zcqfA/aQJT0q4e8T9Sk5JzxI8AQMmnBtmqnP8/","dtype":"float64","shape":[6]},"top":{"__ndarray__":"KHaLArYa478PjX5uamXov+RHKy1pN9c/PrFNB8eo0T/26lym8iP2P/ZgrUDacvQ/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]},"selected":{"id":"26733","type":"Selection"},"selection_policy":{"id":"26732","type":"UnionRenderers"}},"id":"26700","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"DBthtQy3A8BHgKGDa04FwAkcPhk2wvm/XJO5Zgen/b9mN4zIPdXhv4TBtbfgaey/","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"KHaLArYa478PjX5uamXov+RHKy1pN9c/PrFNB8eo0T/26lym8iP2P/ZgrUDacvQ/","dtype":"float64","shape":[6]}},"selected":{"id":"26729","type":"Selection"},"selection_policy":{"id":"26728","type":"UnionRenderers"}},"id":"26690","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"26692","type":"Segment"},{"attributes":{"callback":null,"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"+ojvgUYfBEBGOF6P9n4BQKmEFyRQNA1AxHo+g5+5DkDZ0gVOuXkSQNAID7/9CRNA","dtype":"float64","shape":[6]}},"selected":{"id":"26737","type":"Selection"},"selection_policy":{"id":"26736","type":"UnionRenderers"}},"id":"26710","type":"ColumnDataSource"},{"attributes":{},"id":"26735","type":"Selection"},{"attributes":{},"id":"26680","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"bottom":{"__ndarray__":"3i3FNJ275D+mFTH8FyjgP1AbpuOP2Po/VxQC81rk+z9eIrrWKWwFQA5x2amwxgVA","dtype":"float64","shape":[6]},"top":{"__ndarray__":"cCXdE1g7sj8WOh//aCzIvzqxx5zcqfA/aQJT0q4e8T9Sk5JzxI8AQMmnBtmqnP8/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]},"selected":{"id":"26731","type":"Selection"},"selection_policy":{"id":"26730","type":"UnionRenderers"}},"id":"26695","type":"ColumnDataSource"},{"attributes":{},"id":"26726","type":"UnionRenderers"},{"attributes":{},"id":"26732","type":"UnionRenderers"},{"attributes":{},"id":"26739","type":"Selection"},{"attributes":{"callback":null,"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"+ojvgUYfBEBGOF6P9n4BQKmEFyRQNA1AxHo+g5+5DkDZ0gVOuXkSQNAID7/9CRNA","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"3i3FNJ275D+mFTH8FyjgP1AbpuOP2Po/VxQC81rk+z9eIrrWKWwFQA5x2amwxgVA","dtype":"float64","shape":[6]}},"selected":{"id":"26727","type":"Selection"},"selection_policy":{"id":"26726","type":"UnionRenderers"}},"id":"26685","type":"ColumnDataSource"},{"attributes":{},"id":"26738","type":"UnionRenderers"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":2},"plot":{"id":"26666","subtype":"Figure","type":"Plot"},"ticker":{"id":"26680","type":"BasicTicker"}},"id":"26683","type":"Grid"},{"attributes":{"data_source":{"id":"26705","type":"ColumnDataSource"},"glyph":{"id":"26706","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26707","type":"Rect"},"selection_glyph":null,"view":{"id":"26709","type":"CDSView"}},"id":"26708","type":"GlyphRenderer"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"26691","type":"Segment"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"26702","type":"VBar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"26706","type":"Rect"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#3B8686"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"26701","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"26707","type":"Rect"},{"attributes":{},"id":"26730","type":"UnionRenderers"},{"attributes":{},"id":"26734","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"26700","type":"ColumnDataSource"},"glyph":{"id":"26701","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26702","type":"VBar"},"selection_glyph":null,"view":{"id":"26704","type":"CDSView"}},"id":"26703","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"26685","type":"ColumnDataSource"},"glyph":{"id":"26686","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26687","type":"Segment"},"selection_glyph":null,"view":{"id":"26689","type":"CDSView"}},"id":"26688","type":"GlyphRenderer"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"26697","type":"VBar"},{"attributes":{},"id":"26729","type":"Selection"},{"attributes":{},"id":"26673","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":["a","a","a","a","b","c","c","e","e","f"],"y":[2.559447392262023,2.8566687725798587,-2.856672425929799,-2.4780285603719903,-2.6650054042372124,-1.82781219147458,3.91778325349665,-1.2921181916721025,4.720817007450901,-1.3499829202151803]},"selected":{"id":"26739","type":"Selection"},"selection_policy":{"id":"26738","type":"UnionRenderers"}},"id":"26715","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"26710","type":"ColumnDataSource"},"glyph":{"id":"26711","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26712","type":"Rect"},"selection_glyph":null,"view":{"id":"26714","type":"CDSView"}},"id":"26713","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"26723","type":"CategoricalTickFormatter"},"major_label_text_font_size":{"value":"12pt"},"plot":{"id":"26666","subtype":"Figure","type":"Plot"},"ticker":{"id":"26676","type":"CategoricalTicker"}},"id":"26675","type":"CategoricalAxis"},{"attributes":{"source":{"id":"26685","type":"ColumnDataSource"}},"id":"26689","type":"CDSView"},{"attributes":{},"id":"26733","type":"Selection"},{"attributes":{"plot":null,"text":""},"id":"26721","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"26717","type":"Circle"},{"attributes":{},"id":"26737","type":"Selection"},{"attributes":{"background_fill_color":{"value":"#efefef"},"below":[{"id":"26675","type":"CategoricalAxis"}],"left":[{"id":"26679","type":"LinearAxis"}],"renderers":[{"id":"26675","type":"CategoricalAxis"},{"id":"26678","type":"Grid"},{"id":"26679","type":"LinearAxis"},{"id":"26683","type":"Grid"},{"id":"26688","type":"GlyphRenderer"},{"id":"26693","type":"GlyphRenderer"},{"id":"26698","type":"GlyphRenderer"},{"id":"26703","type":"GlyphRenderer"},{"id":"26708","type":"GlyphRenderer"},{"id":"26713","type":"GlyphRenderer"},{"id":"26718","type":"GlyphRenderer"}],"title":{"id":"26721","type":"Title"},"toolbar":{"id":"26684","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"26667","type":"FactorRange"},"x_scale":{"id":"26671","type":"CategoricalScale"},"y_range":{"id":"26669","type":"DataRange1d"},"y_scale":{"id":"26673","type":"LinearScale"}},"id":"26666","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"26705","type":"ColumnDataSource"}},"id":"26709","type":"CDSView"},{"attributes":{"formatter":{"id":"26725","type":"BasicTickFormatter"},"plot":{"id":"26666","subtype":"Figure","type":"Plot"},"ticker":{"id":"26680","type":"BasicTicker"}},"id":"26679","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"DBthtQy3A8BHgKGDa04FwAkcPhk2wvm/XJO5Zgen/b9mN4zIPdXhv4TBtbfgaey/","dtype":"float64","shape":[6]}},"selected":{"id":"26735","type":"Selection"},"selection_policy":{"id":"26734","type":"UnionRenderers"}},"id":"26705","type":"ColumnDataSource"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"26686","type":"Segment"},{"attributes":{"grid_line_color":{"value":null},"grid_line_width":{"value":2},"plot":{"id":"26666","subtype":"Figure","type":"Plot"},"ticker":{"id":"26676","type":"CategoricalTicker"}},"id":"26678","type":"Grid"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#E08E79"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"26696","type":"VBar"},{"attributes":{},"id":"26728","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#F38630"},"line_color":{"value":"#F38630"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"26716","type":"Circle"},{"attributes":{},"id":"26671","type":"CategoricalScale"},{"attributes":{"data_source":{"id":"26715","type":"ColumnDataSource"},"glyph":{"id":"26716","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26717","type":"Circle"},"selection_glyph":null,"view":{"id":"26719","type":"CDSView"}},"id":"26718","type":"GlyphRenderer"},{"attributes":{"source":{"id":"26700","type":"ColumnDataSource"}},"id":"26704","type":"CDSView"},{"attributes":{},"id":"26731","type":"Selection"},{"attributes":{"data_source":{"id":"26690","type":"ColumnDataSource"},"glyph":{"id":"26691","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26692","type":"Segment"},"selection_glyph":null,"view":{"id":"26694","type":"CDSView"}},"id":"26693","type":"GlyphRenderer"},{"attributes":{},"id":"26725","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"26669","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"26712","type":"Rect"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"26687","type":"Segment"}],"root_ids":["26666"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"4815c627-8061-448e-a25e-8239607150ca","roots":{"26666":"b3b539c8-084c-4fea-9899-6bed191300cd"}}];
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