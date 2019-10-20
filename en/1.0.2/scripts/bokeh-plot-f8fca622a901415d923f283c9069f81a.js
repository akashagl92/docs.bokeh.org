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
      };var element = document.getElementById("75e289a0-50ec-44aa-8fe2-f998be4bd3aa");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '75e289a0-50ec-44aa-8fe2-f998be4bd3aa' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"fd0b0e62-d079-45c2-bad1-499d7fa1d806":{"roots":{"references":[{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20441","type":"Selection"},"selection_policy":{"id":"20440","type":"UnionRenderers"}},"id":"20416","type":"ColumnDataSource"},{"attributes":{"fields":["2015","2016","2017"]},"id":"20415","type":"Stack"},{"attributes":{},"id":"20468","type":"UnionRenderers"},{"attributes":{"bottom":{"expr":{"id":"20414","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"20415","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20445","type":"VBar"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"20447","type":"GlyphRenderer"}]},"id":"20458","type":"LegendItem"},{"attributes":{},"id":"20396","type":"LinearScale"},{"attributes":{"bottom":{"expr":{"id":"20410","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20411","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20419","type":"VBar"},{"attributes":{"source":{"id":"20443","type":"ColumnDataSource"}},"id":"20448","type":"CDSView"},{"attributes":{"formatter":{"id":"20424","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"20388","subtype":"Figure","type":"Plot"},"ticker":{"id":"20399","type":"CategoricalTicker"}},"id":"20398","type":"CategoricalAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"20407","type":"HoverTool"}]},"id":"20408","type":"Toolbar"},{"attributes":{"fields":["2015"]},"id":"20412","type":"Stack"},{"attributes":{"items":[{"id":"20428","type":"LegendItem"},{"id":"20442","type":"LegendItem"},{"id":"20458","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"20388","subtype":"Figure","type":"Plot"}},"id":"20427","type":"Legend"},{"attributes":{},"id":"20399","type":"CategoricalTicker"},{"attributes":{"bottom":{"expr":{"id":"20410","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"20411","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20418","type":"VBar"},{"attributes":{},"id":"20469","type":"Selection"},{"attributes":{},"id":"20456","type":"UnionRenderers"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"20433","type":"GlyphRenderer"}]},"id":"20442","type":"LegendItem"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20457","type":"Selection"},"selection_policy":{"id":"20456","type":"UnionRenderers"}},"id":"20429","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20469","type":"Selection"},"selection_policy":{"id":"20468","type":"UnionRenderers"}},"id":"20443","type":"ColumnDataSource"},{"attributes":{},"id":"20424","type":"CategoricalTickFormatter"},{"attributes":{"bottom":{"expr":{"id":"20414","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20415","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20446","type":"VBar"},{"attributes":{"callback":null,"tooltips":"$name @fruits: @$name"},"id":"20407","type":"HoverTool"},{"attributes":{},"id":"20426","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"20416","type":"ColumnDataSource"}},"id":"20421","type":"CDSView"},{"attributes":{"formatter":{"id":"20426","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"20388","subtype":"Figure","type":"Plot"},"ticker":{"id":"20403","type":"BasicTicker"}},"id":"20402","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"20388","subtype":"Figure","type":"Plot"},"ticker":{"id":"20403","type":"BasicTicker"}},"id":"20406","type":"Grid"},{"attributes":{"data_source":{"id":"20416","type":"ColumnDataSource"},"glyph":{"id":"20418","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"20419","type":"VBar"},"selection_glyph":null,"view":{"id":"20421","type":"CDSView"}},"id":"20420","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"20387","type":"Title"},{"attributes":{},"id":"20403","type":"BasicTicker"},{"attributes":{},"id":"20441","type":"Selection"},{"attributes":{"callback":null,"start":0},"id":"20392","type":"DataRange1d"},{"attributes":{},"id":"20457","type":"Selection"},{"attributes":{"fields":["2015","2016"]},"id":"20413","type":"Stack"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"20420","type":"GlyphRenderer"}]},"id":"20428","type":"LegendItem"},{"attributes":{"fields":["2015"]},"id":"20411","type":"Stack"},{"attributes":{"fields":[]},"id":"20410","type":"Stack"},{"attributes":{},"id":"20440","type":"UnionRenderers"},{"attributes":{"fields":["2015","2016"]},"id":"20414","type":"Stack"},{"attributes":{"source":{"id":"20429","type":"ColumnDataSource"}},"id":"20434","type":"CDSView"},{"attributes":{"data_source":{"id":"20443","type":"ColumnDataSource"},"glyph":{"id":"20445","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"20446","type":"VBar"},"selection_glyph":null,"view":{"id":"20448","type":"CDSView"}},"id":"20447","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"20398","type":"CategoricalAxis"}],"left":[{"id":"20402","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"20398","type":"CategoricalAxis"},{"id":"20401","type":"Grid"},{"id":"20402","type":"LinearAxis"},{"id":"20406","type":"Grid"},{"id":"20427","type":"Legend"},{"id":"20420","type":"GlyphRenderer"},{"id":"20433","type":"GlyphRenderer"},{"id":"20447","type":"GlyphRenderer"}],"title":{"id":"20387","type":"Title"},"toolbar":{"id":"20408","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20390","type":"FactorRange"},"x_scale":{"id":"20394","type":"CategoricalScale"},"y_range":{"id":"20392","type":"DataRange1d"},"y_scale":{"id":"20396","type":"LinearScale"}},"id":"20388","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"20429","type":"ColumnDataSource"},"glyph":{"id":"20431","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"20432","type":"VBar"},"selection_glyph":null,"view":{"id":"20434","type":"CDSView"}},"id":"20433","type":"GlyphRenderer"},{"attributes":{"bottom":{"expr":{"id":"20412","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20413","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20432","type":"VBar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"20390","type":"FactorRange"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"20388","subtype":"Figure","type":"Plot"},"ticker":{"id":"20399","type":"CategoricalTicker"}},"id":"20401","type":"Grid"},{"attributes":{"bottom":{"expr":{"id":"20412","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"20413","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20431","type":"VBar"},{"attributes":{},"id":"20394","type":"CategoricalScale"}],"root_ids":["20388"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"fd0b0e62-d079-45c2-bad1-499d7fa1d806","roots":{"20388":"75e289a0-50ec-44aa-8fe2-f998be4bd3aa"}}];
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