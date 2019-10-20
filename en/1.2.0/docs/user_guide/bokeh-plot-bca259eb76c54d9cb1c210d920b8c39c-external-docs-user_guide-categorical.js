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
      };var element = document.getElementById("876a83a1-6941-4eec-a53a-e9e9c14733eb");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '876a83a1-6941-4eec-a53a-e9e9c14733eb' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b1b43b2c-f0d6-4507-8455-eeb71b56ffcb":{"roots":{"references":[{"attributes":{"fields":["2015","2016","2017"]},"id":"20119","type":"Stack"},{"attributes":{"text":"Fruit Counts by Year"},"id":"20094","type":"Title"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20172","type":"Selection"},"selection_policy":{"id":"20173","type":"UnionRenderers"}},"id":"20147","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"20114","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"20115","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20122","type":"VBar"},{"attributes":{},"id":"20160","type":"Selection"},{"attributes":{"data_source":{"id":"20120","type":"ColumnDataSource"},"glyph":{"id":"20122","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"20123","type":"VBar"},"selection_glyph":null,"view":{"id":"20125","type":"CDSView"}},"id":"20124","type":"GlyphRenderer"},{"attributes":{"fields":["2015"]},"id":"20116","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"20115","type":"Stack"},{"attributes":{},"id":"20173","type":"UnionRenderers"},{"attributes":{"bottom":{"expr":{"id":"20114","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20115","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20123","type":"VBar"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"20124","type":"GlyphRenderer"}]},"id":"20132","type":"LegendItem"},{"attributes":{"fields":["2015","2016"]},"id":"20117","type":"Stack"},{"attributes":{},"id":"20129","type":"CategoricalTickFormatter"},{"attributes":{"bottom":{"expr":{"id":"20116","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20117","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20136","type":"VBar"},{"attributes":{"fields":["2015","2016"]},"id":"20118","type":"Stack"},{"attributes":{},"id":"20105","type":"CategoricalTicker"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20144","type":"Selection"},"selection_policy":{"id":"20145","type":"UnionRenderers"}},"id":"20120","type":"ColumnDataSource"},{"attributes":{},"id":"20127","type":"BasicTickFormatter"},{"attributes":{"bottom":{"expr":{"id":"20118","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"20119","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20149","type":"VBar"},{"attributes":{"source":{"id":"20147","type":"ColumnDataSource"}},"id":"20152","type":"CDSView"},{"attributes":{"items":[{"id":"20132","type":"LegendItem"},{"id":"20146","type":"LegendItem"},{"id":"20162","type":"LegendItem"}],"location":"top_left","orientation":"horizontal"},"id":"20131","type":"Legend"},{"attributes":{"data_source":{"id":"20133","type":"ColumnDataSource"},"glyph":{"id":"20135","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"20136","type":"VBar"},"selection_glyph":null,"view":{"id":"20138","type":"CDSView"}},"id":"20137","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"20129","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"20105","type":"CategoricalTicker"}},"id":"20104","type":"CategoricalAxis"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"20151","type":"GlyphRenderer"}]},"id":"20162","type":"LegendItem"},{"attributes":{},"id":"20109","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"20113","type":"Toolbar"},{"attributes":{},"id":"20144","type":"Selection"},{"attributes":{},"id":"20100","type":"CategoricalScale"},{"attributes":{"bottom":{"expr":{"id":"20116","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"20117","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20135","type":"VBar"},{"attributes":{},"id":"20102","type":"LinearScale"},{"attributes":{"grid_line_color":null,"ticker":{"id":"20105","type":"CategoricalTicker"}},"id":"20107","type":"Grid"},{"attributes":{"bottom":{"expr":{"id":"20118","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"20119","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20150","type":"VBar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"20096","type":"FactorRange"},{"attributes":{"formatter":{"id":"20127","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"20109","type":"BasicTicker"}},"id":"20108","type":"LinearAxis"},{"attributes":{"fields":[]},"id":"20114","type":"Stack"},{"attributes":{"below":[{"id":"20104","type":"CategoricalAxis"}],"center":[{"id":"20107","type":"Grid"},{"id":"20112","type":"Grid"},{"id":"20131","type":"Legend"}],"left":[{"id":"20108","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"20124","type":"GlyphRenderer"},{"id":"20137","type":"GlyphRenderer"},{"id":"20151","type":"GlyphRenderer"}],"title":{"id":"20094","type":"Title"},"toolbar":{"id":"20113","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20096","type":"FactorRange"},"x_scale":{"id":"20100","type":"CategoricalScale"},"y_range":{"id":"20098","type":"DataRange1d"},"y_scale":{"id":"20102","type":"LinearScale"}},"id":"20093","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"start":0},"id":"20098","type":"DataRange1d"},{"attributes":{"source":{"id":"20120","type":"ColumnDataSource"}},"id":"20125","type":"CDSView"},{"attributes":{},"id":"20145","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"20109","type":"BasicTicker"}},"id":"20112","type":"Grid"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"20137","type":"GlyphRenderer"}]},"id":"20146","type":"LegendItem"},{"attributes":{},"id":"20172","type":"Selection"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20160","type":"Selection"},"selection_policy":{"id":"20161","type":"UnionRenderers"}},"id":"20133","type":"ColumnDataSource"},{"attributes":{"source":{"id":"20133","type":"ColumnDataSource"}},"id":"20138","type":"CDSView"},{"attributes":{"data_source":{"id":"20147","type":"ColumnDataSource"},"glyph":{"id":"20149","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"20150","type":"VBar"},"selection_glyph":null,"view":{"id":"20152","type":"CDSView"}},"id":"20151","type":"GlyphRenderer"},{"attributes":{},"id":"20161","type":"UnionRenderers"}],"root_ids":["20093"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"b1b43b2c-f0d6-4507-8455-eeb71b56ffcb","roots":{"20093":"876a83a1-6941-4eec-a53a-e9e9c14733eb"}}];
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