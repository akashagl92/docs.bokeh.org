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
      };var element = document.getElementById("d1ae97aa-3f9c-488d-8e5f-56031aaa5ad4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd1ae97aa-3f9c-488d-8e5f-56031aaa5ad4' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"49f85fc0-aec1-4fdd-964e-d60d750c5fcd":{"roots":{"references":[{"attributes":{"fields":["2015","2016","2017"]},"id":"20414","type":"Stack"},{"attributes":{"callback":null,"renderers":"auto","tooltips":"$name @fruits: @$name"},"id":"20406","type":"HoverTool"},{"attributes":{},"id":"20440","type":"UnionRenderers"},{"attributes":{"fields":["2015"]},"id":"20410","type":"Stack"},{"attributes":{},"id":"20402","type":"BasicTicker"},{"attributes":{},"id":"20467","type":"Selection"},{"attributes":{},"id":"20455","type":"Selection"},{"attributes":{},"id":"20393","type":"CategoricalScale"},{"attributes":{"data_source":{"id":"20415","type":"ColumnDataSource"},"glyph":{"id":"20417","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"20418","type":"VBar"},"selection_glyph":null,"view":{"id":"20420","type":"CDSView"}},"id":"20419","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"20432","type":"GlyphRenderer"}]},"id":"20441","type":"LegendItem"},{"attributes":{"formatter":{"id":"20423","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"20387","subtype":"Figure","type":"Plot"},"ticker":{"id":"20398","type":"CategoricalTicker"}},"id":"20397","type":"CategoricalAxis"},{"attributes":{"bottom":{"expr":{"id":"20409","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20410","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20418","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"20409","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"20410","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20417","type":"VBar"},{"attributes":{},"id":"20423","type":"CategoricalTickFormatter"},{"attributes":{"bottom":{"expr":{"id":"20413","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20414","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20445","type":"VBar"},{"attributes":{},"id":"20425","type":"BasicTickFormatter"},{"attributes":{},"id":"20456","type":"UnionRenderers"},{"attributes":{"bottom":{"expr":{"id":"20411","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20412","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20431","type":"VBar"},{"attributes":{"callback":null,"start":0},"id":"20391","type":"DataRange1d"},{"attributes":{"fields":["2015","2016"]},"id":"20412","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"20411","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"20412","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20430","type":"VBar"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20467","type":"Selection"},"selection_policy":{"id":"20468","type":"UnionRenderers"}},"id":"20442","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"20397","type":"CategoricalAxis"}],"left":[{"id":"20401","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"20397","type":"CategoricalAxis"},{"id":"20400","type":"Grid"},{"id":"20401","type":"LinearAxis"},{"id":"20405","type":"Grid"},{"id":"20426","type":"Legend"},{"id":"20419","type":"GlyphRenderer"},{"id":"20432","type":"GlyphRenderer"},{"id":"20446","type":"GlyphRenderer"}],"title":{"id":"20386","type":"Title"},"toolbar":{"id":"20407","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20389","type":"FactorRange"},"x_scale":{"id":"20393","type":"CategoricalScale"},"y_range":{"id":"20391","type":"DataRange1d"},"y_scale":{"id":"20395","type":"LinearScale"}},"id":"20387","subtype":"Figure","type":"Plot"},{"attributes":{"items":[{"id":"20427","type":"LegendItem"},{"id":"20441","type":"LegendItem"},{"id":"20457","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"20387","subtype":"Figure","type":"Plot"}},"id":"20426","type":"Legend"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"20406","type":"HoverTool"}]},"id":"20407","type":"Toolbar"},{"attributes":{"bottom":{"expr":{"id":"20413","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"20414","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20444","type":"VBar"},{"attributes":{},"id":"20395","type":"LinearScale"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"20419","type":"GlyphRenderer"}]},"id":"20427","type":"LegendItem"},{"attributes":{"fields":["2015"]},"id":"20411","type":"Stack"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20455","type":"Selection"},"selection_policy":{"id":"20456","type":"UnionRenderers"}},"id":"20428","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"20428","type":"ColumnDataSource"},"glyph":{"id":"20430","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"20431","type":"VBar"},"selection_glyph":null,"view":{"id":"20433","type":"CDSView"}},"id":"20432","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"20446","type":"GlyphRenderer"}]},"id":"20457","type":"LegendItem"},{"attributes":{"fields":[]},"id":"20409","type":"Stack"},{"attributes":{"dimension":1,"plot":{"id":"20387","subtype":"Figure","type":"Plot"},"ticker":{"id":"20402","type":"BasicTicker"}},"id":"20405","type":"Grid"},{"attributes":{},"id":"20439","type":"Selection"},{"attributes":{"fields":["2015","2016"]},"id":"20413","type":"Stack"},{"attributes":{"source":{"id":"20415","type":"ColumnDataSource"}},"id":"20420","type":"CDSView"},{"attributes":{"source":{"id":"20428","type":"ColumnDataSource"}},"id":"20433","type":"CDSView"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"20387","subtype":"Figure","type":"Plot"},"ticker":{"id":"20398","type":"CategoricalTicker"}},"id":"20400","type":"Grid"},{"attributes":{"formatter":{"id":"20425","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"20387","subtype":"Figure","type":"Plot"},"ticker":{"id":"20402","type":"BasicTicker"}},"id":"20401","type":"LinearAxis"},{"attributes":{"data_source":{"id":"20442","type":"ColumnDataSource"},"glyph":{"id":"20444","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"20445","type":"VBar"},"selection_glyph":null,"view":{"id":"20447","type":"CDSView"}},"id":"20446","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20439","type":"Selection"},"selection_policy":{"id":"20440","type":"UnionRenderers"}},"id":"20415","type":"ColumnDataSource"},{"attributes":{},"id":"20468","type":"UnionRenderers"},{"attributes":{"source":{"id":"20442","type":"ColumnDataSource"}},"id":"20447","type":"CDSView"},{"attributes":{},"id":"20398","type":"CategoricalTicker"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"20389","type":"FactorRange"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"20386","type":"Title"}],"root_ids":["20387"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"49f85fc0-aec1-4fdd-964e-d60d750c5fcd","roots":{"20387":"d1ae97aa-3f9c-488d-8e5f-56031aaa5ad4"}}];
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