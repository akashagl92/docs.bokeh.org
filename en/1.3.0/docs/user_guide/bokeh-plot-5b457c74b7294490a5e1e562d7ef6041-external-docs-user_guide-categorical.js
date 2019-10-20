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
      };var element = document.getElementById("2f3a40ab-eac7-43e3-b500-b9a18710ea00");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '2f3a40ab-eac7-43e3-b500-b9a18710ea00' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.0.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"586f4baa-9904-47df-a314-f66f945af968":{"roots":{"references":[{"attributes":{"fields":["2015","2016"]},"id":"20451","type":"Stack"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20494","type":"Selection"},"selection_policy":{"id":"20493","type":"UnionRenderers"}},"id":"20466","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"20447","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"20448","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20455","type":"VBar"},{"attributes":{},"id":"20478","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"20440","type":"BasicTicker"}},"id":"20443","type":"Grid"},{"attributes":{"data_source":{"id":"20466","type":"ColumnDataSource"},"glyph":{"id":"20468","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"20469","type":"VBar"},"selection_glyph":null,"view":{"id":"20471","type":"CDSView"}},"id":"20470","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"20461","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"20436","type":"CategoricalTicker"}},"id":"20435","type":"CategoricalAxis"},{"attributes":{"fields":["2015","2016","2017"]},"id":"20452","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"20451","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"20452","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20482","type":"VBar"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20506","type":"Selection"},"selection_policy":{"id":"20505","type":"UnionRenderers"}},"id":"20480","type":"ColumnDataSource"},{"attributes":{},"id":"20494","type":"Selection"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"20484","type":"GlyphRenderer"}]},"id":"20495","type":"LegendItem"},{"attributes":{"bottom":{"expr":{"id":"20447","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20448","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20456","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"20444","type":"HoverTool"}]},"id":"20445","type":"Toolbar"},{"attributes":{"items":[{"id":"20465","type":"LegendItem"},{"id":"20479","type":"LegendItem"},{"id":"20495","type":"LegendItem"}],"location":"top_left","orientation":"horizontal"},"id":"20464","type":"Legend"},{"attributes":{"data_source":{"id":"20480","type":"ColumnDataSource"},"glyph":{"id":"20482","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"20483","type":"VBar"},"selection_glyph":null,"view":{"id":"20485","type":"CDSView"}},"id":"20484","type":"GlyphRenderer"},{"attributes":{"bottom":{"expr":{"id":"20449","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20450","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20469","type":"VBar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"20427","type":"FactorRange"},{"attributes":{},"id":"20433","type":"LinearScale"},{"attributes":{"fields":["2015"]},"id":"20448","type":"Stack"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"20470","type":"GlyphRenderer"}]},"id":"20479","type":"LegendItem"},{"attributes":{},"id":"20436","type":"CategoricalTicker"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"20457","type":"GlyphRenderer"}]},"id":"20465","type":"LegendItem"},{"attributes":{},"id":"20493","type":"UnionRenderers"},{"attributes":{"bottom":{"expr":{"id":"20451","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20452","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20483","type":"VBar"},{"attributes":{"formatter":{"id":"20463","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"20440","type":"BasicTicker"}},"id":"20439","type":"LinearAxis"},{"attributes":{},"id":"20461","type":"CategoricalTickFormatter"},{"attributes":{},"id":"20505","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20478","type":"Selection"},"selection_policy":{"id":"20477","type":"UnionRenderers"}},"id":"20453","type":"ColumnDataSource"},{"attributes":{"source":{"id":"20453","type":"ColumnDataSource"}},"id":"20458","type":"CDSView"},{"attributes":{"fields":["2015"]},"id":"20449","type":"Stack"},{"attributes":{},"id":"20463","type":"BasicTickFormatter"},{"attributes":{"callback":null,"tooltips":"$name @fruits: @$name"},"id":"20444","type":"HoverTool"},{"attributes":{"below":[{"id":"20435","type":"CategoricalAxis"}],"center":[{"id":"20438","type":"Grid"},{"id":"20443","type":"Grid"},{"id":"20464","type":"Legend"}],"left":[{"id":"20439","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"20457","type":"GlyphRenderer"},{"id":"20470","type":"GlyphRenderer"},{"id":"20484","type":"GlyphRenderer"}],"title":{"id":"20425","type":"Title"},"toolbar":{"id":"20445","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20427","type":"FactorRange"},"x_scale":{"id":"20431","type":"CategoricalScale"},"y_range":{"id":"20429","type":"DataRange1d"},"y_scale":{"id":"20433","type":"LinearScale"}},"id":"20424","subtype":"Figure","type":"Plot"},{"attributes":{"fields":[]},"id":"20447","type":"Stack"},{"attributes":{"text":"Fruit Counts by Year"},"id":"20425","type":"Title"},{"attributes":{},"id":"20440","type":"BasicTicker"},{"attributes":{"fields":["2015","2016"]},"id":"20450","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"20449","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"20450","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20468","type":"VBar"},{"attributes":{"source":{"id":"20466","type":"ColumnDataSource"}},"id":"20471","type":"CDSView"},{"attributes":{},"id":"20506","type":"Selection"},{"attributes":{"data_source":{"id":"20453","type":"ColumnDataSource"},"glyph":{"id":"20455","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"20456","type":"VBar"},"selection_glyph":null,"view":{"id":"20458","type":"CDSView"}},"id":"20457","type":"GlyphRenderer"},{"attributes":{"source":{"id":"20480","type":"ColumnDataSource"}},"id":"20485","type":"CDSView"},{"attributes":{"callback":null,"start":0},"id":"20429","type":"DataRange1d"},{"attributes":{},"id":"20477","type":"UnionRenderers"},{"attributes":{"grid_line_color":null,"ticker":{"id":"20436","type":"CategoricalTicker"}},"id":"20438","type":"Grid"},{"attributes":{},"id":"20431","type":"CategoricalScale"}],"root_ids":["20424"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"586f4baa-9904-47df-a314-f66f945af968","roots":{"20424":"2f3a40ab-eac7-43e3-b500-b9a18710ea00"}}];
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