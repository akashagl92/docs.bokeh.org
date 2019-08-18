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
      };var element = document.getElementById("69b69ae2-ebff-4d14-94a4-e8df7ee3ad92");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '69b69ae2-ebff-4d14-94a4-e8df7ee3ad92' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"4ea73ad5-948d-418a-b702-7409253197e8":{"roots":{"references":[{"attributes":{"data_source":{"id":"26689","type":"ColumnDataSource"},"glyph":{"id":"26690","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26691","type":"Segment"},"selection_glyph":null,"view":{"id":"26693","type":"CDSView"}},"id":"26692","type":"GlyphRenderer"},{"attributes":{"source":{"id":"26689","type":"ColumnDataSource"}},"id":"26693","type":"CDSView"},{"attributes":{"callback":null,"data":{"bottom":{"__ndarray__":"izk59NpJ4j+qBv+238znP3pBfd2bP/s/2pwhS18A/T/UFbp1rjsFQFyEKZC7TAZA","dtype":"float64","shape":[6]},"top":{"__ndarray__":"ns/5HiENqL/WhlSQhuGuPx+ScbLY5+8/SnzszyU98T+XOuIdx1sAQL5ZQEK8sP8/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]},"selected":{"id":"26729","type":"Selection"},"selection_policy":{"id":"26730","type":"UnionRenderers"}},"id":"26694","type":"ColumnDataSource"},{"attributes":{},"id":"26727","type":"Selection"},{"attributes":{},"id":"26728","type":"UnionRenderers"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#E08E79"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"26695","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"26683","type":"Toolbar"},{"attributes":{"source":{"id":"26709","type":"ColumnDataSource"}},"id":"26713","type":"CDSView"},{"attributes":{},"id":"26672","type":"LinearScale"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"26696","type":"VBar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"26705","type":"Rect"},{"attributes":{"data_source":{"id":"26699","type":"ColumnDataSource"},"glyph":{"id":"26700","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26701","type":"VBar"},"selection_glyph":null,"view":{"id":"26703","type":"CDSView"}},"id":"26702","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"26694","type":"ColumnDataSource"},"glyph":{"id":"26695","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26696","type":"VBar"},"selection_glyph":null,"view":{"id":"26698","type":"CDSView"}},"id":"26697","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"26704","type":"ColumnDataSource"},"glyph":{"id":"26705","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26706","type":"Rect"},"selection_glyph":null,"view":{"id":"26708","type":"CDSView"}},"id":"26707","type":"GlyphRenderer"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":2},"plot":{"id":"26665","subtype":"Figure","type":"Plot"},"ticker":{"id":"26679","type":"BasicTicker"}},"id":"26682","type":"Grid"},{"attributes":{"source":{"id":"26684","type":"ColumnDataSource"}},"id":"26688","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"m4sitTsvBMCBCz0NKR0DwMg22d/mZfq/9N2GeSuU+L9IDmtQzJzbv9iydCHxK+C/","dtype":"float64","shape":[6]}},"selected":{"id":"26733","type":"Selection"},"selection_policy":{"id":"26734","type":"UnionRenderers"}},"id":"26704","type":"ColumnDataSource"},{"attributes":{"source":{"id":"26704","type":"ColumnDataSource"}},"id":"26708","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"26706","type":"Rect"},{"attributes":{"callback":null,"data":{"x":["d","e","e","e","e","e","e","e","e","f"],"y":[4.417673150443672,5.5007802388717595,-0.5298341218480389,5.011139930517011,4.83712078038568,5.017938241394713,4.791416939884948,-0.45387591675110306,4.630158428946304,5.4751184568494]},"selected":{"id":"26737","type":"Selection"},"selection_policy":{"id":"26738","type":"UnionRenderers"}},"id":"26714","type":"ColumnDataSource"},{"attributes":{},"id":"26736","type":"UnionRenderers"},{"attributes":{},"id":"26735","type":"Selection"},{"attributes":{"source":{"id":"26699","type":"ColumnDataSource"}},"id":"26703","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"26710","type":"Rect"},{"attributes":{},"id":"26722","type":"CategoricalTickFormatter"},{"attributes":{},"id":"26738","type":"UnionRenderers"},{"attributes":{"source":{"id":"26694","type":"ColumnDataSource"}},"id":"26698","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"2eWxIJKOAkAgtFUYdZEAQIPh211t5wtA4l9lVYLQD0AA4pgHoAUSQAbVgyJPCxRA","dtype":"float64","shape":[6]}},"selected":{"id":"26735","type":"Selection"},"selection_policy":{"id":"26736","type":"UnionRenderers"}},"id":"26709","type":"ColumnDataSource"},{"attributes":{},"id":"26670","type":"CategoricalScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"26716","type":"Circle"},{"attributes":{"source":{"id":"26714","type":"ColumnDataSource"}},"id":"26718","type":"CDSView"},{"attributes":{"data_source":{"id":"26709","type":"ColumnDataSource"},"glyph":{"id":"26710","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26711","type":"Rect"},"selection_glyph":null,"view":{"id":"26713","type":"CDSView"}},"id":"26712","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#F38630"},"line_color":{"value":"#F38630"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"26715","type":"Circle"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#3B8686"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"26700","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"26711","type":"Rect"},{"attributes":{},"id":"26730","type":"UnionRenderers"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f"]},"id":"26666","type":"FactorRange"},{"attributes":{"background_fill_color":{"value":"#efefef"},"below":[{"id":"26674","type":"CategoricalAxis"}],"left":[{"id":"26678","type":"LinearAxis"}],"renderers":[{"id":"26674","type":"CategoricalAxis"},{"id":"26677","type":"Grid"},{"id":"26678","type":"LinearAxis"},{"id":"26682","type":"Grid"},{"id":"26687","type":"GlyphRenderer"},{"id":"26692","type":"GlyphRenderer"},{"id":"26697","type":"GlyphRenderer"},{"id":"26702","type":"GlyphRenderer"},{"id":"26707","type":"GlyphRenderer"},{"id":"26712","type":"GlyphRenderer"},{"id":"26717","type":"GlyphRenderer"}],"title":{"id":"26720","type":"Title"},"toolbar":{"id":"26683","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"26666","type":"FactorRange"},"x_scale":{"id":"26670","type":"CategoricalScale"},"y_range":{"id":"26668","type":"DataRange1d"},"y_scale":{"id":"26672","type":"LinearScale"}},"id":"26665","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"bottom":{"__ndarray__":"ns/5HiENqL/WhlSQhuGuPx+ScbLY5+8/SnzszyU98T+XOuIdx1sAQL5ZQEK8sP8/","dtype":"float64","shape":[6]},"top":{"__ndarray__":"reu0TIB75r/yoNGOl9ziv0sWthc29NE/+sAY2G6q1z/EmNQe8Lf2P3jWKi+e4fQ/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]},"selected":{"id":"26731","type":"Selection"},"selection_policy":{"id":"26732","type":"UnionRenderers"}},"id":"26699","type":"ColumnDataSource"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"26701","type":"VBar"},{"attributes":{"plot":null,"text":""},"id":"26720","type":"Title"},{"attributes":{},"id":"26737","type":"Selection"},{"attributes":{"callback":null,"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"2eWxIJKOAkAgtFUYdZEAQIPh211t5wtA4l9lVYLQD0AA4pgHoAUSQAbVgyJPCxRA","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"izk59NpJ4j+qBv+238znP3pBfd2bP/s/2pwhS18A/T/UFbp1rjsFQFyEKZC7TAZA","dtype":"float64","shape":[6]}},"selected":{"id":"26725","type":"Selection"},"selection_policy":{"id":"26726","type":"UnionRenderers"}},"id":"26684","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"26724","type":"BasicTickFormatter"},"plot":{"id":"26665","subtype":"Figure","type":"Plot"},"ticker":{"id":"26679","type":"BasicTicker"}},"id":"26678","type":"LinearAxis"},{"attributes":{},"id":"26731","type":"Selection"},{"attributes":{},"id":"26734","type":"UnionRenderers"},{"attributes":{},"id":"26729","type":"Selection"},{"attributes":{},"id":"26732","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"26714","type":"ColumnDataSource"},"glyph":{"id":"26715","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26716","type":"Circle"},"selection_glyph":null,"view":{"id":"26718","type":"CDSView"}},"id":"26717","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"26686","type":"Segment"},{"attributes":{},"id":"26675","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"26684","type":"ColumnDataSource"},"glyph":{"id":"26685","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26686","type":"Segment"},"selection_glyph":null,"view":{"id":"26688","type":"CDSView"}},"id":"26687","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"26722","type":"CategoricalTickFormatter"},"major_label_text_font_size":{"value":"12pt"},"plot":{"id":"26665","subtype":"Figure","type":"Plot"},"ticker":{"id":"26675","type":"CategoricalTicker"}},"id":"26674","type":"CategoricalAxis"},{"attributes":{},"id":"26679","type":"BasicTicker"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"26690","type":"Segment"},{"attributes":{},"id":"26725","type":"Selection"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"26685","type":"Segment"},{"attributes":{},"id":"26726","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"26691","type":"Segment"},{"attributes":{},"id":"26733","type":"Selection"},{"attributes":{"grid_line_color":{"value":null},"grid_line_width":{"value":2},"plot":{"id":"26665","subtype":"Figure","type":"Plot"},"ticker":{"id":"26675","type":"CategoricalTicker"}},"id":"26677","type":"Grid"},{"attributes":{"callback":null},"id":"26668","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"m4sitTsvBMCBCz0NKR0DwMg22d/mZfq/9N2GeSuU+L9IDmtQzJzbv9iydCHxK+C/","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"reu0TIB75r/yoNGOl9ziv0sWthc29NE/+sAY2G6q1z/EmNQe8Lf2P3jWKi+e4fQ/","dtype":"float64","shape":[6]}},"selected":{"id":"26727","type":"Selection"},"selection_policy":{"id":"26728","type":"UnionRenderers"}},"id":"26689","type":"ColumnDataSource"},{"attributes":{},"id":"26724","type":"BasicTickFormatter"}],"root_ids":["26665"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"4ea73ad5-948d-418a-b702-7409253197e8","roots":{"26665":"69b69ae2-ebff-4d14-94a4-e8df7ee3ad92"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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