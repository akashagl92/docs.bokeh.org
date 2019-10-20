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
      };var element = document.getElementById("ae5d901f-fe5c-4fd9-8deb-cc2f00218012");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ae5d901f-fe5c-4fd9-8deb-cc2f00218012' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a9ff4027-ee3e-4299-be8b-c9417fbac1f4":{"roots":{"references":[{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"20436","type":"GlyphRenderer"}]},"id":"20445","type":"LegendItem"},{"attributes":{},"id":"20459","type":"UnionRenderers"},{"attributes":{"bottom":{"expr":{"id":"20413","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"20414","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20421","type":"VBar"},{"attributes":{"fields":["2015","2016","2017"]},"id":"20418","type":"Stack"},{"attributes":{"items":[{"id":"20431","type":"LegendItem"},{"id":"20445","type":"LegendItem"},{"id":"20461","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"20391","subtype":"Figure","type":"Plot"}},"id":"20430","type":"Legend"},{"attributes":{"callback":null,"start":0},"id":"20395","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"20410","type":"HoverTool"}]},"id":"20411","type":"Toolbar"},{"attributes":{"callback":null,"tooltips":"$name @fruits: @$name"},"id":"20410","type":"HoverTool"},{"attributes":{},"id":"20406","type":"BasicTicker"},{"attributes":{},"id":"20397","type":"CategoricalScale"},{"attributes":{"bottom":{"expr":{"id":"20415","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"20416","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20434","type":"VBar"},{"attributes":{"fields":["2015","2016"]},"id":"20417","type":"Stack"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"20393","type":"FactorRange"},{"attributes":{"data_source":{"id":"20432","type":"ColumnDataSource"},"glyph":{"id":"20434","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"20435","type":"VBar"},"selection_glyph":null,"view":{"id":"20437","type":"CDSView"}},"id":"20436","type":"GlyphRenderer"},{"attributes":{"bottom":{"expr":{"id":"20417","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20418","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20449","type":"VBar"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"20390","type":"Title"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"20423","type":"GlyphRenderer"}]},"id":"20431","type":"LegendItem"},{"attributes":{"formatter":{"id":"20428","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"20391","subtype":"Figure","type":"Plot"},"ticker":{"id":"20402","type":"CategoricalTicker"}},"id":"20401","type":"CategoricalAxis"},{"attributes":{"formatter":{"id":"20426","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"20391","subtype":"Figure","type":"Plot"},"ticker":{"id":"20406","type":"BasicTicker"}},"id":"20405","type":"LinearAxis"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"20391","subtype":"Figure","type":"Plot"},"ticker":{"id":"20402","type":"CategoricalTicker"}},"id":"20404","type":"Grid"},{"attributes":{"fields":["2015"]},"id":"20414","type":"Stack"},{"attributes":{"dimension":1,"plot":{"id":"20391","subtype":"Figure","type":"Plot"},"ticker":{"id":"20406","type":"BasicTicker"}},"id":"20409","type":"Grid"},{"attributes":{"bottom":{"expr":{"id":"20417","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"20418","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20448","type":"VBar"},{"attributes":{},"id":"20428","type":"CategoricalTickFormatter"},{"attributes":{},"id":"20443","type":"UnionRenderers"},{"attributes":{"fields":[]},"id":"20413","type":"Stack"},{"attributes":{},"id":"20444","type":"Selection"},{"attributes":{"fields":["2015"]},"id":"20415","type":"Stack"},{"attributes":{"source":{"id":"20446","type":"ColumnDataSource"}},"id":"20451","type":"CDSView"},{"attributes":{"source":{"id":"20419","type":"ColumnDataSource"}},"id":"20424","type":"CDSView"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20460","type":"Selection"},"selection_policy":{"id":"20459","type":"UnionRenderers"}},"id":"20432","type":"ColumnDataSource"},{"attributes":{},"id":"20460","type":"Selection"},{"attributes":{"data_source":{"id":"20419","type":"ColumnDataSource"},"glyph":{"id":"20421","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"20422","type":"VBar"},"selection_glyph":null,"view":{"id":"20424","type":"CDSView"}},"id":"20423","type":"GlyphRenderer"},{"attributes":{},"id":"20399","type":"LinearScale"},{"attributes":{"below":[{"id":"20401","type":"CategoricalAxis"}],"left":[{"id":"20405","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"20401","type":"CategoricalAxis"},{"id":"20404","type":"Grid"},{"id":"20405","type":"LinearAxis"},{"id":"20409","type":"Grid"},{"id":"20430","type":"Legend"},{"id":"20423","type":"GlyphRenderer"},{"id":"20436","type":"GlyphRenderer"},{"id":"20450","type":"GlyphRenderer"}],"title":{"id":"20390","type":"Title"},"toolbar":{"id":"20411","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20393","type":"FactorRange"},"x_scale":{"id":"20397","type":"CategoricalScale"},"y_range":{"id":"20395","type":"DataRange1d"},"y_scale":{"id":"20399","type":"LinearScale"}},"id":"20391","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20471","type":"UnionRenderers"},{"attributes":{},"id":"20426","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20444","type":"Selection"},"selection_policy":{"id":"20443","type":"UnionRenderers"}},"id":"20419","type":"ColumnDataSource"},{"attributes":{"source":{"id":"20432","type":"ColumnDataSource"}},"id":"20437","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"20413","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20414","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20422","type":"VBar"},{"attributes":{},"id":"20472","type":"Selection"},{"attributes":{},"id":"20402","type":"CategoricalTicker"},{"attributes":{"fields":["2015","2016"]},"id":"20416","type":"Stack"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"20450","type":"GlyphRenderer"}]},"id":"20461","type":"LegendItem"},{"attributes":{"bottom":{"expr":{"id":"20415","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20416","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20435","type":"VBar"},{"attributes":{"data_source":{"id":"20446","type":"ColumnDataSource"},"glyph":{"id":"20448","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"20449","type":"VBar"},"selection_glyph":null,"view":{"id":"20451","type":"CDSView"}},"id":"20450","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20472","type":"Selection"},"selection_policy":{"id":"20471","type":"UnionRenderers"}},"id":"20446","type":"ColumnDataSource"}],"root_ids":["20391"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"a9ff4027-ee3e-4299-be8b-c9417fbac1f4","roots":{"20391":"ae5d901f-fe5c-4fd9-8deb-cc2f00218012"}}];
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