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
      };var element = document.getElementById("9ebb3b30-a569-4017-96ca-1cbf0cc7beed");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9ebb3b30-a569-4017-96ca-1cbf0cc7beed' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f646107f-6a0a-47a5-ae78-c6f799412148":{"roots":{"references":[{"attributes":{"data_source":{"id":"26704","type":"ColumnDataSource"},"glyph":{"id":"26705","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26706","type":"Rect"},"selection_glyph":null,"view":{"id":"26708","type":"CDSView"}},"id":"26707","type":"GlyphRenderer"},{"attributes":{"source":{"id":"26684","type":"ColumnDataSource"}},"id":"26688","type":"CDSView"},{"attributes":{"data_source":{"id":"26684","type":"ColumnDataSource"},"glyph":{"id":"26685","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26686","type":"Segment"},"selection_glyph":null,"view":{"id":"26688","type":"CDSView"}},"id":"26687","type":"GlyphRenderer"},{"attributes":{},"id":"26724","type":"BasicTickFormatter"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#3B8686"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"26700","type":"VBar"},{"attributes":{"callback":null,"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"8LykDocKBUAIRyVd9koEQPde+ONfhAxA6cbbjrtcC0Aq878SWMkSQAS6Mf5a+hJA","dtype":"float64","shape":[6]}},"selected":{"id":"26735","type":"Selection"},"selection_policy":{"id":"26736","type":"UnionRenderers"}},"id":"26709","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"bottom":{"__ndarray__":"L8xuvOwe5T8ULVLGw0PjP+yy7Vxk4vo/5C+QQalP+D+wW9q1g+oFQGi72zTYKwVA","dtype":"float64","shape":[6]},"top":{"__ndarray__":"CnXR2z5oor9maGNlWIeNv4J4OWMQGe8/h09SFX1j7D9nKcsj7vcAQF7zrEphEP8/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]},"selected":{"id":"26729","type":"Selection"},"selection_policy":{"id":"26730","type":"UnionRenderers"}},"id":"26694","type":"ColumnDataSource"},{"attributes":{},"id":"26672","type":"LinearScale"},{"attributes":{},"id":"26722","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"JYi+sPWfBcCqrVxsbfoEwMK0bFWJXfe//sEG2K1g+r8wCz3YJ7Lcvy7hGbRlNuu/","dtype":"float64","shape":[6]}},"selected":{"id":"26733","type":"Selection"},"selection_policy":{"id":"26734","type":"UnionRenderers"}},"id":"26704","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"JYi+sPWfBcCqrVxsbfoEwMK0bFWJXfe//sEG2K1g+r8wCz3YJ7Lcvy7hGbRlNuu/","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"7PiHdmHt5b+exy8DoAHmvwBZWVZII9s/wG+CEIAk0D/aUy0szPT2P6eAArWI9vM/","dtype":"float64","shape":[6]}},"selected":{"id":"26727","type":"Selection"},"selection_policy":{"id":"26728","type":"UnionRenderers"}},"id":"26689","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"26724","type":"BasicTickFormatter"},"plot":{"id":"26665","subtype":"Figure","type":"Plot"},"ticker":{"id":"26679","type":"BasicTicker"}},"id":"26678","type":"LinearAxis"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"26685","type":"Segment"},{"attributes":{},"id":"26737","type":"Selection"},{"attributes":{},"id":"26730","type":"UnionRenderers"},{"attributes":{},"id":"26736","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"26683","type":"Toolbar"},{"attributes":{},"id":"26727","type":"Selection"},{"attributes":{"data_source":{"id":"26694","type":"ColumnDataSource"},"glyph":{"id":"26695","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26696","type":"VBar"},"selection_glyph":null,"view":{"id":"26698","type":"CDSView"}},"id":"26697","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"26714","type":"ColumnDataSource"},"glyph":{"id":"26715","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26716","type":"Circle"},"selection_glyph":null,"view":{"id":"26718","type":"CDSView"}},"id":"26717","type":"GlyphRenderer"},{"attributes":{},"id":"26679","type":"BasicTicker"},{"attributes":{},"id":"26738","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"8LykDocKBUAIRyVd9koEQPde+ONfhAxA6cbbjrtcC0Aq878SWMkSQAS6Mf5a+hJA","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"L8xuvOwe5T8ULVLGw0PjP+yy7Vxk4vo/5C+QQalP+D+wW9q1g+oFQGi72zTYKwVA","dtype":"float64","shape":[6]}},"selected":{"id":"26725","type":"Selection"},"selection_policy":{"id":"26726","type":"UnionRenderers"}},"id":"26684","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"bottom":{"__ndarray__":"CnXR2z5oor9maGNlWIeNv4J4OWMQGe8/h09SFX1j7D9nKcsj7vcAQF7zrEphEP8/","dtype":"float64","shape":[6]},"top":{"__ndarray__":"7PiHdmHt5b+exy8DoAHmvwBZWVZII9s/wG+CEIAk0D/aUy0szPT2P6eAArWI9vM/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]},"selected":{"id":"26731","type":"Selection"},"selection_policy":{"id":"26732","type":"UnionRenderers"}},"id":"26699","type":"ColumnDataSource"},{"attributes":{},"id":"26729","type":"Selection"},{"attributes":{"formatter":{"id":"26722","type":"CategoricalTickFormatter"},"major_label_text_font_size":{"value":"12pt"},"plot":{"id":"26665","subtype":"Figure","type":"Plot"},"ticker":{"id":"26675","type":"CategoricalTicker"}},"id":"26674","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"26711","type":"Rect"},{"attributes":{"source":{"id":"26709","type":"ColumnDataSource"}},"id":"26713","type":"CDSView"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#E08E79"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"26695","type":"VBar"},{"attributes":{},"id":"26732","type":"UnionRenderers"},{"attributes":{},"id":"26670","type":"CategoricalScale"},{"attributes":{"data_source":{"id":"26709","type":"ColumnDataSource"},"glyph":{"id":"26710","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26711","type":"Rect"},"selection_glyph":null,"view":{"id":"26713","type":"CDSView"}},"id":"26712","type":"GlyphRenderer"},{"attributes":{"source":{"id":"26714","type":"ColumnDataSource"}},"id":"26718","type":"CDSView"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":2},"plot":{"id":"26665","subtype":"Figure","type":"Plot"},"ticker":{"id":"26679","type":"BasicTicker"}},"id":"26682","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"26686","type":"Segment"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"26690","type":"Segment"},{"attributes":{"source":{"id":"26699","type":"ColumnDataSource"}},"id":"26703","type":"CDSView"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"26701","type":"VBar"},{"attributes":{"source":{"id":"26704","type":"ColumnDataSource"}},"id":"26708","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"26705","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"26716","type":"Circle"},{"attributes":{"data_source":{"id":"26699","type":"ColumnDataSource"},"glyph":{"id":"26700","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26701","type":"VBar"},"selection_glyph":null,"view":{"id":"26703","type":"CDSView"}},"id":"26702","type":"GlyphRenderer"},{"attributes":{},"id":"26725","type":"Selection"},{"attributes":{},"id":"26726","type":"UnionRenderers"},{"attributes":{"source":{"id":"26689","type":"ColumnDataSource"}},"id":"26693","type":"CDSView"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"26696","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#F38630"},"line_color":{"value":"#F38630"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"26715","type":"Circle"},{"attributes":{"data_source":{"id":"26689","type":"ColumnDataSource"},"glyph":{"id":"26690","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26691","type":"Segment"},"selection_glyph":null,"view":{"id":"26693","type":"CDSView"}},"id":"26692","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"26668","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"26710","type":"Rect"},{"attributes":{"plot":null,"text":""},"id":"26720","type":"Title"},{"attributes":{},"id":"26735","type":"Selection"},{"attributes":{},"id":"26675","type":"CategoricalTicker"},{"attributes":{"callback":null,"data":{"x":["a","a","b","b","b","b","b","c","c","c","c","d","d","e","f","f","f","f"],"y":[-2.738671414724432,-2.9377357913281092,-2.6510022398712283,-2.760799084719324,-2.7850773154577317,2.857333331938745,2.935346834395082,3.996312400305964,-1.5855065509122142,-1.65603680596141,-1.6594838519146218,3.5759281395026306,-1.9291566415188268,5.23976340026548,5.074637328294397,4.796615309563364,5.380121839306382,-0.9671655865121074]},"selected":{"id":"26737","type":"Selection"},"selection_policy":{"id":"26738","type":"UnionRenderers"}},"id":"26714","type":"ColumnDataSource"},{"attributes":{},"id":"26733","type":"Selection"},{"attributes":{},"id":"26734","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"26691","type":"Segment"},{"attributes":{},"id":"26728","type":"UnionRenderers"},{"attributes":{},"id":"26731","type":"Selection"},{"attributes":{"grid_line_color":{"value":null},"grid_line_width":{"value":2},"plot":{"id":"26665","subtype":"Figure","type":"Plot"},"ticker":{"id":"26675","type":"CategoricalTicker"}},"id":"26677","type":"Grid"},{"attributes":{"source":{"id":"26694","type":"ColumnDataSource"}},"id":"26698","type":"CDSView"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f"]},"id":"26666","type":"FactorRange"},{"attributes":{"background_fill_color":{"value":"#efefef"},"below":[{"id":"26674","type":"CategoricalAxis"}],"left":[{"id":"26678","type":"LinearAxis"}],"renderers":[{"id":"26674","type":"CategoricalAxis"},{"id":"26677","type":"Grid"},{"id":"26678","type":"LinearAxis"},{"id":"26682","type":"Grid"},{"id":"26687","type":"GlyphRenderer"},{"id":"26692","type":"GlyphRenderer"},{"id":"26697","type":"GlyphRenderer"},{"id":"26702","type":"GlyphRenderer"},{"id":"26707","type":"GlyphRenderer"},{"id":"26712","type":"GlyphRenderer"},{"id":"26717","type":"GlyphRenderer"}],"title":{"id":"26720","type":"Title"},"toolbar":{"id":"26683","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"26666","type":"FactorRange"},"x_scale":{"id":"26670","type":"CategoricalScale"},"y_range":{"id":"26668","type":"DataRange1d"},"y_scale":{"id":"26672","type":"LinearScale"}},"id":"26665","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"26706","type":"Rect"}],"root_ids":["26665"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"f646107f-6a0a-47a5-ae78-c6f799412148","roots":{"26665":"9ebb3b30-a569-4017-96ca-1cbf0cc7beed"}}];
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