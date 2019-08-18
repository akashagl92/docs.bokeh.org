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
      };var element = document.getElementById("8a18e0f1-c6d0-4fb4-be73-4db8bc0a3ac3");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '8a18e0f1-c6d0-4fb4-be73-4db8bc0a3ac3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a53d51c9-1e70-4bb0-87bb-1622b9beb63d":{"roots":{"references":[{"attributes":{"bottom":{"expr":{"id":"20429","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"20430","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20448","type":"VBar"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20473","type":"Selection"},"selection_policy":{"id":"20474","type":"UnionRenderers"}},"id":"20446","type":"ColumnDataSource"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"20464","type":"GlyphRenderer"}]},"id":"20475","type":"LegendItem"},{"attributes":{},"id":"20485","type":"Selection"},{"attributes":{"bottom":{"expr":{"id":"20427","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"20428","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20435","type":"VBar"},{"attributes":{"data_source":{"id":"20460","type":"ColumnDataSource"},"glyph":{"id":"20462","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"20463","type":"VBar"},"selection_glyph":null,"view":{"id":"20465","type":"CDSView"}},"id":"20464","type":"GlyphRenderer"},{"attributes":{},"id":"20473","type":"Selection"},{"attributes":{"callback":null,"tooltips":"$name @fruits: @$name"},"id":"20424","type":"HoverTool"},{"attributes":{"bottom":{"expr":{"id":"20427","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20428","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20436","type":"VBar"},{"attributes":{},"id":"20458","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20457","type":"Selection"},"selection_policy":{"id":"20458","type":"UnionRenderers"}},"id":"20433","type":"ColumnDataSource"},{"attributes":{"dimension":1,"ticker":{"id":"20420","type":"BasicTicker"}},"id":"20423","type":"Grid"},{"attributes":{},"id":"20420","type":"BasicTicker"},{"attributes":{"data_source":{"id":"20446","type":"ColumnDataSource"},"glyph":{"id":"20448","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"20449","type":"VBar"},"selection_glyph":null,"view":{"id":"20451","type":"CDSView"}},"id":"20450","type":"GlyphRenderer"},{"attributes":{},"id":"20413","type":"LinearScale"},{"attributes":{"source":{"id":"20433","type":"ColumnDataSource"}},"id":"20438","type":"CDSView"},{"attributes":{},"id":"20442","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20485","type":"Selection"},"selection_policy":{"id":"20486","type":"UnionRenderers"}},"id":"20460","type":"ColumnDataSource"},{"attributes":{},"id":"20416","type":"CategoricalTicker"},{"attributes":{"fields":["2015","2016"]},"id":"20430","type":"Stack"},{"attributes":{"below":[{"id":"20415","type":"CategoricalAxis"}],"center":[{"id":"20418","type":"Grid"},{"id":"20423","type":"Grid"},{"id":"20444","type":"Legend"}],"left":[{"id":"20419","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"20437","type":"GlyphRenderer"},{"id":"20450","type":"GlyphRenderer"},{"id":"20464","type":"GlyphRenderer"}],"title":{"id":"20405","type":"Title"},"toolbar":{"id":"20425","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20407","type":"FactorRange"},"x_scale":{"id":"20411","type":"CategoricalScale"},"y_range":{"id":"20409","type":"DataRange1d"},"y_scale":{"id":"20413","type":"LinearScale"}},"id":"20404","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"expr":{"id":"20429","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20430","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20449","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"20431","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"20432","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20462","type":"VBar"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"20437","type":"GlyphRenderer"}]},"id":"20445","type":"LegendItem"},{"attributes":{},"id":"20411","type":"CategoricalScale"},{"attributes":{"formatter":{"id":"20440","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"20420","type":"BasicTicker"}},"id":"20419","type":"LinearAxis"},{"attributes":{"source":{"id":"20446","type":"ColumnDataSource"}},"id":"20451","type":"CDSView"},{"attributes":{"fields":["2015"]},"id":"20428","type":"Stack"},{"attributes":{},"id":"20486","type":"UnionRenderers"},{"attributes":{"fields":["2015"]},"id":"20429","type":"Stack"},{"attributes":{"grid_line_color":null,"ticker":{"id":"20416","type":"CategoricalTicker"}},"id":"20418","type":"Grid"},{"attributes":{"formatter":{"id":"20442","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"20416","type":"CategoricalTicker"}},"id":"20415","type":"CategoricalAxis"},{"attributes":{"bottom":{"expr":{"id":"20431","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20432","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20463","type":"VBar"},{"attributes":{"fields":["2015","2016"]},"id":"20431","type":"Stack"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"20424","type":"HoverTool"}]},"id":"20425","type":"Toolbar"},{"attributes":{},"id":"20440","type":"BasicTickFormatter"},{"attributes":{"text":"Fruit Counts by Year"},"id":"20405","type":"Title"},{"attributes":{"items":[{"id":"20445","type":"LegendItem"},{"id":"20459","type":"LegendItem"},{"id":"20475","type":"LegendItem"}],"location":"top_left","orientation":"horizontal"},"id":"20444","type":"Legend"},{"attributes":{"source":{"id":"20460","type":"ColumnDataSource"}},"id":"20465","type":"CDSView"},{"attributes":{"data_source":{"id":"20433","type":"ColumnDataSource"},"glyph":{"id":"20435","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"20436","type":"VBar"},"selection_glyph":null,"view":{"id":"20438","type":"CDSView"}},"id":"20437","type":"GlyphRenderer"},{"attributes":{},"id":"20474","type":"UnionRenderers"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"20450","type":"GlyphRenderer"}]},"id":"20459","type":"LegendItem"},{"attributes":{},"id":"20457","type":"Selection"},{"attributes":{"fields":["2015","2016","2017"]},"id":"20432","type":"Stack"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"20407","type":"FactorRange"},{"attributes":{"fields":[]},"id":"20427","type":"Stack"},{"attributes":{"callback":null,"start":0},"id":"20409","type":"DataRange1d"}],"root_ids":["20404"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"a53d51c9-1e70-4bb0-87bb-1622b9beb63d","roots":{"20404":"8a18e0f1-c6d0-4fb4-be73-4db8bc0a3ac3"}}];
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