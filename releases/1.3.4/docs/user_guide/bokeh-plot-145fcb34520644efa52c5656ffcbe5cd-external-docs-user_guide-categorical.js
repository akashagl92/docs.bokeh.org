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
      };var element = document.getElementById("206b04a8-f23c-49c5-ace9-e9550d10d0a8");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '206b04a8-f23c-49c5-ace9-e9550d10d0a8' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.4.min.js"];
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
                    
                  var docs_json = '{"13a0c7c7-f866-4669-98f9-ce7fe24e31da":{"roots":{"references":[{"attributes":{"callback":null,"tooltips":"$name @fruits: @$name"},"id":"20445","type":"HoverTool"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"20471","type":"GlyphRenderer"}]},"id":"20480","type":"LegendItem"},{"attributes":{"data_source":{"id":"20454","type":"ColumnDataSource"},"glyph":{"id":"20456","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"20457","type":"VBar"},"selection_glyph":null,"view":{"id":"20459","type":"CDSView"}},"id":"20458","type":"GlyphRenderer"},{"attributes":{},"id":"20495","type":"UnionRenderers"},{"attributes":{"bottom":{"expr":{"id":"20448","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20449","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20457","type":"VBar"},{"attributes":{"formatter":{"id":"20462","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"20441","type":"BasicTicker"}},"id":"20440","type":"LinearAxis"},{"attributes":{"bottom":{"expr":{"id":"20450","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"20451","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20469","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"20445","type":"HoverTool"}]},"id":"20446","type":"Toolbar"},{"attributes":{"text":"Fruit Counts by Year"},"id":"20426","type":"Title"},{"attributes":{"source":{"id":"20454","type":"ColumnDataSource"}},"id":"20459","type":"CDSView"},{"attributes":{"below":[{"id":"20436","type":"CategoricalAxis"}],"center":[{"id":"20439","type":"Grid"},{"id":"20444","type":"Grid"},{"id":"20465","type":"Legend"}],"left":[{"id":"20440","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"20458","type":"GlyphRenderer"},{"id":"20471","type":"GlyphRenderer"},{"id":"20485","type":"GlyphRenderer"}],"title":{"id":"20426","type":"Title"},"toolbar":{"id":"20446","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20428","type":"FactorRange"},"x_scale":{"id":"20432","type":"CategoricalScale"},"y_range":{"id":"20430","type":"DataRange1d"},"y_scale":{"id":"20434","type":"LinearScale"}},"id":"20425","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"20467","type":"ColumnDataSource"},"glyph":{"id":"20469","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"20470","type":"VBar"},"selection_glyph":null,"view":{"id":"20472","type":"CDSView"}},"id":"20471","type":"GlyphRenderer"},{"attributes":{"fields":["2015"]},"id":"20450","type":"Stack"},{"attributes":{},"id":"20432","type":"CategoricalScale"},{"attributes":{"bottom":{"expr":{"id":"20452","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20453","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20484","type":"VBar"},{"attributes":{},"id":"20462","type":"BasicTickFormatter"},{"attributes":{},"id":"20494","type":"Selection"},{"attributes":{"source":{"id":"20467","type":"ColumnDataSource"}},"id":"20472","type":"CDSView"},{"attributes":{"items":[{"id":"20466","type":"LegendItem"},{"id":"20480","type":"LegendItem"},{"id":"20496","type":"LegendItem"}],"location":"top_left","orientation":"horizontal"},"id":"20465","type":"Legend"},{"attributes":{"formatter":{"id":"20464","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"20437","type":"CategoricalTicker"}},"id":"20436","type":"CategoricalAxis"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"20428","type":"FactorRange"},{"attributes":{},"id":"20506","type":"Selection"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20506","type":"Selection"},"selection_policy":{"id":"20507","type":"UnionRenderers"}},"id":"20481","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"20450","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20451","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20470","type":"VBar"},{"attributes":{},"id":"20479","type":"UnionRenderers"},{"attributes":{"fields":["2015","2016"]},"id":"20451","type":"Stack"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"20485","type":"GlyphRenderer"}]},"id":"20496","type":"LegendItem"},{"attributes":{},"id":"20464","type":"CategoricalTickFormatter"},{"attributes":{"fields":[]},"id":"20448","type":"Stack"},{"attributes":{},"id":"20478","type":"Selection"},{"attributes":{},"id":"20507","type":"UnionRenderers"},{"attributes":{},"id":"20434","type":"LinearScale"},{"attributes":{"grid_line_color":null,"ticker":{"id":"20437","type":"CategoricalTicker"}},"id":"20439","type":"Grid"},{"attributes":{"fields":["2015","2016","2017"]},"id":"20453","type":"Stack"},{"attributes":{},"id":"20437","type":"CategoricalTicker"},{"attributes":{"fields":["2015","2016"]},"id":"20452","type":"Stack"},{"attributes":{"source":{"id":"20481","type":"ColumnDataSource"}},"id":"20486","type":"CDSView"},{"attributes":{"callback":null,"start":0},"id":"20430","type":"DataRange1d"},{"attributes":{},"id":"20441","type":"BasicTicker"},{"attributes":{"data_source":{"id":"20481","type":"ColumnDataSource"},"glyph":{"id":"20483","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"20484","type":"VBar"},"selection_glyph":null,"view":{"id":"20486","type":"CDSView"}},"id":"20485","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"20458","type":"GlyphRenderer"}]},"id":"20466","type":"LegendItem"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20494","type":"Selection"},"selection_policy":{"id":"20495","type":"UnionRenderers"}},"id":"20467","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20478","type":"Selection"},"selection_policy":{"id":"20479","type":"UnionRenderers"}},"id":"20454","type":"ColumnDataSource"},{"attributes":{"fields":["2015"]},"id":"20449","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"20448","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"20449","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20456","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"20452","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"20453","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20483","type":"VBar"},{"attributes":{"dimension":1,"ticker":{"id":"20441","type":"BasicTicker"}},"id":"20444","type":"Grid"}],"root_ids":["20425"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"13a0c7c7-f866-4669-98f9-ce7fe24e31da","roots":{"20425":"206b04a8-f23c-49c5-ace9-e9550d10d0a8"}}];
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
        
        
        }
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